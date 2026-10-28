"use client";

import { useEffect, useState } from "react";
import { collections } from "@/lib/content";

type Item={src:string;title:string;category:string[];audience:string;demo?:boolean};
const collectionCategories:Record<string,string>={
  "wedding-special":"Wedding",
  "wedding-tuxedos-western-suits":"Tuxedos",
  "daura-suruwal-national-dress":"Daura Suruwal",
  "office-wear":"Office Wear",
  "party-wear":"Party Wear",
};
// Use the same photos as each collection so the gallery stays in sync.
const items:Item[]=collections.flatMap(collection=>collection.gallery.map((src,index)=>{
  const category=collectionCategories[collection.slug];
  const audience=collection.audience==="Ladies & Gents"
    ? (/\/\d+-mens-/.test(src)?"Gents":"Ladies")
    : collection.audience;
  const filename=src.split("/").pop()??"";
  const name=filename.replace(/\.[^.]+$/,"").replace(/^\d+-/,"").replace(/^mens-/,"").replace(/-/g," ");
  return {src,title:`${category} · ${name.charAt(0).toUpperCase()+name.slice(1)} · ${String(index+1).padStart(2,"0")}`,category:[category],audience,demo:collection.demo};
}));
const filters=["All","Wedding","Tuxedos","Daura Suruwal","Office Wear","Party Wear","Ladies","Gents"];

export function GalleryClient({managed=[]}:{managed?:Array<{imageUrl:string;title:string;category:string;audience:string;alt:string;isDemo:boolean}>}){
  const [filter,setFilter]=useState("All"),[active,setActive]=useState<number|null>(null);
  const allItems=[...items,...managed.map(item=>({src:item.imageUrl,title:item.title,category:[item.category],audience:item.audience,demo:item.isDemo}))];
  const visible=allItems.filter(item=>filter==="All"||item.audience===filter||item.category.includes(filter));
  useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(active===null)return;if(e.key==="Escape")setActive(null);if(e.key==="ArrowRight")setActive((active+1)%visible.length);if(e.key==="ArrowLeft")setActive((active-1+visible.length)%visible.length)};addEventListener("keydown",onKey);return()=>removeEventListener("keydown",onKey)},[active,visible.length]);
  return <><div className="gallery-filters" role="toolbar" aria-label="Filter gallery">{filters.map(f=><button type="button" aria-pressed={filter===f} onClick={()=>{setFilter(f);setActive(null)}} key={f}>{f}</button>)}</div><div className="gallery-grid">{visible.map((item,i)=><button type="button" className="gallery-item" key={item.src} onClick={()=>setActive(i)}><img src={item.src} alt={item.title} loading="lazy" /><span><b>{item.title}</b><small>{item.audience}{item.demo?" · Demonstration image":" · Collection image"}</small></span></button>)}</div>{active!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={visible[active].title} onClick={()=>setActive(null)}><button type="button" className="lightbox-close" onClick={()=>setActive(null)} aria-label="Close image preview">×</button><button type="button" className="lightbox-prev" onClick={e=>{e.stopPropagation();setActive((active-1+visible.length)%visible.length)}} aria-label="Previous image">←</button><figure onClick={e=>e.stopPropagation()}><img src={visible[active].src} alt={visible[active].title}/><figcaption>{visible[active].title}{visible[active].demo&&" · Demonstration image, not completed Brandon work"}</figcaption></figure><button type="button" className="lightbox-next" onClick={e=>{e.stopPropagation();setActive((active+1)%visible.length)}} aria-label="Next image">→</button></div>}</>;
}
