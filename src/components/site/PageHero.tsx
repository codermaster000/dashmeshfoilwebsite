import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  crumbs?: Crumb[];
}

const PageHero = ({ eyebrow, title, highlight, description, crumbs }: Props) => {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 gradient-primary" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white animate-fade-up">
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">{eyebrow}</span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 mb-5 leading-tight max-w-4xl">
          {title}{" "}
          {highlight && (
            <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </h1>
        {description && (
          <p className="text-lg text-white/85 max-w-2xl leading-relaxed">{description}</p>
        )}
        {crumbs && crumbs.length > 0 && (
          <nav className="mt-8 flex items-center gap-2 text-sm text-white/75 flex-wrap">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/50" />}
                {c.to ? (
                  <Link to={c.to} className="hover:text-white transition-smooth">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
};

export default PageHero;
