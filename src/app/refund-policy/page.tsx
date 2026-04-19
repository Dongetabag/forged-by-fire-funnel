import LegalPage from "@/components/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Forged By Fire's refund policy for donations and contributions. How to request a refund and under what circumstances refunds are issued.",
  alternates: { canonical: "/refund-policy" },
};

const sections = [
  {
    heading: "Overview",
    body: `Donations to Forged By Fire are generally non-refundable because they are used quickly to support Springfield, Massachusetts families affected by house fires. However, we recognize that errors happen, and we review refund requests in good faith.`,
  },
  {
    heading: "When Refunds Are Issued",
    body: `We will issue a refund in the following cases:

• Duplicate transactions: You were charged more than once for the same donation
• Charge errors: The amount charged does not match the amount you authorized
• Unauthorized transactions: A transaction was made without the account holder's consent
• Requested in error: You intended a different amount or a different organization and contact us within 30 days of the donation`,
  },
  {
    heading: "How to Request a Refund",
    body: `To request a refund, email contact@forgedbyfire.org with:

• The date and amount of the donation
• The last four digits of the card or account used (never the full number)
• A brief description of the reason for the refund request
• Your name and contact information

We acknowledge refund requests within 2 business days. Approved refunds typically process within 5 to 10 business days, depending on the original payment method and processor timing.`,
  },
  {
    heading: "Requests After 30 Days",
    body: `For refund requests made more than 30 days after the donation, we will review the specifics of each case. If the funds have already been distributed to a family or committed to program expenses, we may not be able to refund. We will explain the situation and, where possible, offer alternatives (such as redirecting future communications or acknowledging the gift differently).`,
  },
  {
    heading: "Recurring Donations (Once Live)",
    body: `When recurring monthly donations become available, donors can cancel or adjust the recurring schedule at any time through their donor account or by emailing us. Cancellation stops future charges; already-processed monthly charges are reviewed on the same basis as one-time donations above.`,
  },
  {
    heading: "Item Donations",
    body: `Item donations (clothing, household goods, essentials) are accepted on an as-is basis and cannot be returned once donated. If you mistakenly donated an item of significant value, contact us within 48 hours and we will make a reasonable effort to return it if still available.`,
  },
  {
    heading: "Tax Implications",
    body: `Once our 501(c)(3) status is confirmed and a receipt is issued, a refunded donation will require that we issue a correction to the tax receipt. If you've already filed taxes claiming the original donation, consult your tax professional about filing an amended return.`,
  },
  {
    heading: "Contact",
    body: `All refund requests and questions: contact@forgedbyfire.org.`,
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      label="Policy"
      title="Refund"
      highlight="Policy"
      subtitle="How Forged By Fire handles refund requests for donations and contributions. We review each request in good faith."
      lastUpdated="April 19, 2026"
      sections={sections}
    />
  );
}
