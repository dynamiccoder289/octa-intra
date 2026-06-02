import { Mail, Phone } from "lucide-react";

// Custom social media icons as inline SVGs
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export function Footer() {
  const socialIcons = [
    { Icon: LinkedInIcon, href: "#" },
    { Icon: TwitterIcon, href: "#" },
    { Icon: FacebookIcon, href: "#" },
    { Icon: InstagramIcon, href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground font-bold">HR</div>
            <span className="text-lg font-bold">Hirelink</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">India's trusted staffing partner — connecting talent with opportunity since 2005.</p>
          <div className="mt-5 flex gap-3">
            {socialIcons.map(({ Icon, href }, i) => (
              <a key={i} href={href} className="h-9 w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {["About Us", "Careers", "Insights", "Contact", "Privacy Policy"].map((l) => (
              <li key={l}><a href="#" className="hover:text-accent transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {["Permanent Staffing", "Contract Staffing", "Executive Search", "Payroll", "HR Outsourcing"].map((l) => (
              <li key={l}><a href="#" className="hover:text-accent transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Stay in the loop</h4>
          <p className="text-sm text-white/70">Monthly insights on hiring, compliance and workforce trends.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" className="w-full rounded-md bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-white/50 outline-none focus:border-accent" />
            <button className="rounded-md bg-accent px-4 text-sm font-semibold text-accent-foreground hover:opacity-90">Join</button>
          </form>
          <div className="mt-5 space-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2"><Mail size={14} /> hello@hirelink.in</p>
            <p className="flex items-center gap-2"><Phone size={14} /> +91 22 4000 1234</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Hirelink Staffing Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
