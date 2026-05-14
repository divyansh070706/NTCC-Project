
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Building2,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  BrainCircuit,
  BarChart3,
  FileText,
  Sparkles,
  Chrome,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const glassCard =
  "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_40px_rgba(2,6,23,0.55)]";

const benefits = [
  {
    title: "AI-Powered Analytics",
    description:
      "Transform business data into actionable intelligence with real-time AI-driven insights.",
    icon: BrainCircuit,
    color: "text-blue-400",
  },
  {
    title: "Smart Reporting",
    description:
      "Generate executive-ready MIS reports, trend summaries, and strategic performance dashboards instantly.",
    icon: FileText,
    color: "text-emerald-400",
  },
  {
    title: "Business Intelligence Tools",
    description:
      "Track revenue, customers, workforce, and operational KPIs through one connected enterprise platform.",
    icon: BarChart3,
    color: "text-violet-400",
  },
];

const securityBadges = [
  "Enterprise-grade encryption",
  "Secure cloud architecture",
  "Role-based access control",
  "Protected analytics workspace",
];

const InputField = ({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  rightElement,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">{label}</label>
      <motion.div
        whileFocus={{ scale: 1.01 }}
        className={`relative rounded-2xl border bg-white/5 transition-all duration-300 ${
          error
            ? "border-red-400/30 ring-4 ring-red-500/10"
            : "border-white/10 focus-within:border-blue-400/30 focus-within:bg-white/10 focus-within:ring-4 focus-within:ring-blue-500/10"
        }`}
      >
        <Icon
          size={18}
          className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${
            error ? "text-red-300" : "text-slate-500"
          }`}
        />
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-14 w-full rounded-2xl bg-transparent pl-12 pr-12 text-sm text-white placeholder:text-slate-500 outline-none"
        />
        {rightElement && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">{rightElement}</div>
        )}
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-2 flex items-center gap-2 text-xs text-red-300"
          >
            <AlertCircle size={14} />
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SocialButton = ({ icon: Icon, label }) => (
  <motion.button
    whileHover={{ y: -2, scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/10 hover:text-white"
  >
    <Icon size={18} />
    {label}
  </motion.button>
);

const passwordStrength = (password) => {
  if (!password) return { label: "No password", color: "bg-slate-600", width: "w-0" };
  if (password.length < 6)
    return { label: "Weak password", color: "bg-red-400", width: "w-1/4" };
  if (password.length < 8)
    return { label: "Fair password", color: "bg-amber-400", width: "w-2/4" };
  if (
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  ) {
    return { label: "Strong password", color: "bg-emerald-400", width: "w-full" };
  }
  return { label: "Good password", color: "bg-blue-400", width: "w-3/4" };
};

export default function SmartMISRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const errors = useMemo(() => {
    const next = {};

    if (submitted || form.fullName) {
      if (form.fullName.trim().length < 3) next.fullName = "Enter a valid full name.";
    }

    if (submitted || form.email) {
      if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    }

    if (submitted || form.phone) {
      if (!/^[0-9+\-\s()]{10,15}$/.test(form.phone))
        next.phone = "Enter a valid phone number.";
    }

    if (submitted || form.company) {
      if (form.company.trim().length < 2)
        next.company = "Enter a valid company name.";
    }

    if (submitted || form.password) {
      if (form.password.length < 8)
        next.password = "Password must be at least 8 characters.";
    }

    if (submitted || form.confirmPassword) {
      if (form.confirmPassword !== form.password)
        next.confirmPassword = "Passwords do not match.";
    }

    return next;
  }, [form, submitted]);

  const isValid =
    Object.keys(errors).length === 0 &&
    form.fullName &&
    form.email &&
    form.phone &&
    form.company &&
    form.password &&
    form.confirmPassword;

  const strength = passwordStrength(form.password);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_28%)]" />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 xl:grid-cols-[1.05fr,0.95fr]">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`${glassCard} hidden overflow-hidden xl:block`}
          >
            <div className="relative flex h-full flex-col justify-between p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_30%)]" />

              <div className="relative">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-blue-400 shadow-lg shadow-blue-500/10">
                    <svg
                      viewBox="0 0 48 48"
                      className="h-8 w-8"
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
                    <h1 className="text-xl font-semibold tracking-tight text-white">
                      SmartMIS Analytics
                    </h1>
                    <p className="mt-1 text-sm text-slate-400">
                      Enterprise Business Intelligence Platform
                    </p>
                  </div>
                </div>

                <div className="max-w-xl">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-blue-300/80">
                    Intelligent Analytics Platform
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white">
                    Build your analytics workspace with secure AI-powered reporting.
                  </h2>
                  <p className="mt-4 max-w-lg text-base leading-7 text-slate-400">
                    Create your SmartMIS Analytics account to manage dashboards, business
                    insights, MIS reports, and enterprise decision-making from one premium platform.
                  </p>
                </div>

                <div className="mt-10 space-y-4">
                  {benefits.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ x: 4 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.07]"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${item.color}`}
                          >
                            <Icon size={20} />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-white">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-slate-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="relative mt-8 grid grid-cols-2 gap-3">
                {securityBadges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
                  >
                    <ShieldCheck size={16} className="text-emerald-400" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className={`${glassCard} relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%)]" />
            <div className="relative p-6 sm:p-8 lg:p-10">
              <div className="mb-8 xl:hidden">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-blue-400 shadow-lg shadow-blue-500/10">
                    <svg
                      viewBox="0 0 48 48"
                      className="h-7 w-7"
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
                    <h1 className="text-lg font-semibold text-white">
                      SmartMIS Analytics
                    </h1>
                    <p className="text-sm text-slate-400">Create your analytics account</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-blue-300/80">
                  Register
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Create your account
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                  Start using SmartMIS Analytics to access AI-powered business insights,
                  smart reporting, and enterprise analytics tools.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <InputField
                    label="Full Name"
                    icon={User}
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange("fullName")}
                    error={errors.fullName}
                  />
                  <InputField
                    label="Email Address"
                    icon={Mail}
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange("email")}
                    error={errors.email}
                  />
                  <InputField
                    label="Phone Number"
                    icon={Phone}
                    placeholder="Enter phone number"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    error={errors.phone}
                  />
                  <InputField
                    label="Company Name"
                    icon={Building2}
                    placeholder="Enter company name"
                    value={form.company}
                    onChange={handleChange("company")}
                    error={errors.company}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <InputField
                      label="Password"
                      icon={Lock}
                      type={showPassword ? "text" : "password"}
                      placeholder="Create password"
                      value={form.password}
                      onChange={handleChange("password")}
                      error={errors.password}
                      rightElement={
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="text-slate-400 transition-colors hover:text-white"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      }
                    />
                    <div className="mt-3">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`}
                        />
                      </div>
                      <p className="mt-2 text-xs text-slate-400">{strength.label}</p>
                    </div>
                  </div>

                  <InputField
                    label="Confirm Password"
                    icon={Lock}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    error={errors.confirmPassword}
                    rightElement={
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="text-slate-400 transition-colors hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    }
                  />
                </div>

                <AnimatePresence>
                  {submitted && !isValid && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                    >
                      <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-300" />
                      <span>
                        Please review the highlighted fields and complete the registration form correctly.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {submitted && isValid && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-emerald-300"
                      />
                      <span>
                        Registration details look good. Your SmartMIS Analytics account is ready to be created.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:from-blue-500/30 hover:to-cyan-400/20"
                >
                  Create Account
                  <ArrowRight size={18} />
                </motion.button>

                <div className="relative py-1">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-[#0f172a] px-4 text-xs uppercase tracking-[0.22em] text-slate-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <SocialButton icon={Chrome} label="Google" />
                  <SocialButton icon={BadgeCheck} label="Microsoft" />
                  <SocialButton icon={Briefcase} label="LinkedIn" />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 xl:hidden">
                  <div className="mb-3 flex items-center gap-2">
                    <Sparkles size={16} className="text-blue-400" />
                    <h3 className="text-sm font-semibold text-white">Platform Benefits</h3>
                  </div>
                  <div className="space-y-3">
                    {benefits.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="flex gap-3">
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${item.color}`}
                          >
                            <Icon size={16} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">{item.title}</p>
                            <p className="mt-1 text-xs leading-5 text-slate-400">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-white/10 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                  <p>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="font-semibold text-blue-300 transition-colors hover:text-white"
                    >
                      Sign in
                    </button>
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      className="transition-colors hover:text-white"
                    >
                      Terms & Conditions
                    </button>
                    <button
                      type="button"
                      className="transition-colors hover:text-white"
                    >
                      Privacy Policy
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
