import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 py-12 text-center text-xs text-zinc-500 dark:text-zinc-500 mt-20">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {/* Visa Subclasses Navigation */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs font-semibold uppercase tracking-wider text-teal-700 dark:text-teal-400">
          <Link href="/subclass-189" className="hover:underline underline-offset-4">
            Subclass 189 Visa
          </Link>
          <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <Link href="/subclass-190" className="hover:underline underline-offset-4">
            Subclass 190 Visa (+5 Pts)
          </Link>
          <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <Link href="/subclass-491" className="hover:underline underline-offset-4">
            Subclass 491 Visa (+15 Pts)
          </Link>
        </div>

        {/* Site Utility Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-zinc-600 dark:text-zinc-400 font-medium">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            All-in-One Calculator
          </Link>
          <Link href="/about" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            About Us & Methodology
          </Link>
          <Link href="/privacy" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Terms & Conditions
          </Link>
        </div>

        {/* Statutory E-E-A-T Disclaimer */}
        <p className="max-w-3xl mx-auto leading-relaxed text-zinc-500 dark:text-zinc-500 text-[11px]">
          <strong>Statutory Disclaimer:</strong> ausprcalculator.com is an independent informational utility and points estimator. 
          Points calculations are modeled in accordance with Schedule 6D of the <em>Migration Regulations 1994</em> (Cth) administered by the Australian Department of Home Affairs. 
          This tool does not provide immigration legal advice or registered migration assistance. Official eligibility is determined solely upon lodgement of an Expression of Interest (EOI) via SkillSelect and formal skills assessment by relevant assessing authorities.
        </p>

        <p className="text-[11px] text-zinc-400 dark:text-zinc-600">
          © {new Date().getFullYear()} ausprcalculator.com. All rights reserved. Updated for 2026/2027 SkillSelect guidelines.
        </p>
      </div>
    </footer>
  );
}
