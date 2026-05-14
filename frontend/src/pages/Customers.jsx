
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
  Send,
  ArrowUpRight,
  ChevronRight,
  Filter,
  SlidersHorizontal,
  MoreHorizontal,
  Eye,
  Mail,
  Phone,
  MapPin,
  Activity,
  UserPlus,
  HeartHandshake,
  BrainCircuit,
  ShieldAlert,
  TrendingUp,
  Crown,
  CircleDollarSign,
  UserCheck,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: false },
  { name: "Analytics", icon: BarChart3, active: false },
  { name: "Reports", icon: FileText, active: false },
  { name: "Products", icon: Package, active: false },
  { name: "Customers", icon: Users, active: true },
  { name: "Employees", icon: UserCog, active: false },
  { name: "Settings", icon: Settings, active: false },
];

const customerStats = [
  {
    title: "Total Customers",
    value: "18,426",
    change: "+12.4%",
    icon: Users,
    iconColor: "text-blue-400",
    iconBg: "from-blue-500/20 to-cyan-400/10",
  },
  {
    title: "Active Customers",
    value: "13,982",
    change: "+8.7%",
    icon: UserCheck,
    iconColor: "text-emerald-400",
    iconBg: "from-emerald-500/20 to-teal-400/10",
  },
  {
    title: "New Registrations",
    value: "1,248",
    change: "+16.1%",
    icon: UserPlus,
    iconColor: "text-violet-400",
    iconBg: "from-violet-500/20 to-fuchsia-400/10",
  },
  {
    title: "Retention Rate",
    value: "91.7%",
    change: "+2.3%",
    icon: HeartHandshake,
    iconColor: "text-amber-400",
    iconBg: "from-amber-500/20 to-orange-400/10",
  },
];

const customers = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
    name: "Ananya Sharma",
    email: "ananya.sharma@novamart.com",
    phone: "+91 98765 21014",
    city: "Mumbai",
    purchaseValue: "₹1,84,500",
    status: "VIP",
    lastActivity: "12 mins ago",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
    name: "Rahul Mehta",
    email: "rahul.mehta@retailgrid.in",
    phone: "+91 98111 48392",
    city: "Delhi",
    purchaseValue: "₹92,300",
    status: "Active",
    lastActivity: "34 mins ago",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=240&q=80",
    name: "Priya Nair",
    email: "priya.nair@meridianlabs.co",
    phone: "+91 98988 12244",
    city: "Bengaluru",
    purchaseValue: "₹2,16,900",
    status: "VIP",
    lastActivity: "1 hour ago",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80",
    name: "Amit Verma",
    email: "amit.verma@urbanpulse.ai",
    phone: "+91 97654 88431",
    city: "Pune",
    purchaseValue: "₹48,750",
    status: "At Risk",
    lastActivity: "5 hours ago",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=240&q=80",
    name: "Sneha Kapoor",
    email: "sneha.kapoor@alpharetail.io",
    phone: "+91 99821 77402",
    city: "Hyderabad",
    purchaseValue: "₹1,27,400",
    status: "Active",
    lastActivity: "Today",
  },
];

const customerGrowthData = [
  { month: "Jan", customers: 9200 },
  { month: "Feb", customers: 10150 },
  { month: "Mar", customers: 11280 },
  { month: "Apr", customers: 12540 },
  { month: "May", customers: 13960 },
  { month: "Jun", customers: 15440 },
  { month: "Jul", customers: 16820 },
];

const retentionData = [
  { month: "Jan", retained: 82, churn: 18 },
  { month: "Feb", retained: 84, churn: 16 },
  { month: "Mar", retained: 86, churn: 14 },
  { month: "Apr", retained: 88, churn: 12 },
  { month: "May", retained: 90, churn: 10 },
  { month: "Jun", retained: 91, churn: 9 },
];

const regionWiseData = [
  { region: "North", customers: 3820 },
  { region: "South", customers: 4210 },
  { region: "East", customers: 2940 },
  { region: "West", customers: 4680 },
  { region: "Central", customers: 2776 },
];

const segmentationData = [
  { name: "High Value", value: 28, color: "#60a5fa" },
  { name: "Loyal", value: 24, color: "#34d399" },
  { name: "New", value: 19, color: "#a78bfa" },
  { name: "At Risk", value: 15, color: "#f59e0b" },
  { name: "Inactive", value: 14, color: "#f472b6" },
];

const aiInsights = [
  {
    title: "High-Value Customers",
    description:
      "Top-tier customers from Mumbai and Bengaluru are driving the highest repeat purchase value this cycle.",
    icon: Crown,
    color: "text-blue-400",
  },
  {
    title: "Churn Risk Detection",
    description:
      "A segment of mid-value customers has shown reduced activity and delayed repeat orders over the last 14 days.",
    icon: ShieldAlert,
    color: "text-amber-400",
  },
  {
    title: "Engagement Recommendation",
    description:
      "Launch personalized outreach campaigns for recently inactive customers to improve reactivation and campaign ROI.",
    icon: Sparkles,
    color: "text-emerald-400",
  },
  {
    title: "Retention Opportunity",
    description:
      "VIP and loyal customers respond strongly to premium offers, suggesting an upsell path through curated bundles.",
    icon: BrainCircuit,
    color: "text-violet-400",
  },
];

