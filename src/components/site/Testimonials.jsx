import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Head of Talent Acquisition",
    company: "Leading IT Services Firm, Bengaluru",
    quote: "Octo-Intra Solutions helped us scale our engineering team from 50 to 250 in under a year. Their pre-vetted candidates and fast turnaround is unlike anything we've experienced.",
    initials: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Plant Director",
    company: "Large Manufacturing Group, Ahmedabad",
    quote: "From skilled shop-floor technicians to plant managers, we trust Octo-Intra with all our hiring across four manufacturing sites. Reliable, thorough and genuinely invested in our growth.",
    initials: "RK",
  },
  {
    name: "Anita Desai",
    role: "Chief People Officer",
    company: "Top Private Sector Bank, Mumbai",
    quote: "Fast, professional and deeply knowledgeable about the BFSI sector. Our go-to partner for branch banking and middle-management roles across Maharashtra.",
    initials: "AD",
  },
  {
    name: "Suresh Pillai",
    role: "VP – Human Resources",
    company: "National FMCG Brand, Pune",
    quote: "Their RPO model transformed our hiring. We went from a 45-day hiring cycle to under 18 days — with better quality candidates and full compliance support.",
    initials: "SP",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((p) => (p + 1) % testimonials.length);

  return (
    <section className="py-20 lg:py-28 bg-primary-soft">
      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Testimonials</span>
        <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">What our clients say</h2>
        <p className="mt-3 text-muted-foreground">Trusted by HR leaders, plant directors and CPOs across India.</p>

        <div className="mt-12 rounded-2xl bg-card border shadow-card p-8 lg:p-12 relative overflow-hidden">
          <Quote className="absolute top-6 left-6 text-primary/8" size={72} />

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6 relative">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} size={18} className="fill-secondary text-secondary" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed italic relative max-w-2xl mx-auto">
            "{t.quote}"
          </p>

          {/* Author */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
              {t.initials}
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              <p className="text-xs text-muted-foreground">{t.company}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            className="rounded-full border h-10 w-10 flex items-center justify-center bg-card hover:bg-primary hover:text-primary-foreground transition"
          >
            <ChevronLeft size={18} />
          </button>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-primary/25"}`}
            />
          ))}
          <button
            onClick={next}
            className="rounded-full border h-10 w-10 flex items-center justify-center bg-card hover:bg-primary hover:text-primary-foreground transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
