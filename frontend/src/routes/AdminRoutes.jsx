import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../src/pages/auth/Login"; 
import Register from "../../src/pages/auth/Register";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
};

export default AdminRoutes;