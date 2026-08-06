import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import faqImage from "@/assets/faq1.png";

const faqs = [
  {
    question: "What types of labels do you manufacture?",
    answer: "We manufacture different types of packaging labels, including BOPP labels, shrink sleeve labels, aluminium foil lids, sticker labels and other customized printed labels.",
  },
  {
    question: "What are BOPP labels?",
    answer: "BOPP labels are strong, lightweight and water-resistant plastic labels. They are commonly used on water bottles, beverages, dairy products, food containers and other packaged products.",
  },
  {
    question: "Are BOPP labels waterproof?",
    answer: "Yes, BOPP labels are moisture-resistant and suitable for products that are stored in refrigerators, freezers or wet conditions.",
  },
  {
    question: "What is a shrink sleeve label?",
    answer: "A shrink sleeve is a printed plastic label that covers the container and takes its shape when heat is applied. It can cover the full bottle or only a selected portion.",
  },
  {
    question: "Where are shrink sleeve labels used?",
    answer: "Shrink sleeves are commonly used on bottles, jars, dairy cups, beverages, cosmetics, medicines and household products.",
  },
  {
    question: "Can shrink sleeves cover the complete bottle?",
    answer: "Yes, shrink sleeves can provide full-body coverage. This gives more space for branding, product information and attractive designs.",
  },
  {
    question: "What are aluminium foil lids?",
    answer: "Aluminium foil lids are printed sealing lids used to close cups and containers. They help protect the product from leakage, dust, moisture and contamination.",
  },
  {
    question: "Where are aluminium foil lids commonly used?",
    answer: "They are commonly used for curd, yogurt, milk products, juices, water cups, medicines, food containers and other sealed packaging.",
  },
  {
    question: "Can you print our brand design on the labels?",
    answer: "Yes, we can print your logo, product details, colours, barcode and complete brand design according to your artwork.",
  },
  {
    question: "Can you help us choose the right label material?",
    answer: "Yes. You can share your product, container type, size and usage requirements, and our team will suggest a suitable label material.",
  },
  {
    question: "Do you provide custom sizes?",
    answer: "Yes, labels and foil lids can be manufactured in different sizes, shapes and thicknesses according to your packaging requirements.",
  },
  {
    question: "What information is required for a quotation?",
    answer: "Please share the label type, size, material, quantity, number of colours and artwork. You can also send a product sample or container image.",
  },
  {
    question: "What is the minimum order quantity?",
    answer: "The minimum order quantity depends on the label type, size, design and printing process. Contact our team for the exact requirement.",
  },
  {
    question: "How long does production take?",
    answer: "Production time depends on the quantity, design approval and type of label. Our team will provide an estimated delivery date after reviewing your requirement.",
  },
  {
    question: "Do you deliver labels across India?",
    answer: "Yes, we can supply and dispatch printed labels to customers across India, depending on the order quantity and delivery location.",
  },
];

const FAQSection = () => (
  <section className="bg-gradient-to-b from-background to-secondary/50 py-20 md:py-24">
    <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
          Frequently Asked Questions
        </span>
        <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          Everything You Need to Know About Our Labels
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          Find simple answers about our label materials, printing options, custom sizes, orders and delivery.
        </p>
        <img
          src={faqImage}
          alt="Packaging label printing, BOPP labels, shrink sleeves and aluminium foil lids"
          className="mx-auto mt-8 h-auto w-full max-w-[460px] object-contain"
        />
      </div>

      <Accordion.Root
        type="single"
        defaultValue="faq-0"
        collapsible
        className="space-y-3"
      >
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={faq.question}
            value={`faq-${index}`}
            className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card transition-smooth data-[state=open]:border-primary/20 data-[state=open]:shadow-elegant"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring sm:px-6">
                <span>{faq.question}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-smooth group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                  <Plus className="col-start-1 row-start-1 h-4 w-4 transition-all duration-300 group-data-[state=open]:scale-0 group-data-[state=open]:opacity-0" aria-hidden="true" />
                  <Minus className="col-start-1 row-start-1 h-4 w-4 scale-0 opacity-0 transition-all duration-300 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100" aria-hidden="true" />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:text-base">
              <div className="px-5 pb-5 pr-16 sm:px-6 sm:pb-6 sm:pr-20">{faq.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  </section>
);

export default FAQSection;
