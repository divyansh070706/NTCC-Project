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
  CalendarDays,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Activity,
  ShieldAlert,
  Lightbulb,
  BrainCircuit,
  Target,
  Download,
  Share2,
  Sparkles,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  Globe2,
  Filter,
  ArrowUpRight,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: false },
  { name: "Analytics", icon: BarChart3, active: true },
  { name: "Reports", icon: FileText, active: false },
  { name: "Products", icon: Package, active: false },
  { name: "Customers", icon: Users, active: false },
  { name: "Employees", icon: UserCog, active: false },
  { name: "Settings", icon: Settings, active: false },
];

const kpiCards = [
  {
    title: "Revenue Growth",
    value: "18.4%",
    change: "+4.8%",
    icon: TrendingUp,
    iconColor: "text-blue-400",
    iconBg: "from-blue-500/20 to-cyan-400/10",
    trend: "up",
  },
  {
    title: "Customer Retention",
    value: "91.7%",
    change: "+2.1%",
    icon: Users,
    iconColor: "text-emerald-400",
    iconBg: "from-emerald-500/20 to-teal-400/10",
    trend: "up",
  },
  {
    title: "Conversion Rate",
    value: "7.9%",
    change: "+1.4%",
    icon: Target,
    iconColor: "text-violet-400",
    iconBg: "from-violet-500/20 to-fuchsia-400/10",
    trend: "up",
  },
  {
    title: "Market Performance",
    value: "84.2%",
    change: "-0.9%",
    icon: Globe2,
    iconColor: "text-amber-400",
    iconBg: "from-amber-500/20 to-orange-400/10",
    trend: "down",
  },
];

const revenueTrendData = [
  { month: "Jan", revenue: 38, forecast: 36 },
  { month: "Feb", revenue: 42, forecast: 40 },
  { month: "Mar", revenue: 46, forecast: 44 },
  { month: "Apr", revenue: 51, forecast: 48 },
  { month: "May", revenue: 57, forecast: 54 },
  { month: "Jun", revenue: 63, forecast: 60 },
  { month: "Jul", revenue: 69, forecast: 66 },
  { month: "Aug", revenue: 74, forecast: 71 },
];

const customerGrowthData = [
  { month: "Jan", customers: 8200, active: 6400 },
  { month: "Feb", customers: 9100, active: 7050 },
  { month: "Mar", customers: 10050, active: 7780 },
  { month: "Apr", customers: 10920, active: 8520 },
  { month: "May", customers: 11840, active: 9260 },
  { month: "Jun", customers: 12780, active: 10120 },
  { month: "Jul", customers: 13860, active: 10940 },
];

const productCategoryData = [
  { name: "Enterprise Suite", value: 38, color: "#60a5fa" },
  { name: "MIS Reporting", value: 24, color: "#34d399" },
  { name: "Forecast Engine", value: 21, color: "#a78bfa" },
  { name: "Data Integrations", value: 17, color: "#f59e0b" },
];

const regionalPerformanceData = [
  { region: "North", sales: 88, target: 82 },
  { region: "South", sales: 79, target: 76 },
  { region: "East", sales: 84, target: 80 },
  { region: "West", sales: 93, target: 86 },
  { region: "Central", sales: 76, target: 72 },
];

const aiInsights = [
  {
    title: "Predictive Growth Trend",
    description:
      "Revenue velocity suggests a sustained upward trend over the next 45 days, especially in enterprise subscription renewals.",
    icon: BrainCircuit,
    color: "text-blue-400",
    glow: "shadow-blue-500/10",
  },
  {
    title: "Risk Alert",
    description:
      "Market performance dipped in one segment, indicating possible demand softening in price-sensitive regions.",
    icon: ShieldAlert,
    color: "text-rose-400",
    glow: "shadow-rose-500/10",
  },
  {
    title: "Growth Opportunity",
    description:
      "Customer retention signals are strongest among mid-sized clients, creating upsell potential for premium analytics modules.",
    icon: Lightbulb,
    color: "text-emerald-400",
    glow: "shadow-emerald-500/10",
  },
  {
    title: "Performance Recommendation",
    description:
      "Allocate more campaign budget to West and North clusters where conversion efficiency remains above benchmark.",
    icon: Sparkles,
    color: "text-violet-400",
    glow: "shadow-violet-500/10",
  },
];

