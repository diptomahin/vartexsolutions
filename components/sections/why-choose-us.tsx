import { reasons } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white dark:bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Choose Us" title="Premium execution with practical business discipline." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, copy], index) => (
            <Reveal key={title} delay={index * 0.04}>
              <div className="rounded-3xl border border-black/10 p-6 transition hover:bg-[#f7f7f8] dark:border-white/10 dark:hover:bg-white/[0.04]">
                <Icon name="badge-check" className="mb-5 size-6 text-[#8e5bff]" />
                <h3 className="font-heading text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--text-secondary)]">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
