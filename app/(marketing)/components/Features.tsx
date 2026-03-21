"use client";

import { FileText, Bell, Download } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const topFeatures = [
  {
    title: "Control documental centralizado",
    description:
      "Gestion estructurada de documentacion de empresas contratistas y trabajadores, con estados claros y trazabilidad.",
    mockup: (
      <div className="w-full h-full flex gap-2 p-3">
        {/* Sidebar — folder tree */}
        <div className="w-[68px] shrink-0 bg-white rounded-lg border border-dark-teal/15 p-2 flex flex-col gap-2">
          {[
            { active: true, w: "w-9" },
            { active: false, w: "w-7" },
            { active: false, w: "w-8" },
            { active: false, w: "w-6" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded ${item.active ? "bg-accent/50" : "bg-dark-teal/10"}`} />
              <div className={`h-1 rounded-full ${item.active ? "bg-dark-teal/20" : "bg-dark-teal/10"} ${item.w}`} />
            </div>
          ))}
        </div>
        {/* Document list */}
        <div className="flex-1 min-w-0 bg-white rounded-lg border border-dark-teal/15 flex flex-col">
          {/* Search bar */}
          <div className="px-2 py-1.5 border-b border-dark-teal/[0.06]">
            <div className="h-3.5 rounded bg-dark-teal/[0.04] flex items-center px-1.5">
              <div className="w-1.5 h-1.5 rounded-full border border-dark-teal/15" />
            </div>
          </div>
          {/* Rows */}
          <div className="p-1.5 flex flex-col gap-1">
            {[
              { dot: "bg-emerald-400", w: "w-16" },
              { dot: "bg-emerald-400", w: "w-12" },
              { dot: "bg-amber-400", w: "w-14" },
              { dot: "bg-red-400", w: "w-10" },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-1.5 px-1 py-0.5">
                <FileText className="w-2.5 h-2.5 text-accent/50 shrink-0" />
                <div className={`h-1 rounded-full bg-dark-teal/12 ${row.w}`} />
                <div className={`w-1.5 h-1.5 rounded-full ${row.dot} shrink-0 ml-auto`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Alertas automaticas de vencimiento",
    description:
      "Notificaciones proactivas que evitan incumplimientos antes de que se conviertan en un riesgo.",
    mockup: (
      <div className="w-full h-full flex gap-2 p-3">
        {/* Mini calendar */}
        <div className="w-[80px] shrink-0 bg-white rounded-lg border border-dark-teal/15 p-2 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <div className="h-1 rounded-full bg-dark-teal/15 w-8" />
            <Bell className="w-2.5 h-2.5 text-accent/40" />
          </div>
          <div className="grid grid-cols-7 gap-[3px]">
            {"LMMJVSD".split("").map((d, i) => (
              <div key={`h${i}`} className="w-[7px] h-[7px] flex items-center justify-center text-[4px] text-dark-teal/25 font-medium">{d}</div>
            ))}
            {Array.from({ length: 28 }, (_, i) => (
              <div
                key={i}
                className={`w-[7px] h-[7px] rounded-[2px] ${
                  i === 12 ? "bg-red-400/40" : i === 19 ? "bg-amber-400/40" : i === 5 ? "bg-accent/30" : "bg-dark-teal/[0.04]"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Alert list */}
        <div className="flex-1 min-w-0 flex flex-col gap-1.5">
          {[
            { border: "border-l-red-400", badge: "bg-red-100 text-red-500", badgeText: "Vencido" },
            { border: "border-l-amber-400", badge: "bg-amber-100 text-amber-500", badgeText: "3 días" },
            { border: "border-l-emerald-400", badge: "bg-emerald-100 text-emerald-500", badgeText: "OK" },
          ].map((alert, i) => (
            <div
              key={i}
              className={`bg-white rounded-md border border-dark-teal/15 border-l-2 ${alert.border} px-2 py-1.5 flex flex-col gap-1`}
            >
              <div className="flex items-center gap-1.5">
                <div className={`h-1 rounded-full bg-dark-teal/15 ${["w-16", "w-14", "w-12"][i]}`} />
                <span className={`ml-auto text-[6px] font-semibold px-1.5 py-0.5 rounded-full ${alert.badge}`}>{alert.badgeText}</span>
              </div>
              <div className="h-1 rounded-full bg-dark-teal/10 w-full" />
            </div>
          ))}
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
      <div className="w-full h-full flex flex-col gap-1.5 p-3">
        {/* KPI row */}
        <div className="flex gap-1.5">
          {[
            { value: "94%", color: "text-emerald-500", w: "w-8" },
            { value: "12", color: "text-amber-500", w: "w-6" },
            { value: "3", color: "text-red-500", w: "w-7" },
          ].map((kpi, i) => (
            <div key={i} className="flex-1 bg-white rounded-md border border-dark-teal/15 px-2 py-1.5">
              <div className={`text-[10px] font-bold ${kpi.color}`}>{kpi.value}</div>
              <div className={`h-0.5 rounded-full bg-dark-teal/10 ${kpi.w} mt-0.5`} />
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="flex-1 bg-white rounded-lg border border-dark-teal/15 flex items-end gap-[3px] px-2.5 pb-2 pt-1">
          {[40, 65, 50, 80, 45, 70, 55, 85, 60, 75].map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-t-sm ${i % 2 === 0 ? "bg-accent/35" : "bg-light-teal/50"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Reportes accionables",
    description:
      "Exportacion de informacion clave para auditorias, fiscalizaciones y decisiones.",
    mockup: (
      <div className="w-full h-full flex flex-col p-3">
        {/* Report header */}
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded bg-accent/20 flex items-center justify-center">
              <FileText className="w-2.5 h-2.5 text-accent/50" />
            </div>
            <div className="h-1.5 rounded-full bg-dark-teal/15 w-14" />
          </div>
          <Download className="w-3 h-3 text-accent/40" />
        </div>
        {/* Table */}
        <div className="flex-1 bg-white rounded-lg border border-dark-teal/15 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-accent/15 px-2 py-1 flex gap-3">
            {["w-8", "w-6", "w-5", "w-4"].map((w, i) => (
              <div key={i} className={`h-1 rounded-full bg-accent/40 ${w}`} />
            ))}
          </div>
          {/* Rows */}
          {[0, 1, 2].map((row) => (
            <div key={row} className="px-2 py-1 flex gap-3 border-t border-dark-teal/[0.04]">
              {["w-7", "w-5", "w-6", "w-4"].map((w, j) => (
                <div key={j} className={`h-1 rounded-full ${j === 0 ? "bg-dark-teal/12" : "bg-dark-teal/10"} ${w}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Cumplimiento por proyecto",
    description:
      "Segmenta la documentacion requerida por proyecto u operacion, adaptando requisitos segun contexto.",
    mockup: (
      <div className="w-full h-full flex flex-col gap-1.5 p-3">
        {/* Tabs */}
        <div className="flex gap-1">
          {["Proy A", "Proy B", "Proy C"].map((name, i) => (
            <div
              key={i}
              className={`px-2 py-0.5 rounded-md text-[7px] font-medium ${
                i === 0 ? "bg-accent/25 text-accent/70" : "bg-dark-teal/5 text-dark-teal/25"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
        {/* Project detail panel */}
        <div className="flex-1 bg-white rounded-lg border border-dark-teal/15 p-2 flex flex-col justify-center gap-2">
          {[
            { label: "w-10", fill: "w-[85%]", color: "bg-accent/40", pct: "85%" },
            { label: "w-8", fill: "w-[60%]", color: "bg-light-teal/50", pct: "60%" },
            { label: "w-12", fill: "w-[95%]", color: "bg-accent/40", pct: "95%" },
          ].map((bar, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`h-1 rounded-full bg-dark-teal/12 ${bar.label} shrink-0`} />
              <div className="flex-1 h-1.5 rounded-full bg-dark-teal/5">
                <div className={`h-full rounded-full ${bar.color} ${bar.fill}`} />
              </div>
              <span className="text-[6px] font-semibold text-dark-teal/40 shrink-0">{bar.pct}</span>
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
    <div className="bg-light-gray border border-dark-teal/[0.06] rounded-2xl p-5 h-full">
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
      <ScrollReveal className="mx-auto max-w-4xl text-center mb-8">
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
      </ScrollReveal>

      <div className="mx-auto max-w-4xl flex flex-col gap-4">
        {/* Top row: 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topFeatures.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1} className="h-full">
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom row: 3 smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {bottomFeatures.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1} className="h-full">
              <FeatureCard {...feature} compact />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
