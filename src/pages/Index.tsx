import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Phone, Mail, MapPin, ArrowRight, Linkedin, Facebook, Instagram,
  Printer, ScanLine, Sparkles, ShieldCheck, PenTool, Quote, ChevronDown,
  Zap, Layers, Repeat, CheckCircle2, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/site/Layout";
import heroImg from "@/assets/hero-labels.jpg";
import factoryImg from "@/assets/about-factory.jpg";
import { productCategories } from "@/data/site";

const services = [
  { icon: Printer, title: "Printing Service", desc: "Custom high-quality label printing solutions tailored for the dairy, beverage, and pharmaceutical industries." },
  { icon: ScanLine, title: "Digital Scanning", desc: "Advanced scanning technology used to detect imperfections and ensure crisp, clean graphics for every label we print." },
  { icon: Sparkles, title: "Brand Strategy", desc: "Expert guidance on selecting the right materials and finishes to align your packaging with your brand's core values." },
  { icon: ShieldCheck, title: "Quality Guarantee", desc: "Premium quality assured through multi-stage inspections, ensuring every batch meets international packaging standards." },
  { icon: PenTool, title: "Design Services", desc: "Expert design assistance to transform your ideas into shelf-ready labels with high-impact visuals and precise technical specifications." },
];

const process = [
  { n: "01", icon: Zap, title: "Quick Printing", desc: "Fast-track your packaging needs with our high speed printing solutions." },
  { n: "02", icon: Layers, title: "Offset Printing", desc: "High-definition color precision and sharp details for premium quality label production." },
  { n: "03", icon: Repeat, title: "Long Running", desc: "Reliable, consistent quality for large scale production runs." },
  { n: "04", icon: CheckCircle2, title: "Final Results", desc: "Superior quality labels delivered with precision, every single time." },
];

const testimonials = [
  { quote: "Dashmesh Foil is the go-to solution for all our packaging needs. Very professional service.", name: "Ankit Arora", role: "McDowells No.1" },
  { quote: "We are impressed by the material and print quality of all the labels. We admire our partnership.", name: "Himanshu", role: "Bright Life Care" },
  { quote: "Top-notch quality and incredible service! They are the best in the business for high-quality labels and timely delivery.", name: "Foqrul Saheb", role: "Senior Artist Developer" },
];

const brands = ["Amul", "Mother Dairy", "Nestlé", "Britannia", "Patanjali", "Dabur", "Himalaya", "Parle", "ITC", "Haldiram's"];

const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <Layout transparentHeader>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium printed labels on press" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-white animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs font-semibold uppercase tracking-[0.18em] mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Trusted Since Years
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
              Premium Label <br />
              <span className="bg-gradient-to-r from-white via-white to-primary-glow bg-clip-text text-transparent">Printing</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-xl mb-10 leading-relaxed">
              High quality packaging solutions for dairy, beverages, foods, pharma & cosmetics — crafted with precision, delivered with care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-elegant hover:scale-105 transition-smooth border-0 h-14 px-8 font-semibold">
                <Link to="/products">Explore Products <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-primary h-14 px-8 font-semibold transition-smooth">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-14 max-w-2xl">
              {[
                { n: "5k+", l: "Daily Customer" },
                { n: "20M+", l: "Printing Media" },
                { n: "1k+", l: "Projects Done!" },
              ].map((s) => (
                <div key={s.l} className="glass-dark rounded-2xl p-4 md:p-5">
                  <div className="text-3xl md:text-4xl font-extrabold text-white">{s.n}</div>
                  <div className="text-xs md:text-sm text-white/75 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="glass-dark rounded-3xl p-6 w-full max-w-sm animate-float">
              <div className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4">Connect With Us</div>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Call us", value: "+91-9811420447" },
                  { icon: Mail, label: "Email", value: "info@dashmeshfoil.com" },
                  { icon: MapPin, label: "Office", value: "NIT Faridabad, Haryana" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3 text-white">
                    <div className="w-10 h-10 rounded-xl bg-white/15 grid place-items-center shrink-0">
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] uppercase tracking-wider text-white/60">{c.label}</div>
                      <div className="text-sm font-semibold truncate">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-6 pt-5 border-t border-white/15">
                {[Linkedin, Facebook, Instagram].map((I, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-primary text-white grid place-items-center transition-smooth">
                    <I className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2 animate-float">
          Scroll <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gradient-to-b from-secondary/40 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">What we offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Services crafted for <span className="gradient-text">premium brands</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant border border-border/60 transition-smooth hover:-translate-y-2">
                <div className="absolute top-6 right-6 text-5xl font-extrabold text-secondary group-hover:text-primary/10 transition-smooth">0{i + 1}</div>
                <div className="w-14 h-14 rounded-xl gradient-primary grid place-items-center mb-6 shadow-elegant group-hover:scale-110 transition-smooth">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-2xl" />
            <img src={factoryImg} alt="Dashmesh Foil printing facility" loading="lazy" width={1200} height={900}
              className="relative rounded-3xl shadow-elegant w-full h-[500px] object-cover" />
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-elegant hidden md:flex items-center gap-4">
              <div className="w-12 h-12 rounded-full gradient-primary grid place-items-center">
                <ShieldCheck className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold">ISO Certified</div>
                <div className="text-xs text-muted-foreground">Quality you can trust</div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Printing Process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">About <span className="gradient-text">Dashmesh Foil</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Dashmesh Foil is a leading manufacturer & supplier of packaging material & packaging labels.
              With years of expertise & knowledge of products, our wide range of product lines caters to a
              myriad of industries. The wide range of products includes shrink labels, sticker labels,
              self-adhesive labels, heat transfer labels, sticker labels, and others.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Designed with the latest manufacturing techniques & tools, the various kinds of labels meet the
              critical packaging needs. Our products find applications in food & beverages, cosmetics,
              pharmaceuticals, automobiles, and many other sectors.
            </p>
            <Button asChild size="lg" className="rounded-full gradient-primary border-0 shadow-elegant hover:shadow-glow hover:scale-105 transition-smooth h-11 px-8">
              <Link to="/about">Read More <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">Crafted label <span className="gradient-text">solutions</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((p, i) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={800} height={1000}
                    className="w-full h-full object-cover transition-smooth duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/30 to-transparent opacity-90" />
                <div className="absolute top-5 left-5 w-11 h-11 rounded-xl glass-dark grid place-items-center text-white text-sm font-bold">
                  0{i + 1}
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-sm text-white/80 group-hover:text-white transition-smooth">
                    Learn more <ArrowRight className="w-4 h-4 transition-smooth group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 text-white">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">Our process</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">How we do it?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.n} className="glass-dark rounded-2xl p-7 text-white hover:-translate-y-2 transition-smooth">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/15 grid place-items-center">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-extrabold text-white/20">{p.n}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">What our <span className="gradient-text">clients say</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant border border-border/60 transition-smooth hover:-translate-y-2">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/15" />
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
                <div className="pt-5 border-t border-border flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full gradient-primary grid place-items-center text-primary-foreground font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS MARQUEE */}
      <section className="py-16 bg-secondary/40 border-y border-border/60">
        <div className="container mx-auto px-4 lg:px-8 mb-8 text-center">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Trusted by Brands</h3>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <div key={i} className="text-2xl md:text-3xl font-bold text-muted-foreground/60 hover:text-primary transition-smooth">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
