import React from "react";
import Link from "next/link";

export const subclass189Faqs = [
  {
    question: "What is the minimum points score required for Subclass 189?",
    answer:
      "The statutory minimum pass mark to lodge an Expression of Interest (EOI) for the Skilled Independent (Subclass 189) visa is 65 points. However, because Subclass 189 is ranked purely on points and occupation demand, invitations in high-competition fields (such as Software Engineering, Accounting, and ICT) frequently require 85 to 95+ points.",
  },
  {
    question: "Is 70 or 75 points enough to get an invitation for Subclass 189?",
    answer:
      "For priority occupations such as Registered Nurses, Secondary School Teachers, and designated healthcare professionals, 65 to 75 points is frequently sufficient for an invitation. For popular IT and engineering roles, 70–75 points is usually insufficient for Subclass 189 alone; applicants in these sectors are advised to pursue Subclass 190 (state nomination +5 pts) or Subclass 491 (regional +15 pts) to boost their score.",
  },
  {
    question: "Which English tests are accepted for Subclass 189 points, including CELPIP and PTE?",
    answer:
      "The Department of Home Affairs accepts PTE Academic, IELTS, Cambridge (C1 Advanced), TOEFL iBT, and newly accredited tests such as CELPIP General. Scoring Proficient English (IELTS 7.0 / PTE 65 / CELPIP 7 each band) yields 10 points. Scoring Superior English (IELTS 8.0 / PTE 79 / CELPIP 9 each band) yields 20 points.",
  },
  {
    question: "Does Subclass 189 require state nomination or employer sponsorship?",
    answer:
      "No. The Subclass 189 is a purely points-tested independent visa. You do not need an Australian employer, state government nomination, or family sponsor. Once granted, you receive immediate Australian Permanent Residency with full freedom to live and work anywhere across Australia.",
  },
  {
    question: "Which occupations are eligible for the Subclass 189 visa?",
    answer:
      "Only occupations listed on the Medium and Long-term Strategic Skills List (MLTSSL) are eligible for Subclass 189. Your occupation must have a positive skills assessment from the designated assessing body (such as ACS for IT, Engineers Australia for engineers, or VETASSESS for general professionals).",
  },
  {
    question: "How often are federal Subclass 189 invitation rounds held?",
    answer:
      "The Department of Home Affairs conducts invitation rounds for Subclass 189 periodically throughout the migration program year (typically quarterly or as determined by federal labor demand), based on SkillSelect EOI rankings.",
  },
];

export default function Subclass189Content() {
  return (
    <section className="mt-16 space-y-12 border-t border-zinc-200 dark:border-zinc-800 pt-16">
      {/* SECTION 1: Deep Dive Overview */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-4">
          Complete Guide to Skilled Independent (Subclass 189) Points
        </h2>
        <div className="text-zinc-650 dark:text-zinc-400 space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            The <strong>Skilled Independent visa (Subclass 189)</strong> is widely considered the gold standard of Australian permanent residency. 
            Unlike state-sponsored or employer-nominated pathways, Subclass 189 grants you unconditional permanent residency without geographic restrictions, 
            meaning you can live, work, and study anywhere in Sydney, Melbourne, Brisbane, or regional Australia from day one.
          </p>
          <p>
            Because Subclass 189 does not provide bonus nomination points, your rank in the federal <strong>SkillSelect</strong> pool depends solely 
            on your personal attributes: your age, English proficiency, qualified work experience, education level, and partner qualifications.
          </p>
        </div>
      </article>

      {/* SECTION 2: Invitation Cut-offs & Strategy */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg">
            ⚡
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white">
              65 Points Minimum vs Real-World Cut-off Scores
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Understanding competition in the SkillSelect pool
            </p>
          </div>
        </div>

        <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
          While the official pass mark to lodge an Expression of Interest (EOI) is <strong>65 points</strong>, invitations are issued in descending order of points. 
          Here is how cut-offs generally distribute across occupational sectors:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 mb-2">
              Priority Sector
            </span>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Healthcare & Teaching</h4>
            <p className="text-zinc-500 dark:text-zinc-400 mb-2 text-xs">Registered Nurses, Teachers, Social Workers</p>
            <p className="font-extrabold text-teal-600 dark:text-teal-400 text-base">65 – 75 Points</p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 mb-2">
              Moderate Demand
            </span>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Engineering & Trades</h4>
            <p className="text-zinc-500 dark:text-zinc-400 mb-2 text-xs">Civil, Mechanical, Electricians, Chefs</p>
            <p className="font-extrabold text-teal-600 dark:text-teal-400 text-base">80 – 85 Points</p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 mb-2">
              High Competition
            </span>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">IT, Software & Accounting</h4>
            <p className="text-zinc-500 dark:text-zinc-400 mb-2 text-xs">Developers, Analysts, Accountants, Auditors</p>
            <p className="font-extrabold text-teal-600 dark:text-teal-400 text-base">85 – 95+ Points</p>
          </div>
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          💡 If your score is between 65 and 80 in high-competition professions, consider lodging an EOI for{" "}
          <Link href="/subclass-190" className="text-teal-600 dark:text-teal-400 font-semibold underline">
            Subclass 190 (+5 points)
          </Link>{" "}
          or{" "}
          <Link href="/subclass-491" className="text-teal-600 dark:text-teal-400 font-semibold underline">
            Subclass 491 (+15 points)
          </Link>
          .
        </p>
      </div>

      {/* SECTION 3: English Test Conversion Comparison */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mb-4">
          English Language Points Conversion: PTE vs IELTS vs CELPIP
        </h3>
        <p className="text-zinc-650 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
          English proficiency is the single most controllable points driver. Upgrading from Competent (0 pts) to Superior (20 pts) often makes the difference between waiting years and receiving an immediate invitation.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-3.5 font-bold">English Level</th>
                <th className="p-3.5 font-bold">IELTS</th>
                <th className="p-3.5 font-bold">PTE Academic</th>
                <th className="p-3.5 font-bold">CELPIP General</th>
                <th className="p-3.5 font-bold text-right">Points Claimable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-650 dark:text-zinc-400">
              <tr>
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white">Competent English</td>
                <td className="p-3.5">6.0 in all 4 bands</td>
                <td className="p-3.5">50 in each component</td>
                <td className="p-3.5">Band 7 in each component</td>
                <td className="p-3.5 text-right font-bold text-zinc-700 dark:text-zinc-300">0 Points</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white">Proficient English</td>
                <td className="p-3.5">7.0 in all 4 bands</td>
                <td className="p-3.5">65 in each component</td>
                <td className="p-3.5">Band 8 in each component</td>
                <td className="p-3.5 text-right font-bold text-teal-600 dark:text-teal-400">+10 Points</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white">Superior English</td>
                <td className="p-3.5">8.0 in all 4 bands</td>
                <td className="p-3.5">79 in each component</td>
                <td className="p-3.5">Band 9+ in each component</td>
                <td className="p-3.5 text-right font-bold text-teal-600 dark:text-teal-400">+20 Points</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: Subclass 189 FAQs */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mb-6">
          Frequently Asked Questions About Subclass 189
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {subclass189Faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs"
            >
              <h4 className="text-teal-700 dark:text-teal-400 font-semibold mb-2 text-sm md:text-base">
                {faq.question}
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
