"use client";

import { TrendingUp, MoreHorizontal } from "lucide-react";
import { documentsProcessedData } from "./mock-data";

const W = 500;
const H = 180;
const PAD_TOP = 10;

function toPoints(data: number[]): string {
  const max = Math.max(...data) * 1.15;
  const step = W / (data.length - 1);
  return data
    .map((v, i) => `${i * step},${PAD_TOP + (H - PAD_TOP) * (1 - v / max)}`)
    .join(" ");
}

function toAreaPoints(data: number[]): string {
  const line = toPoints(data);
  const max = Math.max(...data) * 1.15;
  const step = W / (data.length - 1);
  const lastX = (data.length - 1) * step;
  return `0,${H} ${line} ${lastX},${H}`;
}

const { labels, thisMonth, lastMonth, totalThisMonth, changePercent } =
  documentsProcessedData;

const yMax = Math.max(...thisMonth, ...lastMonth) * 1.15;
const yTicks = [0, Math.round(yMax * 0.33), Math.round(yMax * 0.66), Math.round(yMax)];

export default function DocumentsProcessedChart() {
  return (
    <div className="bg-white rounded-2xl border border-[#eef0f3] p-5">
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-[15px] font-semibold text-dark-teal">
          Documentos Procesados
        </h3>
        <button type="button" className="text-dark-teal/30 hover:text-dark-teal/60 transition-colors">
          <MoreHorizontal className="w-5 h-5" strokeWidth={1.8} />
        </button>
      </div>

      {/* Big number */}
      <div className="flex items-end gap-3 mb-5">
        <span className="text-[32px] font-bold tracking-[-0.02em] text-dark-teal leading-none">
          {totalThisMonth}
        </span>
        <span className="inline-flex items-center gap-0.5 text-[12px] font-semibold px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600 mb-1">
          <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
          {changePercent}%
        </span>
        <span className="text-[12px] text-dark-teal/40 mb-1">vs. mes anterior</span>
      </div>

      {/* Chart area */}
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-[180px] flex flex-col justify-between text-[10px] text-dark-teal/30 font-medium pr-2 pointer-events-none">
          {[...yTicks].reverse().map((v) => (
            <span key={v}>{v}</span>
          ))}
        </div>

        {/* SVG chart */}
        <div className="ml-8">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6581EA" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#6581EA" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            {yTicks.map((v) => {
              const y = PAD_TOP + (H - PAD_TOP) * (1 - v / yMax);
              return (
                <line
                  key={v}
                  x1="0"
                  y1={y}
                  x2={W}
                  y2={y}
                  stroke="#eef0f3"
                  strokeWidth="1"
                />
              );
            })}

            {/* Area fill */}
            <polygon
              points={toAreaPoints(thisMonth)}
              fill="url(#areaGrad)"
            />

            {/* Last month line (dashed) */}
            <polyline
              points={toPoints(lastMonth)}
              fill="none"
              stroke="#67B4C1"
              strokeWidth="2"
              strokeDasharray="6 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* This month line */}
            <polyline
              points={toPoints(thisMonth)}
              fill="none"
              stroke="#6581EA"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data dots (this month) */}
            {thisMonth.map((v, i) => {
              const x = i * (W / (thisMonth.length - 1));
              const y = PAD_TOP + (H - PAD_TOP) * (1 - v / yMax);
              return (
                <circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3.5"
                  fill="white"
                  stroke="#6581EA"
                  strokeWidth="2"
                />
              );
            })}
          </svg>

          {/* X-axis labels */}
          <div className="flex justify-between mt-2 text-[10px] text-dark-teal/30 font-medium">
            {labels.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 mt-4">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="text-[11px] text-dark-teal/50 font-medium">Este mes</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-light-teal" />
          <span className="text-[11px] text-dark-teal/50 font-medium">Mes anterior</span>
        </div>
      </div>
    </div>
  );
}
