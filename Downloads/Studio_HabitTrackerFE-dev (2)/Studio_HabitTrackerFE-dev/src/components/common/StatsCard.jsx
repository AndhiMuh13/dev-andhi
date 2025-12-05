import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function StatsCard({ title, value, subtitle, icon: Icon }) {
  return (
    <Card className="p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div>
          <CardHeader className="p-0">
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent className="p-0 mt-2">
            <div className="text-2xl font-bold">{value}</div>
            {subtitle && (
              <div className="text-xs text-green-500 mt-1">{subtitle}</div>
            )}
          </CardContent>
        </div>

        {/* Right Icon (only if provided) */}
        {Icon && (
          <Icon
            size={45}
            className="text-green-700 bg-green-50 p-2 rounded-sm"
          />
        )}
      </div>
    </Card>
  );
}
