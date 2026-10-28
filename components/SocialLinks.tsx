import { business } from "@/lib/content";
import { useId } from "react";
import "./social-links.css";

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="12" fill="#1877F2" /><path fill="#fff" d="M13.6 20v-7.3h2.45l.37-2.85H13.6V8.03c0-.83.23-1.4 1.42-1.4h1.52V4.08A20 20 0 0 0 14.32 4c-2.2 0-3.71 1.33-3.71 3.78v2.07H8.12v2.85h2.49V20z" /></svg>;
}

function TikTokIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect width="24" height="24" rx="6" fill="#111" /><path fill="#25F4EE" transform="translate(-.55 .4)" d="M13.1 4h2.7c.2 2 1.4 3.2 3.2 3.4v2.7a7.1 7.1 0 0 1-3.2-1v6.2a4.5 4.5 0 1 1-4.9-4.5v2.8a1.8 1.8 0 1 0 2.2 1.7z" /><path fill="#FE2C55" transform="translate(.55 -.35)" d="M13.1 4h2.7c.2 2 1.4 3.2 3.2 3.4v2.7a7.1 7.1 0 0 1-3.2-1v6.2a4.5 4.5 0 1 1-4.9-4.5v2.8a1.8 1.8 0 1 0 2.2 1.7z" /><path fill="#fff" d="M13.1 4h2.7c.2 2 1.4 3.2 3.2 3.4v2.7a7.1 7.1 0 0 1-3.2-1v6.2a4.5 4.5 0 1 1-4.9-4.5v2.8a1.8 1.8 0 1 0 2.2 1.7z" /></svg>;
}

function InstagramIcon() {
  const gradientId = useId();
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <defs><linearGradient id={gradientId} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#FEDA75" /><stop offset=".35" stopColor="#FA7E1E" /><stop offset=".6" stopColor="#D62976" /><stop offset=".8" stopColor="#962FBF" /><stop offset="1" stopColor="#4F5BD5" /></linearGradient></defs>
    <rect width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
    <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.4" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="16.6" cy="7.6" r="1" fill="#fff" />
  </svg>;
}

export function SocialLinks() {
  return <div className="social-brand-links">
    <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Follow Brandon on Facebook (opens in a new tab)"><FacebookIcon /><span>Facebook</span></a>
    <a href={business.tiktok} target="_blank" rel="noreferrer" aria-label="Follow Brandon on TikTok (opens in a new tab)"><TikTokIcon /><span>TikTok</span></a>
    <a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Follow Brandon on Instagram (opens in a new tab)"><InstagramIcon /><span>Instagram</span></a>
  </div>;
}
