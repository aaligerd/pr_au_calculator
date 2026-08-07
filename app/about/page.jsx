import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function AboutPage() {
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
            About Us
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Welcome to <strong>Australia PR Points Calculator</strong> (ausprcalculator.com). We are dedicated to providing prospective skilled migrants with a fast, zero-latency, and accurate tool to estimate their points eligibility under the current Australian Department of Home Affairs guidelines.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Our Mission
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Navigating the Australian immigration points test can be complex, with many rules for age brackets, English proficiency levels, work experience caps, partner points, and regional state nominations. Our mission is to simplify this process by presenting an intuitive, fast client-side engine that instantly evaluates all potential combinations of your eligibility profile.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-400">
            <li><strong>Zero Latency:</strong> All calculations happen inside your browser instantly as you select options.</li>
            <li><strong>Up-to-Date Rules:</strong> The estimator is configured with the latest Department of Home Affairs and SkillSelect point thresholds.</li>
            <li><strong>Subclass Breakdown:</strong> Compares your points for Subclass 189 (Independent), Subclass 190 (Nominated), and Subclass 491 (Regional Provisional) simultaneously.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Our Team
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We are a group of technical engineers and skilled migration consultants who believe in open, accessible, and fast web utilities. We designed this calculator to eliminate the clunky multi-page wizards common on other sites, replacing them with a single-screen responsive panel.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Contact
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            If you have questions, feedback, or need assistance, please feel free to reach out to us at <a href="mailto:support@ausprcalculator.com" className="text-teal-600 dark:text-teal-400 hover:underline">support@ausprcalculator.com</a>.
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}
