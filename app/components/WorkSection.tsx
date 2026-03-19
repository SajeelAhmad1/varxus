"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const projects = [
  {
    image: "/assets/dev1.jpeg",
    tag: "MVP",
    title: "Startup MVPs",
    desc: "Turn your idea into a working product — fast. We scope, design, and build a focused MVP that's ready to demo to investors, validate with real users, and iterate on without burning your runway.",
    num: "01",
    accent: "#6d28d9",
    accentText: "text-violet-700",
    accentBg: "bg-violet-50",
    accentRing: "ring-violet-200",
  },
  {
    image: "/assets/dev2.jpeg",
    tag: "Design",
    title: "Product Redesigns",
    desc: "Breathe new life into an existing product. We audit your current UX, identify friction points, and rebuild the experience with a modern interface, cleaner architecture, and a UI your users will actually enjoy.",
    num: "02",
    accent: "#7c3aed",
    accentText: "text-purple-700",
    accentBg: "bg-purple-50",
    accentRing: "ring-purple-200",
  },
  {
    image: "/assets/bot.jpeg",
    tag: "AI",
    title: "AI-Powered Features",
    desc: "Go beyond basic automation. We integrate large language models, semantic search, and intelligent assistants directly into your product — so it adapts to users, surfaces insights, and does the heavy lifting for them.",
    num: "03",
    accent: "#2563eb",
    accentText: "text-blue-700",
    accentBg: "bg-blue-50",
    accentRing: "ring-blue-200",
  },
];

const INTERVAL = 5000;

export function WorkSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setActive(i);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setActive((a) => (a + 1) % projects.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    const tick = 50;
    const step = (tick / INTERVAL) * 100;
    const id = setInterval(() => {
      setProgress((p) => {
        if (p + step >= 100) { next(); return 0; }
        return p + step;
      });
    }, tick);
    return () => clearInterval(id);
  }, [paused, next]);

  const p = projects[active];

  return (
    <AnimatedSection className="border-t border-black/5 bg-zinc-50" delay={0.05}>
      <section id="work" className="mx-auto max-w-6xl px-4 py-20 md:px-6 lg:max-w-7xl">

        {/* Header — centered */}
        <div className="text-center">
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
            <span className="font-bold text-blue-700">Projects</span>  we like to build
          </h2>
          <p className="mt-3 text-sm md:text-xl leading-7 text-zinc-500">
            A quick overview of typical engagements with VARXUS.
          </p>
        </div>

        {/* Slider card */}
        <div
          className="mt-10 overflow-hidden rounded-3xl border border-black/[0.07] bg-white shadow-lg"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">

            {/* Image */}
            <div className="relative h-80 overflow-hidden md:h-auto md:min-h-[500px]">
              {projects.map((proj, i) => (
                <div
                  key={proj.num}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === active ? "opacity-100" : "opacity-0"}`}
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/30 hidden md:block" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <span className={`inline-block rounded-full px-2.5 py-1 text-[12px] md:text-[16px] font-semibold uppercase tracking-widest ring-1 ${p.accentBg} ${p.accentText} ${p.accentRing}`}>
                      {p.tag}
                    </span>
                    <h3 className="mt-5 text-2xl md:text-4xl font-semibold leading-snug tracking-tight text-zinc-950">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-sm md:text-lg leading-7 text-zinc-500">
                      {p.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Nav */}
              {/* <div className="mt-10 space-y-4">
                <div className="h-px bg-zinc-100" />
                <div className="flex flex-col gap-3 pt-1">
                  {projects.map((proj, i) => (
                    <button
                      key={proj.num}
                      onClick={() => goTo(i)}
                      className="group flex items-center gap-4 text-left"
                    >
                      <div className="relative h-0.5 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-200">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full transition-none"
                          style={{
                            width: i === active ? `${progress}%` : i < active ? "100%" : "0%",
                            backgroundColor: proj.accent,
                          }}
                        />
                      </div>
                      <span className={`text-xs font-semibold transition-colors duration-200 ${i === active ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-600"}`}>
                        {proj.title}
                      </span>
                      {i === active && (
                        <span
                          className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: proj.accent }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div> */}

            </div>
          </div>
        </div>

      </section>
    </AnimatedSection>
  );
}