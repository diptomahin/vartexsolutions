"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/types/site";

export function Counter({ value, suffix, label }: Stat) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const started = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - started) / 1200, 1);
        setCount(Math.round(value * progress));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
      <div className="font-heading text-4xl font-semibold gradient-text">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold text-[var(--text-secondary)]">{label}</div>
    </div>
  );
}
