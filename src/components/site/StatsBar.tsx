import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Families Helped" },
  { value: "4", label: "IRB Divisions Authorized" },
  { value: "100%", label: "Licensed & Regulated" },
];

export function StatsBar() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-red text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="px-6 text-center"
          >
            <div className="font-display text-5xl md:text-6xl font-semibold">{s.value}</div>
            <div className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase mt-2 text-white/90">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
