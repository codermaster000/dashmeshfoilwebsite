import imlImg from "@/assets/amul.png";
import shrinkImg from "@/assets/xalta.png";
import foilImg from "@/assets/19-B2vP_W6D.png";
import boppImg from "@/assets/mb.png";
import STICKER from "@/assets/product-shrink.jpg";
import hoco from "@/assets/hoco.png";
import streve from "@/assets/gallery-foil-rolls.jpg";

export type ProductCategory = {
  slug: string;
  title: string;
  short: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
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
    metaTitle: "Premium IML Labels Manufacturer in Faridabad | Dashmesh Foil",
    metaDescription: "High-quality, moisture resistant in mould labels for plastic containers and ice cream tubs. Custom IML labels for dairy packaging in India. Get a quote!",
    short: "In-mould labels for premium plastic packaging.",
    description:
      "Dashmesh Foil and Labels, a leading premium IML labels manufacturer in Faridabad. We specialize in producing vibrant, highly durable in mould labels manufacturer for ice cream tubs, butter containers, and FMCG packaging. Engineered to fuse seamlessly with plastic containers during molding, our custom IML labels for dairy packaging India offer flawless aesthetics and unparalleled resistance to scratching or peeling. If you are looking for moisture resistant in mould labels for plastic containers that maintain their premium look in cold and humid conditions, our high-precision manufacturing ensures your brand stands out on every shelf.",
    features: ["Seamless finish", "Moisture resistant", "Photo-quality print", "100% recyclable"],
    image: imlImg,
  },
  {
    slug: "shrink-sleeve",
    title: "Shrink Sleeve Labels",
    metaTitle: " Label Manufacturer & Exporter India | Dashmesh Foil and Labels ",
    metaDescription: "Leading manufacturer & exporter of PVC Shrink Labels, BOPP Wrap-around labels, and self-adhesive stickers. High-speed industrial printing for beverages & pharma.",
    short: "360° decoration that hugs every contour.",
    description:
      "Achieve flawless 360-degree branding on contoured containers with our premium wrap-around solutions. We produce high-shrink 360 degree shrink sleeve labels for bottle packaging that fit complex shapes perfectly, ensuring maximum visual real estate for your brand. As an established, custom printed pvc shrink sleeves bulk supplier, we cater to large-scale beverage, cosmetic, and chemical manufacturers requiring high scuff-resistance. For long-lasting, direct-to-product graphics, we also manufacture robust heat transfer labels for plastic promotional mugs and industrial pails that permanently bond with the substrate.",
    features: ["360° branding", "Tamper-evident", "Vibrant CMYK + spot colors", "PET-G & PVC options"],
    image: shrinkImg,
  },
  {
    slug: "aluminum-lids",
    title: "Aluminium Foil Lids",
    metaTitle: "Custom Printed Aluminium Foil Lids Manufacturer | Dashmesh",
    metaDescription: "Leading bulk pharmaceutical blister packing foil supplier in India. Premium heat seal aluminium foil lids for curd, yogurt cups, and plastic tubs.",
    short: "Hygienic seals for cups and containers.",
    description:
      "Ensure ultimate product freshness and leak-proof security with our advanced sealing systems. As a trusted, custom printed aluminium foil lids manufacturer, we provide high-barrier protection engineered specifically for food, beverage, and medical industries. We manufacture heavy-duty aluminium foil lids for curd and yogurt cups that prevent contamination and preserve taste, alongside robust heat seal foil lids for plastic tubs and jars. Additionally, we support pharmaceutical supply chains as a premier bulk pharmaceutical blister packing foil supplier India, delivering exceptional puncture resistance and strict adherence to hygiene standards.",
    features: ["Easy peel", "Airtight seal", "Food-grade lacquer", "Custom die-cut shapes"],
    image: foilImg,
  },
  {
    slug: "bopp-labels",
    title: "BOPP Labels",
    metaTitle: "Waterproof BOPP Sticker Labels for Beverage Bottles & Cosmetics",
    metaDescription: "Custom pressure sensitive sticker labels manufacturer in India. Premium, moisture-proof clear and white BOPP labels for cosmetic jars and bottles.",
    short: "Clear and white film labels with a glossy finish.",
    description:
      "Maximize your product's shelf appeal and durability with our premium film labeling solutions. As a trusted waterproof BOPP sticker labels for beverage bottles manufacturer, we supply high-clarity clear, white, and metallic films that completely resist moisture, oil, and scuffing. These rugged yet visually stunning labels are perfect for the personal care, food, and beverage industries. Partner with a specialized pressure sensitive sticker labels manufacturer India to get custom-engineered custom self adhesive labels for cosmetic jars and bottles, built to perform flawlessly on high-speed automatic labeling lines.",
    features: ["No-label clarity", "Water & oil resistant", "Freezer grade", "Long-lasting adhesion"],
    image: boppImg,
  },
  {
    slug: "sticker-labels",
    title: "Sticker Labels",
    metaTitle: "Pressure Sensitive Sticker Labels Manufacturer India | Dashmesh",
    metaDescription: "Custom self adhesive labels for cosmetic jars and waterproof BOPP sticker labels for beverage bottles. FDA compliant self adhesive pharma labels.",
    short: "Versatile pressure-sensitive stickers.",
    description:
      "Enhance your product presentation with high-performance labeling designed for demanding industries. Dashmesh Foil manufactures FDA compliant self adhesive pharma labels and retail packaging stickers that ensure complete legal compliance and durability. From sophisticated, custom self adhesive labels for cosmetic jars to ultra-durable, waterproof BOPP sticker labels for beverage bottles, our printing technology delivers razor-sharp clarity. Partner with a premier pressure sensitive sticker labels manufacturer India to get custom roll or sheet labels that seamlessly integrate into your high-speed automated labeling lines.",
    features: ["Multiple substrates", "Permanent or removable", "Variable data printing", "Custom shapes"],
    image: STICKER,
  },
  {
    slug: "self-adhesive-labels",
    title: "Self-Adhesive Labels",
    metaTitle: "Pressure Sensitive Sticker Labels Manufacturer India | Dashmesh",
    metaDescription: "Custom self adhesive labels for cosmetic jars and waterproof BOPP sticker labels for beverage bottles. FDA compliant self adhesive pharma labels.",
    short: "Peel-and-stick labels for every industry.",
    description:
      "Enhance your product presentation with high-performance labeling designed for demanding industries. Dashmesh Foil manufactures FDA compliant self adhesive pharma labels and retail packaging stickers that ensure complete legal compliance and durability. From sophisticated, custom self adhesive labels for cosmetic jars to ultra-durable, waterproof BOPP sticker labels for beverage bottles, our printing technology delivers razor-sharp clarity. Partner with a premier pressure sensitive sticker labels manufacturer India to get custom roll or sheet labels that seamlessly integrate into your high-speed automated labeling lines.",
    features: ["Roll or sheet form", "FDA-compliant adhesives", "Automatic-line ready", "Scratch-resistant inks"],
    image: streve,
  },
  {
    slug: "heat-transfer-labels",
    title: "Heat Transfer Labels",
    metaTitle: "Heat Transfer Labels for Plastic Promotional Mugs & Pails",
    metaDescription: "High-definition heat transfer labels manufacturer in Delhi NCR. Permanent, scratch-resistant HTL graphics for rigid plastic products and containers.",
    short: "Premium decoration that becomes part of the surface.",
    description:
      "Achieve permanent, high-definition graphics directly on your plastic products with our advanced thermal transfer technology. We manufacture vibrant heat transfer labels for plastic promotional mugs, household buckets, and industrial pails that fuse flawlessly with the container surface. This process ensures your branding is entirely scratch-resistant, chemical-proof, and long-lasting. As a leading industrial packaging label manufacturer in Delhi NCR, our facility delivers bulk rolls with exact registration, making us the preferred b2b packaging labels supplier Faridabad haryana for brands requiring premium, no-label-look aesthetics on rigid plastics.",
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
 {label: "Blog", to: "https://dashmeshfoil.com/blog/" },
  { label: "Contact", to: "/contact" },
];

export const company = {
  name: "Dashmesh Foil",
  tagline: "Label Manufacturer",
  phones: ["+91-9218109650"],
  emails: ["info@dashmeshfoil.com", "sandeep@dashmeshfoil.com"],
  address:
    "Industrial Plot No. 01-2, Industrial Plot No. 1, Village Dabua Western Extended Industrial Area, NIT Faridabad, Faridabad, Haryana - 121001",
};
