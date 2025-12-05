import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function IntegrationSettings() {
  return (
    <div className="flex flex-col rounded-xl p-7.5 shadow-sm ">
      {/* Slack Webhook URL */}
      <section className="flex flex-col gap-2 ">
        <span className="font-semibold text-[16px] text-gray-800">Slack Webhook URL</span>
        <span className="text-[14px] text-gray-800">
          Kirim notifikasi ke channel Slack.
        </span>

        <Input
          placeholder="https://hook.slack.com/services/YOUR/WEBHOOK/URL"
        />

        <span className="text-[11px] text-[#6B7280] mt-1">
          Sisakan kosong untuk menonaktifkan integrasi Slack
        </span>
      </section>

      <Separator className="my-7.5" />

      {/* Email Server (SMTP) Host */}
      <section className="flex flex-col gap-2">
        <span className="font-semibold text-[16px] text-gray-800">
          Email Server (SMTP) Host
        </span>
        <span className="text-[13px] text-gray-800">
          Untuk mengirimkan notifikasi email.
        </span>

        <Input
          placeholder="smtp.gmail.com atau smtp.server.com"
        />

        <span className="text-[11px] text-[#6B7280] mt-1">
          Masukkan host SMTP untuk konfigurasi email server
        </span>
      </section>

      {/* Button Save Settings */}
      <div className="mt-4">
        <Button className="px-4 py-3 rounded-lg bg-[#22C55E] hover:bg-green-600 text-white text-[14px]">
          Simpan Semua Pengaturan
        </Button>
      </div>
    </div>
  );
}
