import Link from 'next/link';
import {PageImageSection} from '@/components/PageImageSection';
import {siteImages} from '@/lib/site-images';

export const metadata = {
  title: "The EarleyBird Advantage | Why Choose Our Tech Concierge",
  description: "Learn why EarleyBird is the preferred tech support and concierge partner. We offer proactive, on-site assistance designed for older adults, small businesses, and families.",
};

export default function WhyUs() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        {/* Hero Section */}
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[80px]">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-gradient-to-tr from-amber-100 to-orange-100 rounded-full blur-[120px] opacity-30 z-0 pointer-events-none"></div>
          
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black relative z-10">
            The EarleyBird Advantage: Proactive, Empathetic, and On-Site
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10 relative z-10">
            We don’t just fix devices. We build confidence, block cyber threats before they happen, and relieve staff burdens so everyone can thrive.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link href="/book" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
              Book a Consultation
            </Link>
            <Link href="/tech-concierge/core-services" className="bg-white text-black font-bold rounded-full hover:bg-gray-50 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest">
              See Core Services
            </Link>
          </div>
        </section>

        <PageImageSection
          image={siteImages.pages.whyUs}
          eyebrow="Why EarleyBird"
          title="Proactive support feels different in real life."
          body="The advantage is not only what gets fixed. It is the confidence clients feel when help is patient, visible, and already looking for risk."
          reverse
        />

        {/* 4 Pillars of Advantage */}
        <section className="py-12 md:py-20 px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            <div className="bg-white p-8 md:p-10 rounded-[32px] flex flex-col items-start">
              <h3 className="text-2xl font-bold text-black mb-3">1. Proactive vs. Reactive</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Traditional support waits for something to break. Scammers rely on that exact window of vulnerability. We take a proactive approach—running monthly device checks, updating operating systems, and checking password strengths to stop issues before they strike.
              </p>
              <span className="text-blue-600 font-semibold text-sm">{"\"The Early Bird gets the worm—we prevent risks early.\""}</span>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[32px] flex flex-col items-start">
              <h3 className="text-2xl font-bold text-black mb-3">2. Active Scam Protection</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Other companies offer occasional cybersecurity pamphlets. Our exclusive Scam-Shield Program involves active support—clearing browser cookies, blocking malicious pop-ups, checking for unauthorized cryptocurrency applications, and displaying high-contrast local alert boards.
              </p>
              <Link href="/tech-concierge/scam-shield" className="text-red-600 font-semibold text-sm hover:underline">Learn about Scam-Shield →</Link>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[32px] flex flex-col items-start">
              <h3 className="text-2xl font-bold text-black mb-3">3. Human-First Empathy</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We know tech can be frustrating and overwhelming. Our concierges are hand-picked for their kindness, patience, and ability to translate complex technology jargon into plain, large-print, and highly visual instruction.
              </p>
              <span className="text-indigo-600 font-semibold text-sm">Zero tech-shaming, 100% patient guidance.</span>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[32px] flex flex-col items-start">
              <h3 className="text-2xl font-bold text-black mb-3">4. Accountability & Logging</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe in full transparency. For senior living partnerships, we maintain strict initials-only on-site logs and send administrators a monthly impact snapshot detailing overall tech health and solved issues without violating resident privacy.
              </p>
              <Link href="/portfolio/senior-living" className="text-teal-600 font-semibold text-sm hover:underline">View Community Case Studies →</Link>
            </div>

          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 overflow-x-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">How EarleyBird Compares</h3>
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="pb-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Support Option</th>
                  <th className="pb-4 font-bold text-gray-500 uppercase tracking-wider text-xs text-blue-600">EarleyBird Concierge</th>
                  <th className="pb-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Traditional Call Center</th>
                  <th className="pb-4 font-bold text-gray-500 uppercase tracking-wider text-xs">Well-Meaning Family</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-5 font-bold text-black">Support Type</td>
                  <td className="py-5 text-blue-600 font-semibold">On-site & In-person</td>
                  <td className="py-5 text-gray-600">Remote over phone / screen share</td>
                  <td className="py-5 text-gray-600">Ad-hoc when visiting</td>
                </tr>
                <tr>
                  <td className="py-5 font-bold text-black">Approach</td>
                  <td className="py-5 text-blue-600 font-semibold">Proactive sweeps & updates</td>
                  <td className="py-5 text-gray-600">Reactive (Fixes only when broken)</td>
                  <td className="py-5 text-gray-600">Emergency response only</td>
                </tr>
                <tr>
                  <td className="py-5 font-bold text-black">Scam Defense</td>
                  <td className="py-5 text-blue-600 font-semibold">Active Scam-Shield protocols</td>
                  <td className="py-5 text-gray-500">None (or generic warnings)</td>
                  <td className="py-5 text-gray-600">After-the-fact cleanups</td>
                </tr>
                <tr>
                  <td className="py-5 font-bold text-black">Empathy Rate</td>
                  <td className="py-5 text-blue-600 font-semibold">100% patient, senior-certified</td>
                  <td className="py-5 text-gray-600">Often rushed, frustrating tech jargon</td>
                  <td className="py-5 text-gray-600">Loving, but easily frustrated</td>
                </tr>
                <tr>
                  <td className="py-5 font-bold text-black">Data Storage</td>
                  <td className="py-5 text-blue-600 font-semibold">Strict Zero Password Storage</td>
                  <td className="py-5 text-gray-600">Requires browser credentials saving</td>
                  <td className="py-5 text-gray-600">Written on sticky notes / insecure pads</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Core Philosophy Banner */}
        <section className="px-4 md:px-10 pb-16 md:pb-24">
          <div className="mx-auto max-w-[1440px] rounded-[32px] bg-action px-6 py-16 text-center text-white md:py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Promise</h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
                {"\"We will never make you feel inadequate, we will never take control of your accounts without permission, and we will protect your digital space as if it were our own.\""}
              </p>
              <div className="flex justify-center">
                <Link href="/book" className="bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-lg">
                  Talk to a Program Specialist
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
