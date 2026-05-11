import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Beaker,
  CheckCircle2,
  Droplets,
  Factory,
  GlassWater,
  Layers3,
  PackageCheck,
  Printer,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Truck,
  Zap,
} from "lucide-react";
import Layout from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import ProjectGallery from "@/components/site/ProjectGallery";
import amul from "@/assets/amul.png";

import heroBg from "@/assets/projects-hero.jpg";

import shrinkImg from "@/assets/xalta.png";
import foilImg from "@/assets/mb.png";
import boppImg from "@/assets/hoco.png";

/* ---------------- Data ---------------- */

const brands = [
  "Amul",
  "Mother Dairy",
  "HOCO",
  "Xalta Food & Beverages",
  "Milky Mist",
  "Hatsun",
  "Country Delight",
  "MuscleBlaze",
];

const projects = [
  {
    brand: "Amul",
    title: "Dairy Packaging Solutions",
    category: "Dairy",
    type: "IML & Foil Lids",
    description:
      "End-to-end in-mould labelling and aluminium lid programs powering yoghurt cups, ghee tins and ice-cream tubs across India.",
    image: amul,
  },
  {
    brand: "Xalta Beverages",
    title: "Beverage Foil Packaging",
    category: "Beverage",
    type: "Shrink Sleeves & BOPP",
    description:
      "Cinematic 360° shrink decoration and crystal-clear BOPP labels engineered for high-speed bottling and ice-bath survival.",
    image: shrinkImg,
  },
  {
    brand: "MuscleBlaze",
    title: "Nutrition Product Packaging",
    category: "Nutrition",
    type: "Heat Transfer & Self-Adhesive",
    description:
      "Premium photo-realistic decoration for protein tubs, sachets and supplements with scratch and chemical resistance.",
    image: foilImg,
  },
  {
    brand: "HOCO / FMCG",
    title: "Flexible FMCG Packaging",
    category: "FMCG",
    type: "Flexible Pouches & Films",
    description:
      "High-barrier flexible lables and printed films delivering shelf-stable, food-grade packaging at industrial scale.",
    image: boppImg,
  },
];

const industries = [
  { icon: Droplets, label: "Dairy" },
  { icon: GlassWater, label: "Beverage" },
  { icon: PackageCheck, label: "FMCG" },
  { icon: Beaker, label: "Nutrition" },
  { icon: Snowflake, label: "Frozen Foods" },
  { icon: Layers3, label: "Flexible Packaging" },
];

const stats = [
  { value: 500, suffix: "+", label: "Tons Production Capacity" },
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 10, suffix: "+", label: "Industries" },
  { value: 100, suffix: "%", label: "Pan India Supply" },
];

const whyUs = [
  { icon: Printer, title: "High Quality Printing", text: "10-color flexo & rotogravure precision." },
  { icon: ShieldCheck, title: "Food Grade Materials", text: "FDA-compliant, BRC certified substrates." },
  { icon: Factory, title: "Advanced Manufacturing", text: "Automated lines with inline QA." },
  { icon: Truck, title: "Timely Delivery", text: "Pan-India logistics with on-time SLAs." },
  { icon: Sparkles, title: "Custom Packaging", text: "Bespoke structures for every brand." },
  { icon: Award, title: "Reliable Standards", text: "ISO 9001:2015 production discipline." },
];

/* ---------------- Helpers ---------------- */

function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

/* ---------------- Page ---------------- */

