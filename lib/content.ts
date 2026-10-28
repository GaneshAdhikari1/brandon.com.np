export const business = {
  name: "BRANDON SHIRTING & SUITING TAILORING CENTER",
  shortName: "BRANDON",
  phoneDisplay: "+977 9860962354",
  phoneHref: "+9779860962354",
  phoneLocal: "9860962354",
  email: "brandonstoresales@gmail.com",
  whatsapp: "https://wa.me/9779860962354",
  viber: "viber://chat?number=%2B9779860962354",
  facebook: "https://www.facebook.com/brandon.com.nepal",
  tiktok: "https://www.tiktok.com/@brandon.nepal",
  instagram: "https://www.instagram.com/brandonepal/?hl=en",
  location: "Bagbazar 28, Kathmandu, Nepal",
  plusCode: "P83C+XP Kathmandu",
  mapUrl: "https://www.google.com/maps?cid=13026737280109164719",
  mapEmbed: "https://maps.google.com/maps?q=27.7049926%2C85.3218061&z=17&output=embed",
  directions: "https://www.google.com/maps/dir/?api=1&destination=27.7049926%2C85.3218061",
  timezone: "Asia/Kathmandu",
  openingHours: "Monday–Friday: 7 AM–12 AM (midnight)\nSaturday–Sunday: 7 AM–10 PM",
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
const weddingSpecial = (file: string) => `/images/wedding-special-gents/${file}`;
const dauraSuruwal = (file: string) => `/images/daura-suruwal-national-dress/${file}`;
const officeWear = (file: string) => `/images/office-wear-collection/${file}`;
const partyWear = (file: string) => `/images/party-wear-gents/${file}`;

export const collections: Collection[] = [
  {
    slug: "wedding-special",
    title: "Wedding Special Collection",
    eyebrow: "Coordinated occasion tailoring",
    audience: "Gents",
    description: "Custom-tailored wedding suits, coats, pants and waistcoats planned as a refined, coordinated look for the occasion.",
    options: ["Suit, coat and trouser coordination", "Waistcoat styling", "Fabric and colour guidance", "Details discussed during consultation"],
    hero: weddingSpecial("01-groom-look.webp"),
    gallery: [
      weddingSpecial("01-groom-look.webp"),
      weddingSpecial("02-groom-look.webp"),
      weddingSpecial("03-groom-look.webp"),
      weddingSpecial("04-groom-look.webp"),
      weddingSpecial("05-groom-look.webp"),
      weddingSpecial("06-groom-look.webp"),
      weddingSpecial("07-groom-look.webp"),
      weddingSpecial("08-groom-look.webp"),
      weddingSpecial("09-groom-look.webp"),
      weddingSpecial("10-groom-look.webp"),
      weddingSpecial("11-groom-look.webp"),
      weddingSpecial("12-groom-look.webp"),
      weddingSpecial("13-groom-look.webp"),
      weddingSpecial("14-groom-look.webp"),
    ],
  },
  {
    slug: "wedding-tuxedos-western-suits",
    title: "Wedding Tuxedos & Western Suits",
    eyebrow: "Weddings, receptions and evenings",
    audience: "Gents",
    description: "Elegant tuxedos and western-style suits considered for weddings, receptions and other special occasions.",
    options: ["Single or double-breasted styling", "Tuxedo lapel direction", "Shirt and waistcoat coordination", "Finishing details by consultation"],
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
      suit("15-ink-blue-velvet.png"),
      suit("05-black-tonal-pinstripe.png"),
      suit("02-charcoal-double-breasted.png"),
    ],
  },
  {
    slug: "daura-suruwal-national-dress",
    title: "Daura Suruwal & Nepali National Dress",
    eyebrow: "Traditional form, personal fit",
    audience: "Gents",
    description: "Handmade Daura Suruwal and Nepali national dress, with coordinating coat options presented with respect for traditional form.",
    options: ["Daura and Suruwal", "Coordinating coat", "Fabric and colour selection", "Traditional details confirmed in consultation"],
    hero: dauraSuruwal("01-charcoal-coat.webp"),
    gallery: [
      dauraSuruwal("01-charcoal-coat.webp"),
      dauraSuruwal("02-ivory-embroidered-coat.webp"),
      dauraSuruwal("03-navy-bandhgala-coat.webp"),
      dauraSuruwal("04-emerald-brocade-coat.webp"),
      dauraSuruwal("05-burgundy-coat.webp"),
    ],
  },
  {
    slug: "office-wear",
    title: "Office Wear Collection",
    eyebrow: "Professional, comfortable, considered",
    audience: "Ladies & Gents",
    description: "Smart professional clothing tailored around the wearer, workplace and preferred level of formality.",
    options: ["Business suits and separates", "Office shirts and trousers", "Ladies’ professional tailoring", "Fit and fabric guidance"],
    hero: officeWear("02-charcoal-tailored-suit.webp"),
    gallery: [
      officeWear("01-navy-double-breasted-suit.webp"),
      officeWear("02-charcoal-tailored-suit.webp"),
      officeWear("03-olive-belted-suit.webp"),
      officeWear("04-navy-gold-button-suit.webp"),
      officeWear("05-charcoal-studio-suit.webp"),
      officeWear("06-houndstooth-skirt-suit.webp"),
      officeWear("07-trench-office-look.webp"),
      officeWear("08-mens-brown-three-piece.webp"),
      officeWear("09-mens-navy-three-piece.webp"),
      officeWear("10-mens-olive-two-piece.webp"),
      officeWear("11-mens-black-pinstripe-three-piece.webp"),
      officeWear("12-mens-charcoal-three-piece.webp"),
      officeWear("13-mens-slate-blue-three-piece.webp"),
      officeWear("14-mens-burgundy-three-piece.webp"),
      officeWear("15-mens-taupe-three-piece.webp"),
      officeWear("16-mens-navy-windowpane-three-piece.webp"),
      officeWear("17-mens-cream-linen-three-piece.webp"),
      officeWear("18-mens-teal-three-piece.webp"),
      officeWear("19-mens-grey-pinstripe-three-piece.webp"),
      officeWear("20-mens-charcoal-double-breasted.webp"),
      officeWear("21-mens-midnight-navy-two-piece.webp"),
      officeWear("22-mens-black-pinstripe-double-breasted.webp"),
      officeWear("23-mens-blue-velvet-three-piece.webp"),
      officeWear("24-mens-steel-blue-two-piece.webp"),
      officeWear("25-mens-chocolate-two-piece.webp"),
      officeWear("26-mens-forest-green-two-piece.webp"),
      officeWear("27-mens-burgundy-double-breasted.webp"),
      officeWear("28-mens-taupe-open-collar-two-piece.webp"),
      officeWear("29-mens-navy-windowpane-two-piece.webp"),
      officeWear("30-mens-ivory-linen-two-piece.webp"),
      officeWear("31-mens-teal-two-piece.webp"),
      officeWear("32-mens-grey-textured-two-piece.webp"),
      officeWear("33-mens-charcoal-three-piece-straight.webp"),
      officeWear("34-mens-blue-velvet-two-piece.webp"),
      officeWear("35-mens-grey-plaid-three-piece.webp"),
    ],
  },
  {
    slug: "party-wear",
    title: "Party Wear Suits",
    eyebrow: "Celebrations and special events",
    audience: "Gents",
    description: "Modern suits and occasion wear shaped around the event, personal style and desired level of statement.",
    options: ["Contemporary suit silhouettes", "Statement colours and textures", "Gents’ occasion tailoring", "Coordinating separates"],
    hero: partyWear("01-champagne-double-breasted-tuxedo.webp"),
    gallery: [
      partyWear("01-champagne-double-breasted-tuxedo.webp"),
      partyWear("02-teal-bandhgala.webp"),
      partyWear("03-caramel-asymmetric-bandhgala.webp"),
      partyWear("04-gold-green-tuxedo.webp"),
      partyWear("05-black-grey-tuxedo.webp"),
      partyWear("06-ivory-silver-embroidered-suit.webp"),
      partyWear("07-champagne-black-three-piece.webp"),
      partyWear("08-ivory-jacquard-suit.webp"),
      partyWear("09-black-gold-embroidered-tuxedo.webp"),
      partyWear("10-chocolate-three-piece.webp"),
      partyWear("11-navy-clasp-bandhgala.webp"),
      partyWear("12-champagne-black-tuxedo.webp"),
      partyWear("13-black-beaded-tuxedo.webp"),
      partyWear("14-navy-floral-embroidered-suit.webp"),
      partyWear("15-plum-black-tuxedo.webp"),
      partyWear("16-ivory-gold-drape-tuxedo.webp"),
    ],
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
