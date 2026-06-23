const logos = ["Apex", "NovaCare", "BrightLedger", "Northline", "OrbitOps", "Zenith", "FlowDesk"];

export function TrustMarquee() {
  return (
    <section aria-label="Trusted by businesses worldwide" className="border-y border-black/10 bg-[#fafafa] py-8 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
        Trusted by Businesses Worldwide
      </div>
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-max gap-12">
          {[...logos, ...logos].map((logo, index) => (
            <span
              key={`${logo}-${index}`}
              className="text-2xl font-bold tracking-tight text-black/35 grayscale transition hover:text-black/70 dark:text-white/35 dark:hover:text-white/70"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
