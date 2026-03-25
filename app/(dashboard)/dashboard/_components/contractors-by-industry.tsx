import { MoreHorizontal } from "lucide-react";
import { contractorsByIndustry } from "./mock-data";

export default function ContractorsByIndustry() {
  return (
    <div className="bg-white rounded-2xl border border-[#eef0f3] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[15px] font-semibold text-dark-teal">
          Contratistas por Rubro
        </h3>
        <button type="button" className="text-dark-teal/30 hover:text-dark-teal/60 transition-colors">
          <MoreHorizontal className="w-5 h-5" strokeWidth={1.8} />
        </button>
      </div>

      {/* Segments */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contractorsByIndustry.map((seg) => {
          const pct = Math.round((seg.count / seg.total) * 100);

          return (
            <div
              key={seg.label}
              className="bg-[#fafbfc] rounded-xl p-4 border border-[#eef0f3]/60"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: seg.color + "15" }}
                >
                  <seg.icon
                    className="w-[18px] h-[18px]"
                    style={{ color: seg.color }}
                    strokeWidth={1.8}
                  />
                </div>
                <span className="text-[22px] font-bold tracking-[-0.02em] text-dark-teal leading-none">
                  {seg.count}
                </span>
              </div>

              <span className="text-[13px] text-dark-teal/50 font-medium block mb-2.5">
                {seg.label}
              </span>

              {/* Progress bar */}
              <div className="h-[5px] rounded-full bg-dark-teal/5">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${pct}%`, backgroundColor: seg.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
