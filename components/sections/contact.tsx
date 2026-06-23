"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

const services = ["WordPress", "WooCommerce", "Custom Web App", "Software", "UI/UX", "Marketing", "Consulting"];
const budgets = ["Under $5k", "$5k-$15k", "$15k-$50k", "$50k+"];

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#0b0b0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact" title="Tell us what you want to build." />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[1.75rem] border border-black/10 bg-[#0b0b0f] p-8 text-white shadow-2xl dark:border-white/10">
            <h3 className="font-heading text-3xl font-semibold">Book a free consultation</h3>
            <p className="mt-4 leading-7 text-white/70">
              Share your goals, timeline, and constraints. We will respond with next steps and a
              practical consultation slot.
            </p>
            <div className="mt-10 space-y-5">
              {[
                ["Email", "hello@vartexsolutions.com"],
                ["Phone", "+880 1700 000000"],
                ["Address", "Dhaka, Bangladesh"],
                ["Business Hours", "Sat-Thu, 9:00 AM - 7:00 PM"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/10 p-4">
                  <div className="text-sm text-white/50">{label}</div>
                  <div className="mt-1 font-semibold">{value}</div>
                </div>
              ))}
            </div>
            <a
              href="https://cal.com/vartex-solutions/consultation"
              className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#111]"
            >
              Open Calendar
            </a>
          </div>
          <form onSubmit={onSubmit} className="rounded-[1.75rem] border border-black/10 bg-[#f7f7f8] p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04] md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Field name="name" label="Name" required />
              <Field name="email" label="Email" type="email" required />
              <Field name="phone" label="Phone" />
              <Field name="company" label="Company" />
              <Select name="service" label="Service" options={services} />
              <Select name="budget" label="Budget" options={budgets} />
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#8e5bff] dark:border-white/10 dark:bg-[#0b0b0f]"
              />
            </label>
            <button type="submit" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white gradient-surface">
              Send Message
              <Icon name="arrow-right" className="size-4" />
            </button>
            {sent ? (
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                <Icon name="badge-check" className="size-5" />
                Thanks. Your message is ready for the Vartex team.
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none transition focus:border-[#8e5bff] dark:border-white/10 dark:bg-[#0b0b0f]"
      />
    </label>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      <select
        name={name}
        className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none transition focus:border-[#8e5bff] dark:border-white/10 dark:bg-[#0b0b0f]"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
