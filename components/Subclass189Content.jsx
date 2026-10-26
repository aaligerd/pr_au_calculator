import React from "react";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";
import GsmGuideSection from "./GsmGuideSection";

export const subclass189Faqs = [
  {
    question: "What is the minimum points score required for Subclass 189 in 2026?",
    answer:
      "The statutory minimum pass mark to lodge an Expression of Interest (EOI) for the Skilled Independent (Subclass 189) visa is 65 points. However, because Subclass 189 is ranked purely on points and occupation demand without any state nomination buffer, invitations in competitive fields (such as Software Engineering, Developer Programmer, and Accounting) frequently require 85 to 95+ points.",
  },
  {
    question: "Is 70 or 75 points enough to get an invitation for Subclass 189?",
    answer:
      "For designated priority sectors (such as Registered Nurses, Secondary School Teachers, Early Childhood Teachers, and specific Medical Specialists), 65 to 75 points is frequently sufficient for an invitation in federal invitation rounds. For popular IT and engineering roles, 70–75 points is usually insufficient for Subclass 189 alone; applicants in these sectors are advised to lodge parallel EOIs for Subclass 190 (state nomination +5 pts) and Subclass 491 (regional +15 pts).",
  },
  {
    question: "Can I lodge an EOI for Subclass 189 with exactly 65 points?",
    answer:
      "Yes. Any applicant with a positive skills assessment for an occupation on the MLTSSL, Competent English, and at least 65 points can legally lodge an EOI in SkillSelect. If federal quotas expand or priority sector invitations are issued, candidates with 65 points can receive an Invitation to Apply (ITA).",
  },
  {
    question: "How long is my English language test valid for Subclass 189?",
    answer:
      "For the Subclass 189 visa, English test results (PTE Academic, IELTS, Cambridge C1, or CELPIP) are valid for 3 years immediately preceding the date of invitation. Even if testing authorities state a 2-year validity on the scorecard, the Department of Home Affairs honors the 3-year statutory standard for GSM.",
  },
  {
    question: "Does the Subclass 189 visa require state nomination or employer sponsorship?",
    answer:
      "No. The Subclass 189 is an independent, points-tested permanent residency visa. You do not require an Australian employer, state or territory government nomination, or family sponsor. Once granted, you receive immediate Australian Permanent Residency with complete freedom to live, work, and study in any Australian state or city.",
  },
  {
    question: "Which occupation list is eligible for the Subclass 189 visa?",
    answer:
      "Only occupations listed on the federal Medium and Long-term Strategic Skills List (MLTSSL) are eligible for Subclass 189. Occupations appearing exclusively on the Short-term Skilled Occupation List (STSOL) or Regional Occupation List (ROL) cannot apply for Subclass 189, though they may qualify for Subclass 190 or 491.",
  },
  {
    question: "How often are federal Subclass 189 invitation rounds held?",
    answer:
      "The Department of Home Affairs conducts invitation rounds for the Subclass 189 visa periodically throughout the migration program year. While historically conducted monthly, rounds are now typically conducted quarterly or as determined by federal labor demand and ministerial directions.",
  },
  {
    question: "Can offshore applicants receive an invitation for Subclass 189?",
    answer:
      "Yes. The Department of Home Affairs invites both onshore (applicants living in Australia on valid visas) and offshore candidates for Subclass 189 based strictly on points ranking and occupation ceilings. In recent migration program years, substantial allocations have been granted to offshore healthcare and education professionals.",
  },
];

