import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown, Search, Phone } from "lucide-react";
import logoAsset from "@/assets/octo-intra-logo.png";

const navItems = [
  { label: "Home", href: "#" },
  {
    label: "Find a Job",
    href: "#jobs",
    mega: {
      heading: "For Job Seekers",
      blurb: "Discover roles, get noticed by top employers and grow your career.",
      items: [
        { title: "Job Search", desc: "Browse thousands of live openings" },
        { title: "Upload Resume", desc: "Get matched with recruiters instantly" },
        { title: "Career Advice", desc: "Interview tips, CV templates & guides" },
        { title: "Job Alerts", desc: "Personalised roles, straight to your inbox" },
      ],
    },
  },
  {
    label: "Find Talent",
    href: "#employers",
    mega: {
      heading: "For Employers",
      blurb: "Workforce solutions tailored to your hiring goals.",
      items: [
        { title: "Hire Employees", desc: "Permanent & contract placements" },
        { title: "Workforce Solutions", desc: "Flexible, scalable manpower models" },
        { title: "Staffing Services", desc: "Volume hiring & temp staffing" },
        { title: "RPO", desc: "End-to-end recruitment outsourcing" },
      ],
    },
  },
  {
    label: "Industries",
    href: "#industries",
    mega: {
      heading: "Industry Expertise",
      blurb: "Deep specialisation across India's fastest-growing sectors.",
      items: [
        { title: "IT & Technology", desc: "Engineers, product & data talent" },
        { title: "Healthcare", desc: "Clinical, nursing & allied health" },
        { title: "Finance & Banking", desc: "BFSI, fintech & advisory" },
        { title: "Manufacturing", desc: "Plant, shop-floor & engineering" },
        { title: "Retail & E-commerce", desc: "Store ops, supply chain & CX" },
      ],
    },
  },
  {
    label: "About Us",
    href: "#about",
    mega: {
      heading: "About Hirelink",
      blurb: "Two decades of trust, talent and transformation.",
      items: [
        { title: "Our Story", desc: "Mission, vision & journey since 2005" },
        { title: "Leadership", desc: "Meet the people steering Hirelink" },
        { title: "Awards", desc: "Recognition from industry & clients" },
        { title: "CSR", desc: "Building inclusive opportunity at scale" },
        { title: "Press", desc: "News, media coverage & releases" },
      ],
    },
  },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      {/* Utility bar */}
      <div className="hidden lg:block border-b border-border/60">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-5 px-4 lg:px-8 text-xs">
          <a href="#contact" className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-foreground/80 hover:text-primary hover:border-primary transition">
            <Phone size={12} /> Contact Us
          </a>
          <button className="flex items-center gap-1.5 text-foreground/70 hover:text-primary">
            <Globe size={13} /> India (English)
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logoAsset} alt="Octo-Intra Solutions logo" className="h-10 w-10 rounded-full object-contain" />
          <span className="text-lg font-bold tracking-tight text-primary leading-tight">
            Octo-Intra Solutions
            <span className="block text-[10px] font-medium text-muted-foreground tracking-wider uppercase">Pvt Ltd</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setHovered(item.label)}
            >
              <a
                href={item.href}
                className={`flex items-center gap-1 px-4 py-3 text-[15px] font-semibold transition-colors ${
                  hovered === item.label ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {item.label}
                {item.mega && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${hovered === item.label ? "rotate-180" : ""}`}
                  />
                )}
              </a>

              {item.mega && hovered === item.label && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 z-50">
                  <div className="w-[640px] rounded-xl border bg-card shadow-elegant overflow-hidden grid grid-cols-[220px_1fr] opacity-0 animate-fade-in">
                    <div className="bg-gradient-cta p-6 text-primary-foreground">
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {item.label}
                      </p>
                      <h4 className="mt-2 text-lg font-bold leading-snug">{item.mega.heading}</h4>
                      <p className="mt-2 text-xs text-white/80 leading-relaxed">{item.mega.blurb}</p>
                    </div>
                    <ul className="p-3 grid grid-cols-2 gap-1">
                      {item.mega.items.map((mi) => (
                        <li key={mi.title}>
                          <a
                            href="#"
                            className="block rounded-lg p-3 hover:bg-primary-soft transition group"
                          >
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                              {mi.title}
                            </p>
                            <p className="mt-0.5 text-xs text-muted-foreground leading-snug">
                              {mi.desc}
                            </p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
          <button className="ml-2 flex items-center gap-1.5 px-4 py-3 text-[15px] font-semibold text-foreground hover:text-accent transition">
            <Search size={16} /> Search
          </button>
        </nav>

        <button className="lg:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <details key={item.label} className="group">
              <summary className="flex items-center justify-between py-2 text-sm font-medium cursor-pointer list-none">
                {item.label}
                {item.mega && <ChevronDown size={14} className="group-open:rotate-180 transition" />}
              </summary>
              {item.mega && (
                <ul className="pl-3 pb-2 space-y-1">
                  {item.mega.items.map((mi) => (
                    <li key={mi.title}>
                      <a href="#" className="block py-1.5 text-sm text-muted-foreground hover:text-primary">
                        {mi.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </details>
          ))}
          <div className="flex gap-2 pt-3 border-t">
            <a href="#" className="flex-1 rounded-md border border-primary/20 px-3 py-2 text-center text-sm font-semibold text-primary">
              Login
            </a>
            <a href="#" className="flex-1 rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground">
              Find Jobs
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
