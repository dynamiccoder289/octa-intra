import { MapPin, IndianRupee, Building, Clock } from "lucide-react";

const jobs = [
  {
    title: "Senior Software Engineer",
    company: "Leading IT Services Firm",
    location: "Bengaluru",
    type: "Full-time",
    salary: "₹18–28 LPA",
    industry: "IT & Technology",
  },
  {
    title: "Plant Operations Manager",
    company: "Large Manufacturing Group",
    location: "Ahmedabad",
    type: "Full-time",
    salary: "₹15–22 LPA",
    industry: "Manufacturing",
  },
  {
    title: "Relationship Manager – SME Banking",
    company: "Top Private Sector Bank",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹8–13 LPA",
    industry: "BFSI",
  },
  {
    title: "Logistics & Supply Chain Coordinator",
    company: "Leading Logistics Platform",
    location: "Gurugram",
    type: "Contract",
    salary: "₹6–9 LPA",
    industry: "Logistics",
  },
  {
    title: "Clinical Nurse Lead",
    company: "Multi-Specialty Hospital Chain",
    location: "Chennai",
    type: "Full-time",
    salary: "₹7–11 LPA",
    industry: "Healthcare",
  },
  {
    title: "Area Sales Manager – FMCG",
    company: "National FMCG Brand",
    location: "Pune",
    type: "Full-time",
    salary: "₹9–14 LPA",
    industry: "FMCG",
  },
];

const typeColors = {
  "Full-time": "bg-primary-soft text-primary",
  "Contract":  "bg-secondary/10 text-secondary",
};

export function FeaturedJobs() {
  return (
    <section id="jobs" className="py-20 lg:py-28 bg-primary-soft">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Open roles</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">Featured jobs this week</h2>
            <p className="mt-2 text-muted-foreground">
              Matching skills to roles across India's top employers — quickly and effectively.
            </p>
          </div>
          <a
            href="#"
            className="rounded-lg border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            View All Openings
          </a>
        </div>

        {/* Job cards */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((j) => (
            <div
              key={j.title}
              className="group rounded-xl bg-card border p-6 hover:shadow-elegant hover:border-secondary transition-all"
            >
              {/* Type + industry */}
              <div className="flex items-center justify-between gap-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[j.type]}`}>
                  {j.type}
                </span>
                <span className="text-xs text-muted-foreground">{j.industry}</span>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-base font-bold text-foreground group-hover:text-primary transition leading-snug">
                {j.title}
              </h3>

              {/* Company */}
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Building size={13} /> {j.company}
              </p>

              {/* Meta */}
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin size={12} /> {j.location}</span>
                <span className="flex items-center gap-1"><IndianRupee size={12} /> {j.salary}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> Posted recently</span>
              </div>

              {/* CTA */}
              <button className="mt-5 w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Can't find the right role?{" "}
          <a href="#" className="font-semibold text-primary hover:text-secondary transition">
            Upload your resume
          </a>{" "}
          and we'll match you proactively.
        </p>
      </div>
    </section>
  );
}
