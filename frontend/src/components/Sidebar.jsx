import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menus = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Analytics", path: "/analytics" },
    { name: "Reports", path: "/reports" },
    { name: "Products", path: "/products" },
    { name: "Customers", path: "/customers" },
    { name: "Employees", path: "/employees" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-[#111827] p-6">

      <h1 className="text-white text-3xl font-bold mb-10">
        SmartMIS
      </h1>

      <div className="flex flex-col gap-3">

        {menus.map((menu, index) => (

          <Link
            key={index}
            to={menu.path}
            className={`px-4 py-3 rounded-xl transition-all ${
              location.pathname === menu.path
                ? "bg-blue-600 text-white"
                : "text-gray-300 hover:bg-[#1e293b]"
            }`}
          >
            {menu.name}
          </Link>

        ))}

      </div>

    </div>
  );
};

export default Sidebar;