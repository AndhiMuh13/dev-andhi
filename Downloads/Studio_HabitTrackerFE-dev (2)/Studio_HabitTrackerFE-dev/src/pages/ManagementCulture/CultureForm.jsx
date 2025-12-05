import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CultureForm = ({ initialData, onCancel, onSubmit }) => {
  // Deteksi Mode (Add/Edit)
  const isEditMode = !!initialData;

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        // Nanti di sini logic ambil data form
        onSubmit();
      }}
    >
      {/* Nama Habit */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">
          Nama Habit
        </Label>
        <Input
          defaultValue={initialData?.habitName}
          placeholder="Contoh: Makan Siang Bersama"
          className="rounded-[10px] border-[#898E99] h-11 text-[13px]"
        />
      </div>

      {/* Kategori */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">
          Kategori
        </Label>
        <Input
          defaultValue={initialData?.category}
          placeholder="Contoh: Harian, Mingguan, Budaya"
          className="rounded-[10px] border-[#898E99] h-11 text-[13px]"
        />
      </div>

      {/* Frekuensi (Dropdown) */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">
          Frekuensi
        </Label>
        <Select defaultValue={initialData?.frequency}>
          <SelectTrigger className="rounded-[10px] border-[#898E99] h-11 text-[13px] text-[#3B3F46]">
            <SelectValue placeholder="Pilih Frekuensi" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Harian">Harian</SelectItem>
            <SelectItem value="Mingguan">Mingguan</SelectItem>
            <SelectItem value="Bulanan">Bulanan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bobot Poin (Number) */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">
          Bobot Poin
        </Label>
        <Input
          type="number"
          defaultValue={initialData?.points}
          placeholder="Masukan Angka"
          className="rounded-[10px] border-[#898E99] h-11 text-[13px]"
        />
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-end gap-4 mt-4">
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="w-[100px] h-8 border-[#1FB356] text-[#22C55E] hover:bg-green-50 hover:text-[#22C55E] rounded-xl text-[11px] font-semibold"
        >
          Batal
        </Button>
        <Button
          type="submit"
          className="w-[100px] h-8 bg-[#22C55E] hover:bg-green-600 text-white rounded-xl text-[11px] font-semibold"
        >
          Simpan
        </Button>
      </div>
    </form>
  );
};
