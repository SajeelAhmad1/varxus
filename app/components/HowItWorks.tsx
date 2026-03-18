"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description:
      "We start with a deep-dive consultation to understand your goals, challenges, and vision. No generic pitches — just honest conversation about what you actually need.",
    accent: "#4A6CF7",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Design",
    description:
      "Our team crafts a tailored roadmap with wireframes, architecture plans, and a clear timeline. You'll see exactly what we're building before a single line of code is written.",
    accent: "#6D8EFA",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & Iterate",
    description:
      "Agile sprints. Weekly demos. Continuous feedback loops. We ship working software early and often so you're never in the dark about progress.",
    accent: "#4A6CF7",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "We handle deployment, QA, and post-launch support. Once live, we stick around to help you scale — because our partnership doesn't end at go-live.",
    accent: "#6D8EFA",
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="group relative flex flex-col gap-5 rounded-2xl border border-black/[0.07] bg-white p-7 shadow-xl transition-shadow duration-300 hover:shadow-lg"
    >
      {/* Step number — large decorative */}
      <span
        className="absolute right-6 top-5 select-none text-6xl font-black leading-none tracking-tighter"
        style={{ color: "#4A6CF7", opacity: 0.06 }}
        aria-hidden
      >
        {step.number}
      </span>

      {/* Icon bubble */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ background: `${step.accent}18` }}
      >
        <Icon
          className="h-6 w-6"
          style={{ color: step.accent }}
          strokeWidth={1.75}
        />
      </div>

      {/* Step pill */}
      <div className="flex items-center gap-2">
        <span
          className="rounded-full px-2.5 py-0.5 text-xs font-bold tracking-widest uppercase"
          style={{ background: `${step.accent}14`, color: step.accent }}
        >
          Step {step.number}
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-bold text-zinc-900">{step.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-500">
          {step.description}
        </p>
      </div>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-6 right-6 h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, ${step.accent}, transparent)`,
        }}
      />
    </motion.div>
  );
}

export function HowItWorks() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-zinc-50 py-24"
    >
      {/* Subtle background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "#4A6CF7" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "#4A6CF7" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="text-center">
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
              How it works
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              From first conversation to final launch — a clear, collaborative
              process built around your success.
            </p>
          </div>
        </motion.div>

        {/* Connector line (desktop only) */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[calc(50%+2rem)] hidden h-[2px] w-[calc(100%-8rem)] -translate-x-1/2 md:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, #4A6CF730 20%, #4A6CF730 80%, transparent)",
          }}
        />

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          className="mt-14 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center"
        >
          <a
            href="#contact"
            className="rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
            style={{ background: "#4A6CF7" }}
          >
            Start Your Project
          </a>
          <a
            href="#work"
            className="rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100"
          >
            See Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
