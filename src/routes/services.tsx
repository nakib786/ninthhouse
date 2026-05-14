import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: seo.services.title }, { name: "description", content: seo.services.description }] }),
  component: Services,
});

const irb = [
  "Refugee Protection Division (RPD) — Refugee Claims",
  "Immigration Appeal Division (IAD) — Sponsorship & Removal Appeals",
  "Immigration Division (ID) — Admissibility Hearings & Detention Reviews",
  "Refugee Appeal Division (RAD) — Appeals of Refused Refugee Claims",
];
const apps = [
  "Permanent Residency (Express Entry, PNP, H&C Grounds)",
  "Family Sponsorships — Spouse, Common-law, Child, Parent, Grandparent",
  "Post-Graduate Work Permits (PGWP)",
  "Study Permits & Extensions",
  "LMIA-Based Work Permits & Employer Compliance",
  "Open Work Permits (Spousal, Bridging, Vulnerable Workers)",
  "Super Visa Applications for Parents and Grandparents",
  "Visitor Visas (TRVs) & Business Visitor Applications",
];
const status = [
  "Restoration of Status Applications",
  "Inadmissibility Advice and Strategy (Criminality, Misrepresentation, Medical)",
  "PR Card Renewals & Residency Obligation Issues",
  "Canadian Citizenship Applications & Proof of Citizenship",
  "GCMS Notes Requests & Application Review Services",
];
const specialized = [
  "Humanitarian and Compassionate (H&C) Applications",
  "Refugee Sponsorship",
  "Pre-Removal Risk Assessment (PRRA)",
  "Detention Release Strategy & Representation",
  "Voluntary Departure Counseling & Procedural Guidance",
];

function Block({
  bg,
  text,
  iconColor,
  title,
  body,
  items,
  centered,
}: {
  bg: string;
  text: string;
  iconColor: string;
  title: string;
  body?: string;
  items: string[];
  centered?: boolean;
}) {
  return (
    <section className={`${bg} ${text} py-24 md:py-28`}>
      <div className={`max-w-[1100px] mx-auto px-6 md:px-10 ${centered ? "text-center" : ""}`}>
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl">{title}</h2>
          {body && <p className={`mt-6 text-lg ${text === "text-white" ? "text-white/80" : "text-text-muted"} max-w-3xl ${centered ? "mx-auto" : ""}`}>{body}</p>}
          <ul className={`mt-10 grid md:grid-cols-2 gap-x-10 gap-y-4 ${centered ? "text-left max-w-3xl mx-auto" : ""}`}>
            {items.map((it) => (
              <li key={it} className="flex gap-3 items-start">
                <CheckCircle className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-1`} aria-hidden="true" />
                <span className={text === "text-white" ? "text-white/90" : ""}>{it}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <>
      <PageHero title="Our Services" breadcrumb="Services" subtitle="Comprehensive, regulated immigration services for every stage of your journey." />

      <section className="bg-bg py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-lg text-text-muted">
              We offer a full range of immigration services — from permanent residency and IRB representation to work permits and specialized humanitarian cases. Every service is delivered by Keerti Kumar, RCIC-IRB, with precision and care.
            </p>
          </Reveal>
        </div>
      </section>

      <Block bg="bg-bg-dark" text="text-white" iconColor="text-red" title="Authorized Representation Before the IRB" body="As an RCIC-IRB Class L3 consultant, Keerti Kumar is one of the few regulated consultants in Canada authorized to represent clients before all four IRB divisions." items={irb} />
      <Block bg="bg-bg" text="text-bg-dark" iconColor="text-red" title="Immigration Applications" items={apps} />
      <Block bg="bg-navy-light" text="text-bg-dark" iconColor="text-red" title="Status & Compliance Support" items={status} />
      <Block bg="bg-navy" text="text-white" iconColor="text-gold" title="Specialized Services" body="These cases require deep expertise and careful strategy. Keerti Kumar has the credentials and experience to handle Canada's most complex immigration situations." items={specialized} centered />

      <section className="bg-red text-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl">Not sure which program applies to you?</h2>
            <p className="mt-5 text-white/85 text-lg">Book a free assessment and we'll review your case together.</p>
            <Link to="/contact" className="mt-8 inline-flex font-mono text-xs uppercase tracking-widest bg-white text-bg-dark px-6 py-3 rounded-full hover:bg-bg-dark hover:text-white transition-colors">
              Book a Free Assessment
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
