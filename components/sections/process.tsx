import { processSteps } from "@/lib/site-data";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function Process() {
  return (
    <section id="process" className="section-padding bg-white dark:bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title="A clear path from raw idea to resilient launch." />
        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#2ec7ff] via-[#8e5bff] to-[#ff00c8] md:block" />
          <div className="grid gap-5">
            {processSteps.map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <div className="grid gap-4 rounded-3xl border border-black/10 bg-[#f7f7f8] p-5 dark:border-white/10 dark:bg-white/[0.04] md:grid-cols-[4rem_1fr] md:items-center md:bg-transparent md:p-0 md:dark:bg-transparent">
                  <div className="relative z-10 grid size-11 place-items-center rounded-full gradient-surface text-sm font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                  <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                    <h3 className="font-heading text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 text-[var(--text-secondary)]">{copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
