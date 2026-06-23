import { services } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return (
    <section id="services" className="section-padding bg-[#f7f7f8] dark:bg-[#101015]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Digital products, commerce systems, and growth engines."
          copy="Everything your business needs to plan, build, launch, and improve premium digital experiences."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04} className="group">
              <article className="h-full rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.04]">
                <div className="mb-6 grid size-12 place-items-center rounded-2xl gradient-surface text-white shadow-lg">
                  <Icon name={service.icon} className="size-5" />
                </div>
                <h3 className="font-heading text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-[var(--text-secondary)]">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span key={point} className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)] dark:bg-white/10">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
