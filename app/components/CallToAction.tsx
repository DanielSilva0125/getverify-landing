import { Button } from "@heroui/button";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-white px-6 pt-6 sm:pt-8 lg:pt-6 pb-0 relative overflow-hidden flex flex-col items-center border-b border-dark-teal/[0.04]">
      {/* Subtle geometric background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center'
        }}
      />

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center lg:items-start">
        {/* Left side: Heading and Badge */}
        <div className="flex flex-col items-start justify-end h-full lg:pr-10 pb-4 sm:pb-4 lg:pb-8 lg:pt-6 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-accent/[0.08] px-4 py-2 text-[14px] sm:text-[15px] font-medium text-dark-teal mb-6 sm:mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            ¿Buscas simplificar tu gestión documental?
          </div>

          {/* Heading */}
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] tracking-[-0.03em] leading-[1.05] font-semibold text-dark-teal mb-8">
            <span className="text-accent">Control Inteligente</span><br />
            Operaciones Seguras.
          </h2>
        </div>

        {/* Right side: iPhone Wireframe Card Mockup - Translated down to crop bottom corners */}
        <div className="max-h-[450px] w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[275px] mx-auto lg:ml-auto lg:mr-8 xl:mr-16 aspect-[9/19.5] relative translate-y-[120px] sm:translate-y-[180px] top-[-140px]">

          {/* Wireframe Outer Chassis */}
          <div className="absolute inset-0 bg-dark-teal rounded-[44px] shadow-[0_32px_80px_-15px_rgba(0,0,0,0.18)] border-[2px] border-dark-teal/60" />

          {/* Inner Screen */}
          <div className="absolute inset-[5px] sm:inset-[6px] rounded-[40px] overflow-hidden">
            <div className="relative w-full h-full bg-white flex flex-col px-6 pt-10 pb-16 sm:pb-20">

              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-dark-teal rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-dark-teal/30" />
              </div>

              <h3 className="text-[28px] sm:text-[34px] font-bold text-dark-teal leading-[1.05] tracking-[-0.03em] mt-8 mb-5">
                Simplifica, <br />
                Controla, <br />
                Y Evita <br />
                Riesgos.
              </h3>

              <p className="text-[13px] sm:text-[14px] leading-[1.65] text-dark-teal/60 pr-2">
                Auditoría en tiempo real y alertas automáticas de vencimiento para que nunca operes a ciegas.
              </p>

              <div className="mt-6">
                <Button
                  as="a"
                  href="#waitlist"
                  className="w-full bg-accent hover:bg-[#5570e0] text-white font-medium h-[48px] sm:h-[44px] text-[14px] sm:text-[15px] tracking-[-0.01em] rounded-2xl transition-all shadow-[0_8px_20px_rgba(101,129,234,0.25)] flex items-center justify-center gap-2"
                >
                  Lista de espera
                  <ArrowUpRight className="w-[18px] h-[18px] opacity-80" />
                </Button>
              </div>
            </div>
          </div>

          {/* Wireframe Physical Hardware Buttons on Chassis */}
          <div className="absolute top-[80px] -left-[2px] sm:-left-[3px] w-[2px] sm:w-[3px] h-5 bg-dark-teal rounded-l-sm" /> {/* Silence Switch */}
          <div className="absolute top-[115px] -left-[2px] sm:-left-[3px] w-[2px] sm:w-[3px] h-10 bg-dark-teal rounded-l-sm" /> {/* Volume Up */}
          <div className="absolute top-[165px] -left-[2px] sm:-left-[3px] w-[2px] sm:w-[3px] h-10 bg-dark-teal rounded-l-sm" /> {/* Volume Down */}
          <div className="absolute top-[130px] -right-[2px] sm:-right-[3px] w-[2px] sm:w-[3px] h-14 bg-dark-teal rounded-r-sm" /> {/* Power Button */}

        </div>
      </div>
    </section>
  );
}
