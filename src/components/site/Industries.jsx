import {
  Cpu, Factory, Landmark, Stethoscope,
  ShoppingBag, Truck, HardHat, Package,
  Zap, Plane, GraduationCap, Phone,
} from "lucide-react";

const industries = [
  { icon: Cpu,           label: "IT & Technology",        desc: "Software, data, cloud & product roles" },
  { icon: Factory,       label: "Manufacturing",           desc: "Plant ops, engineering & shop-floor" },
  { icon: Landmark,      label: "BFSI",                   desc: "Banking, insurance & fintech" },
  { icon: Stethoscope,   label: "Healthcare & Pharma",    desc: "Clinical, nursing & life sciences" },
  { icon: ShoppingBag,   label: "Retail & E-commerce",   desc: "Store ops, buying & supply chain" },
  { icon: Truck,         label: "Logistics & Supply Chain", desc: "Warehousing, fleet & last-mile" },
  { icon: HardHat,       label: "Construction & EPC",     desc: "Civil, MEP & project management" },
  { icon: Package,       label: "FMCG",                   desc: "Sales, distribution & brand ops" },
  { icon: Zap,           label: "Energy & Utilities",     desc: "Power, renewables & O&M" },
  { icon: Plane,         label: "Aviation & Travel",      desc: "Ground ops, cabin crew & ticketing" },
  { icon: GraduationCap, label: "Education & EdTech",    desc: "Teaching, training & curriculum" },
  { icon: Phone,         label: "BPO & Shared Services",  desc: "Customer service, KPO & back-office" },
];

export function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-primary-soft">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Industries</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">Sectors we serve</h2>
          <p className="mt-3 text-muted-foreground">
            Deep specialisation across 12+ of India's most demanding industries,
            backed by sector-dedicated recruiters who speak your language.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center gap-3 rounded-xl bg-card border p-5 hover:border-secondary hover:shadow-card transition cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-secondary transition-colors">
                <Icon size={21} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
