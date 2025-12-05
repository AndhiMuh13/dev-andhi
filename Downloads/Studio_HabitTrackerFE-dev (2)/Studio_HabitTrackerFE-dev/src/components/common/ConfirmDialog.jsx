import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

/**
 * ConfirmDialog Component
 * * @param {boolean} isOpen - State untuk membuka/tutup modal
 * @param {function} onOpenChange - Fungsi untuk mengubah state isOpen
 * @param {string} title - Judul modal (default: "Hapus Data?")
 * @param {string} description - Pesan peringatan (default: "Tindakan ini tidak dapat dikembalikan.")
 * @param {function} onConfirm - Fungsi yang dijalankan saat tombol "Ya, Hapus" diklik
 * @param {boolean} isLoading - (Opsional) State loading saat proses hapus
 */
export const ConfirmDialog = ({
  isOpen,
  onOpenChange,
  title = "Hapus Data?",
  description = "Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dikembalikan.",
  onConfirm,
  isLoading = false,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="[&>button]:hidden bg-[#FEFEFE] border border-[#9CA1AA] shadow-[0px_5px_5px_rgba(0,0,0,0.1)] rounded-[10px] w-[90%] max-w-[563px] p-[30px] gap-[15px]">
        <DialogHeader className="space-y-0 gap-2">
          <DialogTitle className="text-[16px] font-semibold text-[#3B3F46] text-left leading-[140%]">
            {title}
          </DialogTitle>

          <DialogDescription className="text-[16px] font-normal text-[#3B3F46] text-left mt-0 leading-[140%]">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-row justify-end gap-[15px] mt-2 sm:space-x-0">
          {/* Tombol Batal */}
          <DialogClose asChild>
            <button
              type="button"
              disabled={isLoading}
              className="box-border flex flex-row items-center justify-center px-[15px] py-[8px] w-[100px] h-[32px] border border-[#1FB356] rounded-[8px] bg-transparent hover:bg-green-50 transition-colors"
            >
              <span className="text-[#22C55E] text-[11px] font-semibold leading-[140%] text-center">
                Batal
              </span>
            </button>
          </DialogClose>

          {/* Tombol Ya, Hapus */}
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className="flex flex-row items-center justify-center px-[15px] py-[8px] w-[100px] h-[32px] bg-[#EF4444] rounded-[8px] hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-[#FEFEFE] text-[11px] font-semibold leading-[140%] text-center">
              {isLoading ? "Loading..." : "Ya, Hapus"}
            </span>
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
