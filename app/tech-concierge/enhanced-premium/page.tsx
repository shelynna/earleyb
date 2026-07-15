import Link from 'next/link';

export const metadata = {
  title: "Enhanced & Premium Services | EarleyBird Concierge Program",
  description: "Upgrade your tech support with premium services like custom cheat sheets, staff micro-training, family seminars, and emergency lockout help.",
};

export default function EnhancedPremium() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[80px]">
          <div className="text-muted font-bold text-xs uppercase tracking-widest mb-6">
            Next-Level Support
          </div>
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            Elevate Your Resident & Staff Experience
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl">
            Go beyond the basics. Our Standard and Premium tiers add high-value features for larger facilities seeking white-glove service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/tech-concierge/pricing" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
              Compare Plans
            </Link>
            <Link href="/tech-concierge/core-services" className="bg-white text-black font-bold rounded-full hover:bg-gray-50 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest">
              View Core Services
            </Link>
          </div>
        </section>

        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Enhanced Services */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-black mb-2 flex items-center gap-3">
                  Enhanced Services
                </h2>
                <p className="text-gray-500 mb-8 font-medium">Included in Standard & Premium Plans</p>
                
                <ul className="flex flex-col gap-6">
                  <li>
                    <div>
                      <h4 className="font-bold text-black text-lg">Custom Cheat Sheets</h4>
                      <p className="text-gray-600">Laminated, large print guides customized for specific devices.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4 className="font-bold text-black text-lg">Priority Scheduling</h4>
                      <p className="text-gray-600">Guaranteed 1-on-1 slots reserved for your residents.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4 className="font-bold text-black text-lg">Family Engagement Flyers</h4>
                      <p className="text-gray-600">Flyers and emails keeping families updated on tech progress.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4 className="font-bold text-black text-lg">Staff Micro-Training</h4>
                      <p className="text-gray-600">10-15 mins each visit to keep your staff efficient and informed.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4 className="font-bold text-black text-lg">Lobby Scam Alert Board</h4>
                      <p className="text-gray-600">A physical board updated monthly with the latest local threats.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Services */}
            <div className="bg-black rounded-[32px] p-8 md:p-12 relative overflow-hidden text-white">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                  Premium Services
                </h2>
                <p className="text-gray-400 mb-8 font-medium">Exclusive to Premium Plans Only</p>
                
                <ul className="flex flex-col gap-6">
                  <li>
                    <div>
                      <h4 className="font-bold text-white text-lg">Expanded Coverage</h4>
                      <p className="text-gray-400">2 trainers to handle a larger resident pool efficiently.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4 className="font-bold text-white text-lg">Unlimited Drop-Ins</h4>
                      <p className="text-gray-400">Unlimited support available during our visit hours.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4 className="font-bold text-white text-lg">Emergency Lockout Help</h4>
                      <p className="text-gray-400">Rapid reset & recovery assistance when residents are locked out.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4 className="font-bold text-white text-lg">Quarterly Family Seminars</h4>
                      <p className="text-gray-400">Zoom or in-person educational sessions for family members.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4 className="font-bold text-white text-lg">Welcome Kits</h4>
                      <p className="text-gray-400">Workbooks and printed guides for new residents at move-in.</p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h4 className="font-bold text-white text-lg">Admin Strategy Assistance</h4>
                      <p className="text-gray-400">Quarterly report-back meetings with facility leadership.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
