import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { StatsBar } from "@/components/site/StatsBar";
import { Reveal } from "@/components/site/Reveal";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/testimonials")({
  head: () => ({ meta: [{ title: seo.testimonials.title }, { name: "description", content: seo.testimonials.description }] }),
  component: Testimonials,
});

const items = [
  { quote: "After a refused refugee claim, we did not know where to turn. Keerti represented us at the RAD and we were granted protection. He is more than a consultant — he is a lifesaver.", who: "Amara T., Protected Person | Kelowna, BC" },
  { quote: "Our family sponsorship was complex due to a prior refusal. Keerti navigated the appeal at the IAD brilliantly. Our parents are now here with us.", who: "Gurpreet M., Kamloops, BC" },
  { quote: "I needed a PGWP urgently and the team handled everything quickly and correctly. Professional, prompt, and genuinely caring.", who: "Nilufar S., International Graduate | Vancouver, BC" },
  { quote: "We tried twice on our own. After hiring Keerti, our Express Entry application was approved on the first attempt.", who: "Pardeep B., Permanent Resident | Kamloops, BC" },
  { quote: "Keerti helped us understand our H&C grounds. His knowledge of Canadian immigration law is exceptional.", who: "Ahmed R., Client | Calgary, AB" },
  { quote: "The Ninth House team is honest and straightforward. They told us exactly what to expect. No surprises, just results.", who: "Manpreet G., PR Applicant | Kamloops, BC" },
];

function Testimonials() {
  return (
    <>
      <PageHero title="Client Stories" breadcrumb="Testimonials" subtitle="Real families. Real results." />

      <section className="bg-red text-white py-24 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <p className="font-display italic text-2xl md:text-3xl leading-snug">
              Keerti guided us through our PR application with patience and expertise. We are now proud Canadian permanent residents.
            </p>
            <div className="flex justify-center gap-1 mt-7">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-white text-white" aria-hidden="true" />)}
            </div>
            <div className="mt-5 font-mono text-[12px] tracking-widest uppercase text-white/80">— Ravinder K., Permanent Resident | Surrey, BC</div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg py-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 columns-1 md:columns-2 gap-6 [column-fill:_balance]">
          {items.map((t, i) => (
            <div key={i} className="break-inside-avoid mb-6">
              <Reveal delay={(i % 4) * 0.05}>
                <div className="bg-white border-l-[3px] border-red p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-gold text-gold" aria-hidden="true" />)}
                  </div>
                  <p className="font-display italic text-lg leading-snug">"{t.quote}"</p>
                  <div className="mt-5 font-mono text-[11px] tracking-widest uppercase text-text-muted">— {t.who}</div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <StatsBar />
    </>
  );
}
