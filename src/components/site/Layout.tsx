import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface Props {
  children: ReactNode;
  transparentHeader?: boolean;
}

const Layout = ({ children, transparentHeader = false }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

return (
    <div className="min-h-screen bg-background overflow-x-hidden flex flex-col">
      <Header transparentOnTop={transparentHeader} />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Global floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
