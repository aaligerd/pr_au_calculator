import React from "react";

/**
 * Standardized JSON-LD Schema Markup Component for SEO & Rich Snippets.
 * Implements WebApplication / SoftwareApplication, FAQPage, BreadcrumbList, and WebSite schemas.
 */
export default function SchemaMarkup({
  appName = "Australia PR Points Calculator",
  pageUrl = "https://ausprcalculator.com",
  appDescription = "Calculate your points for Australia Subclass 189, 190, and 491 visas instantly. Updated with official Department of Home Affairs criteria.",
  faqs = null,
  breadcrumbs = null,
  includeWebSite = false,
  featureList = [
    "Department of Home Affairs Schedule 6D points calculation",
    "Real-time Subclass 189, 190, and 491 points estimation",
    "Automatic +5 state nomination points calculation for Subclass 190",
    "Automatic +15 regional sponsorship points calculation for Subclass 491",
    "Age bracket eligibility and 45-year age limit verification",
    "PTE Academic, IELTS, and CELPIP English test equivalency scoring",
    "Overseas and Australian skilled employment calculation with official 20-point combined cap",
    "Educational qualification and Australian STEM Master/PhD specialist evaluation",
    "Partner skills points breakdown (single, competent English, skills assessed)",
    "NAATI CCL, Australian Study, Regional Study, and Professional Year bonus checks",
    "Interactive category breakdown drawer and copyable points summary"
  ],
}) {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": appName,
      "url": pageUrl,
      "description": appDescription,
      "operatingSystem": "All",
      "applicationCategory": "UtilityApplication",
      "browserRequirements": "Requires JavaScript and HTML5 compatible browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "AUD",
        "availability": "https://schema.org/InStock",
      },
      "featureList": featureList,
    },
  ];

  if (includeWebSite) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Australia PR Points Calculator",
      "url": "https://ausprcalculator.com",
      "inLanguage": "en-AU",
      "description": "Comprehensive Australia skilled migration points calculator for Subclass 189, 190, and 491 visas.",
    });
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.href.startsWith("http")
          ? crumb.href
          : `https://ausprcalculator.com${crumb.href}`,
      })),
    });
  }

  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
