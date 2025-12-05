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

export const UserForm = ({ initialData, onCancel, onSubmit }) => {
  const isEditMode = !!initialData;

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {/* Nama Lengkap */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">
          Nama Lengkap
        </Label>
        <Input
          defaultValue={initialData?.name}
          placeholder="Masukan Nama Lengkap"
          className="rounded-[10px] border-[#898E99] h-11 text-[13px]"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">Email</Label>
        <Input
          type="email"
          defaultValue={initialData?.email}
          placeholder="Masukan Email"
          className="rounded-[10px] border-[#898E99] h-11 text-[13px]"
        />
      </div>

      {/* Password */}
      {!isEditMode && (
        <div className="flex flex-col gap-2">
          <Label className="text-[13px] font-normal text-[#3B3F46]">
            Password
          </Label>
          <Input
            type="password"
            placeholder="Masukan Password"
            className="rounded-[10px] border-[#898E99] h-11 text-[13px]"
          />
        </div>
      )}

      {/* Role */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">Role</Label>
        <Select defaultValue={initialData?.role}>
          <SelectTrigger className="rounded-[10px] border-[#898E99] h-11 text-[13px] text-[#3B3F46]">
            <SelectValue placeholder="Pilih Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Admin">Admin</SelectItem>
            <SelectItem value="Manager">Manager</SelectItem>
            <SelectItem value="Staff">Staff</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Rentang Tanggal */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">
          Rentang Tanggal
        </Label>
        <Input
          type="date"
          defaultValue={initialData?.date}
          className="rounded-[10px] border-[#898E99] h-11 text-[13px]"
        />
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-end gap-4 pt-4">
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="
          w-[100px] h-8 border-[#1FB356] text-[#22C55E] hover:bg-green-50 hover:text-[#22C55E] rounded-xl text-[11px] font-semibold"
        >
          Batal
        </Button>

        <Button
          type="submit"
          className="
          w-[100px] h-8 bg-[#22C55E] hover:bg-green-600 text-white rounded-xl text-[11px] font-semibold"
        >
          Simpan
        </Button>
      </div>
    </form>
  );
};
