import { Building2, HardHat, Network } from "lucide-react";

const segments = [
  {
    icon: Building2,
    title: "Empresas mandantes",
    description:
      "Controlan el cumplimiento documental de sus contratistas y asumen el riesgo operativo de la subcontratacion.",
    tags: ["Redes educativas", "Clinicas", "Edificios"],
  },
  {
    icon: HardHat,
    title: "Proveedores de servicios",
    description:
      "Gestionan la documentacion de sus trabajadores y demuestran cumplimiento ante multiples clientes.",
    tags: ["Aseo", "Seguridad", "Servicios"],
  },
  {
    icon: Network,
    title: "Organizaciones multi-sede",
    description:
      "Centralizan el control documental en operaciones distribuidas con mayor volumen y trazabilidad.",
    tags: ["Multi-proyecto", "Escalable", "Trazabilidad"],
  },
];

export default function MarketSegments() {
  return (
    <section className="bg-[#F7F7F7] px-6 py-20 sm:py-16 relative overflow-hidden">
      {/* Subtle radial glow to tie in with the hero section */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(101,129,234,0.035) 0%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center mb-16">
        <span className="inline-block rounded-full bg-accent/[0.08] px-3.5 py-1 text-[13px] font-semibold text-accent mb-4">
          Segmentos
        </span>
        <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] tracking-[-0.025em] text-dark-teal leading-[1.15] mb-4">
          <span className="font-normal">Control que escala </span>
          <span className="font-bold">con tu operación.</span>
        </h2>
        <p className="text-[16px] sm:text-[18px] leading-[1.6] text-dark-teal/50 max-w-[540px] mx-auto">
          Diseñado para organizaciones que necesitan controlar el cumplimiento
          documental de forma seria y estructurada.
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {segments.map(({ icon: Icon, title, description, tags }) => (
          <div
            key={title}
            className="group flex flex-col bg-white border border-dark-teal/[0.06] rounded-[24px] px-8 py-6 border-2 border-dark-teal/20 transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-light-gray rounded-2xl border border-dark-teal/[0.06] mb-5 transition-all duration-300">
              <Icon className="w-[22px] h-[22px] text-accent" strokeWidth={1.8} />
            </div>

            <h3 className="text-[17px] tracking-[-0.01em] font-semibold text-dark-teal mb-2.5">
              {title}
            </h3>
            <p className="text-[15px] leading-[1.6] text-dark-teal/60 mb-6 flex-grow">
              {description}
            </p>

            <div className="w-full h-[1px] bg-dark-teal/[0.04] mb-3" />

            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 bg-dark-teal/[0.03] text-dark-teal/60 text-[12px] font-medium tracking-[0.01em] rounded-full px-2.5 py-1.5 transition-colors group-hover:bg-dark-teal/[0.05]"
                >
                  <div className="size-1.25 rounded-full bg-accent/40" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
