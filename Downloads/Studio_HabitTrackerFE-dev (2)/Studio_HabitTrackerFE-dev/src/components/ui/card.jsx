import React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-sm border border-gray-300 p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return <div className={cn("mb-2", className)}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h3 className={cn("text-[16px] font-medium", className)}>{children}</h3>;
}

export function CardDescription({ children, className }) {
  return <p className={cn("text-sm text-gray-800 mt-1", className)}>{children}</p>;
}

export function CardContent({ children, className }) {
  return <div className={cn("text-sm text-gray-800", className)}>{children}</div>;
}

export function CardFooter({ children, className }) {
  return (
    <div
      className={cn(
        "pt-2 mt-2 border-t border-gray-200 text-sm text-gray-500 flex items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
}
