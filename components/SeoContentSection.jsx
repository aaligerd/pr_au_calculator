import React from "react";

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
              <strong>Subclass 189 (Skilled Independent Visa):</strong> A permanent resident visa that does not require sponsorship from a state, territory, or family member. Points are based entirely on your personal credentials.
            </li>
            <li>
              <strong>Subclass 190 (Skilled Nominated Visa):</strong> A permanent resident visa requiring nomination by an Australian State or Territory government. Gaining nomination automatically awards an additional <strong>5 points</strong>.
            </li>
            <li>
              <strong>Subclass 491 (Skilled Work Regional Provisional Visa):</strong> A 5-year provisional pathway requiring sponsorship by a state government or an eligible relative living in regional Australia. It automatically grants an extra <strong>15 points</strong>.
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
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800/80 rounded-2xl">
            <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white mb-2">
              What is the minimum points score to apply for Australia PR?
            </h3>
            <p className="text-sm md:text-base text-zinc-650 dark:text-zinc-400 leading-relaxed">
              The official minimum points score required to file a SkillSelect Expression of Interest (EOI) for the Subclass 189, 190, or 491 visas is <strong>65 points</strong>. However, because invitations are issued on a competitive basis, a higher score significantly improves your likelihood of receiving an Invitation to Apply (ITA).
            </p>
          </div>

          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800/80 rounded-2xl">
            <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white mb-2">
              How does NAATI CCL help with Australian immigration points?
            </h3>
            <p className="text-sm md:text-base text-zinc-650 dark:text-zinc-400 leading-relaxed">
              Passing the Credentialled Community Language (CCL) test conducted by the National Accreditation Authority for Translators and Interpreters (NAATI) awards you <strong>5 bonus points</strong>. This exam assesses your capability to translate dialogues from English to a community language and vice versa.
            </p>
          </div>

          <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800/80 rounded-2xl">
            <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-white mb-2">
              Can I combine overseas and Australian work experience points?
            </h3>
            <p className="text-sm md:text-base text-zinc-650 dark:text-zinc-400 leading-relaxed">
              Yes, you can claim points for both overseas and Australian skilled employment if they are in your nominated occupation or a closely related one. However, the Department of Home Affairs enforces a strict <strong>hard cap of 20 points combined</strong> maximum. If your total work experience points exceed 20, they will be restricted to 20 points in the final calculation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
