
export const NOTIFICATION_STATUS = {
  Terkirim: { label: "Terkirim", color: "bg-green-100 text-green-700" },
  Draft: { label: "Draft", color: "bg-gray-200 text-gray-700" },
  Gagal: { label: "Gagal", color: "bg-red-100 text-red-700" },
};

export const NOTIFICATION_CATEGORIES = [
  "Semua Kategori",
  "Sistem",
  "Fitur",
  "Meeting",
  "Karyawan",
];

// Data Dummy
export const INITIAL_NOTIFICATION_DATA = [
  {
    id: 1,
    title: "Maintenance Sistem",
    target: "Semua User",
    description:
      "Sistem akan dirawat pada hari Minggu pukul 02:00 - 04:00 WIB",
    date: "2024-01-12 09:00",
    status: "Terkirim",
    category: "Info" ,
  },
  {
    id: 2,
    title: "Update Fitur Baru",
    target: "Divisi IT",
    description:
      'Fitur baru "Laporan Performa" telah ditambahkan ke sistem',
    date: "2024-01-12 09:00",
    status: "Terkirim",
    category: "Info" ,
  },
  {
    id: 3,
    title: "Apresiasi Performa Divisi",
    target: "Divisi Marketing",
    description:
      "Selamat! Divisi Marketing mencapai target kepatuhan sebesar 95%",
    date: "2024-01-12 09:00",
    status: "Draft",
    category: "Info" , 
  },
  {
    id: 4,
    title: "Pengingat Deadline",
    target: "Karyawan Baru",
    description:
      "Deadline pengisian habit tracker berakhir hari ini pukul 17:00",
    date: "2024-01-12 09:00",
    status: "Terkirim",
    category: "Info" ,
  },
  {
    id: 5,
    title: "Undangan Meeting",
    target: "Role Manager",
    description:
      "Rapat rutin tim leadership akan dilaksanakan hari Jumat",
    date: "2024-01-12 09:00",
    status: "Gagal",
    category: "Peringatan" ,
  },
];
