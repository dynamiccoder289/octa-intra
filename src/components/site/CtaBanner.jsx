export function CtaBanner() {
  return (
    <section id="contact" className="py-20 bg-gradient-cta relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="relative mx-auto max-w-5xl px-4 lg:px-8 text-center text-primary-foreground">
        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">Ready to build your <span className="text-accent">dream team?</span></h2>
        <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">Talk to one of our staffing experts and get a tailored hiring plan within 24 hours.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#" className="rounded-md bg-accent px-7 py-3.5 font-semibold text-accent-foreground hover:opacity-90 transition shadow-elegant">Contact Us</a>
          <a href="#" className="rounded-md bg-white text-primary px-7 py-3.5 font-semibold hover:opacity-90 transition">Post a Job</a>
        </div>
      </div>
    </section>
  );
}
