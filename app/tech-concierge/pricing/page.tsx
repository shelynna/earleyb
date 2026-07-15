import Link from 'next/link';

export const metadata = {
  title: "Tech Concierge Program Pricing & Plans | EarleyBird Solutions",
  description: "Simple, transparent pricing for our on-site senior tech support program. Plans for small, mid-sized, and large communities.",
};

export default function Pricing() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[60px]">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            Simple, Transparent Pricing for Any Size Community.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            {"Choose the level of support that fits your facility's needs and resident population."}
          </p>
        </section>

        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          {/* Pricing Table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 flex flex-col relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">Basic</h3>
                <p className="text-gray-500 text-sm">Small communities under 20 residents</p>
              </div>
              <div className="mb-6 pb-6">
                <p className="text-gray-800 font-semibold mb-1">1 trainer</p>
                <p className="text-gray-500">2 hrs/week (≈8 hrs/mo)</p>
              </div>
              <div className="flex-grow mb-8">
                <ul className="space-y-3 list-disc pl-5 text-sm text-gray-600">
                  <li>Core Services Included</li>
                  <li>Monthly Scam Sweep</li>
                  <li>Group Training Sessions</li>
                </ul>
              </div>
              <Link href="/book" className="w-full block text-center bg-gray-100 text-black font-bold rounded-full hover:bg-gray-200 transition-colors py-3 text-xs uppercase tracking-widest mt-auto">
                Book a Consultation
              </Link>
            </div>

            {/* Standard Plan */}
            <div className="bg-black text-white rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
                <p className="text-gray-400 text-sm">Mid-sized facilities (20-45 residents)</p>
              </div>
              <div className="mb-6 pb-6">
                <p className="text-white font-semibold mb-1">1 trainer</p>
                <p className="text-gray-400">4 hrs/week (≈16 hrs/mo)</p>
              </div>
              <div className="flex-grow mb-8">
                <ul className="space-y-3 list-disc pl-5 text-sm text-gray-300">
                  <li>All Basic Features</li>
                  <li>Enhanced Services Included</li>
                  <li>Priority Scheduling</li>
                  <li>Lobby Scam Alert Board</li>
                </ul>
              </div>
              <Link href="/book" className="w-full block text-center bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors py-3 text-xs uppercase tracking-widest mt-auto">
                Book a Consultation
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-3xl p-8 flex flex-col relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">Premium</h3>
                <p className="text-gray-500 text-sm">Large/flagship sites (45+ residents)</p>
              </div>
              <div className="mb-6 pb-6">
                <p className="text-gray-800 font-semibold mb-1">2 trainers</p>
                <p className="text-gray-500">5 hrs/week (≈40 hrs/mo)</p>
              </div>
              <div className="flex-grow mb-8">
                <ul className="space-y-3 list-disc pl-5 text-sm text-gray-600">
                  <li>All Standard Features</li>
                  <li>Premium Services Included</li>
                  <li>Unlimited Drop-Ins (visit hours)</li>
                  <li>Quarterly Family Seminars</li>
                </ul>
              </div>
              <Link href="/book" className="w-full block text-center bg-gray-100 text-black font-bold rounded-full hover:bg-gray-200 transition-colors py-3 text-xs uppercase tracking-widest mt-auto">
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Sizing Guidance */}
          <div className="bg-gray-50 rounded-[32px] p-8 md:p-12">
            <h2 className="text-2xl font-bold text-center mb-10 text-black">Why Sizing Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <h4 className="font-bold text-black mb-2">Under 20 residents</h4>
                <p className="text-gray-600 text-sm">A few hours each week keeps residents supported without overspending.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h4 className="font-bold text-black mb-2">20-45 residents</h4>
                <p className="text-gray-600 text-sm">Increased staff demand means more trainer hours to ensure coverage.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h4 className="font-bold text-black mb-2">45+ residents</h4>
                <p className="text-gray-600 text-sm">Requires multiple trainers for proper ratio and high-quality support.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-center">
             <Link href="/tech-concierge/core-services" className="text-gray-600 font-medium hover:text-black hover:underline transition-colors">
               All plans include our Core Services
             </Link>
             <span className="hidden sm:inline text-gray-300">|</span>
             <Link href="/tech-concierge/enhanced-premium" className="text-gray-600 font-medium hover:text-black hover:underline transition-colors">
               Standard/Premium plans include Enhanced Services
             </Link>
          </div>

        </section>
      </main>
    </>
  );
}
