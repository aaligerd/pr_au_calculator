import React from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions governing the use of ausprcalculator.com and its skilled migration points estimator utility.",
  alternates: {
    canonical: "https://ausprcalculator.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Australia PR Points Calculator",
    description: "Terms and Conditions for ausprcalculator.com.",
    url: "https://ausprcalculator.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="flex-1 min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Terms & Conditions", href: "/terms" },
          ]}
        />

        <article className="prose prose-zinc dark:prose-invert max-w-none space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-zinc-500 text-xs md:text-sm">
            Effective Date: September 11, 2026
          </p>

          <p className="text-zinc-650 dark:text-zinc-400 leading-relaxed">
            Please read these Terms & Conditions carefully before using the <strong>ausprcalculator.com</strong> website. By accessing or using this website, you agree to be bound by these terms.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Disclaimer of Migration Legal Advice
          </h2>
          <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900 dark:text-amber-300 text-xs md:text-sm my-4">
            <strong>CRITICAL NOTICE:</strong> The calculations, points breakdowns, and information provided on this website are for general estimation and educational self-assessment only. They do <strong>not</strong> constitute legal, professional, or registered migration advice. Scoring 65 points or higher on this estimator does not guarantee that you will receive an Invitation to Apply (ITA) from the Australian Government.
          </div>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            All migration assessments depend entirely on SkillSelect validation and official skills assessments by relevant Australian assessing authorities. You should always consult with a Registered Migration Agent (MARA) or verify official Department of Home Affairs guidelines before making visa application decisions.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            In no event shall the creators, owners, or operators of <strong>ausprcalculator.com</strong> be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this website or the points calculator engine.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Accuracy of Calculator
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            While we strive to keep all calculations updated for Subclass 189, 190, and 491 visas in accordance with current guidelines, we do not warrant that all parameters, guidelines, or calculations are error-free or fully up-to-date. Australian immigration policies and point thresholds can change without notice.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Intellectual Property
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            The layout, codebase, responsive calculations, styling, and design elements are the intellectual property of ausprcalculator.com. You may not copy, replicate, or scrape the calculation engine or visual assets without express written consent.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Changes to Terms
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            We reserve the right to modify these Terms at any time. Your continued use of the website following any changes signifies your acceptance of the revised Terms.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            For questions or queries regarding these Terms, please contact us at{" "}
            <a href="mailto:terms@ausprcalculator.com" className="text-teal-600 dark:text-teal-400 hover:underline">
              terms@ausprcalculator.com
            </a>.
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}
