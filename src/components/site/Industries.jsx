import { Cpu, Factory, Landmark, Stethoscope, ShoppingBag, Truck, HardHat, Package } from "lucide-react";

const industries = [
  { icon: Cpu, label: "IT & Technology" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Landmark, label: "BFSI" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Truck, label: "Logistics" },
  { icon: HardHat, label: "Construction" },
  { icon: Package, label: "FMCG" },
];

export function Industries() {
  return (
    <section className="py-20 lg:py-28 bg-primary-soft">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Industries</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">Sectors we serve</h2>
          <p className="mt-3 text-muted-foreground">Deep specialization across India's most demanding industries.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-card border p-6 hover:border-accent hover:shadow-card transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground group-hover:bg-accent transition-colors">
                <Icon size={22} />
              </div>
              <p className="text-sm font-semibold text-foreground text-center">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
