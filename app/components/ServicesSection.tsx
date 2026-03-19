"use client";

import { AnimatedSection } from "./AnimatedSection";

const services = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.5 8.5l-7 7M15.5 8.5H10m5.5 0v5.5"
        />
      </svg>
    ),
    title: "Website Development",
    desc: "Dynamic web apps, single page apps, and progressive web apps built for performance and scale.",
    popular: false,
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces with thoughtful user flows. From wireframes to polished, handoff-ready designs.",
    popular: false,
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15.75h3"
        />
      </svg>
    ),
    title: "Cross Platform Apps",
    desc: "Mobile and desktop apps built with modern frameworks that run natively on iOS, Android, and beyond.",
    popular: false,
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
        />
      </svg>
    ),
    title: "Artificial Intelligence",
    desc: "OpenAI integrations, AI-powered chatbots, and intelligent automation baked into your product.",
    popular: true,
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Team Augmentation",
    desc: "Hire senior developers, designers, and project managers who plug directly into your team.",
    popular: false,
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "MVP Development",
    desc: "From idea to live product in weeks. Rapid prototyping and full MVP builds for founders who move fast.",
    popular: true,
  },
];

export function ServicesSection() {
  return (
    <AnimatedSection delay={0.03}>
      <section
        id="services"
        className="mx-auto max-w-7xl px-4 py-16 md:px-6"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            Everything you need to build your <span className="font-bold text-blue-700">product</span>
          </h2>
          <p className="mt-3 text-sm md:text-xl leading-7 text-zinc-500">
            A focused set of services for web, mobile, and AI — start small or
            go full scale.
          </p>
        </div>

        {/* Cards — 4 col top row, 2 col (centered) bottom row */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative flex flex-col items-center rounded-3xl border border-zinc-100 bg-white px-8 py-6 text-center md:h-[300px] md:w-[400px]" 
              style={{
                transform: "perspective(800px)",
                boxShadow:
                  "0 32px 64px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(99,102,241,0.08)",
                zIndex: 10,
              }}
            >
              {/* Subtle depth backdrop */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white to-zinc-50" />

              {/* Icon circle */}
              <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                {s.icon}
              </div>

              <h3 className="relative z-10 mt-6 text-base md:text-xl font-semibold text-zinc-900">
                {s.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm md:text-lg leading-6 text-zinc-500">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
