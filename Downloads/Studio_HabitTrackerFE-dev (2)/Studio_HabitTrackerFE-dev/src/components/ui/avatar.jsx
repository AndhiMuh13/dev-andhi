import React from "react";
import { cn } from "@/lib/utils";

export function Avatar({ src, alt = "avatar", className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("w-9 h-9 rounded-full object-cover", className)}
    />
  );
}
