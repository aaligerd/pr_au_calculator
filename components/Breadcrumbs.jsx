import React from "react";
import Link from "next/link";

/**
 * Accessible Breadcrumbs Component with optional schema rendering.
 */
export default function Breadcrumbs({ items = [], renderSchema = true }) {
  if (!items || items.length === 0) return null;

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href.startsWith("http")
        ? item.href
        : `https://ausprcalculator.com${item.href}`,
    })),
  };

  return (
    <>
      {renderSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
        />
      )}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <svg
                    className="w-3.5 h-3.5 text-zinc-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                {isLast ? (
                  <span
                    className="font-semibold text-zinc-900 dark:text-zinc-200"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors underline-offset-4 hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
