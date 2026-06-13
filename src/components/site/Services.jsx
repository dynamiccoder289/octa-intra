import {
  Users, FileText, Crown, Wallet,
  Building2, GraduationCap, RefreshCw, ShieldCheck, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Permanent Staffing",
    desc: "We source, screen and place full-time professionals who align with your culture, values and long-term growth strategy.",
  },
  {
    icon: FileText,
    title: "Contract & Temporary Staffing",
    desc: "Scale your workforce up or down with pre-vetted contract workers for projects, peak seasons and urgent demands.",
  },
  {
    icon: Crown,
    title: "Executive Search",
    desc: "Confidential, research-led headhunting for CXO, VP and senior leadership roles across every industry.",
  },
  {
    icon: RefreshCw,
    title: "Recruitment Process Outsourcing (RPO)",
    desc: "We embed our recruiters into your organisation — managing end-to-end hiring so your HR team can focus on strategy.",
  },
  {
    icon: Wallet,
    title: "Payroll & Compliance Management",
    desc: "Full-service payroll processing, PF/ESI/TDS compliance, and benefits administration to keep you audit-ready.",
  },
  {
    icon: Building2,
    title: "HR Outsourcing (HRO)",
    desc: "Outsource day-to-day HR operations — onboarding, policies, HRMS and employee lifecycle — to our expert team.",
  },
  {
    icon: GraduationCap,
    title: "Workforce Training & Upskilling",
    desc: "Role-based training, e-learning programmes and skills assessments to build job-ready, future-proof teams.",
  },
  {
    icon: ShieldCheck,
    title: "Background Verification",
    desc: "Thorough employment, education, criminal and reference checks — delivered fast, with zero compromise on accuracy.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">What we do</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">
            End-to-end workforce solutions
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            From sourcing a single specialist to managing your entire recruitment function —
            Octo-Intra Solutions covers every stage of the workforce journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border bg-card p-6 shadow-card hover:-translate-y-1 hover:shadow-elegant hover:border-secondary transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary group-hover:bg-secondary group-hover:text-white transition-colors">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors"
              >
                Learn more <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
