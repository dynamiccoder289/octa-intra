const logos = ["Tata", "Infosys", "Reliance", "HDFC", "Wipro", "Adani", "Mahindra", "Bajaj", "ICICI", "L&T"];

export function Partners() {
  return (
    <section className="py-16 border-y bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">Trusted by Leading Organizations</p>
        <div className="mt-8 overflow-hidden">
          <div className="flex gap-12 animate-marquee w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="text-2xl font-bold text-primary/40 hover:text-primary transition-colors whitespace-nowrap">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
