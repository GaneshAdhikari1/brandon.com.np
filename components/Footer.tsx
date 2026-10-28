import { business, collections } from "@/lib/content";
import { SiteLink } from "@/components/SiteLink";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><SiteLink className="footer-brand" href="/"><img src="/brandon-tailors-logo.png" alt="" />BRANDON</SiteLink><p>Personal tailoring for ladies and gents in Bagbazar, Kathmandu, Nepal.</p></div>
        <div><h2>Collections</h2>{collections.slice(0, 4).map(c => <a key={c.slug} href={`/collections/${c.slug}`}>{c.title}</a>)}</div>
        <div><h2>Visit & contact</h2><p>{business.location}</p><a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a><a href={`mailto:${business.email}`}>{business.email}</a><a href={business.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={business.viber}>Viber</a></div>
        <div><h2>Follow</h2><SocialLinks /><a href="/privacy">Privacy notice</a><a href="/admin">Staff admin</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} {business.name}</span><span style={{whiteSpace:"pre-line"}}>{business.openingHours}</span></div>
    </footer>
  );
}
