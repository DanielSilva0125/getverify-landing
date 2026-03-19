import { Button } from "@heroui/button";
import { ArrowUpRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 relative overflow-hidden flex flex-col items-center">
      {/* Subtle geometric background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center'
        }} 
      />

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        {/* Left side: Heading and Badge */}
        <div className="flex flex-col items-start lg:pr-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-accent/[0.08] px-4 py-2 text-[15px] font-medium text-dark-teal mb-8 sm:mb-12">
            <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            ¿Buscas simplificar tu gestión documental?
          </div>

          {/* Heading */}
          <h2 className="text-[44px] sm:text-[60px] lg:text-[72px] tracking-[-0.03em] leading-[1.05] font-semibold text-dark-teal mb-6">
            <span className="text-accent">Control Inteligente</span> Para <br /> 
            Operaciones Seguras.
          </h2>
        </div>

        {/* Right side: iPhone-like Card */}
        <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
          <div className="bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-dark-teal/[0.08] p-8 sm:p-10 relative overflow-hidden flex flex-col h-full ring-1 ring-black/[0.02]">
            {/* Minimal top notch detail to give a subtle device feel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-white border border-t-0 border-x-dark-teal/[0.05] border-b-dark-teal/[0.05] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.02)] rounded-b-[18px] z-10 hidden sm:block">
               <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-dark-teal/[0.06]" />
            </div>
            
            <h3 className="text-[36px] sm:text-[44px] font-bold text-dark-teal leading-[1.05] tracking-[-0.03em] mt-8 sm:mt-10 mb-6">
              Simplifica, <br />
              Controla, Y <br />
              Evita Riesgos <br />
              Operativos
            </h3>
            
            <p className="text-[15px] sm:text-[16px] leading-[1.65] text-dark-teal/70 mb-10">
              Nuestra plataforma está diseñada específicamente para entregar visibilidad en tiempo real y reducir el riesgo en cada proyecto.
            </p>

            <div className="mt-auto">
              <Button
                as="a"
                href="#waitlist"
                className="w-full bg-accent hover:bg-[#5570e0] text-white font-medium h-14 text-[16px] tracking-[-0.01em] rounded-2xl transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
              >
                Unirse a la lista de espera
                <ArrowUpRight className="w-[18px] h-[18px] opacity-80" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
