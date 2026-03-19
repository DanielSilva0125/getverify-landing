import { Button } from "@heroui/button";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-white px-6 pt-16 sm:pt-20 lg:pt-24 pb-0 relative overflow-hidden flex flex-col items-center border-b border-dark-teal/[0.04]">
      {/* Subtle geometric background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center'
        }}
      />

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center lg:items-start">
        {/* Left side: Heading and Badge */}
        <div className="flex flex-col items-start lg:pr-10 pb-4 sm:pb-16 lg:pb-32 lg:pt-16 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-accent/[0.08] px-4 py-2 text-[14px] sm:text-[15px] font-medium text-dark-teal mb-6 sm:mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            ¿Buscas simplificar tu gestión documental?
          </div>

          {/* Heading */}
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] tracking-[-0.03em] leading-[1.05] font-semibold text-dark-teal mb-6">
            <span className="text-accent">Control Inteligente</span><br />
            Operaciones Seguras.
          </h2>

          <p className="text-[16px] sm:text-[18px] leading-[1.65] text-dark-teal/70 max-w-[480px]">
            Diseñamos una plataforma precisa y estructurada para entregar visibilidad y reducir el riesgo operativo de tus contratistas.
          </p>
        </div>

        {/* Right side: iPhone Wireframe Card Mockup - Translated down to crop bottom corners */}
        <div className="w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] mx-auto lg:ml-auto lg:mr-8 xl:mr-16 aspect-[9/19.5] relative translate-y-[55px] sm:translate-y-[64px] z-20">

          {/* Wireframe Outer Chassis */}
          <div className="absolute inset-0 bg-white rounded-[55px] shadow-[0_32px_80px_-15px_rgba(0,0,0,0.06)] border-[6px] sm:border-[8px] border-dark-teal/[0.06]" />

          {/* Inner Screen - increased bottom padding to account for crop */}
          <div className="absolute inset-[6px] sm:inset-[8px] bg-white rounded-[47px] overflow-hidden flex flex-col px-7 pt-10 pb-20 sm:pb-24 relative ring-1 ring-dark-teal/[0.04]">

            {/* Simple Camera Dock Pill */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-dark-teal/[0.04] rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-dark-teal/[0.12]" />
            </div>

            <h3 className="text-[28px] sm:text-[34px] font-bold text-dark-teal leading-[1.05] tracking-[-0.03em] mt-8 mb-5">
              Simplifica, <br />
              Controla, Y <br />
              Evita <br />
              Riesgos.
            </h3>

            <p className="text-[13px] sm:text-[14px] leading-[1.65] text-dark-teal/60 mb-auto pr-2">
              Auditoría en tiempo real y alertas automáticas de vencimiento para que nunca operes a ciegas.
            </p>

            <div className="mt-8">
              <Button
                as="a"
                href="#waitlist"
                className="w-full bg-accent hover:bg-[#5570e0] text-white font-medium h-[48px] sm:h-[52px] text-[14px] sm:text-[15px] tracking-[-0.01em] rounded-2xl transition-all shadow-[0_8px_20px_rgba(101,129,234,0.25)] flex items-center justify-center gap-2"
              >
                Lista de espera
                <ArrowUpRight className="w-[18px] h-[18px] opacity-80" />
              </Button>
            </div>

            {/* Wireframe Home Indicator - Hidden visually under the fold usually, but kept for structure */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-[4px] bg-dark-teal/[0.08] rounded-full" />
          </div>

          {/* Wireframe Physical Hardware Buttons on Chassis */}
          <div className="absolute top-[80px] -left-[3px] sm:-left-[4px] w-[3px] sm:w-[4px] h-6 bg-dark-teal/[0.06] rounded-l-md" /> {/* Silence Switch */}
          <div className="absolute top-[120px] -left-[3px] sm:-left-[4px] w-[3px] sm:w-[4px] h-12 bg-dark-teal/[0.06] rounded-l-md" /> {/* Volume Up */}
          <div className="absolute top-[180px] -left-[3px] sm:-left-[4px] w-[3px] sm:w-[4px] h-12 bg-dark-teal/[0.06] rounded-l-md" /> {/* Volume Down */}
          <div className="absolute top-[140px] -right-[3px] sm:-right-[4px] w-[3px] sm:w-[4px] h-16 bg-dark-teal/[0.06] rounded-r-md" /> {/* Power Button */}

        </div>
      </div>
    </section>
  );
}