const activityFeed = [
  {
    title: "New enterprise registration",
    detail: "A new customer account from Chennai completed onboarding and CRM sync.",
    time: "9 mins ago",
    icon: UserPlus,
    color: "text-blue-400",
  },
  {
    title: "Recent purchase recorded",
    detail: "High-value order placed by Ananya Sharma with ₹38,400 basket size.",
    time: "21 mins ago",
    icon: CircleDollarSign,
    color: "text-emerald-400",
  },
  {
    title: "VIP customer interaction",
    detail: "Priority support response delivered to Priya Nair for account expansion inquiry.",
    time: "43 mins ago",
    icon: Crown,
    color: "text-violet-400",
  },
  {
    title: "Support ticket resolved",
    detail: "Customer engagement issue closed after successful follow-up and product walkthrough.",
    time: "1 hour ago",
    icon: Activity,
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
  if (status === "VIP") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">
        <Crown size={13} />
        VIP
      </span>
    );
  }

  if (status === "At Risk") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
        <ShieldAlert size={13} />
        At Risk
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
      <UserCheck size={13} />
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
      <p className="mt-1 text-sm text-slate-300">{data.value}% segment share</p>
    </div>
  );
};

export default function SmartMISCustomersPage() {
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
            <h3 className="text-sm font-semibold text-white">CRM Intelligence</h3>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Customer visibility, retention scoring, and AI-driven engagement actions.
            </p>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col lg:ml-[280px]">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/60 backdrop-blur-2xl">
            <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden">
                  <Users size={18} className="text-blue-400" />
                </div>

                <div className="relative w-full max-w-xl">
                  <Search
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Search customers, email, city..."
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
                    CRM Overview
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Customer Management
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
                    Manage customer engagement, retention analytics, spending behavior,
                    and smart CRM actions through a premium enterprise customer workspace.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <ActionButton label="Add Customer" icon={Plus} primary />
                  <ActionButton label="Export CRM Data" icon={Download} />
                  <ActionButton label="Generate AI Insights" icon={Sparkles} />
                  <ActionButton label="Send Campaign" icon={Send} />
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
                      placeholder="Search customers"
                      className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-400/30 focus:bg-white/10"
                    />
                  </div>
                  <FilterButton icon={Filter} label="Status" />
                  <FilterButton icon={MapPin} label="Region" />
                  <FilterButton icon={SlidersHorizontal} label="Spending" />
                </div>

                <div className="inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-200">
                  <Sparkles size={16} />
                  AI CRM engine active
                </div>
              </div>
            </motion.section>

            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {customerStats.map((stat, index) => (
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
                    <h3 className="text-lg font-semibold text-white">
                      Customers Data Table
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Customer profiles, value, engagement, and status
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    18,426 records
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-y-3">
                    <thead>
                      <tr className="text-left text-xs uppercase tracking-[0.18em] text-slate-500">
                        <th className="px-4 py-2">Customer</th>
                        <th className="px-4 py-2">Contact</th>
                        <th className="px-4 py-2">City</th>
                        <th className="px-4 py-2">Purchase Value</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Last Activity</th>
                        <th className="px-4 py-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((customer) => (
                        <tr key={customer.id}>
                          <td className="rounded-l-2xl border-y border-l border-white/10 bg-white/5 px-4 py-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={customer.image}
                                alt={customer.name}
                                className="h-12 w-12 rounded-xl object-cover"
                              />
                              <div>
                                <p className="text-sm font-semibold text-white">
                                  {customer.name}
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                  {customer.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-sm text-slate-300">
                                <Mail size={14} className="text-slate-500" />
                                {customer.email}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-slate-300">
                                <Phone size={14} className="text-slate-500" />
                                {customer.phone}
                              </div>
                            </div>
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                            {customer.city}
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white [font-variant-numeric:tabular-nums]">
                            {customer.purchaseValue}
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4">
                            <StatusBadge status={customer.status} />
                          </td>
                          <td className="border-y border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300">
                            {customer.lastActivity}
                          </td>
                          <td className="rounded-r-2xl border-y border-r border-white/10 bg-white/5 px-4 py-4">
                            <div className="flex items-center gap-2">
                              <button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white">
                                <Eye size={14} />
                                View
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
                      AI Customer Insights
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Smart CRM recommendations and alerts
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
                      Customer Growth
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Monthly increase in customer base
                    </p>
                  </div>
                </div>

                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={customerGrowthData}>
                      <defs>
                        <linearGradient id="customerGrowthFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.38} />
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
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="customers"
                        name="Customers"
                        stroke="#60a5fa"
                        strokeWidth={3}
                        fill="url(#customerGrowthFill)"
                        animationDuration={800}
                      />
                    </AreaChart>
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
                      Retention Analytics
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Retained customers vs churn rate
                    </p>
                  </div>
                </div>

                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={retentionData} barGap={10}>
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
                      <Bar
                        dataKey="retained"
                        name="Retained"
                        radius={[8, 8, 0, 0]}
                        fill="#34d399"
                        animationDuration={750}
                      />
                      <Bar
                        dataKey="churn"
                        name="Churn"
                        radius={[8, 8, 0, 0]}
                        fill="#f59e0b"
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
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Customer Segmentation
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Distribution across customer groups
                    </p>
                  </div>
                </div>

                <div className="h-[280px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip content={<PieTooltip />} />
                      <Pie
                        data={segmentationData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={68}
                        outerRadius={102}
                        paddingAngle={4}
                        stroke="rgba(15,23,42,0.3)"
                        animationDuration={900}
                      >
                        {segmentationData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-2 space-y-3">
                  {segmentationData.map((item) => (
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
                      Region-wise Customers
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Customer distribution across operating regions
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                    Regional snapshot
                  </div>
                </div>

                <div className="h-[320px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={regionWiseData}>
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
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar
                        dataKey="customers"
                        name="Customers"
                        radius={[8, 8, 0, 0]}
                        fill="#60a5fa"
                        animationDuration={780}
                      />
                    </BarChart>
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
                      Customer Activity Feed
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Registrations, purchases, VIP actions, and support events
                    </p>
                  </div>
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                </div>

                <div className="space-y-4">
                  {activityFeed.map((item) => {
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
