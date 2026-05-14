
import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Package,
  Users,
  UserCog,
  Settings,
  Bell,
  Search,
  Plus,
  Download,
  Sparkles,
  FileBarChart2,
  Boxes,
  AlertTriangle,
  Trophy,
  IndianRupee,
  ArrowUpRight,
  ChevronRight,
  Filter,
  SlidersHorizontal,
  MoreHorizontal,
  Eye,
  Pencil,
  TrendingUp,
  BrainCircuit,
  PackageSearch,
  BadgeAlert,
  Activity,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  LineChart,
  Line,
  Legend,
} from "recharts";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: false },
  { name: "Analytics", icon: BarChart3, active: false },
  { name: "Reports", icon: FileText, active: false },
  { name: "Products", icon: Package, active: true },
  { name: "Customers", icon: Users, active: false },
  { name: "Employees", icon: UserCog, active: false },
  { name: "Settings", icon: Settings, active: false },
];

const stats = [
  {
    title: "Total Products",
    value: "1,248",
    change: "+8.2%",
    icon: Boxes,
    iconColor: "text-blue-400",
    iconBg: "from-blue-500/20 to-cyan-400/10",
  },
  {
    title: "Low Stock Items",
    value: "42",
    change: "-5.4%",
    icon: AlertTriangle,
    iconColor: "text-amber-400",
    iconBg: "from-amber-500/20 to-orange-400/10",
  },
  {
    title: "Best Sellers",
    value: "128",
    change: "+14.8%",
    icon: Trophy,
    iconColor: "text-emerald-400",
    iconBg: "from-emerald-500/20 to-teal-400/10",
  },
  {
    title: "Revenue Generated",
    value: "₹84.6L",
    change: "+17.1%",
    icon: IndianRupee,
    iconColor: "text-violet-400",
    iconBg: "from-violet-500/20 to-fuchsia-400/10",
  },
];

const products = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=240&q=80",
    name: "Smart Sensor Pro",
    sku: "SMA-PRD-201",
    category: "Electronics",
    price: "₹12,999",
    stock: 184,
    status: "Active",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=240&q=80",
    name: "Retail POS Terminal",
    sku: "SMA-PRD-314",
    category: "Retail Tech",
    price: "₹28,500",
    stock: 21,
    status: "Low Stock",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=240&q=80",
    name: "Field Track Device",
    sku: "SMA-PRD-118",
    category: "Operations",
    price: "₹8,750",
    stock: 96,
    status: "Active",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=240&q=80",
    name: "AI Inventory Hub",
    sku: "SMA-PRD-527",
    category: "Software",
    price: "₹54,900",
    stock: 12,
    status: "Low Stock",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=240&q=80",
    name: "Analytics Control Pad",
    sku: "SMA-PRD-442",
    category: "Enterprise Tools",
    price: "₹18,250",
    stock: 232,
    status: "Active",
  },
];

const topSellingData = [
  { name: "Sensor Pro", sales: 420 },
  { name: "POS Terminal", sales: 365 },
  { name: "Inventory Hub", sales: 322 },
  { name: "Control Pad", sales: 286 },
  { name: "Field Track", sales: 241 },
];

const revenueCategoryData = [
  { name: "Electronics", value: 31, color: "#60a5fa" },
  { name: "Software", value: 24, color: "#34d399" },
  { name: "Retail Tech", value: 18, color: "#a78bfa" },
  { name: "Operations", value: 15, color: "#f59e0b" },
  { name: "Enterprise Tools", value: 12, color: "#f472b6" },
];

const stockTrendData = [
  { month: "Jan", stock: 1180, movement: 1020 },
  { month: "Feb", stock: 1152, movement: 1088 },
  { month: "Mar", stock: 1114, movement: 1124 },
  { month: "Apr", stock: 1086, movement: 1160 },
  { month: "May", stock: 1044, movement: 1202 },
  { month: "Jun", stock: 1018, movement: 1240 },
  { month: "Jul", stock: 998, movement: 1288 },
];

