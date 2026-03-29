import { SITE_URL } from "@/lib/site-config";
import HeroSection from "./components/HeroSection";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import MarketSegments from "./components/MarketSegments";
import WaitlistSection from "./components/WaitlistSection";
import CallToAction from "./components/CallToAction";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Verify",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Plataforma de cumplimiento documental centralizado para la gestión de contratistas y proveedores.",
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CLP",
    availability: "https://schema.org/PreOrder",
  },
  author: {
    "@type": "Organization",
    name: "Verify",
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden" aria-label="Verify — Cumplimiento documental centralizado">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Subtle radial gradient for depth */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(101,129,234,0.06) 0%, transparent 70%)",
        }}
      />

      <HeroSection />

      <PainPoints />
      <Features />
      <MarketSegments />
      <WaitlistSection />
      <CallToAction />
    </div>
  );
}

