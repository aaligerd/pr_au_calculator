import React from "react";

export default function SchemaMarkup() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Australia PR Points Calculator",
      "operatingSystem": "All",
      "applicationCategory": "UtilityApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "AUD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many points do I need for PR Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The minimum pass mark to submit an Expression of Interest (EOI) for Australia Skilled Independent (Subclass 189), State Nominated (Subclass 190), or Regional (Subclass 491) visas is 65 points. However, competitive invitation rounds often require higher scores depending on your nominated occupation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get PR with 70 points in Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, 70 points is above the minimum 65-point requirement. While Subclass 189 federal invitations can be competitive, 70 points makes you eligible for Subclass 190 state nominations (adding +5 points) or Subclass 491 regional visas (adding +15 points)."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get PR with 60 points?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, you cannot directly lodge an Expression of Interest for Subclass 189 or 190 with 60 points, as the mandatory minimum threshold is 65 points. However, with 60 base points, you can apply for a Subclass 491 Regional Provisional Visa, which automatically awards you +15 bonus points, bringing your total score to 75."
          }
        },
        {
          "@type": "Question",
          "name": "Can I apply 491 with 50 points?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! The Subclass 491 (Skilled Work Regional) visa provides 15 bonus nomination points. If you have 50 base points, adding the 15 regional nomination points brings your total to 65 points, meeting the required threshold."
          }
        },
        {
          "@type": "Question",
          "name": "Is 75 points good for Australia PR?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, 75 points is considered a solid score for Australian permanent residency, particularly for state-nominated (Subclass 190) and regional (Subclass 491) visas."
          }
        },
        {
          "@type": "Question",
          "name": "Which city is easy to get PR in Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Designated regional areas like Adelaide (South Australia), Perth (Western Australia), Hobart (Tasmania), and regional NSW/QLD offer easier pathways to PR via Subclass 491 and 190 state nominations due to lower point cutoffs."
          }
        },
        {
          "@type": "Question",
          "name": "Is it easy to get PR in Australia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting PR in Australia depends on your ANZSCO occupation, age, English proficiency, and willingness to live in regional areas. Maximizing points through Superior English (PTE 79+ / IELTS 8.0) and NAATI CCL accreditation significantly improves your invitation chances."
          }
        }
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
