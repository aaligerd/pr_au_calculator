import React from "react";

export default function SchemaMarkup({
  faqs = null,
  appName = "Australia PR Points Calculator",
  pageUrl = "https://ausprcalculator.com",
  appDescription = "Calculate your points for Australia Subclass 189, 190, and 491 visas instantly. Updated with official Department of Home Affairs criteria.",
  includeWebSite = false,
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
      },
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
