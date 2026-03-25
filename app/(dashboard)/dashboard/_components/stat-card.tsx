import { TrendingUp, TrendingDown } from "lucide-react";
import type { StatCardData } from "./mock-data";

export default function StatCard({ title, value, change, icon: Icon }: StatCardData) {
  const positive = change >= 0;

  return (
    <div className="bg-white rounded-2xl border border-[#eef0f3] px-5 py-3.5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[14px] text-dark-teal/80 font-semibold tracking-tight">{title}</span>
        <div className="w-9 h-9 rounded-xl bg-accent/8 flex items-center justify-center">
          <Icon className="w-[18px] h-[18px] text-accent" strokeWidth={1.8} />
        </div>
      </div>

      <div className="text-[28px] font-bold tracking-[-0.02em] text-dark-teal leading-none flex items-center gap-2">
        {value}
        <span
          className={`h-fit inline-flex items-center gap-0.5 text-[12px] font-semibold px-1.5 py-1.5 rounded-md ${
            positive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-500"
          }`}
        >
          {positive ? (
            <TrendingUp className="w-3 h-3" strokeWidth={2.5} />
          ) : (
            <TrendingDown className="w-3 h-3" strokeWidth={2.5} />
          )}
          {Math.abs(change)}%
        </span>
      </div>

      <div className="flex items-center gap-2 mt-2.5">
        <span className="text-[12px] text-dark-teal/40">vs. mes anterior</span>
      </div>
    </div>
  );
}
