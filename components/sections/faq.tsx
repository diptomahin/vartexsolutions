"use client";

import { useState } from "react";
import { faqs } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-padding bg-white dark:bg-[#0b0b0f]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Answers before we start the conversation." />
        <div className="space-y-3">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="rounded-3xl border border-black/10 bg-[#f7f7f8] dark:border-white/10 dark:bg-white/[0.04]">
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-heading text-lg font-semibold"
              >
                {question}
                <Icon name="chevron-down" className={`size-5 shrink-0 transition ${open === index ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 leading-7 text-[var(--text-secondary)]">{answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
