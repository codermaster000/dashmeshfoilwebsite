import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Layers, Menu, Phone, X, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mainNav, company } from "@/data/site";

interface Props {
  /** When true, header starts transparent and turns solid on scroll (use over hero images). */
  transparentOnTop?: boolean;
}

const Header = ({ transparentOnTop = false }: Props) => {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (!transparentOnTop) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [location.pathname]);

  const isOverHero = transparentOnTop && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
          isOverHero ? "bg-transparent py-4" : "glass shadow-card py-2"
        }`}
      >
        <style>{`
          /* Make logo/brand readable over hero images */
          .site-header-logo-img{
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 6px 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.18);
}
        `}</style>
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5 group">
         <div className="rounded-xl   px-3 py-2 s">
  <img
    src="/logo.png"
    alt="Dashmesh Foil"
    className="h-10 w-auto object-contain"
  />
</div>
            <div className="leading-tight">
              <div className={`font-bold text-lg ${isOverHero ? "text-white" : "text-foreground"}`}>
                {company.name}
              </div>
              <div
                className={`text-[10px] uppercase tracking-[0.2em] ${
                  isOverHero ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {company.tagline}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => (
              <div key={item.label} className="relative group">
                {item.label === "Blog" ? (
                  <a
                    href="https://dashmeshfoil.com/blog/"
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-smooth flex items-center gap-1 ${
                      isOverHero
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-foreground hover:text-primary hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-smooth flex items-center gap-1 ${
                      isOverHero
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-foreground hover:text-primary hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                  </Link>
                )}
                {item.children && (
                  <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                    <div className="glass rounded-xl shadow-elegant p-2 w-60">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block px-4 py-2.5 text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${company.phones[0]}`} className="hidden xl:flex items-center gap-2 group">
              <div
                className={`w-10 h-10 rounded-full grid place-items-center transition-smooth ${
                  isOverHero
                    ? "bg-white/15 text-white group-hover:bg-white group-hover:text-primary"
                    : "bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                }`}
              >
                <Phone className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <div
                  className={`text-[10px] uppercase tracking-wider ${
                    isOverHero ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  Phone
                </div>
                <div className={`text-sm font-semibold ${isOverHero ? "text-white" : "text-foreground"}`}>
                  {company.phones[0]}
                </div>
              </div>
            </a>
            <Button
              asChild
              className="rounded-full gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow hover:scale-105 transition-smooth border-0"
            >
              <Link to="/contact">
                Get quote now <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg ${isOverHero ? "text-white" : "text-foreground"}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-smooth ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-primary-deep/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background shadow-elegant p-6 overflow-y-auto transition-smooth ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold text-lg gradient-text">{company.name}</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <button
                    onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-secondary text-left font-medium"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-smooth ${openSub === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : item.label === "Blog" ? (
                  <a
                    href="https://dashmeshfoil.com/blog/"
                    className="w-full block px-3 py-3 rounded-lg hover:bg-secondary text-left font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="w-full block px-3 py-3 rounded-lg hover:bg-secondary text-left font-medium"
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && openSub === item.label && (
                  <div className="pl-4 flex flex-col gap-1 mb-2">
                    <Link
                      to={item.to}
                      className="px-3 py-2 text-sm font-semibold text-primary rounded-lg"
                    >
                      All {item.label}
                    </Link>
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Button asChild className="mt-6 w-full rounded-full gradient-primary border-0">
            <Link to="/contact">Get quote now</Link>
          </Button>
          <div className="mt-6 pt-6 border-t text-sm text-muted-foreground space-y-2">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" /> {company.phones[0]}
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> {company.emails[0]}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Header;
