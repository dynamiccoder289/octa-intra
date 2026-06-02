import { MapPin, IndianRupee, Building } from "lucide-react";

const jobs = [
  { title: "Senior Software Engineer", company: "TechCorp India", location: "Bengaluru", type: "Full-time", salary: "₹18-28 LPA" },
  { title: "Plant Operations Manager", company: "Adani Industries", location: "Ahmedabad", type: "Full-time", salary: "₹15-22 LPA" },
  { title: "Relationship Manager", company: "HDFC Bank", location: "Mumbai", type: "Full-time", salary: "₹8-12 LPA" },
  { title: "Logistics Coordinator", company: "Delhivery", location: "Gurugram", type: "Contract", salary: "₹6-9 LPA" },
  { title: "Clinical Nurse Lead", company: "Apollo Hospitals", location: "Chennai", type: "Full-time", salary: "₹7-10 LPA" },
  { title: "Retail Store Manager", company: "Reliance Retail", location: "Pune", type: "Full-time", salary: "₹5-8 LPA" },
];

export function FeaturedJobs() {
  return (
    <section id="jobs" className="py-20 lg:py-28 bg-primary-soft">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Open roles</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-primary">Featured jobs this week</h2>
          </div>
          <a href="#" className="rounded-md border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition">
            View All Jobs
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((j) => (
            <div key={j.title} className="rounded-xl bg-card border p-6 hover:shadow-elegant transition">
              <div className="flex items-start justify-between">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${j.type === "Contract" ? "bg-accent/10 text-accent" : "bg-primary-soft text-primary"}`}>
                  {j.type}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{j.title}</h3>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Building size={14} /> {j.company}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin size={14} /> {j.location}</span>
                <span className="flex items-center gap-1"><IndianRupee size={14} /> {j.salary}</span>
              </div>
              <button className="mt-5 w-full rounded-md bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
