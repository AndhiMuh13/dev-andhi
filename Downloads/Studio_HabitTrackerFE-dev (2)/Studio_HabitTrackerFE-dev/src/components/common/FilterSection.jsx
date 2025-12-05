"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Download, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterSection({ onFilterApply, onExport }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [division, setDivision] = useState("");

  return (
    <div className="w-full bg-white border border-[#9CA1AA] rounded-[10px] shadow-[0px_5px_5px_rgba(0,0,0,0.1)] p-6">
      {/* Container */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-4">
        {/* GROUP 1: INPUTS (Tanggal & Divisi) */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full lg:w-auto">
          {/* Rentang Tanggal */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#3B3F46]">
              Rentang Tanggal
            </label>
            <div className="flex flex-col md:flex-row items-center gap-2">
              {/* Start Date */}
              <DatePickerWithReset
                date={startDate}
                setDate={setStartDate}
                placeholder="25/11/2022"
              />

              {/* Divider Strip */}
              <span className="hidden md:block text-[#3B3F46] font-bold text-xl">
                –
              </span>

              {/* End Date */}
              <DatePickerWithReset
                date={endDate}
                setDate={setEndDate}
                placeholder="25/11/2022"
              />
            </div>
          </div>

          {/* Filter Divisi */}
          <div className="flex flex-col gap-2 w-full lg:w-[200px]">
            <label className="text-sm font-semibold text-[#3B3F46]">
              Filter per Divisi
            </label>
            <Select value={division} onValueChange={setDivision}>
              <SelectTrigger className="w-full h-[45px] rounded-[10px] border-[#9CA1AA] text-[#3B3F46]">
                <SelectValue placeholder="Semua Divisi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Divisi</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="it">IT</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* GROUP 2: ACTIONS (Tombol) */}
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto lg:mb-0.5">
          {/* Tombol Terapkan Filter */}
          <Button
            onClick={() => onFilterApply({ startDate, endDate, division })}
            className="h-[45px] bg-[#22C55E] hover:bg-green-600 text-white font-medium rounded-[10px] px-6 w-full lg:w-auto"
          >
            Terapkan Filter
          </Button>

          {/* Tombol Ekspor */}
          <Button
            variant="outline"
            onClick={onExport}
            className="h-[45px] border-[#9CA1AA] text-[#3B3F46] font-medium rounded-[10px] px-6 w-full lg:w-auto flex items-center justify-center gap-2 hover:bg-gray-50"
          >
            <Download size={18} />
            Ekspor Laporan
          </Button>
        </div>
      </div>
    </div>
  );
}

// SUB-COMPONENT: Date Picker
function DatePickerWithReset({ date, setDate, placeholder }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full lg:w-36 h-[45px] justify-start text-left font-normal rounded-[10px] border-[#9CA1AA] relative px-3",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4 text-[#3B3F46]" />
          <span className="text-[#3B3F46]">
            {date ? format(date, "dd/MM/yyyy") : <span>{placeholder}</span>}
          </span>

          {date && (
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#3B3F46] rounded-full p-0.5 cursor-pointer hover:bg-black"
              onClick={(e) => {
                e.stopPropagation();
                setDate(null);
              }}
            >
              <X className="h-3 w-3 text-white" />
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
