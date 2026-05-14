import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="bg-[#0f172a] min-h-screen flex items-center justify-center px-4">

      <div className="bg-white/10 border border-white/10 backdrop-blur-lg p-10 rounded-3xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-white text-center mb-3">
          SmartMIS Analytics
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Login to continue
        </p>

        <form onSubmit={handleLogin}>

          <div className="mb-5">

            <label className="text-gray-300 block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1e293b] text-white px-4 py-3 rounded-xl outline-none border border-gray-700"
            />

          </div>

          <div className="mb-6">

            <label className="text-gray-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#1e293b] text-white px-4 py-3 rounded-xl outline-none border border-gray-700"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;