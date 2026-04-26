import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  Home,
  Compass,
  Phone,
  PhoneCall,
  HandHeart,
  Heart,
  Shield,
  Users,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Package,
  Briefcase,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsorship Report. Forged By Fire (Springfield, MA)",
  description:
    "A sponsor and partner overview of Forged By Fire, a Springfield, Massachusetts fire relief nonprofit. Programs, pipeline, partners, and tiered sponsorship paths.",
  alternates: { canonical: "/sponsor" },
  keywords: [
    "Forged By Fire sponsorship",
    "Springfield fire relief sponsor",
    "Springfield MA nonprofit sponsor",
    "fire relief corporate sponsorship",
    "donor report Springfield fire",
    "Forged By Fire partner",
  ],
};

const stats = [
  { value: "24 hr", label: "Response Time", icon: Flame },
  { value: "$500", label: "Emergency Debit Card", icon: CreditCard },
  { value: "3", label: "Family Housing Capacity", icon: Home },
  { value: "100%", label: "Donations to Families", icon: Heart },
];

const pillars = [
  {
    icon: Flame,
    label: "PILLAR 01",
    title: "Emergency Resources",
    desc: "A $500 reloadable debit card, clothing for every family member, and essentials, delivered within 48 hours of the fire. No application gauntlet.",
  },
  {
    icon: Home,
    label: "PILLAR 02",
    title: "Transitional Housing",
    desc: "Furnished, case-managed transitional housing for up to three families at a time, bridging from displacement to permanent housing. Stays up to 90 days.",
  },
  {
    icon: Compass,
    label: "PILLAR 03",
    title: "Resource Navigation",
    desc: "Coordinated case management. Insurance, Red Cross, school enrollment, prescription refills, and warm hand-offs to long-term partners.",
  },
];

const programs = [
  {
    icon: Package,
    title: "Essentials Delivery",
    desc: "Clothing, hygiene supplies, school supplies, hot meals on the night of the fire. Sized to the actual family. Delivered, not waited for.",
    image: "/images/community-cleanup.jpg",
  },
  {
    icon: CreditCard,
    title: "$500 Reloadable Emergency Card",
    desc: "Loaded same day. Family-controlled spend. As donations come in to that family's case, the card keeps loading.",
    image: "/images/family-moving-in.jpg",
  },
  {
    icon: Home,
    title: "Transitional Housing Units",
    desc: "Furnished, case-managed, up to 90 days. Three families at a time. The unit is the restored Coleman family home.",
    image: "/images/real/restored-victorian-front.jpg",
  },
  {
    icon: Briefcase,
    title: "Case Management & Life Skills",
    desc: "Weekly check-ins. Financial-literacy resources. Coordinated insurance and benefit advocacy. Warm referrals to permanent supports.",
    image: "/images/family-kitchen.jpg",
  },
];

const pipeline = [
  {
    number: "01",
    icon: Phone,
    title: "Fire",
    desc: "A residential fire occurs in Springfield. Springfield Fire Department's PIO refers the family to Forged By Fire on scene or within hours.",
    detail: "Same day",
  },
  {
    number: "02",
    icon: PhoneCall,
    title: "Outreach",
    desc: "Within 24 hours, our team contacts the family. We listen, we document needs with consent, and we plan the support package.",
    detail: "Within 24 hours",
  },
  {
    number: "03",
    icon: HandHeart,
    title: "Relief",
    desc: "Within 48 hours, the $500 emergency card and essentials are delivered. The family begins to stabilize.",
    detail: "Within 48 hours",
  },
  {
    number: "04",
    icon: Heart,
    title: "Recovery",
    desc: "Weekly case management. Transitional housing if needed. Coordinated hand-offs into permanent housing and long-term partners.",
    detail: "For as long as it takes",
  },
];

const audience = [
  { icon: Users, name: "Families with Children", desc: "The primary audience. Sized clothing for every kid, school continuity, transportation help." },
  { icon: Heart, name: "Single Parents", desc: "Higher-priority response. The recovery curve is steepest for parents shouldering it alone." },
  { icon: Shield, name: "Elderly on Fixed Income", desc: "Dignity-first support. Replacement of irreplaceable items, navigation of senior housing systems." },
  { icon: Home, name: "Renters Without Insurance", desc: "The biggest gap in fire relief. We step in first when nothing else does." },
];

