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
  { image: "/Passport.png", title: "Express Entry & PNP", body: "Permanent residency pathways for skilled workers." },
  { image: "/family.png", title: "Family Sponsorship", body: "Reunite with your spouse, children, and parents." },
  { image: "/Lawyer.png", title: "IRB Representation", body: "Authorized before all four IRB divisions." },
  { image: "/workPermit.png", title: "Work & Study Permits", body: "PGWP, LMIA, open permits, and extensions." },
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
          className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--green), transparent 65%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--yellow), transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 grain opacity-60" aria-hidden="true" />

        {/* Decorative Floating Icons */}
        <motion.img
          src="/Canada.png"
          alt=""
          className="absolute top-1/4 -left-10 w-32 h-32 opacity-10 blur-[1px] select-none pointer-events-none hidden lg:block"
          animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="/BoardingPass.png"
          alt=""
          className="absolute bottom-1/4 right-1/3 w-24 h-24 opacity-10 blur-[2px] select-none pointer-events-none hidden lg:block"
          animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="relative max-w-[1320px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-20 items-center w-full">
          <div>
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
                className="block italic text-green"
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
            <div className="font-mono text-[11px] tracking-widest text-green uppercase mb-4">Our Practice</div>
            <h2 className="font-display text-4xl md:text-6xl max-w-3xl">How We Can Help</h2>
            <p className="mt-5 text-lg text-text-muted max-w-2xl">
              Full-service immigration consulting — from permanent residency to refugee representation.
            </p>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            {services.map(({ image, title, body }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                <div className="group bg-white border border-[#E0E0E0] p-9 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:border-l-[3px] hover:border-l-red h-full">
                  <div className="mb-6 h-12 w-12 flex items-center justify-center">
                    <img src={image} alt="" className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
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

      {/* ABOUT KEERTI - MODERNIZED */}
      <section className="bg-[#05070A] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 grain opacity-40" aria-hidden="true" />
        
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-6">
                <Award className="w-3 h-3 text-gold" />
                <span className="font-mono text-[10px] tracking-widest text-gold uppercase font-bold">Expertise & Integrity</span>
              </div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.1] mb-8">
                A Decade of Experience.<br />
                <span className="italic text-white/60">A Lifetime of Impact.</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl leading-relaxed mb-10 font-light">
                Keerti Kumar is a <span className="text-white font-medium">Regulated Canadian Immigration Consultant (RCIC-IRB)</span>, licensed by the College of Immigration and Citizenship Consultants (CICC). With a Graduate Diploma in Immigration Law from Queen's University, he brings precision and empathy to every case.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { label: "CICC Licensed", icon: "/Licensed.png" },
                  { label: "CAPIC Member", icon: "/capic-member.png" },
                  { label: "Queen's Alumni", icon: null },
                  { label: "BC Commissioner", icon: null },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                    {b.icon ? <img src={b.icon} alt="" className="w-5 h-5 invert opacity-70" /> : <ShieldCheck className="w-5 h-5 text-green opacity-70" />}
                    <span className="font-mono text-[10px] tracking-widest uppercase text-white/80">{b.label}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="btn-primary !bg-white !text-bg-dark hover:!bg-green hover:!text-white">
                Learn More About Our Mission
              </Link>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-red/20 via-gold/10 to-green/20 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                <div className="relative aspect-[4/5] bg-[#0A0F14] border border-white/10 rounded-[32px] overflow-hidden p-10 flex flex-col justify-end">
                  <div className="absolute top-10 left-10">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-gold font-mono text-sm">
                      09
                    </div>
                  </div>
                  <div className="absolute top-10 right-10 opacity-5">
                    <img src={logo} alt="" className="w-48 h-48 grayscale invert" />
                  </div>
                  
                  <div className="relative z-10">
                    <p className="font-display italic text-3xl md:text-4xl text-white leading-tight mb-6">
                      "Guiding your journey with clarity, courage, and compassion."
                    </p>
                    <div className="h-px w-20 bg-gradient-to-r from-red to-transparent mb-4" />
                    <p className="font-mono text-[11px] tracking-[0.3em] text-white/40 uppercase">The Ninth House Vision</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FULL SERVICES - MODERNIZED */}
      <section className="bg-bg py-24 md:py-36 relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="w-16 h-16 rounded-3xl bg-green/10 flex items-center justify-center mx-auto mb-8 border border-green/20">
                <Briefcase className="w-8 h-8 text-green" />
              </div>
              <h2 className="font-display text-4xl md:text-6xl mb-6 tracking-tight">Our Full Range of Services</h2>
              <p className="text-xl text-text-muted font-light leading-relaxed">
                Comprehensive representation across all divisions of Canadian immigration law.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {fullServices.map((col, i) => (
              <Reveal key={col.title} delay={i * 0.05}>
                <div className="p-8 rounded-[32px] bg-white border border-black/[0.04] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                  <h3 className="font-mono text-[10px] tracking-[0.2em] text-green uppercase font-bold mb-8 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green" />
                    {col.title}
                  </h3>
                  <ul className="space-y-4 flex-grow">
                    {col.items.map((it) => (
                      <li key={it} className="text-[15px] text-text-muted flex items-start gap-3 group/item">
                        <ArrowRight className="w-3.5 h-3.5 mt-1 text-black/20 group-hover/item:text-red transition-colors" />
                        <span className="group-hover/item:text-text transition-colors">{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/contact" className="btn-primary">
              Book a Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL - MODERNIZED */}
      <section className="bg-bg py-24 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <span className="font-display text-[400px] leading-none select-none italic text-black">9</span>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="flex justify-center gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" aria-hidden="true" />)}
            </div>
            <p className="font-display italic text-3xl md:text-5xl leading-tight mb-12 text-bg-dark">
              "Keerti and his team guided us through our refugee appeal with professionalism and genuine care. We had our permanent residency within a year."
            </p>
            <div className="inline-block py-3 px-6 rounded-full bg-white border border-black/5 shadow-sm">
              <span className="font-mono text-[11px] tracking-widest uppercase text-text-muted">- Harpreet S. | Kamloops, BC</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US - BENTO GRID REDESIGN */}
      <section className="bg-bg py-24 md:py-36">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="max-w-3xl mb-20">
               <div className="font-mono text-[11px] tracking-widest text-red uppercase font-bold mb-4">The Ninth House Edge</div>
               <h2 className="font-display text-4xl md:text-7xl tracking-tight">Why Families Trust Us</h2>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <Reveal className="md:col-span-8 h-full">
              <div className="bg-[#0A0F14] rounded-[40px] p-12 text-white h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                  <ShieldCheck className="w-64 h-64" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-4xl md:text-5xl mb-6">Licensed & Regulated Expertise</h3>
                    <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                      Led by Keerti Kumar, RCIC-IRB Class L3, we are authorized to represent cases before all four divisions of the Immigration and Refugee Board (IRB).
                    </p>
                  </div>
                  <div className="mt-12 flex gap-4">
                    <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] tracking-widest uppercase">Verified License</div>
                    <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] tracking-widest uppercase">CICC Member</div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal className="md:col-span-4" delay={0.1}>
              <div className="bg-red rounded-[40px] p-12 text-white h-full flex flex-col justify-between hover:bg-bg-dark transition-colors duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                  <Heart className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-3xl mb-4 leading-tight">Ethical & Transparent</h3>
                  <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors">
                    We uphold the highest standards of professionalism, always placing integrity and your future first.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal className="md:col-span-4" delay={0.2}>
              <div className="bg-yellow rounded-[40px] p-12 h-full flex flex-col justify-between hover:bg-green hover:text-white transition-all duration-500 group">
                 <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-8 group-hover:bg-white/10">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display text-3xl mb-4 leading-tight">Full-Service Support</h3>
                  <p className="text-black/60 leading-relaxed group-hover:text-white transition-colors">
                    From refugee appeals to family sponsorships - one firm handles it all with dedicated care.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.3}>
              <div className="bg-navy-light rounded-[40px] p-12 h-full relative group overflow-hidden">
                <div className="flex flex-col md:flex-row items-center gap-10 h-full">
                  <div className="flex-grow">
                    <h3 className="font-display text-3xl md:text-4xl mb-4">A Local Partner with Global Vision</h3>
                    <p className="text-text-muted leading-relaxed text-lg">
                      Based in Kamloops, BC, we serve clients locally and internationally, bringing the same level of commitment to every time zone.
                    </p>
                  </div>
                  <div className="w-full md:w-48 aspect-square rounded-3xl bg-white border border-black/5 flex items-center justify-center p-8 group-hover:rotate-12 transition-transform duration-700">
                    <img src={logo} alt="" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA BANNER - MODERNIZED */}
      <section className="bg-bg py-12 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="bg-red rounded-[48px] p-12 md:p-24 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full grain opacity-20 pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-[80px]" />
            
            <Reveal>
              <h2 className="font-display text-4xl md:text-7xl mb-8 tracking-tight">Ready to Start Your Journey?</h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-light">
                Book a free consultation with Keerti Kumar, RCIC-IRB. We respond within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="px-10 py-5 rounded-full bg-white text-red font-mono text-[11px] tracking-widest uppercase font-bold hover:bg-bg-dark hover:text-white transition-all shadow-xl hover:shadow-2xl">
                  Book Free Consultation
                </Link>
                <a href="tel:+17789190026" className="px-10 py-5 rounded-full bg-transparent border-2 border-white text-white font-mono text-[11px] tracking-widest uppercase font-bold hover:bg-white hover:text-red transition-all">
                  Call +1 (778) 919-0026
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
