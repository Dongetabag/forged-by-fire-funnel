import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Forged By Fire. how we collect, use, and protect information from donors, volunteers, and families we serve in Springfield, MA.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "April 19, 2026";

const sections = [
  {
    heading: "1. Who We Are",
    body: `Forged By Fire is a nonprofit based in Springfield, Massachusetts. This Privacy Policy explains how we collect, use, and protect information from visitors, donors, volunteers, and the families we serve. It applies to forgedbyfire.org and to information we receive through our services.`,
  },
  {
    heading: "2. Information We Collect",
    body: `We collect information you choose to share with us, including:

• Contact information: name, email, phone number, mailing address
• Communication details: messages you send via forms, chatbot, or email
• Volunteer information: skills, availability, background-check consent where required
• Donor information: donation amount, payment method (processed by third-party payment processors), giving history
• Family support details: household composition, needs, fire incident information. collected only when you're receiving services from us

We also collect limited technical information automatically:
• Server logs (IP address, browser type, pages visited)
• Basic analytics (page views, referrers) for site improvement
• No advertising or third-party tracking cookies are used`,
  },
  {
    heading: "3. How We Use Information",
    body: `We use the information you share to:

• Respond to inquiries and provide services
• Coordinate emergency response, transitional housing, and case management
• Acknowledge donations and maintain donor records
• Schedule and coordinate volunteer work
• Communicate about Forged By Fire's work (you can unsubscribe anytime)
• Improve our site and services
• Comply with legal and regulatory obligations`,
  },
  {
    heading: "4. Sensitive Information and Families in Crisis",
    body: `We treat information from families we serve with particular care. Details about fire incidents, household composition, and personal circumstances are used only to coordinate support and are shared only with team members who need them. We do not publish identifying details about the families we serve without written consent. Please do not submit Social Security numbers or full financial-account numbers through our site or forms.`,
  },
  {
    heading: "5. How We Share Information",
    body: `We do not sell your information. We share limited information only in these cases:

• Service providers: payment processors, email delivery (Resend), website hosting (Vercel), database hosting (Neon), AI assistant (Anthropic). These providers handle data under their own privacy policies and contractual obligations.
• Community partners: with your permission, we may share relevant details with referral partners (e.g., Springfield Fire Department, Red Cross, local shelters) to coordinate support.
• Legal obligations: when required by law, court order, or to protect rights and safety.`,
  },
  {
    heading: "6. Data Retention",
    body: `We retain donor, volunteer, and service records as long as necessary to operate our programs and meet legal, accounting, and reporting obligations. Family service records may be kept longer where ongoing care is provided. You can request deletion of your records at any time (see "Your Rights" below).`,
  },
  {
    heading: "7. Security",
    body: `We use reasonable technical and organizational safeguards to protect information: encrypted connections (HTTPS), reputable third-party providers with security certifications, and internal access controls. No system is completely secure. If you believe your information has been compromised, contact us immediately at contact@forgedbyfire.org.`,
  },
  {
    heading: "8. Your Rights",
    body: `You have the right to:

• Access the information we hold about you
• Request correction of inaccurate information
• Request deletion of your information, subject to legal and operational obligations
• Opt out of communications (each email includes an unsubscribe option)
• Withdraw consent for sharing with community partners at any time

To exercise these rights, email contact@forgedbyfire.org.`,
  },
  {
    heading: "9. Children's Information",
    body: `Our site is not directed at children under 13, and we do not knowingly collect information from children under 13 without parental consent. When providing services to families, we may receive information about minors as part of household support. this is handled under "Sensitive Information" above.`,
  },
  {
    heading: "10. Third-Party Services",
    body: `Our chat assistant (ATLAS) is powered by Anthropic. Conversations may be processed by Anthropic's systems under their terms and privacy policy. Payment processing is handled by industry-standard processors. Vercel provides our site hosting; Neon stores our database; Resend delivers our email. Each provider has its own privacy practices.`,
  },
  {
    heading: "11. Cookies",
    body: `We use minimal cookies: essential session cookies for the chat assistant and basic analytics. We do not use advertising cookies or third-party tracking. You can disable cookies in your browser, though some site features may not work.`,
  },
  {
    heading: "12. Changes to This Policy",
    body: `We may update this Privacy Policy occasionally. Material changes will be reflected in the "Last updated" date above and, where appropriate, communicated via email to donors and volunteers on file.`,
  },
  {
    heading: "13. Contact Us",
    body: `Questions or requests about privacy can be sent to contact@forgedbyfire.org. We respond within 24 hours for most inquiries.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Legal"
          title="Privacy"
          highlight="Policy"
          subtitle="How Forged By Fire collects, uses, and protects information from donors, volunteers, and the Springfield families we serve."
        />

        <section className="py-16 md:py-20">
          <div className="container-tight">
            <div className="max-w-3xl mx-auto">
              <p className="text-[12px] uppercase tracking-widest text-[#9B2F0A] mb-10">
                Last updated: {LAST_UPDATED}
              </p>
              <div className="space-y-10">
                {sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl md:text-2xl font-medium text-[#1A1A1A] mb-3 tracking-tight">
                      {s.heading}
                    </h2>
                    <p className="text-[14px] text-[#1A1A1A]/72 leading-relaxed whitespace-pre-line">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
