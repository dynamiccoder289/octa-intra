import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown, Search, Phone } from "lucide-react";
import logoAsset from "@/assets/octo-intra-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Find a Job",
    href: "/find-job",
    mega: {
      heading: "For Job Seekers",
      blurb: "Discover roles, get noticed by top employers and grow your career.",
      items: [
        { title: "Job Search",     desc: "Browse thousands of live openings",         href: "/job-search" },
        { title: "Upload Resume",  desc: "Get matched with recruiters instantly",      href: "/upload-resume" },
        { title: "Career Advice",  desc: "Interview tips, CV templates & guides",      href: "/career-advice" },
        { title: "Job Alerts",     desc: "Personalised roles, straight to your inbox", href: "/job-alerts" },
      ],
    },
  },
  {
    label: "Find Talent",
    href: "/find-talent",
    mega: {
      heading: "For Employers",
      blurb: "Workforce solutions tailored to your hiring goals.",
      items: [
        { title: "Hire Employees",        desc: "Permanent & contract placements",        href: "/find-talent" },
        { title: "Workforce Solutions",   desc: "Flexible, scalable manpower models",     href: "/find-talent" },
        { title: "Staffing Services",     desc: "Volume hiring & temp staffing",          href: "/find-talent" },
        { title: "RPO",                   desc: "End-to-end recruitment outsourcing",     href: "/find-talent" },
      ],
    },
  },
  {
    label: "Industries",
    href: "/industries",
    mega: {
      heading: "Industry Expertise",
      blurb: "Deep specialisation across India's fastest-growing sectors.",
      items: [
        { title: "IT & Technology",      desc: "Engineers, product & data talent",     href: "/industries" },
        { title: "Healthcare & Pharma",  desc: "Clinical, nursing & allied health",    href: "/industries" },
        { title: "BFSI",                 desc: "Banking, insurance & fintech",         href: "/industries" },
        { title: "Manufacturing",        desc: "Plant, shop-floor & engineering",      href: "/industries" },
        { title: "Logistics",            desc: "Supply chain, fleet & last-mile",      href: "/industries" },
        { title: "FMCG & Retail",        desc: "Sales, distribution & store ops",      href: "/industries" },
      ],
    },
  },
  {
    label: "About Us",
    href: "/about",
    mega: {
      heading: "About Octo-Intra Solutions",
      blurb: "Two decades of trust, talent and transformation.",
      items: [
        { title: "Our Story",    desc: "Mission, vision & journey since 2005",    href: "/about" },
        { title: "Leadership",   desc: "Meet the people steering our company",    href: "/about" },
        { title: "Awards",       desc: "Recognition from industry & clients",     href: "/about" },
        { title: "CSR",          desc: "Building inclusive opportunity at scale", href: "/about" },
      ],
    },
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header className={`sticky top-0 z-50 w-full bg-white transition-all ${scrolled ? "shadow-card" : ""}`}>

      {/* ── Utility bar ───────────────────────────────────────── */}
      <div className="hidden lg:block border-b border-border/60">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-end gap-5 px-4 lg:px-8 text-xs">
          <Link to="/contact" className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-foreground/80 hover:text-primary hover:border-primary transition">
            <Phone size={12} /> Contact Us
          </Link>
          <button className="flex items-center gap-1.5 text-foreground/70 hover:text-primary transition">
            <Globe size={13} /> India (English)
          </button>
        </div>
      </div>

      {/* ── Main nav ──────────────────────────────────────────── */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logoAsset} alt="Octo-Intra Solutions logo" className="h-10 w-10 rounded-full object-contain" />
          <span className="text-lg font-bold tracking-tight text-primary leading-tight">
            Octo-Intra Solutions
            <span className="block text-[10px] font-medium text-muted-foreground tracking-wider uppercase">Pvt Ltd</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5" onMouseLeave={() => setHovered(null)}>
          {navItems.map((item) => (
            <div key={item.label} className="relative" onMouseEnter={() => setHovered(item.label)}>
              <Link
                to={item.href}
                className={`flex items-center gap-1 px-4 py-3 text-[14px] font-semibold transition-colors rounded-md ${
                  isActive(item.href)
                    ? "text-primary bg-primary-soft"
                    : "text-foreground hover:text-primary hover:bg-primary-soft/60"
                }`}
              >
                {item.label}
                {item.mega && (
                  <ChevronDown size={13} className={`transition-transform duration-200 ${hovered === item.label ? "rotate-180" : ""}`} />
                )}
              </Link>

              {/* Mega menu dropdown */}
              {item.mega && hovered === item.label && (
                <div className="absolute left-1/2 top-full pt-2 z-50" style={{ transform: "translateX(-50%)" }}>
                  <div className="rounded-xl border bg-card shadow-elegant overflow-hidden grid animate-fade-in"
                    style={{ width: item.mega.items.length > 4 ? "680px" : "560px", gridTemplateColumns: "200px 1fr" }}>

                    {/* Left: gradient panel */}
                    <div className="bg-gradient-cta p-6 text-white">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent">{item.label}</p>
                      <h4 className="mt-2 text-base font-bold leading-snug">{item.mega.heading}</h4>
                      <p className="mt-2 text-xs text-white/75 leading-relaxed">{item.mega.blurb}</p>
                    </div>

                    {/* Right: menu items grid */}
                    <ul className="p-3 grid grid-cols-2 gap-1 content-start">
                      {item.mega.items.map((mi) => (
                        <li key={mi.title}>
                          <Link to={mi.href} onClick={() => setHovered(null)}
                            className="block rounded-lg p-3 hover:bg-primary-soft transition group">
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary">{mi.title}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground leading-snug">{mi.desc}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Search button */}
          <button className="ml-1 flex items-center gap-1.5 px-3 py-2 text-[14px] font-semibold text-foreground hover:text-primary hover:bg-primary-soft/60 rounded-md transition">
            <Search size={15} />
          </button>

          {/* CTAs */}
          <div className="ml-3 flex items-center gap-2">
            <Link to="/upload-resume" className="rounded-md border border-primary/30 px-4 py-1.5 text-sm font-semibold text-primary hover:bg-primary-soft transition">
              Upload CV
            </Link>
            <Link to="/find-job" className="rounded-md bg-primary px-4 py-1.5 text-sm font-semibold text-white hover:bg-secondary transition">
              Find Jobs
            </Link>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-primary p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────── */}
      {open && (
        <div className="lg:hidden border-t bg-background px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto shadow-elegant">
          {navItems.map((item) => (
            <details key={item.label} className="group">
              <summary className="flex items-center justify-between py-2.5 px-2 text-sm font-semibold cursor-pointer list-none rounded-md hover:bg-primary-soft transition">
                <Link to={item.href} className={`flex-1 ${isActive(item.href) ? "text-primary" : "text-foreground"}`}>
                  {item.label}
                </Link>
                {item.mega && <ChevronDown size={14} className="group-open:rotate-180 transition text-muted-foreground" />}
              </summary>
              {item.mega && (
                <ul className="pl-4 pb-2 pt-1 space-y-0.5">
                  {item.mega.items.map((mi) => (
                    <li key={mi.title}>
                      <Link to={mi.href} className="block py-2 px-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary-soft rounded-md transition">
                        {mi.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </details>
          ))}

          <div className="flex gap-2 pt-3 border-t mt-2">
            <Link to="/upload-resume" className="flex-1 rounded-md border border-primary/20 px-3 py-2 text-center text-sm font-semibold text-primary hover:bg-primary-soft transition">
              Upload CV
            </Link>
            <Link to="/find-job" className="flex-1 rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white hover:bg-secondary transition">
              Find Jobs
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
