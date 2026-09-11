import React from "react";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ausprcalculator.com, detailing our client-side data architecture, cookie policies, and advertising disclosures.",
  alternates: {
    canonical: "https://ausprcalculator.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Australia PR Points Calculator",
    description: "Privacy and cookie policy for ausprcalculator.com.",
    url: "https://ausprcalculator.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-1 w-full">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Privacy Policy", href: "/privacy" },
          ]}
        />

        <article className="prose prose-zinc dark:prose-invert max-w-none space-y-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 text-xs md:text-sm">
            Last Updated: September 11, 2026
          </p>

          <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
            At <strong>ausprcalculator.com</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we are committed to safeguarding the privacy of our visitors. This Privacy Policy outlines the types of information we collect, how it is handled, and your rights concerning your personal data.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            1. 100% Client-Side Calculator Privacy
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            Our Australian PR Points Calculator is engineered to run entirely within your web browser client. When you choose your age, English score, educational credentials, and employment history:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-xs md:text-sm text-zinc-650 dark:text-zinc-400">
            <li>No answers, scores, or personal criteria are transmitted to or stored on our servers.</li>
            <li>We do not record, sell, or profile your personal migration details.</li>
            <li>You are never required to provide a name, email address, or phone number to use any calculator feature.</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            2. Google AdSense & Third-Party Advertising Cookies
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to our website or other websites on the Internet:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-zinc-650 dark:text-zinc-400">
            <li>
              <strong>Google Advertising Cookies:</strong> Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
            </li>
            <li>
              <strong>Opting Out:</strong> Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 underline"
              >
                Google Ads Settings
              </a>
              . Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 underline"
              >
                aboutads.info
              </a>
              .
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            3. Web Analytics (Google Analytics 4)
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            We use Google Analytics 4 (GA4) to analyze traffic patterns, device resolutions, and user experience. GA4 collects aggregate, anonymized technical telemetry (such as browser type, operating system, and pages visited). No Personally Identifiable Information (PII) is stored or associated with analytics cookies.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            4. California Consumer Privacy Act (CCPA) & GDPR Rights
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            Under CCPA and the EU General Data Protection Regulation (GDPR), users have the right to request disclosure of categories of personal information collected, request deletion of data, and opt out of data sharing. Because ausprcalculator.com does not collect or retain personal user data, no user tracking databases exist.
          </p>

          <h2 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-8 mb-4">
            5. Contact Information
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
            If you have questions or inquiries regarding this Privacy Policy, contact us at:{" "}
            <a href="mailto:privacy@ausprcalculator.com" className="text-teal-600 dark:text-teal-400 hover:underline font-semibold">
              privacy@ausprcalculator.com
            </a>
          </p>
        </article>
      </div>
      <Footer />
    </main>
  );
}
