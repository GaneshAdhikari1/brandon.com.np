import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CopyPhoneButton } from "@/components/CopyPhoneButton";
import { FabricPageHero as PageHero } from "@/components/PageHero";
import { business } from "@/lib/content";
import { getBusinessSettings } from "@/lib/site-data";
import { SocialLinks } from "@/components/SocialLinks";
export const metadata:Metadata={title:"Contact Brandon Tailoring",description:"Call, WhatsApp or visit Brandon Tailoring in Bagbazar, Kathmandu, Nepal."};
export default async function ContactPage() {
  const settings = await getBusinessSettings();
  const mapUrl = settings.mapUrl || business.mapUrl;
  return <>
    <PageHero eyebrow="Contact" title="Come with an idea. Start with a conversation." copy="Call, message or send an enquiry to discuss tailoring for ladies and gents." />
    <section className="section container contact-layout">
      <div className="contact-details">
        <article><span>Call</span><h2><a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></h2><p>Local number: {business.phoneLocal}</p></article>
        <article><span>Message</span><div className="button-row"><a className="button" href={business.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a className="button button-outline" href={business.viber}>Open Viber</a></div><CopyPhoneButton number={business.phoneHref} /></article>
        <article style={{gridColumn:"1 / -1"}}>
          <span>Location</span>
          <h2>{settings.exactAddress || business.location}</h2>
          <p>Find BRANDON on Google Maps.<br />Plus code: {business.plusCode}</p>
          <iframe title="Brandon Tailoring location in Bagbazar 28, Kathmandu" src={business.mapEmbed} width="100%" height="300" style={{border:0,display:"block",marginTop:"1.2rem"}} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          <a className="text-link" href={business.directions} target="_blank" rel="noreferrer">Get directions →</a>
          <a className="text-link" href={mapUrl} target="_blank" rel="noreferrer">View BRANDON on Google Maps →</a>
        </article>
        <article style={{gridColumn:"1 / -1"}}><span>Opening hours</span><p style={{whiteSpace:"pre-line"}}>{settings.openingHours || business.openingHours}</p><span>Social</span><SocialLinks /></article>
      </div>
      <div className="contact-form-panel"><span className="eyebrow">Secure enquiry</span><h2>Tell us what you need.</h2><p>Required fields help the tailoring center respond with the right next step. If online submission is unavailable, the form provides a WhatsApp fallback with your chosen service.</p><EnquiryForm /></div>
    </section>
  </>;
}
