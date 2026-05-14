import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Users, Heart, Award, Briefcase, GraduationCap, Star, ArrowRight } from "lucide-react";
import { PortraitFrame } from "@/components/site/PortraitFrame";
import { StatsBar } from "@/components/site/StatsBar";
import { Reveal } from "@/components/site/Reveal";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: seo.home.title }, { name: "description", content: seo.home.description }] }),
  component: Home,
});

const headlineWords = ["Your", "Canadian", "Future"];

const services = [
  { Icon: Award, title: "Express Entry & PNP", body: "Permanent residency pathways for skilled workers." },
  { Icon: Users, title: "Family Sponsorship", body: "Reunite with your spouse, children, and parents." },
  { Icon: ShieldCheck, title: "IRB Representation", body: "Authorized before all four IRB divisions." },
  { Icon: Briefcase, title: "Work & Study Permits", body: "PGWP, LMIA, open permits, and extensions." },
];

const fullServices = [
  {
    title: "IRB Representation",
    items: ["Refugee Protection (RPD)", "Immigration Appeal (IAD)", "Immigration Division (ID)", "Refugee Appeal (RAD)"],
  },
  {
    title: "Immigration Applications",
    items: ["Express Entry & PNP", "Family Sponsorship", "PGWP", "Study Permits", "LMIA Work Permits", "Open Work Permits", "Super Visa", "Visitor Visas (TRV)"],
  },
  {
    title: "Status & Compliance",
    items: ["Restoration of Status", "Inadmissibility Strategy", "PR Card Renewals", "Citizenship Applications", "GCMS Notes Requests"],
  },
  {
    title: "Specialized Services",
    items: ["H&C Applications", "Refugee Sponsorship", "Pre-Removal Risk Assessment", "Detention Release", "Voluntary Departure"],
  },
];