export default function Subclass189Content() {
  return (
    <section className="mt-16 space-y-16 border-t border-zinc-200 dark:border-zinc-800 pt-16">
      {/* SECTION 1: Deep Dive Overview */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30 mb-3">
            Skilled Independent Visa Guide
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Complete Guide to Skilled Independent (Subclass 189) Points
          </h2>
          <div className="text-zinc-650 dark:text-zinc-400 space-y-4 text-sm md:text-base leading-relaxed mt-4">
            <p>
              The <strong>Skilled Independent visa (Subclass 189)</strong> is widely considered the
              gold standard of Australian immigration. Unlike state-sponsored or employer-tied visas,
              Subclass 189 grants you unconditional Australian Permanent Residency from day one. You
              have full freedom to reside, work, and study anywhere in Sydney, Melbourne, Brisbane,
              or regional Australia without geographic obligations.
            </p>
            <p>
              Because Subclass 189 provides <strong>0 bonus nomination points</strong>, your position
              in the federal <strong>SkillSelect</strong> pool is determined strictly by your personal
              human capital attributes: age bracket, English test scores (IELTS/PTE/CELPIP),
              qualified work experience, degree credentials, and partner qualifications.
            </p>
          </div>
        </div>
      </article>

      {/* SECTION 2: Real-World Cut-off Benchmarks */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 pb-4 border-b border-zinc-150 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
            ⚡
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white">
              65 Points Pass Mark vs Real-World Invitation Cut-offs
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Department of Home Affairs SkillSelect round analysis
            </p>
          </div>
        </div>

        <p className="text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed">
          While <strong>65 points</strong> is the legal threshold to lodge an Expression of Interest
          (EOI), invitations are issued in descending order of points scores within each occupation
          ceiling. Recent round data reveals three clear cut-off tiers:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 bg-zinc-50 dark:bg-zinc-950/50">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 mb-3">
              Tier 1: Priority Occupations
            </span>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Healthcare &amp; Education</h4>
            <p className="text-zinc-500 dark:text-zinc-400 mb-3 text-xs leading-relaxed">
              Registered Nurses, Secondary School Teachers, Early Childhood Educators, Midwives, Doctors.
            </p>
            <p className="font-black text-teal-600 dark:text-teal-400 text-lg">65 – 75 Points</p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 bg-zinc-50 dark:bg-zinc-950/50">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 mb-3">
              Tier 2: Moderate Competition
            </span>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Engineering &amp; Trade Skills</h4>
            <p className="text-zinc-500 dark:text-zinc-400 mb-3 text-xs leading-relaxed">
              Civil Engineers, Mechanical Engineers, Electrical Engineers, Construction Managers, Chefs.
            </p>
            <p className="font-black text-teal-600 dark:text-teal-400 text-lg">80 – 85 Points</p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 bg-zinc-50 dark:bg-zinc-950/50">
            <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 mb-3">
              Tier 3: High Competition
            </span>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">IT, Computing &amp; Finance</h4>
            <p className="text-zinc-500 dark:text-zinc-400 mb-3 text-xs leading-relaxed">
              Software Engineers, Developer Programmers, ICT Business Analysts, Accountants, Auditors.
            </p>
            <p className="font-black text-teal-600 dark:text-teal-400 text-lg">85 – 95+ Points</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-teal-50/50 dark:bg-teal-950/30 border border-teal-200/50 dark:border-teal-900/30 text-xs text-teal-800 dark:text-teal-300">
          💡 <strong>Strategic Insight:</strong> If your points score sits between 65 and 80 in high-competition
          occupations, increase your invitation probability by lodging parallel EOIs for{" "}
          <Link href="/subclass-190" className="underline font-bold">
            Subclass 190 (+5 state points)
          </Link>{" "}
          and{" "}
          <Link href="/subclass-491" className="underline font-bold">
            Subclass 491 (+15 regional points)
          </Link>
          .
        </div>
      </div>

      {/* SECTION 3: English Test Benchmarks Table */}
      <div>
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30 mb-3">
            English Benchmarks
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white">
            English Language Points Conversion: PTE Academic vs IELTS vs CELPIP
          </h3>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
            English proficiency is the single most controllable points booster. Moving from Competent
            (0 pts) to Superior (20 pts) can lift your profile by 20 points:
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-4 font-bold">English Level</th>
                <th className="p-4 font-bold">IELTS (Academic/General)</th>
                <th className="p-4 font-bold">PTE Academic</th>
                <th className="p-4 font-bold">CELPIP General</th>
                <th className="p-4 font-bold text-right">Points Claimed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-650 dark:text-zinc-400">
              <tr>
                <td className="p-4 font-semibold text-zinc-900 dark:text-white">Competent English</td>
                <td className="p-4">6.0 in all 4 bands</td>
                <td className="p-4">50 in each section</td>
                <td className="p-4">Band 7 in each section</td>
                <td className="p-4 text-right font-extrabold text-zinc-700 dark:text-zinc-300">0 Points</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-semibold text-zinc-900 dark:text-white">Proficient English</td>
                <td className="p-4">7.0 in all 4 bands</td>
                <td className="p-4">65 in each section</td>
                <td className="p-4">Band 8 in each section</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">+10 Points</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-zinc-900 dark:text-white">Superior English</td>
                <td className="p-4">8.0 in all 4 bands</td>
                <td className="p-4">79 in each section</td>
                <td className="p-4">Band 9+ in each section</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">+20 Points</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: Strategic Step-by-Step GSM Guide */}
      <GsmGuideSection subclassContext="Subclass 189" />

      {/* SECTION 5: Subclass 189 Targeted FAQs */}
      <div>
        <FaqAccordion
          faqs={subclass189Faqs}
          title="Frequently Asked Questions: Skilled Independent (Subclass 189)"
        />
      </div>
    </section>
  );
}
