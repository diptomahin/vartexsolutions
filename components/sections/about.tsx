import { stats } from "@/lib/site-data";
import { Counter } from "@/components/sections/counter";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Who We Are" title="A modern technology company built for ambitious teams." />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal direction="left" className="rounded-[2rem] border border-black/10 bg-[#f7f7f8] p-6 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="aspect-[4/3] rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(46,199,255,.36),transparent_32%),radial-gradient(circle_at_80%_25%,rgba(255,0,200,.24),transparent_30%),linear-gradient(135deg,#0b0b0f,#1b1730)] p-6 text-white">
              <div className="flex h-full flex-col justify-between">
                <div className="max-w-xs text-3xl font-semibold leading-tight">
                  Strategy, engineering, and creative execution in one team.
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {["Plan", "Design", "Ship"].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 p-3 text-sm backdrop-blur">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <p className="text-xl leading-9 text-[var(--text-secondary)]">
              Vartex Solutions is a modern technology company specializing in creating
              high-performance digital solutions for startups, SMEs, and enterprises.
            </p>
            <p className="mt-5 text-xl leading-9 text-[var(--text-secondary)]">
              We combine creativity, engineering, and strategy to deliver products that generate
              real business results.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <Counter key={stat.label} {...stat} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
