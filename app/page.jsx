import React from "react";
import PRCalculatorEngine from "../components/PRCalculatorEngine";
import SeoContentSection from "../components/SeoContentSection";
import SchemaMarkup from "../components/SchemaMarkup";

export const metadata = {
  title: "Australia PR Points Calculator 2026 | Skilled Migration Points Estimator",
  description: "Calculate your points for Australia Subclass 189, 190, and 491 visas instantly. Updated with official Department of Home Affairs SkillSelect criteria.",
  alternates: {
    canonical: "https://ausprcalculator.com",
  },
};

export default function Home() {
  return (
    <main className="flex-1 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-150 transition-colors duration-250">
      {/* Schema Markup for Rich snippets */}
      <SchemaMarkup />

      {/* Main page Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Block */}
        <header className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            Updated for 2026 SkillSelect Criteria
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Australia PR Points Calculator
          </h1>
          <p className="text-base md:text-lg text-zinc-650 dark:text-zinc-400 leading-relaxed">
            Estimate your points eligibility for the Skilled Independent (Subclass 189), Skilled Nominated (Subclass 190), 
            and Skilled Work Regional (Subclass 491) visas instantly with our zero-latency calculator.
          </p>
        </header>

        {/* PR Points Calculator Engine Wrapper */}
        <PRCalculatorEngine />

        {/* Rich Semantic and SEO Details Section */}
        <SeoContentSection />
      </div>

      {/* Modern footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 py-8 text-center text-xs text-zinc-500 dark:text-zinc-600 mt-20">
        <div className="max-w-6xl mx-auto px-4 space-y-2">
          <p>© {new Date().getFullYear()} ausprcalculator.com. All rights reserved.</p>
          <p className="max-w-xl mx-auto leading-relaxed">
            Disclaimer: This points calculator is a tool to help estimate your score under the Australian migration points test. 
            Official assessment depends entirely on SkillSelect validation and skills assessments by relevant authorities.
          </p>
        </div>
      </footer>
    </main>
  );
}