const Projects = () => {
  return (
    <Layout transparentHeader>
      {/* Local dark theme wrapper */}
      <div className="bg-[#07090d] text-slate-100">
        {/* HERO */}
        <section className="relative min-h-[100vh] flex items-center overflow-hidden">
          <img
            src={heroBg}
            alt="Premium metallic foil texture"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#07090d]" />
          {/* animated gradient lighting */}
          <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-primary/30 blur-[140px] animate-float" />
          <div
            className="absolute -bottom-40 -right-40 w-[42rem] h-[42rem] rounded-full bg-[hsl(212_85%_58%/0.25)] blur-[160px] animate-float"
            style={{ animationDelay: "2s" }}
          />
          {/* floating foil shards */}
          <div className="absolute top-1/4 right-[12%] w-24 h-24 rounded-2xl border border-white/10 bg-gradient-to-br from-white/15 to-white/0 backdrop-blur-md rotate-12 animate-float hidden md:block" />
          <div
            className="absolute bottom-1/4 left-[8%] w-16 h-16 rounded-xl border border-white/10 bg-gradient-to-br from-white/15 to-white/0 backdrop-blur-md -rotate-12 animate-float hidden md:block"
            style={{ animationDelay: "1.5s" }}
          />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
            <div className="max-w-4xl animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur text-xs uppercase tracking-[0.25em] text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-[hsl(212_85%_70%)]" />
                Our Projects
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05]">
                Packaging Solutions{" "}
                <span className="bg-gradient-to-r from-white via-slate-300 to-[hsl(212_85%_70%)] bg-clip-text text-transparent">
                  Trusted By Leading Brands
                </span>
              </h1>
              <p className="mt-6 text-lg lg:text-xl text-slate-300/90 max-w-2xl leading-relaxed">
                Delivering premium flexible packaging and foil solutions for India's growing
                food, beverage, and nutrition industries.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full gradient-primary border-0 shadow-elegant hover:shadow-glow hover:scale-105 transition-smooth h-12 px-7"
                >
                  <a href="#projects">
                    View Our Projects <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-7 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/contact">Talk to our team</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[#07090d]" />
        </section>

        {/* TRUSTED BRANDS */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.3em] text-[hsl(212_85%_70%)] font-semibold">
                Partnerships
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Brands We've Worked With</h2>
              <p className="mt-4 text-slate-400">
                A curated portfolio of India's most loved FMCG, dairy and nutrition brands.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {brands.map((b) => (
                <div
                  key={b}
                  className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm p-8 h-32 flex items-center justify-center overflow-hidden transition-smooth hover:border-[hsl(212_85%_60%/0.5)] hover:-translate-y-1"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth bg-[radial-gradient(circle_at_center,hsl(212_85%_58%/0.18),transparent_70%)]" />
                  <span className="relative text-lg md:text-xl font-bold text-slate-400 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[hsl(212_85%_75%)] group-hover:bg-clip-text group-hover:text-transparent transition-smooth tracking-wide text-center">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="py-24 relative">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(0 0% 100% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div className="max-w-2xl">
                <span className="text-xs uppercase tracking-[0.3em] text-[hsl(212_85%_70%)] font-semibold">
                  Featured Work
                </span>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold">
                  Cinematic Projects, Crafted End-to-End
                </h2>
              </div>
              <p className="text-slate-400 max-w-md">
                A glimpse into the packaging systems we've engineered for category leaders across
                India.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm transition-smooth hover:-translate-y-2 hover:border-[hsl(212_85%_60%/0.5)] hover:shadow-[0_30px_80px_-20px_hsl(212_85%_58%/0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-[#07090d]/40 to-transparent" />
                    <div className="absolute top-5 left-5 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur border border-white/15">
                        {p.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[hsl(212_85%_58%/0.25)] backdrop-blur border border-[hsl(212_85%_60%/0.4)] text-[hsl(212_90%_85%)]">
                        {p.type}
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
                          {p.brand}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold">{p.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-slate-400 leading-relaxed">{p.description}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(212_85%_75%)] group-hover:gap-3 transition-smooth">
                      View case study <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.3em] text-[hsl(212_85%_70%)] font-semibold">
                Capabilities
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Industries We Serve</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-smooth hover:border-[hsl(212_85%_60%/0.5)] hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth bg-[radial-gradient(circle_at_top,hsl(212_85%_58%/0.25),transparent_70%)]" />
                  <div className="relative w-14 h-14 mx-auto rounded-2xl grid place-items-center bg-gradient-to-br from-white/10 to-white/0 border border-white/10 group-hover:from-[hsl(212_85%_58%/0.4)] group-hover:to-transparent transition-smooth">
                    <Icon className="w-6 h-6 text-[hsl(212_85%_75%)]" />
                  </div>
                  <div className="relative mt-4 text-sm font-semibold tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-24 relative overflow-hidden">
          <img
            src={new URL("../assets/gallery-texture.jpg", import.meta.url).toString()}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07090d] via-[#07090d]/85 to-[#07090d]" />
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[hsl(212_85%_70%)] font-semibold">
                Manufacturing Strength
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Built At Industrial Scale</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur p-8 text-center"
                >
                  <div className="text-5xl md:text-6xl font-extrabold bg-gradient-to-b from-white to-[hsl(212_85%_70%)] bg-clip-text text-transparent drop-shadow-[0_0_24px_hsl(212_85%_58%/0.45)]">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-3 text-sm uppercase tracking-[0.18em] text-slate-400">
                    {s.label}
                  </div>
                </div>
              ))}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[hsl(212_85%_58%/0.2)] to-transparent p-8 text-center col-span-2 lg:col-span-4 flex flex-wrap items-center justify-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[hsl(212_85%_75%)]" />
                <span className="text-base md:text-lg font-semibold tracking-wide">
                  Certified to International Food Grade Standards · ISO 9001:2015
                </span>
              </div>
            </div>
          </div>
        </section>



        {/* WHY CHOOSE US */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.3em] text-[hsl(212_85%_70%)] font-semibold">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">A Premium Production Partner</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur p-8 transition-smooth hover:-translate-y-1 hover:border-[hsl(212_85%_60%/0.5)] overflow-hidden"
                >
                  <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[hsl(212_85%_58%/0.18)] blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="relative w-12 h-12 rounded-2xl grid place-items-center bg-gradient-to-br from-[hsl(212_85%_58%/0.35)] to-transparent border border-white/10">
                    <Icon className="w-5 h-5 text-[hsl(212_85%_80%)]" />
                  </div>
                  <h3 className="relative mt-5 text-xl font-bold">{title}</h3>
                  <p className="relative mt-2 text-slate-400 leading-relaxed">{text}</p>
                  <CheckCircle2 className="absolute top-6 right-6 w-4 h-4 text-[hsl(212_85%_70%)] opacity-50" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 p-10 md:p-16 lg:p-20 text-center">
              <img
                src={heroBg}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(215_75%_12%)] via-[hsl(212_70%_22%/0.9)] to-[hsl(212_85%_30%/0.7)]" />
              <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-[hsl(212_85%_58%/0.35)] blur-3xl animate-float" />
              <div
                className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[hsl(212_85%_70%/0.25)] blur-3xl animate-float"
                style={{ animationDelay: "1.5s" }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur text-xs uppercase tracking-[0.25em]">
                  <Zap className="w-3.5 h-3.5 text-[hsl(212_85%_80%)]" />
                  Let's build together
                </span>
                <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl mx-auto leading-tight">
                  Looking For Premium{" "}
                  <span className="bg-gradient-to-r from-white to-[hsl(212_85%_80%)] bg-clip-text text-transparent">
                    Flexible Packaging Solutions?
                  </span>
                </h2>
                <p className="mt-5 text-slate-300 max-w-xl mx-auto">
                  Partner with Dashmesh Foil for cinematic packaging that scales with your brand.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full h-12 px-8 bg-white text-[hsl(215_75%_15%)] hover:bg-white/90 hover:scale-105 transition-smooth shadow-elegant"
                  >
                    <Link to="/contact">
                      Contact Us <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 px-8 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link to="/products">Explore Products</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;

