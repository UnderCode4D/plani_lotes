import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "../../src/pages/Home/Homepage"
import Login from "../../src/pages/auth/Login"; 
import Register from "../../src/pages/auth/Register"; 

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
    </Routes>
  );
};

export default PublicRoutes;