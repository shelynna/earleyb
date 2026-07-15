import {ManagedImage} from '@/components/ManagedImage';
import {siteImages} from '@/lib/site-images';
import Link from 'next/link';

export const metadata = {
  title: "Our Community Partners | Senior Living Portfolio",
  description: "See the senior living communities and facilities that partner with EarleyBird for on-site tech concierge services.",
};

export default function SeniorLivingPortfolio() {
  const portfolioImages = siteImages.portfolio.seniorLiving;

  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[80px]">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            Trusted by Communities.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10">
            We are proud to partner with forward-thinking senior living communities. All imagery and content provided by client.
          </p>
          <Link href="/book" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
            Become a Partner Community
          </Link>
        </section>

        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Case Study 1 */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col">
              <div className="h-48 bg-gray-200 w-full relative flex items-center justify-center">
                 <ManagedImage
                   image={portfolioImages.sunriseOaks}
                   fill
                   className="object-cover"
                   fallbackLabel="Facility Image"
                 />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Standard Plan</div>
                <h3 className="font-bold text-xl text-black mb-4">Sunrise Oaks Assisted Living</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Services Provided</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Provided on-site support for 40-80 residents, deployed Lobby Scam Alert Board, conducted Staff Micro-Training.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Result</h4>
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      {"\"Reduced staff burden and increased resident engagement significantly within the first 60 days.\""}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col">
              <div className="h-48 bg-gray-200 w-full relative flex items-center justify-center">
                 <ManagedImage
                   image={portfolioImages.heritageRiverbend}
                   fill
                   className="object-cover"
                   fallbackLabel="Facility Image"
                 />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Premium Plan</div>
                <h3 className="font-bold text-xl text-black mb-4">The Heritage at Riverbend</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Services Provided</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Unlimited drop-ins during visit hours, quarterly family seminars, complete move-in tech onboarding for new residents.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Result</h4>
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      {"\"Our residents are more connected to their families than ever, and our activities staff can focus on events instead of iPads.\""}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col">
              <div className="h-48 bg-gray-200 w-full relative flex items-center justify-center">
                 <ManagedImage
                   image={portfolioImages.maplewoodMemoryCare}
                   fill
                   className="object-cover"
                   fallbackLabel="Facility Image"
                 />
              </div>
              <div className="p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-green-600 mb-2">Basic Plan</div>
                <h3 className="font-bold text-xl text-black mb-4">Maplewood Memory Care</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Services Provided</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Focused device hygiene, family connection setup for simplified video calling, monthly scam sweep.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Result</h4>
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      {"\"Provided peace of mind for families knowing their loved ones' devices are clean, secure, and ready for connection.\""}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center">
            <p className="text-gray-500 font-medium">
               Learn more about our <Link href="/tech-concierge" className="text-black hover:underline transition-colors">Senior Living Solutions</Link>.
            </p>
          </div>

        </section>
      </main>
    </>
  );
}
