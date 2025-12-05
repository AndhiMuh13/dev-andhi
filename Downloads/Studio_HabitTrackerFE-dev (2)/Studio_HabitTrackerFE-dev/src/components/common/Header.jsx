import React from "react";
import { Bell, Search, Menu } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

// Import Komponen Shadcn
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Notification from "@/components/common/Notification";
import AccountMenu from "@/components/common/AccountMenu";

export default function Header() {
  const location = useLocation();
  const { toggleSidebar } = useSidebar();

  const pathnames = location.pathname.split("/").filter((x) => x);

  // Mapping URL slug
  const breadcrumbNameMap = {
    dashboard: "Dashboard",
    managementuser: "Manajemen User",
    managementculture: "Manajemen Culture",
    managementfile: "Manajemen File",
    statisticsreport: "Laporan & Statistik",
    settings: "Pengaturan",
  };

  return (
    <header className="flex w-full items-center justify-between bg-white px-6 md:px-8 py-5 border-b border-[#E2E8F0] sticky top-0 z-20">
      {/* LEFT SECTION: Dynamic Breadcrumb */}
      <div className="hidden md:block w-[270px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              {pathnames.length > 0 ? (
                <BreadcrumbLink asChild>
                  <Link
                    to="/"
                    className="text-sm font-medium text-[#64748B] hover:text-green-600 transition-colors"
                  >
                    Dashboard
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="text-sm font-semibold text-[#1E293B]">
                  Dashboard
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>

            {pathnames.map((value, index) => {
              const isLast = index === pathnames.length - 1;
              const displayName = breadcrumbNameMap[value] || value; // Fallback ke nama asli jika tidak ada di map

              return (
                <React.Fragment key={value}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="text-sm font-semibold text-[#1E293B]">
                        {displayName}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink className="text-sm font-medium text-[#64748B]">
                        {displayName}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* CENTER SECTION: Search Bar */}
      <div className="hidden flex-1 md:flex justify-center px-4">
        <div className="relative w-full max-w-sm">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={20} />
          </span>
          <Input
            type="text"
            placeholder="Cari di sini..."
            className="w-full pl-11 pr-4 py-5 rounded-full border-[#E2E8F0] bg-white text-sm text-[#1E293B] placeholder:text-[#94A3B8] focus-visible:ring-green-500/20 focus-visible:border-green-500 shadow-sm"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        {/* POPUP NOTIFIKASI */}
        <Notification />

        {/* Separator */}
        <div className="h-7 w-[1.5px] bg-[#CBD5E1]"></div>

        {/* ACCOUNT & NOTIFICATION */}
        <AccountMenu />
      </div>


    </header>
  );
}
