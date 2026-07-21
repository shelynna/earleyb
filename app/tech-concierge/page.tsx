import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {PageImageSection} from '@/components/PageImageSection';
import {siteImages} from '@/lib/site-images';

export const metadata = {
  title: "EarleyBird Tech Concierge | 1-on-1, Home, Virtual, and Community Tech Help",
  description: "Tech concierge support for 1-on-1 help, home tech help, virtual support, scam prevention, TV and streaming help, assisted living communities, and HOAs.",
};

const conciergeLinks = [
  {
    href: '/services/one-on-one-training',
    title: '1-on-1 Tech Help',
    description: 'Personalized training for phones, computers, email, photos, apps, and online safety.',
  },
  {
    href: '/services/home-tech-help',
    title: 'Home Tech Help',
    description: 'In-home support for Wi-Fi, printers, smart TVs, accounts, and device setup.',
  },
  {
    href: '/services/virtual-tech-support',
    title: 'Virtual Tech Support',
    description: 'Remote support by phone or video for quick questions and guided troubleshooting.',
  },
  {
    href: '/tech-concierge/scam-shield',
    title: 'Scam Detection and Prevention',
    description: 'Practical education and proactive defense against fraud attempts.',
  },
  {
    href: '/services/cut-the-cord',
    title: 'Cut the Cord',
    description: 'Review cable costs and build a simpler streaming plan.',
  },
  {
    href: '/services/streaming-setup-assistance',
    title: 'EarleyBird TV and Streaming Concierge',
    description: 'Set up apps, remotes, favorites, captions, logins, and smart TV basics.',
  },
  {
    href: '/tech-concierge/packages',
    title: 'Assisted Living and HOA Packages',
    description: 'Recurring support programs for residents, facilities, and communities.',
  },
  {
    href: '/tech-concierge/pricing',
    title: 'Facility Pricing',
    description: 'Simple pricing for assisted living and senior living support plans.',
  },
] as const;

export default function TechConcierge() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA]">
        {/* Hero */}
        <section className="pt-[180px] md:pt-[240px] px-4 md:px-10 max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[80px] md:pb-[120px]">
          <h1 className="text-[48px] md:text-[80px] font-bold leading-[1.1] tracking-tighter text-balance max-w-5xl mb-8 text-black relative z-10">
            EarleyBird Tech Concierge
          </h1>
          <div className="max-w-4xl relative z-10 flex flex-col items-center">
            <p className="text-lg md:text-2xl text-gray-600 mb-12 px-4 leading-relaxed font-medium">
              1-on-1 tech help, home tech help, virtual support, scam prevention, TV and streaming concierge, and community packages for assisted living and HOAs.
            </p>
            <Link href="/book?service=Tech%20Concierge" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-10 py-4 text-xs uppercase tracking-widest shadow-md">
              Book Tech Concierge
            </Link>
          </div>
        </section>

        <PageImageSection
          image={siteImages.pages.techConcierge}
          eyebrow="Hands-on support"
          title="A calmer way to solve everyday technology needs."
          body="The concierge model combines setup, troubleshooting, education, and proactive safety guidance so people are not left guessing after the appointment."
        />

        {/* The Urgent Imperative */}
        <section className="py-16 md:py-[100px] px-4 md:px-10 max-w-[1200px] mx-auto relative z-10">
          <div className="w-full bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-16 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-2">Why proactive tech help is a necessity.</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                  The need for technology assistance among older adults (aged 60 and over) is critical... for financial security, access to vital services, and sustained health and mental well-being.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-soft-card-2 rounded-3xl p-8 flex flex-col justify-center">
                <span className="text-black font-black text-4xl md:text-6xl mb-4">$4.8 Billion</span>
                <p className="text-gray-800 font-semibold text-lg md:text-xl">
                  {"Seniors over 60 lost $4.8 billion to scams in 2024, accounting for 29% of the nation's $16.6 Billion in fraud."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="py-16 md:py-[100px] px-4 md:px-10 max-w-[1200px] mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-6">Choose your Tech Concierge path.</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-4xl mx-auto mb-16">
            Choose personal help, virtual support, in-home service, or a recurring community package. <strong className="text-black">Every path is built around clear answers, patient education, and practical next steps.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {conciergeLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="clickable-card bg-white p-7 md:p-8 rounded-3xl group flex min-h-[190px] flex-col justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
              >
                <span className="flex items-start justify-between gap-6">
                  <span>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
                  </span>
                </span>
                <span className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-action">
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
