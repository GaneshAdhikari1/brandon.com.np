import type { MetadataRoute } from "next";
import { business,collections } from "@/lib/content";
export default function sitemap():MetadataRoute.Sitemap{const routes=["","/collections","/tailoring","/gallery","/about","/book","/contact","/privacy",...collections.map(c=>`/collections/${c.slug}`)];return routes.map(route=>({url:`${business.siteUrl}${route}`,changeFrequency:"monthly",priority:route===""?1:.7}))}
