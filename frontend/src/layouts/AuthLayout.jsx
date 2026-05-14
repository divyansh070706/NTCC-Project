import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">

      <div className="w-full max-w-md">
        {children}
      </div>

    </div>
  );
};

export default AuthLayout;