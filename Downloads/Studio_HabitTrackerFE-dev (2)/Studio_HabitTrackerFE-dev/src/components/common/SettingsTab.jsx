import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Columns3Cog, User2, Shield, RefreshCcw} from "lucide-react";

import ProfileInfo from "@/pages/Settings/component/ProfileInfo";
import Preferences from "@/pages/Settings/component/Preferences";
import Security from "@/pages/Settings/component/Security";
import IntegrationSettings from "@/pages/Settings/component/IntegrationSettings";

export default function SettingsTab() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="w-full sm:w-[840px] bg-green-50 p-2 h-auto rounded-lg">
        <TabsTrigger value="profile" className="flex-1 gap-2.5">
          <User2 size={20} />
          Profil Saya
        </TabsTrigger>
        <TabsTrigger value="general" className="flex-1 gap-2.5">
          <Columns3Cog size={20} />
          Umum
        </TabsTrigger>
        <TabsTrigger value="security" className="flex-1 gap-2.5">
          <Shield size={20} />
          Keamanan
        </TabsTrigger>
        <TabsTrigger value="integration" className="flex-1 gap-2.5">
          <RefreshCcw size={20} />
          Integrasi
        </TabsTrigger>
      </TabsList>

      <div className="mt-4 rounded-xl bg-white border">
        <TabsContent value="profile">
          <ProfileInfo />
        </TabsContent>

        <TabsContent value="general" className="p-[30px]">
          <Preferences />
        </TabsContent>

        <TabsContent value="security" className="p-6">
          <Security />
        </TabsContent>

        <TabsContent value="integration">
          <IntegrationSettings />
        </TabsContent>
      </div>
    </Tabs>
  );
}
