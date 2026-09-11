import React from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us & Calculation Methodology",
  description:
    "Learn about our calculation methodology, editorial integrity, and statutory sources behind the Australia PR Points Calculator (ausprcalculator.com).",
  alternates: {
    canonical: "https://ausprcalculator.com/about",
  },
  openGraph: {
    title: "About Us | Australia PR Points Calculator",
    description:
      "Statutory methodology and background behind ausprcalculator.com.",
    url: "https://ausprcalculator.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
          ]}
        />

        <article className="prose prose-zinc dark:prose-invert max-w-none space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-3">
              About AusPR Calculator & Our Methodology
            </h1>
            <p className="text-zinc-650 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
              <strong>ausprcalculator.com</strong> is an independent, non-partisan migration points modeling tool created to help skilled professionals, international graduates, and prospective migrants calculate and understand their eligibility under the Australian General Skilled Migration (GSM) program.
            </p>
          </div>

          <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white">
              Statutory Basis & Legal Framework
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Our calculator engine strictly adheres to the points schedule outlined in <strong>Schedule 6D of the <em>Migration Regulations 1994</em> (Cth)</strong>, administered by the Australian Government’s Department of Home Affairs.
            </p>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Every formula in our calculator reflects current Home Affairs criteria, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-zinc-650 dark:text-zinc-400">
              <li><strong>Age Band Points:</strong> Maximum 30 points for candidates aged 25 to 32; strict cut-off at age 45.</li>
              <li><strong>English Proficiency Standards:</strong> Equivalent benchmarks for IELTS, PTE Academic, and CELPIP General (Competent, Proficient, Superior).</li>
              <li><strong>Employment Experience:</strong> Strict 20-point combined cap across overseas and Australian skilled employment.</li>
              <li><strong>State & Regional Bonus Points:</strong> Automatic +5 points for Subclass 190 and +15 points for Subclass 491.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white">
              Why We Built This Utility
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Most online migration calculators are bloated with ad traps, force users to submit personal contact numbers before showing scores, or run on slow server-rendered architectures.
            </p>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              We built <strong>AusPR Calculator</strong> to be completely open, zero-latency, and privacy-respecting. All calculations execute instantly inside your web browser. No forms, no paywalls, and no phone numbers required.
            </p>
          </section>

          <section className="bg-zinc-100 dark:bg-zinc-900/60 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white">
              Editorial Policy & Disclaimer
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm leading-relaxed">
              The information on this website is for general educational and self-assessment purposes only. 
              We are not registered migration agents (RMA) with the Office of the Migration Agents Registration Authority (OMARA). 
              Migration legislation is subject to amendment; you should always verify criteria on the official Australian Department of Home Affairs website (immi.homeaffairs.gov.au) or consult an accredited migration lawyer prior to lodging a visa.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white">
              Contact & Feedback
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
              We welcome suggestions, bug reports, or partnership inquiries. Reach our engineering and research team at:
            </p>
            <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
              <a href="mailto:support@ausprcalculator.com" className="hover:underline">
                support@ausprcalculator.com
              </a>
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}
