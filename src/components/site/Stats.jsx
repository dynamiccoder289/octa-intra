import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 75000, suffix: "+", label: "Successful Placements" },
  { value: 800,   suffix: "+", label: "Client Organisations" },
  { value: 25,    suffix: "+", label: "Years of Expertise" },
  { value: 35,    suffix: "",  label: "Cities Pan-India" },
];

function Counter({ to, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1800;
          const step = (t) => {
            const p = Math.min((t - start) / dur, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-extrabold text-primary">
      {n.toLocaleString()}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-y bg-primary-soft">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center space-y-1">
            <Counter to={s.value} suffix={s.suffix} />
            <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
