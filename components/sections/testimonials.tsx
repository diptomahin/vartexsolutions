"use client";

import { useState } from "react";
import { testimonials } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  return (
    <section className="section-padding bg-white dark:bg-[#0b0b0f]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Testimonials" title="Clients trust us to turn complexity into momentum." />
        <div className="rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-white/[0.04] md:p-10">
          <div className="mb-6 flex gap-1 text-[#ffb000]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon key={index} name="star" className="size-5 fill-current" />
            ))}
          </div>
          <p className="font-heading text-2xl leading-snug md:text-4xl">
            &ldquo;{testimonial.feedback}&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="grid size-14 place-items-center rounded-full gradient-surface font-bold text-white">
                {testimonial.avatar}
              </div>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-[var(--text-secondary)]">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => setActive(index)}
                  className={`size-3 rounded-full transition ${active === index ? "w-8 bg-[#8e5bff]" : "bg-black/15 dark:bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
