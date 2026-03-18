"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "./AnimatedSection";

// ─── Tech Data ────────────────────────────────────────────────────────────────

const categories = [
  {
    label: "Frontend",
    techs: [
      {
        name: "React",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <circle cx="12" cy="12" r="2.4" fill="#4A6CF7" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#4A6CF7" strokeWidth="1.4" fill="none" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#4A6CF7" strokeWidth="1.4" fill="none" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#4A6CF7" strokeWidth="1.4" fill="none" transform="rotate(120 12 12)" />
          </svg>
        ),
      },
      {
        name: "Next.js",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <circle cx="12" cy="12" r="10" stroke="#4A6CF7" strokeWidth="1.4" fill="none" />
            <path d="M8 16V8l8 10" stroke="#4A6CF7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 8v5" stroke="#4A6CF7" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="#4A6CF7" strokeWidth="1.4" fill="none" />
            <path d="M7 10h10M7 10v8" stroke="#4A6CF7" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15 10v8M13 14h4" stroke="#4A6CF7" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <path
              d="M12 6c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.305.74 1.907 1.348C13.374 10.916 14.38 12 16.5 12c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.305-.74-1.907-1.348C15.126 7.084 14.12 6 12 6z"
              stroke="#4A6CF7" strokeWidth="1.4" strokeLinejoin="round" fill="none"
            />
            <path
              d="M7 12c-2.667 0-4.333 1.333-5 4 1-1.333 2.167-1.833 3.5-1.5.76.19 1.305.74 1.907 1.348C8.374 16.916 9.38 18 11.5 18c2.667 0 4.333-1.333 5-4-1 1.333-2.167 1.833-3.5 1.5-.76-.19-1.305-.74-1.907-1.348C10.126 13.084 9.12 12 7 12z"
              stroke="#4A6CF7" strokeWidth="1.4" strokeLinejoin="round" fill="none"
            />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Backend",
    techs: [
      {
        name: "Node.js",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#4A6CF7" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
            <path d="M12 2v20M3 7l9 5 9-5" stroke="#4A6CF7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: "Python",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <path d="M12 2C8 2 7 4 7 6v2h5v1H5C3 9 2 10.5 2 13s1 4 3 4h2v-2.5c0-2 1.5-3.5 5-3.5s5 1.5 5 3.5V19h2c2 0 3-1.5 3-4s-1-4-3-4h-7V8h5V6c0-2-1-4-5-4z" stroke="#4A6CF7" strokeWidth="1.4" fill="none" />
            <circle cx="9.5" cy="5.5" r="0.8" fill="#4A6CF7" />
            <circle cx="14.5" cy="18.5" r="0.8" fill="#4A6CF7" />
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <ellipse cx="12" cy="7" rx="8" ry="3.5" stroke="#4A6CF7" strokeWidth="1.4" fill="none" />
            <path d="M4 7v10c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5V7" stroke="#4A6CF7" strokeWidth="1.4" fill="none" />
            <path d="M4 12c0 1.93 3.58 3.5 8 3.5s8-1.57 8-3.5" stroke="#4A6CF7" strokeWidth="1.4" strokeDasharray="3 2" />
          </svg>
        ),
      },
      {
        name: "Prisma",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <path d="M3 20L12 2l9 18H3z" stroke="#4A6CF7" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
            <path d="M12 2v18" stroke="#4A6CF7" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Mobile",
    techs: [
      {
        name: "React Native",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <circle cx="12" cy="12" r="2" fill="#4A6CF7" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#4A6CF7" strokeWidth="1.4" fill="none" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#4A6CF7" strokeWidth="1.4" fill="none" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#4A6CF7" strokeWidth="1.4" fill="none" transform="rotate(120 12 12)" />
          </svg>
        ),
      },
      {
        name: "Flutter",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <path d="M5 14l7-12 7 12" stroke="#4A6CF7" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
            <path d="M9 18l3-4 5 4" stroke="#4A6CF7" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
            <path d="M9 22l3-4" stroke="#4A6CF7" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "Expo",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <circle cx="12" cy="12" r="9" stroke="#4A6CF7" strokeWidth="1.4" fill="none" />
            <path d="M8 12h8M12 8l4 4-4 4" stroke="#4A6CF7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: "Swift",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <path d="M19 8c0-3.31-3.13-6-7-6C7.69 2 4 4.69 4 8c0 2.07 1.17 3.91 3 5.1V18l4-2 4 2v-4.9c1.83-1.19 3-3.03 3-5.1z" stroke="#4A6CF7" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "AI & Cloud",
    techs: [
      {
        name: "OpenAI",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <path d="M12 2a7 7 0 017 7v6a7 7 0 01-14 0V9a7 7 0 017-7z" stroke="#4A6CF7" strokeWidth="1.4" fill="none" />
            <path d="M9 9h6M9 12h6M9 15h4" stroke="#4A6CF7" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "AWS",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <path d="M5 17c-1.5-.5-3-2-3-4s1.5-4 4-4c.5-2 2.5-4 5-4s4.5 2 5 4c2.5 0 4 1.5 4 4s-1.5 3.5-4 4" stroke="#4A6CF7" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <path d="M8 20l4-4 4 4" stroke="#4A6CF7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        name: "Docker",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <rect x="3" y="11" width="18" height="7" rx="2" stroke="#4A6CF7" strokeWidth="1.4" fill="none" />
            <path d="M7 11V8h2M11 11V8h2M7 8V6h2M11 8V6h2M15 11V8h2" stroke="#4A6CF7" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M20 14c1-1 1-3-1-3" stroke="#4A6CF7" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        name: "Vercel",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
            <path d="M12 3L22 20H2L12 3z" stroke="#4A6CF7" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
          </svg>
        ),
      },
    ],
  },
];

// ─── Tech Card ─────────────────────────────────────────────────────────────────

function TechCard({
  name,
  icon,
  index,
  inView,
}: {
  name: string;
  icon: React.ReactNode;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="group relative flex flex-col items-center rounded-3xl border border-zinc-100 bg-white px-6 py-6 text-center"
      style={{
        transform: "perspective(800px)",
        boxShadow:
          "0 28px 64px -6px rgba(0,0,0,0.12), 0 0 0 1px rgba(74,108,247,0.06)",
      }}
    >
      {/* gradient depth backdrop */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white to-zinc-50" />

      {/* Icon circle */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-500 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <p className="relative z-10 mt-4 text-sm font-semibold text-zinc-900">
        {name}
      </p>
    </motion.div>
  );
}

// ─── Category Row ──────────────────────────────────────────────────────────────

function CategoryRow({
  label,
  techs,
  rowIndex,
}: {
  label: string;
  techs: (typeof categories)[number]["techs"];
  rowIndex: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay: rowIndex * 0.08 }}
      className="flex flex-col gap-5 md:flex-row md:items-start"
    >
      {/* Category label */}
      <div className="w-full shrink-0 md:w-36 md:pt-7">
        <span className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          {label}
        </span>
      </div>

      {/* Tech cards */}
      <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4">
        {techs.map((t, i) => (
          <TechCard
            key={t.name}
            name={t.name}
            icon={t.icon}
            index={rowIndex * 4 + i}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────

export function TechnologiesSection() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <AnimatedSection delay={0.03}>
      <section
        id="technologies"
        className="mx-auto max-w-5xl px-4 py-16 md:px-6"
      >
        {/* ── Section header (exact pattern from spec) ── */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="text-center">
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 md:text-3xl">
              Built with the tools that{" "}
              <span className="font-bold text-blue-700">power modern products</span>
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              We work with the best-in-class stack across frontend, backend,
              mobile, and AI — so your product is fast, scalable, and future-proof.
            </p>
          </div>
        </motion.div>

        {/* ── Category rows ── */}
        <div className="flex flex-col gap-10">
          {categories.map((cat, i) => (
            <CategoryRow
              key={cat.label}
              label={cat.label}
              techs={cat.techs}
              rowIndex={i}
            />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}