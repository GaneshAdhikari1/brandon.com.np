import type { Metadata } from "next";
import { CollectionCards } from "@/components/CollectionCards";
import { PageHero } from "@/components/PageHero";
import "./collections.css";

export const metadata: Metadata = { title: "Tailoring Collections", description: "Explore wedding suits, tuxedos, Daura Suruwal, office wear and party wear tailoring in Bagbazar, Kathmandu." };
export default function CollectionsPage(){return <><PageHero className="collections-fabric-hero" eyebrow="Collections" title="Five directions. One personal fit." copy="Explore tailoring for weddings, traditional occasions, professional wardrobes and celebrations."/><section className="section container"><CollectionCards /></section></>}
