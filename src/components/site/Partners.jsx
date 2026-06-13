const logos = [
  "Tata Group", "Infosys", "Reliance", "HDFC Bank",
  "Wipro", "Adani Group", "Mahindra", "Bajaj Finserv",
  "ICICI Bank", "L&T", "HCL Technologies", "ITC Limited",
];

export function Partners() {
  return (
    <section className="py-14 border-y bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by 800+ leading organisations across India
        </p>
        <div className="mt-8 overflow-hidden">
          <div className="flex gap-14 animate-marquee w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="text-lg font-bold text-primary/30 hover:text-secondary transition-colors whitespace-nowrap cursor-default"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
