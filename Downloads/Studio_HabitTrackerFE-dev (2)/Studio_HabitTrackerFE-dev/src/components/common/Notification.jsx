"use client";

import React from "react";
import { Bell, MessageSquareMore, X } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function NotificationPopover() {
  const notifications = [
    {
      time: "5 menit yang lalu",
      title: "Budi menyelesaikan habit",
      desc: `Budi baru saja menyelesaikan habit "Doa Pagi Bersama"`,
    },
    {
      time: "5 menit yang lalu",
      title: "File baru diunggah",
      desc: "Admin diunggah file SOP Terbaru di File Center",
    },
    {
      time: "5 menit yang lalu",
      title: "Laporan mingguan siap",
      desc: "Laporan kepatuhan habit mingguan sudah tersedia",
    },
  ];

  return (
    <Popover>
      <PopoverTrigger className="relative cursor-pointer">
        <Bell className="w-7 h-7 text-[#1E293B]" />
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
      </PopoverTrigger>

      <PopoverContent className="w-[340px] p-0 rounded-lg overflow-hidden">
        <div className="text-center py-3 border-b">
          <p className="text-[13px] text-green-500 font-semibold">
            Notifikasi Terbaru
          </p>
        </div>

        {/* LIST */}
        <div className="max-h-[352px] overflow-y-auto">
          {notifications.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 border-b last:border-none hover:bg-gray-50 transition"
            >
              <div className="bg-blue-100 p-1 rounded-md">
                <MessageSquareMore className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="text-[8px] text-[#3B3F46]">{item.time}</p>
                  <button>
                    <X size={20} className="text-[#3B3F46] hover:text-black" />
                  </button>
                </div>

                {/* TITLE */}
                <p className="text-[13px] font-semibold text-[#3B3F46]">
                  {item.title}
                </p>

                {/* DESC */}
                <p className="text-[13px] text-[#3B3F46] mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-3 border-t cursor-pointer">
          <p className="text-green-500 text-[14px] font-semibold">
            Lihat Semua Notifikasi
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
