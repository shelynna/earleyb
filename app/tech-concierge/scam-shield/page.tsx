import Link from 'next/link';
import {PageImageSection} from '@/components/PageImageSection';
import {siteImages} from '@/lib/site-images';

export const metadata = {
  title: "The Scam-Shield Program | Protecting Seniors from Financial Fraud",
  description: "Seniors lost $3.4B to fraud in 2023. Our mandatory, on-site Scam-Shield Program provides proactive defense against tech support scams.",
};

export default function ScamShield() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] text-black min-h-screen">
        {/* Hero */}
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[80px]">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            The Urgent Threat of Financial Exploitation
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-10 max-w-3xl">
            Seniors over 60 lost <strong className="text-red-600">$3.4 BILLION</strong> to internet crimes in 2023.
          </p>
          <Link href="/book" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-4 text-xs uppercase tracking-widest shadow-md">
            Protect Your Residents. Book a Consultation.
          </Link>
        </section>

        <PageImageSection
          image={siteImages.pages.scamShield}
          eyebrow="Scam-Shield"
          title="Make scam prevention visible and actionable."
          body="Residents, families, and staff need clear warning signs before a scam becomes a crisis. Scam-Shield turns risk awareness into a recurring support workflow."
          reverse
        />

        {/* Data section */}
        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Scale of the Problem (2023 FBI Data)</h2>
            <p className="text-gray-600">The statistics surrounding elder fraud are staggering and rapidly increasing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="portfolio-case-card bg-white rounded-3xl p-8 flex flex-col items-center text-center">
              <span className="text-5xl md:text-6xl font-black text-action mb-4">$33,915</span>
              <p className="text-gray-600 font-medium text-lg">The average loss per complaint for victims over 60.</p>
            </div>
            
            <div className="portfolio-case-card bg-white rounded-3xl p-8 flex flex-col items-center text-center">
              <span className="text-3xl md:text-4xl font-black text-red-600 mb-4 uppercase tracking-tight">#1 Crime Type</span>
              <p className="text-gray-600 font-medium text-lg">Tech support fraud was the number one crime type impacting complainants over 60.</p>
            </div>

            <div className="portfolio-case-card bg-white rounded-3xl p-8 flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-black text-action mb-4">$589,759,770</span>
              <p className="text-gray-600 font-medium text-lg">Total losses from Tech Support scams alone for this group.</p>
            </div>

            <div className="portfolio-case-card bg-white rounded-3xl p-8 flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-black text-red-600 mb-4">Exceeds All Others</span>
              <p className="text-gray-600 font-medium text-lg">Complainants over 60 lost more to these call center scams than all other age groups combined.</p>
            </div>
          </div>

          {/* Solution & Crypto Risk */}
          <div className="portfolio-case-card bg-white rounded-[40px] p-8 md:p-16 relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Our Proactive Defense.</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {"Education alone is not enough. Our competitors offer 'safety training.' We provide "} <strong className="text-black">active defense</strong>{". The Scam-Shield Program is a mandatory core service... an integrated, physical, proactive defense against the primary source of victimization."}
              </p>
              
              <div className="bg-soft-card-2 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-xl mb-4 text-black">{"What's Included"}</h3>
                <ul className="space-y-3 text-gray-700 list-disc pl-5">
                  <li><strong>Core:</strong> Monthly scam sweep + lobby bulletin.</li>
                  <li><strong>Standard+:</strong> Lobby Scam Alert Board updated monthly.</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-2 text-red-700">The Cryptocurrency Risk</h3>
                <p className="text-gray-700">
                  Seniors over 60 lost over <strong className="text-black">$1.1 BILLION</strong> in cryptocurrency complaints in 2023. Our concierges monitor for unusual crypto applications or suspicious digital asset movements on resident devices.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/tech-concierge/core-services" className="inline-flex rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-action shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              Included in all Core Service plans
            </Link>
          </div>

        </section>
      </main>
    </>
  );
}
