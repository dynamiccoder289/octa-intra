import { useState, useRef } from "react";
import { Upload, CheckCircle, X, FileText } from "lucide-react";

const LOCATIONS = ["Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad", "Remote / WFH"];

export function UploadResumePage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", currentRole: "", coverNote: "" });
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef(null);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const toggleLocation = (loc) => setSelectedLocations((prev) => prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]);
  const handleFile = (e) => { const f = e.target.files?.[0]; if (f) setFile(f); };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="bg-card border border-border rounded-2xl shadow-elegant p-10 text-center max-w-md w-full">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-soft mb-4">
            <CheckCircle className="w-9 h-9 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Resume Submitted!</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Thank you, {form.name || "Candidate"}. Our team will review your profile and reach out when a relevant opportunity arises.
          </p>
          <button onClick={() => setSubmitted(false)} className="bg-primary text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-secondary transition text-sm">
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-cta py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Upload Your Resume</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Share your profile with Octo-Intra Solutions and let our recruiters connect you with the right opportunity — before it's even advertised.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 lg:px-8 py-12">
        <div className="bg-card border border-border rounded-2xl shadow-elegant p-8 lg:p-10">
          <h2 className="text-xl font-bold text-foreground mb-6">Your Details</h2>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required
                className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98xxx xxxxx"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Current Role / Designation</label>
              <input type="text" name="currentRole" value={form.currentRole} onChange={handleChange} placeholder="e.g. Senior Software Engineer at Infosys"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Preferred Location(s)</label>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((loc) => (
                  <button key={loc} type="button" onClick={() => toggleLocation(loc)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${selectedLocations.includes(loc) ? "bg-primary text-white border-primary" : "bg-white text-foreground border-border hover:border-primary"}`}>
                    {loc}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Upload Resume</label>
              {file ? (
                <div className="flex items-center gap-3 bg-primary-soft border border-primary/20 rounded-lg px-4 py-3">
                  <FileText className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground flex-1 truncate">{file.name}</span>
                  <button type="button" onClick={() => { setFile(null); if (fileRef.current) fileRef.current.value = ""; }} className="text-muted-foreground hover:text-foreground">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div onClick={() => fileRef.current?.click()} className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary transition-colors group">
                  <Upload className="w-8 h-8 text-muted-foreground group-hover:text-primary mx-auto mb-2 transition-colors" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag & drop your resume</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX — up to 5 MB</p>
                </div>
              )}
              <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFile} />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Cover Note <span className="text-muted-foreground font-normal">(optional)</span></label>
              <textarea name="coverNote" value={form.coverNote} onChange={handleChange} rows={4}
                placeholder="Briefly describe your experience, what you're looking for, and any specific industries or roles you're targeting…"
                className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary bg-background text-foreground placeholder:text-muted-foreground resize-none" />
            </div>
            <button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-secondary transition flex items-center justify-center gap-2">
              <Upload className="w-4 h-4" /> Submit Resume
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
