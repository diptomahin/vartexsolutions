import Link from "next/link";
import { navItems, services } from "@/lib/site-data";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-[#0b0b0f] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            Premium websites, scalable software, eCommerce, consulting, and digital growth for
            ambitious businesses.
          </p>
        </div>
        <FooterList title="Quick Links" items={navItems.map((item) => [item.label, item.href])} />
        <FooterList title="Services" items={services.slice(0, 6).map((service) => [service.title, "#services"])} />
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold">Newsletter</h3>
          <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
            <input aria-label="Email for newsletter" placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/35" />
            <button type="button" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#111]">
              Join
            </button>
          </div>
          <div className="mt-6 flex gap-3 text-sm text-white/60">
            <Link href="#">LinkedIn</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">GitHub</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} Vartex Solutions. All rights reserved.</p>
        <p>Privacy Policy · Terms</p>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: string[][] }) {
  return (
    <div>
      <h3 className="mb-4 font-heading text-lg font-semibold">{title}</h3>
      <ul className="space-y-3">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-sm text-white/60 transition hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
