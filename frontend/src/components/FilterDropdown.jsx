import React from "react";

const FilterDropdown = () => {
  return (
    <select className="bg-[#1e293b] border border-gray-700 text-white rounded-xl px-4 py-3 outline-none">

      <option>All</option>
      <option>This Week</option>
      <option>This Month</option>
      <option>This Year</option>

    </select>
  );
};

export default FilterDropdown;