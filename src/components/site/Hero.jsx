import heroImg from "@/assets/hero-portrait.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1a0f08]">
      <img
        src={heroImg}
        alt="Recruitment and workforce solutions in India"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-right opacity-95"
      />
      {/* Left-to-right dark fade so headline is legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-28 lg:py-44 min-h-[640px] flex items-center">
        <div className="max-w-2xl text-white animate-fade-up">
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase leading-[1.05] tracking-tight"
            style={{
              textShadow:
                "0 0 18px rgba(255,140,60,0.55), 0 0 40px rgba(255,102,0,0.35)",
            }}
          >
            Recruitment and<br />Workforce Solutions<br />in <span className="text-accent">India</span>
          </h1>

          <p className="mt-8 max-w-lg text-base lg:text-lg text-white/80 leading-relaxed">
            For over two decades, Octo-Intra Solutions has connected India's most ambitious
            employers with the talent that powers their growth.
          </p>

          <a
            href="#about"
            className="mt-10 inline-flex items-center gap-3 border-b-2 border-white pb-2 text-sm font-bold uppercase tracking-widest text-white hover:text-accent hover:border-accent transition-colors"
          >
            Learn more about Octo-Intra Solutions <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
