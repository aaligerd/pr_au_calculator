import React from "react";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";
import GsmGuideSection from "./GsmGuideSection";

export const subclass190Faqs = [
  {
    question: "How many bonus points does Subclass 190 state nomination provide?",
    answer:
      "Securing nomination by an Australian State or Territory Government automatically awards an extra 5 points to your SkillSelect score. For example, if you have 60 personal base points, state nomination increases your total score to exactly 65 points, meeting the statutory threshold.",
  },
  {
    question: "Is Subclass 190 an immediate permanent residency (PR) visa?",
    answer:
      "Yes. The Skilled Nominated (Subclass 190) is a direct Permanent Resident (PR) visa from the day it is granted. You receive full work rights across Australia, access to Medicare, and a pathway to Australian citizenship after fulfilling standard residence requirements.",
  },
  {
    question: "What is the difference between Subclass 189 and Subclass 190?",
    answer:
      "Subclass 189 is an independent permanent visa with 0 bonus points and no geographic restrictions. Subclass 190 requires nomination by a specific Australian state or territory government, which grants +5 points. In exchange, Subclass 190 holders sign a moral commitment to live and work in the nominating state for the first 2 years.",
  },
  {
    question: "Can I apply for Subclass 190 with 60 base points?",
    answer:
      "Yes. Because state nomination grants an automatic +5 points, candidates with 60 base points (derived from age, English, education, and work experience) achieve the mandatory 65 points once the state government issues the nomination.",
  },
  {
    question: "How long is my English language test valid for Subclass 190?",
    answer:
      "For Subclass 190, English test results (PTE Academic, IELTS, Cambridge C1, or CELPIP) are valid for 3 years immediately before the date of invitation by the Department of Home Affairs. Note that some individual states may have specific minimum score criteria (e.g. demanding Proficient or Superior English for certain occupation groups).",
  },
  {
    question: "What is the mandatory 2-year commitment for Subclass 190 visa holders?",
    answer:
      "When accepting a state nomination for Subclass 190, you sign a statutory and moral declaration committing to live and work in your nominating state or territory for at least your first 2 years after visa grant (or after initial arrival if applying from offshore). While Australian permanent residents enjoy constitutional freedom of movement, breaching this commitment without compelling justification can impact state character assessments and future citizenship or sponsorship applications.",
  },
  {
    question: "What is the difference between a SkillSelect EOI and a State Registration of Interest (ROI)?",
    answer:
      "A federal Expression of Interest (EOI) is submitted into Home Affairs' SkillSelect portal. Several jurisdictions (such as Victoria's 'Live in Melbourne' and the ACT's Canberra Matrix) also require candidates to submit a separate, state-specific Registration of Interest (ROI) or matrix application to be considered for invitation.",
  },
  {
    question: "Which Australian states and territories offer Subclass 190 nominations?",
    answer:
      "All eight Australian jurisdictions participate in the Subclass 190 program: New South Wales (NSW), Victoria (VIC), Queensland (QLD), Western Australia (WA), South Australia (SA), Tasmania (TAS), the Australian Capital Territory (ACT), and the Northern Territory (NT). Each jurisdiction publishes tailored occupation lists, minimum onshore experience requirements, and offshore pathways.",
  },
];

