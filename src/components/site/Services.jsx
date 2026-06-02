import { Users, FileText, Crown, Wallet, Building2, GraduationCap, ArrowRight } from "lucide-react";

const services = [
  { icon: Users, title: "Permanent Staffing", desc: "Find full-time talent that fits your culture and grows with you." },
  { icon: FileText, title: "Contract Staffing", desc: "Flexible on-demand workforce for projects and seasonal needs." },
  { icon: Crown, title: "Executive Search", desc: "Discreet, curated search for senior leadership and CXO roles." },
  { icon: Wallet, title: "Payroll Management", desc: "End-to-end payroll, statutory compliance and benefits administration." },
  { icon: Building2, title: "HR Outsourcing", desc: "Outsource HR operations to experts and scale without overhead." },
  { icon: GraduationCap, title: "Workforce Training", desc: "Upskill teams with role-based training and certification programs." },
];

export function Services() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">What we do</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">End-to-end staffing solutions</h2>
          <p className="mt-3 text-muted-foreground">From hiring one specialist to building hundred-strong teams — we cover every part of the workforce journey.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border bg-card p-7 shadow-card hover:-translate-y-1 hover:shadow-elegant transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-soft text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors">
                Learn more <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
