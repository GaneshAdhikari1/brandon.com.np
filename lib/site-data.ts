import { getDb } from "@/db";
import { businessSettings, collectionOverrides, galleryItems } from "@/db/schema";
import { collections, getCollection, type Collection } from "@/lib/content";

export async function getCollectionsData(): Promise<Collection[]> {
  try {
    const rows = await getDb().select().from(collectionOverrides);
    return collections.map((base) => {
      const override = rows.find((row) => row.slug === base.slug);
      return override ? { ...base, title: override.title, description: override.description, audience: override.audience as Collection["audience"], options: override.options.split(/\r?\n/).filter(Boolean) } : base;
    });
  } catch { return collections; }
}

export async function getCollectionData(slug: string) {
  const base = getCollection(slug); if (!base) return undefined;
  return (await getCollectionsData()).find((item) => item.slug === slug) ?? base;
}

export async function getBusinessSettings() {
  try { return Object.fromEntries((await getDb().select().from(businessSettings)).map((row) => [row.key, row.value])); }
  catch { return {} as Record<string, string>; }
}

export async function getManagedGallery() {
  try { return await getDb().select().from(galleryItems); }
  catch { return []; }
}
