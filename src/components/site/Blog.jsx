import { ArrowRight } from "lucide-react";

const posts = [
  {
    cat: "Workforce Trends",
    date: "June 5, 2026",
    title: "India's Engineering Talent Shortage: What Employers Must Do Now",
    excerpt: "From retail to healthcare, engineering roles are evolving fast. Here's how to attract and retain the skills your organisation needs.",
  },
  {
    cat: "Compliance",
    date: "May 22, 2026",
    title: "New Labour Codes 2026: A Quick Guide for HR Leaders",
    excerpt: "Everything you need to know about the wage code rollout, social security changes and how to stay compliant across states.",
  },
  {
    cat: "Hiring Strategy",
    date: "May 10, 2026",
    title: "Why Tier-2 Cities Are India's New Hiring Hotspot",
    excerpt: "Indore, Coimbatore and Jaipur are quietly outperforming the metros. Here's why smart employers are shifting their talent strategy.",
  },
  {
    cat: "Career Growth",
    date: "April 28, 2026",
    title: "How Free Skills Training Is Changing Lives Across India",
    excerpt: "Octo-Intra's e-learning programmes have helped thousands of job seekers upskill and land roles in high-demand sectors.",
  },
  {
    cat: "RPO Insights",
    date: "April 14, 2026",
    title: "From 45 Days to 18: How RPO Cut Our Hiring Cycle in Half",
    excerpt: "A leading FMCG brand shares how outsourcing their recruitment function transformed speed, quality and compliance.",
  },
  {
    cat: "Market Intelligence",
    date: "April 2, 2026",
    title: "India Salary Benchmarks 2026: What Candidates Expect",
    excerpt: "Our annual salary survey reveals what top talent across IT, BFSI, manufacturing and logistics is commanding this year.",
  },
];

export function Blog() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Insights</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">Workforce insights & resources</h2>
            <p className="mt-2 text-muted-foreground">
              Hiring trends, compliance updates, salary benchmarks and career guides — from our experts.
            </p>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:text-secondary transition">
            View all articles →
          </a>
        </div>

        {/* Cards */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, idx) => (
            <article
              key={idx}
              className="rounded-xl border bg-card overflow-hidden hover:shadow-elegant hover:border-secondary transition group"
            >
              {/* Card banner */}
              <div className="h-36 bg-gradient-cta relative flex items-end p-4">
                <span className="bg-white/90 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-muted-foreground">{p.date}</p>
                <h3 className="mt-2 text-base font-semibold text-foreground group-hover:text-primary transition leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition">
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
