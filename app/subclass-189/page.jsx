import React from "react";
import PRCalculatorEngine from "../../components/PRCalculatorEngine";
import SeoContentSection from "../../components/SeoContentSection";
import SchemaMarkup from "../../components/SchemaMarkup";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Subclass 189 Points Calculator | Skilled Independent Visa Australia",
  description: "Calculate your points for the Skilled Independent (Subclass 189) visa instantly. Check age, English, education, and work experience criteria.",
  alternates: {
    canonical: "https://ausprcalculator.com/subclass-189",
  },
};

export default function Subclass189() {
  return (
    <main className="flex-1 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-150 transition-colors duration-250">
      <SchemaMarkup />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            Subclass 189 Focus • Updated for 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Subclass 189 Points Calculator
          </h1>
          <p className="text-base md:text-lg text-zinc-650 dark:text-zinc-400 leading-relaxed">
            Estimate your points eligibility for the Skilled Independent (Subclass 189) visa. The Subclass 189 is a permanent residence visa that does not require state or family sponsorship.
          </p>
        </header>

        <PRCalculatorEngine initialSubclass="189" />

        <SeoContentSection />
      </div>

      <Footer />
    </main>
  );
}
