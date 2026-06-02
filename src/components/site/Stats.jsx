import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50000, suffix: "+", label: "Placements" },
  { value: 500, suffix: "+", label: "Clients" },
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 28, suffix: "", label: "Cities Pan-India" },
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
          const dur = 1600;
          const step = (t) => {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.floor(p * to));
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
    <span ref={ref} className="text-4xl lg:text-5xl font-bold text-primary">
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-y bg-primary-soft">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter to={s.value} suffix={s.suffix} />
            <p className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
