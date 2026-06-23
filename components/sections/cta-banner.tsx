import { GradientButton } from "@/components/ui/gradient-button";
import { Reveal } from "@/components/ui/motion";

export function CtaBanner() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] gradient-surface p-8 text-white shadow-[0_30px_100px_rgba(142,91,255,0.3)] md:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Build with Vartex</p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight md:text-6xl">
              Ready to Build Something Amazing?
            </h2>
          </div>
          <GradientButton href="#contact" variant="secondary">
            Let&apos;s Talk
          </GradientButton>
        </div>
      </Reveal>
    </section>
  );
}
