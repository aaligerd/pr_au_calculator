import React from "react";

/**
 * High-performance, zero-JS semantic FAQ Accordion.
 * Built with HTML5 <details> and <summary> for instant crawlability,
 * perfect Core Web Vitals (0 hydration delay), and full accessibility.
 */
export default function FaqAccordion({ faqs = [], title = "Frequently Asked Questions" }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mb-6">
          {title}
        </h3>
      )}
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-5 transition-all duration-200 open:shadow-xs open:border-teal-500/40 dark:open:border-teal-500/40"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-zinc-900 dark:text-white list-none select-none text-sm md:text-base">
              <span className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 text-xs font-bold">
                  Q
                </span>
                <span>{faq.question}</span>
              </span>
              <span className="shrink-0 transition-transform duration-200 group-open:rotate-180 text-zinc-400 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 text-xs md:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed pl-9">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
