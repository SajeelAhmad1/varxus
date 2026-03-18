"use client";

import { AnimatedSection } from "./AnimatedSection";
import { SectionHeader } from "./SectionHeader";

export function ReviewsSection() {
  const reviews = [
    {
      company: "SaaS analytics startup",
      quote:
        "“The VARXUS team felt like our in-house squad. Clean handoffs, clear decisions, and a smooth launch.”",
      name: "Founder & CEO",
    },
    {
      company: "Healthcare platform",
      quote:
        "“They took an old codebase, stabilized it, and helped us roll out new features without disruption.”",
      name: "Product Lead",
    },
    {
      company: "AI tooling company",
      quote:
        "“They were fast with implementation but even better at asking the right product questions.”",
      name: "CTO",
    },
  ];

  return (
    <AnimatedSection className="border-t border-black/5 bg-white" delay={0.05}>
      <section id="reviews" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="text-center">
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
            What founders say about working with <span className="font-bold text-blue-700">VARXUS</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-500">
            Short, practical feedback from teams we’ve helped ship products
            with.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.company}
              className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-6 text-sm shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-yellow-300">
                ★★★★★
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{r.quote}</p>
              <p className="mt-4 text-xs font-semibold text-zinc-900">
                {r.name}
              </p>
              <p className="text-xs text-zinc-500">{r.company}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
