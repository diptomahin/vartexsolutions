"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [cookieHidden, setCookieHidden] = useState<boolean | null>(null);

  useEffect(() => {
    const cookieTimer = window.setTimeout(() => {
      setCookieHidden(localStorage.getItem("vartex-cookie") === "accepted");
    }, 0);
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(cookieTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <a
        href="https://wa.me/8801700000000"
        aria-label="Chat with Vartex Solutions on WhatsApp"
        className="fixed bottom-20 right-5 z-40 grid size-12 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl transition hover:-translate-y-1"
      >
        <Icon name="message" className="size-5" />
      </a>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-5 z-40 grid size-12 place-items-center rounded-full border border-black/10 bg-white/80 text-[#111] shadow-2xl backdrop-blur transition dark:border-white/10 dark:bg-white/10 dark:text-white ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <Icon name="chevron-down" className="size-5 rotate-180" />
      </button>
      {cookieHidden === false ? (
        <div className="fixed inset-x-4 bottom-24 z-40 mx-auto max-w-3xl rounded-2xl border border-black/10 bg-white/90 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#111117]/90 sm:flex sm:items-center sm:justify-between sm:gap-5">
          <p className="text-sm leading-6 text-[var(--text-secondary)]">
            We use essential cookies to improve performance, analytics, and the booking experience.
          </p>
          <button
            type="button"
            onClick={() => {
              localStorage.setItem("vartex-cookie", "accepted");
              setCookieHidden(true);
            }}
            className="mt-3 rounded-full bg-[#111] px-5 py-2 text-sm font-semibold text-white dark:bg-white dark:text-[#111] sm:mt-0"
          >
            Accept
          </button>
        </div>
      ) : null}
    </>
  );
}
