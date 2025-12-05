"use client";

import React, { useState, useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

export default function DataTable({
  columns,
  data,
  renderMobileItem,
  enableSearch = false,
  enableFilters = false,
  enablePagination = false,
  filters = [],
  pageSize = 5,
}) {
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState({});
  const [page, setPage] = useState(1);

  // FILTERING + SEARCH
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchSearch =
        !enableSearch ||
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchFilters = filters.every((f) => {
        const val = activeFilters[f.key];
        if (!val || val === "all") return true;
        return item[f.key] === val;
      });

      return matchSearch && matchFilters;
    });
  }, [data, search, activeFilters, filters]);

  // PAGINATION CALCULATION
  const totalPages = Math.ceil(filteredData.length / pageSize);

  const paginatedData = useMemo(() => {
    if (!enablePagination) return filteredData;
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page, enablePagination]);
  
  // PAGINATION LOGIC
  const renderPaginationNumbers = () => {
    const pages = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    let first = page;
    let second = page + 1;

    if (page === totalPages) {
      first = totalPages - 1;
      second = totalPages;
    } else if (page === totalPages - 1) {
      first = totalPages - 1;
      second = totalPages;
    }

    pages.push(first);

    if (second <= totalPages) pages.push(second);

    if (second < totalPages - 1) pages.push("...");

    if (second < totalPages) pages.push(totalPages);

    return pages;
  };
  // REACT TABLE
  const table = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

 

  const paginationItems = renderPaginationNumbers();

  return (
    <div className="w-full flex flex-col gap-4">

      {/* SEARCH + FILTERS */}
      {(enableSearch || enableFilters) && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-gray-100 py-3.5 px-7.5 rounded-lg">
          <div className="relative w-full max-w-[310px]">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={20} />
            </span>

            {enableSearch && (
              <Input
                placeholder="Cari Nama..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full md:w-[300px] pl-11 pr-4 rounded-full placeholder:text-[#94A3B8] border-[#9CA1AA]"
              />
            )}
          </div>

          {enableFilters && (
            <div className="flex items-center gap-3">
              {filters.map((f) => (
                <Select
                  key={f.key}
                  value={activeFilters[f.key] || "all"}
                  onValueChange={(v) => {
                    setActiveFilters((prev) => ({ ...prev, [f.key]: v }));
                    setPage(1);
                  }}
                >
                  <SelectTrigger className="w-[170px] rounded-full text-[#3B3F46] shadow-none border-[#9CA1AA]">
                    <SelectValue placeholder={f.label} />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="all">{f.label}</SelectItem>
                    {f.options.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TABLE */}
      <div className="hidden md:block rounded-lg overflow-hidden border border-gray-400 bg-white drop-shadow-[0px_5px_5px_rgba(0,0,0,0.1)]">
        <Table>
          <TableHeader className="bg-green-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-green-500 border-none">
                {headerGroup.headers.map((header, index) => {
                  const isFirst = index === 0;
                  const isLast = index === headerGroup.headers.length - 1;

                  return (
                    <TableHead
                      key={header.id}
                      className={`h-15 text-white text-base font-medium px-8
                        ${isFirst ? "rounded-tl-lg" : ""}
                        ${isLast ? "rounded-tr-lg text-right" : ""}
                      `}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="h-13 hover:bg-gray-100 border-b border-gray-400">
                  {row.getVisibleCells().map((cell, index) => {
                    const isLast = index === row.getVisibleCells().length - 1;

                    return (
                      <TableCell
                        key={cell.id}
                        className={`font-poppins text-zinc-700 px-8 ${isLast ? "text-right" : ""}`}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col gap-4">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <div key={row.id}>{renderMobileItem ? renderMobileItem(row) : null}</div>
          ))
        ) : (
          <div className="text-center p-4 bg-white rounded-lg border text-gray-500">No results.</div>
        )}
      </div>

      {/* PAGINATION */}
      {enablePagination && (
        <div className="flex items-center justify-between px-1 mt-2">
          <p className="text-xs text-gray-600">
            Menampilkan {(page - 1) * pageSize + 1} –{" "}
            {Math.min(page * pageSize, filteredData.length)} dari {filteredData.length} data
          </p>
          <div className="flex items-center gap-1">
            {/* PREV */}
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50 bg-white"
            >
              {"<"}
            </button>
            {paginationItems.map((item, idx) => (
              <button
                key={idx}
                disabled={item === "..."}
                onClick={() => typeof item === "number" && setPage(item)}
                className={`px-3 py-1 border rounded ${
                  item === page ? "bg-blue-600 text-white" : "bg-white"
                } ${item === "..." ? "opacity-50 cursor-default" : ""}`}
              >
                {item}
              </button>
            ))}

            {/* NEXT */}
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50 bg-white"
            >
              {">"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
