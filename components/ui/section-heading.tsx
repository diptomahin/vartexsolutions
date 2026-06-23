import { Reveal } from "@/components/ui/motion";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto mb-14 max-w-3xl text-center"
          : "mb-12 max-w-3xl text-left"
      }
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8e5bff]">
        {eyebrow}
      </p>
      <h2 className="font-heading text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-lg leading-8 text-[var(--text-secondary)]">{copy}</p>
      ) : null}
    </Reveal>
  );
}
