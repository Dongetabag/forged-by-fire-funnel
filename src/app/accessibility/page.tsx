import LegalPage from "@/components/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Forged By Fire's commitment to accessibility. We aim to make forgedbyfire.org usable by everyone, including people with disabilities.",
  alternates: { canonical: "/accessibility" },
};

const sections = [
  {
    heading: "Our Commitment",
    body: `Forged By Fire is committed to ensuring our website and services are accessible to people with disabilities, in line with the spirit of the Americans with Disabilities Act (ADA) and the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.`,
  },
  {
    heading: "Standards We Follow",
    body: `We design and build forgedbyfire.org with the following practices in mind:

• Semantic HTML and proper heading structure for screen-reader navigation
• Sufficient color contrast between text and background
• Keyboard-navigable menus, forms, and interactive elements
• Descriptive alt text for meaningful images
• Clear focus indicators for interactive elements
• Responsive design for mobile, tablet, and desktop
• Readable typography and generous line spacing`,
  },
  {
    heading: "Known Limitations",
    body: `This site is actively maintained. We regularly review accessibility and address issues as we discover them. Current known considerations:

• Some image descriptions may be brief — we welcome requests for more detailed descriptions of any image
• Third-party embeds (chat assistant, payment processors once live) may have accessibility characteristics outside our direct control
• Rich photography and motion may not be ideal for every accessibility need — reduced-motion preferences are respected where possible`,
  },
  {
    heading: "If You Encounter a Barrier",
    body: `If any part of forgedbyfire.org is not working for you — or if you need information in an alternative format — please email contact@forgedbyfire.org. We will respond within 2 business days and do our best to make the information available to you in a format you can use.`,
  },
  {
    heading: "Ongoing Improvement",
    body: `Accessibility is a continuous effort. As our site and services grow, we will:

• Audit accessibility at each major site update
• Provide accessibility training for contributors
• Solicit feedback from people who use assistive technology
• Update this statement as practices evolve`,
  },
  {
    heading: "Contact",
    body: `Accessibility feedback, requests, or concerns: contact@forgedbyfire.org`,
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      label="Accessibility"
      title="Accessibility"
      highlight="Statement"
      subtitle="Our commitment to making Forged By Fire's website and services usable by everyone — including people with disabilities."
      lastUpdated="April 19, 2026"
      sections={sections}
    />
  );
}
