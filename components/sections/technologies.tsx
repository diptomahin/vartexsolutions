import { technologies } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Technologies() {
  return (
    <section className="section-padding overflow-hidden bg-[#0b0b0f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          title="Modern stacks for durable, high-performance products."
          copy="We choose tools around product needs, team velocity, scalability, and long-term ownership."
        />
      </div>
      <div className="space-y-5">
        {[technologies, [...technologies].reverse()].map((row, rowIndex) => (
          <div key={rowIndex} className="marquee overflow-hidden">
            <div className={`marquee-track flex w-max gap-4 ${rowIndex === 1 ? "marquee-reverse" : ""}`}>
              {[...row, ...row].map((tech, index) => (
                <span key={`${tech}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white/80 shadow-sm backdrop-blur">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
