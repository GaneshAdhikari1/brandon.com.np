import type { Metadata } from "next";
import { GalleryClient } from "@/components/GalleryClient";
import { FabricPageHero as PageHero } from "@/components/PageHero";
import { getManagedGallery } from "@/lib/site-data";
import { SiteLink as Link } from "@/components/SiteLink";
export const metadata:Metadata={title:"Tailoring Gallery",description:"Browse wedding, tuxedo, Daura Suruwal, office and party-wear style directions for ladies and gents."};
export default async function GalleryPage(){const managed=await getManagedGallery();return <><PageHero eyebrow="Gallery" title="Style directions for the moments that matter." copy="Explore our wedding, tuxedo, Daura Suruwal, office and party wear collections. Filter by occasion or browse ladies’ and gents’ styles."/><section className="section container"><GalleryClient managed={managed}/></section><section className="contact-band"><div><span className="eyebrow">Have a style in mind?</span><h2>Bring the reference to your consultation.</h2></div><Link className="button button-light" href="/book">Book a Free Consultation</Link></section></>}
