import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const BaseModal = ({ isOpen, onOpenChange, title, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#FEFEFE] border border-[#9CA1AA] shadow-[0px_5px_5px_rgba(0,0,0,0.1)] rounded-[10px] w-[90%] max-w-[563px] p-[30px] gap-[15px] [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-[16px] font-semibold text-[#3B3F46] text-left leading-[140%]">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-2">{children}</div>
      </DialogContent>
    </Dialog>
  );
};
