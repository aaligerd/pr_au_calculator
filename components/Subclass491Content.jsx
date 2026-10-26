import React from "react";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";
import GsmGuideSection from "./GsmGuideSection";

export const subclass491Faqs = [
  {
    question: "How many bonus points does Subclass 491 regional sponsorship add?",
    answer:
      "Nomination by an Australian State or Territory Government or sponsorship by an eligible family member residing in a designated regional area awards an automatic 15 bonus points to your SkillSelect application. This is three times the bonus points offered by Subclass 190 (+5 points).",
  },
  {
    question: "Can I lodge an EOI for Subclass 491 with only 50 base points?",
    answer:
      "Yes. The statutory minimum pass mark to lodge an Expression of Interest (EOI) is 65 points. If you have 50 personal base points (from your age, English score, educational qualification, and experience), adding the +15 regional sponsorship bonus brings your cumulative score to exactly 65 points, making you eligible for invitation.",
  },
  {
    question: "Is Subclass 491 a permanent residency visa or temporary?",
    answer:
      "The Subclass 491 is a 5-year provisional (temporary) visa that grants full work rights across designated regional Australia and full access to Australia's national Medicare healthcare system. It provides a direct, established pathway to Permanent Residency via the Subclass 191 (Permanent Residence Skilled Regional) visa after 3 years.",
  },
  {
    question: "What are the requirements to transition from Subclass 491 to Subclass 191 Permanent Residency?",
    answer:
      "To be granted the Subclass 191 PR visa, you must: (1) have held the Subclass 491 visa for at least 3 years, (2) have complied with Condition 8579 by living, working, and studying exclusively in a designated regional area of Australia, and (3) have lodged Australian Taxation Office (ATO) Notices of Assessment for three income years.",
  },
  {
    question: "Is there a minimum taxable income threshold for the Subclass 191 PR transition?",
    answer:
      "No. The Australian Department of Home Affairs officially abolished the previous minimum taxable income threshold ($53,900) for the Subclass 191 visa. Primary visa holders must still lodge their ATO tax returns for three years, but there is no statutory minimum earning threshold to qualify for permanent residence.",
  },
  {
    question: "How long is my English language test valid for Subclass 491?",
    answer:
      "For Subclass 491, English language test results (PTE Academic, IELTS, Cambridge C1, or CELPIP) are valid for 3 years immediately before the date of invitation by the Department of Home Affairs.",
  },
  {
    question: "Which Australian cities and regions are classified as Designated Regional Areas?",
    answer:
      "Virtually all of Australia outside the three major metropolitan centers of Sydney, Melbourne, and Brisbane is classified as a Designated Regional Area. This includes major regional metropolitan cities such as Perth, Adelaide, the Gold Coast, the Sunshine Coast, Canberra, Newcastle, Wollongong, Geelong, and Hobart.",
  },
  {
    question: "Who qualifies as an eligible family member to sponsor me for Subclass 491?",
    answer:
      "For the Subclass 491 Family Sponsored stream, your sponsor must be an Australian citizen, Australian permanent resident, or eligible New Zealand citizen aged 18 or older who is usually resident in a designated regional area. Eligible relationships include: parent, child, stepchild, brother, sister, aunt, uncle, niece, nephew, grandparent, or first cousin.",
  },
];