const performanceMetrics = [
  { month: "Jan", margin: 18, returns: 4.2 },
  { month: "Feb", margin: 19.6, returns: 3.8 },
  { month: "Mar", margin: 21.1, returns: 3.4 },
  { month: "Apr", margin: 22.5, returns: 3.1 },
  { month: "May", margin: 23.4, returns: 2.9 },
  { month: "Jun", margin: 24.1, returns: 2.6 },
];

const aiInsights = [
  {
    title: "Restock Recommendation",
    description:
      "Retail POS Terminal and AI Inventory Hub should be replenished within 5 days based on current sales velocity.",
    icon: PackageSearch,
    color: "text-blue-400",
  },
  {
    title: "Trending Products",
    description:
      "Smart Sensor Pro is sustaining strong weekly demand and shows the highest repeat order pattern this month.",
    icon: TrendingUp,
    color: "text-emerald-400",
  },
  {
    title: "Low-Performing Items",
    description:
      "Two operations-category products are underperforming against margin expectations and may need repricing.",
    icon: BadgeAlert,
    color: "text-amber-400",
  },
  {
    title: "Inventory Optimization",
    description:
      "Redistribute slower-moving enterprise tools inventory to regions with stronger attach rates and lower stock coverage.",
    icon: BrainCircuit,
    color: "text-violet-400",
  },
];

const inventoryActivity = [
  {
    title: "Stock updated for Smart Sensor Pro",
    detail: "Inventory increased by 60 units after warehouse inward processing.",
    time: "12 mins ago",
    icon: Package,
    color: "text-blue-400",
  },
  {
    title: "Low stock alert triggered",
    detail: "AI Inventory Hub dropped below minimum reorder threshold.",
    time: "28 mins ago",
    icon: AlertTriangle,
    color: "text-amber-400",
  },
  {
    title: "Top seller ranking refreshed",
    detail: "Retail POS Terminal moved into top 3 performing products.",
    time: "46 mins ago",
    icon: Trophy,
    color: "text-emerald-400",
  },
  {
    title: "Revenue spike recorded",
    detail: "Electronics category revenue grew 9.4% during the latest cycle.",
    time: "1 hour ago",
    icon: Activity,
    color: "text-violet-400",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const glassCard =
  "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(15,23,42,0.45)]";

const SidebarItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.button
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
        item.active
          ? "border border-blue-400/20 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 text-white"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
          item.active
            ? "border-blue-400/20 bg-blue-500/10 text-blue-400"
            : "border-white/5 bg-white/5 text-slate-400 group-hover:border-white/10 group-hover:text-slate-200"
        }`}
      >
        <Icon size={18} />
      </span>
      <span className="flex-1 text-left">{item.name}</span>
      {item.active && <ChevronRight size={16} className="text-blue-400" />}
    </motion.button>
  );
};

const StatCard = ({ stat, index }) => {
  const Icon = stat.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`${glassCard} relative overflow-hidden p-5`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{stat.title}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white [font-variant-numeric:tabular-nums]">
            {stat.value}
          </h3>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
            <ArrowUpRight size={14} />
            {stat.change}
          </div>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${stat.iconBg}`}
        >
          <Icon className={stat.iconColor} size={24} />
        </div>
      </div>
    </motion.div>
  );
};

