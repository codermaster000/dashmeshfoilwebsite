import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { productCategories } from "@/data/site";

const Products = () => (
  <Layout>
    <PageHero
      eyebrow="Our Products"
      title="Crafted label"
      highlight="solutions"
      description="From in-mould to heat transfer — explore our complete catalogue of premium label solutions designed for every industry and substrate."
      crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
    />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((p, i) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elegant border border-border/60 transition-smooth hover:-translate-y-2 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-smooth duration-700 group-hover:scale-110"
                />
                <div className="absolute top-5 left-5 w-11 h-11 rounded-xl glass-dark grid place-items-center text-white text-sm font-bold">
                  0{i + 1}
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.short}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  View details <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Products;
