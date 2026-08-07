import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function TermsPage() {
  return (
    <main className="flex-1 bg-zinc-50 dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-150 transition-colors duration-250 flex flex-col">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        {/* Header navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            ← Back to Calculator
          </Link>
        </div>

        <article className="prose prose-zinc dark:prose-invert max-w-none space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-zinc-550 dark:text-zinc-500 text-sm">
            Effective Date: August 7, 2026
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Please read these Terms & Conditions carefully before using the <strong>ausprcalculator.com</strong> website. By accessing or using this website, you agree to be bound by these terms.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Disclaimer of Migration Advice
          </h2>
          <p className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900 dark:text-amber-300 text-sm my-4">
            <strong>CRITICAL NOTICE:</strong> The calculations, points breakdowns, and information provided on this website are for general estimation and educational purposes only. They do <strong>not</strong> constitute legal, professional, or migration advice. Gaining 65 points or more on this estimator does not guarantee that you will receive an invitation to apply (ITA) from the Australian government.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            All migration assessments depend entirely on SkillSelect validation and official assessments by relevant Australian authorities. You should always consult with a Registered Migration Agent (MARA) or the official Department of Home Affairs guidelines before making visa application decisions.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            In no event shall the creators, owners, or operators of <strong>ausprcalculator.com</strong> be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this website or the points calculator engine.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Accuracy of Calculator
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            While we strive to keep all calculations updated for Subclass 189, 190, and 491 visas in accordance with 2026 guidelines, we do not warrant that all parameters, guidelines, or calculations are error-free or fully up-to-date. Australian immigration policies can change without notice.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Intellectual Property
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            The layout, codebase, responsive calculations, styling, and design elements are the intellectual property of ausprcalculator.com. You may not copy, replicate, or scrape the calculation engine or visual assets without express written consent.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Changes to Terms
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We reserve the right to modify these Terms at any time. Your continued use of the website following any changes signifies your acceptance of the revised Terms.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            For questions or queries regarding these Terms, please contact us at <a href="mailto:terms@ausprcalculator.com" className="text-teal-600 dark:text-teal-400 hover:underline">terms@ausprcalculator.com</a>.
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}
