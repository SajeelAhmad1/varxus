"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, InstagramIcon, LinkedinIcon, MailIcon, MenuIcon, X, XIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };
type MenuItem = { label: string; popular?: true };
type MenuGroup = { title: string; items: MenuItem[] };

const nav: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Our Work", href: "#work" },
  { label: "How It Works", href: "#how-it-works" },
];

const serviceGroups: MenuGroup[] = [
  {
    title: "Website Development",
    items: [
      { label: "Dynamic Web App", popular: true },
      { label: "Single Page App" },
      { label: "Progressive Web App" },
    ],
  },
  {
    title: "Design",
    items: [{ label: "UI/UX Design" }, { label: "Graphics Design" }],
  },
  {
    title: "Cross Platform Apps",
    items: [
      { label: "Mobile App Development" },
      { label: "Desktop App Development" },
    ],
  },
  {
    title: "Artificial Intelligence",
    items: [
      { label: "OpenAI Integration", popular: true },
      { label: "AI Powered Chatbots" },
    ],
  },
  {
    title: "Team Segmentation",
    items: [
      { label: "Hire Developers" },
      { label: "Hire Designers" },
      { label: "Hire Project Managers" },
    ],
  },
  {
    title: "Others",
    items: [{ label: "MVP", popular: true }],
  },
];

function useLockedBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useLockedBody(mobileOpen);

  const closeAll = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const serviceMenu = useMemo(() => {
    return (
      <motion.div
        key="services-menu"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="absolute left-1/2 top-full z-[110] mt-3 w-[min(980px,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-6 shadow-xl"
        role="menu"
        aria-label="Services menu"
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {serviceGroups.map((g) => (
            <div key={g.title} className="rounded-xl bg-zinc-50 p-5">
              <p className="text-sm font-semibold text-zinc-900">{g.title}</p>
              <ul className="mt-3 space-y-2">
                {g.items.map((it) => (
                  <li key={it.label} className="flex items-center gap-2 text-sm text-zinc-700">
                    {it.label}
                    {it.popular ? (
                      <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-semibold text-white">
                        Popular
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }, []);

  return (
    <header className="sticky top-0 z-[100] border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="bg-[#4A6CF7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 md:py-3 text-xs font-medium text-white md:px-4">
          <div className="flex gap-1">
            <MailIcon className="h-4 md:h-6 w-4 md:w-6" />
            <span className="text-[11px] md:text-[16px] flex items-center">hello@varxus.com</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] md:text-[16px]">
            Follow us
            <a href="#" aria-label="Instagram" className="hover:text-blue-100">
              <InstagramIcon className="h-4 md:h-6 w-4 md:w-6" />
            </a>
            <a href="#" aria-label="X (Twitter)" className="hover:text-blue-100">
              <XIcon className="h-4 md:h-6 w-4 md:w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-100">
              <LinkedinIcon className="h-4 md:h-6 w-4 md:w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:py-6 md:px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="VARXUS">
          <Image src="/logo.png" alt="VARXUS logo" width={44} height={44} />
          <span className="text-base font-semibold tracking-wide text-blue-700 md:text-2xl">
            VARXUS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <div className="static">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-950 md:text-xl"
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onMouseEnter={() => setServicesOpen(true)}
              onFocus={() => setServicesOpen(true)}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown className="h-4 w-4 text-zinc-500" />
            </button>
            <AnimatePresence>{servicesOpen ? serviceMenu : null}</AnimatePresence>
          </div>

          {nav
            .filter((n) => n.label !== "Services")
            .map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-950 md:text-xl"
              >
                {n.label}
              </a>
            ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full border border-blue-600 bg-white px-5 py-3 text-sm md:text-lg font-semibold text-blue-700 hover:bg-blue-50"
          >
            Contact Us
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white px-2.5 py-2 text-sm font-semibold text-zinc-900 md:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon className="h-4 w-4" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 md:hidden"
            onClick={closeAll}
          >
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 40, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 top-0 h-full w-[min(420px,90vw)] bg-white p-5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image src="/logo.png" alt="VARXUS logo" width={32} height={32} />
                  <span className="text-sm font-semibold tracking-wide text-zinc-900">
                    VARXUS
                  </span>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border border-black/10 px-2.5 py-2 text-sm font-semibold"
                  onClick={closeAll}
                >
                  <X className="mr-1 h-4 w-4" />
                  Close
                </button>
              </div>

              <div className="mt-6 space-y-5">
                <a
                  href="#services"
                  className="block text-sm font-semibold text-zinc-900"
                  onClick={closeAll}
                >
                  Services
                </a>
                <div className="grid grid-cols-1 gap-3">
                  {serviceGroups.map((g) => (
                    <details
                      key={g.title}
                      className="rounded-xl border border-black/10 bg-zinc-50 p-4"
                    >
                      <summary className="cursor-pointer list-none text-sm font-semibold text-zinc-900">
                        {g.title}
                      </summary>
                      <ul className="mt-3 space-y-2">
                        {g.items.map((it) => (
                          <li key={it.label} className="flex items-center gap-2 text-sm text-zinc-700">
                            {it.label}
                            {it.popular ? (
                              <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs font-semibold text-white">
                                Popular
                              </span>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>

                {nav
                  .filter((n) => n.label !== "Services")
                  .map((n) => (
                    <a
                      key={n.label}
                      href={n.href}
                      className="block text-sm font-semibold text-zinc-900"
                      onClick={closeAll}
                    >
                      {n.label}
                    </a>
                  ))}

                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white"
                  onClick={closeAll}
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}