import React from "react";
import { cn } from "@/lib/utils";
export default function StatusBadge({ children, className }) {
  return (
    <div
      className={cn(
        // base style
        "inline-flex items-center justify-center",
        "px-4 py-1 rounded-[10px]",
        "text-[13px] font-normal text-center",
        "w-fit md:w-[140px] md:min-w-[140px]",

        // custom style
        className
      )}
    >
      {children}
    </div>
  );
}
