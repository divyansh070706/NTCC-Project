import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-[#1e293b] rounded-xl px-4 py-3">

      <Search className="text-gray-400 mr-3" size={20} />

      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-white w-full"
      />

    </div>
  );
};

export default SearchBar;