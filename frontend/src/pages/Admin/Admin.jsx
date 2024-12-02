import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../../../src/components/Navbars/UserNavbar";
import Sidebar from "../../../src/components/Sidebar";
import HeaderStats from "../../components/Headers/HeaderStats";
import FooterUser from "../../../src/components/Footers/FooterUser";

import Dashboard from "../../pages/admin/Dashboard";
import Payments from "../../pages/admin/Payments";
import Reports from "../../pages/admin/Reports";

export default function Admin() {
  return (
    <>
      <Sidebar userRole="admin" />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" />} />
          </Routes>
          <FooterUser />
        </div>
      </div>
    </>
  );
}
