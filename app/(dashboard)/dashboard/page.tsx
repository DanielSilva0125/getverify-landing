import { statCards } from "./_components/mock-data";
import DashboardHeader from "./_components/dashboard-header";
import StatCard from "./_components/stat-card";
import DocumentsProcessedChart from "./_components/documents-processed-chart";
import WeeklyActivityChart from "./_components/weekly-activity-chart";
import ComplianceRateGauge from "./_components/compliance-rate-gauge";
import RecentDocumentsTable from "./_components/recent-documents-table";
import AIAssistantCard from "./_components/ai-assistant-card";

export default function DashboardPage() {
  return (
    <div className="space-y-5">
      <DashboardHeader />

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      {/* Chart (with contractors nested) + Bar chart & Gauge stacked */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
        <DocumentsProcessedChart />
        <div className="flex flex-col gap-4">
          <WeeklyActivityChart />
          <ComplianceRateGauge />
        </div>
      </div>

      {/* Table + AI assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
        <RecentDocumentsTable />
        <AIAssistantCard />
      </div>
    </div>
  );
}
