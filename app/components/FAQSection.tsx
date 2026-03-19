"use client";

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

type FAQ = { q: string; a: string };

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <AnimatedSection className="bg-white" delay={0.05}>
      <section id="faq" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        {/* Centered header */}
        <div className="text-center">
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-sm md:text-xl leading-7 text-zinc-500">
            Here's what founders usually ask us before we start.
          </p>
        </div>

        {/* Two-col: FAQs left, CTA card right */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start">
          {/* FAQ list — plain dividers, no cards */}
          <div className="divide-y divide-black/[0.06]">
            {faqs.map((item, i) => (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="text-sm md:text-xl font-medium text-zinc-800">
                    {item.q}
                  </span>
                  <svg
                    className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 ${open === i ? "rotate-180 text-blue-600" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {open === i && (
                  <p className="pb-5 pr-10 text-sm md:text-lg leading-7 text-zinc-500">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CTA card */}
          <div className="lg:sticky lg:top-24">
            <div
              style={{
                transform: "perspective(800px)",
                boxShadow:
                  "0 20px 64px -6px rgba(0,0,0,0.12), 0 0 0 1px rgba(74,108,247,0.06)",
              }}
              className="rounded-2xl bg-zinc-50 p-8 text-center"
            >
              {/* Avatar stack */}
              {/* <div className="flex justify-center">
                <div className="flex -space-x-3">
                  {["N", "A", "R"].map((l, i) => (
                    <div
                      key={l}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-blue-600 bg-blue-400 text-sm font-bold text-white"
                      style={{ zIndex: 3 - i }}
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </div> */}

              <p className="mt-5 text-xl md:text-2xl font-semibold leading-snug text-zinc-900">
                Still have questions?
              </p>
              <p className="mt-3 text-sm md:text-xl leading-6 text-zinc-500">
                Can't find the answer you're looking for? Please reach out to
                our team.
              </p>
              <a
                href="mailto:hello@varxus.com"
                className="mt-8 inline-flex h-10 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
