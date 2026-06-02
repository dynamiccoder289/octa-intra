import { useState } from "react";
import { ClipboardList, Users, CheckCircle2, UserPlus, Sparkles, Briefcase } from "lucide-react";

const employerSteps = [
  { icon: ClipboardList, title: "Post a Requirement", desc: "Tell us about the role, skills and timeline." },
  { icon: Users, title: "We Source Candidates", desc: "Pre-vetted, shortlisted profiles within 48 hours." },
  { icon: CheckCircle2, title: "Hire the Best", desc: "Interview, onboard and start — we handle the rest." },
];

const seekerSteps = [
  { icon: UserPlus, title: "Register", desc: "Create a profile and upload your resume in 2 minutes." },
  { icon: Sparkles, title: "Get Matched", desc: "Our experts match you with roles that fit your goals." },
  { icon: Briefcase, title: "Get Hired", desc: "Interview prep, offer support and a smooth onboarding." },
];

export function HowItWorks() {
  const [tab, setTab] = useState("employer");
  const steps = tab === "employer" ? employerSteps : seekerSteps;

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Process</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">How it works</h2>

          <div className="mt-8 inline-flex rounded-full border bg-card p-1">
            <button
              onClick={() => setTab("employer")}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition ${tab === "employer" ? "bg-primary text-primary-foreground" : "text-foreground/70"}`}
            >
              For Employers
            </button>
            <button
              onClick={() => setTab("seeker")}
              className={`px-6 py-2 text-sm font-semibold rounded-full transition ${tab === "seeker" ? "bg-primary text-primary-foreground" : "text-foreground/70"}`}
            >
              For Job Seekers
            </button>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 relative">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl border bg-card p-8 shadow-card">
              <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-sm">
                {i + 1}
              </div>
              <Icon size={32} className="text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
