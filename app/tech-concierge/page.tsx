import Link from 'next/link';

export const metadata = {
  title: "Tech Concierge Program for Senior Living | EarleyBird Solutions",
  description: "On-site tech support for assisted living. Our program empowers residents, reduces staff burden, and protects your facility's reputation.",
};

export default function TechConcierge() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA]">
        {/* Hero */}
        <section className="pt-[180px] md:pt-[240px] px-4 md:px-10 max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[80px] md:pb-[120px]">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-gradient-to-tr from-[#4Facfe] to-[#00f2fe] rounded-full blur-[120px] opacity-20 z-0 pointer-events-none"></div>
          
          <h1 className="text-[48px] md:text-[80px] font-bold leading-[1.1] tracking-tighter text-balance max-w-5xl mb-8 text-black relative z-10">
            Empowering Residents. Reducing Staff Burden. Protecting Facility Reputation.
          </h1>
          <div className="max-w-4xl relative z-10 flex flex-col items-center">
            <p className="text-lg md:text-2xl text-gray-600 mb-12 px-4 leading-relaxed font-medium">
              The on-site tech support program designed exclusively for senior living communities.
            </p>
            <Link href="/book" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-10 py-4 text-xs uppercase tracking-widest shadow-md">
              Book a Facility Consultation
            </Link>
          </div>
        </section>

        {/* The Urgent Imperative */}
        <section className="py-16 md:py-[100px] px-4 md:px-10 max-w-[1200px] mx-auto relative z-10">
          <div className="w-full bg-white rounded-[32px] md:rounded-[48px] p-8 md:p-16 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-2">{"Why Tech Help is No Longer an 'Amenity'—It's a Necessity."}</h2>
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
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-6">Our Solution: The EarleyBird Tech Concierge Program</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-4xl mx-auto mb-16">
            We provide a dedicated, on-site Tech Concierge who provides hands-on support, proactive security, and operational relief for your staff. <strong className="text-black">We are not a remote help desk; we are an integrated partner.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Nav Cards */}
            <Link href="/tech-concierge/core-services" className="bg-white p-8 rounded-3xl hover:bg-soft-card-2 transition-colors group flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-black mb-3">Core Services</h3>
              <p className="text-gray-600 text-sm">See the 8 essential services included in every facility plan.</p>
            </Link>

            <Link href="/tech-concierge/enhanced-premium" className="bg-white p-8 rounded-3xl hover:bg-soft-card-2 transition-colors group flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-black mb-3">Enhanced & Premium</h3>
              <p className="text-gray-600 text-sm">Explore premium add-ons like family seminars and staff micro-training.</p>
            </Link>

            <Link href="/tech-concierge/scam-shield" className="bg-white p-8 rounded-3xl hover:bg-soft-card-2 transition-colors group flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-black mb-3">Scam-Shield Program</h3>
              <p className="text-gray-600 text-sm">Learn about our mandatory, proactive defense against financial fraud.</p>
            </Link>

            <Link href="/tech-concierge/pricing" className="bg-white p-8 rounded-3xl hover:bg-soft-card-2 transition-colors group flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-black mb-3">Pricing & Plans</h3>
              <p className="text-gray-600 text-sm">Simple, transparent pricing for any size community.</p>
            </Link>

            <Link href="/about/digital-literacy" className="bg-white p-8 rounded-3xl hover:bg-soft-card-2 transition-colors group flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-black mb-3">The Case for Tech</h3>
              <p className="text-gray-600 text-sm">The critical data on digital access & literacy for seniors.</p>
            </Link>

            <Link href="/about/health-wellness" className="bg-white p-8 rounded-3xl hover:bg-soft-card-2 transition-colors group flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-black mb-3">Well-Being & Cognition</h3>
              <p className="text-gray-600 text-sm">How tech use is linked to higher life satisfaction and health.</p>
            </Link>

            <Link href="/tech-concierge/password-protocol" className="bg-white p-8 rounded-3xl hover:bg-soft-card-2 transition-colors group flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-black mb-3">Password Protocol</h3>
              <p className="text-gray-600 text-sm">Our zero-storage policy for maximum privacy and security.</p>
            </Link>

            <Link href="/portfolio/senior-living" className="bg-white p-8 rounded-3xl hover:bg-soft-card-2 transition-colors group flex flex-col items-center text-center lg:col-span-2">
              <h3 className="text-xl font-bold text-black mb-3">Our Portfolio</h3>
              <p className="text-gray-600 text-sm">See the communities that partner with EarleyBird.</p>
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
