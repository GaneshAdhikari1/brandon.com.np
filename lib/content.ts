export const business = {
  name: "BRANDON SHIRTING & SUITING TAILORING CENTER",
  shortName: "BRANDON",
  phoneDisplay: "+977 9860962354",
  phoneHref: "+9779860962354",
  phoneLocal: "9860962354",
  whatsapp: "https://wa.me/9779860962354",
  viber: "viber://chat?number=%2B9779860962354",
  facebook: "https://www.facebook.com/brandon.com.nepal",
  tiktok: "https://www.tiktok.com/@brandon.nepal",
  location: "Bagbazar, Kathmandu, Nepal",
  directions: "https://www.google.com/maps/search/?api=1&query=Bagbazar%2C%20Kathmandu%2C%20Nepal",
  timezone: "Asia/Kathmandu",
  siteUrl: "https://brandon-tailors.rajashrim34.chatgpt.site",
};

export type Collection = {
  slug: string;
  title: string;
  eyebrow: string;
  audience: "Ladies" | "Gents" | "Ladies & Gents";
  description: string;
  options: string[];
  hero: string;
  gallery: string[];
  demo?: boolean;
};

const suit = (file: string) => `/images/nepali-luxury-suits-2026/${file}`;
const wedding = (file: string) => `/images/wedding-special-gallery/${file}`;

export const collections: Collection[] = [
  {
    slug: "wedding-special",
    title: "Wedding Special Collection",
    eyebrow: "Coordinated occasion tailoring",
    audience: "Ladies & Gents",
    description: "Custom-tailored wedding suits, coats, pants and waistcoats planned as a refined, coordinated look for the occasion.",
    options: ["Suit, coat and trouser coordination", "Waistcoat styling", "Fabric and colour guidance", "Details discussed during consultation"],
    hero: "/images/wedding-special-embroidered-suit.png",
    gallery: [
      "/images/wedding-special-embroidered-suit.png",
      wedding("01-ivory-black-tuxedo.webp"),
      wedding("02-navy-floral-embroidered-suit.webp"),
      wedding("03-black-gold-embroidered-tuxedo.webp"),
      wedding("04-sand-black-lapel-tuxedo.webp"),
      wedding("05-sand-three-piece-tuxedo.webp"),
      wedding("06-emerald-velvet-tuxedo.webp"),
      wedding("07-burgundy-brocade-suit.webp"),
      wedding("08-navy-bandhgala-suit.webp"),
      wedding("09-copper-bandhgala-suit.webp"),
      wedding("10-teal-bandhgala-suit.webp"),
      wedding("11-ivory-gold-drape-tuxedo.webp"),
      wedding("12-gold-green-embroidered-suit.webp"),
      wedding("13-black-silver-three-piece-suit.webp"),
      wedding("14-black-copper-three-piece-suit.webp"),
      wedding("15-plum-black-tuxedo.webp"),
      wedding("16-black-beaded-tuxedo.webp"),
      wedding("17-ivory-silver-embroidered-suit.webp"),
      wedding("18-chocolate-brown-three-piece-suit.webp"),
      wedding("19-ivory-patterned-suit.webp"),
      suit("11-cream-summer-business.png"),
      suit("07-burgundy-double-breasted.png"),
      suit("13-graphite-three-piece.png"),
    ],
  },
  {
    slug: "wedding-tuxedos-western-suits",
    title: "Wedding Tuxedos & Western Suits",
    eyebrow: "Weddings, receptions and evenings",
    audience: "Gents",
    description: "Elegant tuxedos and western-style suits considered for weddings, receptions and other special occasions.",
    options: ["Single or double-breasted styling", "Tuxedo lapel direction", "Shirt and waistcoat coordination", "Finishing details by consultation"],
    hero: suit("15-ink-blue-velvet.png"),
    gallery: [suit("15-ink-blue-velvet.png"), suit("05-black-tonal-pinstripe.png"), suit("02-charcoal-double-breasted.png")],
  },
  {
    slug: "daura-suruwal-national-dress",
    title: "Daura Suruwal & Nepali National Dress",
    eyebrow: "Traditional form, personal fit",
    audience: "Gents",
    description: "Handmade Daura Suruwal and Nepali national dress, with coordinating coat options presented with respect for traditional form.",
    options: ["Daura and Suruwal", "Coordinating coat", "Fabric and colour selection", "Traditional details confirmed in consultation"],
    hero: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1600&q=82",
    gallery: ["https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1600&q=82", "https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?auto=format&fit=crop&w=1600&q=82"],
    demo: true,
  },
  {
    slug: "office-wear",
    title: "Office Wear Collection",
    eyebrow: "Professional, comfortable, considered",
    audience: "Ladies & Gents",
    description: "Smart professional clothing tailored around the wearer, workplace and preferred level of formality.",
    options: ["Business suits and separates", "Office shirts and trousers", "Ladies’ professional tailoring", "Fit and fabric guidance"],
    hero: suit("06-slate-blue-high-twist-wool.png"),
    gallery: [suit("06-slate-blue-high-twist-wool.png"), suit("09-navy-windowpane.png"), "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1600&q=82"],
    demo: true,
  },
  {
    slug: "party-wear",
    title: "Party Wear Suits",
    eyebrow: "Celebrations and special events",
    audience: "Ladies & Gents",
    description: "Modern suits and occasion wear shaped around the event, personal style and desired level of statement.",
    options: ["Contemporary suit silhouettes", "Statement colours and textures", "Ladies’ occasion tailoring", "Coordinating separates"],
    hero: suit("12-deep-teal-mohair.png"),
    gallery: [suit("12-deep-teal-mohair.png"), suit("07-burgundy-double-breasted.png"), "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1600&q=82"],
    demo: true,
  },
];

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function whatsappUrl(collection = "tailoring options") {
  const message = `Namaste Brandon Tailoring, I’m interested in ${collection}. I would like to discuss tailoring options.`;
  return `${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  ["/", "Home"],
  ["/collections", "Collections"],
  ["/tailoring", "Ladies & Gents"],
  ["/gallery", "Gallery"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;
