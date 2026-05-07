import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Target, Trophy, Users } from "lucide-react";
import Layout from "@/components/site/Layout";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import factoryImg from "@/assets/about-factory.jpg";

const stats = [
  { n: "15+", l: "Years of Expertise" },
  { n: "1k+", l: "Projects Delivered" },
  { n: "20M+", l: "Labels Printed" },
  { n: "200+", l: "Happy Clients" },
];

const values = [
  { icon: Target, title: "Precision", desc: "Every label is printed to exact specifications using calibrated equipment and rigorous QC." },
  { icon: ShieldCheck, title: "Quality", desc: "ISO-grade processes, food-safe materials, and multi-stage inspections on every batch." },
  { icon: Sparkles, title: "Innovation", desc: "Continuous investment in new substrates, finishes, and printing techniques." },
  { icon: Users, title: "Partnership", desc: "We work as an extension of your team — from concept to delivery." },
];

const About = () => (
  <Layout>
    <PageHero
      eyebrow="About Us"
      title="Crafting premium labels"
      highlight="for premium brands"
      description="Dashmesh Foil is a trusted manufacturer and supplier of packaging material and labels — engineered for performance and designed for the shelf."
      crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
    />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-2xl" />
          <img
            src={factoryImg}
            alt="Dashmesh Foil printing facility"
            loading="lazy"
            className="relative rounded-3xl shadow-elegant w-full h-[500px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-elegant hidden md:flex items-center gap-4">
            <div className="w-12 h-12 rounded-full gradient-primary grid place-items-center">
              <Trophy className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold">Award-winning</div>
              <div className="text-xs text-muted-foreground">Trusted by 200+ brands</div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Who we are</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            A leading <span className="gradient-text">label manufacturer</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Dashmesh Foil is a leading manufacturer and supplier of packaging material and packaging labels. With years
            of expertise and deep product knowledge, our wide range of product lines caters to a myriad of industries —
            including shrink labels, sticker labels, self-adhesive labels, heat transfer labels, IML labels, and more.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Designed with the latest manufacturing techniques and tools, our labels meet the most critical packaging
            needs. Our products find applications in food and beverages, cosmetics, pharmaceuticals, automobiles, and
            many other sectors. We don't just deliver products — we empower businesses with innovative, advanced
            packaging solutions.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "ISO-grade quality systems",
              "Food-safe and FDA-compliant materials",
              "In-house design and prepress",
              "Pan-India delivery network",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="rounded-full gradient-primary border-0 shadow-elegant hover:shadow-glow hover:scale-105 transition-smooth">
            <Link to="/contact">Talk to our team <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-secondary/40 border-y border-border/60">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.l} className="text-center">
            <div className="text-4xl md:text-5xl font-extrabold gradient-text">{s.n}</div>
            <div className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{s.l}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our values</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">What drives <span className="gradient-text">us forward</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-2xl p-7 shadow-card hover:shadow-elegant border border-border/60 transition-smooth hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl gradient-primary grid place-items-center mb-5 shadow-elegant">
                <v.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
