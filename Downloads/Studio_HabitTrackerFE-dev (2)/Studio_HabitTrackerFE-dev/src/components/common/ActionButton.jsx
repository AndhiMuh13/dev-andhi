import React from "react";
import { Pencil, Trash2, Download } from "lucide-react";

export const ActionButtons = ({ onDownload, onEdit, onDelete }) => {
  return (
    <div className="flex gap-3 justify-end w-full">
      {/* Tombol Download - Optional */}
      {onDownload && (
        <button
          onClick={onDownload}
          className="flex items-center justify-center gap-2 bg-[#DCFCE7] text-[#22C55E] py-2 px-3 rounded-[10px] text-[13px] font-medium hover:bg-green-100 transition flex-1 md:flex-none"
          title="Unduh"
        >
          <Download size={16} strokeWidth={2.5} />
          <span className="md:hidden">Unduh</span> {/* Text Mobile Only */}
        </button>
      )}

      {/* Tombol Edit */}
      <button
        onClick={onEdit}
        className="flex items-center justify-center gap-2 bg-[#EBF3FE] text-[#3B82F6] py-2 px-3 rounded-full md:rounded-[10px] text-[13px] font-medium hover:bg-blue-100 transition flex-1 md:flex-none"
        title="Edit"
      >
        <Pencil size={16} strokeWidth={2.5} />
        <span className="md:hidden">Edit</span>{" "}
      </button>

      {/* Tombol Hapus */}
      <button
        onClick={onDelete}
        className="flex items-center justify-center gap-2 bg-[#FDECEC] text-[#EF4444] py-2 px-3 rounded-full md:rounded-[10px] text-[13px] font-medium hover:bg-red-100 transition flex-1 md:flex-none"
        title="Hapus"
      >
        <Trash2 size={16} strokeWidth={2.5} />
        <span className="md:hidden">Hapus</span>{" "}
      </button>
    </div>
  );
};
