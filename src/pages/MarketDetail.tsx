import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { markets, productCategories } from "@/data/site";

const MarketDetail = () => {
  const { slug } = useParams();
  const market = markets.find((m) => m.slug === slug);
  if (!market) return <Navigate to="/markets" replace />;

  const related = productCategories.filter((p) => market.relatedProducts.includes(p.slug));

  return (
    <Layout>
      <PageHero
        eyebrow="Market"
        title={market.title}
        description={market.short}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Markets", to: "/markets" },
          { label: market.title },
        ]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Industry overview</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Labels for <span className="gradient-text">{market.title}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{market.description}</p>

            <h3 className="font-bold mb-4">Common use cases</h3>
            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {market.useCases.map((u) => (
                <li key={u} className="flex items-start gap-3 bg-card border border-border/60 rounded-xl p-4 shadow-card">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm font-medium">{u}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="rounded-full gradient-primary border-0 shadow-elegant hover:shadow-glow hover:scale-105 transition-smooth">
              <Link to="/contact">Request a quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>

          <aside className="space-y-4">
            <div className="bg-card rounded-2xl border border-border/60 shadow-card p-6">
              <h4 className="font-bold mb-2">Why brands choose us</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Food-safe & FDA-compliant materials</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Cold-chain & moisture resistance</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> High-speed line compatibility</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Pan-India delivery</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Recommended</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3">Related <span className="gradient-text">products</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant border border-border/60 transition-smooth hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-smooth duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{p.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default MarketDetail;
