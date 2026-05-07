import { Link } from "react-router-dom";
import { ArrowRight, Beef, Coffee, Milk, Pill } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { markets } from "@/data/site";

const iconMap: Record<string, typeof Milk> = {
  dairy: Milk,
  beverages: Coffee,
  foods: Beef,
  "pharma-cosmetics": Pill,
};

const Markets = () => (
  <Layout>
    <PageHero
      eyebrow="Markets"
      title="Industries we"
      highlight="serve"
      description="Tailored label solutions for the brands shaping every aisle — engineered for performance in the toughest environments."
      crumbs={[{ label: "Home", to: "/" }, { label: "Markets" }]}
    />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-2 gap-8">
        {markets.map((m) => {
          const Icon = iconMap[m.slug] ?? Milk;
          return (
            <Link
              key={m.slug}
              to={`/markets/${m.slug}`}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elegant border border-border/60 transition-smooth hover:-translate-y-2 p-8"
            >
              <div className="absolute top-6 right-6 text-7xl font-extrabold text-secondary group-hover:text-primary/10 transition-smooth">
                {String(markets.indexOf(m) + 1).padStart(2, "0")}
              </div>
              <div className="w-16 h-16 rounded-2xl gradient-primary grid place-items-center mb-6 shadow-elegant group-hover:scale-110 transition-smooth">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{m.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{m.short}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Explore market <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  </Layout>
);

export default Markets;
