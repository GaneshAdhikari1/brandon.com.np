import type { Metadata } from "next";
import { GalleryClient } from "@/components/GalleryClient";
import { PageHero } from "@/components/PageHero";
import { getManagedGallery } from "@/lib/site-data";
import Link from "next/link";
export const metadata:Metadata={title:"Tailoring Gallery",description:"Browse wedding, tuxedo, Daura Suruwal, office and party-wear style directions for ladies and gents."};
export default async function GalleryPage(){const managed=await getManagedGallery();return <><PageHero eyebrow="Gallery" title="Style directions for the moments that matter." copy="Filter by occasion or wearer. Demonstration photographs are labeled and are not presented as completed Brandon work."/><section className="section container"><GalleryClient managed={managed}/></section><section className="contact-band"><div><span className="eyebrow">Have a style in mind?</span><h2>Bring the reference to your consultation.</h2></div><Link className="button button-light" href="/book">Book a Free Consultation</Link></section></>}
