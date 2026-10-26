import React from "react";
import PRCalculatorEngine from "../../components/PRCalculatorEngine";
import Subclass491Content, { subclass491Faqs } from "../../components/Subclass491Content";
import SchemaMarkup from "../../components/SchemaMarkup";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Subclass 491 Points Calculator (2026) | Skilled Work Regional Visa (+15 Pts)",
  description:
    "Calculate your Subclass 491 points with automatic +15 regional sponsorship points. Check eligibility for regional state nomination, family sponsorship, and Subclass 191 PR pathway.",
  alternates: {
    canonical: "https://ausprcalculator.com/subclass-491",
  },
  openGraph: {
    title: "Subclass 491 Points Calculator (2026) | Skilled Work Regional Visa (+15 Pts)",
    description:
      "Calculate your Subclass 491 points with automatic +15 regional sponsorship points. Check eligibility for regional state nomination, family sponsorship, and Subclass 191 PR pathway.",
    url: "https://ausprcalculator.com/subclass-491",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subclass 491 Points Calculator (2026) | Skilled Work Regional Visa (+15 Pts)",
    description:
      "Calculate your Subclass 491 points with automatic +15 regional sponsorship points. Check eligibility for regional state nomination, family sponsorship, and Subclass 191 PR pathway.",
  },
};

export default function Subclass491() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Subclass 491 Calculator", href: "/subclass-491" },
  ];

  return (
    <main className="flex-1 min-h-screen">
      {/* Page-Specific Schema Markup */}
      <SchemaMarkup
        faqs={subclass491Faqs}
        pageUrl="https://ausprcalculator.com/subclass-491"
        appName="Subclass 491 Points Calculator"
        appDescription="Calculate your Subclass 491 points with automatic +15 regional sponsorship points. Check eligibility for regional state nomination, family sponsorship, and Subclass 191 PR pathway."
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={breadcrumbs} renderSchema={false} />

        {/* Header Block */}
        <header className="text-center max-w-3xl mx-auto mb-10 md:mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
            Subclass 491 Focus • Includes +15 Regional Sponsorship Points
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Subclass 491 Points Calculator
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-650 dark:text-zinc-400 leading-relaxed">
            Calculate your points for the Skilled Work Regional (Subclass 491) provisional visa. 
            State nomination or sponsorship by an eligible relative residing in regional Australia automatically adds 15 bonus points to your score.
          </p>
        </header>

        {/* Calculator Engine Preset to Subclass 491 */}
        <PRCalculatorEngine initialSubclass="491" />

        {/* Server-Rendered Subclass 491 Content Guide */}
        <Subclass491Content />
      </div>

      <Footer />
    </main>
  );
}
