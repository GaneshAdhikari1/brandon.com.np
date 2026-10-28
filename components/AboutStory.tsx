import { FabricPageHero as PageHero } from "@/components/PageHero";
import { business } from "@/lib/content";
import { SiteLink as Link } from "@/components/SiteLink";

const milestones = [
  ["2012", "A personal beginning", "Opened our doors as a small, local tailoring shop focusing on custom shirts."],
  ["2016", "A complete wardrobe", "Expanded our services to full bespoke suiting and formal wear."],
  ["2020", "Craft meets modern design", "Upgraded our workshop with modern design tools while preserving traditional hand-stitching techniques."],
  ["Present", "Made for our community", "Proudly serving hundreds of loyal clients, transforming premium fabrics into wearable art."],
];

const team = [
  { name: "Santosh Berdewa", initials: "SB", role: "Master Tailor & Founder", detail: "Founded Brandon in 2012; brings over 14 years of pattern-making and cutting expertise." },
  { name: "Kalpana Katuwal Berdewa", initials: "KB", role: "Senior Stylist & Consultant", detail: "Helps clients select the perfect fabrics, colors, and cuts to match their personal style and occasions." },
  { name: "Kamal Karki", initials: "KK", role: "Master Stitcher", detail: "Focuses on the fine details, ensuring every lapel, buttonhole, and seam is flawless." },
];

const workshopScenes = [
  { src: "/images/workshop-fabric-marking.webp", title: "The precision of the cut", alt: "AI-generated illustration of hands measuring and marking suiting fabric with tailor’s chalk" },
  { src: "/images/workshop-consultation.webp", title: "A conversation about your style", alt: "AI-generated illustration of a tailoring consultation with fabric swatches" },
  { src: "/images/workshop-interior.webp", title: "Where fabric takes shape", alt: "AI-generated illustration of an organized tailoring workshop with suits and sewing machines" },
];

export function AboutStory({ ownerStory }: { ownerStory?: string }) {
  return <>
    <PageHero eyebrow="About us" title="Traditional and modern tailoring, personally considered." copy={`${business.name} serves ladies and gents in Bagbazar, Kathmandu, Nepal.`} />
    <section className="section container founder-story" aria-labelledby="founder-heading">
      <div className="founder-intro">
        <span className="eyebrow">Our founder story</span>
        <h2 id="founder-heading">A single sewing machine.<br /><em>A lasting vision.</em></h2>
        <span className="founder-since">Est. 2012 · Bagbazar, Kathmandu</span>
      </div>
      <div className="founder-prose">
        {ownerStory ? <p className="founder-managed-story">{ownerStory}</p> : <>
          <p>In 2012, <strong>Brandon Shirting and Suiting Tailoring Center</strong> was born out of a simple passion: to bring the timeless elegance of bespoke tailoring to everyday life.</p>
          <p>Our founder started the business with a single sewing machine and a clear vision—to replace mass-produced, ill-fitting garments with clothes that truly fit the individual.</p>
          <p>We believe that a well-tailored suit does more than just look good; it inspires confidence. Over the last decade, we have dedicated ourselves to mastering the perfect cut, sourcing premium fabrics, and ensuring that every client leaves our doors looking and feeling their absolute best.</p>
        </>}
        <Link className="button" href="/book">Book a Free Consultation</Link>
      </div>
    </section>
    <section className="founder-mission" aria-labelledby="mission-heading">
      <figure className="founder-portrait"><img src="/images/brandon-bespoke-tailoring-boutique.webp" alt="Brandon Nepal bespoke tailoring boutique portrait" loading="lazy" /></figure>
      <div className="mission-copy">
        <span className="eyebrow">Our mission</span>
        <h2 id="mission-heading">Perfect fit.<br />Timeless style.<br /><em>Personal confidence.</em></h2>
        <p>Our mission is to <strong>craft premium, custom-tailored apparel that empowers individuals through perfect fit and timeless style.</strong></p>
        <p>We combine traditional craftsmanship with modern design to deliver modern elegance, ensuring every stitch reflects the unique personality and confidence of our clients.</p>
      </div>
    </section>
    <section className="section container workshop-history" aria-labelledby="history-heading">
      <span className="eyebrow">Workshop history</span>
      <h2 id="history-heading">Our journey, stitch by stitch.</h2>
      <ol className="history-timeline">{milestones.map(([year,title,detail]) => <li key={year}><span className="history-year">{year}</span><h3>{title}</h3><p>{detail}</p></li>)}</ol>
    </section>
    <section className="team-section" aria-labelledby="team-heading"><div className="container">
      <span className="eyebrow">The people behind Brandon</span>
      <h2 id="team-heading">Meet our team.</h2>
      <div className="team-cards">{team.map(person => <article key={person.name}>
        <span className="team-initials" aria-hidden="true">{person.initials}</span>
        <h3>{person.name}</h3><span className="team-role">{person.role}</span><p>{person.detail}</p>
      </article>)}</div>
    </div></section>
    <section className="section container workshop-scenes" aria-labelledby="scenes-heading">
      <span className="eyebrow">Inside the craft</span>
      <h2 id="scenes-heading">From first measure to final stitch.</h2>
      <p className="workshop-image-note">AI-generated illustrations of the tailoring process, not photographs of our actual workshop or team.</p>
      <div className="workshop-scene-grid">{workshopScenes.map(scene => <figure key={scene.src}><img src={scene.src} alt={scene.alt} loading="lazy" width={1400} height={933} /><figcaption>{scene.title}</figcaption></figure>)}</div>
    </section>
  </>;
}
