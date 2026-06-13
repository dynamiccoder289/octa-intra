import { useState } from "react";
import { Bell, CheckCircle } from "lucide-react";

const LOCATIONS = ["All India", "Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Chennai", "Kolkata"];

export function JobAlertsPage() {
  const [form, setForm] = useState({ name: "", email: "", preferredRole: "", location: "All India", jobType: "both", frequency: "weekly" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="bg-card border border-border rounded-2xl shadow-elegant p-10 text-center max-w-md w-full">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-soft mb-4">
            <CheckCircle className="w-9 h-9 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Alert Created!</h2>
          <p className="text-muted-foreground text-sm mb-6">
            We'll send you <strong className="text-foreground">{form.frequency === "daily" ? "daily" : "weekly"}</strong> updates for{" "}
            <strong className="text-foreground">{form.preferredRole || "your role"}</strong> in{" "}
            <strong className="text-foreground">{form.location}</strong>.
          </p>
          <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", preferredRole: "", location: "All India", jobType: "both", frequency: "weekly" }); }}
            className="bg-primary text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-secondary transition text-sm">
            Create Another Alert
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-cta py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Set Up Job Alerts</h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">Never miss the right opportunity. Get personalised job alerts delivered to your inbox as soon as matching roles are posted.</p>
        </div>
      </section>

      <section className="mx-auto max-w-lg px-4 lg:px-8 py-14">
        <div className="bg-card border border-border rounded-2xl shadow-elegant p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-soft">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Configure Your Alert</h2>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required
                className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required
                className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Preferred Role</label>
              <input type="text" name="preferredRole" value={form.preferredRole} onChange={handleChange} placeholder="e.g. Data Scientist, HR Manager, Sales Executive…" required
                className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Preferred Location</label>
              <select name="location" value={form.location} onChange={handleChange}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground">
                {LOCATIONS.map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Job Type</label>
              <div className="flex flex-wrap gap-4">
                {[{ value: "full-time", label: "Full-time" }, { value: "contract", label: "Contract" }, { value: "both", label: "Both" }].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                    <input type="radio" name="jobType" value={opt.value} checked={form.jobType === opt.value} onChange={handleChange} className="accent-primary w-4 h-4" />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Alert Frequency</label>
              <div className="flex flex-wrap gap-4">
                {[{ value: "daily", label: "Daily" }, { value: "weekly", label: "Weekly" }].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                    <input type="radio" name="frequency" value={opt.value} checked={form.frequency === opt.value} onChange={handleChange} className="accent-primary w-4 h-4" />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-secondary transition flex items-center justify-center gap-2">
              <Bell className="w-4 h-4" /> Activate Job Alert
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
