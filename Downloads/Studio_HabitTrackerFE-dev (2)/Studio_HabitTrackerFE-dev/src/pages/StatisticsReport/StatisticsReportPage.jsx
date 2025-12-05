import React from "react";
import AppSidebar from "@/components/common/AppSidebar";
import Header from "@/components/common/Header";
import StatsCard from "@/components/common/StatsCard";
import PerformanceChart from "@/components/common/PerformanceChart";
import { UsersRound, ChartLine, BadgeCheck, Smile } from "lucide-react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DataTable from "@/components/common/DataTable";
import StatusBadge from "@/components/common/StatusBadge";
import {
  DEFAULT_BADGE_STYLE,
  COMPILANCE_RATE_STYLES,
  INITIAL_DATA as data,
  INITIAL_DATA_COMPILANCE_RATE as chartData,
} from "@/pages/StatisticsReport/Constants";
import DataCard from "@/components/common/DataCard";
import FilterSection from "@/components/common/FilterSection";

const columns = [
  {
    accessorKey: "division",
    header: "Divisi",
    cell: ({ row }) => (
      <div className="text-[15px] text-[#3B3F46]">
        {row.getValue("division")}
      </div>
    ),
  },
  {
    accessorKey: "employeeCount",
    header: "jumlah Karyawan",
    cell: ({ row }) => (
      <div className="text-[15px] text-[#3B3F46]">
        {row.getValue("employeeCount")}
      </div>
    ),
  },
  {
    accessorKey: "complianceRate",
    header: "Kepatuhan",
    cell: ({ row }) => {
      const value = row.getValue("complianceRate");
      const colorClass = COMPILANCE_RATE_STYLES[value] || DEFAULT_BADGE_STYLE;

      return <StatusBadge className={colorClass}>{value}</StatusBadge>;
    },
  },
  {
    accessorKey: "filledHabits",
    header: "Habit Terisi",
    cell: ({ row }) => (
      <div className="text-[13px] text-[#3B3F46]">
        {row.getValue("filledHabits")} poin
      </div>
    ),
  },
  {
    accessorKey: "bestUser",
    header: "User Terbaik",
    cell: ({ row }) => (
      <div className="text-[13px] text-[#3B3F46]">
        {row.getValue("bestUser")}
      </div>
    ),
  },
];

// Mobile Card
export const MobileCard = (row) => {
  const { division, employeeCount, complianceRate, filledHabits, bestUser } =
    row.original;

  const compilanceRateColor =
    COMPILANCE_RATE_STYLES[complianceRate] || DEFAULT_BADGE_STYLE;

  return (
    <DataCard
      title={division}
      topBadge={
        <StatusBadge className={compilanceRateColor}>
          {complianceRate} %
        </StatusBadge>
      }
      actions={
        <StatusBadge className="mx-auto w-full border border-gray-400 text-[#3B3F46]">
          User Terbaik: {bestUser}
        </StatusBadge>
      }
    >
      <p className="text-[13px] text-[#3B3F46] font-medium">
        {employeeCount} Karyawan
      </p>
      <p className="text-[13px] text-[#3B3F46] font-medium">
        {filledHabits} Habit Terisi
      </p>
    </DataCard>
  );
};

export default function Dashboard() {
  // Simulasi fungsi filter dan ekspor
  const handleFilter = (filterData) => {
    console.log("Filter diterapkan:", filterData);
  };

  const handleExport = () => {
    console.log("Ekspor data...");
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col h-screen">
        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="px-5 py-4 overflow-y-auto flex-1">
          <h1 className="text-2xl sm:text-[27px] font-semibold text-[#3B3F46] mb-1">
            Laporan & Statistik Global
          </h1>
          <p className="text-sm sm:text-lg mb-6 text-[#3B3F46]">
            Pantau performa dan kepatuhan seluruh organisasi
          </p>

          <div className="flex flex-col gap-8">
            <FilterSection
              onFilterApply={handleFilter}
              onExport={handleExport}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              <StatsCard
                title="Kepatuhan Rata-rata"
                value="87%"
                subtitle="+5% dari minggu lalu"
                icon={ChartLine}
              />

              <StatsCard
                title="Total Habit Terisi"
                value="87%"
                subtitle="+5% dari kemarin"
                icon={ChartLine}
              />

              <StatsCard
                title="User Paling Aktif"
                value="94%"
                subtitle="+2% dari minggu lalu"
                icon={ChartLine}
              />
            </div>

            <PerformanceChart
              title="Trend Kepatuhan Mingguan"
              data={chartData}
              legend1="Performa Aktual"
              legend2="Target"
            />

            {/*  */}
            <DataTable
              columns={columns}
              data={data}
              renderMobileItem={MobileCard}
            />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