function Home() {
  const reduce = useReducedMotion();
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-svh flex items-center pt-36 pb-24 overflow-hidden bg-bg">
        {/* Soft background blobs */}
        <div
          className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(204,0,0,0.5), transparent 65%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(28,58,110,0.55), transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 grain opacity-60" aria-hidden="true" />

        <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-20 items-center w-full">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-bg-dark bg-white/70 backdrop-blur-md border border-black/5 rounded-full pl-2 pr-4 py-1.5 mb-8 shadow-sm"
            >
              <span className="inline-flex items-center gap-1.5 bg-red text-white rounded-full px-2.5 py-1 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                LIVE
              </span>
              RCIC-IRB LICENSED · KAMLOOPS, BC
            </motion.div>

            <h1 className="font-display font-semibold leading-[1.02] text-[44px] sm:text-6xl lg:text-[88px] tracking-tight">
              <span className="block">
                {headlineWords.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                    className="inline-block mr-3"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <motion.span
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block italic text-red"
              >
                Starts Here.
              </motion.span>
            </h1>

            <p className="mt-8 text-lg text-text-muted max-w-[540px] leading-relaxed">
              The Ninth House Immigration Solutions Inc. is a licensed and regulated firm dedicated to clarity, courage, and compassion — guiding families across Canada's immigration journey.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary !px-7 !py-4 shadow-[0_10px_30px_-8px_rgba(204,0,0,0.5)]">
                Book Free Consultation
              </Link>
              <Link to="/services" className="btn-outline !px-7 !py-4">View Our Services</Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red" aria-hidden="true" />
                <span>IRB Authorized</span>
              </div>
              <span className="hidden sm:inline w-px h-4 bg-border" />
              <span>10+ years</span>
              <span className="hidden sm:inline w-px h-4 bg-border" />
              <span>200+ families</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-8"
          >
            <PortraitFrame />
          </motion.div>
        </div>
      </section>

      <StatsBar />

      {/* SERVICES PREVIEW */}
      <section className="bg-bg py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="font-mono text-[11px] tracking-widest text-red uppercase mb-4">Our Practice</div>
            <h2 className="font-display text-4xl md:text-6xl max-w-3xl">How We Can Help</h2>
            <p className="mt-5 text-lg text-text-muted max-w-2xl">
              Full-service immigration consulting — from permanent residency to refugee representation.
            </p>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {services.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="group bg-white border border-[#E0E0E0] p-9 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-l-[3px] hover:border-l-red h-full">
                  <Icon className="w-8 h-8 text-red mb-6" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-[15px] text-text-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-right">
            <Link to="/services" className="font-mono text-[13px] uppercase tracking-widest text-red hover:underline inline-flex items-center gap-2">
              See All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT KEERTI DARK */}
      <section className="bg-bg-dark text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-50" aria-hidden="true" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <Reveal>
            <div className="font-mono text-[11px] tracking-widest text-gold uppercase mb-5">About the Consultant</div>
            <h2 className="font-display text-4xl md:text-5xl">A Decade of Experience.<br /><span className="italic">A Lifetime of Impact.</span></h2>
            <p className="mt-7 text-lg text-white/80 max-w-2xl leading-relaxed">
              Keerti Kumar is a Regulated Canadian Immigration Consultant (RCIC-IRB), licensed by the College of Immigration and Citizenship Consultants (CICC) and a proud member of CAPIC. With a Graduate Diploma in Immigration and Citizenship Law from Queen's University, Kingston, he brings 10 years of immigration expertise to every case.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["CICC Licensed", "CAPIC Member", "Queen's University", "Commissioner for Affidavits, BC"].map((b) => (
                <span key={b} className="font-mono text-[11px] tracking-widest uppercase border border-white/30 text-white px-4 py-2">{b}</span>
              ))}
            </div>
            <Link to="/about" className="mt-10 inline-flex font-mono text-xs uppercase tracking-widest border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-bg-dark transition-colors">
              Learn More About Us
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-[420px]">
              <div className="absolute inset-0 bg-navy" />
              <div className="absolute -inset-4 border-2 border-red" />
              <div className="absolute bottom-6 right-6 font-display text-[140px] leading-none text-white/10">9</div>
              <div className="absolute top-8 left-8 font-mono text-[11px] tracking-widest text-gold uppercase">Est. 2024</div>
              <div className="absolute bottom-8 left-8 right-8 font-display italic text-2xl text-white">
                "Guiding your journey with clarity, courage, and compassion."
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FULL SERVICES TEASER */}
      <section className="bg-navy-light py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl">Our Full Range of Services</h2>
              <p className="mt-5 text-text-muted text-lg">We handle every stage of your immigration journey.</p>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fullServices.map((col, i) => (
              <Reveal key={col.title} delay={i * 0.06}>
                <div>
                  <h3 className="font-mono text-[12px] tracking-widest text-red uppercase mb-5 pb-3 border-b border-red/30">{col.title}</h3>
                  <ul className="space-y-3 text-[15px] text-bg-dark">
                    {col.items.map((it) => (
                      <li key={it} className="leading-snug">— {it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-bg py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <div className="font-display text-red leading-none select-none" style={{ fontSize: 140 }}>"</div>
          <Reveal>
            <p className="font-display italic text-2xl md:text-3xl leading-snug -mt-12">
              Keerti and his team guided us through our refugee appeal with professionalism and genuine care. We had our permanent residency within a year. We cannot thank The Ninth House enough.
            </p>
            <div className="flex justify-center gap-1 mt-8">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />)}
            </div>
            <div className="mt-5 font-mono text-[12px] tracking-widest uppercase text-text-muted">— Harpreet S., Permanent Resident | Kamloops, BC</div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US DARK */}
      <section className="bg-bg-dark text-white py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-center">Why Families Trust The Ninth House</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { Icon: ShieldCheck, color: "text-red", title: "Licensed & Regulated", body: "Led by Keerti Kumar, RCIC-IRB Class L3, authorized before all IRB divisions." },
              { Icon: Users, color: "text-gold", title: "Full-Service Support", body: "From refugee appeals to family sponsorships — one firm handles it all." },
              { Icon: Heart, color: "text-red", title: "Ethical & Transparent", body: "We uphold the highest standards of professionalism, always placing integrity first." },
            ].map(({ Icon, color, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="bg-navy p-10 h-full">
                  <Icon className={`w-9 h-9 ${color} mb-6`} aria-hidden="true" />
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-3 text-white/70 text-[15px] leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-red text-white py-28 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl">Ready to Start Your Journey?</h2>
            <p className="mt-6 text-lg text-white/85">Book a free consultation with Keerti Kumar, RCIC-IRB. We respond within 24 hours.</p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex font-mono text-xs uppercase tracking-widest bg-white text-bg-dark px-6 py-3 hover:bg-bg-dark hover:text-white transition-colors">Book Free Consultation</Link>
              <a href="tel:+17789190026" className="inline-flex font-mono text-xs uppercase tracking-widest border-2 border-white text-white px-6 py-3 hover:bg-white hover:text-red transition-colors">Call +1 (778) 919-0026</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
