"use client";

import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Link } from "react-router-dom";
import { LogOut, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function AccountMenu() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-3 cursor-pointer">
        {/* FOTO PROFIL */}
        <img
          src="/src/assets/profile.png"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover border"
        />

        {/* NAMA */}
        <div className="text-left">
          <p className="text-[#2D3036] text-[16px] font-medium leading-tight">
            Halo, Admin
          </p>
          <p className="text-[#2D3036] text-[13px]">Selamat datang</p>
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0 rounded-lg shadow-lg">
        {/* ITEM: PENGATURAN AKUN */}
        <Link
          to="/settings"
          className="flex items-center justify-center gap-3 px-4 py-3 hover:bg-gray-50 transition"
        >
          <Settings size={16} className="text-gray-800" />
          <span className="text-[13px] text-gray-800 font-semibold">
            Pengaturan Akun
          </span>
        </Link>

        <Separator />

        {/* ITEM: LOGOUT */}
        <Link
          to="/"
          className="flex items-center justify-center gap-3 px-4 py-3 hover:bg-red-50 transition"
        >
          <LogOut size={16} className="text-red-500" />
          <span className="text-[13px] text-red-500 font-semibold">Logout</span>
        </Link>
      </PopoverContent>
    </Popover>
  );
}
