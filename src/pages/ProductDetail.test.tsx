import { cleanup, render, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import ProductDetail from "./ProductDetail";
import Index from "./Index";

vi.mock("@/components/site/Layout", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const initialHead =
  '<title>Industrial Packaging Label Manufacturer in Delhi NCR | Dashmesh</title><meta data-rh="true" name="description" content="B2B packaging labels supplier in Faridabad, Haryana. Trusted bulk label exporter from India to global markets. High-quality foil, IML, and sticker labels.">';

const expectedMetadata = {
  "iml-labels": {
    title: "Premium IML Labels Manufacturer in Faridabad | Dashmesh Foil",
    description: "High-quality, moisture resistant in mould labels for plastic containers and ice cream tubs. Custom IML labels for dairy packaging in India. Get a quote!",
  },
  "aluminum-lids": {
    title: "Custom Printed Aluminium Foil Lids Manufacturer | Dashmesh",
    description: "Leading bulk pharmaceutical blister packing foil supplier in India. Premium heat seal aluminium foil lids for curd, yogurt cups, and plastic tubs.",
  },
  "self-adhesive-labels": {
    title: "Pressure Sensitive Sticker Labels Manufacturer India | Dashmesh",
    description: "Custom self adhesive labels for cosmetic jars and waterproof BOPP sticker labels for beverage bottles. FDA compliant self adhesive pharma labels.",
  },
  "sticker-labels": {
    title: "Pressure Sensitive Sticker Labels Manufacturer India | Dashmesh",
    description: "Custom self adhesive labels for cosmetic jars and waterproof BOPP sticker labels for beverage bottles. FDA compliant self adhesive pharma labels.",
  },
  "shrink-sleeve": {
    title: " Label Manufacturer & Exporter India | Dashmesh Foil and Labels ",
    description: "Leading manufacturer & exporter of PVC Shrink Labels, BOPP Wrap-around labels, and self-adhesive stickers. High-speed industrial printing for beverages & pharma.",
  },
  "bopp-labels": {
    title: "Waterproof BOPP Sticker Labels for Beverage Bottles & Cosmetics",
    description: "Custom pressure sensitive sticker labels manufacturer in India. Premium, moisture-proof clear and white BOPP labels for cosmetic jars and bottles.",
  },
  "heat-transfer-labels": {
    title: "Heat Transfer Labels for Plastic Promotional Mugs & Pails",
    description: "High-definition heat transfer labels manufacturer in Delhi NCR. Permanent, scratch-resistant HTL graphics for rigid plastic products and containers.",
  },
};

afterEach(() => {
  cleanup();
  document.head.innerHTML = "";
});

describe("product page metadata", () => {
  for (const [slug, expected] of Object.entries(expectedMetadata)) {
    it(`renders one title, description, and route-specific canonical for ${slug}`, async () => {
      document.head.innerHTML = initialHead;

      render(
        <HelmetProvider>
          <MemoryRouter initialEntries={[`/products/${slug}`]}>
            <Routes>
              <Route path="/products/:slug" element={<ProductDetail />} />
            </Routes>
          </MemoryRouter>
        </HelmetProvider>,
      );

      await waitFor(() => {
        expect(document.head.querySelectorAll("title")).toHaveLength(1);
        expect(document.head.querySelector("title")?.textContent).toBe(expected.title);
        expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
        expect(document.head.querySelector('meta[name="description"]')?.getAttribute("content")).toBe(expected.description);
        const canonicals = document.head.querySelectorAll('link[rel="canonical"]');
        expect(canonicals).toHaveLength(1);
        expect(canonicals[0].getAttribute("href")).toBe(
          `https://www.dashmeshfoil.com/products/${slug}`,
        );
      });
    });
  }

  it("renders one supplied title, description, and homepage canonical", async () => {
    document.head.innerHTML = initialHead;
    window.scrollTo = vi.fn();

    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Index />
        </MemoryRouter>
      </HelmetProvider>,
    );

    await waitFor(() => {
      expect(document.head.querySelectorAll("title")).toHaveLength(1);
      expect(document.head.querySelector("title")?.textContent).toBe(
        "Industrial Packaging Label Manufacturer in Delhi NCR | Dashmesh",
      );
      expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
      expect(document.head.querySelector('meta[name="description"]')?.getAttribute("content")).toBe(
        "B2B packaging labels supplier in Faridabad, Haryana. Trusted bulk label exporter from India to global markets. High-quality foil, IML, and sticker labels.",
      );
      const canonicals = document.head.querySelectorAll('link[rel="canonical"]');
      expect(canonicals).toHaveLength(1);
      expect(canonicals[0].getAttribute("href")).toBe("https://www.dashmeshfoil.com/");
    });
  });
});
