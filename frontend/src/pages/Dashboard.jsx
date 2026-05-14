
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
  TrendingUp,
  IndianRupee,
  ShoppingCart,
  UserPlus,
  Sparkles,
  ArrowUpRight,
  Download,
  Plus,
  Eye,
  BrainCircuit,
  ChevronRight,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const revenueData = [
  { name: "Jan", revenue: 420000, sales: 320 },
  { name: "Feb", revenue: 465000, sales: 358 },
  { name: "Mar", revenue: 510000, sales: 401 },
  { name: "Apr", revenue: 548000, sales: 436 },
  { name: "May", revenue: 592000, sales: 472 },
  { name: "Jun", revenue: 640000, sales: 518 },
  { name: "Jul", revenue: 702000, sales: 556 },
];

const salesPerformanceData = [
  { name: "North", sales: 1480, target: 1320 },
  { name: "South", sales: 1240, target: 1180 },
  { name: "East", sales: 1360, target: 1260 },
  { name: "West", sales: 1620, target: 1450 },
  { name: "Central", sales: 1180, target: 1100 },
];

const stats = [
  {
    title: "Total Revenue",
    value: "₹64.2L",
    growth: "+12.8%",
    icon: IndianRupee,
    iconBg: "from-blue-500/20 to-cyan-400/10",
    iconColor: "text-blue-400",
  },
  {
    title: "Total Sales",
    value: "5,184",
    growth: "+9.4%",
    icon: ShoppingCart,
    iconBg: "from-emerald-500/20 to-teal-400/10",
    iconColor: "text-emerald-400",
  },
  {
    title: "Total Customers",
    value: "18,426",
    growth: "+15.2%",
    icon: Users,
    iconBg: "from-violet-500/20 to-fuchsia-400/10",
    iconColor: "text-violet-400",
  },
  {
    title: "Growth Rate",
    value: "24.6%",
    growth: "+4.1%",
    icon: TrendingUp,
    iconBg: "from-sky-500/20 to-blue-400/10",
    iconColor: "text-sky-400",
  },
];

const insights = [
  "Revenue has increased consistently for 7 consecutive months, led by enterprise subscriptions and repeat client upgrades.",
  "West region is outperforming all zones in sales conversion, indicating stronger channel efficiency and product-market fit.",
  "Customer acquisition quality improved this quarter, with higher activation rates and better repeat engagement patterns.",
  "Forecast models indicate a likely 11–14% uplift in next month's revenue if current sales velocity is maintained.",
];

const activities = [
  {
    title: "New enterprise sale closed",
    description: "A ₹4.8L annual contract was signed with Orion Retail Group.",
    time: "10 mins ago",
    icon: ShoppingCart,
    color: "text-emerald-400",
  },
  {
    title: "Product catalog updated",
    description: "8 analytics-enabled SKUs were added to the premium portfolio.",
    time: "42 mins ago",
    icon: Package,
    color: "text-blue-400",
  },
  {
    title: "Customer registrations increased",
    description: "126 new customers joined through campaign-led onboarding funnels.",
    time: "1 hour ago",
    icon: UserPlus,
    color: "text-violet-400",
  },
  {
    title: "Revenue milestone achieved",
    description: "Monthly recurring revenue crossed the ₹50L benchmark.",
    time: "Today",
    icon: TrendingUp,
    color: "text-sky-400",
  },
];

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Analytics", icon: BarChart3, active: false },
  { name: "Reports", icon: FileText, active: false },
  { name: "Products", icon: Package, active: false },
  { name: "Customers", icon: Users, active: false },
  { name: "Employees", icon: UserCog, active: false },
  { name: "Settings", icon: Settings, active: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
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
          ? "bg-gradient-to-r from-blue-500/20 to-cyan-400/10 text-white border border-blue-400/20 shadow-[0_0_0_1px_rgba(59,130,246,0.08)]"
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
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {stat.value}
          </h3>
          <div className="mt-3 inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
            <ArrowUpRight size={14} />
            {stat.growth}
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

const ActionButton = ({ label, icon: Icon }) => (
  <motion.button
    whileHover={{ y: -2, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white"
  >
    <Icon size={16} />
    {label}
  </motion.button>
);

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
          <span className="text-white">
            {entry.name.toLowerCase().includes("revenue") ? "₹" : ""}
            {entry.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function SmartMISDashboard() {
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
              <Sparkles size={18} />
            </div>
            <h3 className="text-sm font-semibold text-white">AI Reporting Ready</h3>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Generate board-ready insights and export executive summaries instantly.
            </p>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col lg:ml-[280px]">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/60 backdrop-blur-2xl">
            <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-3">
                <div className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <LayoutDashboard size={18} className="text-blue-400" />
                </div>

                <div className="relative w-full max-w-xl">
                  <Search
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Search reports, metrics, products..."
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
              className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between"
            >
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-300/80">
                  Dashboard Overview
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Welcome Back, Admin
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
                  Here’s a real-time overview of your business performance, growth
                  momentum, sales activity, and AI-driven operational insights.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <ActionButton label="Generate Report" icon={FileText} />
                <ActionButton label="Add Product" icon={Plus} />
                <ActionButton label="View Analytics" icon={Eye} />
                <ActionButton label="Export Data" icon={Download} />
              </div>
            </motion.section>

            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.title} stat={stat} index={index + 1} />
              ))}
            </section>

            <section className="mt-6 grid grid-cols-1 gap-6 2xl:grid-cols-3">
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} 2xl:col-span-2 p-5 sm:p-6`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Revenue Analytics
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Monthly revenue progression with sales correlation
                    </p>
                  </div>
                  <div className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                    +18.4% YoY
                  </div>
                </div>

                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.45} />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.03} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                      <XAxis
                        dataKey="name"
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => `₹${value / 100000}L`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        name="Revenue"
                        stroke="#60a5fa"
                        strokeWidth={3}
                        fill="url(#revenueFill)"
                        animationDuration={800}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Insights</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Smart recommendations from business patterns
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                    <BrainCircuit size={20} />
                  </div>
                </div>

                <div className="space-y-3">
                  {insights.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 4 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                          <Sparkles size={15} />
                        </div>
                        <p className="text-sm leading-6 text-slate-300">{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-2 p-5 sm:p-6`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Sales Performance
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Regional sales output versus planned targets
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    94.8% Target Hit
                  </div>
                </div>

                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesPerformanceData} barGap={10}>
                      <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                      <XAxis
                        dataKey="name"
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
                      <Legend
                        wrapperStyle={{ color: "#cbd5e1", fontSize: "12px" }}
                      />
                      <Bar
                        dataKey="sales"
                        name="Sales"
                        radius={[8, 8, 0, 0]}
                        fill="#60a5fa"
                        animationDuration={700}
                      />
                      <Bar
                        dataKey="target"
                        name="Target"
                        radius={[8, 8, 0, 0]}
                        fill="rgba(148,163,184,0.45)"
                        animationDuration={900}
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
                className={`${glassCard} p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Recent Activity
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Latest system and business events
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activities.map((activity, index) => {
                    const Icon = activity.icon;

                    return (
                      <motion.div
                        key={activity.title}
                        whileHover={{ x: 4 }}
                        className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/7"
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ${activity.color}`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <h4 className="text-sm font-semibold text-white">
                              {activity.title}
                            </h4>
                            <span className="whitespace-nowrap text-xs text-slate-500">
                              {activity.time}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-6 text-slate-400">
                            {activity.description}
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
