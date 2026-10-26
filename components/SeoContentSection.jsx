import React from "react";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";
import GsmGuideSection from "./GsmGuideSection";

export const homepageFaqs = [
  {
    question: "How many points do I need for Australian PR in 2026?",
    answer:
      "The statutory minimum pass mark to lodge an Expression of Interest (EOI) in SkillSelect is 65 points for Subclass 189, Subclass 190, and Subclass 491 visas. However, actual invitation cut-offs depend on occupational demand and invitation round quotas. In high-competition fields (IT, Engineering, Accounting), competitive invitation rounds typically require 80 to 95+ points for Subclass 189, while healthcare, teaching, and regional allocations regularly invite candidates at 65 to 75 points.",
  },
  {
    question: "What is the key difference between Subclass 189, 190, and 491 visas?",
    answer:
      "Subclass 189 is an independent permanent residency visa requiring no state or employer sponsor, allowing you to live anywhere in Australia. Subclass 190 is a permanent residency visa nominated by a state government which adds +5 points to your score, with a 2-year moral commitment to live in that state. Subclass 491 is a 5-year provisional regional visa requiring state or family regional sponsorship that adds +15 points, with a direct pathway to permanent residence via Subclass 191 after 3 years.",
  },
  {
    question: "Can I lodge an Expression of Interest (EOI) with exactly 65 points?",
    answer:
      "Yes, 65 points is the legal threshold required to submit an EOI in the Department of Home Affairs SkillSelect portal. Candidates in priority occupations (Registered Nurses, Early Childhood & Secondary Teachers, Medical Practitioners, and certain trade occupations) regularly receive invitations at 65 to 70 points. For IT and engineering professions, 65 points allows you to pursue Subclass 190 (+5 pts = 70 total) or Subclass 491 (+15 pts = 80 total).",
  },
  {
    question: "How long is my English language test valid for Australian PR points?",
    answer:
      "For General Skilled Migration (GSM) points calculation, English language test results (PTE Academic, IELTS, Cambridge C1, or CELPIP) are valid for 3 years immediately before the date you are invited to apply for the visa. This 3-year rule applies even if the test provider prints a 2-year validity period on your scorecard.",
  },
  {
    question: "Can I apply for an Australian skilled visa with 60 base points?",
    answer:
      "Yes, via the Subclass 190 or Subclass 491 visa pathways. State nomination for Subclass 190 awards an automatic +5 points, elevating your 60 base points to the mandatory 65-point threshold. For Subclass 491, regional nomination provides +15 points, raising a 60-point base profile to an impressive 75 total points.",
  },
  {
    question: "How does English test scoring impact Australian PR points?",
    answer:
      "English proficiency is the most controllable score differentiator: Competent English (IELTS 6.0 / PTE 50 / CELPIP 7 in all components) grants 0 points. Proficient English (IELTS 7.0 / PTE 65 / CELPIP 8) grants 10 points. Superior English (IELTS 8.0 / PTE 79 / CELPIP 9) grants 20 points.",
  },
  {
    question: "Is there a strict age limit for Australian skilled migration points?",
    answer:
      "Yes. Applicants must be under 45 years of age on the day an Invitation to Apply (ITA) is issued by Home Affairs. The peak age bracket is 25 to 32 years (30 points). Candidates aged 18 to 24 receive 25 points, 33 to 39 receive 25 points, and 40 to 44 receive 15 points. Once you turn 45, you become ineligible for points-tested GSM visas.",
  },
  {
    question: "How are partner skills points calculated for single vs married applicants?",
    answer:
      "Single applicants and applicants whose partner is an Australian citizen or permanent resident automatically receive 10 points. If your partner is a non-citizen/non-PR, you receive 10 points if they are under 45, have Competent English, and obtain a positive skills assessment in an occupation on the same skilled list; or 5 points if they possess Competent English alone.",
  },
];