const partners = [
  { name: "Springfield Fire Department", role: "Same-day referral. Our keystone partner." },
  { name: "American Red Cross", role: "Mid-term displacement coordination." },
  { name: "Local Shelters & Churches", role: "Overflow and faith-based support pipelines." },
  { name: "Social Services", role: "Long-term casework hand-offs." },
  { name: "FEMA & Insurance Liaisons", role: "Federal aid and insurance navigation." },
  { name: "School Districts", role: "Continuity for displaced students." },
];

const tiers = [
  { amount: "$25", label: "Night-of-fire essentials", desc: "Hot meals and basics for a displaced family the first night." },
  { amount: "$50", label: "Clothing for one family member", desc: "A complete outfit and shoes for one displaced person." },
  { amount: "$100", label: "Partial emergency card load", desc: "Meaningful contribution toward a family's $500 card." },
  { amount: "$500", label: "Full emergency card", desc: "Funds one full family's emergency relief package.", featured: true },
  { amount: "$1,000", label: "One month of housing", desc: "One month of transitional housing for a rebuilding family." },
  { amount: "$5,000+", label: "Sustained program support", desc: "Multi-family impact. Corporate matching welcomed." },
];

const Section = ({ id, label, title, children, alt = false }: { id: string; label: string; title: string; children: React.ReactNode; alt?: boolean }) => (
  <section id={id} className={`py-20 md:py-28 ${alt ? "bg-[#FBF8F4]" : ""}`}>
    <div className="container-tight">
      <div className="max-w-3xl mb-12">
        <p className="text-[11px] tracking-widest uppercase text-[#E85D23] mb-4">{label}</p>
        <h2 className="text-[28px] md:text-[40px] font-normal leading-[1.1] tracking-tight text-[#1A1A1A]">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
);

