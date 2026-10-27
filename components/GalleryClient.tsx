"use client";

import { useEffect, useState } from "react";

type Item={src:string;title:string;category:string[];audience:string;demo?:boolean};
const suit=(file:string)=>`/images/nepali-luxury-suits-2026/${file}`;
const items:Item[]=[
  {src:suit("01-midnight-navy-relaxed.png"),title:"Midnight navy office suit",category:["Office Wear"],audience:"Gents"},
  {src:suit("15-ink-blue-velvet.png"),title:"Ink blue velvet evening suit",category:["Tuxedos","Party Wear"],audience:"Gents"},
  {src:suit("13-graphite-three-piece.png"),title:"Graphite three-piece wedding suit",category:["Wedding"],audience:"Gents"},
  {src:suit("07-burgundy-double-breasted.png"),title:"Burgundy occasion suit",category:["Wedding","Party Wear"],audience:"Gents"},
  {src:suit("11-cream-summer-business.png"),title:"Cream wedding suit",category:["Wedding"],audience:"Gents"},
  {src:suit("09-navy-windowpane.png"),title:"Navy windowpane business suit",category:["Office Wear"],audience:"Gents"},
  {src:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1400&q=84",title:"Ladies contemporary tailoring direction",category:["Office Wear"],audience:"Ladies",demo:true},
  {src:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=84",title:"Ladies occasion-wear direction",category:["Party Wear"],audience:"Ladies",demo:true},
  {src:"https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1400&q=84",title:"Traditional Nepali dress direction",category:["Daura Suruwal"],audience:"Gents",demo:true},
];
const filters=["All","Wedding","Tuxedos","Daura Suruwal","Office Wear","Party Wear","Ladies","Gents"];

export function GalleryClient({managed=[]}:{managed?:Array<{imageUrl:string;title:string;category:string;audience:string;alt:string;isDemo:boolean}>}){
  const [filter,setFilter]=useState("All"),[active,setActive]=useState<number|null>(null);
  const allItems=[...items,...managed.map(item=>({src:item.imageUrl,title:item.title,category:[item.category],audience:item.audience,demo:item.isDemo}))];
  const visible=allItems.filter(item=>filter==="All"||item.audience===filter||item.category.includes(filter));
  useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(active===null)return;if(e.key==="Escape")setActive(null);if(e.key==="ArrowRight")setActive((active+1)%visible.length);if(e.key==="ArrowLeft")setActive((active-1+visible.length)%visible.length)};addEventListener("keydown",onKey);return()=>removeEventListener("keydown",onKey)},[active,visible.length]);
  return <><div className="gallery-filters" role="toolbar" aria-label="Filter gallery">{filters.map(f=><button type="button" aria-pressed={filter===f} onClick={()=>{setFilter(f);setActive(null)}} key={f}>{f}</button>)}</div><div className="gallery-grid">{visible.map((item,i)=><button type="button" className="gallery-item" key={item.src} onClick={()=>setActive(i)}><img src={item.src} alt={item.title} loading="lazy" /><span><b>{item.title}</b><small>{item.audience}{item.demo?" · Demonstration image":" · Collection image"}</small></span></button>)}</div>{active!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={visible[active].title} onClick={()=>setActive(null)}><button type="button" className="lightbox-close" onClick={()=>setActive(null)} aria-label="Close image preview">×</button><button type="button" className="lightbox-prev" onClick={e=>{e.stopPropagation();setActive((active-1+visible.length)%visible.length)}} aria-label="Previous image">←</button><figure onClick={e=>e.stopPropagation()}><img src={visible[active].src} alt={visible[active].title}/><figcaption>{visible[active].title}{visible[active].demo&&" · Demonstration image, not completed Brandon work"}</figcaption></figure><button type="button" className="lightbox-next" onClick={e=>{e.stopPropagation();setActive((active+1)%visible.length)}} aria-label="Next image">→</button></div>}</>;
}
