import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";

const OFFICES = [
  { city: "Mumbai HQ", address: "Level 12, Platina Business Park, Bandra Kurla Complex, Mumbai – 400 051", phone: "+91 22 4567 8900" },
  { city: "Bengaluru", address: "4th Floor, Prestige Tower, MG Road, Bengaluru – 560 001", phone: "+91 80 4567 1234" },
  { city: "Delhi NCR", address: "Unit 801, DLF Cyber Hub, Phase III, Gurugram – 122 002", phone: "+91 124 456 7890" },
];

export function ContactPage() {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", company: "", enquiryType: "", message: "" });
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-cta py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Let's Start a Conversation</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">Whether you're looking for your next role or your next great hire, our team is ready to help. We'll respond within one business day.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-card border border-border rounded-2xl shadow-card p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your full name"
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com"
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98xxx xxxxx"
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Company</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company name (optional)"
                    className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Enquiry Type</label>
                <select name="enquiryType" value={form.enquiryType} onChange={handleChange}
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground">
                  <option value="">Select enquiry type</option>
                  <option>General</option><option>Job Seeker</option><option>Employer</option><option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help you?"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground resize-none" />
              </div>
              <button type="submit" className="w-full bg-primary text-white font-semibold py-2.5 rounded-lg hover:bg-secondary transition">Send Message</button>
            </form>
          </div>

          <div className="space-y-5">
            {[
              { icon: MapPin, title: "Head Office", lines: ["Level 12, Platina Business Park, Bandra Kurla Complex, Mumbai – 400 051"] },
              { icon: Phone, title: "Phone", lines: ["+91 22 4567 8900", "+91 98000 00001 (WhatsApp)"] },
              { icon: Mail, title: "Email", lines: ["hello@octo-intra.com", "careers@octo-intra.com"] },
              { icon: Clock, title: "Business Hours", lines: ["Mon – Fri: 9:00 AM – 6:30 PM", "Saturday: 10:00 AM – 2:00 PM"] },
            ].map(({ icon: Icon, title, lines }, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl shadow-card p-5 flex gap-4 items-start">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-soft shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">{title}</h4>
                  {lines.map((l, j) => <p key={j} className="text-sm text-muted-foreground">{l}</p>)}
                </div>
              </div>
            ))}
            <div className="bg-gradient-cta rounded-2xl min-h-[140px] flex items-center justify-center">
              <div className="text-center text-white/80 text-sm">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-white" />
                <span>Map — Bandra Kurla Complex, Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-soft border-t border-primary/10 py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((o, i) => (
              <div key={i} className="bg-card border border-border rounded-xl shadow-card p-6 hover:shadow-elegant transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-soft shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{o.city}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{o.address}</p>
                <p className="text-sm text-primary font-medium">{o.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
