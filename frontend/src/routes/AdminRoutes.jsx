import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../../src/pages/Admin/Admin";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Admin />} />
    </Routes>
  );
};

export default AdminRoutes;