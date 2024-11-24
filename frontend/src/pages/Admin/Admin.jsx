import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../../../src/components/Navbars/UserNavbar";
import Sidebar from "../../../src/components/Sidebar";
import HeaderStats from "../../components/Headers/HeaderStats";
import FooterUser from "../../../src/components/Footers/FooterUser";

import Dashboard from "../../pages/Admin/Dashboard";
// import Maps from "views/admin/Maps";
// import Settings from "views/admin/Settings";
// import Tables from "views/admin/Tables";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/admin/maps" element={<Maps />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/tables" element={<Tables />} /> */}
            <Route path="/" element={<Navigate to="/admin/dashboard" />} />
          </Routes>
          <FooterUser />
        </div>
      </div>
    </>
  );
}