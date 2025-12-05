"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Camera, Trash, Globe, Lock, Sun } from "lucide-react";

export default function ProfileInfo() {
  return (
    <div className="bg-white rounded-xl p-7.5 shadow-sm">
      {/* Header Profile */}
      <div className="w-full flex flex-col items-center text-center p-0">
        <div className="flex flex-col items-center text-center p-0">
          {/* Avatar + Info */}
          <div className="flex items-center gap-6">
            <div className="border-green-600 w-32 h-32 rounded-full border-2 flex items-center justify-center">
            <img
              src="/src/assets/profile.png"
              alt="profile"
              className="w-28 h-28 rounded-full border-2 object-cover"
            />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold">User Admin</h2>

              <Separator className="my-3" />

              <p className="text-sm text-gray-500">admin@habitstracker.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-5 w-full">
            <Button
              size="sm"
              variant="outline"
              className="flex items-center justify-center gap-2 py-5"
            >
              <Camera size={18} />
              Ubah Foto
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="flex items-center justify-center gap-2 py-5"
            >
              <Trash size={18} />
              Hapus
            </Button>
          </div>
        </div>
      </div>
      <Separator className="my-6" />
      {/* Form Fields */}
      <div className="space-y-4 ">
        {/* Username */}
        <div className="grid gap-2">
          <Label className="text-sm">Username</Label>
          <Input placeholder="Masukan Username" />
        </div>

        {/* Email */}
        <div className="grid gap-2">
          <Label className="text-sm">Email</Label>
          <Input placeholder="Masukan Email" />
          <span className="text-xs text-red-500">Email tidak dapat diubah</span>
        </div>

        {/* Ganti Bahasa */}
        <div className="grid gap-2">
          <Label className="text-sm flex items-center gap-1">
            <Globe size={18} /> Ganti Bahasa
          </Label>
          <Select defaultValue="indonesia">
            <SelectTrigger>
              <SelectValue placeholder="Pilih Bahasa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indonesia">Indonesia</SelectItem>
              <SelectItem value="english">English</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tema */}
        <div className="grid gap-2">
          <Label className="text-sm flex items-center gap-1">
            <Sun size={18} /> Tema Tampilan
          </Label>
          <Select defaultValue="terang">
            <SelectTrigger>
              <SelectValue placeholder="Pilih Tema" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="terang">Terang</SelectItem>
              <SelectItem value="gelap">Gelap</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Ganti Password Title */}
        <div className="pt-4 pb-2 font-medium text-sm flex items-center gap-1">
          <Lock size={18} /> Ganti Password
        </div>

        <div className="grid gap-2">
          <Label className="text-sm">Password Lama</Label>
          <Input type="password" placeholder="Masukan Password Lama" />
        </div>

        <div className="grid gap-2">
          <Label className="text-sm">Password Baru</Label>
          <Input type="password" placeholder="Masukan Password Baru" />
        </div>

        <div className="grid gap-2">
          <Label className="text-sm">Konfirmasi Password Baru</Label>
          <Input type="password" placeholder="Konfirmasi Password Baru" />
        </div>
      </div>

      <Button className="px-4 py-3 rounded-lg mt-6 bg-green-500 hover:bg-green-600">
        Simpan Semua Pengaturan
      </Button>
    </div>
  );
}
