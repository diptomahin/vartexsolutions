import { GradientButton } from "@/components/ui/gradient-button";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

const plans = [
  ["Starter", "For polished websites, landing pages, and focused business launches.", ["Strategy session", "Custom UI", "Responsive build", "SEO foundation"]],
  ["Business", "For growing companies that need integrations, commerce, and product thinking.", ["Discovery sprint", "CMS or commerce", "Analytics setup", "Launch support"]],
  ["Enterprise", "For complex software, portals, automation, and long-term technical partnership.", ["Architecture planning", "Custom workflows", "Security review", "Dedicated support"]],
];

export function Pricing() {
  return (
    <section className="section-padding bg-[#f7f7f8] dark:bg-[#101015]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pricing Preview" title="Flexible plans shaped around business outcomes." />
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map(([name, copy, features], index) => (
            <Reveal key={name as string} delay={index * 0.06}>
              <div className={`h-full rounded-[1.75rem] border p-6 shadow-sm ${index === 1 ? "border-transparent bg-[#0b0b0f] text-white shadow-2xl" : "border-black/10 bg-white dark:border-white/10 dark:bg-white/[0.04]"}`}>
                <h3 className="font-heading text-2xl font-semibold">{name}</h3>
                <p className={`mt-3 leading-7 ${index === 1 ? "text-white/70" : "text-[var(--text-secondary)]"}`}>{copy}</p>
                <div className="my-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#8e5bff]">Custom Quote</div>
                <ul className="space-y-3">
                  {(features as string[]).map((feature) => (
                    <li key={feature} className="text-sm">{feature}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <GradientButton href="#contact" variant={index === 1 ? "primary" : "secondary"}>
                    Get Quote
                  </GradientButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
