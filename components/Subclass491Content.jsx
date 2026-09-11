import React from "react";
import Link from "next/link";

export const subclass491Faqs = [
  {
    question: "How many points does Subclass 491 regional sponsorship add?",
    answer:
      "Sponsorship by an Australian State or Territory Government or by an eligible family member residing in a designated regional area awards an automatic 15 bonus points to your SkillSelect application.",
  },
  {
    question: "Can I apply for Subclass 491 with only 50 base points?",
    answer:
      "Yes! The minimum pass mark to lodge an Expression of Interest (EOI) is 65 points. If you have 50 personal points (from age, English, qualification, and work experience), adding the 15 regional sponsorship points brings your total score to exactly 65 points, making you fully eligible.",
  },
  {
    question: "Is Subclass 491 a permanent residency visa?",
    answer:
      "The Subclass 491 is a 5-year provisional visa. It grants full work rights and Medicare access. After living and working in a designated regional area for at least 3 years while holding the 491 visa, you can transition directly to permanent residency via the Subclass 191 (Permanent Residence Skilled Regional) visa.",
  },
  {
    question: "Which areas in Australia are classified as Designated Regional Areas?",
    answer:
      "Virtually all of Australia outside of Sydney, Melbourne, and Brisbane is classified as a designated regional area. This includes major metropolitan centres such as Perth, Adelaide, Gold Coast, Sunshine Coast, Canberra, Newcastle, Wollongong, Geelong, and Hobart.",
  },
  {
    question: "Who can sponsor me for a Subclass 491 family stream visa?",
    answer:
      "An eligible family sponsor must be an Australian citizen, permanent resident, or eligible New Zealand citizen aged 18 or older who is usually resident in a designated regional area. Eligible relationships include: parent, child, stepchild, sibling, aunt/uncle, niece/nephew, grandparent, or first cousin.",
  },
  {
    question: "Are there income thresholds to transition from Subclass 491 to Subclass 191 PR?",
    answer:
      "The Department of Home Affairs removed the previous minimum taxable income threshold ($53,900) for the Subclass 191 visa. Applicants simply need to have held the 491 visa for 3 years, lived and worked in a regional area, and lodged notices of assessment with the ATO for three income years.",
  },
];

export default function Subclass491Content() {
  return (
    <section className="mt-16 space-y-12 border-t border-zinc-200 dark:border-zinc-800 pt-16">
      {/* SECTION 1: Deep Dive Overview */}
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-4">
          Complete Guide to Skilled Work Regional (Subclass 491) Points
        </h2>
        <div className="text-zinc-650 dark:text-zinc-400 space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            The <strong>Skilled Work Regional (Provisional) visa (Subclass 491)</strong> is Australia’s flagship immigration pathway 
            designed to stimulate economic growth in regional communities. 
            Because regional authorities actively seek skilled talent, this visa provides an incredible 
            <strong> +15 bonus points</strong> towards your overall immigration score.
          </p>
          <p>
            This 15-point injection makes Subclass 491 the most accessible points-tested skilled visa, allowing applicants who may have lost points 
            due to age brackets (e.g. 33–39 or 40–44) or lower English test scores to reach the mandatory 65-point benchmark with ease.
          </p>
        </div>
      </article>

      {/* SECTION 2: The Two Nomination Streams */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">
              1
            </span>
            <h3 className="font-bold text-base md:text-lg text-zinc-950 dark:text-white">
              State / Territory Government Nomination Stream
            </h3>
          </div>
          <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm leading-relaxed">
            Nominated by an Australian state or territory agency. Each state maintains a designated regional occupation list with favorable criteria for onshore graduates, local workers, or offshore specialists.
          </p>
          <ul className="text-xs text-zinc-650 dark:text-zinc-400 space-y-2 list-disc pl-5">
            <li>Awards +15 points to your federal EOI</li>
            <li>Broader occupation lists compared to Subclass 189</li>
            <li>Lower competitive cutoff scores</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm">
              2
            </span>
            <h3 className="font-bold text-base md:text-lg text-zinc-950 dark:text-white">
              Eligible Family Member Sponsorship Stream
            </h3>
          </div>
          <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm leading-relaxed">
            Sponsored by an eligible relative who is an Australian citizen, permanent resident, or eligible New Zealand citizen living in a designated regional area.
          </p>
          <ul className="text-xs text-zinc-650 dark:text-zinc-400 space-y-2 list-disc pl-5">
            <li>Awards +15 points to your federal EOI</li>
            <li>Occupation must be on the federal MLTSSL list</li>
            <li>No state nomination fees or state registration required</li>
          </ul>
        </div>
      </div>

      {/* SECTION 3: Designated Regional Areas Explained */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6">
        <h3 className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white">
          What Counts as &quot;Regional Australia&quot; Under Subclass 491?
        </h3>
        <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm leading-relaxed">
          Many prospective migrants assume &quot;regional&quot; means remote outback towns. In Australian immigration law, regional areas encompass dynamic, thriving cities with top universities, international airports, and booming tech sectors:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
          <div className="border border-teal-200/60 dark:border-teal-900/40 rounded-xl p-4 bg-teal-50/30 dark:bg-teal-950/20">
            <h4 className="font-bold text-teal-900 dark:text-teal-300 mb-1">
              Category 2: Cities & Major Regional Centres
            </h4>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs leading-relaxed">
              Perth, Adelaide, Gold Coast, Sunshine Coast, Canberra, Newcastle/Lake Macquarie, Wollongong/Illawarra, Geelong, and Hobart.
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-zinc-50 dark:bg-zinc-950/50">
            <h4 className="font-bold text-zinc-900 dark:text-white mb-1">
              Category 3: Regional Centres & Other Areas
            </h4>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs leading-relaxed">
              All other locations across Australia outside Sydney, Melbourne, and Brisbane (e.g. Cairns, Townsville, Darwin, Ballarat, Bendigo, Toowoomba).
            </p>
          </div>
        </div>

        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          ⚠️ <strong>Non-Regional Exclusions:</strong> Metropolitan Sydney, Melbourne, and Brisbane do not qualify as regional areas for Subclass 491 living or study points.
        </p>
      </div>

      {/* SECTION 4: Pathway to PR (Subclass 191) */}
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 bg-zinc-50 dark:bg-zinc-900/40 space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white">
          Pathway to Permanent Residency: Subclass 491 to Subclass 191
        </h3>
        <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm leading-relaxed">
          The Subclass 491 is designed as a direct bridge to permanent residency. To transition to the <strong>Permanent Residence (Skilled Regional) visa (Subclass 191)</strong>, you must satisfy three simple statutory conditions:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <span className="font-bold text-teal-600 dark:text-teal-400 block mb-1">1. Time Requirement</span>
            Hold the Subclass 491 visa for a minimum of 3 years.
          </div>
          <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <span className="font-bold text-teal-600 dark:text-teal-400 block mb-1">2. Regional Compliance</span>
            Comply with condition 8579: Live, work, and study only in designated regional areas.
          </div>
          <div className="bg-white dark:bg-zinc-900 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <span className="font-bold text-teal-600 dark:text-teal-400 block mb-1">3. Tax Lodgements</span>
            Provide ATO notices of assessment for three income years (no minimum threshold required).
          </div>
        </div>
      </div>

      {/* SECTION 5: Subclass 491 FAQs */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mb-6">
          Frequently Asked Questions About Subclass 491
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {subclass491Faqs.map((faq, idx) => (
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
