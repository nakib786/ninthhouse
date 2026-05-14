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
            "radial-gradient(circle at 30% 30%, rgba(204,0,0,0.35), transparent 60%), radial-gradient(circle at 70% 70%, rgba(28,58,110,0.4), transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Portrait card */}
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-navy shadow-[0_30px_80px_-20px_rgba(13,17,23,0.45)] ring-1 ring-black/5">
        <img
          src={keerti}
          alt="Keerti Kumar, RCIC-IRB"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Bottom gradient for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-dark/70 to-transparent" />
      </div>

      {/* Floating credential pill — top right */}
      <div className="absolute -top-3 -right-3 sm:-right-6 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg flex items-center gap-2 ring-1 ring-black/5">
        <ShieldCheck className="w-4 h-4 text-red" aria-hidden="true" />
        <span className="font-mono text-[10px] tracking-widest uppercase text-bg-dark">RCIC-IRB · L3</span>
      </div>

      {/* Floating stat — bottom left */}
      <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-bg-dark text-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
        <Award className="w-5 h-5 text-gold" aria-hidden="true" />
        <div className="leading-tight">
          <div className="font-display text-xl font-semibold">10+ yrs</div>
          <div className="font-mono text-[9px] tracking-widest uppercase text-white/70">Experience</div>
        </div>
      </div>
    </div>
  );
}