export default function SeoContentSection() {
  return (
    <section className="mt-16 space-y-16 border-t border-zinc-200 dark:border-zinc-800 pt-16">
      {/* SECTION 1: Visa Comparison Matrix */}
      <div>
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30 mb-3">
            GSM Visa Comparison
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Compare Australian Skilled Visas: Subclass 189 vs 190 vs 491
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed mt-2">
            Depending on your calculated points and your nominated occupation on the Skilled
            Occupation Lists (MLTSSL, STSOL, ROL), you may lodge an Expression of Interest (EOI) for
            one or more points-tested visa streams administered through <strong>SkillSelect</strong>.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-4 font-bold">Feature</th>
                <th className="p-4 font-bold">Subclass 189 (Independent)</th>
                <th className="p-4 font-bold">Subclass 190 (Nominated)</th>
                <th className="p-4 font-bold">Subclass 491 (Regional)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-650 dark:text-zinc-400">
              <tr>
                <td className="p-4 font-semibold text-zinc-900 dark:text-white">Visa Type &amp; Status</td>
                <td className="p-4">Direct Permanent Residency (PR)</td>
                <td className="p-4">Direct Permanent Residency (PR)</td>
                <td className="p-4">5-Year Provisional (Direct pathway to PR via Subclass 191)</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-semibold text-zinc-900 dark:text-white">Nomination Bonus Points</td>
                <td className="p-4 font-bold text-zinc-700 dark:text-zinc-300">0 Points</td>
                <td className="p-4 font-bold text-teal-600 dark:text-teal-400">+5 Points</td>
                <td className="p-4 font-bold text-teal-600 dark:text-teal-400">+15 Points</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-zinc-900 dark:text-white">Sponsorship Requirement</td>
                <td className="p-4">None (Purely points &amp; occupation rank)</td>
                <td className="p-4">State or Territory Government nomination</td>
                <td className="p-4">State Government OR eligible relative in designated regional area</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-semibold text-zinc-900 dark:text-white">Geographic Freedom</td>
                <td className="p-4">Anywhere in Australia from day one</td>
                <td className="p-4">2-year commitment to live/work in nominating state</td>
                <td className="p-4">Must live &amp; work in Designated Regional Areas (outside Sydney/Melb/Bris)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-zinc-900 dark:text-white">Eligible Occupation Lists</td>
                <td className="p-4">MLTSSL only</td>
                <td className="p-4">MLTSSL &amp; STSOL (Jurisdiction specific)</td>
                <td className="p-4">MLTSSL, STSOL &amp; Regional List (ROL)</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-semibold text-zinc-900 dark:text-white">Dedicated Subclass Guide</td>
                <td className="p-4">
                  <Link
                    href="/subclass-189"
                    className="text-teal-600 dark:text-teal-400 font-bold hover:underline"
                  >
                    View 189 Calculator &amp; Guide →
                  </Link>
                </td>
                <td className="p-4">
                  <Link
                    href="/subclass-190"
                    className="text-teal-600 dark:text-teal-400 font-bold hover:underline"
                  >
                    View 190 Calculator &amp; Guide →
                  </Link>
                </td>
                <td className="p-4">
                  <Link
                    href="/subclass-491"
                    className="text-teal-600 dark:text-teal-400 font-bold hover:underline"
                  >
                    View 491 Calculator &amp; Guide →
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 2: Official Points Allocation Table (Schedule 6D) */}
      <div>
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30 mb-3">
            Schedule 6D Regulations
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Schedule 6D Points Allocation Guide (Home Affairs Criteria)
          </h2>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed mt-2">
            Points are awarded according to Schedule 6D of the <em>Migration Regulations 1994</em>.
            Every claimed point must be substantiated with documentary proof as of the invitation
            date:
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-4 font-bold">Category</th>
                <th className="p-4 font-bold">Criteria &amp; Specification</th>
                <th className="p-4 font-bold text-right">Points Awarded</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-650 dark:text-zinc-400">
              {/* Age */}
              <tr>
                <td className="p-4 font-bold text-zinc-900 dark:text-white" rowSpan={5}>
                  Age
                </td>
                <td className="p-4">18 to 24 years</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">25</td>
              </tr>
              <tr>
                <td className="p-4">25 to 32 years (Prime demographic bracket)</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">30</td>
              </tr>
              <tr>
                <td className="p-4">33 to 39 years</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">25</td>
              </tr>
              <tr>
                <td className="p-4">40 to 44 years</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">15</td>
              </tr>
              <tr>
                <td className="p-4 text-rose-600 dark:text-rose-400 font-medium">
                  45 years and over (Statutory cutoff for GSM)
                </td>
                <td className="p-4 text-right font-extrabold text-rose-600 dark:text-rose-400">
                  0 (Ineligible)
                </td>
              </tr>

              {/* English */}
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-bold text-zinc-900 dark:text-white" rowSpan={3}>
                  English Language Ability
                </td>
                <td className="p-4">Competent English (IELTS 6.0 / PTE 50 / CELPIP 7 each band)</td>
                <td className="p-4 text-right font-extrabold text-zinc-700 dark:text-zinc-300">0</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4">Proficient English (IELTS 7.0 / PTE 65 / CELPIP 8 each band)</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">10</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4">Superior English (IELTS 8.0 / PTE 79 / CELPIP 9 each band)</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">20</td>
              </tr>

              {/* Overseas Experience */}
              <tr>
                <td className="p-4 font-bold text-zinc-900 dark:text-white" rowSpan={4}>
                  Overseas Employment (Past 10 Years)
                </td>
                <td className="p-4">Less than 3 years in nominated or closely related role</td>
                <td className="p-4 text-right font-extrabold text-zinc-700 dark:text-zinc-300">0</td>
              </tr>
              <tr>
                <td className="p-4">3 to 4 years</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr>
                <td className="p-4">5 to 7 years</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr>
                <td className="p-4">8 or more years</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">15</td>
              </tr>

              {/* Australian Experience */}
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-bold text-zinc-900 dark:text-white" rowSpan={5}>
                  Australian Employment (Past 10 Years)
                </td>
                <td className="p-4">Less than 1 year</td>
                <td className="p-4 text-right font-extrabold text-zinc-700 dark:text-zinc-300">0</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4">1 to 2 years</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4">3 to 4 years</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">10</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4">5 to 7 years</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">15</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4">
                  8 or more years (Combined overseas + AU work cap: 20 points max)
                </td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">20</td>
              </tr>

              {/* Education */}
              <tr>
                <td className="p-4 font-bold text-zinc-900 dark:text-white" rowSpan={3}>
                  Educational Qualifications
                </td>
                <td className="p-4">Doctorate (PhD) from Australian or recognized overseas institution</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">20</td>
              </tr>
              <tr>
                <td className="p-4">Bachelor or Master degree from AU or recognized overseas institution</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">15</td>
              </tr>
              <tr>
                <td className="p-4">Diploma or Trade Qualification, or recognized assessing award</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">10</td>
              </tr>

              {/* Partner Points */}
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-bold text-zinc-900 dark:text-white" rowSpan={3}>
                  Partner Skills
                </td>
                <td className="p-4">Single applicant OR spouse/partner is Australian Citizen / PR</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">10</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4">
                  Partner under 45 with Competent English &amp; positive skills assessment
                </td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">10</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4">Partner has Competent English only (No skills assessment)</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">5</td>
              </tr>

              {/* Additional Bonuses */}
              <tr>
                <td className="p-4 font-bold text-zinc-900 dark:text-white" rowSpan={5}>
                  Specialist &amp; Community Bonuses
                </td>
                <td className="p-4">Specialist STEM Qualification (Master by research or PhD in AU)</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">10</td>
              </tr>
              <tr>
                <td className="p-4">Australian Study Requirement (Min 2 academic years CRICOS)</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr>
                <td className="p-4">Study in Regional Australia (Lived and studied in designated region)</td>
                <td className="p-4 text-right font-extrabold text-zinc-900 dark:text-white">5</td>
              </tr>
              <tr>
                <td className="p-4">Credentialled Community Language (NAATI CCL Certified)</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">5</td>
              </tr>
              <tr>
                <td className="p-4">Professional Year in Australia (IT, Accounting, Engineering)</td>
                <td className="p-4 text-right font-extrabold text-teal-600 dark:text-teal-400">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: Step-by-Step Strategic GSM Guide */}
      <GsmGuideSection subclassContext="GSM" />

      {/* SECTION 4: Targeted Frequently Asked Questions */}
      <div>
        <FaqAccordion
          faqs={homepageFaqs}
          title="Frequently Asked Questions: Australia PR Points & SkillSelect"
        />
      </div>
    </section>
  );
}
