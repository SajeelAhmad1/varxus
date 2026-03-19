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
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Navbar />

      <main>
        <HeroSection />
        <WorkSection />
        <ServicesSection />
        <HowItWorks />
        <TechnologiesSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <footer className="border-t border-black/5 bg-blue-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm md:text-xl text-blue-100 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="space-y-1">
            <p className="font-semibold">Varxus — Software House</p>
            <p className="text-sm">hello@varxus.com</p>
            <p className="text-xs md:text-lg text-blue-300">
              Building modern web, mobile, and AI products with small, focused
              teams.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-blue-200">
            <a href="#" className="hover:text-white">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white">
              <XIcon className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-white">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="text-xs md:text-lg text-blue-300">
            © {new Date().getFullYear()} VARXUS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
