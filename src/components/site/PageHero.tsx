import { Link } from "@tanstack/react-router";

export function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle?: string; breadcrumb: string }) {
  return (
    <section className="relative bg-bg-dark text-white pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grain" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="font-mono text-[11px] tracking-widest text-gold uppercase mb-6">
          <Link to="/" className="hover:text-red">Home</Link> <span className="mx-2 text-white/40">›</span> {breadcrumb}
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-semibold max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-6 text-lg text-white/70 max-w-2xl">{subtitle}</p>}
      </div>
      <div
        className="absolute bottom-0 inset-x-0 h-16 bg-bg"
        style={{ clipPath: "polygon(0 100%, 100% 60%, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />
    </section>
  );
}
