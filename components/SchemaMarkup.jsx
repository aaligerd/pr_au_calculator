import React from "react";

export default function SchemaMarkup() {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Australia PR & Visa Points Calculator",
    "operatingSystem": "All",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Calculate points for Australia Skilled Independent Subclass 189, Skilled Nominated Subclass 190, and Skilled Work Regional Subclass 491 visas instantly."
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum points score to apply for Australia PR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official minimum points score required to file a SkillSelect Expression of Interest (EOI) for the Subclass 189, 190, or 491 visas is 65 points. However, because invitations are issued on a competitive basis, a higher score significantly improves your likelihood of receiving an Invitation to Apply (ITA)."
        }
      },
      {
        "@type": "Question",
        "name": "How does NAATI CCL help with Australian immigration points?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Passing the Credentialled Community Language (CCL) test conducted by the National Accreditation Authority for Translators and Interpreters (NAATI) awards you 5 bonus points. This exam assesses your capability to translate dialogues from English to a community language and vice versa."
        }
      },
      {
        "@type": "Question",
        "name": "Can I combine overseas and Australian work experience points?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can claim points for both overseas and Australian skilled employment if they are in your nominated occupation or a closely related one. However, the Department of Home Affairs enforces a strict hard cap of 20 points combined maximum. If your total work experience points exceed 20, they will be restricted to 20 points in the final calculation."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
    </>
  );
}
