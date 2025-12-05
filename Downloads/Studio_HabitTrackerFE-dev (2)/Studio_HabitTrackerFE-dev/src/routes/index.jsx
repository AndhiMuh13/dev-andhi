import { Routes, Route } from "react-router-dom";

import RegisterPage from "@/pages/Register/RegisterPage";
import ManagementFilePage from "@/pages/ManagementFile/ManagementFilePage";
import LoginPage from "@/pages/Login/LoginPage";
import Dashboard from "@/pages/Dashboard/DashboardPage";
import ManagementCulturePage from "@/pages/ManagementCulture/ManagementCulturePage";
import ManagementUserPage from "@/pages/ManagementUser/ManagementUserPage";
import ManagementNotifikasiPage from "@/pages/ManagementNotifikasi/ManagementNotifikasiPage";
import StatisticsReportPage from "@/pages/StatisticsReport/StatisticsReportPage";
import SettingsPage from "@/pages/Settings/SettingsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/managementfile" element={<ManagementFilePage />} />
      <Route path="/managementculture" element={<ManagementCulturePage />} />
      <Route path="/managementuser" element={<ManagementUserPage />} />
      <Route path="/notifikasi" element={<ManagementNotifikasiPage />} />
      <Route path="/statisticsreport" element={<StatisticsReportPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}
