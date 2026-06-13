import { Monitor, Factory, Landmark, HeartPulse, ShoppingCart, Truck, HardHat, ShoppingBag, Zap, Plane, BookOpen, Headphones, ChevronRight, Mail } from "lucide-react";

const INDUSTRIES = [
  { icon: Monitor, name: "IT & Technology", desc: "We place software engineers, architects, data scientists, DevOps leads, and product managers in product companies, IT services firms, and SaaS startups across the country." },
  { icon: Factory, name: "Manufacturing", desc: "From shop-floor supervisors to plant heads and supply-chain directors, we staff automotive, heavy engineering, chemicals, and precision manufacturing organisations." },
  { icon: Landmark, name: "BFSI", desc: "Covering retail banking, NBFCs, insurance, asset management, and fintech — we fill roles in risk, compliance, treasury, operations, and technology functions." },
  { icon: HeartPulse, name: "Healthcare & Pharma", desc: "Clinicians, medical officers, pharma sales teams, regulatory affairs specialists, and hospital administrators — we serve hospitals, diagnostic chains, and pharma companies." },
  { icon: ShoppingCart, name: "Retail & E-commerce", desc: "Category managers, retail store leads, supply-chain analysts, and digital marketing talent for omni-channel retailers and fast-growing D2C e-commerce brands." },
  { icon: Truck, name: "Logistics & Supply Chain", desc: "Warehouse managers, fleet controllers, last-mile ops heads, and 3PL leadership roles for logistics companies and e-commerce fulfilment centres." },
  { icon: HardHat, name: "Construction & EPC", desc: "Civil and MEP engineers, project managers, safety officers, and procurement leads for EPC contractors, real estate developers, and infrastructure firms." },
  { icon: ShoppingBag, name: "FMCG", desc: "Sales officers, regional managers, brand managers, and trade-marketing professionals for fast-moving consumer goods companies across urban and rural India." },
  { icon: Zap, name: "Energy & Utilities", desc: "Technical and operations talent for conventional power, renewable energy (solar/wind), oil & gas, and utilities — from field engineers to sustainability officers." },
  { icon: Plane, name: "Aviation & Travel", desc: "Ground staff, cabin crew, aviation technicians, GDS specialists, and travel-tech professionals for airlines, airports, and online travel aggregators." },
  { icon: BookOpen, name: "Education & EdTech", desc: "Faculty, academic directors, curriculum designers, LMS developers, and growth marketers for K-12 schools, higher-education institutes, and ed-tech platforms." },
  { icon: Headphones, name: "BPO & Shared Services", desc: "Volume hiring for voice and non-voice processes, F&A BPO, HR shared services, and analytics COEs — covering agents, team leads, quality analysts, and managers." },
];

export function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-cta py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Sector-Dedicated Expertise</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Octo-Intra Solutions deploys specialists who know your industry's language, benchmarks, and talent landscape — not generalists reading from a brief.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div key={i} className="bg-card border border-border rounded-2xl shadow-card p-6 hover:shadow-elegant hover:border-secondary transition-all group flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-soft shrink-0 group-hover:bg-secondary transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg leading-snug">{ind.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{ind.desc}</p>
                <button className="mt-5 self-start inline-flex items-center gap-1 text-sm text-primary font-medium hover:text-secondary transition">
                  View Jobs <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-primary-soft border-t border-primary/10 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary mb-4">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">Don't see your sector?</h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            We cover 12+ industries and growing. If your sector isn't listed, our cross-functional recruiters can still help — contact us and we'll find a solution.
          </p>
          <a href="/contact" className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-secondary transition">Contact Our Team</a>
        </div>
      </section>
    </div>
  );
}
