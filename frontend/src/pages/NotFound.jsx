
import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  LogIn,
  BrainCircuit,
  ShieldAlert,
  BarChart3,
  Sparkles,
  FileWarning,
} from "lucide-react";

const floatingIcons = [
  { icon: BrainCircuit, className: "left-[8%] top-[14%]", delay: 0 },
  { icon: ShieldAlert, className: "right-[10%] top-[18%]", delay: 0.15 },
  { icon: BarChart3, className: "left-[14%] bottom-[18%]", delay: 0.3 },
  { icon: Sparkles, className: "right-[16%] bottom-[14%]", delay: 0.45 },
];

const pulseTransition = {
  duration: 3.2,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const floatTransition = (delay = 0) => ({
  duration: 4.5,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
  delay,
});

const glowTransition = {
  duration: 5,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

export default function SmartMISNotFoundPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_26%),linear-gradient(135deg,rgba(15,23,42,1),rgba(17,24,39,1),rgba(15,23,42,1))]" />

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.16, 0.24, 0.16] }}
        transition={glowTransition}
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ ...glowTransition, delay: 0.6 }}
        className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl"
      />

      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className={`absolute hidden md:flex ${item.className} z-10`}
            animate={{ y: [-8, 14, -8], rotate: [-4, 4, -4], opacity: [0.5, 0.9, 0.5] }}
            transition={floatTransition(item.delay)}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-300 shadow-[0_8px_32px_rgba(15,23,42,0.45)] backdrop-blur-xl">
              <Icon size={22} />
            </div>
          </motion.div>
        );
      })}

      <div className="relative z-20 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl"
        >
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_12px_50px_rgba(2,6,23,0.6)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr,0.95fr]">
              <div>
                <div className="mb-6 flex items-center gap-4">
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

                <p className="text-sm font-medium uppercase tracking-[0.26em] text-blue-300/80">
                  System Exception
                </p>

                <div className="mt-4 overflow-hidden">
                  <motion.h2
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.1 }}
                    className="text-[5rem] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[7rem] lg:text-[8.5rem]"
                  >
                    <motion.span
                      animate={{ textShadow: ["0 0 0px rgba(96,165,250,0.0)", "0 0 22px rgba(96,165,250,0.35)", "0 0 0px rgba(96,165,250,0.0)"] }}
                      transition={pulseTransition}
                      className="inline-block"
                    >
                      404
                    </motion.span>
                  </motion.h2>
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  The page you’re looking for doesn’t exist.
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  The requested SmartMIS Analytics resource may have been moved, deleted,
                  or is temporarily unavailable. Please return to a valid workspace area
                  to continue your enterprise operations securely.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <motion.button
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:from-blue-500/30 hover:to-cyan-400/20"
                  >
                    <ArrowLeft size={17} />
                    Back to Dashboard
                  </motion.button>

                  <motion.button
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/10 hover:text-white"
                  >
                    <LogIn size={17} />
                    Go to Login
                  </motion.button>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_10px_40px_rgba(2,6,23,0.55)] backdrop-blur-2xl"
                >
                  <div className="rounded-[24px] border border-blue-400/15 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 p-5">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-500/10 text-amber-300">
                        <BrainCircuit size={22} />
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-blue-200">
                          <Sparkles size={13} />
                          AI Assistant Notice
                        </div>
                        <h4 className="mt-3 text-xl font-semibold text-white">
                          Navigation anomaly detected
                        </h4>
                        <p className="mt-2 text-sm leading-7 text-slate-400">
                          Our AI assistant could not locate the requested route in your current
                          workspace. It recommends returning to the dashboard or re-authenticating
                          through the login portal.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-300">
                            <FileWarning size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              Resource status
                            </p>
                            <p className="mt-1 text-sm text-slate-400">
                              No active page record found in the current route registry.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-300">
                            <ShieldAlert size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              Security status
                            </p>
                            <p className="mt-1 text-sm text-slate-400">
                              Platform remains secure. No unauthorized access or data integrity issue detected.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-amber-300">
                            <AlertTriangle size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              Recommended action
                            </p>
                            <p className="mt-1 text-sm text-slate-400">
                              Use the dashboard to navigate verified modules or return to login to refresh session access.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 4, 0], opacity: [0.35, 0.55, 0.35] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 -top-4 hidden h-20 w-20 rounded-full border border-blue-400/20 bg-blue-500/10 blur-sm sm:block"
                />
                <motion.div
                  animate={{ rotate: [0, -6, 0], opacity: [0.18, 0.32, 0.18] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-full border border-cyan-400/20 bg-cyan-400/10 blur-sm sm:block"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
