import React from "react";
import PRCalculatorEngine from "../components/PRCalculatorEngine";
import SeoContentSection, { homepageFaqs } from "../components/SeoContentSection";
import SchemaMarkup from "../components/SchemaMarkup";
import Footer from "../components/Footer";

export const metadata = {
  title: "Australia PR Points Calculator (2026) | Check SkillSelect Eligibility",
  description:
    "Calculate your Australia PR points for Subclasses 189, 190, and 491 with our accurate 2026 points calculator. Instant score breakdown based on official Home Affairs criteria.",
  alternates: {
    canonical: "https://ausprcalculator.com",
  },
  openGraph: {
    title: "Australia PR Points Calculator (2026) | Check SkillSelect Eligibility",
    description:
      "Calculate your Australia PR points for Subclasses 189, 190, and 491 with our accurate 2026 points calculator. Instant score breakdown based on official Home Affairs criteria.",
    url: "https://ausprcalculator.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia PR Points Calculator (2026) | Check SkillSelect Eligibility",
    description:
      "Calculate your Australia PR points for Subclasses 189, 190, and 491 with our accurate 2026 points calculator. Instant score breakdown based on official Home Affairs criteria.",
  },
};

export default function Home() {
  return (
    <main className="flex-1 min-h-screen">
      {/* Comprehensive Structured Data Schema */}
      <SchemaMarkup
        faqs={homepageFaqs}
        includeWebSite={true}
        pageUrl="https://ausprcalculator.com"
        appName="Australia PR Points Calculator"
        appDescription="Calculate your Australia PR points for Subclasses 189, 190, and 491 with our accurate 2026 points calculator. Instant score breakdown based on official Home Affairs criteria."
        breadcrumbs={[{ name: "Home", href: "/" }]}
      />

      {/* Main Page Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header Block */}
        <header className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            Official 2026 SkillSelect Criteria • Schedule 6D
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Australia PR Points Calculator
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-650 dark:text-zinc-400 leading-relaxed">
            Estimate your skilled migration points eligibility for the Skilled Independent (Subclass 189), 
            Skilled Nominated (Subclass 190), and Skilled Work Regional (Subclass 491) visas instantly with our zero-latency calculator.
          </p>
        </header>

        {/* Client-Side Reactive Points Calculator Engine */}
        <PRCalculatorEngine />

        {/* Server-Side Topical Authority & Long-Form Reference Section */}
        <SeoContentSection />
      </div>

      {/* Modern Footer */}
      <Footer />
    </main>
  );
}
