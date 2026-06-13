import { useState } from "react";
import { BookOpen, ChevronRight, Tag, Mail, CheckCircle } from "lucide-react";

const ARTICLES = [
  { category: "Interview Prep", title: "How to Answer 'Tell Me About Yourself' Like a Pro", excerpt: "The most common interview opener is also the most mishandled. Learn the 3-part structure that frames your story compellingly — and keeps the interviewer hooked.", date: "June 12, 2026" },
  { category: "Resume Tips", title: "The ATS-Proof Resume: Format Your CV So Recruiters Actually See It", excerpt: "Over 70% of resumes are filtered out before a human ever reads them. We break down the exact formatting and keyword density that gets you past applicant tracking systems.", date: "May 28, 2026" },
  { category: "Salary", title: "How to Negotiate a Better Offer Without Losing the Job", excerpt: "Salary negotiation makes most candidates nervous — but it's expected. Our step-by-step guide covers timing, language, and anchoring strategies to maximise your offer.", date: "May 15, 2026" },
  { category: "Career Growth", title: "Switching Industries Mid-Career: What Works and What Doesn't", excerpt: "Whether you're moving from IT to consulting or FMCG to ed-tech, a lateral industry shift is doable — if you know which transferable skills to highlight.", date: "April 30, 2026" },
  { category: "Remote Work", title: "Landing a Remote Role in India: The Hidden Playbook", excerpt: "Remote-first companies evaluate candidates differently. From async communication demos to portfolio visibility, here's how to stand out for fully-remote positions.", date: "April 18, 2026" },
  { category: "Executive", title: "What CXO Hiring Committees Actually Look For", excerpt: "Senior searches are a different game. Board-level hiring isn't about ticking boxes — it's about conviction, strategic vision, and cultural alignment.", date: "April 5, 2026" },
];

const CATEGORY_COLORS = {
  "Interview Prep": "bg-primary-soft text-primary",
  "Resume Tips":    "bg-secondary/10 text-secondary",
  Salary:           "bg-accent/20 text-foreground",
  "Career Growth":  "bg-muted text-muted-foreground",
  "Remote Work":    "bg-secondary/10 text-secondary",
  Executive:        "bg-primary-soft text-primary",
};

export function CareerAdvicePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-cta py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Career Advice</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Practical tips on job hunting, interviews, salary negotiation and career growth — from recruiters who've seen it all.
          </p>
          {subscribed ? (
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-3 rounded-xl text-sm font-medium">
              <CheckCircle className="w-5 h-5" /> You're subscribed! Career tips coming your way.
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 flex items-center gap-2 bg-white rounded-lg px-3 py-2">
                <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                <input type="email" placeholder="Enter your email for career tips…" value={email} onChange={(e) => setEmail(e.target.value)} required
                  className="flex-1 outline-none text-foreground placeholder:text-muted-foreground bg-transparent text-sm" />
              </div>
              <button type="submit" className="bg-white text-primary font-semibold px-5 py-2 rounded-lg hover:bg-white/90 transition text-sm">Subscribe</button>
            </form>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-14">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Latest Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a, i) => (
            <article key={i} className="bg-card border border-border rounded-2xl shadow-card p-6 flex flex-col hover:shadow-elegant hover:border-secondary transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${CATEGORY_COLORS[a.category] || "bg-muted text-muted-foreground"}`}>
                  <Tag className="w-3 h-3" /> {a.category}
                </span>
                <span className="text-xs text-muted-foreground">{a.date}</span>
              </div>
              <h3 className="font-semibold text-foreground text-base leading-snug mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm text-primary font-medium hover:text-secondary transition">
                Read more <ChevronRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
