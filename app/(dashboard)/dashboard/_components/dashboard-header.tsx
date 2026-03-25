import { Button } from "@heroui/button";
import { CalendarDays, Download, LayoutGrid } from "lucide-react";

const btnClass =
  "inline-flex items-center gap-2 border border-[#eef0f3] bg-white text-dark-teal/70 text-[13px] font-medium rounded-full px-4 py-2";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <h1 className="text-[24px] font-semibold tracking-[-0.02em] text-dark-teal">
        Panel
      </h1>

      <div className="flex items-center gap-2.5 flex-wrap">
        <div className={btnClass}>
          <CalendarDays className="w-4 h-4" strokeWidth={1.8} />
          <span>01 Mar - 25 Mar 2026</span>
          <span className="text-dark-teal/30">|</span>
          <span className="text-dark-teal/50">Últimos 30 días</span>
        </div>

        <Button className={btnClass}>
          <LayoutGrid className="w-4 h-4" strokeWidth={1.8} />
          Agregar widget
        </Button>

        <Button
          variant="shadow"
          radius="full"
          style={{ background: "linear-gradient(135deg, #6581EA, #5A72D6)" }}
          className="items-center gap-2 text-white text-[13px] font-medium h-9"
        >
          <Download className="w-4 h-4" strokeWidth={2} />
          Exportar
        </Button>
      </div>
    </div>
  );
}
