import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between">

      <p className="text-gray-400 text-sm">
        © 2026 SmartMIS Analytics. All rights reserved.
      </p>

      <div className="flex items-center gap-6 mt-4 md:mt-0">

        <button className="text-gray-400 hover:text-white transition-all text-sm">
          Privacy Policy
        </button>

        <button className="text-gray-400 hover:text-white transition-all text-sm">
          Terms & Conditions
        </button>

        <button className="text-gray-400 hover:text-white transition-all text-sm">
          Support
        </button>

      </div>

    </div>
  );
};

export default Footer;