import React from "react";
import {
  LayoutDashboard,
  Users,
  UserCog,
  FileText,
  Settings,
  Menu,
  BarChart2,
  ChevronsLeft,
  ChevronsRight,
  Bell,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import FullLogo from "@/assets/logos/Habits-Tracker-FullLogo.svg";
import Logo from "@/assets/logos/Habits-Tracker-Logo.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function AppSidebar() {
  const { openMobile, open, toggleSidebar } = useSidebar();
  const location = useLocation();

  const menu = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { label: "Manajemen User", icon: Users, path: "/managementuser" },
    { label: "Manajemen Culture", icon: UserCog, path: "/managementculture" },
    { label: "Manajemen File", icon: FileText, path: "/managementfile" },
    { label: "Notifikasi", icon: Bell, path: "/notifikasi" },
    {
      label: "Laporan & Statistik",
      icon: BarChart2,
      path: "/statisticsreport",
    },
    { label: "Pengaturan", icon: Settings, path: "/settings" },
  ];

  return (
    <>
      {/* HAMBURGER BUTTON (Mobile) */}
      <Button
        onClick={toggleSidebar}
        className={`md:hidden absolute top-4 left-4 z-60 p-2 bg-transparent rounded-lg ${
          openMobile ? "hidden" : ""
        }`}
      >
        <Menu size={25} />
      </Button>

      <Sidebar
        collapsible="icon"
        variant="inset"
        className="max-h-screen h-full bg-green-800 text-white border-r border-gray-200 p-0"
        style={{ "--sidebar-width": "250px", "--sidebar-width-icon": "75px" }}
      >
        <SidebarHeader>
          <div className="flex justify-center items-center p-5 mb-4 transition-all duration-300">
            <img
              src={open ? FullLogo : Logo}
              alt="Logo"
              className="object-contain w-auto h-11 transition-all duration-300"
            />
          </div>
        </SidebarHeader>

        <SidebarContent>
          <nav className="flex flex-col gap-2 list-none w-full">
            {menu.map((m) => {
              const isActive = location.pathname === m.path;

              return (
                <SidebarMenuItem key={m.path}>
                  <Link to={m.path} className="w-full block">
                    <SidebarMenuButton
                      className={`
                        relative
                        flex items-center text-base font-normal transition-all duration-300 ease-in-out
                        w-full
                        ${open ? "gap-2 pl-4" : "justify-center"}
                        ${isActive ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}
                      `}
                      title={!open ? m.label : ""}
                    >
                      {isActive && (
                        <span
                          className="
                            absolute left-0 top-1/2 -translate-y-1/2
                            w-1 h-full bg-green-700
                          "
                        />
                      )}

                      <m.icon size={25} className="transition-all duration-300" />

                      {open && (
                        <span className="whitespace-nowrap transition-opacity duration-300">
                          {m.label}
                        </span>
                      )}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </nav>
        </SidebarContent>

        <SidebarFooter>
          <div
            className={`mb-5 text-white ${
              !open ? "px-1" : "px-5"
            } transition-all duration-300`}
          >
            <button
              onClick={toggleSidebar}
              className={`flex items-center w-full p-2 rounded-lg transition-all duration-300 
              ${!open ? "justify-center" : "justify-center gap-3"}`}
            >
              {!open ? (
                <ChevronsRight size={20} />
              ) : (
                <ChevronsLeft size={20} />
              )}
              {open && <span className="text-base whitespace-nowrap">Collapse</span>}
            </button>

            {open && (
              <p className="mt-1 text-center text-[13px]">Habits Tracking v1.0</p>
            )}
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
