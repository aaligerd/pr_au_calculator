import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 py-8 text-center text-xs text-zinc-500 dark:text-zinc-600 mt-20">
      <div className="max-w-6xl mx-auto px-4 space-y-4">
        <div className="flex justify-center gap-6 text-zinc-600 dark:text-zinc-400 font-medium">
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Calculator
          </Link>
          <Link href="/about" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            About Us
          </Link>
          <Link href="/privacy" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Terms & Conditions
          </Link>
        </div>
        <p>© {new Date().getFullYear()} ausprcalculator.com. All rights reserved.</p>
        <p className="max-w-xl mx-auto leading-relaxed">
          Disclaimer: This points calculator is a tool to help estimate your score under the Australian migration points test. 
          Official assessment depends entirely on SkillSelect validation and skills assessments by relevant authorities.
        </p>
      </div>
    </footer>
  );
}
