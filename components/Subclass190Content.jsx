import React from "react";
import Link from "next/link";

export const subclass190Faqs = [
  {
    question: "How many bonus points does Subclass 190 state nomination provide?",
    answer:
      "Securing nomination by an Australian State or Territory Government automatically awards an extra 5 points to your SkillSelect score. For example, if you have 65 personal base points, state nomination increases your total score to 70 points.",
  },
  {
    question: "Is Subclass 190 a permanent residency visa?",
    answer:
      "Yes. The Skilled Nominated (Subclass 190) is a direct Permanent Resident (PR) visa from the day it is granted. You receive full work rights across Australia and access to Medicare.",
  },
  {
    question: "What is the 2-year commitment for Subclass 190 visa holders?",
    answer:
      "When you accept a state nomination for Subclass 190, you sign a moral and statutory declaration committing to live and work in your nominating state or territory for at least the first two years after your visa grant (or after arrival if applying from offshore).",
  },
  {
    question: "What is the difference between a SkillSelect EOI and a State ROI?",
    answer:
      "A federal Expression of Interest (EOI) is submitted in Home Affairs' SkillSelect system. Several states (such as Victoria and ACT) also require a separate Registration of Interest (ROI) or state matrix application submitted directly through the state's migration portal to be considered for nomination.",
  },
  {
    question: "Can I apply for Subclass 190 with 60 base points?",
    answer:
      "Yes! Because state nomination provides an automatic +5 points, having 60 points on your own allows you to meet the mandatory 65-point threshold once state nomination is granted.",
  },
  {
    question: "Which states are currently open for Subclass 190 nominations?",
    answer:
      "All Australian states and territories (NSW, VIC, QLD, WA, SA, TAS, ACT, NT) operate Subclass 190 nomination programs under annual allocation quotas. Each jurisdiction publishes specific occupation priority lists, residency requirements, and onshore/offshore criteria.",
  },
];

export default function Subclass190Content() {
  return (
    <section className="mt-16 space-y-12 border-t border-zinc-200 dark:border-zinc-800 pt-16">
      {/* SECTION 1: Deep Dive Overview */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-4">
          Complete Guide to Skilled Nominated (Subclass 190) Points
        </h2>
        <div className="text-zinc-650 dark:text-zinc-400 space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            The <strong>Skilled Nominated visa (Subclass 190)</strong> is an Australian permanent resident visa designed for skilled workers 
            who are nominated by an Australian state or territory government. 
            Because each state has unique economic priorities and skill shortages, gaining state nomination automatically grants an additional 
            <strong> 5 points</strong> towards your overall immigration score.
          </p>
          <p>
            Subclass 190 is often the best pathway for applicants who score between <strong>65 and 80 points</strong> and find the federal 
            Subclass 189 invitation cut-offs too high, or whose occupations are only listed on the Short-term Skilled Occupation List (STSOL).
          </p>
        </div>
      </article>

      {/* SECTION 2: State Nomination Programs Overview */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-lg">
            🏛️
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white">
              Australian State & Territory Nomination Overview
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Key nomination criteria across jurisdictions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs md:text-sm">
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">NSW (New South Wales)</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-2">Sydney & Regional NSW</p>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs">
              Focuses on target sectors: Tech, Health, Education, Infrastructure, and Agriculture. Invitation-only based on high EOI scores.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Victoria (VIC)</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-2">Melbourne & Regional VIC</p>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs">
              Requires a Registration of Interest (ROI). Strong priority for onshore residents working in renewable energy, digital tech, and health.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Western Australia (WA)</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-2">Perth & Regional WA</p>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs">
              Separate Graduate and General streams (Schedule 1 & 2). Requires an employment contract in WA for certain categories.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">South Australia (SA)</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-2">Adelaide & Regional SA</p>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs">
              Streams for SA Graduates, Working in SA, and Highly Skilled / Offshore talent with expansive occupation lists.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Tasmania (TAS)</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-2">Hobart & Regional TAS</p>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs">
              Uses Migration Tasmania Gateway. Favorable pathways for Tasmanian graduates and skilled employees with gold/orange pass priority.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Queensland (QLD)</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-2">Brisbane & Regional QLD</p>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs">
              Managed by Migration Queensland. Requires onshore employment proof or specialized offshore criteria with point benchmarks.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">ACT (Canberra)</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-2">Australian Capital Territory</p>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs">
              Uses the proprietary ACT Canberra Matrix point system to rank candidates before inviting them to apply for territory nomination.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Northern Territory (NT)</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-2">Darwin & Regional NT</p>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs">
              Tailored for NT graduates and skilled residents with 6+ months full-time local employment in an eligible occupation.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 3: Step-by-Step Application Process */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mb-4">
          Step-by-Step Subclass 190 Nomination Roadmap
        </h3>
        <ol className="space-y-4 text-xs md:text-sm text-zinc-650 dark:text-zinc-400 list-decimal pl-5">
          <li>
            <strong>Skills Assessment & English Test:</strong> Obtain a positive skills assessment in an eligible occupation (MLTSSL or STSOL) and achieve at least Competent English (minimum IELTS 6.0 / PTE 50).
          </li>
          <li>
            <strong>Submit SkillSelect EOI:</strong> Lodge your Expression of Interest selecting Subclass 190 and designating your chosen state(s) or &quot;Any State&quot;.
          </li>
          <li>
            <strong>Lodge State Registration of Interest (ROI):</strong> If required by the state (e.g. Victoria or ACT), register on their official state portal.
          </li>
          <li>
            <strong>Receive State Nomination Invitation:</strong> Once selected, submit documentation and state nomination fee to the state government.
          </li>
          <li>
            <strong>Receive Federal ITA & Lodge Visa:</strong> Once the state approves nomination, Home Affairs issues an automatic Invitation to Apply (ITA). You have 60 days to lodge your final PR visa application.
          </li>
        </ol>
      </div>

      {/* SECTION 4: Subclass 190 FAQs */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mb-6">
          Frequently Asked Questions About Subclass 190
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {subclass190Faqs.map((faq, idx) => (
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
