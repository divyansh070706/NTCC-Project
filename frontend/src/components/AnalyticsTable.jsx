import React from "react";

const AnalyticsTable = () => {
  return (
    <div className="overflow-x-auto">

      <table className="w-full">

        <thead className="bg-[#1e293b]">

          <tr>
            <th className="text-left text-gray-300 px-6 py-4">
              Product
            </th>

            <th className="text-left text-gray-300 px-6 py-4">
              Sales
            </th>

            <th className="text-left text-gray-300 px-6 py-4">
              Revenue
            </th>

            <th className="text-left text-gray-300 px-6 py-4">
              Growth
            </th>
          </tr>

        </thead>

        <tbody>

          <tr className="border-t border-gray-800">

            <td className="px-6 py-4 text-white">
              Laptop Pro X
            </td>

            <td className="px-6 py-4 text-gray-300">
              542
            </td>

            <td className="px-6 py-4 text-gray-300">
              ₹12,40,000
            </td>

            <td className="px-6 py-4 text-green-400">
              +18%
            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default AnalyticsTable;