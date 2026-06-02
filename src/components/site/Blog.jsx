import { ArrowRight } from "lucide-react";

const posts = [
  { cat: "Hiring Trends", date: "May 28, 2026", title: "India's gig workforce will hit 25M by 2027", excerpt: "What employers must do today to stay ahead of the contingent talent wave." },
  { cat: "Compliance", date: "May 18, 2026", title: "New labour codes: a quick guide for HR leaders", excerpt: "Everything you need to know about wage code rollout across states." },
  { cat: "Talent", date: "May 04, 2026", title: "Why Tier-2 cities are India's new hiring hotspot", excerpt: "Indore, Coimbatore and Jaipur are quietly outperforming the metros." },
];

export function Blog() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Insights</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">Latest from our blog</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:text-accent transition">View all articles →</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="rounded-xl border bg-card overflow-hidden hover:shadow-elegant transition group">
              <div className="h-44 bg-gradient-cta relative">
                <span className="absolute top-4 left-4 bg-card text-primary text-xs font-semibold px-3 py-1 rounded-full">{p.cat}</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground">{p.date}</p>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-primary transition">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
