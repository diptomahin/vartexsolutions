import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="#home" className="flex items-center gap-3" aria-label="Vartex Solutions home">
      <Image
        src="/V-artex-final-logo-removebg-preview.png"
        alt="Vartex Solutions"
        width={compact ? 124 : 142}
        height={compact ? 52 : 60}
        priority
        className="h-auto w-auto"
      />
    </Link>
  );
}
