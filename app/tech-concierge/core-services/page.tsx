import Link from 'next/link';
import {PageImageSection} from '@/components/PageImageSection';
import {siteImages} from '@/lib/site-images';

export const metadata = {
  title: "Core Tech Services (All Plans) | EarleyBird Concierge Program",
  description: "See the 8 core services included in every tech concierge plan, including on-site support, group training, scam-shield, and telehealth readiness.",
};

export default function CoreServices() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[80px]">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            The Essentials: Core Services Included in Every Plan
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl">
            Our baseline tech concierge program provides comprehensive support to empower residents and relieve your staff.
          </p>
          <Link href="/tech-concierge/pricing" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
            View Pricing Plans
          </Link>
        </section>

        <PageImageSection
          image={siteImages.pages.coreServices}
          eyebrow="Every plan"
          title="A practical support rhythm for daily resident needs."
          body="Core services combine drop-in help, device hygiene, scam awareness, and family connection setup so residents get the basics right every week."
        />

        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-3xl flex flex-col items-start">
              <h3 className="text-xl font-bold text-black mb-3">On-Site Tech Concierge</h3>
              <p className="text-gray-600 leading-relaxed">
                {"Drop-in support for residents' devices. We handle the day-to-day tech hurdles so your staff doesn't have to."}
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-3xl flex flex-col items-start">
              <h3 className="text-xl font-bold text-black mb-3">Group Training Sessions</h3>
              <p className="text-gray-600 leading-relaxed">
                Rotating topics including calls/texts, photos, scam safety, video calls, and telehealth.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-3xl flex flex-col items-start">
              <h3 className="text-xl font-bold text-black mb-3">Scam-Shield Program</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Monthly scam sweep + lobby bulletin to proactively protect your residents from fraud.
              </p>
              <Link href="/tech-concierge/scam-shield" className="text-red-600 font-semibold text-sm hover:underline">Learn more about our mandatory Scam-Shield Program →</Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-3xl flex flex-col items-start">
              <h3 className="text-xl font-bold text-black mb-3">Move-In Tech Onboarding</h3>
              <p className="text-gray-600 leading-relaxed">
                Voicemail, favorites, SOS/Medical ID, and accessibility setup for a smooth transition.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-3xl flex flex-col items-start">
              <h3 className="text-xl font-bold text-black mb-3">Device Hygiene</h3>
              <p className="text-gray-600 leading-relaxed">
                Storage cleanup, software updates, and notifications streamlined for frustration-free usage.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-3xl flex flex-col items-start">
              <h3 className="text-xl font-bold text-black mb-3">Family Connection Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                FaceTime, Zoom, and WhatsApp enabled to keep residents connected with their loved ones.
              </p>
            </div>

            {/* Service 7 */}
            <div className="bg-white p-8 rounded-3xl flex flex-col items-start">
              <h3 className="text-xl font-bold text-black mb-3">Telehealth Readiness</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Portal logins tested; permissions verified so residents never miss an important appointment.
              </p>
              <Link href="/about/health-wellness" className="text-teal-600 font-semibold text-sm hover:underline">Learn why Telehealth Readiness is vital →</Link>
            </div>

            {/* Service 8 */}
            <div className="bg-white p-8 rounded-3xl flex flex-col items-start">
              <h3 className="text-xl font-bold text-black mb-3">Reporting & Accountability</h3>
              <p className="text-gray-600 leading-relaxed">
                Initials-only logs and a monthly Impact Snapshot to keep you informed of our value.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Link href="/tech-concierge/password-protocol" className="text-gray-600 font-medium hover:text-black hover:underline transition-colors">
               Learn about our safe Password Protocol
             </Link>
             <span className="hidden sm:inline text-gray-300">|</span>
             <Link href="/tech-concierge/enhanced-premium" className="text-gray-600 font-medium hover:text-black hover:underline transition-colors">
               Need more? See our Enhanced & Premium Services
             </Link>
          </div>
        </section>
      </main>
    </>
  );
}
