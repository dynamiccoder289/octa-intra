import { useState } from "react";
import { Search, MapPin, DollarSign, Tag, ChevronRight } from "lucide-react";

const JOBS = [
  { title: "Full Stack Developer", company: "Leading SaaS Firm", location: "Bengaluru", type: "Full-time", salary: "₹12–20 LPA", industry: "IT & Technology" },
  { title: "Relationship Manager – SME", company: "Private Sector Bank", location: "Mumbai", type: "Full-time", salary: "₹8–13 LPA", industry: "BFSI" },
  { title: "HR Business Partner", company: "Manufacturing Conglomerate", location: "Pune", type: "Full-time", salary: "₹10–16 LPA", industry: "Manufacturing" },
  { title: "DevOps Engineer", company: "Tech Startup", location: "Remote", type: "Remote", salary: "₹15–22 LPA", industry: "IT & Technology" },
  { title: "Logistics Coordinator", company: "Pan-India 3PL", location: "Delhi NCR", type: "Contract", salary: "₹5–8 LPA", industry: "Logistics" },
  { title: "Pharmacovigilance Associate", company: "Global Pharma Co.", location: "Hyderabad", type: "Full-time", salary: "₹7–12 LPA", industry: "Healthcare & Pharma" },
];

const FILTERS = ["All", "Full-time", "Contract", "Remote"];
const TYPE_COLORS = {
  "Full-time": "bg-primary-soft text-primary",
  Contract: "bg-secondary/10 text-secondary",
  Remote: "bg-muted text-muted-foreground",
};

export function JobSearchPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = activeFilter === "All" ? JOBS : JOBS.filter((j) => j.type === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-cta py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Job Search</h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">Browse verified opportunities across industries and cities.</p>
          <div className="bg-white rounded-xl shadow-elegant p-3 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 flex-1 border border-border rounded-lg px-3 py-2">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input type="text" placeholder="Search by title or skill…" value={query} onChange={(e) => setQuery(e.target.value)}
                className="flex-1 outline-none text-foreground placeholder:text-muted-foreground bg-transparent text-sm" />
            </div>
            <button className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-secondary transition text-sm">Search</button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 mt-8">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${activeFilter === f ? "bg-primary text-white border-primary" : "bg-white text-foreground border-border hover:border-primary hover:text-primary"}`}>
              {f}
            </button>
          ))}
          <span className="ml-auto text-sm text-muted-foreground self-center">{filtered.length} results</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 mt-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((job, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl shadow-card p-6 flex flex-col gap-3 hover:shadow-elegant hover:border-secondary transition-all">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground text-base leading-snug">{job.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{job.company}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${TYPE_COLORS[job.type] || "bg-muted text-muted-foreground"}`}>{job.type}</span>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {job.salary}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-secondary font-medium"><Tag className="w-3 h-3" /> {job.industry}</div>
              <button className="mt-auto w-full bg-primary text-white text-sm font-semibold py-2 rounded-lg hover:bg-secondary transition flex items-center justify-center gap-1">
                Apply Now <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
