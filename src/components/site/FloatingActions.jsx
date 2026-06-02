import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp, X } from "lucide-react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [cookie, setCookie] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    try {
      if (localStorage.getItem("cookies-ok") === "1") setCookie(false);
    } catch {}
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const acceptCookies = () => {
    try { localStorage.setItem("cookies-ok", "1"); } catch {}
    setCookie(false);
  };

  return (
    <>
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant hover:scale-110 transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant hover:opacity-90 transition"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {cookie && (
        <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-40 rounded-xl bg-card border shadow-elegant p-5 animate-fade-up">
          <div className="flex items-start gap-3">
            <p className="text-sm text-foreground/80 flex-1">
              We use cookies to improve your experience and analyse traffic. By continuing, you accept our cookie policy.
            </p>
            <button onClick={() => setCookie(false)} className="text-muted-foreground hover:text-foreground" aria-label="Close">
              <X size={18} />
            </button>
          </div>
          <div className="mt-3 flex gap-2">
            <button onClick={acceptCookies} className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Accept</button>
            <button onClick={() => setCookie(false)} className="rounded-md border px-4 py-2 text-sm font-semibold">Decline</button>
          </div>
        </div>
      )}
    </>
  );
}
