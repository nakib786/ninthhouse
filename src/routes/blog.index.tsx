import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [{ title: seo.blog.title }, { name: "description", content: seo.blog.description }] }),
  component: Blog,
});

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
}

const categories = ["Express Entry", "PNP", "Family Sponsorship", "IRB", "Work Permits", "Immigration News"];

function Blog() {
  const { posts } = useBlogPosts();
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero title="Insights & Immigration News" breadcrumb="Blog" subtitle="Updates, guides, and news from Keerti Kumar, RCIC-IRB." />

      <section className="bg-bg py-20">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((c) => (
                <span key={c} className="font-mono text-[10px] uppercase tracking-widest border border-bg-dark/20 px-3 py-1.5 text-text-muted">{c}</span>
              ))}
            </div>
          </Reveal>

          {featured && (
            <Reveal>
              <Link to="/blog/$slug" params={{ slug: featured.slug }} className="block group">
                <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
                  <div className="aspect-[16/10] bg-navy relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-bg-dark" />
                    <div className="absolute bottom-6 left-6 font-display text-white text-7xl opacity-20">9</div>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-red mb-3">{featured.category}</div>
                    <h2 className="font-display text-3xl md:text-4xl group-hover:text-red transition-colors">{featured.title}</h2>
                    <p className="mt-4 text-text-muted">{featured.excerpt}</p>
                    <div className="mt-6 flex items-center gap-6">
                      <span className="font-mono text-xs uppercase tracking-widest text-red inline-flex items-center gap-2">Read Article <ArrowRight className="w-4 h-4" /></span>
                      <span className="font-mono text-xs text-text-muted">{fmt(featured.publishedDate)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      <section className="bg-bg pb-24">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.05}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block border-t-2 border-transparent hover:border-red transition-colors">
                <div className="aspect-[16/10] bg-navy overflow-hidden mb-5">
                  <div className="w-full h-full bg-gradient-to-br from-navy to-bg-dark group-hover:scale-[1.03] transition-transform duration-500" />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-red mb-2">{p.category}</div>
                <h3 className="font-display text-xl md:text-2xl group-hover:text-red transition-colors leading-snug">{p.title}</h3>
                <div className="font-mono text-[11px] text-text-muted mt-2">{fmt(p.publishedDate)}</div>
                <p className="mt-3 text-sm text-text-muted line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 font-mono text-[12px] uppercase tracking-widest text-red inline-flex items-center gap-1">Read <ArrowRight className="w-3.5 h-3.5" /></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
