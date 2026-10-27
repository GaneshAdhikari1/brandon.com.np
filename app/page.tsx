import { CollectionCards } from "@/components/CollectionCards";
import { SectionHeading } from "@/components/SectionHeading";
import { business, collections, whatsappUrl } from "@/lib/content";
import { SiteLink } from "@/components/SiteLink";

const process = [
  ["01", "Consultation", "Tell us about the occasion, your preferences and what you need."],
  ["02", "Fabric & design", "Compare suitable cloth, colour, silhouette and details."],
  ["03", "Measurements", "A measurement profile guides the cut and proportion."],
  ["04", "Fitting", "The garment is reviewed and adjustments are discussed."],
  ["05", "Final collection", "Collection follows approval of fit and finishing."],
];

export default function Home() {
  return <>
    <section className="home-hero">
      <div className="hero-copy"><span className="eyebrow">Ladies & gents tailoring · Bagbazar</span><h1>Tailored for Your <em>Finest Moments.</em></h1><p>Custom tailoring for ladies and gents in Bagbazar, Kathmandu—from wedding suits and tuxedos to traditional Nepali dress, office wear, and party wear.</p><div className="button-row"><SiteLink className="button button-light" href="/book">Book a Free Consultation</SiteLink><SiteLink className="button button-outline-light" href="/collections">Explore Collections</SiteLink></div></div>
      <div className="hero-images"><figure><img src={collections[0].hero} alt="Wedding suit style from the Brandon collection" /></figure><figure><img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1400&q=84" alt="Demonstration image of modern ladies tailoring" /><figcaption>Demonstration image</figcaption></figure></div>
      <div className="hero-line">Wedding · Traditional · Office · Party</div>
    </section>
    <section className="section container"><SectionHeading eyebrow="Five collections" title="Dress for the moment—and for yourself." copy="Explore traditional and modern tailoring directions. Exact garment options are confirmed with the business before an order begins." /><CollectionCards limit={5} /></section>
    <section className="editorial"><div className="editorial-image"><img src="https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=1800&q=84" alt="Demonstration image of tailoring work in progress" /><span>Demonstration image</span></div><div className="editorial-copy"><span className="eyebrow">Brandon Tailoring</span><h2>Personal style, considered fit.</h2><p>{business.name} serves ladies and gents in Bagbazar, Kathmandu. The focus is simple: understand the occasion, help narrow the choices, and shape the garment around the individual.</p><a className="text-link" href="/about">About the tailoring center →</a></div></section>
    <section className="section navy-section"><div className="container"><SectionHeading eyebrow="The tailoring journey" title="A clear path from idea to garment." copy="This proposed process is editable and should be confirmed by the business before launch." /><div className="process-grid">{process.map(([n,t,c])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
    <section className="section container"><SectionHeading eyebrow="Gallery preview" title="Explore cloth, colour and silhouette." copy="Current images are clearly identified as collection or demonstration imagery until real workshop and client photographs are supplied." /><div className="gallery-preview">{["01-midnight-navy-relaxed.png","07-burgundy-double-breasted.png","11-cream-summer-business.png","12-deep-teal-mohair.png"].map((file,i)=><a href="/gallery" key={file}><img src={`/images/nepali-luxury-suits-2026/${file}`} alt={`Gents tailored suit collection style ${i+1}`} loading="lazy" /></a>)}</div></section>
    <section className="contact-band"><div><span className="eyebrow">Start a conversation</span><h2>Tell us what you’re dressing for.</h2><p>{business.location} · {business.phoneDisplay}</p></div><div className="button-row"><SiteLink className="button button-light" href="/book">Book a Free Consultation</SiteLink><a className="button button-outline-light" href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a></div></section>
  </>;
}
