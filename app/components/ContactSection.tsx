"use client";

import { AnimatedSection } from "./AnimatedSection";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const highlights = [
  {
    label: "Proven results",
    desc: "Tight, senior teams that ship in weeks, not quarters.",
  },
  {
    label: "Calm collaboration",
    desc: "Clear async updates, no noisy standups, realistic planning.",
  },
  {
    label: "Long-term thinking",
    desc: "Architecture and UX that still makes sense a year from now.",
  },
];

export function ContactSection() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Top CTA banner ─────────────────────────────────────────── */}
      <AnimatedSection
        className="border-t border-black/5 bg-zinc-50 rounded-4xl max-w-7xl md:mx-auto mb-12"
        delay={0.05}
      >
        <section className="px-6 md:px-18 py-10 md:py-20">
          {/* Top: eyebrow + headline + CTA */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Work with us
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900">
                We work just like you.
              </h2>
              <p className="mt-4 text-sm md:text-xl leading-7 text-zinc-800">
                Get a dedicated VARXUS team or let us build your product from
                scratch. Either way, you get a calm, reliable partner focused on
                outcomes — not hours billed.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm md:text-xl font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/20" />

          {/* Bottom: 3 highlights */}
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <div key={h.label} className="flex gap-4">
                <span className="mt-0.5 text-xs font-bold tabular-nums text-zinc-900">
                  0{i + 1}
                </span>
                <div>
                  <p className="text-sm md:text-xl font-semibold text-zinc-900">
                    {h.label}
                  </p>
                  <p className="mt-1.5 text-sm md:text-lg leading-6 text-zinc-500">
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ── Contact Form ────────────────────────────────────────────── */}
      <AnimatedSection className="bg-zinc-50" delay={0.05}>
        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 md:px-4">
          {/* Section header */}

          <div className="mb-12 text-center">
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Let's build something{" "}
              <span className="font-bold text-blue-700">great together</span>
            </h2>
            <p className="mt-3 text-sm md:text-xl leading-7 text-zinc-500">
              Tell us about your project and we'll get back to you within 24
              hours.
            </p>
          </div>

          {/* Card — same style as ServicesSection */}
          <div
            className="relative rounded-3xl border border-zinc-100 bg-white px-8 py-10 md:px-12"
            style={{
              boxShadow:
                "0 32px 64px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(74,108,247,0.06)",
            }}
          >
            {/* gradient depth backdrop */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white to-zinc-50" />

            {submitted ? (
              <div className="relative z-10 flex flex-col items-center gap-4 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-8 w-8 text-blue-600"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  Message sent!
                </h3>
                <p className="max-w-sm text-sm text-zinc-500">
                  Thanks for reaching out. We'll review your project and get
                  back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                {/* Row 1 — First & Last name */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs md:text-sm font-semibold uppercase tracking-wide text-zinc-500">
                      First Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John"
                      className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-4 md:py-4 text-sm text-zinc-900 outline-none placeholder:text-sm placeholder:md:text-lg placeholder:text-zinc-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs md:text-sm font-semibold uppercase tracking-wide text-zinc-500">
                      Last Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Doe"
                      className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 md:py-4 text-sm text-zinc-900 outline-none placeholder:text-sm placeholder:md:text-lg placeholder:text-zinc-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>
                </div>

                {/* Row 2 — Email & Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs md:text-sm font-semibold uppercase tracking-wide text-zinc-500">
                      Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                      className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 md:py-4 text-sm text-zinc-900 outline-none placeholder:text-sm placeholder:md:text-lg placeholder:text-zinc-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs md:text-sm font-semibold uppercase tracking-wide text-zinc-500">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 md:py-4 text-sm text-zinc-900 outline-none placeholder:text-sm placeholder:md:text-lg placeholder:text-zinc-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>
                </div>

                {/* Row 3 — Project description */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs md:text-sm font-semibold uppercase tracking-wide text-zinc-500">
                    Describe Your Project{" "}
                    <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what you're building, what stage you're at, and what kind of help you need..."
                    className="resize-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 md:py-4 text-sm text-zinc-900 outline-none placeholder:text-sm placeholder:md:text-lg placeholder:text-zinc-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100 transition"
                  />
                </div>

                {/* Row 4 — T&C */}
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={agreed}
                    onClick={() => setAgreed((v) => !v)}
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition ${
                      agreed
                        ? "border-blue-600 bg-blue-600"
                        : "border-zinc-300 bg-white"
                    }`}
                  >
                    {agreed && (
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        className="h-3 md:h-4 w-3 md:w-4"
                      >
                        <path
                          d="M2 6l3 3 5-5"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                  <p className="text-sm md:text-xl leading-6 text-zinc-500">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-700"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-medium text-blue-600 underline underline-offset-2 hover:text-blue-700"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!agreed}
                    className="text-sm md:text-xl inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                    style={{ background: "#4A6CF7" }}
                  >
                    Send Message
                    <ArrowRight className="h-4 md:h-5 w-4 md:w-5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
