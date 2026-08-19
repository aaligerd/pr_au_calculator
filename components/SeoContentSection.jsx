import React from "react";
import Link from "next/link";

export default function SeoContentSection() {
  return (
    <section className="mt-16 space-y-12 border-t border-zinc-200 dark:border-zinc-800 pt-16">
      {/* SECTION 1: Point Allocation Guide */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
          Official Department of Home Affairs Point Allocation Guide
        </h2>
        <div className="text-zinc-600 dark:text-zinc-400 space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            To apply for skilled migration to Australia through the points-tested visa pathways, you must first submit an 
            <strong> Expression of Interest (EOI)</strong> through the Department of Home Affairs’ online <strong>SkillSelect</strong> system. 
            The base eligibility threshold to be invited to apply is a minimum of <strong>65 points</strong>.
          </p>
          <p>
            This point system applies specifically to the following key visa subclasses:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>
                <Link href="/subclass-189" className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-semibold underline">
                  Subclass 189 (Skilled Independent Visa):
                </Link>
              </strong> A permanent resident visa that does not require sponsorship from a state, territory, or family member. Points are based entirely on your personal credentials.
            </li>
            <li>
              <strong>
                <Link href="/subclass-190" className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-semibold underline">
                  Subclass 190 (Skilled Nominated Visa):
                </Link>
              </strong> A permanent resident visa requiring nomination by an Australian State or Territory government. Gaining nomination automatically awards an additional <strong>5 points</strong>.
            </li>
            <li>
              <strong>
                <Link href="/subclass-491" className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-semibold underline">
                  Subclass 491 (Skilled Work Regional Provisional Visa):
                </Link>
              </strong> A 5-year provisional pathway requiring sponsorship by a state government or an eligible relative living in regional Australia. It automatically grants an extra <strong>15 points</strong>.
            </li>
          </ul>
          <p className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-4 rounded-r-xl text-amber-900 dark:text-amber-300 text-sm mt-4">
            <strong>Important Note:</strong> Reaching the 65-point benchmark makes you eligible to enter the SkillSelect pool, but it does not guarantee an Invitation to Apply (ITA). Due to high competition, competitive fields such as Engineering, IT, and Finance often require significantly higher scores to receive an invitation.
          </p>
        </div>
      </article>

      {/* SECTION 2: Points Breakdown Table */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
          Australia PR Points Breakdown Table
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-4 font-bold">Category</th>
                <th className="p-4 font-bold">Criteria & Description</th>
                <th className="p-4 font-bold text-right">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              {/* Age */}
              <tr>
                <td className="p-4 font-semibold text-zinc-900 dark:text-white" rowSpan="5">Age</td>
                <td className="p-4">18 to 24 years</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">25</td>
              </tr>
              <tr>
                <td className="p-4">25 to 32 years</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">30</td>
              </tr>
              <tr>
                <td className="p-4">33 to 39 years</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">25</td>
              </tr>
              <tr>
                <td className="p-4">40 to 44 years</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">15</td>
              </tr>
              <tr>
                <td className="p-4">45 years and over</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">0</td>
              </tr>

              {/* English */}
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4 font-semibold text-zinc-900 dark:text-white" rowSpan="3">English Language Ability</td>
                <td className="p-4">Competent English (IELTS 6.0 / PTE 50 equivalent)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">0</td>
              </tr>
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4">Proficient English (IELTS 7.0 / PTE 65 equivalent)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4">Superior English (IELTS 8.0 / PTE 79 equivalent)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">20</td>
              </tr>

              {/* Overseas Experience */}
              <tr>
                <td className="p-4 font-semibold text-zinc-900 dark:text-white" rowSpan="4">Overseas Work Experience</td>
                <td className="p-4">Less than 3 years</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">0</td>
              </tr>
              <tr>
                <td className="p-4">3 to 4 years (within the last 10 years)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr>
                <td className="p-4">5 to 7 years (within the last 10 years)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr>
                <td className="p-4">8+ years (within the last 10 years)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">15</td>
              </tr>

              {/* Australian Experience */}
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4 font-semibold text-zinc-900 dark:text-white" rowSpan="5">Australian Work Experience</td>
                <td className="p-4">Less than 1 year</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">0</td>
              </tr>
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4">1 to 2 years (within the last 10 years)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4">3 to 4 years (within the last 10 years)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4">5 to 7 years (within the last 10 years)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">15</td>
              </tr>
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4">8+ years (within the last 10 years)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">20</td>
              </tr>

              {/* Education */}
              <tr>
                <td className="p-4 font-semibold text-zinc-900 dark:text-white" rowSpan="4">Educational Qualification</td>
                <td className="p-4">Doctorate (PhD) from an Australian or recognized overseas university</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">20</td>
              </tr>
              <tr>
                <td className="p-4">Bachelor degree or higher (Master's) from AU or recognized institution</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">15</td>
              </tr>
              <tr>
                <td className="p-4">Trade qualification or diploma completed in Australia</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr>
                <td className="p-4">An award or qualification recognized by the skills assessing authority</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>

              {/* Partner Skills */}
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4 font-semibold text-zinc-900 dark:text-white" rowSpan="4">Partner Skills</td>
                <td className="p-4">Single or partner is an Australian Citizen / Permanent Resident</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4">Partner under 45, Competent English, and suitable Skills Assessment</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4">Partner has Competent English only (No Skills Assessment)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr className="bg-zinc-50/30 dark:bg-zinc-900/10">
                <td className="p-4">Partner is neither competent in English nor assessed</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">0</td>
              </tr>

              {/* Specialist Qualifications */}
              <tr>
                <td className="p-4 font-semibold text-zinc-900 dark:text-white" rowSpan="5">Additional Bonus Options</td>
                <td className="p-4">Specialist STEM Degree (Master's by research/PhD in STEM in AU)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr>
                <td className="p-4">Australian Study Requirement (Min 2 academic years study)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr>
                <td className="p-4">Study in Regional Australia (Meets AU study requirement)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr>
                <td className="p-4">Credentialled Community Language (NAATI CCL Certified)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr>
                <td className="p-4">Professional Year in Australia (Accounting, IT, or Engineering)</td>
                <td className="p-4 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: Frequently Asked Questions */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sky-400 font-semibold mb-2">
              How many points do I need for PR Australia?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The minimum pass mark to submit an Expression of Interest (EOI) for Australia Skilled Independent (Subclass 189), State Nominated (Subclass 190), or Regional (Subclass 491) visas is 65 points. However, competitive invitation rounds often require higher scores depending on your nominated occupation.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sky-400 font-semibold mb-2">
              Can I get PR with 70 points in Australia?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Yes, 70 points is above the minimum 65-point requirement. While Subclass 189 federal invitations can be competitive, 70 points makes you eligible for Subclass 190 state nominations (adding +5 points) or Subclass 491 regional visas (adding +15 points).
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sky-400 font-semibold mb-2">
              Can I get PR with 60 points?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              No, you cannot directly lodge an Expression of Interest for Subclass 189 or 190 with 60 points, as the mandatory minimum threshold is 65 points. However, with 60 base points, you can apply for a Subclass 491 Regional Provisional Visa, which automatically awards you +15 bonus points, bringing your total score to 75.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sky-400 font-semibold mb-2">
              Can I apply 491 with 50 points?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Yes! The Subclass 491 (Skilled Work Regional) visa provides 15 bonus nomination points. If you have 50 base points, adding the 15 regional nomination points brings your total to 65 points, meeting the required threshold.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sky-400 font-semibold mb-2">
              Is 75 points good for Australia PR?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Yes, 75 points is considered a solid score for Australian permanent residency, particularly for state-nominated (Subclass 190) and regional (Subclass 491) visas.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sky-400 font-semibold mb-2">
              Which city is easy to get PR in Australia?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Designated regional areas like Adelaide (South Australia), Perth (Western Australia), Hobart (Tasmania), and regional NSW/QLD offer easier pathways to PR via Subclass 491 and 190 state nominations due to lower point cutoffs.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sky-400 font-semibold mb-2">
              What is the DIBP points test or SkillSelect system?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              The Department of Home Affairs (formerly DIBP) uses the SkillSelect points test to assess candidates for skilled migration. Points are awarded based on age, English capability, work experience, qualifications, and state/regional sponsorship. You must score at least 65 points to submit an EOI.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sky-400 font-semibold mb-2">
              How do PTE, IELTS, or CELPIP scores calculate points for Australian PR?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              English proficiency is a key points driver. Competent English (IELTS 6.0 / PTE 50) awards 0 points. Proficient English (IELTS 7.0 / PTE 65 / CELPIP 7) awards 10 points. Superior English (IELTS 8.0 / PTE 79 / CELPIP 9) awards 20 points, significantly improving your invitation chances.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 md:col-span-2">
            <h3 className="text-sky-400 font-semibold mb-2">
              Is it easy to get PR in Australia?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Getting PR in Australia depends on your ANZSCO occupation, age, English proficiency, and willingness to live in regional areas. Maximizing points through Superior English (PTE 79+ / IELTS 8.0) and NAATI CCL accreditation significantly improves your invitation chances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
