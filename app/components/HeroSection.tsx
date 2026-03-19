"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-pattern">
      {/* Base gradient */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#e0f2fe_0,_transparent_45%),linear-gradient(to_bottom,_#f9fafb,_#ffffff)]"
        style={{ zIndex: 0 }}
      />

      {/* ── Animated geometric background panels ── */}

      {/* Large tilted panel — top-left */}
      <motion.div
        style={{ zIndex: 1, rotate: -18 }}
        className="pointer-events-none absolute left-[-100px] top-[-80px] h-[420px] w-[280px] rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-100/80 via-sky-50/60 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -16, 0] }}
        transition={{
          opacity: { duration: 1, delay: 0.1 },
          y: { duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
        }}
      />

      {/* Second tall panel — left, slightly inset */}
      <motion.div
        style={{ zIndex: 1, rotate: -10 }}
        className="pointer-events-none absolute left-[60px] top-[-40px] h-[340px] w-[180px] rounded-3xl border border-blue-100 bg-gradient-to-b from-sky-100/70 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 14, 0] }}
        transition={{
          opacity: { duration: 1, delay: 0.25 },
          y: { duration: 11, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 },
        }}
      />

      {/* Wide panel — top center */}
      <motion.div
        style={{ zIndex: 1, rotate: -5, left: "35%", top: "-50px", position: "absolute" }}
        className="pointer-events-none h-[220px] w-[300px] rounded-3xl border border-cyan-100 bg-gradient-to-b from-cyan-50/80 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          y: { duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1 },
        }}
      />

      {/* Tall panel — right side */}
      <motion.div
        style={{ zIndex: 1, rotate: 12 }}
        className="pointer-events-none absolute right-[-50px] top-[-60px] h-[460px] w-[220px] rounded-3xl border border-sky-200 bg-gradient-to-bl from-sky-100/80 via-blue-50/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 18, 0] }}
        transition={{
          opacity: { duration: 1, delay: 0.15 },
          y: { duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.3 },
        }}
      />

      {/* Slim panel — right inner */}
      <motion.div
        style={{ zIndex: 1, rotate: 7 }}
        className="pointer-events-none absolute right-[140px] top-[-30px] h-[360px] w-[140px] rounded-3xl border border-blue-100/80 bg-gradient-to-b from-blue-50/70 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [-8, 8, -8] }}
        transition={{
          opacity: { duration: 1, delay: 0.4 },
          y: { duration: 13, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.8 },
        }}
      />

      {/* Small accent square — left mid */}
      <motion.div
        style={{ zIndex: 1, rotate: 22 }}
        className="pointer-events-none absolute left-[16%] top-[180px] h-[120px] w-[100px] rounded-2xl border border-blue-200 bg-blue-100/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -14, 0] }}
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          y: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 1.2 },
        }}
      />

      {/* Pulsing glow — bottom right */}
      <motion.div
        style={{ zIndex: 1 }}
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pulsing glow — bottom left */}
      <motion.div
        style={{ zIndex: 1 }}
        className="pointer-events-none absolute bottom-0 left-0 h-60 w-60 rounded-full bg-blue-200/40 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Central glow bar */}
      <div
        style={{ zIndex: 1 }}
        className="pointer-events-none absolute left-1/2 top-6 h-24 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-100 via-sky-100 to-cyan-100 blur-2xl opacity-80"
      />

      {/* ── Content — sits above all bg elements ── */}
      <div
        className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 md:pb-24 md:pt-20"
        style={{ zIndex: 10 }}
      >
        <AnimatedSection className="mx-auto max-w-3xl text-center" delay={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700 backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            VARXUS Software House
          </span>
          <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-5xl">
            Your Tech Partners for Transforming Ideas into Reality,{" "}
            <span className="text-blue-700">Months Faster</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-zinc-600 md:text-xl">
            We help technology-first companies deliver software and business
            value faster by bringing in best development practices and skills
            that unblock in-house teams.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-11 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
            >
              How Works
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="mt-12 grid gap-3 md:mt-16 md:grid-cols-4"
          delay={0.05}
        >
          {[
            {
              title: "Product mindset",
              desc: "We connect engineering decisions with your business goals.",
            },
            {
              title: "Modern stacks",
              desc: "Clean, maintainable architectures for web, mobile, and AI.",
            },
            {
              title: "Predictable delivery",
              desc: "Clear milestones, no surprise delays, and transparent progress.",
            },
            {
              title: "Embedded collaboration",
              desc: "We plug into your in-house team instead of working in a silo.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-black/[0.06] bg-white p-5 md:p-7 text-left shadow-lg"
            >
              <p className="text-sm md:text-xl font-regular text-zinc-950">{c.title}</p>
              <p className="mt-1.5 text-[13px] md:text-[16px] leading-6 text-zinc-700">{c.desc}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}