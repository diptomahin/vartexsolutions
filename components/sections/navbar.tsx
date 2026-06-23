"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import { GradientButton } from "@/components/ui/gradient-button";
import { Icon } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const savedTheme = localStorage.getItem("vartex-theme");
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [theme, setTheme] = useState<Theme>(getPreferredTheme);
  const dark = theme === "dark";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = navItems
        .map((item) => item.href)
        .findLast((href) => {
          const element = document.querySelector(href);
          return element ? element.getBoundingClientRect().top <= 120 : false;
        });
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("vartex-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-white/75 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0b0f]/75"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                active === item.href
                  ? "bg-black text-white dark:bg-white dark:text-[#111]"
                  : "text-[var(--text-secondary)] hover:bg-black/5 hover:text-[var(--text-primary)] dark:hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="grid size-11 place-items-center rounded-full border border-black/10 bg-white/70 text-[var(--text-primary)] backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <Icon name={dark ? "sun" : "moon"} className="size-4" />
          </button>
          <GradientButton href="#contact">Book a Free Consultation</GradientButton>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-black/10 bg-white/80 text-[var(--text-primary)] dark:border-white/10 dark:bg-white/5 lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      {open ? (
        <div className="mx-4 mb-4 rounded-3xl border border-black/10 bg-white/95 p-3 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111117]/95 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 grid gap-2 px-1">
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 text-sm font-semibold text-[var(--text-primary)] dark:border-white/10 dark:bg-white/5"
            >
              <Icon name={dark ? "sun" : "moon"} className="size-4" />
              {dark ? "Light mode" : "Dark mode"}
            </button>
            <GradientButton href="#contact">Book a Free Consultation</GradientButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
