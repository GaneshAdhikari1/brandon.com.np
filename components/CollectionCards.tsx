import { whatsappUrl } from "@/lib/content";
import { getCollectionsData } from "@/lib/site-data";

export async function CollectionCards({ limit }: { limit?: number }) {
  const collections = await getCollectionsData();
  return <div className="collection-grid">{collections.slice(0, limit).map(collection => (
    <article className="collection-card" key={collection.slug}>
      <a href={`/collections/${collection.slug}`} className="collection-image"><img src={collection.hero} alt={`${collection.title} demonstration style`} loading="lazy" />{collection.demo && <span>Demonstration image</span>}</a>
      <div><span className="audience">{collection.audience}</span><h3><a href={`/collections/${collection.slug}`}>{collection.title}</a></h3><p>{collection.description}</p><div className="card-actions"><a href={`/collections/${collection.slug}`}>View collection</a><a href={whatsappUrl(collection.title)} target="_blank" rel="noreferrer">WhatsApp enquiry</a></div></div>
    </article>
  ))}</div>;
}
