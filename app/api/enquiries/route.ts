import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { getDb } from "@/db";
import { enquiries, rateLimits } from "@/db/schema";
import { business, whatsappUrl } from "@/lib/content";

const schema=z.object({type:z.enum(["enquiry","appointment"]),name:z.string().trim().min(2).max(100),phone:z.string().trim().min(7).max(30),contactMethod:z.enum(["WhatsApp","Phone","Viber"]),collection:z.string().trim().min(2).max(120),tailoringFor:z.enum(["Ladies","Gents","Both / group"]),preferredDate:z.string().optional().default(""),preferredTime:z.string().optional().default(""),eventDate:z.string().optional().default(""),message:z.string().trim().min(3).max(2000),consent:z.literal("yes"),timezone:z.literal("Asia/Kathmandu"),website:z.string().optional().default("")});

async function hash(value:string){const bytes=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(value));return [...new Uint8Array(bytes)].map(b=>b.toString(16).padStart(2,"0")).join("")}

export async function POST(request:NextRequest){
  let collection="tailoring options";
  try{
    const parsed=schema.safeParse(await request.json());
    if(!parsed.success)return NextResponse.json({ok:false,error:"Please check the required fields and try again.",fallbackUrl:whatsappUrl(collection)},{status:400});
    const data=parsed.data;collection=data.collection;
    if(data.website)return NextResponse.json({ok:true});
    if(data.type==="appointment"&&(!data.preferredDate||!data.preferredTime))return NextResponse.json({ok:false,error:"Please choose a preferred appointment date and time.",fallbackUrl:whatsappUrl(collection)},{status:400});
    // Email delivery works independently of the optional staff-admin database.
    let db:ReturnType<typeof getDb>|undefined;
    const ip=request.headers.get("cf-connecting-ip")||request.headers.get("x-forwarded-for")?.split(",")[0]||"unknown";
    const key=await hash(`enquiry:${ip}`),now=new Date();
    try {
      db=getDb();
      const previous=await db.select().from(rateLimits).where(eq(rateLimits.key,key)).get();
      if(previous&&now.getTime()-previous.lastRequestAt.getTime()<60_000)return NextResponse.json({ok:false,error:"Please wait a moment before sending another request.",fallbackUrl:whatsappUrl(collection)},{status:429});
    } catch { db=undefined; }

    const source=request.headers.get("referer")||`${request.nextUrl.origin}/${data.type==="appointment"?"book":"contact"}`;
    const emailPayload:Record<string,string>={
      _subject:data.type==="appointment"?"New consultation request — Brandon Tailoring":"New enquiry — Brandon Tailoring",
      _template:"table",
      _url:source,
      _honey:data.website,
      "Request type":data.type==="appointment"?"Free consultation request":"Tailoring enquiry",
      "Full name":data.name,
      "Phone number":data.phone,
      "Preferred contact method":data.contactMethod,
      "Collection or service":data.collection,
      "Tailoring for":data.tailoringFor,
      "Message / design requirements":data.message,
      "Timezone":data.timezone,
      "Consent":"Customer agreed to be contacted about this request",
    };
    if(data.type==="appointment"){
      emailPayload["Preferred appointment date"]=data.preferredDate;
      emailPayload["Preferred appointment time"]=data.preferredTime;
    }
    if(data.eventDate)emailPayload["Event date"]=data.eventDate;

    const delivery=await fetch(`https://formsubmit.co/ajax/${business.email}`,{
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json","Origin":request.nextUrl.origin,"Referer":source},
      body:JSON.stringify(emailPayload),
      signal:AbortSignal.timeout(20_000),
    });
    const result=await delivery.json() as {success?:boolean|string;message?:string};
    if(!delivery.ok||!(result.success===true||result.success==="true")){
      console.error("FormSubmit rejected enquiry",delivery.status);
      return NextResponse.json({ok:false,error:"Your request could not be sent right now. Please try again or contact us on WhatsApp.",fallbackUrl:whatsappUrl(collection)},{status:502});
    }

    if(db){
      try {
        await db.batch([db.insert(enquiries).values({id:crypto.randomUUID(),type:data.type,name:data.name,phone:data.phone,contactMethod:data.contactMethod,collection:data.collection,tailoringFor:data.tailoringFor,preferredDate:data.preferredDate||null,preferredTime:data.preferredTime||null,eventDate:data.eventDate||null,message:data.message,status:"new",createdAt:now}),db.insert(rateLimits).values({key,lastRequestAt:now}).onConflictDoUpdate({target:rateLimits.key,set:{lastRequestAt:now}})]);
      } catch { console.error("Email accepted; optional admin storage unavailable"); }
    }
    return NextResponse.json({ok:true,delivery:"accepted"});
  }catch(error){console.error("Enquiry delivery unavailable",error instanceof Error?error.name:"Unknown error");return NextResponse.json({ok:false,error:"The email service is temporarily unavailable. Please try again or contact us on WhatsApp.",fallbackUrl:whatsappUrl(collection)},{status:503})}
}
