
import React, { useState } from "react";
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
  ChevronRight,
  Shield,
  User,
  Upload,
  Phone,
  Mail,
  Building2,
  Save,
  Download,
  RotateCcw,
  Database,
  Lock,
  Smartphone,
  MonitorSmartphone,
  AlertTriangle,
  Moon,
  Palette,
  LayoutGrid,
  SlidersHorizontal,
  BrainCircuit,
  Sparkles,
  Trash2,
  LogOut,
  RefreshCcw,
  CloudUpload,
  CheckCircle2,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: false },
  { name: "Analytics", icon: BarChart3, active: false },
  { name: "Reports", icon: FileText, active: false },
  { name: "Products", icon: Package, active: false },
  { name: "Customers", icon: Users, active: false },
  { name: "Employees", icon: UserCog, active: false },
  { name: "Settings", icon: Settings, active: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
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

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-5 flex items-start gap-3">
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
      <Icon size={20} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
    </div>
  </div>
);

const ActionButton = ({ label, icon: Icon, primary = false, danger = false }) => (
  <motion.button
    whileHover={{ y: -2, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
      danger
        ? "border border-red-400/20 bg-red-500/10 text-red-300 hover:bg-red-500/15"
        : primary
        ? "border border-blue-400/20 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 text-white hover:from-blue-500/30 hover:to-cyan-400/20"
        : "border border-white/10 bg-white/5 text-slate-200 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white"
    }`}
  >
    <Icon size={16} />
    {label}
  </motion.button>
);

const InputField = ({ label, placeholder, icon: Icon, type = "text", value }) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-300">{label}</label>
    <div className="relative">
      <Icon
        size={16}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-400/30 focus:bg-white/10 focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  </div>
);

const SelectField = ({ label, icon: Icon, options, value }) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-300">{label}</label>
    <div className="relative">
      <Icon
        size={16}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />
      <select
        defaultValue={value}
        className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 focus:border-blue-400/30 focus:bg-white/10 focus:ring-4 focus:ring-blue-500/10"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-slate-900 text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const ToggleRow = ({ icon: Icon, title, description, enabled, onToggle }) => (
  <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.07]">
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
      </div>
    </div>

    <button
      onClick={onToggle}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-all duration-300 ${
        enabled ? "bg-blue-500" : "bg-slate-700"
      }`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </button>
  </div>
);

const ColorOption = ({ color, active }) => (
  <button
    className={`h-10 w-10 rounded-full border-2 transition-all duration-300 ${
      active ? "border-white scale-110" : "border-white/10 hover:border-white/30"
    }`}
    style={{ backgroundColor: color }}
  />
);

const SessionCard = ({ icon: Icon, title, detail, status }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300">
          <Icon size={18} />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <p className="mt-1 text-sm text-slate-400">{detail}</p>
        </div>
      </div>
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          status === "Current"
            ? "border border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
            : "border border-white/10 bg-white/5 text-slate-300"
        }`}
      >
        {status}
      </span>
    </div>
  </div>
);

export default function SmartMISSettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    reports: true,
    ai: true,
    security: true,
    marketing: false,
  });

  const [appearance, setAppearance] = useState({
    darkMode: true,
    aiRecommendations: true,
    predictiveAnalytics: true,
    smartReporting: true,
  });

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
              <Shield size={18} />
            </div>
            <h3 className="text-sm font-semibold text-white">Secure Admin Mode</h3>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Centralized control for security, preferences, automation, and platform policies.
            </p>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col lg:ml-[280px]">
          <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/60 backdrop-blur-2xl">
            <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden">
                  <Settings size={18} className="text-blue-400" />
                </div>

                <div className="relative w-full max-w-xl">
                  <Search
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    placeholder="Search settings, security, integrations..."
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
                    <p className="text-xs text-slate-400">Platform Administrator</p>
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
                    Admin Control Center
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    System Settings
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 md:text-base">
                    Manage platform preferences, enterprise security, AI automation,
                    profile controls, notifications, and infrastructure-level configuration.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <ActionButton label="Save Changes" icon={Save} primary />
                  <ActionButton label="Export Settings" icon={Download} />
                  <ActionButton label="Restore Defaults" icon={RotateCcw} />
                  <ActionButton label="Backup Data" icon={CloudUpload} />
                </div>
              </div>
            </motion.section>

            <section className="grid grid-cols-1 gap-6 xl:grid-cols-12">
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-7 p-5 sm:p-6`}
              >
                <SectionTitle
                  icon={User}
                  title="Profile Settings"
                  subtitle="Manage administrator identity, contact details, and company profile."
                />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px,1fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80"
                        alt="Admin profile"
                        className="h-28 w-28 rounded-2xl object-cover shadow-lg"
                      />
                      <h4 className="mt-4 text-sm font-semibold text-white">Admin User</h4>
                      <p className="mt-1 text-xs text-slate-400">Platform Administrator</p>

                      <button className="mt-5 inline-flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm font-medium text-blue-300 transition-all duration-300 hover:bg-blue-500/15">
                        <Upload size={16} />
                        Upload Photo
                      </button>

                      <div className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-left">
                        <div className="flex items-center gap-2 text-xs text-emerald-300">
                          <CheckCircle2 size={14} />
                          Profile verified
                        </div>
                        <p className="mt-2 text-xs leading-5 text-slate-400">
                          Identity and admin access are fully validated for secure enterprise operations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <InputField
                      label="Full Name"
                      placeholder="Enter full name"
                      icon={User}
                      value="Admin User"
                    />
                    <InputField
                      label="Email Address"
                      placeholder="Enter email"
                      icon={Mail}
                      type="email"
                      value="admin@smartmisanalytics.com"
                    />
                    <InputField
                      label="Phone Number"
                      placeholder="Enter phone"
                      icon={Phone}
                      value="+91 98765 43210"
                    />
                    <InputField
                      label="Company Name"
                      placeholder="Enter company name"
                      icon={Building2}
                      value="SmartMIS Analytics Pvt. Ltd."
                    />
                    <div className="md:col-span-2">
                      <InputField
                        label="Company Details"
                        placeholder="Enter organization details"
                        icon={Building2}
                        value="Enterprise analytics, MIS reporting, AI business intelligence operations."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <ActionButton label="Save Profile" icon={Save} primary />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-5 p-5 sm:p-6`}
              >
                <SectionTitle
                  icon={Shield}
                  title="Security Settings"
                  subtitle="Protect platform access, sessions, devices, and enterprise data."
                />

                <div className="space-y-4">
                  <InputField
                    label="Change Password"
                    placeholder="Enter new password"
                    icon={Lock}
                    type="password"
                    value="StrongPassword@123"
                  />

                  <ToggleRow
                    icon={Shield}
                    title="Two-Factor Authentication"
                    description="Require OTP verification for every administrator sign-in."
                    enabled={true}
                    onToggle={() => {}}
                  />

                  <SessionCard
                    icon={MonitorSmartphone}
                    title="Current Web Session"
                    detail="Chrome on Windows · Agra, Uttar Pradesh · Active now"
                    status="Current"
                  />
                  <SessionCard
                    icon={Smartphone}
                    title="Mobile Device Activity"
                    detail="iPhone 15 Pro · Last active 2 hours ago · Secure login verified"
                    status="Trusted"
                  />

                  <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle size={18} className="mt-0.5 text-amber-300" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">Security Alerts</h4>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          No critical threats detected. One unusual login attempt was blocked automatically last week.
                        </p>
                      </div>
                    </div>
                  </div>
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
                <SectionTitle
                  icon={Bell}
                  title="Notification Preferences"
                  subtitle="Choose what system updates and alerts you receive."
                />

                <div className="space-y-3">
                  <ToggleRow
                    icon={Mail}
                    title="Email Notifications"
                    description="Receive account and platform notifications by email."
                    enabled={notifications.email}
                    onToggle={() =>
                      setNotifications((prev) => ({ ...prev, email: !prev.email }))
                    }
                  />
                  <ToggleRow
                    icon={FileText}
                    title="Report Alerts"
                    description="Get notified when scheduled reports are generated."
                    enabled={notifications.reports}
                    onToggle={() =>
                      setNotifications((prev) => ({ ...prev, reports: !prev.reports }))
                    }
                  />
                  <ToggleRow
                    icon={Sparkles}
                    title="AI Insights Notifications"
                    description="Receive AI-generated anomalies, recommendations, and trends."
                    enabled={notifications.ai}
                    onToggle={() =>
                      setNotifications((prev) => ({ ...prev, ai: !prev.ai }))
                    }
                  />
                  <ToggleRow
                    icon={Shield}
                    title="Security Notifications"
                    description="Important alerts for new logins and security events."
                    enabled={notifications.security}
                    onToggle={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        security: !prev.security,
                      }))
                    }
                  />
                  <ToggleRow
                    icon={SlidersHorizontal}
                    title="Marketing Updates"
                    description="Product announcements, releases, and feature newsletters."
                    enabled={notifications.marketing}
                    onToggle={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        marketing: !prev.marketing,
                      }))
                    }
                  />
                </div>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-4 p-5 sm:p-6`}
              >
                <SectionTitle
                  icon={Palette}
                  title="Appearance Settings"
                  subtitle="Customize theme, density, layout visuals, and interface style."
                />

                <div className="space-y-4">
                  <ToggleRow
                    icon={Moon}
                    title="Dark Mode"
                    description="Use the premium dark glassmorphism interface across the platform."
                    enabled={appearance.darkMode}
                    onToggle={() =>
                      setAppearance((prev) => ({ ...prev, darkMode: !prev.darkMode }))
                    }
                  />

                  <SelectField
                    label="Theme Selector"
                    icon={Palette}
                    value="Glass Enterprise"
                    options={[
                      "Glass Enterprise",
                      "Midnight Pro",
                      "Carbon Blue",
                      "Executive Slate",
                    ]}
                  />

                  <SelectField
                    label="Layout Density"
                    icon={LayoutGrid}
                    value="Comfortable"
                    options={["Compact", "Comfortable", "Spacious"]}
                  />

                  <div>
                    <label className="mb-3 block text-sm font-medium text-slate-300">
                      Accent Color
                    </label>
                    <div className="flex flex-wrap gap-3">
                      <ColorOption color="#3b82f6" active />
                      <ColorOption color="#14b8a6" />
                      <ColorOption color="#8b5cf6" />
                      <ColorOption color="#f59e0b" />
                      <ColorOption color="#22c55e" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-4 p-5 sm:p-6`}
              >
                <SectionTitle
                  icon={BrainCircuit}
                  title="AI Assistant Settings"
                  subtitle="Control recommendations, forecasting, and smart reporting behavior."
                />

                <div className="space-y-3">
                  <ToggleRow
                    icon={Sparkles}
                    title="AI Recommendations"
                    description="Enable contextual suggestions across dashboards and reports."
                    enabled={appearance.aiRecommendations}
                    onToggle={() =>
                      setAppearance((prev) => ({
                        ...prev,
                        aiRecommendations: !prev.aiRecommendations,
                      }))
                    }
                  />

                  <ToggleRow
                    icon={BarChart3}
                    title="Predictive Analytics"
                    description="Use historical data to forecast trends and business movements."
                    enabled={appearance.predictiveAnalytics}
                    onToggle={() =>
                      setAppearance((prev) => ({
                        ...prev,
                        predictiveAnalytics: !prev.predictiveAnalytics,
                      }))
                    }
                  />

                  <ToggleRow
                    icon={BrainCircuit}
                    title="Smart Reporting Controls"
                    description="Auto-prioritize anomalies, KPIs, and executive insights in reports."
                    enabled={appearance.smartReporting}
                    onToggle={() =>
                      setAppearance((prev) => ({
                        ...prev,
                        smartReporting: !prev.smartReporting,
                      }))
                    }
                  />

                  <div className="rounded-2xl border border-blue-400/15 bg-gradient-to-br from-blue-500/10 to-transparent p-4">
                    <div className="flex items-start gap-3">
                      <Sparkles size={18} className="mt-0.5 text-blue-300" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          AI Confidence Layer
                        </h4>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          AI models are actively optimizing reporting accuracy, insight ranking, and enterprise recommendation quality.
                        </p>
                      </div>
                    </div>
                  </div>
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
                <SectionTitle
                  icon={Database}
                  title="System Configuration Panel"
                  subtitle="Manage infrastructure preferences, APIs, backups, and export behavior."
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <InputField
                    label="API Settings"
                    placeholder="API environment"
                    icon={CloudUpload}
                    value="Production API · Connected"
                  />
                  <InputField
                    label="Database Configuration"
                    placeholder="Database status"
                    icon={Database}
                    value="Primary Cluster · Secure Sync Enabled"
                  />
                  <SelectField
                    label="Backup Settings"
                    icon={RefreshCcw}
                    value="Daily Incremental Backup"
                    options={[
                      "Daily Incremental Backup",
                      "Weekly Full Backup",
                      "Monthly Archive Backup",
                    ]}
                  />
                  <SelectField
                    label="Export Preferences"
                    icon={Download}
                    value="CSV + PDF"
                    options={["CSV + PDF", "Excel + PDF", "JSON + CSV", "All Formats"]}
                  />
                </div>
              </motion.div>

              <motion.div
                custom={7}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className={`${glassCard} xl:col-span-5 border-red-400/10 p-5 sm:p-6`}
              >
                <SectionTitle
                  icon={AlertTriangle}
                  title="Danger Zone"
                  subtitle="Critical actions that permanently affect data and account access."
                />

                <div className="space-y-3">
                  <div className="rounded-2xl border border-red-400/15 bg-red-500/10 p-4">
                    <div className="flex items-start gap-3">
                      <Trash2 size={18} className="mt-0.5 text-red-300" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">Delete Account</h4>
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          Permanently remove this admin account and revoke access across SmartMIS Analytics.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-red-400/15 bg-white/5 p-4">
                    <div className="space-y-3">
                      <ActionButton label="Reset Analytics" icon={RefreshCcw} danger />
                      <ActionButton label="Clear Reports" icon={Trash2} danger />
                      <ActionButton label="Logout All Devices" icon={LogOut} danger />
                    </div>
                  </div>

                  <p className="text-xs leading-5 text-slate-500">
                    These operations are irreversible and should only be performed by authorized platform administrators.
                  </p>
                </div>
              </motion.div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
