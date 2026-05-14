import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
import Settings from "./pages/Settings";

import NotFound from "./pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/reports" element={<Reports />} />

        <Route path="/products" element={<Products />} />

        <Route path="/customers" element={<Customers />} />

        <Route path="/employees" element={<Employees />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
};

export default Router;