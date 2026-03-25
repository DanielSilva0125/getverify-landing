import { statCards } from "./_components/mock-data";
import DashboardHeader from "./_components/dashboard-header";
import StatCard from "./_components/stat-card";
import DocumentsProcessedChart from "./_components/documents-processed-chart";
import WeeklyActivityChart from "./_components/weekly-activity-chart";
import ContractorsByIndustry from "./_components/contractors-by-industry";
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

      {/* Line chart + Bar chart */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
        <DocumentsProcessedChart />
        <WeeklyActivityChart />
      </div>

      {/* Segments + Gauge */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
        <ContractorsByIndustry />
        <ComplianceRateGauge />
      </div>

      {/* Table + AI assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
        <RecentDocumentsTable />
        <AIAssistantCard />
      </div>
    </div>
  );
}
