import { MoreHorizontal } from "lucide-react";
import { complianceRate } from "./mock-data";

const R = 80;
const CIRCUMFERENCE = 2 * Math.PI * R;
const SEMI = CIRCUMFERENCE / 2;
const offset = SEMI * (1 - complianceRate.current / 100);

export default function ComplianceRateGauge() {
  return (
    <div className="bg-white rounded-2xl border border-[#eef0f3] p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[15px] text-dark-teal/80 font-semibold tracking-tight">
          Tasa de Cumplimiento
        </h3>
        <button type="button" className="text-dark-teal/30 hover:text-dark-teal/60 transition-colors">
          <MoreHorizontal className="w-5 h-5" strokeWidth={1.8} />
        </button>
      </div>

      {/* Gauge */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-full max-w-[220px]">
          <svg viewBox="0 0 200 115" className="w-full h-auto overflow-visible">
            <defs>
              <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8DA4F8" />
                <stop offset="100%" stopColor="#6581EA" />
              </linearGradient>
            </defs>
            {/* Background track */}
            <circle
              cx="100"
              cy="100"
              r={R}
              fill="none"
              stroke="#eef0f3"
              strokeWidth="14"
              strokeDasharray={`${SEMI} ${CIRCUMFERENCE}`}
              transform="rotate(180 100 100)"
              strokeLinecap="round"
            />
            {/* Filled arc */}
            <circle
              cx="100"
              cy="100"
              r={R}
              fill="none"
              stroke="url(#gaugeGrad)"
              strokeWidth="14"
              strokeDasharray={`${SEMI} ${CIRCUMFERENCE}`}
              strokeDashoffset={offset}
              transform="rotate(180 100 100)"
              strokeLinecap="round"
            />
          </svg>

          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
            <span className="text-[36px] font-bold tracking-[-0.02em] text-dark-teal leading-none">
              {complianceRate.current}%
            </span>
          </div>
        </div>

        <p className="text-[13px] text-dark-teal/40 font-medium mt-3 text-center">
          En camino a la meta del {complianceRate.target}%
        </p>

        <button
          type="button"
          className="mt-3 text-[13px] font-medium text-dark-teal/70 border border-[#eef0f3] rounded-xl px-4 py-1.5 hover:bg-accent/5 transition-colors"
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
}
