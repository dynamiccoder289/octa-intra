import { Trophy, Heart, Users } from "lucide-react";

const LEADERS = [
  { initials: "AM", name: "Arjun Mehta", title: "Chief Executive Officer", bio: "Arjun founded Octo-Intra Solutions in 2005 with a vision to transform how India recruits talent. With 30+ years across HR consulting and corporate leadership, he has steered the firm from a Mumbai boutique to a pan-India powerhouse." },
  { initials: "SR", name: "Sneha Rao", title: "Chief Operating Officer", bio: "Sneha oversees day-to-day operations, delivery quality, and client success across all 35 offices. Her background in large-scale RPO engagements has been central to the firm's consistent 95%+ client retention rate." },
  { initials: "VN", name: "Vikram Nair", title: "Chief Technology Officer", bio: "Vikram leads the digital transformation of Octo-Intra's talent platform — from AI-driven candidate matching to compliance automation. He brings deep expertise in HR tech, data engineering, and SaaS product development." },
];

const STATS = [
  { value: "75,000+", label: "Placements" },
  { value: "800+", label: "Clients" },
  { value: "20+", label: "Years" },
  { value: "35", label: "Cities" },
];

const AWARDS = [
  { year: "2023", title: "Best Staffing Firm – BFSI", body: "Indian Staffing Federation Annual Awards" },
  { year: "2022", title: "Excellence in Executive Search", body: "NASSCOM HR Summit Recognition" },
  { year: "2020", title: "Top 10 Recruitment Companies in India", body: "SHRM India HR Excellence Report" },
];

const CSR = [
  { title: "Opportunity Without Bias", desc: "Our structured interview frameworks and blind-CV screening programmes help employers hire based on merit — reducing unconscious bias across gender, caste, and socio-economic background." },
  { title: "First-Gen Workforce Ready", desc: "We partner with ITIs, community colleges, and NGOs to provide career counselling and placement support to first-generation job seekers from Tier-3 cities and rural communities." },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-cta py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Two Decades of Trust, Talent & Transformation</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Since 2005, Octo-Intra Solutions Pvt Ltd has been the trusted partner for organisations and professionals who believe the right match changes everything.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Our Story</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2 mb-5">Built on the Belief That People Come First</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm lg:text-base">
              <p>Octo-Intra Solutions was founded in Mumbai in 2005 by Arjun Mehta, a former HR director who saw a gap between what employers expected and what most recruitment agencies delivered — speed over substance. He set out to build something different.</p>
              <p>Starting with a team of eight and a focus on BFSI placements, the firm expanded organically into IT, Manufacturing, and Healthcare — always led by sector specialists. By 2012 we had offices in Bengaluru, Delhi, Hyderabad, and Chennai. Today we operate from 35 cities and counting.</p>
              <p>Our mission remains unchanged: connect the right talent with the right opportunity, at every level, across every industry, with the integrity that keeps both clients and candidates coming back.</p>
            </div>
          </div>
          <div className="bg-gradient-cta rounded-2xl min-h-[320px] flex items-center justify-center p-10 text-center">
            <div>
              <div className="text-5xl font-extrabold text-white mb-2">2005</div>
              <div className="text-white/80 text-lg font-medium mb-6">Founded in Mumbai</div>
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s, i) => (
                  <div key={i} className="bg-white/15 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div className="text-white/70 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="text-3xl lg:text-4xl font-extrabold text-white">{s.value}</div>
                <div className="text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Our Team</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2">Leadership You Can Trust</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERS.map((l, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl shadow-card p-7 hover:shadow-elegant transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-cta text-white text-xl font-bold mb-4">{l.initials}</div>
              <h3 className="font-semibold text-foreground text-lg">{l.name}</h3>
              <p className="text-secondary text-sm font-medium mb-3">{l.title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="bg-primary-soft py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Recognition</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2">Awards & Accolades</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AWARDS.map((a, i) => (
              <div key={i} className="bg-card border border-border rounded-xl shadow-card p-6 flex gap-4 items-start hover:shadow-elegant transition-shadow">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary-soft shrink-0">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-secondary font-semibold mb-1">{a.year}</div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{a.title}</h4>
                  <p className="text-xs text-muted-foreground">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Social Impact</span>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mt-2">Inclusive Hiring, Lasting Impact</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">We believe talent has no address. Octo-Intra Solutions actively drives programmes that make the workforce more equitable, diverse, and future-ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CSR.map((c, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl shadow-card p-7 flex gap-4 items-start hover:shadow-elegant transition-shadow">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-soft shrink-0">
                {i === 0 ? <Users className="w-6 h-6 text-primary" /> : <Heart className="w-6 h-6 text-primary" />}
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">{c.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
