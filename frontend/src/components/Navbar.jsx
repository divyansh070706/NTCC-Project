import React from "react";
import { Bell, Search, UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-white/10 border border-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 flex items-center justify-between mb-8">

      <div className="flex items-center bg-[#1e293b] px-4 py-3 rounded-xl w-[350px]">

        <Search className="text-gray-400 mr-3" size={20} />

        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent outline-none text-white w-full"
        />

      </div>

      <div className="flex items-center gap-5">

        <button className="relative">

          <Bell className="text-gray-300" size={24} />

          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>

        </button>

        <div className="flex items-center gap-3 bg-[#1e293b] px-4 py-2 rounded-xl">

          <UserCircle className="text-blue-400" size={32} />

          <div>
            <h3 className="text-white text-sm font-semibold">
              Admin User
            </h3>

            <p className="text-gray-400 text-xs">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;