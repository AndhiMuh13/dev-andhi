// src/pages/ManagementNotification/NotificationForm.jsx
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TARGET_LIST = [
  "Semua User",
  "Divisi IT",
  "Divisi Marketing",
  "Role Manager",
];
export const CATEGORY_LIST = ["Info", "Penting", "Apresiasi"];

export const NotificationForm = ({ initialData, onCancel, onSubmit }) => {
  const isEditMode = !!initialData;

  // STATE FORM
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [target, setTarget] = useState("Semua User");
  const [category, setCategory] = useState("Info");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setMessage(initialData.message || "");
      setTarget(initialData.target || "Semua User");
      setCategory(initialData.category || "Info");
    }
  }, [initialData]);

  const handleSubmit = (status) => {
    const newData = {
      ...initialData,
      title,
      message,
      target,
      category,
      status, // "Draft" atau "Terkirim"
      date: new Date().toISOString(),
    };

    onSubmit(newData);
  };

  return (
    <form className="flex flex-col gap-4">
      {/* Judul */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">
          Judul Notifikasi
        </Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukan Judul Notifikasi"
          className="rounded-[10px] border-[#898E99] h-11 text-[13px]"
          required
        />
      </div>{" "}
      {/* Pesan */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">
          Isi Pesan
        </Label>

        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Masukan Isi Pesan Notifikasi"
          className="
          rounded-[10px] border-[#898E99] 
          text-[13px] h-20 p-3 
          placeholder:text-[#A9AEB7]
          resize-none
        "
        />
      </div>
      {/* Target Penerima */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">
          Target Penerima
        </Label>
        <Select value={target} onValueChange={setTarget}>
          <SelectTrigger className="rounded-[10px] border-[#898E99] h-11 text-[13px] text-[#3B3F46]">
            <SelectValue placeholder="Pilih Target" />
          </SelectTrigger>
          <SelectContent>
            {TARGET_LIST.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {/* Kategori */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] font-normal text-[#3B3F46]">
          Kategori
        </Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="rounded-[10px] border-[#898E99] h-11 text-[13px] text-[#3B3F46]">
            <SelectValue placeholder="Pilih Kategori" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORY_LIST.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="w-[100px] h-8 border-[#1FB356] text-[#22C55E] hover:bg-green-50 hover:text-[#22C55E] rounded-xl text-[11px] font-semibold"
        >
          Batal
        </Button>
        <div className="flex gap-3">
          <Button
            type="button"
            onClick={() => handleSubmit("Draft")}
            variant="outline"
            className="w-full h-8 border-[#1FB356] text-[#22C55E] hover:bg-green-50 hover:text-[#22C55E] rounded-xl text-[11px] font-semibold"
          >
            Simpan Sebagai Draft
          </Button>

          <Button
            type="button"
            onClick={() => handleSubmit("Terkirim")}
            className="w-[100px] h-8 bg-[#22C55E] hover:bg-green-600 text-white rounded-xl text-[11px] font-semibold"
          >
            Kirim
          </Button>
        </div>
      </div>
    </form>
  );
};
