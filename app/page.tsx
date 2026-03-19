import { ChevronRight } from "lucide-react";
import { Button } from "@heroui/button";
import Navbar from "./components/Navbar";
import MacWindowMockup from "./components/MacWindowMockup";
import PainPoints from "./components/PainPoints";
import Features from "./components/Features";
import MarketSegments from "./components/MarketSegments";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle radial gradient for depth */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(101,129,234,0.06) 0%, transparent 70%)",
        }}
      />

      <Navbar />

      <main className="relative flex flex-col items-center px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/[0.06] px-3.5 py-1.5 text-[13px] text-accent mb-8">
          <span className="font-semibold">Nuevo</span>
          <span className="text-accent/30">|</span>
          <span className="font-medium text-accent/70 inline-flex items-center gap-1">
            Cumplimiento documental simplificado
            <ChevronRight className="w-3.5 h-3.5 text-accent/70" strokeWidth={2.5} />
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-[790px] text-center text-[36px] leading-[1.15] sm:text-[48px] sm:leading-[1.12] lg:text-[56px] lg:leading-[1.04] font-semibold tracking-[-0.025em] text-dark-teal mb-5">
          Controla el cumplimiento <br />de contratistas{" "}<br />
          <em className="text-accent italic">desde un solo lugar.</em>
        </h1>

        {/* Subtitle */}
        <p className="max-w-[540px] text-center text-[16px] sm:text-[18px] leading-[1.6] text-dark-teal/50 font-normal mb-10">
          Centraliza documentos, recibe alertas de vencimiento y visualiza el
          estado de cada proveedor en tiempo real.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-20 sm:mb-16">
          <Button
            as="a"
            href="#waitlist"
            className="btn-glow bg-accent hover:bg-[#5570e0] text-white font-medium px-6 h-11 text-[14px] tracking-[-0.01em] rounded-2xl"
          >
            Unirse a la lista de espera
            <span className="ml-2 text-white/70">&rarr;</span>
          </Button>
          <Button
            as="a"
            href="#learn-more"
            variant="bordered"
            className="border-dark-teal/12 hover:border-dark-teal/25 bg-white hover:bg-dark-teal/[0.02] text-dark-teal/70 font-medium px-6 h-11 text-[14px] tracking-[-0.01em] rounded-2xl"
          >
            Conocer mas
          </Button>
        </div>

        {/* Mac Window Mockup */}
        <MacWindowMockup />
      </main>

      <PainPoints />
      <Features />
      <MarketSegments />
      <CallToAction />

      {/* Footer Placeholder */}
      <footer className="w-full h-[400px] bg-white flex items-center justify-center">
        <div className="w-48 h-8 rounded-full bg-dark-teal/[0.03]" />
      </footer>
    </div>
  );
}
