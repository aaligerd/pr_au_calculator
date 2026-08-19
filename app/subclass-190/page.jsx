import React from "react";
import PRCalculatorEngine from "../../components/PRCalculatorEngine";
import SeoContentSection from "../../components/SeoContentSection";
import SchemaMarkup from "../../components/SchemaMarkup";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Subclass 190 Points Calculator | Skilled Nominated Visa Australia",
  description: "Calculate your points for the Skilled Nominated (Subclass 190) visa. Gaining state nomination automatically awards +5 points. Estimate your total score.",
  alternates: {
    canonical: "https://ausprcalculator.com/subclass-190",
  },
};

export default function Subclass190() {
  return (
    <main className="flex-1 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-150 transition-colors duration-250">
      <SchemaMarkup />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            Subclass 190 Focus • Includes +5 Nomination Points
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Subclass 190 Points Calculator
          </h1>
          <p className="text-base md:text-lg text-zinc-650 dark:text-zinc-400 leading-relaxed">
            Determine your skilled migration points eligibility for the Skilled Nominated (Subclass 190) visa. Gaining nomination by an Australian state or territory government automatically adds 5 points to your total.
          </p>
        </header>

        <PRCalculatorEngine initialSubclass="190" />

        <SeoContentSection />
      </div>

      <Footer />
    </main>
  );
}
