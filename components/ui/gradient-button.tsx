import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/ui/icon";

export function GradientButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[length:220%_220%] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(142,91,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(255,0,200,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8e5bff] gradient-surface"
      : "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--text-primary)] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10";

  return (
    <Link href={href} className={className}>
      {children}
      <Icon name="arrow-right" className="size-4 transition group-hover:translate-x-0.5" />
    </Link>
  );
}
