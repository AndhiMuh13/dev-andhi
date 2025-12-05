import React, { useState, useMemo } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/common/AppSidebar";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/common/DataTable";
import { Plus } from "lucide-react";
import StatusBadge from "@/components/common/StatusBadge";
import { ActionButtons } from "@/components/common/ActionButton";
import DataCard from "@/components/common/DataCard";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { BaseModal } from "@/components/common/BaseModal";
import { CultureForm } from "./CultureForm";

import {
  DEFAULT_BADGE_STYLE,
  CATEGORY_STYLES,
  FREQUENCY_STYLES,
  INITIAL_DATA as initialData,
} from "@/pages/ManagementCulture/Constants";

export default function ManagementCulturePage() {
  // STATE MANAGEMENT
  // State data tabel
  const [data, setData] = useState(initialData);

  // State untuk Delete Dialog
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // State untuk Form Modal (Add/Edit)
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // HANDLERS (LOGIKA)
  // Handler Buka Modal Add
  const handleAdd = () => {
    setSelectedData(null);
    setIsFormOpen(true);
  };

  // Handler Buka Modal Edit
  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setSelectedData(itemToEdit);
    setIsFormOpen(true);
  };

  // Handler Buka Modal Delete
  const handleDelete = (id) => {
    setSelectedId(id);
    setIsDeleteDialogOpen(true);
  };

  // COLUMNS
  const columns = useMemo(
    () => [
      {
        accessorKey: "habitName",
        header: "Nama Habit",
        cell: ({ row }) => (
          <div className="text-[15px] text-[#3B3F46]">
            {row.getValue("habitName")}
          </div>
        ),
      },
      {
        accessorKey: "category",
        header: "Kategori",
        cell: ({ row }) => {
          const value = row.getValue("category");
          const colorClass = CATEGORY_STYLES[value] || DEFAULT_BADGE_STYLE;
          return <StatusBadge className={colorClass}>{value}</StatusBadge>;
        },
      },
      {
        accessorKey: "frequency",
        header: "Frekuensi",
        cell: ({ row }) => {
          const value = row.getValue("frequency");
          const colorClass = FREQUENCY_STYLES[value] || DEFAULT_BADGE_STYLE;
          return <StatusBadge className={colorClass}>{value}</StatusBadge>;
        },
      },
      {
        accessorKey: "points",
        header: "Bobot Poin",
        cell: ({ row }) => (
          <div className="text-[13px] text-[#3B3F46]">
            {row.getValue("points")} poin
          </div>
        ),
      },
      {
        id: "actions",
        header: "Action",
        cell: ({ row }) => {
          const id = row.original.id;
          return (
            <ActionButtons
              onEdit={() => handleEdit(id)}
              onDelete={() => handleDelete(id)}
            />
          );
        },
      },
    ],
    []
  );

  // Fungsi Render Mobile Card
  const renderMobileItem = (row) => {
    const { habitName, category, frequency, points, id } = row.original;
    const categoryColor = CATEGORY_STYLES[category] || DEFAULT_BADGE_STYLE;
    const frequencyColor = FREQUENCY_STYLES[frequency] || DEFAULT_BADGE_STYLE;

    return (
      <DataCard
        title={habitName}
        topBadge={
          <StatusBadge className={frequencyColor}>{frequency}</StatusBadge>
        }
        actions={
          <ActionButtons
            onEdit={() => handleEdit(id)}
            onDelete={() => handleDelete(id)}
          />
        }
      >
        <div>
          <StatusBadge className={categoryColor}>{category}</StatusBadge>
        </div>
        <p className="text-[13px] text-[#3B3F46] font-medium">{points} Poin</p>
      </DataCard>
    );
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col h-screen bg-gray-50">
        <Header />
        {/* MAIN CONTENT */}
        <main className="px-5 py-4 overflow-y-auto flex flex-col gap-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-[27px] font-semibold text-[#3B3F46] mb-1">
                Manajemen Habit & Culture
              </h1>
              <p className="text-sm sm:text-lg text-[#3B3F46]">
                Kelola habit dan budaya kerja perusahaan
              </p>
            </div>

            <Button
              type="button"
              onClick={handleAdd}
              className="py-2 px-4 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <Plus size={16} />
              <span>Tambah Habit Baru</span>
            </Button>
          </div>

          {/* Content Table */}
          <DataTable
            columns={columns}
            data={data}
            enableSearch
            enableFilters
            enablePagination
            renderMobileItem={renderMobileItem}
            filters={[
              {
                key: "category",
                label: "Semua Tipe",
                options: ["Budaya"],
              },
              {
                key: "frequency",
                label: "Semua Frekuensi",
                options: ["Harian", "Mingguan"],
              },
            ]}
          />
        </main>

        {/* MODALS SECTION */}
        {/* Dialog Hapus */}
        <ConfirmDialog
          isOpen={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          title="Hapus Habit?"
          description="Apakah Anda yakin ingin menghapus habit ini? Tindakan ini tidak dapat dikembalikan."
          onConfirm={() => {
            console.log("Berhasil menghapus ID:", selectedId);
          }}
        />

        {/* Modal Form Add/Edit */}
        <BaseModal
          isOpen={isFormOpen}
          onOpenChange={setIsFormOpen}
          title={selectedData ? "Edit Habit" : "Tambah Habit Baru"}
        >
          <CultureForm
            initialData={selectedData}
            onCancel={() => setIsFormOpen(false)}
            onSubmit={() => {
              console.log("Simpan data ke API...");
              setIsFormOpen(false);
            }}
          />
        </BaseModal>
      </div>
    </SidebarProvider>
  );
}
