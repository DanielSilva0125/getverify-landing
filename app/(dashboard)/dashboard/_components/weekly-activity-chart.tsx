import { MoreHorizontal } from "lucide-react";
import { weeklyActivityData } from "./mock-data";

const maxValue = Math.max(...weeklyActivityData.map((d) => d.value));

export default function WeeklyActivityChart() {
  return (
    <div className="bg-white rounded-2xl border border-[#eef0f3] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[15px] text-dark-teal/80 font-semibold tracking-tight">
          Actividad Semanal
        </h3>
        <button type="button" className="text-dark-teal/30 hover:text-dark-teal/60 transition-colors">
          <MoreHorizontal className="w-5 h-5" strokeWidth={1.8} />
        </button>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-3 h-[120px] px-1">
        {weeklyActivityData.map((d) => {
          const isMax = d.value === maxValue;
          const pct = (d.value / maxValue) * 100;

          return (
            <div
              key={d.day}
              className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
            >
              {isMax && (
                <span className="text-[12px] font-semibold text-dark-teal">
                  {d.value}
                </span>
              )}
              <div
                className="w-full rounded-lg"
                style={{
                  height: `${pct}%`,
                  background: isMax
                    ? "linear-gradient(180deg, #8DA4F8, #6581EA)"
                    : "linear-gradient(180deg, #e8eaf0, #dddfe6)",
                }}
              />
              <span
                className={`text-[11px] font-medium ${
                  isMax ? "text-accent" : "text-dark-teal/40"
                }`}
              >
                {d.day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
