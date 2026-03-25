import type { LucideIcon } from "lucide-react";
import {
  Users,
  FileCheck,
  AlertTriangle,
  Clock,
  HardHat,
  Wrench,
  Truck,
} from "lucide-react";

// --- Stat Cards ---

export type StatCardData = {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
};

export const statCards: StatCardData[] = [
  { title: "Contratistas Activos", value: "118", change: 12.5, icon: Users },
  { title: "Documentos Vigentes", value: "964", change: 8.2, icon: FileCheck },
  { title: "Alertas Pendientes", value: "17", change: -15.3, icon: AlertTriangle },
  { title: "Docs. por Vencer", value: "35", change: 5.1, icon: Clock },
];

// --- Documents Processed (line chart) ---

export const documentsProcessedData = {
  labels: ["01 Mar", "05 Mar", "09 Mar", "13 Mar", "17 Mar", "21 Mar", "25 Mar"],
  thisMonth: [90, 139, 120, 165, 146, 188, 173],
  lastMonth: [71, 105, 98, 124, 116, 135, 128],
  totalThisMonth: "2.136",
  changePercent: 18.4,
};

// --- Weekly Activity (bar chart) ---

export const weeklyActivityData = [
  { day: "Lun", value: 34 },
  { day: "Mar", value: 47 },
  { day: "Mie", value: 41 },
  { day: "Jue", value: 59 },
  { day: "Vie", value: 53 },
  { day: "Sab", value: 19 },
  { day: "Dom", value: 9 },
];

// --- Contractors by Industry (segments) ---

export type IndustrySegment = {
  label: string;
  count: number;
  total: number;
  color: string;
  colorEnd: string;
  icon: LucideIcon;
};

export const contractorsByIndustry: IndustrySegment[] = [
  { label: "Construccion", count: 51, total: 118, color: "#6581EA", colorEnd: "#8DA4F8", icon: HardHat },
  { label: "Servicios", count: 39, total: 118, color: "#67B4C1", colorEnd: "#91D4DE", icon: Wrench },
  { label: "Transporte", count: 28, total: 118, color: "#F59E0B", colorEnd: "#FBBF24", icon: Truck },
];

// --- Compliance Rate (gauge) ---

export const complianceRate = {
  current: 87,
  target: 95,
};

// --- Recent Documents (table) ---

export type RecentDocument = {
  id: string;
  contractor: string;
  type: string;
  status: "vigente" | "por_vencer" | "vencido";
  date: string;
};

export const recentDocuments: RecentDocument[] = [
  { id: "DOC-1041", contractor: "Constructora Andes SpA", type: "Certificado F30-1", status: "vigente", date: "22 Mar 2026" },
  { id: "DOC-1038", contractor: "Servicios ProClean Ltda.", type: "Poliza de Seguro", status: "por_vencer", date: "20 Mar 2026" },
  { id: "DOC-1035", contractor: "Transportes Rapidos S.A.", type: "Licencia Municipal", status: "vencido", date: "18 Mar 2026" },
  { id: "DOC-1032", contractor: "Electrica del Sur SpA", type: "Contrato Vigente", status: "vigente", date: "15 Mar 2026" },
  { id: "DOC-1029", contractor: "Aseo Industrial SpA", type: "Certificado AFP", status: "vigente", date: "12 Mar 2026" },
];
