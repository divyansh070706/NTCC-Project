import React from "react";

const DashboardCard = ({
  title,
  value,
  icon,
  color,
}) => {
  return (
    <div className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-400">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {value}
          </h2>
        </div>

        <div className={`${color} p-4 rounded-xl`}>
          {icon}
        </div>

      </div>

    </div>
  );
};

export default DashboardCard;