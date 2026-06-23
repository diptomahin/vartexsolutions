"use client";

import { useMemo, useState } from "react";
import { portfolio } from "@/lib/site-data";
import { GradientButton } from "@/components/ui/gradient-button";
import { MotionDiv } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

const categories = ["All", "Corporate", "E-commerce", "SaaS", "Dashboard", "WordPress", "Mobile"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const projects = useMemo(
    () => portfolio.filter((project) => active === "All" || project.category === active),
    [active],
  );

  return (
    <section id="portfolio" className="section-padding bg-[#f7f7f8] dark:bg-[#101015]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work across websites, commerce, SaaS, and systems."
          copy="CMS-ready case study cards designed to be swapped with real portfolio records."
        />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === category
                  ? "gradient-surface text-white shadow-lg"
                  : "border border-black/10 bg-white text-[var(--text-secondary)] dark:border-white/10 dark:bg-white/[0.04]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <MotionDiv
              key={project.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="h-56 p-5" style={{ background: project.image }}>
                <div className="h-full rounded-3xl border border-white/70 bg-white/50 p-4 shadow-inner backdrop-blur">
                  <div className="h-4 w-28 rounded-full bg-black/10" />
                  <div className="mt-20 h-3 w-2/3 rounded-full bg-black/15" />
                  <div className="mt-3 h-3 w-1/2 rounded-full bg-black/10" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-[#8e5bff]">{project.category}</span>
                <h3 className="mt-2 font-heading text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-[var(--text-secondary)]">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)] dark:bg-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <GradientButton href="#contact" variant="secondary">
                    View Case Study
                  </GradientButton>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
