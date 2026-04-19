import LegalPage from "@/components/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nondiscrimination Statement",
  description:
    "Forged By Fire's nondiscrimination and equal opportunity policy for families we serve, donors, volunteers, and partners.",
  alternates: { canonical: "/nondiscrimination" },
};

const sections = [
  {
    heading: "Our Policy",
    body: `Forged By Fire is committed to serving Springfield, Massachusetts families affected by house fires without discrimination. We do not discriminate on the basis of race, color, religion, national origin, ancestry, age, sex, gender identity or expression, sexual orientation, disability, marital status, veteran status, family composition, housing status, income, or any other classification protected by federal, state, or local law.`,
  },
  {
    heading: "Applies to All Relationships",
    body: `This nondiscrimination commitment applies to:

• Families we serve with emergency resources and transitional housing
• Donors, sponsors, and supporters
• Volunteers, interns, and skills-based contributors
• Community partners, referral partners, and collaborators
• Staff (current and future) and board members
• Vendors and service providers

No individual is denied service, employment, volunteer opportunity, or partnership on the basis of any protected classification.`,
  },
  {
    heading: "Services Based on Need",
    body: `Emergency resources and transitional housing are allocated based on need. specifically, loss caused by a house fire in our service area. and on the capacity of our program. Requests that fall outside our mission (e.g., non-fire-related housing requests) are referred to appropriate partner organizations when possible.`,
  },
  {
    heading: "Safe Environment",
    body: `We are committed to maintaining a safe, respectful environment for everyone who interacts with Forged By Fire. Harassment, discrimination, or retaliation by any staff member, volunteer, board member, or partner will result in prompt review and appropriate action, up to and including removal from the program.`,
  },
  {
    heading: "Reporting Concerns",
    body: `If you believe you have experienced or witnessed discrimination or harassment in connection with Forged By Fire, please contact us at contact@forgedbyfire.org. We take all reports seriously, will investigate in good faith, and will not retaliate against anyone who raises a concern in good faith.`,
  },
  {
    heading: "Legal Basis",
    body: `This policy is maintained in alignment with applicable federal and Massachusetts laws, including Title VII of the Civil Rights Act, the Americans with Disabilities Act, the Fair Housing Act, and Massachusetts General Laws Chapter 151B and related statutes.`,
  },
];

export default function NondiscriminationPage() {
  return (
    <LegalPage
      label="Policy"
      title="Nondiscrimination"
      highlight="Statement"
      subtitle="Forged By Fire serves, employs, and partners with people without discrimination. Equal access to our mission is core to how we work."
      lastUpdated="April 19, 2026"
      sections={sections}
    />
  );
}
