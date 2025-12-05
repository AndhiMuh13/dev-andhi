import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Komponen ini menerima "Slot" untuk isi kontennya
export default function DataCard({ title, topBadge, children, actions }) {
  return (
    <Card className="bg-white rounded-lg border border-[#9CA1AA] shadow-[0px_5px_5px_rgba(0,0,0,0.1)]">
      {/* HEADER*/}
      <div className="p-2">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <h3 className="font-semibold text-[#3B3F46] text-[15px] leading-snug">
            {title}
          </h3>
          {topBadge && <div>{topBadge}</div>}
        </CardHeader>

        {/* CONTENT*/}
        <CardContent className="flex flex-col gap-3">{children}</CardContent>

        {/* FOOTER*/}
        <CardFooter className="border-none">{actions}</CardFooter>
      </div>
    </Card>
  );
}
