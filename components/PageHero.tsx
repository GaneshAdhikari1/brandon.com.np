import "./page-hero.css";

type PageHeroProps = {eyebrow:string;title:string;copy:string;className?:string};

export function PageHero({eyebrow,title,copy,className=""}:PageHeroProps){return <section className={`page-hero ${className}`}><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div></section>}

export function FabricPageHero({className="",...props}:PageHeroProps){return <PageHero {...props} className={`fabric-page-hero ${className}`} />}
