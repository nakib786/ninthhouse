import { createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, ShieldCheck, FileCheck, Gavel } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { PortraitFrame } from "@/components/site/PortraitFrame";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: seo.about.title }, { name: "description", content: seo.about.description }] }),
  component: About,
});

const credentials = [
  { image: "/Licensed.png", title: "CICC Licensed", body: "College of Immigration and Citizenship Consultants" },
  { image: "/capic-member.png", title: "CAPIC Member", body: "Canadian Association of Professional Immigration Consultants" },
  { image: "/Lawyer.png", title: "RCIC-IRB Class L3", body: "Authorized before all IRB divisions" },
  { image: "/Affidavits.png", title: "Commissioner for Affidavits", body: "Authorized in British Columbia" },
];

const values = [
  { n: "01", title: "Clarity", body: "We explain every step clearly, in plain language, so you are never left confused or uncertain." },
  { n: "02", title: "Courage", body: "We fight for your rights before the IRB and every level of Canada's immigration system." },
  { n: "03", title: "Compassion", body: "We understand what is at stake. Every case is treated with the care it deserves." },
];

function About() {
  return (
    <>
      <PageHero title="About Us" breadcrumb="About Us" subtitle="A licensed firm built on integrity, expertise, and care for every client." />

      <section className="bg-bg py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <Reveal>
            <div className="font-mono text-[11px] tracking-widest text-green uppercase mb-5">Our Story</div>
            <h2 className="font-display text-4xl md:text-5xl">A Mission Built on Trust</h2>
            <div className="mt-8 space-y-6 text-text-muted text-[17px] leading-[1.8]">
              <p>The Ninth House Immigration Solutions Inc. was founded by Keerti Kumar, RCIC-IRB, with a singular mission: to make Canada's complex immigration system accessible, transparent, and humane for every client who walks through our door.</p>
              <p>Keerti brings over 10 years of immigration experience, including 8 years practicing in Canada. He holds a Graduate Diploma in Immigration and Citizenship Law from Queen's University, Kingston, Ontario — licensed by CICC and a proud CAPIC member.</p>
              <p>As an RCIC-IRB (Class L3), Keerti is authorized to represent clients before all four divisions of the Immigration and Refugee Board of Canada — a distinction few consultants hold.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <PortraitFrame />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-light py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-center">Credentials & Memberships</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map(({ image, title, body }, i) => (
              <Reveal key={title} delay={i * 0.05}>
                 <div className={`bg-white border-t-2 ${i % 2 === 0 ? 'border-green' : 'border-yellow'} p-8 text-center h-full group hover:shadow-xl transition-shadow`}>
                   <div className="h-16 w-16 mx-auto mb-5 flex items-center justify-center">
                     <img src={image} alt="" className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform" />
                   </div>
                   <div className={`font-mono text-[12px] tracking-widest ${i % 2 === 0 ? 'text-green' : 'text-yellow'} uppercase`}>{title}</div>
                   <p className="mt-3 text-sm text-text-muted">{body}</p>
                 </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-24 md:py-32">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">What We Stand For</h2>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.06}>
                <div className="relative pt-12">
                  <div className="absolute top-0 left-0 font-display font-semibold text-green/10 leading-none" style={{ fontSize: 110 }}>{v.n}</div>
                  <h3 className="relative font-display text-3xl">{v.title}</h3>
                  <p className="mt-4 text-text-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-24 md:py-32 border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-12">
          <motion.img 
            src="/CanadaFirstNation.png" 
            alt="First Nations Recognition" 
            className="w-40 h-40 object-contain drop-shadow-xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="max-w-3xl">
            <h3 className="font-display text-2xl mb-4">Land Acknowledgement</h3>
            <p className="text-lg text-text-muted leading-relaxed italic">
              The Ninth House Immigration Solutions Inc. acknowledges that we are located on Tk̓emlúps te Secwépemc territory, situated within the unceded ancestral lands of the Secwépemc Nation. We honour and respect the people, the territory, and the land that houses our community.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-24 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="mb-6 h-16 w-16 mx-auto flex items-center justify-center">
              <img src="/Lawyer.png" alt="" className="max-w-full max-h-full object-contain" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl">Authorized Before the Immigration and Refugee Board</h2>
            <p className="mt-7 text-lg text-white/80 leading-relaxed">
              As an RCIC-IRB (Class L3) consultant, Keerti Kumar is authorized to represent clients before the Refugee Protection Division, Immigration Appeal Division, Immigration Division, and Refugee Appeal Division of the IRB — providing the highest level of representation available from a regulated consultant.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