const comparisonRows = [
  {
    month: "May 2026",
    sales: "₹18.4L",
    target: "₹17.2L",
    revenue: "₹22.8L",
    expenses: "₹12.1L",
    acquisition: "1,248",
  },
  {
    month: "Apr 2026",
    sales: "₹17.6L",
    target: "₹16.9L",
    revenue: "₹21.7L",
    expenses: "₹11.9L",
    acquisition: "1,172",
  },
  {
    month: "Mar 2026",
    sales: "₹16.8L",
    target: "₹16.1L",
    revenue: "₹20.9L",
    expenses: "₹11.3L",
    acquisition: "1,094",
  },
  {
    month: "Feb 2026",
    sales: "₹15.9L",
    target: "₹15.4L",
    revenue: "₹19.8L",
    expenses: "₹10.8L",
    acquisition: "1,026",
  },
];

const liveActivity = [
  {
    title: "Live sales increase detected",
    description: "West region sales jumped 8.2% in the last hour.",
    time: "2 mins ago",
    icon: TrendingUp,
    color: "text-emerald-400",
  },
  {
    title: "Customer signups accelerated",
    description: "34 new customer accounts created via product landing funnel.",
    time: "8 mins ago",
    icon: Users,
    color: "text-blue-400",
  },
  {
    title: "Revenue spike identified",
    description: "Recurring billing cycle pushed revenue 11% above projected hourly baseline.",
    time: "15 mins ago",
    icon: Activity,
    color: "text-violet-400",
  },
  {
    title: "Product performance alert",
    description: "MIS Reporting module recorded the highest interaction depth today.",
    time: "27 mins ago",
    icon: Package,
    color: "text-amber-400",
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
      {item.active && <ArrowUpRight size={15} className="text-blue-400" />}
    </motion.button>
  );
};

const FilterSelect = ({ icon: Icon, label, value }) => (
  <button className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-slate-300 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/10">
    <Icon size={16} className="text-slate-400" />
    <span className="hidden sm:inline text-slate-400">{label}:</span>
    <span className="font-medium text-white">{value}</span>
    <ChevronDown size={15} className="text-slate-500" />
  </button>
);

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

