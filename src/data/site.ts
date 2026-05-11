import imlImg from "@/assets/amul.png";
import shrinkImg from "@/assets/xalta.png";
import foilImg from "@/assets/19-B2vP_W6D.png";
import boppImg from "@/assets/mb.png";
import STICKER from "@/assets/16-BM2i_JPH.png";
import hoco from "@/assets/hoco.png";
import streve from "@/assets/2-waA1HRTp.png";

export type ProductCategory = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
};

export type Market = {
  slug: string;
  title: string;
  short: string;
  description: string;
  useCases: string[];
  relatedProducts: string[]; // product slugs
};

export const productCategories: ProductCategory[] = [
  {
    slug: "iml-labels",
    title: "IML Labels",
    short: "In-mould labels for premium plastic packaging.",
    description:
      "Our IML (In-Mould Labels) are fused into the container during the moulding process, producing a seamless, high-clarity finish that withstands moisture, friction, and refrigeration. Perfect for dairy tubs, ice-cream cups, and premium food packs.",
    features: ["Seamless finish", "Moisture resistant", "Photo-quality print", "100% recyclable"],
    image: imlImg,
  },
  {
    slug: "shrink-sleeve",
    title: "Shrink Sleeve Labels",
    short: "360° decoration that hugs every contour.",
    description:
      "Heat-shrink PVC and PET-G sleeves that conform to any container shape. Ideal for full-body branding on bottles, jars, and cans with vibrant graphics and tamper-evident neck bands.",
    features: ["360° branding", "Tamper-evident", "Vibrant CMYK + spot colors", "PET-G & PVC options"],
    image: shrinkImg,
  },
  {
    slug: "aluminum-lids",
    title: "Aluminium Foil Lids",
    short: "Hygienic seals for cups and containers.",
    description:
      "Heat-sealable aluminium foil lids for dairy cups, yoghurt, ghee, and ready-to-eat meals. Engineered for puncture resistance, easy peel, and an airtight seal that extends shelf life.",
    features: ["Easy peel", "Airtight seal", "Food-grade lacquer", "Custom die-cut shapes"],
    image: foilImg,
  },
  {
    slug: "bopp-labels",
    title: "BOPP Labels",
    short: "Clear and white film labels with a glossy finish.",
    description:
      "Bi-axially Oriented Polypropylene labels deliver a no-label look on transparent bottles and crisp imagery on white film. Water-resistant and freezer-grade for beverages and personal care.",
    features: ["No-label clarity", "Water & oil resistant", "Freezer grade", "Long-lasting adhesion"],
    image: boppImg,
  },
  {
    slug: "sticker-labels",
    title: "Sticker Labels",
    short: "Versatile pressure-sensitive stickers.",
    description:
      "Custom stickers for branding, batch coding, promotions, and product identification. Available in paper, PP, PE, and metallised substrates with a wide range of adhesives.",
    features: ["Multiple substrates", "Permanent or removable", "Variable data printing", "Custom shapes"],
    image: STICKER,
  },
  {
    slug: "self-adhesive-labels",
    title: "Self-Adhesive Labels",
    short: "Peel-and-stick labels for every industry.",
    description:
      "High-tack and removable self-adhesive labels printed on rolls or sheets. Suited for pharma vials, cosmetic bottles, logistics, and barcode labelling with consistent dispensing on automatic lines.",
    features: ["Roll or sheet form", "FDA-compliant adhesives", "Automatic-line ready", "Scratch-resistant inks"],
    image: streve,
  },
  {
    slug: "heat-transfer-labels",
    title: "Heat Transfer Labels",
    short: "Premium decoration that becomes part of the surface.",
    description:
      "Heat-applied labels deliver a no-label, photo-realistic finish on plastic and metal containers. Excellent for cosmetics, lubricants, and premium beverage packaging.",
    features: ["Photo-realistic detail", "Scratch & chemical resistant", "No-label appearance", "Curved-surface ready"],
    image: hoco,
  },
];

export const markets: Market[] = [
  {
    slug: "dairy",
    title: "Dairy",
    short: "Hygienic, refrigeration-grade labels for dairy brands.",
    description:
      "From milk pouches to yoghurt cups and ghee tins, we deliver food-safe labelling that performs in cold-chain conditions while showcasing your brand at retail.",
    useCases: ["Yoghurt & curd cups", "Ghee & butter tins", "Flavoured milk bottles", "Ice-cream tubs"],
    relatedProducts: ["iml-labels", "aluminum-lids", "shrink-sleeve"],
  },
  {
    slug: "beverages",
    title: "Beverages",
    short: "Eye-catching decoration for bottles, cans, and PET packs.",
    description:
      "Whether it's juice, soft drinks, water, or spirits, our labels survive ice buckets, condensation, and high-speed bottling lines while delivering shelf appeal.",
    useCases: ["PET water bottles", "Juice & soft drinks", "Energy drink cans", "Premium spirits"],
    relatedProducts: ["bopp-labels", "shrink-sleeve", "heat-transfer-labels"],
  },
  {
    slug: "foods",
    title: "Foods",
    short: "Tasteful packaging for food brands of every scale.",
    description:
      "Sauces, snacks, spices, ready-to-eat — we craft labels that protect product integrity and tell your brand story across diverse formats and substrates.",
    useCases: ["Sauces & condiments", "Snack packs", "Spice jars", "Ready-to-eat meals"],
    relatedProducts: ["sticker-labels", "self-adhesive-labels", "shrink-sleeve"],
  },
  {
    slug: "pharma-cosmetics",
    title: "Pharma & Cosmetics",
    short: "Compliance-ready labels for regulated industries.",
    description:
      "Pharma and cosmetic brands trust us for precision, regulatory compliance, and premium aesthetics — from vial labels and leaflets to luxurious cosmetic decoration.",
    useCases: ["Vials & ampoules", "Tablet bottles", "Cosmetic jars", "Personal care bottles"],
    relatedProducts: ["self-adhesive-labels", "heat-transfer-labels", "bopp-labels"],
  },
];

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Products",
    to: "/products",
    children: productCategories.map((p) => ({ label: p.title, to: `/products/${p.slug}` })),
  },
  {
    label: "Markets",
    to: "/markets",
    children: markets.map((m) => ({ label: m.title, to: `/markets/${m.slug}` })),
  },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

export const company = {
  name: "Dashmesh Foil",
  tagline: "Label Manufacturer",
  phones: ["+91-9811420447", "+91-9911010101"],
  emails: ["info@dashmeshfoil.com", "sandeep@dashmeshfoil.com"],
  address:
    "Industrial Plot No. 01-2, Industrial Plot No. 1, Village Dabua Western Extended Industrial Area, NIT Faridabad, Faridabad, Haryana - 121001",
};
