import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbars/Navbar";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main content with Sidebar */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <Sidebar userRole="admin" />
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
