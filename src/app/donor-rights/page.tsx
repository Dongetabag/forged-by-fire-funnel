import LegalPage from "@/components/legal-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donor Bill of Rights",
  description:
    "Every donor to Forged By Fire has rights. transparency on mission, financials, use of donations, recognition preferences, and communication choice.",
  alternates: { canonical: "/donor-rights" },
};

const sections = [
  {
    heading: "Preamble",
    body: `Forged By Fire adopts the Donor Bill of Rights, originally developed by the Association of Fundraising Professionals (AFP), the Association for Healthcare Philanthropy (AHP), the Council for Advancement and Support of Education (CASE), and the Giving Institute. We commit to the following principles for everyone who contributes to our mission.`,
  },
  {
    heading: "1. Mission & Use of Gifts",
    body: `Every donor has the right to be informed of Forged By Fire's mission, of the way we intend to use donated resources, and of our capacity to use donations effectively for their intended purposes.`,
  },
  {
    heading: "2. Governance",
    body: `Every donor has the right to be informed of the identity of those serving on Forged By Fire's governing board, and to expect the board to exercise prudent judgment in its stewardship responsibilities.`,
  },
  {
    heading: "3. Financial Transparency",
    body: `Every donor has the right to access Forged By Fire's most recent financial statements, including how donations are allocated between program expenses and operations.`,
  },
  {
    heading: "4. Use as Intended",
    body: `Every donor has the right to be assured that their gift will be used for the purposes for which it was given. Restricted gifts (those designated for a specific program or fund) are used only for that purpose.`,
  },
  {
    heading: "5. Appropriate Acknowledgment",
    body: `Every donor has the right to receive appropriate acknowledgment and recognition of their gift. Once our 501(c)(3) status is confirmed, we will provide tax receipts for all donations.`,
  },
  {
    heading: "6. Confidentiality",
    body: `Every donor has the right to have information about their donation handled with respect and confidentiality. We do not sell, rent, or share donor contact information with unrelated third parties. See our Privacy Policy for specifics.`,
  },
  {
    heading: "7. Recognition Preferences",
    body: `Every donor has the right to request anonymity and to control how their name appears in donor recognition. If you prefer to give anonymously or have your name listed differently, let us know.`,
  },
  {
    heading: "8. Professional Interactions",
    body: `Every donor has the right to expect that all relationships with individuals representing Forged By Fire will be professional, respectful, and free from pressure. No one is obligated to donate, and you can change your mind about a pledge at any time.`,
  },
  {
    heading: "9. Fundraiser Identity",
    body: `Every donor has the right to know whether individuals seeking donations on our behalf are staff, volunteers, or paid professional solicitors. We currently accept donations directly through our own staff and volunteers. We do not use paid professional solicitors.`,
  },
  {
    heading: "10. Removal from Mailing Lists",
    body: `Every donor has the right to have their name deleted from mailing lists that we share or rent. We do not currently rent or share donor mailing lists. To unsubscribe from our own communications, use the unsubscribe link in any email or contact us directly.`,
  },
  {
    heading: "11. Answers to Questions",
    body: `Every donor has the right to feel free to ask questions when making a donation and to receive prompt, truthful, and forthright answers. Email contact@theforgedbyfire.org anytime. We respond within 24 hours.`,
  },
  {
    heading: "Contact",
    body: `Questions about donor rights, recognition preferences, or any aspect of your donation: contact@theforgedbyfire.org.`,
  },
];

export default function DonorRightsPage() {
  return (
    <LegalPage
      label="Donor Rights"
      title="Donor Bill of"
      highlight="Rights"
      subtitle="Every person who contributes to Forged By Fire has rights: transparency, choice, confidentiality, and respect. Here's our commitment to you."
      lastUpdated="April 19, 2026"
      sections={sections}
    />
  );
}
