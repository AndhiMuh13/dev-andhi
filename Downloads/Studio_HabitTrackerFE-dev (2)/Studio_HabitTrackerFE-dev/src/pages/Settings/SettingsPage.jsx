import React from "react";
import AppSidebar from "@/components/common/AppSidebar";
import Header from "@/components/common/Header";
import SettingsTab from "@/components/common/SettingsTab";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function SettingsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex flex-1 flex-col h-screen">
        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="px-5 py-4 overflow-y-auto flex-1">
          <h1 className="text-2xl sm:text-[27px] font-semibold text-[#3B3F46] mb-1">
            Pengaturan Sistem
          </h1>
          <p className="text-sm sm:text-lg mb-6 text-[#3B3F46]">
            Kelola konfigurasi sistem dan keamanan aplikasi
          </p>

          {/* TABS */}
          <SettingsTab/>
        </main>
      </div>
    </SidebarProvider>
  );
}
