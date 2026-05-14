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
  ArrowUpRight,
  FileBarChart2,
  Sparkles,
  CalendarClock,
  Files,
  Bot,
  Download,
  Eye,
  Wand2,
  TrendingUp,
  DollarSign,
  UserRoundSearch,
  LineChart,
  FileSpreadsheet,
  FileText as PdfIcon,
  Mail,
  Clock3,
  CheckCircle2,
  CircleDashed,
  PlayCircle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: false },
  { name: "Analytics", icon: BarChart3, active: false },
  { name: "Reports", icon: FileText, active: true },
  { name: "Products", icon: Package, active: false },
  { name: "Customers", icon: Users, active: false },
  { name: "Employees", icon: UserCog, active: false },
  { name: "Settings", icon: Settings, active: false },
];

const reportStats = [
  {
    title: "Total Reports",
    value: "1,284",
    change: "+12.6%",
    icon: Files,
    iconColor: "text-blue-400",
    iconBg: "from-blue-500/20 to-cyan-400/10",
  },
  {
    title: "Generated This Month",
    value: "186",
    change: "+18.2%",
    icon: FileBarChart2,
    iconColor: "text-emerald-400",
    iconBg: "from-emerald-500/20 to-teal-400/10",
  },
  {
    title: "AI Reports",
    value: "74",
    change: "+24.1%",
    icon: Bot,
    iconColor: "text-violet-400",
    iconBg: "from-violet-500/20 to-fuchsia-400/10",
  },
  {
    title: "Scheduled Reports",
    value: "32",
    change: "+8.4%",
    icon: CalendarClock,
    iconColor: "text-amber-400",
    iconBg: "from-amber-500/20 to-orange-400/10",
  },
];

const reportsTable = [
  {
    name: "Q2 Sales Performance",
    category: "Sales Reports",
    date: "12 May 2026",
    status: "Ready",
  },
  {
    name: "Revenue Summary - April",
    category: "Financial Reports",
    date: "10 May 2026",
    status: "Processing",
  },
  {
    name: "Customer Retention Insights",
    category: "Customer Reports",
    date: "09 May 2026",
    status: "Ready",
  },
  {
    name: "Product Margin Analysis",
    category: "Product Reports",
    date: "07 May 2026",
    status: "Scheduled",
  },
  {
    name: "Workforce Productivity Snapshot",
    category: "Employee Reports",
    date: "06 May 2026",
    status: "Ready",
  },
  {
    name: "AI Demand Forecast",
    category: "AI Insights Reports",
    date: "05 May 2026",
    status: "Ready",
  },
];

const aiReportActions = [
  {
    title: "Generate Sales Report",
    description: "Create revenue, order flow, and conversion performance summary.",
    icon: TrendingUp,
    color: "text-blue-400",
  },
  {
    title: "Generate Revenue Report",
    description: "Build profit, cost, and growth analysis across business units.",
    icon: DollarSign,
    color: "text-emerald-400",
  },
  {
    title: "Generate Customer Insights",
    description: "Analyze retention, acquisition quality, and engagement trends.",
    icon: UserRoundSearch,
    color: "text-violet-400",
  },
  {
    title: "Generate Forecast Report",
    description: "Predict demand, revenue movement, and near-term business risk.",
    icon: LineChart,
    color: "text-amber-400",
  },
];

const categoryCards = [
  {
    title: "Sales Reports",
    description: "Order trends, conversion metrics, and pipeline performance.",
    count: "142 files",
    icon: TrendingUp,
    color: "text-blue-400",
  },
  {
    title: "Financial Reports",
    description: "Revenue, expenses, profit margin, and cost-center analysis.",
    count: "96 files",
    icon: DollarSign,
    color: "text-emerald-400",
  },
  {
    title: "Customer Reports",
    description: "Retention, acquisition, loyalty, and lifecycle insights.",
    count: "118 files",
    icon: Users,
    color: "text-violet-400",
  },
  {
    title: "Product Reports",
    description: "SKU analytics, demand movement, and category contribution.",
    count: "87 files",
    icon: Package,
    color: "text-cyan-400",
  },
  {
    title: "Employee Reports",
    description: "Productivity, attendance, utilization, and team output.",
    count: "64 files",
    icon: UserCog,
    color: "text-amber-400",
  },
  {
    title: "AI Insights Reports",
    description: "Predictive summaries, recommendations, and risk signals.",
    count: "51 files",
    icon: Sparkles,
    color: "text-rose-400",
  },
];

const scheduledReports = [
  {
    title: "Daily Sales Pulse",
    schedule: "Every day • 08:00 AM",
    description: "Sales snapshots, top products, and conversion deltas.",
    status: "Active",
  },
  {
    title: "Weekly Operations Review",
    schedule: "Every Monday • 09:30 AM",
    description: "Business performance, customer growth, and issue tracking.",
    status: "Active",
  },
  {
    title: "Monthly Executive Report",
    schedule: "1st of every month • 07:00 AM",
    description: "Board-ready summary with revenue, margin, and AI insights.",
    status: "Scheduled",
  },
];

