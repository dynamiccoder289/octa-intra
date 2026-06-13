export function CtaBanner() {
  return (
    <section id="contact" className="py-20 bg-gradient-cta relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: copy */}
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              A winning workforce is<br />
              <span className="text-accent">humanly possible.</span>
            </h2>
            <p className="mt-4 text-white/80 text-base leading-relaxed">
              Whether you're a startup, SME or multinational — talk to one of our
              workforce specialists and get a tailored hiring plan within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-lg bg-accent text-foreground px-7 py-3.5 font-semibold hover:opacity-90 transition shadow-elegant"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/10 border border-white/30 text-white px-7 py-3.5 font-semibold hover:bg-white/20 transition"
              >
                Post a Job
              </a>
            </div>
          </div>

          {/* Right: two cards for job seekers and employers */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="rounded-xl bg-white/10 border border-white/20 p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">For Job Seekers</p>
              <h3 className="font-bold text-base leading-snug">Find your next opportunity</h3>
              <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                Create a free profile, access training resources and get matched to roles that fit your goals.
              </p>
              <a href="#" className="mt-4 inline-block text-xs font-semibold text-accent hover:underline">
                Start now →
              </a>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl bg-white/10 border border-white/20 p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">For Employers</p>
              <h3 className="font-bold text-base leading-snug">Build a high-performing team</h3>
              <p className="text-xs text-white/70 mt-1.5 leading-relaxed">
                From permanent hires to RPO solutions — we align talent strategy with your business objectives.
              </p>
              <a href="#" className="mt-4 inline-block text-xs font-semibold text-accent hover:underline">
                Let's connect →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
