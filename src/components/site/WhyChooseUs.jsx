import { Award, MapPinned, Lightbulb, LifeBuoy, Users, TrendingUp } from "lucide-react";
import img from "@/assets/why-choose.jpg";

const points = [
  {
    icon: Award,
    title: "25+ Years of Proven Expertise",
    desc: "Trusted by 800+ organisations across India — from agile startups to Fortune 500 enterprises.",
  },
  {
    icon: MapPinned,
    title: "Nationwide Talent Network",
    desc: "Active recruiters and deep talent pools in 35 cities, covering every major metro and Tier-2 hub.",
  },
  {
    icon: Lightbulb,
    title: "Sector-Dedicated Specialists",
    desc: "Dedicated practice leads for 12+ industries — they know your market, skills and salary benchmarks.",
  },
  {
    icon: Users,
    title: "Inclusive & Diverse Hiring",
    desc: "We champion accessible, equitable recruitment to help you build diverse, future-ready workforces.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Workforce Insights",
    desc: "Market intelligence, salary benchmarks and workforce trends to sharpen your hiring strategy.",
  },
  {
    icon: LifeBuoy,
    title: "End-to-End Support",
    desc: "Sourcing, assessment, onboarding, payroll and compliance — all handled under one roof.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">

        {/* Image column */}
        <div className="relative order-2 lg:order-1">
          <img
            src={img}
            alt="Octo-Intra Solutions recruitment consultant meeting"
            loading="lazy"
            width={1200}
            height={1200}
            className="rounded-2xl shadow-elegant w-full aspect-square object-cover"
          />
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -right-4 hidden md:flex flex-col items-start rounded-2xl bg-primary text-primary-foreground p-5 shadow-elegant max-w-[190px]">
            <p className="text-3xl font-extrabold text-accent">98%</p>
            <p className="text-xs mt-1 text-white/80 leading-snug">Client retention rate over the last 5 years</p>
          </div>
          {/* Second badge */}
          <div className="absolute -top-5 -left-4 hidden md:flex flex-col items-start rounded-2xl bg-secondary text-white p-5 shadow-elegant max-w-[190px]">
            <p className="text-3xl font-extrabold">48h</p>
            <p className="text-xs mt-1 text-white/80 leading-snug">Average time to first shortlist</p>
          </div>
        </div>

        {/* Content column */}
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Why choose us</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary leading-tight">
            The workforce partner India trusts
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            At Octo-Intra Solutions, we believe every business deserves the right talent
            and every individual deserves a meaningful career. Guided by a global commitment
            to sustainable, inclusive employment, we make both happen.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {points.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-secondary transition shadow-card"
            >
              Talk to an Expert
            </a>
            <a
              href="#"
              className="rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft transition"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
