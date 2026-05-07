import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/site";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productCategories.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const others = productCategories.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <Layout>
      <PageHero
        eyebrow="Product"
        title={product.title}
        description={product.short}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: product.title },
        ]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-2xl" />
            <img
              src={product.image}
              alt={product.title}
              className="relative rounded-3xl shadow-elegant w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-elegant hidden md:flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-primary grid place-items-center">
                <Layers className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold">Custom orders</div>
                <div className="text-xs text-muted-foreground">From small to large MOQs</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              About <span className="gradient-text">{product.title}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            <h3 className="font-bold mb-4">Key features</h3>
            <ul className="space-y-3 mb-8">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="rounded-full gradient-primary border-0 shadow-elegant hover:shadow-glow hover:scale-105 transition-smooth">
              <Link to="/contact">Request a quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Other products */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Explore more</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Other <span className="gradient-text">products</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((p) => (
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
    </Layout>
  );
};

export default ProductDetail;
