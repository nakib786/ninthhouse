import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useBlogPost } from "@/hooks/useBlogPosts";
import keerti from "@/assets/keerti.png";

export const Route = createFileRoute("/blog/$slug")({
  component: Post,
  notFoundComponent: () => (
    <div className="pt-44 pb-32 text-center">
      <h1 className="font-display text-5xl">Post not found</h1>
      <Link to="/blog" className="btn-outline mt-8 inline-flex">Back to Blog</Link>
    </div>
  ),
});

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" });
}

function Post() {
  const { slug } = Route.useParams();
  const { post } = useBlogPost(slug);
  if (!post) throw notFound();

  return (
    <article className="bg-bg">
      <div className="bg-bg-dark">
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 pt-32 pb-12">
          <Link to="/blog" className="font-mono text-xs uppercase tracking-widest text-red inline-flex items-center gap-2 hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>

      <div className="aspect-[21/9] bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-bg-dark to-bg-dark" />
        <div className="absolute bottom-8 left-8 font-display text-white/15 leading-none" style={{ fontSize: 220 }}>9</div>
      </div>

      <div className="max-w-[760px] mx-auto px-6 py-20">
        <div className="font-mono text-[11px] uppercase tracking-widest text-red mb-4">{post.category} · {fmt(post.publishedDate)}</div>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05]">{post.title}</h1>
        <div className="mt-10 space-y-6 text-[18px] leading-[1.85] text-bg-dark">
          <p className="text-xl text-text-muted">{post.excerpt}</p>
          <p>{post.body}</p>
          <p>This is a placeholder body paragraph that will be replaced with content fetched from the Wix Headless CMS once the integration is connected. The structure of the post payload (id, title, slug, excerpt, body, category, publishedDate, coverImage) already mirrors the expected API response.</p>
          <p>If you have specific questions about your immigration matter, please reach out — every situation is different and we offer free initial consultations.</p>
        </div>

        <div className="mt-16 pt-10 border-t border-border flex items-center gap-5">
          <img src={keerti} alt="Keerti Kumar" className="w-16 h-16 object-cover bg-navy" />
          <div>
            <div className="font-display text-xl">Keerti Kumar, RCIC-IRB</div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-gold">Founder & Director</div>
          </div>
        </div>
      </div>
    </article>
  );
}
