import { Award, MapPinned, Lightbulb, LifeBuoy } from "lucide-react";
import img from "@/assets/why-choose.jpg";

const points = [
  { icon: Award, title: "Proven Track Record", desc: "50,000+ successful placements across 500+ organizations." },
  { icon: MapPinned, title: "Pan-India Network", desc: "Active recruiters and candidates in 28 cities nationwide." },
  { icon: Lightbulb, title: "Industry Expertise", desc: "Dedicated practice leads for every major sector." },
  { icon: LifeBuoy, title: "End-to-End Support", desc: "Sourcing, onboarding, payroll and compliance — handled." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={img} alt="Recruitment consultant meeting" loading="lazy" width={1200} height={1200} className="rounded-2xl shadow-elegant w-full aspect-square object-cover" />
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-primary text-primary-foreground p-6 shadow-elegant max-w-[200px]">
            <p className="text-3xl font-bold text-accent">98%</p>
            <p className="text-sm mt-1 text-white/85">Client retention rate over the last 5 years</p>
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Why choose us</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">The staffing partner India trusts</h2>
          <p className="mt-3 text-muted-foreground">Two decades of building workforces for businesses of every scale — from agile startups to Fortune 500 enterprises.</p>
          <div className="mt-8 space-y-5">
            {points.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#contact" className="mt-8 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition shadow-elegant">
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
