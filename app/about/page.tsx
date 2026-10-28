import type { Metadata } from "next";
import { AboutStory } from "@/components/AboutStory";
import { getBusinessSettings } from "@/lib/site-data";
import "./about.css";
export const metadata:Metadata={title:"About Us",description:"About Brandon Shirting & Suiting Tailoring Center in Bagbazar, Kathmandu."};
export default async function AboutPage() {
  const settings = await getBusinessSettings();
  return <AboutStory ownerStory={settings.ownerStory} />;
}