export default function SponsorPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Sponsor & Partner Report"
          title="When the next Springfield fire happens,"
          highlight="we are already there."
          subtitle="A sponsor and partner overview of Forged By Fire. Programs, pipeline, partners, and how to fund the work."
          image="/images/real/restored-victorian-front.jpg"
          imageAlt="The restored Coleman family home, now Forged By Fire's transitional housing unit"
          hideStatusDot
        />

        {/* Stats bar */}
        <section className="py-12 bg-[#F5F0EA] border-b border-[#1A1A1A]/8">
          <div className="container-tight">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <s.icon size={18} className="mx-auto mb-3 text-[#E85D23]/70" />
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight mb-1 text-[#1A1A1A]">{s.value}</div>
                  <div className="text-[10px] text-[#1A1A1A]/45 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 01 About */}
        <Section id="about" label="01. ABOUT FORGED BY FIRE" title="An active-duty firefighter founded this because the system was leaving Springfield families behind.">
          <div className="grid lg:grid-cols-5 gap-10 max-w-5xl">
            <div className="lg:col-span-3 space-y-5 text-[15px] text-[#1A1A1A]/72 leading-relaxed">
              <p>
                Forged By Fire is a Springfield, Massachusetts nonprofit founded by Lt.
                Donald Coleman Jr. We respond to residential fires through a same-day
                referral partnership with the Springfield Fire Department.
              </p>
              <p>
                The first 48 hours after a fire are when families need help most, and
                that is the gap we close. Insurance payouts arrive in weeks. Red Cross
                relief is brief by design. Forged By Fire bridges what the family needs
                from the night of the fire through their first stable footing.
              </p>
              <p>
                Our mission is simple. No Springfield family should have to rebuild
                alone.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="img-card aspect-[4/5] relative rounded-[18px] overflow-hidden">
                <Image src="/images/real/before-after-composite.jpg" alt="The Coleman home: before and after restoration" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
            </div>
          </div>
        </Section>

        {/* 02 Founder */}
        <Section id="founder" label="02. THE FOUNDER" title="Lt. Donald Coleman Jr." alt>
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start max-w-5xl">
            <div className="lg:col-span-2">
              <div className="img-card aspect-[3/4] relative rounded-[18px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                <Image src="/founder-portrait.png" alt="Lt. Donald Coleman Jr." fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" />
              </div>
            </div>
            <div className="lg:col-span-3 space-y-5 text-[15px] text-[#1A1A1A]/72 leading-relaxed">
              <p>
                Lt. Donald Coleman Jr. has served the Springfield Fire Department since
                2015. In 2022, he lost his own home to a fire while away on vacation.
                He spent two and a half years restoring his grandparents&apos; Victorian.
                Today that home is the transitional housing unit Forged By Fire offers
                Springfield families.
              </p>
              <p>
                He is a firefighter first. Forged By Fire exists because he saw, on
                scene and inside his own loss, that the gap between disaster and the
                first real help was wide enough that families fell through it.
              </p>
              <blockquote className="border-l-2 border-[#E85D23]/50 pl-5 italic text-[#1A1A1A]/72">
                &ldquo;When you lose everything, all your clothes, your sneakers, your
                socks, anything you can get is a blessing. Every little bit counts.&rdquo;
                <p className="mt-2 not-italic text-[12px] uppercase tracking-widest text-[#9B2F0A]">
                  Lt. Donald Coleman Jr., Founder
                </p>
              </blockquote>
            </div>
          </div>
        </Section>

        {/* 03 Three Pillars */}
        <Section id="pillars" label="03. STRUCTURE" title="Three pillars. One pipeline.">
          <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed max-w-2xl mb-12">
            Most fire-relief efforts treat emergency response, housing, and case
            management as three separate programs run by three separate organizations.
            We run them as one pipeline so families do not have to start over at every
            hand-off.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {pillars.map((p) => (
              <div key={p.label} className="card-light p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E85D23]/10 flex items-center justify-center">
                    <p.icon size={20} className="text-[#E85D23]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#9B2F0A] font-semibold">{p.label}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 tracking-tight">{p.title}</h3>
                <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 04 Programs */}
        <Section id="programs" label="04. PROGRAMS" title="Four programs. One family at the center." alt>
          <div className="grid md:grid-cols-2 gap-5">
            {programs.map((prog) => (
              <div key={prog.title} className="card-light overflow-hidden flex flex-col">
                <div className="img-card aspect-[16/10] relative">
                  <Image src={prog.image} alt={prog.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1A1A1A]/80 backdrop-blur-sm rounded-full">
                    <prog.icon size={12} className="text-[#F59E0B]" />
                    <span className="text-[10px] uppercase tracking-widest text-white font-semibold">Program</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 tracking-tight">{prog.title}</h3>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">{prog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 05 Pipeline */}
        <Section id="pipeline" label="05. THE PIPELINE" title="Fire. Outreach. Relief. Recovery.">
          <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed max-w-2xl mb-12">
            One sponsored family equals one $500 emergency card, one duffel of
            essentials, one case-managed transition. The same pipeline runs for every
            referred fire. Predictable cost. Predictable outcome.
          </p>
          <div className="grid md:grid-cols-4 gap-3">
            {pipeline.map((step, i) => (
              <div key={step.number} className="relative">
                {i < pipeline.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+32px)] right-[-12px] h-px bg-[#E85D23]/25 z-0" />
                )}
                <div className="card-glass p-6 h-full flex flex-col relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[32px] font-light text-[#E85D23]/20 leading-none tracking-tight">{step.number}</span>
                    <div className="w-10 h-10 rounded-xl bg-[#E85D23]/10 flex items-center justify-center">
                      <step.icon size={20} className="text-[#E85D23]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[#1A1A1A]/55 leading-relaxed flex-1">{step.desc}</p>
                  <div className="mt-4 pt-4 border-t border-[#1A1A1A]/5">
                    <span className="text-[10px] uppercase tracking-wider text-[#9B2F0A] font-semibold">{step.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 06 Who We Serve */}
        <Section id="audience" label="06. WHO WE SERVE" title="Springfield families most vulnerable to a fire." alt>
          <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-4xl">
            {audience.map((a) => (
              <div key={a.name} className="card-light p-7 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#E85D23]/10 flex items-center justify-center shrink-0">
                  <a.icon size={20} className="text-[#E85D23]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#1A1A1A] mb-1.5 tracking-tight">{a.name}</h3>
                  <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card-ember p-7 max-w-3xl">
            <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-2">SERVICE AREA</p>
            <p className="text-[14px] text-[#1A1A1A]/72 leading-relaxed">
              Primary: Springfield, Massachusetts. Expansion targets as funding scales:
              Holyoke, Chicopee, and Greater Hampden County. Pioneer Valley referrals
              are reviewed case-by-case when capacity allows.
            </p>
          </div>
        </Section>

        {/* 07 Partners */}
        <Section id="partners" label="07. PARTNERS & TRUST" title="The Springfield Fire Department referral is the single most important asset we have.">
          <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed max-w-2xl mb-10">
            Forged By Fire works inside the existing emergency-response ecosystem. We
            do not duplicate what the Red Cross or insurance liaisons do. We close the
            gap between them.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl">
            {partners.map((p) => (
              <div key={p.name} className="card-glass p-5">
                <h3 className="text-[14px] font-semibold text-[#1A1A1A] mb-1.5">{p.name}</h3>
                <p className="text-[12px] text-[#1A1A1A]/60 leading-relaxed">{p.role}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 08 Sponsor Tiers */}
        <Section id="sponsor" label="08. SPONSOR & SUPPORT" title="Six tiers. One predictable model." alt>
          <p className="text-[15px] text-[#1A1A1A]/65 leading-relaxed max-w-2xl mb-12">
            100% of donations reach Springfield families. Operations are funded
            separately. Corporate matching, multi-year commitments, and in-kind
            sponsorships are welcomed.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-5xl">
            {tiers.map((t) => (
              <div key={t.amount} className={`card-light p-7 ${t.featured ? "border-[#E85D23]/40 shadow-[0_8px_30px_rgba(232,93,35,0.15)]" : ""}`}>
                {t.featured && (
                  <span className="inline-block text-[9px] uppercase tracking-widest px-2 py-0.5 bg-[#E85D23] text-white rounded-full font-bold mb-3">
                    Most Impact
                  </span>
                )}
                <p className="text-[36px] md:text-[42px] font-normal text-[#1A1A1A] leading-none tracking-tight mb-2">{t.amount}</p>
                <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-3 font-semibold">{t.label}</p>
                <p className="text-[13px] text-[#1A1A1A]/65 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="card-ember p-8 md:p-10 max-w-4xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-[#9B2F0A] mb-2">CORPORATE & FOUNDATION</p>
                <h3 className="text-xl md:text-2xl font-medium text-[#1A1A1A] mb-2 tracking-tight">
                  Sponsor a year of Springfield families.
                </h3>
                <p className="text-[14px] text-[#1A1A1A]/65 leading-relaxed max-w-xl">
                  Annual sponsorships, employee match programs, and in-kind
                  contributions. Email our team and we will send a formal sponsorship
                  packet within one business day.
                </p>
              </div>
              <a
                href="mailto:contact@theforgedbyfire.org?subject=Forged%20By%20Fire%20Sponsorship%20Inquiry"
                className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(232,93,35,0.25)]"
              >
                <Heart size={15} className="fill-white" />
                Become a Sponsor
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </Section>

        {/* Closing */}
        <section className="py-20 bg-[#1A0F08]">
          <div className="container-tight text-center max-w-3xl mx-auto">
            <p className="text-[11px] uppercase tracking-widest text-[#F59E0B] mb-4">RISING FROM THE ASHES, TOGETHER</p>
            <h2 className="text-[28px] md:text-[40px] font-normal tracking-tight text-white mb-6 leading-[1.1]">
              Every Springfield family deserves to know they are not rebuilding alone.
            </h2>
            <p className="text-[15px] text-white/65 leading-relaxed mb-8">
              Forged By Fire is a Springfield, Massachusetts nonprofit. 501(c)(3)
              status pending. 100% of donated funds reach families. Operations are
              funded separately, with full disclosure published annually.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:contact@theforgedbyfire.org?subject=Forged%20By%20Fire%20Sponsorship%20Inquiry"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E85D23] hover:bg-[#C84914] text-white font-semibold rounded-full shadow-[0_4px_16px_rgba(232,93,35,0.35)]"
              >
                Sponsor Forged By Fire
                <ArrowRight size={15} />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 hover:bg-white/15 text-white font-semibold rounded-full"
              >
                Read Our Story
              </Link>
            </div>
            <p className="text-[11px] text-white/40 mt-8">
              contact@theforgedbyfire.org · Springfield, MA · theforgedbyfire.org
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
