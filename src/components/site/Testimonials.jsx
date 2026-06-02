import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Head of HR",
    company: "TechCorp India",
    quote: "Octo-Intra Solutions helped us scale our engineering team from 50 to 200 in under a year. Their quality of candidates is unmatched.",
    initials: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Plant Director",
    company: "Adani Industries",
    quote: "From skilled technicians to plant managers — we trust Octo-Intra Solutions with all our hiring across 4 manufacturing sites.",
    initials: "RK",
  },
  {
    name: "Anita Desai",
    role: "Chief People Officer",
    company: "HDFC Bank",
    quote: "Reliable, fast and deeply professional. Our go-to partner for branch banking and middle-management roles.",
    initials: "AD",
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
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">Testimonials</span>
        <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">What our clients say</h2>

        <div className="mt-12 rounded-2xl bg-card border shadow-card p-8 lg:p-12 relative">
          <Quote className="absolute top-6 left-6 text-primary/10" size={64} />
          <div className="flex justify-center gap-1 mb-5 relative">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} size={18} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="text-lg lg:text-xl text-foreground/85 leading-relaxed italic relative">"{t.quote}"</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              {t.initials}
            </div>
            <div className="text-left">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}, {t.company}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={prev} className="rounded-full border h-10 w-10 flex items-center justify-center bg-card hover:bg-primary hover:text-primary-foreground transition">
            <ChevronLeft size={18} />
          </button>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-primary/30"}`}
            />
          ))}
          <button onClick={next} className="rounded-full border h-10 w-10 flex items-center justify-center bg-card hover:bg-primary hover:text-primary-foreground transition">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
