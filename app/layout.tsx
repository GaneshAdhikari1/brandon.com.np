import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { business } from "@/lib/content";
import Link from "next/link";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: { default: `${business.name} | Tailoring in Bagbazar Kathmandu`, template: `%s | ${business.shortName}` },
  description: "Ladies and gents tailoring in Bagbazar, Kathmandu for wedding suits, tuxedos, Daura Suruwal, office wear and party wear.",
  openGraph: { title: business.name, description: "Custom tailoring for ladies and gents in Bagbazar, Kathmandu.", type: "website", images: ["/images/mens-luxury-business-suits-2026.png"] },
  icons: { icon: "/brandon-tailors-logo.png", shortcut: "/brandon-tailors-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: business.name,
    url: business.siteUrl,
    telephone: business.phoneHref,
    address: { "@type": "PostalAddress", addressLocality: "Bagbazar", addressRegion: "Kathmandu", addressCountry: "NP" },
    sameAs: [business.facebook, business.tiktok],
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a className="floating-whatsapp" href={business.whatsapp} target="_blank" rel="noreferrer" aria-label="Message Brandon Tailoring on WhatsApp">WhatsApp</a>
        <div className="mobile-actions"><a href={`tel:${business.phoneHref}`}>Call</a><a href={business.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><Link href="/book">Free Consult</Link></div>
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
