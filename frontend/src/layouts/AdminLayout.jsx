import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbars/Navbar";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      <div className="flex flex-1" style={{ paddingTop: "4rem" }}> 
        <aside className="w-64 bg-white shadow-md">
          <Sidebar userRole="admin" />
        </aside>

        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
