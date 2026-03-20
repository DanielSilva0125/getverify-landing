//

const topFeatures = [
  {
    title: "Control documental centralizado",
    description:
      "Gestion estructurada de documentacion de empresas contratistas y trabajadores, con estados claros y trazabilidad.",
  },
  {
    title: "Alertas automaticas de vencimiento",
    description:
      "Notificaciones proactivas que evitan incumplimientos antes de que se conviertan en un riesgo.",
  },
];

const bottomFeatures = [
  {
    title: "Visibilidad en tiempo real",
    description:
      "Dashboards que muestran el cumplimiento por proveedor y detectan brechas criticas.",
  },
  {
    title: "Reportes accionables",
    description:
      "Exportacion de informacion clave para auditorias, fiscalizaciones y decisiones.",
  },
  {
    title: "Cumplimiento por proyecto",
    description:
      "Segmenta la documentacion requerida por proyecto u operacion, adaptando requisitos segun contexto.",
  },
];

function FeatureCard({
  title,
  description,
  compact,
}: {
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div className="bg-light-gray border border-dark-teal/[0.06] rounded-2xl p-5">
      <div
        className={`relative rounded-xl w-full flex items-center justify-center overflow-hidden ${compact ? "h-28" : "h-36"} mb-4`}
      >
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
