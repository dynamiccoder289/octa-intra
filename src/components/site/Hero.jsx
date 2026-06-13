import heroImg from "@/assets/hero-portrait.jpg";
import { ArrowRight, Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#031e30]">
      <img
        src={heroImg}
        alt="Workforce and recruitment solutions in India"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-right opacity-90"
      />
      {/* Left-to-right dark fade so headline is legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#031e30]/90 via-[#063B5C]/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-28 lg:py-44 min-h-[680px] flex items-center">
        <div className="max-w-2xl text-white animate-fade-up">

          {/* Eyebrow */}
          <span className="inline-block bg-secondary/20 border border-secondary/40 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            India's Trusted Workforce Partner — 25+ Years
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-extrabold leading-[1.06] tracking-tight">
            Right Talent.<br />
            Right Role.<br />
            <span className="text-accent">Right Now.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base lg:text-lg text-white/75 leading-relaxed">
            Octo-Intra Solutions connects India's top employers with skilled professionals
            across permanent, contract, and executive roles — powered by deep local expertise
            and a nationwide network of recruiters.
          </p>

          {/* Job search bar */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="flex flex-1 items-center gap-2 bg-white rounded-lg px-4 py-3 shadow-elegant">
              <Search size={18} className="text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Job title, skill or keyword…"
                className="flex-1 text-sm text-foreground outline-none placeholder:text-muted-foreground bg-transparent"
              />
            </div>
            <button className="rounded-lg bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 text-sm transition shadow-elegant whitespace-nowrap">
              Search Jobs
            </button>
          </div>

          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-accent transition-colors"
          >
            Learn more about Octo-Intra Solutions <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
