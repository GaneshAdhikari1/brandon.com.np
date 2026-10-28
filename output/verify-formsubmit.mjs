// Local checks only: all outgoing email requests and database access are mocked.
import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { webcrypto } from "node:crypto";
const require = createRequire(import.meta.url);
const ts = require("typescript");
const transpile = path => ts.transpileModule(fs.readFileSync(path,"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const content = {exports:{}};
new Function("exports","module",transpile("lib/content.ts"))(content.exports,content);
let outgoing = [], providerOk = true, networkFailure = false;
const route = {exports:{}};
const context = vm.createContext({
  exports:route.exports, module:route, crypto:webcrypto, TextEncoder, AbortSignal,
  console:{error(){}},
  require(name) {
    if(name==="next/server")return {NextResponse:{json:(body,options={})=>({body,status:options.status??200})}};
    if(name==="drizzle-orm")return {eq:()=>null};
    if(name==="zod")return require("zod");
    if(name==="@/db")return {getDb(){throw new Error("No optional DB configured")}};
    if(name==="@/db/schema")return {};
    if(name==="@/lib/content")return content.exports;
    throw new Error(`Unexpected dependency ${name}`);
  },
  fetch:async(url,options)=>{
    outgoing.push({url,options});
    if(networkFailure)throw new Error("Simulated network failure");
    return {ok:providerOk,status:providerOk?200:422,json:async()=>({success:providerOk?"true":"false"})};
  },
});
vm.runInContext(transpile("app/api/enquiries/route.ts"),context);
const valid={type:"enquiry",name:"Website setup test",phone:"0000000000",contactMethod:"WhatsApp",collection:"Office Wear Collection",tailoringFor:"Gents",message:"Local mocked test only",consent:"yes",timezone:"Asia/Kathmandu",website:""};
const send=payload=>route.exports.POST({json:async()=>payload,nextUrl:{origin:"http://localhost:5173"},headers:new Headers({referer:"http://localhost:5173/contact"})});
let result=await send({...valid,consent:"no"});
assert.equal(result.status,400);assert.equal(outgoing.length,0);
result=await send({...valid,website:"bot.example"});
assert.equal(result.status,200);assert.equal(outgoing.length,0);
result=await send({...valid,type:"appointment"});
assert.equal(result.status,400);assert.equal(outgoing.length,0);
result=await send(valid);
assert.equal(result.status,200);assert.equal(result.body.delivery,"accepted");
assert.equal(outgoing[0].url,"https://formsubmit.co/ajax/brandonstoresales@gmail.com");
let email=JSON.parse(outgoing[0].options.body);
assert.equal(email["Phone number"],valid.phone);assert.equal(email["Message / design requirements"],valid.message);
assert.equal(email._template,"table");assert.match(email._subject,/enquiry/);
result=await send({...valid,type:"appointment",preferredDate:"2026-10-29",preferredTime:"10:00",eventDate:"2026-11-02"});
assert.equal(result.status,200);
email=JSON.parse(outgoing.at(-1).options.body);
assert.equal(email["Preferred appointment time"],"10:00");assert.equal(email["Event date"],"2026-11-02");assert.match(email._subject,/consultation/);
providerOk=false;result=await send(valid);assert.equal(result.status,502);assert.equal(result.body.ok,false);
networkFailure=true;result=await send(valid);assert.equal(result.status,503);assert.equal(result.body.ok,false);
console.log("Passed: validation, spam trap, appointment requirements, email recipient and fields, DB-independent delivery, provider rejection, network failure. No real emails sent.");
