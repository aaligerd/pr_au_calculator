import React from "react";
import Link from "next/link";

/**
 * Step-by-Step Strategic Guide: "How to Claim Maximum Points for GSM 2026"
 * Server Component providing high-value topical authority for General Skilled Migration.
 */
export default function GsmGuideSection({ subclassContext = "GSM" }) {
  const steps = [
    {
      step: "01",
      title: "Secure a Positive Skills Assessment Early",
      subtitle: "The non-negotiable foundation of every GSM application",
      badge: "Mandatory Prerequisite",
      content: (
        <>
          <p className="mb-3">
            Before calculating points or lodging an Expression of Interest (EOI), you must possess a suitable skills assessment for your nominated occupation from the official Australian assessing authority. Different assessing bodies apply distinct assessment criteria:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm text-zinc-650 dark:text-zinc-400">
            <li>
              <strong className="text-zinc-900 dark:text-zinc-200">ACS (Australian Computer Society):</strong> Assesses IT occupations. Note that ACS frequently deducts 2 to 4 years of pre-qualification or overseas experience as the &ldquo;skill requirement met date&rdquo;. Only post-deduction employment can be claimed for points.
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-200">Engineers Australia (EA):</strong> Evaluates engineering qualifications via accredited accords (Washington, Sydney, Dublin) or through a Competency Demonstration Report (CDR) featuring 3 Career Episodes.
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-200">VETASSESS:</strong> Assesses over 350 general professional and technical occupations across Groups A through F, requiring relevant degree qualifications and paid highly-relevant post-qualification employment.
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-200">TRA (Trades Recognition Australia):</strong> Oversees trade occupations (electricians, chefs, carpenters) through the Job Ready Program (JRP) or Migration Skills Assessment (MSA).
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-200">Validity Warning:</strong> Skills assessments are valid for the validity period specified by the assessing authority or up to 3 years from the date of issue (whichever is shorter) for Home Affairs GSM purposes.
            </li>
          </ul>
        </>
      ),
    },
    {
      step: "02",
      title: "Target Superior English (+20 Points)",
      subtitle: "The highest-leverage differentiator in the SkillSelect pool",
      badge: "Highest Leverage (+20 Pts)",
      content: (
        <>
          <p className="mb-3">
            While Competent English (IELTS 6.0 / PTE 50) fulfills basic visa eligibility, it yields <strong>0 points</strong>. Achieving Superior English provides a massive <strong>+20 points</strong> injection, which is often the decisive factor between receiving an invitation and remaining waiting in the SkillSelect queue:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
                PTE Academic
              </span>
              <p className="font-extrabold text-base text-zinc-900 dark:text-white">79+ in each band</p>
              <p className="text-[11px] text-zinc-500 mt-1">Computerized scoring; highly recommended for rapid preparation.</p>
            </div>
            <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
                IELTS Academic/General
              </span>
              <p className="font-extrabold text-base text-zinc-900 dark:text-white">8.0 in each band</p>
              <p className="text-[11px] text-zinc-500 mt-1">Listening, Reading, Writing, and Speaking all require 8.0+.</p>
            </div>
            <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-1">
                CELPIP General
              </span>
              <p className="font-extrabold text-base text-zinc-900 dark:text-white">Band 9+ in each</p>
              <p className="text-[11px] text-zinc-500 mt-1">Home Affairs accepted test offering 100% computerized delivery.</p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            <strong>Key Rule:</strong> For GSM points claims, test results are valid for <strong>3 years</strong> from test date at the time of invitation, regardless of whether the testing provider issues a 2-year scorecard.
          </p>
        </>
      ),
    },
    {
      step: "03",
      title: "Stack Secondary Points (NAATI CCL, Study & Partner)",
      subtitle: "Unlocking hidden bonuses to surpass competitive cut-offs",
      badge: "Up to +35 Bonus Points",
      content: (
        <>
          <p className="mb-3">
            Top candidates do not rely solely on age and degree. They systematically layer high-probability secondary bonus criteria:
          </p>
          <div className="space-y-2 text-xs md:text-sm text-zinc-650 dark:text-zinc-400">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800/80">
              <strong className="text-zinc-900 dark:text-zinc-100">NAATI CCL (+5 Points):</strong> Taking the Credentialled Community Language test online (available in 50+ languages including Hindi, Punjabi, Mandarin, Arabic, Spanish, Nepali, and Urdu) is one of the fastest ways to add 5 verified points.
            </div>
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800/80">
              <strong className="text-zinc-900 dark:text-zinc-100">Partner Qualifications (+10 or +5 Points):</strong> Being single awards +10 points automatically. If partnered, your partner can claim +10 points if they are under 45, have Competent English, and obtain a positive skills assessment in an occupation on the same skilled list; or +5 points for Competent English alone.
            </div>
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800/80">
              <strong className="text-zinc-900 dark:text-zinc-100">Australian & Regional Study (+5 to +10 Points):</strong> Completing a 2-year CRICOS program gives +5 points, with an additional +5 points if the campus was located in a designated regional area.
            </div>
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/80 dark:border-zinc-800/80">
              <strong className="text-zinc-900 dark:text-zinc-100">Professional Year Program (+5 Points):</strong> For onshore graduates in Accounting, Engineering, or ICT, completing an approved 44-week Professional Year adds 5 valuable points and practical local workplace training.
            </div>
          </div>
        </>
      ),
    },
    {
      step: "04",
      title: "Master the SkillSelect EOI & State ROI Strategy",
      subtitle: "Queue positioning, Date of Effect (DOE), and state portals",
      badge: "Tactical Execution",
      content: (
        <>
          <p className="mb-3">
            Lodging an Expression of Interest (EOI) in the federal <strong>SkillSelect</strong> system is free. Best practice recommendations include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs md:text-sm text-zinc-650 dark:text-zinc-400">
            <li>
              <strong>Submit Separate EOIs:</strong> Create independent EOI profiles for Subclass 189, Subclass 190, and Subclass 491. If an invitation is issued for one subclass, other EOIs remain unaffected and active.
            </li>
            <li>
              <strong>Protect Your Date of Effect (DOE):</strong> SkillSelect ranks applicants by points score first, and then by the Date of Effect (the exact timestamp when that points score was achieved). Modifying your claims resets your DOE to the edit date.
            </li>
            <li>
              <strong>State Registrations of Interest (ROIs):</strong> For Subclass 190 and 491, many states require a secondary submission directly via their state migration portal (e.g., Victoria&apos;s Live in Melbourne, NSW Migration Portal, or Canberra Matrix).
            </li>
            <li>
              <strong>Zero False Claims:</strong> Never claim points in anticipation of future milestones. If invited, every claimed point must be verifiable with documentary evidence on or before the date of invitation.
            </li>
          </ul>
        </>
      ),
    },
    {
      step: "05",
      title: "Invitation to Apply (ITA) to Visa Grant",
      subtitle: "The 60-day lodgement countdown and evidentiary audit",
      badge: "Final Stage",
      content: (
        <>
          <p className="mb-3">
            Once invited in an invitation round, you have a strict <strong>60-day non-extendable window</strong> to lodge your formal visa application via ImmiAccount. Be prepared to submit:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
            <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
              <p className="font-bold text-zinc-900 dark:text-white mb-1">Employment Verification</p>
              <p className="text-zinc-500 dark:text-zinc-400">Reference letters on official letterhead, contracts, 12 months of pay slips per claim period, taxation assessments (e.g. ATO NOA / Form 16 / W2), and bank statements showing salary credits.</p>
            </div>
            <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50">
              <p className="font-bold text-zinc-900 dark:text-white mb-1">Identity, Character & Health</p>
              <p className="text-zinc-500 dark:text-zinc-400">Passports, birth certificates, National Police Clearances for all countries resided in for 12+ months in the last 10 years, Form 80/1221, and eMedical health exams.</p>
            </div>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3">
            Failure to substantiate any claimed point leads to visa refusal under Section 501 / Public Interest Criterion (PIC 4020) with a 3-year ban on future visa applications.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100/50 dark:border-teal-900/30 mb-3">
          GSM Strategy Roadmap
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
          How to Claim Maximum Points for GSM 2026
        </h2>
        <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed mt-2">
          Achieving a competitive points score under Australia&apos;s SkillSelect points test requires deliberate timing, strategic test selection, and proactive evidence gathering. Follow this 5-stage blueprint:
        </p>
      </div>

      <div className="space-y-6 pt-2">
        {steps.map((item) => (
          <div
            key={item.step}
            className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-6 md:p-8 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-150 dark:border-zinc-800/80 mb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-600 text-white font-black text-sm tracking-tight shadow-xs shadow-teal-600/30">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{item.subtitle}</p>
                </div>
              </div>
              <span className="self-start sm:self-center px-3 py-1 rounded-full text-[11px] font-bold bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/40 shrink-0">
                {item.badge}
              </span>
            </div>
            <div className="text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
