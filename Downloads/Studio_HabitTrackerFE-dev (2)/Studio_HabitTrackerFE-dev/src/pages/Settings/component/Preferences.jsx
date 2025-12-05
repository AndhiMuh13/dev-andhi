import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Preferences() {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      {/* ================= BACKUP ================= */}
      <section className="flex flex-col gap-[12px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            {/* ICON */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M17.7375 9.20341C17.1142 6.04091 14.3367 3.66675 11 3.66675C8.35083 3.66675 6.05 5.17008 4.90417 7.37008C2.145 7.66341 0 10.0009 0 12.8334C0 15.8676 2.46583 18.3334 5.5 18.3334H17.4167C19.9467 18.3334 22 16.2801 22 13.7501C22 11.3301 20.1208 9.36841 17.7375 9.20341ZM17.4167 16.5001H5.5C3.47417 16.5001 1.83333 14.8592 1.83333 12.8334C1.83333 10.9542 3.23583 9.38675 5.09667 9.19425L6.0775 9.09341L6.53583 8.22258C7.40667 6.54508 9.11167 5.50008 11 5.50008C13.4017 5.50008 15.4733 7.20508 15.9408 9.56091L16.2158 10.9359L17.6183 11.0367C19.0483 11.1284 20.1667 12.3292 20.1667 13.7501C20.1667 15.2626 18.9292 16.5001 17.4167 16.5001ZM7.33333 11.9167H9.67083V14.6667H12.3292V11.9167H14.6667L11 8.25008L7.33333 11.9167Z"
                fill="#3B3F46"
              />
            </svg>

            <div className="flex flex-col">
              <span className="font-semibold text-[16px]">Backup Database</span>
              <span className="text-[13px]">Buat cadangan data sistem.</span>
            </div>
          </div>

          <button className="w-[170px] h-[42px] bg-[#22C55E] rounded-[8px] px-[15px] py-[8px] flex items-center justify-center font-poppins font-semibold text-[13px] leading-[18px] tracking-[0] text-white text-center">
            Backup Sekarang
          </button>
        </div>

        <Input
          readOnly
          value="Terakhir di-backup : 18 November 2025 15.30"
          className="w-full h-[44px] px-[20px] border border-[#898E99] rounded-[10px] font-poppins font-normal text-[13px] leading-[140%] text-[#9CA1AA]"
        />
      </section>

      <div className="w-full border border-[#9CA1AA]"></div>

      {/* ================= RESTORE ================= */}
      <section className="flex flex-col gap-[12px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none">
              <path
                d="M11 0C6.44417 0 2.75 3.69417 2.75 8.25H0L3.66667 11.9075L7.33333 8.25H4.58333C4.58333 4.7025 7.4525 1.83333 11 1.83333C14.5475 1.83333 17.4167 4.7025 17.4167 8.25C17.4167 11.7975 14.5475 14.6667 11 14.6667C9.23083 14.6667 7.62667 13.9425 6.47167 12.7783L5.17 14.08C6.66417 15.5742 8.7175 16.5 11 16.5C15.5558 16.5 19.25 12.8058 19.25 8.25C19.25 3.69417 15.5558 0 11 0ZM10.0833 4.58333V9.16667L13.9792 11.4767L14.685 10.3033L11.4583 8.3875V4.58333H10.0833Z"
                fill="#3B3F46"
              />
            </svg>

            <div className="flex flex-col">
              <span className="font-semibold text-[16px]">
                Restore Database
              </span>
              <span className="text-[13px]">Pulihkan data dari cadangan.</span>
            </div>
          </div>

          <button className="w-[170px] h-[42px] bg-[#22C55E] rounded-[8px] px-[15px] py-[8px] flex items-center justify-center font-poppins font-semibold text-[13px] leading-[18px] text-white">
            Backup Sekarang
          </button>
        </div>

        <Input
          type="file"
          className="w-full h-[44px] px-[20px] border border-[#898E99] rounded-[10px] font-poppins font-normal text-[13px] leading-[140%] text-[#9CA1AA] file:text-[#9CA1AA] file:bg-transparent file:border-0"
        />
      </section>
    </div>
  );
}