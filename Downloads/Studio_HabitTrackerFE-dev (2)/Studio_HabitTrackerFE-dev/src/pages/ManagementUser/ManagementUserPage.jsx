import React, { useState, useMemo } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/common/AppSidebar";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/common/DataTable";
import DataCard from "@/components/common/DataCard";
import StatusBadge from "@/components/common/StatusBadge";
import { BaseModal } from "@/components/common/BaseModal";
import { UserForm } from "@/pages/ManagementUser/UserForm";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { ActionButtons } from "@/components/common/ActionButton";
import { Plus } from "lucide-react";

import {
  ROLE_BADGE_STYLE,
  DEFAULT_ROLE_BADGE,
  INITIAL_USER_DATA as initialData,
} from "@/pages/ManagementUser/Constans";

export default function ManagementUserPage() {
  // STATE MANAGEMENT
  const [data, setData] = useState(initialData);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // HANDLERS
  const handleAdd = () => {
    setSelectedData(null);
    setIsFormOpen(true);
  };

  const handleEdit = (id) => {
    const item = data.find((u) => u.id === id);
    setSelectedData(item);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setIsDeleteDialogOpen(true);
  };

  // COLUMNS TABLE
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Nama",
        cell: ({ row }) => (
          <div className="text-[15px] text-[#3B3F46]">
            {row.getValue("name")}
          </div>
        ),
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => (
          <div className="text-[15px] text-[#3B3F46]">
            {row.getValue("email")}
          </div>
        ),
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: ({ row }) => {
          const value = row.getValue("role");
          const colorClass = ROLE_BADGE_STYLE[value] || DEFAULT_ROLE_BADGE;
          return <StatusBadge className={colorClass}>{value}</StatusBadge>;
        },
      },
      {
        accessorKey: "date",
        header: "Tanggal Bergabung",
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

  // MOBILE CARD RENDERING
  const renderMobileItem = (row) => {
    const { name, email, role, date, id } = row.original;
    const colorClass = ROLE_BADGE_STYLE[role] || DEFAULT_ROLE_BADGE;

    return (
      <DataCard
        title={name}
        description={email}
        topBadge={<StatusBadge className={colorClass}>{role}</StatusBadge>}
        actions={
          <ActionButtons
            onEdit={() => handleEdit(id)}
            onDelete={() => handleDelete(id)}
          />
        }
      >
        <p className="text-[13px] text-[#3B3F46] font-medium">{date}</p>
      </DataCard>
    );
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col h-screen bg-gray-50">
        <Header />

        <main className="px-5 py-4 overflow-y-auto flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-[27px] font-semibold text-[#3B3F46] mb-1">
                Manajemen User
              </h1>
              <p className="text-sm sm:text-lg text-[#3B3F46]">
                Kelola data pengguna sistem
              </p>
            </div>

            <Button
              type="button"
              onClick={handleAdd}
              className="py-2 px-4 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <Plus size={16} />
              <span>Tambah User Baru</span>
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
                key: "role",
                label: "Semua Role",
                options: ["Admin", "PM", "Karyawan"],
              },
            ]}
          />
        </main>

        {/* DELETE CONFIRM DIALOG */}
        <ConfirmDialog
          isOpen={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          title="Hapus User?"
          description="Apakah Anda yakin ingin menghapus user ini? Tindakan tidak dapat dikembalikan."
          onConfirm={() => {
            console.log("Berhasil menghapus ID:", selectedId);
            setIsDeleteDialogOpen(false);
          }}
        />

        {/* ADD/EDIT USER FORM */}
        <BaseModal
          isOpen={isFormOpen}
          onOpenChange={setIsFormOpen}
          title={selectedData ? "Edit User" : "Tambah User Baru"}
        >
          <UserForm
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
