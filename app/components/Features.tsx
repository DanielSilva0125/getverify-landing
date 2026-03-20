//

import { FileText, Bell, Download } from "lucide-react";

const topFeatures = [
  {
    title: "Control documental centralizado",
    description:
      "Gestion estructurada de documentacion de empresas contratistas y trabajadores, con estados claros y trazabilidad.",
    mockup: (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Three overlapping document cards */}
        {[
          { rotate: "-6deg", x: "-12px", dot: "bg-red-400" },
          { rotate: "0deg", x: "0px", dot: "bg-amber-400" },
          { rotate: "5deg", x: "12px", dot: "bg-emerald-400" },
        ].map((card, i) => (
          <div
            key={i}
            className="absolute w-[72px] h-[90px] bg-white rounded-lg shadow-[0_2px_6px_rgba(0,0,0,0.06)] border border-dark-teal/10 p-2.5 flex flex-col gap-1.5"
            style={{
              transform: `rotate(${card.rotate}) translateX(${card.x})`,
              zIndex: i,
            }}
          >
            <div className="flex items-center justify-between">
              <FileText className="w-3 h-3 text-accent/50" />
              <div className={`w-1.5 h-1.5 rounded-full ${card.dot}`} />
            </div>
            <div className="h-1 rounded-full bg-dark-teal/12 w-full" />
            <div className="h-1 rounded-full bg-dark-teal/12 w-4/5" />
            <div className="h-1 rounded-full bg-dark-teal/12 w-3/5" />
            <div className="h-1 rounded-full bg-dark-teal/12 w-full mt-auto" />
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Alertas automaticas de vencimiento",
    description:
      "Notificaciones proactivas que evitan incumplimientos antes de que se conviertan en un riesgo.",
    mockup: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="flex items-start gap-4">
          {/* Bell with badge */}
          <div className="relative mt-1">
            <Bell className="w-7 h-7 text-accent/40" />
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-400 rounded-full flex items-center justify-center">
              <span className="text-[7px] font-bold text-white">3</span>
            </div>
          </div>
          {/* Notification toasts */}
          <div className="flex flex-col gap-1.5">
            {[
              { border: "border-l-red-400", label: "w-16" },
              { border: "border-l-amber-400", label: "w-12" },
              { border: "border-l-dark-teal/15", label: "w-14" },
            ].map((toast, i) => (
              <div
                key={i}
                className={`bg-white rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-dark-teal/10 border-l-2 ${toast.border} px-2.5 py-2 flex flex-col gap-1`}
              >
                <div className={`h-1 rounded-full bg-dark-teal/15 ${toast.label}`} />
                <div className="h-1 rounded-full bg-dark-teal/10 w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const bottomFeatures = [
  {
    title: "Visibilidad en tiempo real",
    description:
      "Dashboards que muestran el cumplimiento por proveedor y detectan brechas criticas.",
    mockup: (
      <div className="relative w-full h-full flex items-end justify-center gap-5 pb-3 px-4">
        {/* Mini bar chart */}
        <div className="flex items-end gap-1">
          {[
            { h: "h-8", color: "bg-accent/35" },
            { h: "h-14", color: "bg-light-teal/60" },
            { h: "h-10", color: "bg-accent/35" },
            { h: "h-16", color: "bg-light-teal/60" },
            { h: "h-6", color: "bg-accent/35" },
          ].map((bar, i) => (
            <div
              key={i}
              className={`w-3.5 ${bar.h} ${bar.color} rounded-t-sm`}
            />
          ))}
        </div>
        {/* Donut gauge */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18" cy="18" r="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-dark-teal/5"
            />
            <circle
              cx="18" cy="18" r="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="88"
              strokeDashoffset="26"
              strokeLinecap="round"
              className="text-accent/50"
            />
          </svg>
          <span className="absolute text-[9px] font-semibold text-dark-teal/50">71%</span>
        </div>
      </div>
    ),
  },
  {
    title: "Reportes accionables",
    description:
      "Exportacion de informacion clave para auditorias, fiscalizaciones y decisiones.",
    mockup: (
      <div className="relative w-full h-full flex items-center justify-center px-4">
        <div className="w-full max-w-[140px]">
          {/* Table */}
          <div className="bg-white rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-dark-teal/10 overflow-hidden">
            {/* Header */}
            <div className="bg-accent/15 px-2 py-1.5 flex gap-2">
              <div className="h-1 rounded-full bg-accent/40 w-8" />
              <div className="h-1 rounded-full bg-accent/40 w-6" />
              <div className="h-1 rounded-full bg-accent/40 w-5" />
            </div>
            {/* Rows */}
            {[0, 1, 2].map((row) => (
              <div
                key={row}
                className="px-2 py-1.5 flex gap-2 border-t border-dark-teal/[0.04]"
              >
                <div className="h-1 rounded-full bg-dark-teal/12 w-8" />
                <div className="h-1 rounded-full bg-dark-teal/10 w-5" />
                <div className="h-1 rounded-full bg-dark-teal/10 w-6" />
              </div>
            ))}
          </div>
          {/* Download icon */}
          <div className="absolute top-2.5 right-3">
            <Download className="w-3 h-3 text-accent/40" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Cumplimiento por proyecto",
    description:
      "Segmenta la documentacion requerida por proyecto u operacion, adaptando requisitos segun contexto.",
    mockup: (
      <div className="relative w-full h-full flex flex-col items-center justify-center px-4">
        {/* Folder tabs */}
        <div className="flex gap-0.5 self-start ml-2">
          {["bg-accent/25 text-accent/70", "bg-dark-teal/5 text-dark-teal/25", "bg-dark-teal/5 text-dark-teal/25"].map(
            (cls, i) => (
              <div
                key={i}
                className={`px-2 py-0.5 rounded-t-md text-[7px] font-medium ${cls}`}
              >
                {["Proy A", "Proy B", "Proy C"][i]}
              </div>
            )
          )}
        </div>
        {/* Panel with progress bars */}
        <div className="w-full bg-white rounded-b-lg rounded-tr-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-dark-teal/10 p-2.5 flex flex-col gap-2">
          {[
            { fill: "w-4/5", color: "bg-accent/40" },
            { fill: "w-3/5", color: "bg-light-teal/50" },
            { fill: "w-[90%]", color: "bg-accent/40" },
          ].map((bar, i) => (
            <div key={i} className="w-full h-1.5 rounded-full bg-dark-teal/5">
              <div
                className={`h-full rounded-full ${bar.color} ${bar.fill}`}
              />
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

function FeatureCard({
  title,
  description,
  mockup,
  compact,
}: {
  title: string;
  description: string;
  mockup?: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="bg-light-gray border border-dark-teal/[0.06] rounded-2xl p-5">
      <div
        className={`relative rounded-xl w-full flex items-center justify-center overflow-hidden ${compact ? "h-28" : "h-36"} mb-4`}
      >
        {mockup}
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
    <section className="px-6 pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#F9FBFC]">
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
