import keerti from "@/assets/keerti.png";

export function PortraitFrame() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-4 border-2 border-red pointer-events-none" />
      <div className="absolute inset-0 translate-x-6 translate-y-6 bg-navy" />
      <div className="relative bg-navy overflow-hidden">
        <img src={keerti} alt="Keerti Kumar, RCIC-IRB" className="w-full h-auto block relative z-10" loading="lazy" />
      </div>
      <div className="relative z-20 mt-8 ml-6 bg-white border-l-4 border-red p-5 max-w-xs shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <div className="font-display text-lg font-semibold">Keerti Kumar, RCIC-IRB</div>
        <div className="font-mono text-[11px] tracking-widest text-gold uppercase mt-1">Founder & Director</div>
      </div>
    </div>
  );
}
