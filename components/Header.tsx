"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/content";
import { SiteLink } from "@/components/SiteLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <div className="topbar">Ladies & gents tailoring · Bagbazar, Kathmandu · Call 9860962354</div>
      <header className="site-header">
        <SiteLink className="brand" href="/" aria-label="Brandon Tailoring home" onClick={() => setOpen(false)}><img src="/brandon-tailors-logo.png" alt="" /><span><b>BRANDON</b><small>Shirting & Suiting Tailoring Center</small></span></SiteLink>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
        <nav id="main-navigation" className={open ? "nav-open" : ""} aria-label="Main navigation">
          {navItems.map(([href, label]) => <SiteLink key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}</SiteLink>)}
          <SiteLink className="button button-small" href="/book" onClick={() => setOpen(false)}>Book a Free Consultation</SiteLink>
        </nav>
      </header>
    </>
  );
}
