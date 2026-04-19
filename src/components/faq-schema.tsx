import Script from "next/script";

interface FAQ {
  question: string;
  answer: string;
}

/**
 * Emits an FAQPage structured-data block. Use on pages that naturally have
 * FAQ-like content (services, donate, contact) to strengthen local SEO
 * and surface in Google's "People also ask" results.
 */
export default function FaqSchema({ id, faqs }: { id: string; faqs: FAQ[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
  return (
    <Script
      id={`faq-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
