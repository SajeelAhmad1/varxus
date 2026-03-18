"use client";

import { InstagramIcon, XIcon, LinkedinIcon } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { WorkSection } from "./components/WorkSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { HowItWorks } from "./components/HowItWorks";
import { TechnologiesSection } from "./components/TechnologiesSection";

export default function Home() {
  const faqs = [
    {
      q: "Is VARXUS a good fit for my startup?",
      a: "If you need a small, senior team to move fast without overcomplicating things, VARXUS is a strong fit.",
    },
    {
      q: "Do you only build MVPs?",
      a: "We start with MVPs, then stay on to harden, scale, and maintain the product if you need us.",
    },
    {
      q: "Can you help with just design or just development?",
      a: "Yes. We can plug into your existing team as product engineers, designers, or both.",
    },
    {
      q: "How long does an MVP usually take?",
      a: "Most MVPs we ship land between 8–12 weeks depending on scope and integrations.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <HowItWorks />
        <TechnologiesSection />
        <ReviewsSection />
        <FAQSection faqs={faqs} />
        <ContactSection />
      </main>

      <footer className="border-t border-black/5 bg-blue-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-blue-100 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="space-y-1">
            <p className="font-semibold">Varxus — Software House</p>
            <p className="text-xs text-blue-300">
              Building modern web, mobile, and AI products with small, focused
              teams.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-blue-200">
            <a href="#" className="hover:text-white">
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-white">
              <XIcon className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-white">
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} VARXUS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