const recentActivity = [
  {
    title: "AI Forecast Report generated",
    detail: "Forecast package completed and shared with management team.",
    time: "8 mins ago",
    icon: Sparkles,
    color: "text-violet-400",
  },
  {
    title: "Revenue Summary exported as PDF",
    detail: "Finance report downloaded for leadership review.",
    time: "22 mins ago",
    icon: PdfIcon,
    color: "text-blue-400",
  },
  {
    title: "Weekly Operations Report emailed",
    detail: "Automated distribution delivered to 12 stakeholders.",
    time: "41 mins ago",
    icon: Mail,
    color: "text-emerald-400",
  },
  {
    title: "Customer Insights report scheduled",
    detail: "Recurring monthly run created for CRM analytics pipeline.",
    time: "1 hour ago",
    icon: Clock3,
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

const StatusBadge = ({ status }) => {
  if (status === "Ready") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
        <CheckCircle2 size={13} />
        Ready
      </span>
    );
  }

  if (status === "Processing") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
        <CircleDashed size={13} />
        Processing
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
      <PlayCircle size={13} />
      Scheduled
    </span>
  );
};

export default function SmartMISReportsPage() {
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
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-sm font-semibold text-white">Automated Reporting</h3>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Centralized reports, AI summaries, and secure exports for enterprise teams.
            </p>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col lg:ml-[280px]">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/60 backdrop-blur-2xl">
            <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden">
                  <FileText size={18} className="text-blue-400" />
                </div>

                <div className="relative w-full max-w-xl">
                  <Search
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Search reports, exports, logs..."
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
                  Reporting Workspace
                </p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Reports Center
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
                  Manage automated business reporting, generate AI-powered summaries,
                  schedule recurring exports, and distribute executive-ready insights.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <ActionButton label="Export PDF" icon={PdfIcon} primary />
                <ActionButton label="Export Excel" icon={FileSpreadsheet} />
                <ActionButton label="Export CSV" icon={Download} />
                <ActionButton label="Email Report" icon={Mail} />
              </div>
            </motion.section>

            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {reportStats.map((stat, index) => (
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
                    <h3 className="text-lg font-semibold text-white">Reports Library</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Centralized access to generated and scheduled reports
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    Updated 5m ago
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-y-3">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-[0.18em] text-slate-500">
                        <th className="px-4 py-2">Report Name</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Generated Date</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportsTable.map((report) => (
                        <tr key={report.name}>
                          <td className="rounded-l-2xl border-y border-l border-white/10 bg-white/5 px-4 py-4">
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {report.name}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                Enterprise report package
                              </p>
                            </div>
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                            {report.category}
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                            {report.date}
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4">
                            <StatusBadge status={report.status} />
                          </td>
                          <td className="rounded-r-2xl border-y border-r border-white/10 bg-white/5 px-4 py-4">
                            <div className="flex items-center gap-2">
                              <button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white">
                                <Download size={14} />
                                Download
                              </button>
                              <button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white">
                                <Eye size={14} />
                                View
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
                      AI Report Generator
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Create smart business reports instantly
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/10">
                    <Wand2 size={20} />
                  </div>
                </div>

                <div className="space-y-3">
                  {aiReportActions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.title}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-4 text-left transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/5"
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
                      </motion.button>
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
                className="xl:col-span-8"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Report Categories
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Organized report domains across business functions
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {categoryCards.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ y: -5, scale: 1.01 }}
                        className={`${glassCard} p-5`}
                      >
                        <div className="flex items-start justify-between">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${item.color}`}
                          >
                            <Icon size={22} />
                          </div>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                            {item.count}
                          </span>
                        </div>
                        <h4 className="mt-4 text-base font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-4 p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Scheduled Reports</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Automated reporting workflows
                    </p>
                  </div>
                  <CalendarClock size={18} className="text-blue-400" />
                </div>

                <div className="space-y-4">
                  {scheduledReports.map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ x: 4 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs font-medium text-blue-300">
                            {item.schedule}
                          </p>
                        </div>
                        <StatusBadge status={item.status} />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-5 p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Export Options</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Share reports in multiple enterprise formats
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <ActionButton label="Export PDF" icon={PdfIcon} primary />
                  <ActionButton label="Export Excel" icon={FileSpreadsheet} />
                  <ActionButton label="Export CSV" icon={Download} />
                  <ActionButton label="Email Report" icon={Mail} />
                </div>

                <div className="mt-5 rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/10 to-transparent p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        Executive-ready formatting
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Exports include presentation-friendly layouts, branded headers,
                        and clean data sections for leadership teams.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                custom={6}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-7 p-5 sm:p-6`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Recent Reports Activity
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Latest generation logs, exports, and automation events
                    </p>
                  </div>
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                </div>

                <div className="space-y-4">
                  {recentActivity.map((item) => {
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