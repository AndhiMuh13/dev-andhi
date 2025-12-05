"use client";

import React, { memo } from "react";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const PerformanceChart = ({
  title = "Grafik Performa",
  description = "Statistics",
  data = [],
  legend1 = "Performa Aktual",
  legend2 = "Target",
  filterText = "Last 6 months",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Cek saat pertama load
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Formatter label mobile
  const formatXAxis = (value) => {
    if (isMobile) {
      return value.replace("Minggu", "M");
    }
    return value;
  };
  return (
    <Card className="p-6 rounded-2xl shadow-md border bg-white w-full">
      <CardHeader className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10 gap-4 md:gap-0">
        {/* Judul & Deskripsi */}
        <div className="w-full md:w-auto">
          <CardDescription>{description}</CardDescription>
          <CardTitle className="text-[19px] font-medium">{title}</CardTitle>
        </div>

        {/* Group Kanan: Legend & Tombol */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
          {/* Legend */}
          <div className="flex justify-start md:justify-end text-xs gap-5 w-full md:w-auto">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-300 rounded-full" />
              <span>{legend1}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-100 rounded-full" />
              <span>{legend2}</span>
            </div>
          </div>

          {/* Dropdown Filter */}
          <button className="w-full md:w-auto flex items-center justify-between text-gray-800 bg-gray-50 border border-gray-300 rounded-full px-4 py-2.5 text-sm hover:bg-gray-100 transition">
            {filterText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </CardHeader>

      {/* CHART SECTION */}
      <CardContent className="p-0 md:p-6 pt-0">
        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }} // Kurangi margin kiri di mobile
              barCategoryGap="25%"
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal
                vertical={false}
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tickFormatter={formatXAxis}
                interval={0}
                height={35}
                style={{ fontSize: "12px", fill: "#6B7280" }}
              />

              <YAxis
                domain={[0, 100]}
                ticks={[0, 10, 25, 50, 75, 100]}
                axisLine={false}
                tickLine={false}
                width={30}
                style={{ fontSize: "12px", fill: "#6B7280" }}
              />

              <Tooltip
                cursor={{ fill: "transparent" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />

              <Bar
                dataKey="actual"
                stackId="a"
                fill="#6BD893"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="target"
                stackId="a"
                fill="#BAEDCD"
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(PerformanceChart);
