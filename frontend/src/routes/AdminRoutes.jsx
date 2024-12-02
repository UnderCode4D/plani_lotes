import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Loading from "../components/Loading/Loading";

// Lazy-loaded pages
const Dashboard = lazy(() => import("../pages/admin/Dashboard"));
const Payments = lazy(() => import("../pages/admin/Payments"));
const Reports = lazy(() => import("../pages/admin/Reports"));

const AdminRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="payments" element={<Payments />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AdminRoutes;
