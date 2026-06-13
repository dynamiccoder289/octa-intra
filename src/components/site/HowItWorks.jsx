import { useState } from "react";
import {
  MessageSquare, Lightbulb, Rocket, TrendingUp,
  UserPlus, BookOpen, Sparkles, Briefcase,
} from "lucide-react";

const employerSteps = [
  {
    icon: MessageSquare,
    title: "We Ask & Listen",
    desc: "We start by understanding your workforce challenges, KPIs, culture and upcoming talent needs — asking the right questions from day one.",
  },
  {
    icon: Lightbulb,
    title: "We Solve",
    desc: "Using deep industry knowledge and data-driven insight, we recommend the optimal hiring approach to meet your goals and optimise workforce costs.",
  },
  {
    icon: Rocket,
    title: "We Get to Work",
    desc: "Our recruiters attract top talent, run structured assessments and deliver shortlisted, interview-ready candidates within 48 hours.",
  },
  {
    icon: TrendingUp,
    title: "We Get Better",
    desc: "We conduct ongoing workforce reviews with you — refining our approach, sharing market intelligence and building a long-term partnership.",
  },
];

const seekerSteps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    desc: "Register in minutes, upload your resume and let our talent agents match you to roles that fit your skills, goals and salary expectations.",
  },
  {
    icon: BookOpen,
    title: "Access Free Training",
    desc: "Get instant access to e-learning programmes, skills assessments and career workshops to boost your employability — at no cost.",
  },
  {
    icon: Sparkles,
    title: "Get Matched",
    desc: "Our recruiters proactively connect you with opportunities from top employers across transportation, logistics, engineering, finance and more.",
  },
  {
    icon: Briefcase,
    title: "Get Hired & Grow",
    desc: "From interview coaching to offer negotiation and onboarding support — we're with you every step of the way, and beyond.",
  },
];

export function HowItWorks() {
  const [tab, setTab] = useState("employer");
  const steps = tab === "employer" ? employerSteps : seekerSteps;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Process</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">How we work with you</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A proven four-step approach that delivers the right talent — and keeps improving over time.
          </p>

          {/* Tab switcher */}
          <div className="mt-8 inline-flex rounded-full border bg-card p-1 shadow-card">
            <button
              onClick={() => setTab("employer")}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-all ${
                tab === "employer"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              For Employers
            </button>
            <button
              onClick={() => setTab("seeker")}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition-all ${
                tab === "seeker"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              For Job Seekers
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl border bg-card p-7 shadow-card">
              {/* Step number badge */}
              <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white font-bold text-sm shadow">
                {i + 1}
              </div>
              {/* Connector line (hide on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-4 -right-3 w-6 h-px bg-border z-10" />
              )}
              <Icon size={30} className="text-primary mt-2" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
