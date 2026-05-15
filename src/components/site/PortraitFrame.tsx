import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";
import keerti from "@/assets/keerti.png";

export function PortraitFrame() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Soft glow */}
      <div
        className="absolute -inset-10 rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--green), transparent 60%), radial-gradient(circle at 70% 70%, var(--yellow), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Floating portrait */}
      <motion.div
        className="relative aspect-[4/5]"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={keerti}
          alt="Keerti Kumar, RCIC-IRB"
          className="w-full h-full object-scale-down drop-shadow-[0_30px_40px_rgba(13,17,23,0.35)]"
          loading="lazy"
        />
      </motion.div>

      {/* Floating credential pill — top right */}
      <motion.div
        className="absolute top-4 -right-2 sm:-right-6 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg flex items-center gap-2 ring-1 ring-black/5 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <ShieldCheck className="w-4 h-4 text-green" aria-hidden="true" />
        <span className="font-mono text-[10px] tracking-widest uppercase text-bg-dark">RCIC-IRB · L3</span>
      </motion.div>

      {/* Floating stat — middle left, above name banner */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-8 bg-bg-dark text-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3 z-10"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Award className="w-5 h-5 text-yellow" aria-hidden="true" />
        <div className="leading-tight">
          <div className="font-display text-xl font-semibold">10+ yrs</div>
          <div className="font-mono text-[9px] tracking-widest uppercase text-white/70">Experience</div>
        </div>
      </motion.div>

      {/* Floating Flag — bottom right */}
      <motion.div
        className="absolute -bottom-6 -right-6 w-20 h-20 z-10 hidden sm:block"
        animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <img src="/Canada.png" alt="" className="w-full h-full object-contain drop-shadow-lg opacity-40 hover:opacity-100 transition-opacity" />
      </motion.div>
    </div>
  );
}
