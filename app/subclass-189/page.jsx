import React from "react";
import PRCalculatorEngine from "../../components/PRCalculatorEngine";
import Subclass189Content, { subclass189Faqs } from "../../components/Subclass189Content";
import SchemaMarkup from "../../components/SchemaMarkup";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Subclass 189 Points Calculator (2026) | Skilled Independent Visa Australia",
  description:
    "Calculate your Skilled Independent Subclass 189 visa points for 2026. Check invitation cut-offs, PTE/IELTS requirements, and MLTSSL eligibility instant breakdown.",
  alternates: {
    canonical: "https://ausprcalculator.com/subclass-189",
  },
  openGraph: {
    title: "Subclass 189 Points Calculator (2026) | Skilled Independent Visa Australia",
    description:
      "Calculate your Skilled Independent Subclass 189 visa points for 2026. Check invitation cut-offs, PTE/IELTS requirements, and MLTSSL eligibility instant breakdown.",
    url: "https://ausprcalculator.com/subclass-189",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subclass 189 Points Calculator (2026) | Skilled Independent Visa Australia",
    description:
      "Calculate your Skilled Independent Subclass 189 visa points for 2026. Check invitation cut-offs, PTE/IELTS requirements, and MLTSSL eligibility instant breakdown.",
  },
};

export default function Subclass189() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Subclass 189 Calculator", href: "/subclass-189" },
  ];

  return (
    <main className="flex-1 min-h-screen">
      {/* Page-Specific Schema Markup */}
      <SchemaMarkup
        faqs={subclass189Faqs}
        pageUrl="https://ausprcalculator.com/subclass-189"
        appName="Subclass 189 Points Calculator"
        appDescription="Calculate your Skilled Independent Subclass 189 visa points for 2026. Check invitation cut-offs, PTE/IELTS requirements, and MLTSSL eligibility instant breakdown."
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbs} renderSchema={false} />

        {/* Header Block */}
        <header className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            Subclass 189 Focus • Skilled Independent PR (0 Bonus Pts)
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Subclass 189 Points Calculator
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-650 dark:text-zinc-400 leading-relaxed">
            Estimate your points eligibility for the Skilled Independent (Subclass 189) visa. 
            The Subclass 189 is an unconditional permanent residence visa that does not require state or employer sponsorship.
          </p>
        </header>

        {/* Calculator Engine Preset to Subclass 189 */}
        <PRCalculatorEngine initialSubclass="189" />

        {/* Server-Rendered Subclass 189 Content Guide */}
        <Subclass189Content />
      </div>

      <Footer />
    </main>
  );
}
