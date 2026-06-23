"use client";

import { useEffect, useState } from "react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Icon } from "@/components/ui/icon";
import { MotionDiv } from "@/components/ui/motion";

export function Hero() {
  const [pos, setPos] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setPos({
        x: Math.round((event.clientX / window.innerWidth) * 100),
        y: Math.round((event.clientY / window.innerHeight) * 100),
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-28 dark:bg-[#0b0b0f]"
      style={{
        backgroundImage: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(142,91,255,0.22), transparent 26rem)`,
      }}
    >
      <div className="hero-grid absolute inset-0 opacity-[0.45]" />
      <div className="absolute left-[8%] top-28 h-48 w-48 rounded-full bg-[#2ec7ff]/20 blur-3xl floating" />
      <div className="absolute right-[10%] top-40 h-64 w-64 rounded-full bg-[#ff00c8]/20 blur-3xl floating-delayed" />
      <div className="absolute bottom-24 left-[45%] h-44 w-44 rounded-full bg-[#8e5bff]/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <Icon name="sparkles" className="size-4 text-[#8e5bff]" />
            Premium software, commerce, and growth systems
          </div>
          <h1 className="font-heading text-5xl font-semibold leading-[0.98] text-[var(--text-primary)] sm:text-6xl lg:text-7xl xl:text-8xl">
            Transforming Ideas Into{" "}
            <span className="gradient-text">Powerful Digital Experiences</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
            We build high-performance websites, scalable software, eCommerce platforms, and
            digital growth strategies that help businesses thrive.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <GradientButton href="#contact">Get Started</GradientButton>
            <GradientButton href="#portfolio" variant="secondary">
              View Portfolio
            </GradientButton>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 34, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative rounded-[2rem] border border-black/10 bg-white/70 p-4 shadow-[0_40px_120px_rgba(17,17,17,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
            <div className="rounded-[1.5rem] border border-black/10 bg-[#0b0b0f] p-4 text-white shadow-inner">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="size-3 rounded-full bg-[#ff5f57]" />
                  <span className="size-3 rounded-full bg-[#febc2e]" />
                  <span className="size-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                  vartex.cloud
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
                <div className="rounded-2xl bg-white/[0.08] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-white/70">Launch velocity</span>
                    <span className="text-sm text-[#2ec7ff]">+42%</span>
                  </div>
                  <div className="h-44 rounded-xl bg-[linear-gradient(135deg,rgba(46,199,255,.24),rgba(142,91,255,.2),rgba(255,0,200,.22))] p-4">
                    <div className="mt-16 h-2 rounded-full bg-white/70" />
                    <div className="mt-3 h-2 w-3/4 rounded-full bg-white/40" />
                    <div className="mt-3 h-2 w-1/2 rounded-full bg-white/30" />
                  </div>
                </div>
                <div className="space-y-4">
                  {["Strategy", "Design", "Build"].map((item, index) => (
                    <div key={item} className="rounded-2xl bg-white/[0.08] p-4">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="grid size-8 place-items-center rounded-full gradient-surface text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className="font-semibold">{item}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/15">
                        <div
                          className="h-2 rounded-full gradient-surface"
                          style={{ width: `${72 + index * 8}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-16 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#14141b]/80">
            <Icon name="rocket" className="mb-3 size-5 text-[#ff00c8]" />
            <p className="text-sm font-semibold">Performance first</p>
            <p className="text-xs text-[var(--text-secondary)]">SEO, speed, scale</p>
          </div>
        </MotionDiv>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-black/10 bg-white/60 p-3 backdrop-blur md:block dark:border-white/10 dark:bg-white/5"
      >
        <Icon name="chevron-down" className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
