import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Forged By Fire, a Springfield, Massachusetts nonprofit providing emergency fire relief and transitional housing.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "April 19, 2026";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: `By accessing or using the Forged By Fire website (theforgedbyfire.org) or any service we provide, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use the site.`,
  },
  {
    heading: "2. Who We Are",
    body: `Forged By Fire is a nonprofit organization based in Springfield, Massachusetts, founded by Lt. Donald Coleman Jr. We provide emergency resources and transitional housing for families affected by house fires in Springfield and, when capacity allows, the greater Pioneer Valley. Our 501(c)(3) tax-exempt status is pending; tax-deductibility of donations will be confirmed once status is formally approved.`,
  },
  {
    heading: "3. Eligibility and Use of Services",
    body: `Services offered by Forged By Fire are intended for families in Springfield, Massachusetts whose homes have been damaged or destroyed by fire. Referrals are coordinated primarily through the Springfield Fire Department. We reserve the right to decline service in any case at our discretion, including where capacity is limited, safety is a concern, or the request does not meet our mission.`,
  },
  {
    heading: "4. No Professional Advice",
    body: `Information on this site (including pages about emergency response, housing, donations, and the founder's story) is provided for general informational purposes only. It is not legal, financial, medical, insurance, or professional advice. For specific situations, please consult the appropriate professional (insurance adjuster, attorney, healthcare provider, etc.).`,
  },
  {
    heading: "5. Donations",
    body: `All donations to Forged By Fire are voluntary gifts. 100% of donated funds go to support families; operational costs are funded separately. Donations are non-refundable except in cases of demonstrated error (e.g., duplicate charges). Once our 501(c)(3) status is formally approved, we will confirm tax-deductibility and issue receipts accordingly. Until then, donors should not assume tax-deductibility.`,
  },
  {
    heading: "6. Volunteer and Partner Participation",
    body: `Volunteers and partners engage with Forged By Fire at their own choice and are expected to conduct themselves with care, respect, and discretion, especially when interacting with families in crisis. We may conduct background checks for certain roles. We reserve the right to end any volunteer or partner relationship at our discretion.`,
  },
  {
    heading: "7. Intellectual Property",
    body: `The Forged By Fire name, logo, and site content (text, images, design) are the property of Forged By Fire unless otherwise noted. You may share links to our pages and quote short excerpts with attribution, but you may not reproduce substantial portions of the site or use our name or logo for commercial purposes without written permission.`,
  },
  {
    heading: "8. User-Submitted Content",
    body: `When you submit information through our contact form, chatbot, or volunteer sign-up, you represent that the information is accurate and that you have the right to share it. You grant us permission to use the information to respond to your inquiry and operate our services. Please do not submit sensitive personal information (Social Security numbers, financial account details, medical information) through the site.`,
  },
  {
    heading: "9. Limitation of Liability",
    body: `To the maximum extent permitted by law, Forged By Fire and its volunteers, partners, directors, and agents are not liable for any indirect, incidental, or consequential damages arising from your use of the site or our services. Services are provided "as available" on a best-effort basis. We cannot guarantee outcomes in any individual case.`,
  },
  {
    heading: "10. External Links",
    body: `Our site may link to third-party websites (e.g., Red Cross, Springfield Fire Department). We do not control, endorse, or take responsibility for content on external sites. Visit them at your own discretion.`,
  },
  {
    heading: "11. Changes to These Terms",
    body: `We may update these Terms from time to time. Material changes will be reflected by updating the "Last updated" date above. Continued use of the site after changes means you accept the updated Terms.`,
  },
  {
    heading: "12. Governing Law",
    body: `These Terms are governed by the laws of the Commonwealth of Massachusetts, without regard to conflict-of-law principles. Any disputes will be resolved in the state or federal courts located in Hampden County, Massachusetts.`,
  },
  {
    heading: "13. Contact",
    body: `Questions about these Terms can be sent to contact@theforgedbyfire.org or via our contact page.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Legal"
          title="Terms of"
          highlight="Service"
          subtitle="The rules of the road for using theforgedbyfire.org and the services we provide to Springfield, Massachusetts families."
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
