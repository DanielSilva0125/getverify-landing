import {
  FolderOpen,
  BellRing,
  BarChart3,
  FileBarChart,
  ShieldCheck,
} from "lucide-react";

const topFeatures = [
  {
    icon: FolderOpen,
    title: "Control documental centralizado",
    description:
      "Gestion estructurada de documentacion de empresas contratistas y trabajadores, con estados claros y trazabilidad.",
  },
  {
    icon: BellRing,
    title: "Alertas automaticas de vencimiento",
    description:
      "Notificaciones proactivas que evitan incumplimientos antes de que se conviertan en un riesgo.",
  },
];

const bottomFeatures = [
  {
    icon: BarChart3,
    title: "Visibilidad en tiempo real",
    description:
      "Dashboards que muestran el cumplimiento por proveedor y detectan brechas criticas.",
  },
  {
    icon: FileBarChart,
    title: "Reportes accionables",
    description:
      "Exportacion de informacion clave para auditorias, fiscalizaciones y decisiones.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento por proyecto",
    description:
      "Segmenta la documentacion requerida por proyecto u operacion, adaptando requisitos segun contexto.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  compact,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { strokeWidth?: number }>;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div className="bg-light-gray border border-dark-teal/[0.06] rounded-2xl p-5">
      <div
        className={`relative bg-white rounded-xl w-full flex items-center justify-center overflow-hidden border border-dark-teal/[0.06] ${compact ? "h-28" : "h-36"
          } mb-4`}
      >
        <div className="absolute top-3 left-4 w-1.5 h-1.5 rounded-full bg-dark-teal/[0.07]" />
        <div className="absolute top-4 right-6 w-1 h-1 rounded-full bg-accent/[0.15]" />
        <div className="absolute bottom-3 left-6 w-6 h-0.5 rounded-full bg-dark-teal/[0.05]" />
        <div className="absolute bottom-3 right-4 w-1.5 h-1.5 rounded-full bg-dark-teal/[0.06]" />

        <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
      </div>

      <h3 className="text-[15px] font-semibold text-dark-teal mb-1">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.55] text-dark-teal/50">
        {description}
      </p>
    </div>
  );
}

export default function Features() {
  return (
    <section className="px-6 pb-20 sm:pt-14 sm:pb-28 bg-[#F9FBFC]">
      <div className="mx-auto max-w-4xl text-center mb-8">
        <span className="inline-block rounded-full bg-accent/[0.08] px-3.5 py-1 text-[13px] font-semibold text-accent mb-4">
          Plataforma
        </span>
        <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] tracking-[-0.025em] text-dark-teal leading-[1.15] mb-3">
          <span className="font-normal">Menos supuestos,</span>
          <span className="font-bold">{" "}más certezas.</span>
        </h2>
        <p className="text-[15px] sm:text-[17px] leading-[1.6] text-dark-teal/50 max-w-[500px] mx-auto">
          Herramientas diseñadas para cubrir cada punto critico del cumplimiento documental.
        </p>
      </div>

      <div className="mx-auto max-w-4xl flex flex-col gap-4">
        {/* Top row: 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

        {/* Bottom row: 3 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bottomFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
