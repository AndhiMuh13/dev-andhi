import React, { useState, useMemo } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/common/AppSidebar";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/common/DataTable";
import { Plus, Pencil, Trash, ArrowDownToLine } from "lucide-react";
import StatusBadge from "@/components/common/StatusBadge";
import DataCard from "@/components/common/DataCard";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { BaseModal } from "@/components/common/BaseModal";

import { INITIAL_DATA, FILE_TYPES } from "./Constans";
import { ActionButtons } from "@/components/common/ActionButton";
import { FileForm } from "./FileForm";

export default function ManagementFilePage() {
  const [data, setData] = useState(INITIAL_DATA);

  // Modal State
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  // Handlers
  const handleAdd = () => {
    setSelectedData(null);
    setIsFormOpen(true);
  };

  const handleEdit = (id) => {
    const item = data.find((d) => d.id === id);
    setSelectedData(item);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setIsDeleteDialogOpen(true);
  };

  // Columns untuk DataTable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Nama File",
      },
      {
        accessorKey: "description",
        header: "Deskripsi",
      },
      {
        accessorKey: "type",
        header: "Tipe File",
        cell: ({ row }) => {
          const type = row.original.type;
          const colorClass =
            FILE_TYPES[type]?.color || "bg-gray-200 text-gray-700";
          return <StatusBadge className={colorClass}>{type}</StatusBadge>;
        },
      },
      {
        accessorKey: "date",
        header: "Tanggal Upload",
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
    [data]
  );

  // Mobile Card
  const renderMobileItem = (row) => {
    const { name, description, type, date, id } = row.original;
    const typeColor = FILE_TYPES[type]?.color || "bg-gray-200 text-gray-700";

    return (
      <DataCard
        title={name}
        topBadge={<StatusBadge className={typeColor}>{type}</StatusBadge>}
        actions={
          <ActionButtons
            onEdit={() => handleEdit(id)}
            onDelete={() => handleDelete(id)}
          />
        }
      >
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </DataCard>
    );
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col h-screen bg-gray-50">
        <Header />
        <main className="px-5 py-4 overflow-y-auto flex flex-col gap-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-[27px] font-semibold text-[#3B3F46] mb-1">
                Manajemen File Center
              </h1>
              <p className="text-sm sm:text-lg text-[#3B3F46]">
                Kelola file penting seperti SOP, panduan, dan dokumen lainnya
              </p>
            </div>
            <Button
              type="button"
              onClick={handleAdd}
              className="py-2 px-4 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <Plus size={16} />
              <span>Upload File Baru</span>
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
                key: "type",
                label: "Semua Tipe",
                options: ["PDF", "Image", "Word", "CSV"],
              },
            ]}
          />
        </main>

        {/* Dialog Hapus */}
        <ConfirmDialog
          isOpen={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          title="Hapus File?"
          description="Apakah Anda yakin ingin menghapus file ini? Tindakan ini tidak dapat dikembalikan."
          onConfirm={() => {
            setData(data.filter((d) => d.id !== selectedId));
          }}
        />

        {/* Modal Form Add/Edit */}
        <BaseModal
          isOpen={isFormOpen}
          onOpenChange={setIsFormOpen}
          title={selectedData ? "Edit File" : "Upload File Baru"}
        >
          <FileForm
            initialData={selectedData}
            onCancel={() => setIsFormOpen(false)}
            onSubmit={(newData) => {
              if (selectedData) {
                setData(
                  data.map((d) => (d.id === selectedData.id ? newData : d))
                );
              } else {
                setData([...data, { ...newData, id: Date.now() }]);
              }
              setIsFormOpen(false);
            }}
          />
        </BaseModal>
      </div>
    </SidebarProvider>
  );
}
