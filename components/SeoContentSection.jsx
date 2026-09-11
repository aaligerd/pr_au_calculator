import React from "react";
import Link from "next/link";

export const homepageFaqs = [
  {
    question: "How many points do I need for Australian PR in 2026?",
    answer:
      "The minimum pass mark to lodge an Expression of Interest (EOI) in SkillSelect is 65 points for Subclass 189, Subclass 190, and Subclass 491 visas. However, competitive invitation rounds often require higher scores (80–95+) for high-demand fields such as IT, Engineering, and Accounting.",
  },
  {
    question: "What is the difference between Subclass 189, 190, and 491?",
    answer:
      "Subclass 189 is an independent permanent visa requiring no sponsor. Subclass 190 is a permanent visa requiring state government nomination which awards +5 points. Subclass 491 is a 5-year provisional regional visa requiring state or family regional sponsorship which awards +15 points, with a direct pathway to permanent residency via Subclass 191.",
  },
  {
    question: "Can I get PR in Australia with 70 points?",
    answer:
      "Yes, 70 points exceeds the 65-point eligibility threshold. While federal Subclass 189 invitations for IT/Engineering may require higher scores, 70 points makes you an excellent candidate for Subclass 190 state nomination (giving you 75 total points) or Subclass 491 regional sponsorship (giving you 85 total points).",
  },
  {
    question: "Can I apply for an Australian skilled visa with 60 base points?",
    answer:
      "Yes, via the Subclass 491 Regional visa. Because regional nomination provides an automatic +15 points, having 60 base points elevates your total score to 75 points, comfortably exceeding the 65-point requirement.",
  },
  {
    question: "How does English test scoring impact Australian PR points?",
    answer:
      "Scoring Competent English (IELTS 6.0 / PTE 50 / CELPIP 7) awards 0 points. Proficient English (IELTS 7.0 / PTE 65 / CELPIP 8) awards 10 points. Superior English (IELTS 8.0 / PTE 79 / CELPIP 9) awards 20 points.",
  },
  {
    question: "Is there an age limit for Australian skilled migration points?",
    answer:
      "Yes, applicants must be under 45 years of age at the time of invitation to apply for Subclass 189, 190, or 491 visas. The highest points bracket is for candidates aged 25 to 32, who receive 30 points.",
  },
];

