import { Link } from "react-router-dom";
import { ArrowUp, Facebook, Instagram, Layers, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { company, mainNav, productCategories, markets } from "@/data/site";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-16 pb-8">
      {/* Social Box */}
      <div className="absolute right-8 top-20 flex flex-col gap-4 max-md:hidden">
        <a
          href="https://www.linkedin.com/company/dashmeshfoil/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-smooth"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="https://www.facebook.com/dashmeshfoil/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-smooth"
          aria-label="Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="https://www.instagram.com/dashmeshfoil/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-smooth"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="absolute right-8 bottom-8 w-12 h-12 rounded-full bg-primary hover:bg-primary-glow flex items-center justify-center transition-smooth cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Widgets Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* About Us - Column 1 */}
          <div className="lg:col-span-4">
          <div className="flex items-center gap-4 mb-5">
  <div className="rounded-2xl  backdrop-blur-md px-1 py-2  ">
    <img
      src="/logo.png"
      alt="Dashmesh Foil"
      className="h-12 w-15"
    />
  </div>

  <div>
    <div className="font-bold text-xl leading-none">
      {company.name}
    </div>

    <div className="text-[11px] uppercase tracking-[0.22em] text-white/60 mt-1">
      {company.tagline}
    </div>
  </div>
</div>
            <h4 className="font-bold mb-3">About Us</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              We are a trusted manufacturer & supplier of high-quality packaging labels, designed to enhance
              product identity and market presence.
            </p>
          </div>

          {/* Useful Links - Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-5">Useful Links</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="https://www.dashmeshfoil.com/" className="hover:text-white transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-smooth">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/markets" className="hover:text-white transition-smooth">
                  Markets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-smooth">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products - Column 3 */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-5">Our Products</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {productCategories.slice(0, 7).map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="hover:text-white transition-smooth">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets - Column 4 */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-5">Markets</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              {markets.map((m) => (
                <li key={m.slug}>
                  <Link to={`/markets/${m.slug}`} className="hover:text-white transition-smooth">
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 mb-14 pt-8 border-t border-white/10">
          <div>
            <h4 className="font-bold mb-5">Contact Info</h4>
            <div className="font-semibold text-lg mb-3">{company.name} - Label Manufacturer</div>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 shrink-0" />
                <span>
                  <a href={`tel:${company.phones[0]}`} className="hover:text-white">
                    {company.phones[0]}
                  </a>
                  ,{" "}
                  <a href={`tel:${company.phones[1]}`} className="hover:text-white">
                    {company.phones[1]}
                  </a>
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 shrink-0" />
                <span>
                  <a href={`mailto:${company.emails[0]}`} className="hover:text-white">
                    {company.emails[0]}
                  </a>
                  ,{" "}
                  <a href={`mailto:${company.emails[1]}`} className="hover:text-white">
                    {company.emails[1]}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Box - Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>Copyright © {new Date().getFullYear()} by Dashmeshfoil All Rights Reserved | Dashmesh Foil</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-smooth">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-smooth">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
