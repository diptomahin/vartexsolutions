import Link from "next/link";
import { blogPosts } from "@/lib/site-data";
import { Reveal } from "@/components/ui/motion";
import { SectionHeading } from "@/components/ui/section-heading";

export function BlogPreview() {
  return (
    <section id="blog" className="section-padding bg-[#f7f7f8] dark:bg-[#101015]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Latest Insights" title="Thinking for smarter digital decisions." />
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <article className="h-full rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.04]">
                <div className="mb-8 flex items-center justify-between text-sm text-[var(--text-secondary)]">
                  <span className="font-semibold text-[#8e5bff]">{post.category}</span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3 className="font-heading text-2xl font-semibold">{post.title}</h3>
                <p className="mt-4 leading-7 text-[var(--text-secondary)]">{post.excerpt}</p>
                <Link href="#contact" className="mt-8 inline-flex text-sm font-semibold text-[var(--text-primary)]">
                  Read More
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