export default function SeoContentSection() {
  return (
    <section className="mt-16 space-y-12 border-t border-zinc-200 dark:border-zinc-800 pt-16">
      {/* SECTION 1: Visa Comparison Matrix */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-4">
          Compare Australian Skilled Visas: Subclass 189 vs 190 vs 491
        </h2>
        <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
          Depending on your personal points score and ANZSCO occupation, you may qualify for one or more points-tested visa streams administered under the Australian <strong>SkillSelect</strong> points system.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-3.5 font-bold">Feature</th>
                <th className="p-3.5 font-bold">Subclass 189 (Independent)</th>
                <th className="p-3.5 font-bold">Subclass 190 (Nominated)</th>
                <th className="p-3.5 font-bold">Subclass 491 (Regional)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-650 dark:text-zinc-400">
              <tr>
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white">Visa Status</td>
                <td className="p-3.5">Direct Permanent Residency (PR)</td>
                <td className="p-3.5">Direct Permanent Residency (PR)</td>
                <td className="p-3.5">5-Year Provisional (Path to PR via 191)</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white">Bonus Points</td>
                <td className="p-3.5 font-bold text-zinc-700 dark:text-zinc-300">0 Points</td>
                <td className="p-3.5 font-bold text-teal-600 dark:text-teal-400">+5 Points</td>
                <td className="p-3.5 font-bold text-teal-600 dark:text-teal-400">+15 Points</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white">Sponsorship Needed</td>
                <td className="p-3.5">None</td>
                <td className="p-3.5">State / Territory Government</td>
                <td className="p-3.5">State Government or Eligible Relative</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white">Geographic Freedom</td>
                <td className="p-3.5">Anywhere in Australia</td>
                <td className="p-3.5">2-Year commitment to nominating state</td>
                <td className="p-3.5">Designated Regional Areas only</td>
              </tr>
              <tr>
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white">Eligible Occupation Lists</td>
                <td className="p-3.5">MLTSSL only</td>
                <td className="p-3.5">MLTSSL & STSOL (State lists)</td>
                <td className="p-3.5">MLTSSL, STSOL & ROL (Regional lists)</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white">Deep-Dive Details</td>
                <td className="p-3.5">
                  <Link href="/subclass-189" className="text-teal-600 dark:text-teal-400 font-bold hover:underline">
                    View 189 Details →
                  </Link>
                </td>
                <td className="p-3.5">
                  <Link href="/subclass-190" className="text-teal-600 dark:text-teal-400 font-bold hover:underline">
                    View 190 Details →
                  </Link>
                </td>
                <td className="p-3.5">
                  <Link href="/subclass-491" className="text-teal-600 dark:text-teal-400 font-bold hover:underline">
                    View 491 Details →
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 2: Official Points Breakdown Table (Schedule 6D) */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-6">
          Schedule 6D General Points Allocation Guide
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-3.5 font-bold">Category</th>
                <th className="p-3.5 font-bold">Criteria & Description</th>
                <th className="p-3.5 font-bold text-right">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-650 dark:text-zinc-400">
              {/* Age */}
              <tr>
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white" rowSpan="5">Age</td>
                <td className="p-3.5">18 to 24 years</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">25</td>
              </tr>
              <tr>
                <td className="p-3.5">25 to 32 years (Prime points bracket)</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">30</td>
              </tr>
              <tr>
                <td className="p-3.5">33 to 39 years</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">25</td>
              </tr>
              <tr>
                <td className="p-3.5">40 to 44 years</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">15</td>
              </tr>
              <tr>
                <td className="p-3.5">45 years and over (Ineligible for points-tested visas)</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">0</td>
              </tr>

              {/* English */}
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white" rowSpan="3">English Language</td>
                <td className="p-3.5">Competent English (IELTS 6.0 / PTE 50 / CELPIP 7)</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">0</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5">Proficient English (IELTS 7.0 / PTE 65 / CELPIP 8)</td>
                <td className="p-3.5 text-right font-bold text-teal-600 dark:text-teal-400">10</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5">Superior English (IELTS 8.0 / PTE 79 / CELPIP 9)</td>
                <td className="p-3.5 text-right font-bold text-teal-600 dark:text-teal-400">20</td>
              </tr>

              {/* Work Experience */}
              <tr>
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white" rowSpan="4">Overseas Experience (Past 10 Years)</td>
                <td className="p-3.5">Less than 3 years</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">0</td>
              </tr>
              <tr>
                <td className="p-3.5">3 to 4 years</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr>
                <td className="p-3.5">5 to 7 years</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr>
                <td className="p-3.5">8+ years</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">15</td>
              </tr>

              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white" rowSpan="4">Australian Experience (Past 10 Years)</td>
                <td className="p-3.5">1 to 2 years</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5">3 to 4 years</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5">5 to 7 years</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">15</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5">8+ years (Combined work experience capped at 20 points max)</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">20</td>
              </tr>

              {/* Education */}
              <tr>
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white" rowSpan="3">Educational Qualification</td>
                <td className="p-3.5">Doctorate (PhD) from Australian or recognized overseas university</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">20</td>
              </tr>
              <tr>
                <td className="p-3.5">Bachelor degree or Master&apos;s degree</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">15</td>
              </tr>
              <tr>
                <td className="p-3.5">Trade qualification, Australian Diploma, or assessed qualification</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">10</td>
              </tr>

              {/* Partner Points */}
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white" rowSpan="3">Partner Skills</td>
                <td className="p-3.5">Single applicant OR spouse/partner is Australian Citizen / PR</td>
                <td className="p-3.5 text-right font-bold text-teal-600 dark:text-teal-400">10</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5">Partner under 45, Competent English, positive Skills Assessment</td>
                <td className="p-3.5 text-right font-bold text-teal-600 dark:text-teal-400">10</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/30">
                <td className="p-3.5">Partner has Competent English only (No Skills Assessment)</td>
                <td className="p-3.5 text-right font-bold text-teal-600 dark:text-teal-400">5</td>
              </tr>

              {/* Bonuses */}
              <tr>
                <td className="p-3.5 font-semibold text-zinc-900 dark:text-white" rowSpan="5">Specialist & Community Bonuses</td>
                <td className="p-3.5">Specialist STEM Degree (Master&apos;s by research or PhD in Australia)</td>
                <td className="p-3.5 text-right font-bold text-teal-600 dark:text-teal-400">10</td>
              </tr>
              <tr>
                <td className="p-3.5">Australian Study Requirement (Min 2 academic years CRICOS)</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr>
                <td className="p-3.5">Designated Regional Australia Study</td>
                <td className="p-3.5 text-right font-bold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr>
                <td className="p-3.5">Credentialled Community Language (NAATI CCL Certified)</td>
                <td className="p-3.5 text-right font-bold text-teal-600 dark:text-teal-400">5</td>
              </tr>
              <tr>
                <td className="p-3.5">Professional Year Program in Australia (IT, Engineering, Accounting)</td>
                <td className="p-3.5 text-right font-bold text-teal-600 dark:text-teal-400">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: Frequently Asked Questions */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-6">
          Frequently Asked Questions About Australia PR Points
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {homepageFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs"
            >
              <h3 className="text-teal-700 dark:text-teal-400 font-semibold mb-2 text-sm md:text-base">
                {faq.question}
              </h3>
              <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
