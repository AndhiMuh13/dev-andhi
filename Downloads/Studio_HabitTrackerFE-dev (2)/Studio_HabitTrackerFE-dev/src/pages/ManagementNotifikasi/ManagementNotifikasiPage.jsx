
import React, { useState, useMemo } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/common/AppSidebar";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/common/DataTable";
import StatusBadge from "@/components/common/StatusBadge";
import DataCard from "@/components/common/DataCard";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { BaseModal } from "@/components/common/BaseModal";
import { Plus } from "lucide-react";
import { ActionButtons } from "@/components/common/ActionButton";

import {
  NOTIFICATION_STATUS,
  INITIAL_NOTIFICATION_DATA,
} from "./Constans";
import { NotificationForm } from "./NotificationForm";

export default function ManagementNotificationPage() {
  const [data, setData] = useState(INITIAL_NOTIFICATION_DATA);

  // Modal
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  const handleAdd = () => {
    setSelectedData(null);
    setIsFormOpen(true);
  };

  const handleEdit = (id) => {
    const item = data.find((n) => n.id === id);
    setSelectedData(item);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setIsDeleteDialogOpen(true);
  };

  // Columns
  const columns = useMemo(
    () => [
      { accessorKey: "title", header: "Judul" },
      { accessorKey: "target", header: "Target" },
      {
        accessorKey: "description",
        header: "Deskripsi",
        cell: ({ row }) => (
          <span className="text-[#3B3F46] line-clamp-2 wrap-break-words whitespace-normal w-[170px] block">
            {row.original.description}
          </span>
        ),
      },
      { accessorKey: "date", header: "Tanggal Kirim" },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          const st = row.original.status;
          const style = NOTIFICATION_STATUS[st]?.color;
          return <StatusBadge className={style}>{st}</StatusBadge>;
        },
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

  // Mobile Card Renderer
  const renderMobileItem = (row) => {
    const { id, title, target, description, date, status } = row.original;
    const color = NOTIFICATION_STATUS[status]?.color;

    return (
      <DataCard
        title={title}
        topBadge={<StatusBadge className={color}>{status}</StatusBadge>}
        actions={
          <ActionButtons
            onEdit={() => handleEdit(id)}
            onDelete={() => handleDelete(id)}
          />
        }
      >
        <p className="text-sm font-medium text-gray-700">{target}</p>
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
          {/* Header Page */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-[27px] font-semibold text-[#3B3F46] mb-1">
                Manajemen Notifikasi
              </h1>
              <p className="text-sm sm:text-lg text-[#3B3F46]">
                Kelola dan kirim pengumuman ke pengguna
              </p>
            </div>

            <Button
              onClick={handleAdd}
              className="py-2 px-4 bg-green-500 text-white hover:bg-green-600 flex items-center gap-2"
            >
              <Plus size={16} />
              Buat Pengumuman Baru
            </Button>
          </div>

          {/* Data Table */}
          <DataTable
            columns={columns}
            data={data}
            enableSearch
            enableFilters
            enablePagination
            renderMobileItem={renderMobileItem}
            filters={[
              {
                key: "status",
                label: "Semua Status",
                options: ["Terkirim", "Draft", "Gagal"],
              },
              {
                key: "category",
                label: "Semua Kategori",
                options: ["Info", "Peringatan", "Apresiasi"],
              },
            ]}
          />
        </main>

        {/* Delete Confirm */}
        <ConfirmDialog
          isOpen={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          title="Hapus Pengumuman?"
          description="Apakah Anda yakin ingin menghapus pengumuman ini?"
          onConfirm={() => {
            setData(data.filter((n) => n.id !== selectedId));
          }}
        />

        {/* Add/Edit Form Modal */}
        <BaseModal
          isOpen={isFormOpen}
          onOpenChange={setIsFormOpen}
          title={selectedData ? "Edit Pengumuman" : "Buat Pengumuman Baru"}
        >
          <NotificationForm
            initialData={selectedData}
            onCancel={() => setIsFormOpen(false)}
            onSubmit={(newData) => {
              if (selectedData) {
                setData(
                  data.map((n) =>
                    n.id === selectedData.id ? { ...n, ...newData } : n
                  )
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
