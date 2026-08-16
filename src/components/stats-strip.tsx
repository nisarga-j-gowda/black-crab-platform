'use client';

import { useEffect, useRef, useState } from 'react';
import { businessStats } from '@/lib/site';

function AnimatedCount({ value }: { value: string }) {
  const [display, setDisplay] = useState(value);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (value !== '100K+' || !inView) return;
    let cancelled = false;
    const duration = 900;
    const start = performance.now();
    const animate = (now: number) => {
      if (cancelled) return;
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.round(100000 * progress);
      setDisplay(current >= 100000 ? '100K+' : `${Math.max(1, Math.round(current / 1000))}K+`);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    return () => {
      cancelled = true;
    };
  }, [inView, value]);

  useEffect(() => {
    setDisplay(value);
  }, [value]);

  return <p ref={ref}>{display}</p>;
}

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-5 lg:px-8">
      <div className="grid gap-4 md:grid-cols-5">
        {businessStats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
            <AnimatedCount value={stat.value} />
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">{stat.label}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
