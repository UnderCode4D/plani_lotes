import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ userRole }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "fas fa-tv" },
    { name: "Payments", path: "/admin/payments", icon: "fas fa-money-bill" },
    { name: "Reports", path: "/admin/reports", icon: "fas fa-chart-line" },
  ];

  return (
    <nav className="h-full bg-white shadow-md flex flex-col w-64"> {/* Sidebar más estrecho */}
      {/* Título */}
      <div className="p-6 text-lg font-bold text-black text-center">Plani Lotes</div>

      {/* Opciones del Sidebar */}
      <ul className="flex flex-col flex-1 justify-center items-start">
        {menuItems.map((item, index) => (
          <li key={index} className="mb-4">
            <Link
              to={item.path}
              className={`flex items-center p-3 rounded-md text-black ${
                location.pathname === item.path
                  ? "bg-lightBlue-500 hover:bg-lightBlue-600 text-white"
                  : "hover:bg-gray-200"
              }`} // Cambié el color al seleccionar un item
            >
              <i className={`${item.icon} mr-3`} />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
