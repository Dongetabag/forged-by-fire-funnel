import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import FaqSchema from "@/components/faq-schema";
import Link from "next/link";
import { ArrowRight, Flame, Heart, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ: Frequently Asked Questions",
  description:
    "Answers to common questions about Forged By Fire. how we help Springfield, Massachusetts families after a house fire, how donations are used, and how to volunteer or partner with us.",
  alternates: { canonical: "/faq" },
  keywords: [
    "Forged By Fire FAQ",
    "Springfield MA fire relief questions",
    "Springfield house fire help FAQ",
    "Forged By Fire how it works",
    "nonprofit fire relief transparency",
  ],
};

const categories = [
  {
    icon: Flame,
    id: "emergency",
    title: "Emergency Support",
    faqs: [
      {
        question: "I just had a house fire in Springfield. How do I get help?",
        answer:
          "Reach out via our Contact page or tell the Springfield Fire Department's Public Information Officer at the scene that you'd like support from Forged By Fire. We contact families within 24 hours and deliver a $500 emergency debit card plus essentials within 48 hours.",
      },
      {
        question: "Do I need to apply or fill out paperwork in the first 48 hours?",
        answer:
          "No. Our whole model is built to remove paperwork in the first 48 hours. You give consent for us to help; we show up. Any formal intake happens later, when you have capacity for it.",
      },
      {
        question: "Is there a cost to receive emergency resources?",
        answer:
          "No. Emergency resources are gifts. You do not pay us back, and there is no interest, no loan, and no fee.",
      },
      {
        question: "What if my house fire is outside Springfield. can Forged By Fire help?",
        answer:
          "Our primary service area is Springfield, MA. We review Pioneer Valley referrals case-by-case when capacity allows. If we can't serve you directly, we'll try to connect you with an appropriate partner organization.",
      },
      {
        question: "Can I request transitional housing?",
        answer:
          "Yes. transitional housing is available for families whose home is a total loss or uninhabitable after a fire. We have capacity for up to 5 families at a time. Apply via our Contact page and we'll assess need and fit.",
      },
    ],
  },
  {
    icon: Heart,
    id: "donations",
    title: "Donations",
    faqs: [
      {
        question: "What percentage of my donation goes to families?",
        answer:
          "100% of donations go directly to Springfield families affected by house fires. Operational costs (administration, fundraising) are funded through separate revenue streams, so donors can be confident their contributions reach the mission.",
      },
      {
        question: "Are my donations tax-deductible?",
        answer:
          "501(c)(3) status is pending. Once our determination letter is issued by the IRS, donations will be tax-deductible to the extent allowed by law, and we'll issue receipts accordingly. Until status is formally confirmed, please do not assume deductibility.",
      },
      {
        question: "Can I set up a recurring monthly donation?",
        answer:
          "Monthly giving is launching soon. In the meantime, one-time donations are welcomed. Reach out via Contact if you'd like to be notified when recurring giving is live.",
      },
      {
        question: "Do you accept item donations (clothing, household goods)?",
        answer:
          "Yes, with guidelines. We accept new or lightly-used clothing, shoes, toiletries, and household essentials that can be distributed as family-ready kits. Contact us first to coordinate drop-off and confirm current needs.",
      },
      {
        question: "Can my company or foundation sponsor Forged By Fire?",
        answer:
          "Yes. We welcome corporate sponsorships, foundation grants, employee match programs, and in-kind partnerships. Reach out via Contact to start a conversation with our team.",
      },
      {
        question: "How do I get a refund on a donation?",
        answer:
          "See our Refund Policy. In short: duplicate or erroneous charges are refunded on request. Donations made in error can be refunded within 30 days; after that, please reach out and we'll review case-by-case.",
      },
    ],
  },
  {
    icon: Users,
    id: "volunteer",
    title: "Volunteer & Partner",
    faqs: [
      {
        question: "How can I volunteer with Forged By Fire?",
        answer:
          "Visit our Volunteer page and submit the sign-up form. Ways to help: sort and package donations, deliver support packages, share our story online, or contribute professional skills (legal, accounting, design, etc.).",
      },
      {
        question: "Do I need a background check to volunteer?",
        answer:
          "For some roles, particularly those involving direct contact with families or access to the transitional housing unit — yes. For general sort/packaging work and skills-based volunteering, no.",
      },
      {
        question: "Are you looking for community partners?",
        answer:
          "Yes. We actively partner with shelters, churches, social-service agencies, Red Cross chapters, insurance navigators, and other Springfield-area nonprofits. Reach out via Contact to start a partnership conversation.",
      },
      {
        question: "Do you provide press interviews or media appearances?",
        answer:
          "Yes. see our Press / Media Kit page for boilerplate info, logo downloads, and our media-request contact.",
      },
    ],
  },
];

// Flatten for FAQ schema
const allFaqs = categories.flatMap((c) => c.faqs);

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <FaqSchema id="faq-page" faqs={allFaqs} />
      <main>
        <PageHero
          label="FAQ"
          title="Frequently asked"
          highlight="questions."
          subtitle="Answers to the most common questions from families we serve, donors, volunteers, and partners. If you don't see yours, reach out via the Contact page."
        />

        <section className="py-16 md:py-20">
          <div className="container-tight max-w-4xl mx-auto">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="mb-16 last:mb-0 scroll-mt-24">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-[#E85D23]/10 flex items-center justify-center">
                    <cat.icon size={18} className="text-[#E85D23]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-[#1A1A1A]">
                    {cat.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {cat.faqs.map((f) => (
                    <details key={f.question} className="card-light p-6 group">
                      <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                        <h3 className="text-base md:text-lg font-medium text-[#1A1A1A] tracking-tight">
                          {f.question}
                        </h3>
                        <span className="text-[#E85D23] shrink-0 group-open:rotate-45 transition-transform duration-300 text-2xl leading-none font-light">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-[14px] text-[#1A1A1A]/72 leading-relaxed">
                        {f.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center mt-16 p-8 card-ember">
              <p className="text-[15px] text-[#1A1A1A]/72 mb-4">
                Still have a question? Reach out to our team directly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(232,93,35,0.25)]"
              >
                Contact Forged By Fire
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
