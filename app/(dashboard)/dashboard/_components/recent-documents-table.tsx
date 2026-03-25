import { MoreHorizontal, FileText } from "lucide-react";
import { recentDocuments } from "./mock-data";
import type { RecentDocument } from "./mock-data";

const statusConfig: Record<
  RecentDocument["status"],
  { label: string; dotClass: string; badgeClass: string }
> = {
  vigente: {
    label: "Vigente",
    dotClass: "bg-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  por_vencer: {
    label: "Por vencer",
    dotClass: "bg-amber-500",
    badgeClass: "bg-amber-50 text-amber-600 border-amber-200",
  },
  vencido: {
    label: "Vencido",
    dotClass: "bg-red-500",
    badgeClass: "bg-red-50 text-red-500 border-red-200",
  },
};

export default function RecentDocumentsTable() {
  return (
    <div className="bg-white rounded-2xl border border-[#eef0f3] p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] text-dark-teal/80 font-semibold tracking-tight">
          Documentos Recientes
        </h3>
        <button type="button" className="text-dark-teal/30 hover:text-dark-teal/60 transition-colors">
          <MoreHorizontal className="w-5 h-5" strokeWidth={1.8} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px]">
          <thead>
            <tr className="text-[11px] uppercase tracking-wider text-dark-teal/40 font-semibold">
              <th className="text-left pb-3 font-semibold">ID</th>
              <th className="text-left pb-3 font-semibold">Contratista</th>
              <th className="text-left pb-3 font-semibold">Tipo</th>
              <th className="text-left pb-3 font-semibold">Estado</th>
              <th className="text-right pb-3 font-semibold">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {recentDocuments.map((doc) => {
              const cfg = statusConfig[doc.status];
              return (
                <tr
                  key={doc.id}
                  className="border-t border-[#eef0f3] hover:bg-[#fafbfc] transition-colors"
                >
                  <td className="py-3 text-[13px] text-dark-teal/50 font-medium">
                    {doc.id}
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-accent/8 flex items-center justify-center shrink-0">
                        <FileText className="w-4 h-4 text-accent" strokeWidth={1.8} />
                      </div>
                      <span className="text-[13px] text-dark-teal font-medium truncate max-w-[160px]">
                        {doc.contractor}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 text-[13px] text-dark-teal/60">
                    {doc.type}
                  </td>
                  <td className="py-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-md border ${cfg.badgeClass}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dotClass}`} />
                      {cfg.label}
                    </span>
                  </td>
                  <td className="py-3 text-[13px] text-dark-teal/40 text-right">
                    {doc.date}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
