import { Button } from "@heroui/button";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-white px-6 sm:px-8 lg:px-10 pt-10 sm:pt-12 lg:pt-10 pb-10 sm:pb-12 lg:pb-14 relative overflow-hidden flex flex-col items-center">
      {/* Subtle geometric background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center'
        }}
      />

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-10 items-start">
        {/* Left side: Heading and Badge */}
        <div className="flex flex-col items-start h-full justify-end lg:pr-8 lg:pb-8 lg:pt-4 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-accent/[0.08] px-4 py-2 text-[14px] sm:text-[15px] font-medium text-dark-teal mb-5 sm:mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            ¿Buscas simplificar tu gestión documental?
          </div>

          {/* Heading */}
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] tracking-[-0.03em] leading-[1.05] font-semibold text-dark-teal">
            <span className="text-accent">Control Inteligente</span><br />
            Operaciones Seguras.
          </h2>
        </div>

        {/* Right side: iPhone Wireframe Card Mockup - Translated down to crop bottom corners */}
        <div className="w-full max-w-[220px] sm:max-w-[245px] lg:max-w-[275px] mx-auto lg:ml-auto lg:mr-8 xl:mr-16 aspect-[9/19.5] relative -mb-[180px] sm:-mb-[190px] lg:-mb-[310px] translate-y-[16px] sm:translate-y-[24px] lg:translate-y-[5px]">

          {/* Wireframe Outer Chassis */}
          <div className="absolute inset-0 bg-dark-teal rounded-[40px] shadow-[0_32px_80px_-15px_rgba(0,0,0,0.18)] border-[2px] border-dark-teal/60" />

          {/* Inner Screen */}
          <div className="absolute inset-[5px] sm:inset-[6px] rounded-[36px] overflow-hidden">
            <div className="relative w-full h-full bg-white flex flex-col px-5 sm:px-6 pt-8 sm:pt-10 pb-12 sm:pb-16">

              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[72px] sm:w-[80px] h-[20px] sm:h-[22px] bg-dark-teal rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-dark-teal/30" />
              </div>

              <h3 className="text-[24px] sm:text-[28px] font-bold text-dark-teal leading-[1.1] tracking-[-0.02em] mt-5 sm:mt-8 mb-4">
                Simplifica, <br />
                Controla, <br />
                Y Evita <br />
                Riesgos.
              </h3>

              <p className="text-[12px] sm:text-[13px] leading-[1.6] text-dark-teal/60">
                Auditoría en tiempo real y alertas automáticas de vencimiento para que nunca operes a ciegas.
              </p>

              <div className="mt-4 sm:mt-5">
                <Button
                  as="a"
                  href="#waitlist"
                  className="w-full bg-accent hover:bg-[#5570e0] text-white font-medium h-[36px] sm:h-[39px] text-[13px] sm:text-[14px] tracking-[-0.01em] rounded-xl transition-all shadow-[0_8px_20px_rgba(101,129,234,0.25)] flex items-center justify-center gap-2"
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