export default function Subclass491Content() {
  return (
    <section className="mt-16 space-y-16 border-t border-zinc-200 dark:border-zinc-800 pt-16">
      {/* SECTION 1: Deep Dive Overview */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30 mb-3">
            Skilled Work Regional Guide
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Complete Guide to Skilled Work Regional (Subclass 491) Points
          </h2>
          <div className="text-zinc-650 dark:text-zinc-400 space-y-4 text-sm md:text-base leading-relaxed mt-4">
            <p>
              The <strong>Skilled Work Regional (Provisional) visa (Subclass 491)</strong> is Australia&apos;s
              leading regional migration pathway, specifically engineered to direct talent into thriving
              regional economies. Because regional governments and regional families actively support
              new arrivals, this visa awards a massive <strong>+15 bonus points</strong> towards your
              SkillSelect score.
            </p>
            <p>
              This 15-point injection makes Subclass 491 the most accessible points-tested GSM pathway.
              Candidates who have dropped points due to age (e.g. 33–39 or 40–44) or who have scored
              Competent English (0 pts) can readily reach the mandatory 65-point benchmark with only 50
              personal base points.
            </p>
          </div>
        </div>
      </article>

      {/* SECTION 2: The Two Nomination Streams */}
      <div>
        <div className="max-w-3xl mb-6">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30 mb-3">
            Nomination Pathways
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white">
            Subclass 491: State Nominated vs Family Sponsored Stream
          </h3>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
            There are two distinct streams under which you can claim the +15 regional points:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stream 1: State Nominated */}
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8 space-y-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-150 dark:border-zinc-800">
              <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                Stream 1: State / Territory Nomination
              </h4>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/40">
                +15 Points
              </span>
            </div>
            <p className="text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
              Nominated by an Australian state or territory regional development agency (e.g., NSW Regional
              Development Australia committees, Regional Development Victoria, Migration Queensland, etc.).
            </p>
            <ul className="text-xs md:text-sm text-zinc-650 dark:text-zinc-400 space-y-2 list-disc pl-5">
              <li>
                <strong>Broader Occupation Access:</strong> Eligible for occupations on the MLTSSL, STSOL, and Regional Occupation List (ROL).
              </li>
              <li>
                <strong>No Relative Required:</strong> Open to any qualified candidate meeting state criteria.
              </li>
              <li>
                <strong>State-Specific Pathways:</strong> Generous streams for regional graduates and local regional workers.
              </li>
            </ul>
          </div>

          {/* Stream 2: Family Sponsored */}
          <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8 space-y-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-150 dark:border-zinc-800">
              <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white">
                Stream 2: Eligible Family Sponsorship
              </h4>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/40">
                +15 Points
              </span>
            </div>
            <p className="text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
              Sponsored by an eligible family member who is an Australian citizen, permanent resident, or eligible New Zealand citizen residing in a designated regional area.
            </p>
            <ul className="text-xs md:text-sm text-zinc-650 dark:text-zinc-400 space-y-2 list-disc pl-5">
              <li>
                <strong>Eligible Relatives:</strong> Parent, child, stepchild, brother, sister, aunt, uncle, niece, nephew, grandparent, or first cousin.
              </li>
              <li>
                <strong>Occupation List:</strong> Nominated occupation must be listed on the federal Medium and Long-term Strategic Skills List (MLTSSL).
              </li>
              <li>
                <strong>No State Fees:</strong> Bypasses state migration application fees and state ROI matrix requirements.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 3: Designated Regional Areas & Subclass 191 PR Pathway */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xs">
        <div className="flex items-center gap-3 pb-4 border-b border-zinc-150 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
            🌏
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white">
              Designated Regional Areas &amp; The Subclass 191 Permanent Residency Pathway
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Condition 8579 compliance and permanent residency transition
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-zinc-650 dark:text-zinc-400">
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2">What is a Designated Regional Area?</h4>
            <p className="leading-relaxed mb-3">
              Under Department of Home Affairs definition, <strong>all of Australia is designated regional except Sydney, Melbourne, and Brisbane</strong>.
            </p>
            <p className="leading-relaxed">
              Eligible major metropolitan centers include: <strong>Perth, Adelaide, Gold Coast, Sunshine Coast, Canberra, Newcastle, Wollongong, Geelong, Hobart, Darwin, and Cairns</strong>. Living and working in any of these vibrant metropolitan regions fully satisfies your visa obligations!
            </p>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-white mb-2">Subclass 191 PR Transition Roadmap</h4>
            <ul className="space-y-2 list-disc pl-5 leading-relaxed">
              <li>
                <strong>Hold Subclass 491 for 3 Years:</strong> Must hold the visa for at least 3 years before lodging Subclass 191.
              </li>
              <li>
                <strong>Live &amp; Work Regionally:</strong> Comply strictly with Visa Condition 8579.
              </li>
              <li>
                <strong>No Minimum Income Threshold:</strong> The former $53,900 TSMIT income requirement was repealed. Lodging 3 years of ATO Notices of Assessment is sufficient.
              </li>
              <li>
                <strong>Medicare Access:</strong> Subclass 491 visa holders have immediate Medicare coverage throughout the 5-year visa term.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 4: Strategic Step-by-Step GSM Guide */}
      <GsmGuideSection subclassContext="Subclass 491" />

      {/* SECTION 5: Subclass 491 Targeted FAQs */}
      <div>
        <FaqAccordion
          faqs={subclass491Faqs}
          title="Frequently Asked Questions: Skilled Work Regional (Subclass 491)"
        />
      </div>
    </section>
  );
}