export default function Subclass190Content() {
  return (
    <section className="mt-16 space-y-16 border-t border-zinc-200 dark:border-zinc-800 pt-16">
      {/* SECTION 1: Deep Dive Overview */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30 mb-3">
            State Nominated PR Guide
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Complete Guide to Skilled Nominated (Subclass 190) Points
          </h2>
          <div className="text-zinc-650 dark:text-zinc-400 space-y-4 text-sm md:text-base leading-relaxed mt-4">
            <p>
              The <strong>Skilled Nominated visa (Subclass 190)</strong> is an Australian permanent resident
              visa tailored for skilled professionals who receive nomination from an Australian state
              or territory government. Because each state has unique economic priorities and targeted
              labor shortages, gaining state nomination awards an automatic <strong>+5 bonus points</strong>{" "}
              towards your overall immigration score.
            </p>
            <p>
              Subclass 190 represents the premier permanent residency pathway for candidates who score
              between <strong>65 and 80 points</strong>, where federal Subclass 189 invitation cut-offs
              may be out of reach, or whose ANZSCO occupation appears on the Short-term Skilled
              Occupation List (STSOL) rather than the MLTSSL.
            </p>
          </div>
        </div>
      </article>

      {/* SECTION 2: State Nomination Matrix */}
      <div>
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30 mb-3">
            Jurisdiction Breakdown
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white">
            State &amp; Territory Subclass 190 Nomination Criteria (2026)
          </h3>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
            Every Australian state operates its own independent nomination selection criteria,
            allocations, and submission processes:
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-950/60 text-zinc-900 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-800">
                <th className="p-4 font-bold">State / Territory</th>
                <th className="p-4 font-bold">Nomination Portal Process</th>
                <th className="p-4 font-bold">Targeted Priority Sectors</th>
                <th className="p-4 font-bold">Key Eligibility Nuances</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-650 dark:text-zinc-400">
              <tr>
                <td className="p-4 font-bold text-zinc-900 dark:text-white">New South Wales (NSW)</td>
                <td className="p-4">Direct invitation from SkillSelect EOI; no separate ROI fee</td>
                <td className="p-4">Health, Education, ICT, Engineering, Infrastructure</td>
                <td className="p-4">Prioritizes onshore NSW residents; requires residency of 6+ months for certain streams</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-bold text-zinc-900 dark:text-white">Victoria (VIC)</td>
                <td className="p-4">Mandatory Registration of Interest (ROI) via Live in Melbourne</td>
                <td className="p-4">Clean Economy, Health, Advanced Manufacturing, Tech</td>
                <td className="p-4">Annual earnings and relevant onshore employment strengthen ROI ranking</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-zinc-900 dark:text-white">Western Australia (WA)</td>
                <td className="p-4">Invitation rounds based on WASMOL Schedule 1 &amp; 2 and Graduate list</td>
                <td className="p-4">Mining, Construction, Healthcare, Agriculture, Engineering</td>
                <td className="p-4">Requires employment contract of at least 6 months in WA for General Stream</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-bold text-zinc-900 dark:text-white">Queensland (QLD)</td>
                <td className="p-4">Migration Queensland ROI via portal when invitation rounds open</td>
                <td className="p-4">Tourism, Green Energy, Biomedicine, Trades, Agribusiness</td>
                <td className="p-4">Requires 75+ points for certain IT streams and 3+ months onshore QLD work</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-zinc-900 dark:text-white">South Australia (SA)</td>
                <td className="p-4">Skilled &amp; Business Migration portal application</td>
                <td className="p-4">Defense, Space, Health, Renewable Tech, Hi-tech Trades</td>
                <td className="p-4">Generous pathways for South Australian international university graduates</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-bold text-zinc-900 dark:text-white">ACT (Canberra)</td>
                <td className="p-4">Canberra Matrix points-tested ranking system</td>
                <td className="p-4">Cyber Security, Public Sector, Allied Health, Construction</td>
                <td className="p-4">Ranks applicants on ACT-specific Matrix points in addition to federal points</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-zinc-900 dark:text-white">Tasmania (TAS)</td>
                <td className="p-4">Migration Tasmania Gateway ROI and Orange/Green pass system</td>
                <td className="p-4">Building &amp; Construction, Health, Education, Hospitality</td>
                <td className="p-4">Favors long-term Tasmanian residents and Tasmanian university graduates</td>
              </tr>
              <tr className="bg-zinc-50/50 dark:bg-zinc-950/30">
                <td className="p-4 font-bold text-zinc-900 dark:text-white">Northern Territory (NT)</td>
                <td className="p-4">Direct application to Northern Territory Government</td>
                <td className="p-4">Critical Infrastructure, Regional Health, Primary Industries</td>
                <td className="p-4">Requires demonstration of settlement commitment and financial capacity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: Strategic Step-by-Step GSM Guide */}
      <GsmGuideSection subclassContext="Subclass 190" />

      {/* SECTION 4: Subclass 190 Targeted FAQs */}
      <div>
        <FaqAccordion
          faqs={subclass190Faqs}
          title="Frequently Asked Questions: Skilled Nominated (Subclass 190)"
        />
      </div>
    </section>
  );
}
