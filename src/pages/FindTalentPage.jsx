import { useState } from "react";
import { MessageSquare, Lightbulb, Rocket, TrendingUp, Users, FileText, Search, RefreshCw, DollarSign, Briefcase, GraduationCap, ShieldCheck, ChevronRight } from "lucide-react";

const STEPS = [
  { icon: MessageSquare, title: "Ask & Listen", desc: "We start with a deep-dive into your business goals, culture, and the exact profile you need — not just a job description." },
  { icon: Lightbulb, title: "We Solve", desc: "Our talent strategists map the right sourcing channels, compensation benchmarks, and timelines specific to your industry." },
  { icon: Rocket, title: "We Get to Work", desc: "Our pan-India recruiter network activates immediately — headhunting, screening, and presenting only the best-fit candidates." },
  { icon: TrendingUp, title: "We Get Better", desc: "Post-placement reviews, retention tracking, and continuous feedback loops ensure each engagement improves on the last." },
];

const SERVICES = [
  { icon: Users, title: "Permanent Staffing", desc: "End-to-end recruitment for full-time roles across functions and seniority levels." },
  { icon: RefreshCw, title: "Contract Staffing", desc: "Flexible workforce solutions for project-based, seasonal, and interim requirements." },
  { icon: Search, title: "Executive Search", desc: "Confidential, research-led search for CXO, VP, and Director-level leadership hires." },
  { icon: FileText, title: "RPO", desc: "Recruitment Process Outsourcing — we become your embedded talent acquisition team." },
  { icon: DollarSign, title: "Payroll & Compliance", desc: "Statutory compliance, payroll processing, and labour law advisory on one platform." },
  { icon: Briefcase, title: "HR Outsourcing", desc: "Outsource your HR operations — from onboarding to exit management — to our experts." },
  { icon: GraduationCap, title: "Workforce Training", desc: "Skill development programmes, leadership coaching, and functional training for teams." },
  { icon: ShieldCheck, title: "Background Verification", desc: "Comprehensive BGV — education, employment, criminal, and reference checks." },
];

export function FindTalentPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", requirement: "" });
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-cta py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">A Winning Workforce is Humanly Possible</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Smart staffing isn't just about filling seats — it's about finding people who move your business forward. Octo-Intra Solutions has been doing exactly that since 2005.</p>
          <button className="mt-8 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-white/90 transition">Start Hiring Today</button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Our Process</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2 mb-3">How We Work</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A proven 4-step process that delivers the right talent, every time.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="bg-card border border-border rounded-2xl shadow-card p-6 text-center hover:shadow-elegant transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-soft mb-4"><Icon className="w-7 h-7 text-primary" /></div>
                <div className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Step {i + 1}</div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-primary-soft py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Services</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2 mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From entry-level hiring to C-suite search — we cover the full talent spectrum.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={i} className="bg-card border border-border rounded-xl shadow-card p-5 hover:shadow-elegant hover:border-secondary transition-all group">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-soft mb-3"><Icon className="w-5 h-5 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">{svc.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{svc.desc}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:text-secondary transition">Learn more <ChevronRight className="w-3.5 h-3.5" /></a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl shadow-elegant p-8 lg:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Let's Connect</h2>
            <p className="text-muted-foreground">Tell us about your hiring need and we'll get back within one business day.</p>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Company</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company name"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="work@company.com"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98xxx xxxxx"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Hiring Requirement</label>
              <textarea name="requirement" value={form.requirement} onChange={handleChange} rows={4}
                placeholder="Describe your requirement — role, headcount, timeline, location…"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground resize-none" />
            </div>
            <button type="submit" className="w-full bg-primary text-white font-semibold py-2.5 rounded-lg hover:bg-secondary transition">Submit Enquiry</button>
          </form>
        </div>
      </section>
    </div>
  );
}