const ActionButton = ({ label, icon: Icon, primary = false }) => (
  <motion.button
    whileHover={{ y: -2, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
      primary
        ? "border border-blue-400/20 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 text-white hover:from-blue-500/30 hover:to-cyan-400/20"
        : "border border-white/10 bg-white/5 text-slate-200 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white"
    }`}
  >
    <Icon size={16} />
    {label}
  </motion.button>
);

const FilterButton = ({ icon: Icon, label }) => (
  <button className="flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-300 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/10">
    <Icon size={16} className="text-slate-400" />
    <span>{label}</span>
  </button>
);

const StatusBadge = ({ status }) => {
  if (status === "Low Stock") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
        <AlertTriangle size={13} />
        Low Stock
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
      <ArrowUpRight size={13} />
      Active
    </span>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
      <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      {payload.map((entry, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm text-slate-200">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="font-medium">{entry.name}:</span>
          <span className="text-white">{entry.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

const PieTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0];

  return (
    <div className="rounded-xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
      <p className="text-sm font-semibold text-white">{data.name}</p>
      <p className="mt-1 text-sm text-slate-300">{data.value}% revenue share</p>
    </div>
  );
};

export default function SmartMISProductsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-blue-500/30">
      <div className="flex min-h-screen">
        <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] border-r border-white/10 bg-[#111827]/95 px-5 py-6 backdrop-blur-2xl lg:flex lg:flex-col">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 shadow-lg shadow-blue-500/10">
              <svg
                viewBox="0 0 48 48"
                className="h-7 w-7 text-blue-400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 31L18 23L24 28L37 15"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 15H37V19"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="7"
                  y="7"
                  width="34"
                  height="34"
                  rx="10"
                  stroke="currentColor"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-base font-semibold tracking-tight text-white">
                SmartMIS Analytics
              </h1>
              <p className="text-xs text-slate-400">Business Intelligence Suite</p>
            </div>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <SidebarItem key={item.name} item={item} />
            ))}
          </nav>

          <div className="mt-6 rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/10 to-transparent p-4">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
              <PackageSearch size={18} />
            </div>
            <h3 className="text-sm font-semibold text-white">Inventory Intelligence</h3>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Unified product visibility, stock control, and AI-driven optimization.
            </p>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col lg:ml-[280px]">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/60 backdrop-blur-2xl">
            <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden">
                  <Package size={18} className="text-blue-400" />
                </div>

                <div className="relative w-full max-w-xl">
                  <Search
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Search products, SKU, category..."
                    className="h-12 w-full rounded-2xl border border-white/10 bg-white/5 pl-11 pr-4 text-sm text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400/30 focus:bg-white/10 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10"
                >
                  <Bell size={18} />
                  <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
                </motion.button>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
                    AD
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-semibold text-white">Admin User</p>
                    <p className="text-xs text-slate-400">Chief Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <motion.section
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-300/80">
                    Inventory Control
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Products Management
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
                    Monitor inventory health, track product performance, and manage
                    category-level insights with a premium AI-powered inventory workspace.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <ActionButton label="Add Product" icon={Plus} primary />
                  <ActionButton label="Export Inventory" icon={Download} />
                  <ActionButton label="Generate Insights" icon={Sparkles} />
                  <ActionButton label="Download Reports" icon={FileBarChart2} />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex flex-wrap gap-3">
                  <div className="relative min-w-[260px]">
                    <Search
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      placeholder="Search products"
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400/30 focus:bg-white/10"
                    />
                  </div>
                  <FilterButton icon={Filter} label="Category" />
                  <FilterButton icon={AlertTriangle} label="Stock" />
                  <FilterButton icon={SlidersHorizontal} label="Sort" />
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-200">
                  <Sparkles size={16} />
                  AI inventory engine active
                </div>
              </div>
            </motion.section>

            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.title} stat={stat} index={index + 1} />
              ))}
            </section>

            <section className="mt-6 grid grid-cols-1 gap-6 2xl:grid-cols-12">
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} 2xl:col-span-8 p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Products Table</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Inventory list with pricing, stock, and status
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    1,248 items
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-y-3">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-[0.18em] text-slate-500">
                        <th className="px-4 py-2">Product</th>
                        <th className="px-4 py-2">SKU</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Stock</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td className="rounded-l-2xl border-y border-l border-white/10 bg-white/5 px-4 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-12 w-12 rounded-xl object-cover"
                              />
                              <div>
                                <p className="text-sm font-semibold text-white">
                                  {product.name}
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                  Enterprise inventory item
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                            {product.sku}
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                            {product.category}
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white [font-variant-numeric:tabular-nums]">
                            {product.price}
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300 [font-variant-numeric:tabular-nums]">
                            {product.stock}
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4">
                            <StatusBadge status={product.status} />
                          </td>
                          <td className="rounded-r-2xl border-y border-r border-white/10 bg-white/5 px-4 py-4">
                            <div className="flex items-center gap-2">
                              <button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white">
                                <Eye size={14} />
                                View
                              </button>
                              <button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white">
                                <Pencil size={14} />
                                Edit
                              </button>
                              <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white">
                                <MoreHorizontal size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} 2xl:col-span-4 p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      AI Product Insights
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Smart inventory suggestions and actions
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10">
                    <BrainCircuit size={20} />
                  </div>
                </div>

                <div className="space-y-3">
                  {aiInsights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ x: 4 }}
                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/5"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${item.color}`}
                          >
                            <Icon size={18} />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-white">
                              {item.title}
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </section>

            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-4 p-5 sm:p-6`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Top Selling Products
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Highest performing products by units sold
                    </p>
                  </div>
                </div>

                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topSellingData} layout="vertical" barSize={18}>
                      <CartesianGrid stroke="rgba(148,163,184,0.12)" horizontal={false} />
                      <XAxis
                        type="number"
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        type="category"
                        dataKey="name"
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        width={90}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar
                        dataKey="sales"
                        name="Units Sold"
                        radius={[0, 8, 8, 0]}
                        fill="#60a5fa"
                        animationDuration={750}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-4 p-5 sm:p-6`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Revenue by Category
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Category contribution to total revenue
                    </p>
                  </div>
                </div>

                <div className="h-[280px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip content={<PieTooltip />} />
                      <Pie
                        data={revenueCategoryData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={68}
                        outerRadius={102}
                        paddingAngle={4}
                        stroke="rgba(15,23,42,0.3)"
                        animationDuration={900}
                      >
                        {revenueCategoryData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 space-y-3">
                  {revenueCategoryData.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-slate-300">{item.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-4 p-5 sm:p-6`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Stock Trends</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Inventory levels vs movement trend
                    </p>
                  </div>
                </div>

                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={stockTrendData}>
                      <defs>
                        <linearGradient id="stockFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#34d399" stopOpacity={0.35} />
                          <stop offset="100%" stopColor="#34d399" stopOpacity={0.03} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                      <XAxis
                        dataKey="month"
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ color: "#cbd5e1", fontSize: "12px" }} />
                      <Area
                        type="monotone"
                        dataKey="stock"
                        name="Stock Level"
                        stroke="#34d399"
                        strokeWidth={3}
                        fill="url(#stockFill)"
                        animationDuration={800}
                      />
                      <Area
                        type="monotone"
                        dataKey="movement"
                        name="Movement"
                        stroke="#60a5fa"
                        strokeWidth={2}
                        fill="transparent"
                        strokeDasharray="6 6"
                        animationDuration={950}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </section>

            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
              <motion.div
                custom={6}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-7 p-5 sm:p-6`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Product Performance Metrics
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Margin growth and return-rate performance
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    Last 6 months
                  </div>
                </div>

                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceMetrics}>
                      <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                      <XAxis
                        dataKey="month"
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        yAxisId="left"
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ color: "#cbd5e1", fontSize: "12px" }} />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="margin"
                        name="Margin %"
                        stroke="#60a5fa"
                        strokeWidth={3}
                        dot={{ r: 3, fill: "#60a5fa" }}
                        activeDot={{ r: 6 }}
                        animationDuration={800}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="returns"
                        name="Return %"
                        stroke="#f59e0b"
                        strokeWidth={3}
                        dot={{ r: 3, fill: "#f59e0b" }}
                        activeDot={{ r: 6 }}
                        animationDuration={950}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                custom={7}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-5 p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Inventory Activity Feed
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Recent stock and product activity logs
                    </p>
                  </div>
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                </div>

                <div className="space-y-4">
                  {inventoryActivity.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ x: 4 }}
                        className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/7"
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ${item.color}`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <h4 className="text-sm font-semibold text-white">
                              {item.title}
                            </h4>
                            <span className="whitespace-nowrap text-xs text-slate-500">
                              {item.time}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            {item.detail}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
