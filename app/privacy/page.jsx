import React from "react";
import Link from "next/link";
import Footer from "../../components/Footer";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-zinc-550 dark:text-zinc-500 text-sm">
            Effective Date: August 7, 2026
          </p>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            At <strong>ausprcalculator.com</strong>, we take the privacy of our visitors seriously. This document describes the type of information that is collected and recorded by our website and how we use it.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Our points calculator is designed to execute entirely <strong>client-side</strong> in your web browser. When you select your age, education, and experience criteria:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-zinc-600 dark:text-zinc-400">
            <li>We do <strong>not</strong> send your choices, qualifications, or points to any backend servers.</li>
            <li>We do <strong>not</strong> collect or store any personal data (such as names, phone numbers, or email addresses) unless you explicitly send us an email.</li>
            <li>No data inputs from the calculator are logged, database-stored, or sold to third parties.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Cookies and Web Analytics
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            We use Google Analytics 4 (GA4) to analyze traffic patterns and user behavior to improve site speed, design, and user experience. Google Analytics uses cookies (small text files placed on your device) to collect anonymous traffic statistics (such as page views, button clicks, and country locations).
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            No personally identifiable information (PII) is linked to these cookies. You can choose to disable cookies through your individual browser options.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Third-Party Services
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            This Privacy Policy does not apply to other websites or advertisers. We advise you to consult the respective Privacy Policies of these third-party servers (such as Google Tag Manager / GA4) for more detailed information.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Consent
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            Contact
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:privacy@ausprcalculator.com" className="text-teal-600 dark:text-teal-400 hover:underline">privacy@ausprcalculator.com</a>.
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}
