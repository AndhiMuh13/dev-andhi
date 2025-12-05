import React from "react";
import AppSidebar from "@/components/common/AppSidebar";
import Header from "@/components/common/Header";
import StatsCard from "@/components/common/StatsCard";
import PerformanceChart from "@/components/common/PerformanceChart";
import { UsersRound, ChartLine, BadgeCheck, Smile } from "lucide-react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const data = [
  { name: "HR", actual: 65, target: 30 },
  { name: "Finance", actual: 45, target: 55 },
  { name: "Operation", actual: 20, target: 80 },
  { name: "Marketing", actual: 25, target: 75 },
  { name: "IT", actual: 30, target: 65 },
  { name: "Sales", actual: 68, target: 29 },
];

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col h-screen">
        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="px-5 py-4 overflow-y-auto flex-1">
          <h1 className="text-2xl sm:text-[27px] font-semibold text-[#3B3F46] mb-1">
            Dashboard
          </h1>
          <p className="text-sm sm:text-lg mb-6 text-[#3B3F46]">
            Selamat datang kembali, Admin!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
            <StatsCard
              title="Total Karyawan"
              value="342"
              subtitle="+12% dari bulan lalu"
              icon={UsersRound}
            />

            <StatsCard
              title="Progress Hari Ini"
              value="87%"
              subtitle="+5% dari kemarin"
              icon={ChartLine}
            />

            <StatsCard
              title="Cek Mingguan"
              value="94%"
              subtitle="+2% dari minggu lalu"
              icon={BadgeCheck}
            />

            <StatsCard
              title="Total Habit"
              value="1,250"
              subtitle="+45 habit baru"
              icon={Smile}
            />
          </div>

          <PerformanceChart data={data} />
        </main>
      </div>
    </SidebarProvider>
  );
}
