import React from "react";
import PRCalculatorEngine from "../../components/PRCalculatorEngine";
import Subclass190Content, { subclass190Faqs } from "../../components/Subclass190Content";
import SchemaMarkup from "../../components/SchemaMarkup";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Subclass 190 Points Calculator 2026 | Skilled Nominated Visa Australia",
  description:
    "Calculate your points for the Skilled Nominated (Subclass 190) visa. State government nomination automatically grants an extra +5 points. Check NSW, VIC, WA, QLD, and SA state criteria.",
  alternates: {
    canonical: "https://ausprcalculator.com/subclass-190",
  },
  openGraph: {
    title: "Subclass 190 Points Calculator 2026 (+5 Points)",
    description:
      "Determine your points eligibility for the Skilled Nominated (Subclass 190) visa including state nomination bonus points.",
    url: "https://ausprcalculator.com/subclass-190",
  },
};

export default function Subclass190() {
  return (
    <main className="flex-1 min-h-screen">
      {/* Page-Specific Schema Markup */}
      <SchemaMarkup
        faqs={subclass190Faqs}
        pageUrl="https://ausprcalculator.com/subclass-190"
        appName="Subclass 190 Points Calculator"
        appDescription="Calculate your points for the Australian Skilled Nominated (Subclass 190) visa, including automatic +5 state nomination bonus points."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Subclass 190 Calculator", href: "/subclass-190" },
          ]}
        />

        {/* Header Block */}
        <header className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            Subclass 190 Focus • Includes +5 State Nomination Points
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Subclass 190 Points Calculator
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-650 dark:text-zinc-400 leading-relaxed">
            Determine your skilled migration points eligibility for the Skilled Nominated (Subclass 190) visa. 
            Nomination by an Australian state or territory government automatically adds 5 bonus points to your overall score.
          </p>
        </header>

        {/* Calculator Engine Preset to 190 */}
        <PRCalculatorEngine initialSubclass="190" />

        {/* Unique Subclass 190 Content Guide */}
        <Subclass190Content />
      </div>

      <Footer />
    </main>
  );
}