const KPICard = ({ item, index }) => {
  const Icon = item.icon;
  const TrendIcon = item.trend === "up" ? TrendingUp : TrendingDown;
  const trendColor =
    item.trend === "up"
      ? "text-emerald-300 bg-emerald-500/10 border-emerald-400/20"
      : "text-rose-300 bg-rose-500/10 border-rose-400/20";

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
          <p className="text-sm font-medium text-slate-400">{item.title}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {item.value}
          </h3>
          <div
            className={`mt-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${trendColor}`}
          >
            <TrendIcon size={14} />
            {item.change}
          </div>
        </div>
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${item.iconBg}`}
        >
          <Icon className={item.iconColor} size={24} />
        </div>
      </div>
    </motion.div>
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
      <p className="mt-1 text-sm text-slate-300">{data.value}% share</p>
    </div>
  );
};

const Analytics = () => {
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
              <BrainCircuit size={18} />
            </div>
            <h3 className="text-sm font-semibold text-white">AI Analytics Engine</h3>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Adaptive forecasting, risk analysis, and boardroom-ready insights in one view.
            </p>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col lg:ml-[280px]">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/60 backdrop-blur-2xl">
            <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden">
                  <BarChart3 size={18} className="text-blue-400" />
                </div>

                <div className="relative w-full max-w-xl">
                  <Search
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Search charts, metrics, insights..."
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
                    Real-Time Intelligence
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Business Analytics
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
                    Track real-time performance, identify growth opportunities, and
                    monitor business health using AI-powered insights across revenue,
                    customers, products, and operations.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <ActionButton label="Export Analytics" icon={Download} primary />
                  <ActionButton label="Generate AI Report" icon={Sparkles} />
                  <ActionButton label="Download Charts" icon={LineChartIcon} />
                  <ActionButton label="Share Insights" icon={Share2} />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex flex-wrap gap-3">
                  <FilterSelect
                    icon={CalendarDays}
                    label="Date Range"
                    value="Last 30 Days"
                  />
                  <FilterSelect icon={Globe2} label="Region" value="All Regions" />
                  <FilterSelect
                    icon={Filter}
                    label="Category"
                    value="All Products"
                  />
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-200">
                  <Activity size={16} />
                  AI model refreshed 5 minutes ago
                </div>
              </div>
            </motion.section>

            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {kpiCards.map((item, index) => (
                <KPICard key={item.title} item={item} index={index + 1} />
              ))}
            </section>

            <section className="mt-6 grid grid-cols-1 gap-6 2xl:grid-cols-12">
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} 2xl:col-span-7 p-5 sm:p-6`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Revenue Trends</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Revenue trajectory vs predictive baseline
                    </p>
                  </div>
                  <div className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                    Forecast Active
                  </div>
                </div>

                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueTrendData}>
                      <defs>
                        <linearGradient id="revenueAreaFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.03} />
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
                        tickFormatter={(value) => `₹${value}L`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ color: "#cbd5e1", fontSize: "12px" }} />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        name="Revenue"
                        stroke="#60a5fa"
                        strokeWidth={3}
                        fill="url(#revenueAreaFill)"
                        animationDuration={800}
                      />
                      <Area
                        type="monotone"
                        dataKey="forecast"
                        name="Forecast"
                        stroke="#34d399"
                        strokeWidth={2}
                        fill="transparent"
                        strokeDasharray="6 6"
                        animationDuration={900}
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
                className={`${glassCard} 2xl:col-span-5 p-5 sm:p-6`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Customer Growth</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Total customer base and active users
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    +11.6% Growth
                  </div>
                </div>

                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={customerGrowthData}>
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
                      <Line
                        type="monotone"
                        dataKey="customers"
                        name="Total Customers"
                        stroke="#a78bfa"
                        strokeWidth={3}
                        dot={{ r: 3, fill: "#a78bfa" }}
                        activeDot={{ r: 6 }}
                        animationDuration={800}
                      />
                      <Line
                        type="monotone"
                        dataKey="active"
                        name="Active Users"
                        stroke="#34d399"
                        strokeWidth={3}
                        dot={{ r: 3, fill: "#34d399" }}
                        activeDot={{ r: 6 }}
                        animationDuration={950}
                      />
                    </LineChart>
                  </ResponsiveContainer>
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
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Product Categories
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Distribution across analytics products
                    </p>
                  </div>
                  <PieChartIcon size={18} className="text-blue-400" />
                </div>

                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip content={<PieTooltip />} />
                      <Pie
                        data={productCategoryData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={72}
                        outerRadius={106}
                        paddingAngle={4}
                        stroke="rgba(15,23,42,0.3)"
                        animationDuration={900}
                      >
                        {productCategoryData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 space-y-3">
                  {productCategoryData.map((item) => (
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
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-4 p-5 sm:p-6`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Regional Performance
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Sales achievement across regions
                    </p>
                  </div>
                  <Globe2 size={18} className="text-blue-400" />
                </div>

                <div className="h-[340px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={regionalPerformanceData} barGap={10}>
                      <CartesianGrid stroke="rgba(148,163,184,0.12)" vertical={false} />
                      <XAxis
                        dataKey="region"
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ color: "#cbd5e1", fontSize: "12px" }} />
                      <Bar
                        dataKey="sales"
                        name="Sales"
                        radius={[8, 8, 0, 0]}
                        fill="#60a5fa"
                        animationDuration={750}
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
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-4 p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      AI Analytics Insights
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Predictive intelligence and smart alerts
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
                        className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-4 shadow-lg ${item.glow} transition-all duration-300 hover:border-blue-400/20`}
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
                custom={6}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-8 p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Monthly Performance Comparison
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Sales, targets, revenue efficiency, and acquisition performance
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    Updated Live
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-y-3">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-[0.18em] text-slate-500">
                        <th className="px-4 py-2">Month</th>
                        <th className="px-4 py-2">Sales vs Target</th>
                        <th className="px-4 py-2">Revenue vs Expenses</th>
                        <th className="px-4 py-2">Customer Acquisition</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr key={row.month} className="rounded-2xl bg-white/5">
                          <td className="rounded-l-2xl border-y border-l border-white/10 px-4 py-4 text-sm font-semibold text-white">
                            {row.month}
                          </td>
                          <td className="border-y border-white/10 px-4 py-4 text-sm text-slate-300">
                            <div className="flex flex-col">
                              <span className="font-medium text-white">
                                {row.sales}
                              </span>
                              <span className="text-xs text-slate-500">
                                Target: {row.target}
                              </span>
                            </div>
                          </td>
                          <td className="border-y border-white/10 px-4 py-4 text-sm text-slate-300">
                            <div className="flex flex-col">
                              <span className="font-medium text-white">
                                {row.revenue}
                              </span>
                              <span className="text-xs text-slate-500">
                                Expenses: {row.expenses}
                              </span>
                            </div>
                          </td>
                          <td className="rounded-r-2xl border-y border-r border-white/10 px-4 py-4 text-sm text-slate-300">
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                              <Users size={13} />
                              {row.acquisition} users
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              <motion.div
                custom={7}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-4 p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Real-Time Activity
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Streaming analytics events and updates
                    </p>
                  </div>
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                </div>

                <div className="space-y-4">
                  {liveActivity.map((item) => {
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
                            {item.description}
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