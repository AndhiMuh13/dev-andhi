import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

export const FileForm = ({ initialData, onCancel, onSubmit }) => {
  const isEdit = Boolean(initialData);

  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Isi field ketika edit
  useEffect(() => {
    if (isEdit) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
    }
  }, [initialData, isEdit]);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      ...initialData,
      file,
      name,
      description,
    };
    onSubmit(newData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* UPLOAD */}
      {!isEdit && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="
      border border-dashed border-[#A9AEB7] rounded-[10px]
      h-[170px] flex flex-col items-center justify-center 
      text-center cursor-pointer p-4
    "
        >
          <Input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileSelect}
          />

          <Label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center gap-1"
          >
            <Upload size={40} className="text-[#3B3F46] mb-1" />

            <p className="font-medium text-[#3B3F46]">
              Seret file ke sini atau klik untuk memilih
            </p>

            <p className="text-[13px] text-[#9CA1AA]">
              Mendukung semua format file
            </p>
          </Label>
        </div>
      )}

      {/* NAMA FILE */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] text-[#3B3F46]">Nama Tampilan File</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contoh: SOP Kerja Kantor"
          className="
            rounded-[10px] border-[#A9AEB7] h-11
            placeholder:text-[#A9AEB7] text-[13px]
          "
        />
      </div>

      {/* DESKRIPSI */}
      <div className="flex flex-col gap-2">
        <Label className="text-[13px] text-[#3B3F46]">Deskripsi Singkat</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Jelaskan isi dan tujuan file ini"
          className="
            rounded-[10px] border-[#A9AEB7]
            text-[13px] h-[100px] p-3 
            placeholder:text-[#A9AEB7] text-[#111827]
            resize-none
          "
        />
      </div>

      {/* BUTTON ACTIONS */}
      <div className="flex justify-end gap-4 pt-4">
        <Button
          type="button"
          onClick={onCancel}
          variant="outline"
          className="
           w-[100px] h-8 border-[#1FB356] text-[#22C55E] hover:bg-green-50 hover:text-[#22C55E] rounded-xl text-[11px] font-semibold
          "
        >
          Batal
        </Button>

        <Button
          type="submit"
          className="
            w-[100px] h-8 bg-[#22C55E] hover:bg-green-600 text-white rounded-xl text-[11px] font-semibold
          "
        >
          Simpan
        </Button>
      </div>
    </form>
  );
};
