import Link from 'next/link';

export const metadata = {
  title: "Business Solutions Portfolio | Websites, SEO, and IT Success Stories",
  description: "Browse our portfolio of completed small business projects. From customized responsive websites and SEO marketing campaigns to managed IT networks.",
};

export default function BusinessPortfolio() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        {/* Hero Section */}
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[80px]">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            Our Business Portfolio & Success Stories
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10">
            We deliver functional, beautiful digital products and robust IT configurations that help small businesses succeed and scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
              Start Your Project
            </Link>
          </div>
        </section>

        {/* Portfolio Showcase Grid */}
        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Case Study 1: Web Design & SEO */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col group hover:bg-soft-card-2 transition-colors">
              <div className="h-64 bg-gradient-to-tr from-indigo-900 to-indigo-700 w-full relative flex items-center justify-center p-8">
                <div className="text-center text-white relative z-10">
                  <h3 className="text-3xl font-black">Oakridge Medical Clinic</h3>
                  <p className="text-indigo-200 mt-2 text-sm font-medium">Responsive Web Portal + Local SEO Optimization</p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-black text-lg mb-2">The Challenge</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    The clinic’s legacy website was slow, failed to show properly on mobile devices, and did not ranks well for key health service searches in their county.
                  </p>
                  
                  <h4 className="font-bold text-black text-lg mb-2">Our Solution</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    We designed a modern, HIPAA-compliant patient portal website. Integrated automated appointment booking, optimized performance with Next.js, and ran an intensive local SEO directory campaign.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Result</span>
                    <p className="text-green-600 font-bold text-lg">+140% Monthly Online Bookings</p>
                  </div>
                  <Link href="/services/website-design" className="text-indigo-600 hover:text-indigo-800 transition-colors font-semibold text-xs uppercase tracking-wider">
                    See Web Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Study 2: Managed IT & Security */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col group hover:bg-soft-card-2 transition-colors">
              <div className="h-64 bg-gradient-to-tr from-slate-900 to-slate-800 w-full relative flex items-center justify-center p-8">
                <div className="text-center text-white relative z-10">
                  <h3 className="text-3xl font-black">Pinnacle Law Firm</h3>
                  <p className="text-slate-300 mt-2 text-sm font-medium">Robust Internal Network + Cloud Disaster Recovery</p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-black text-lg mb-2">The Challenge</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Experiencing recurring corporate network dropouts, insecure data sharing on unencrypted external hard drives, and constant security threats targeting key legal records.
                  </p>
                  
                  <h4 className="font-bold text-black text-lg mb-2">Our Solution</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Deployed high-performance cloud security firewalls, unified local networks, automated daily off-site encrypted server backups, and held standard cybersecurity seminars for all staff members.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Result</span>
                    <p className="text-green-600 font-bold text-lg">99.99% Network Uptime Achieved</p>
                  </div>
                  <Link href="/services/managed-it" className="text-slate-700 hover:text-slate-900 transition-colors font-semibold text-xs uppercase tracking-wider">
                    See IT Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Study 3: SEO Campaign & Marketing */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col group hover:bg-soft-card-2 transition-colors">
              <div className="h-64 bg-gradient-to-tr from-teal-900 to-teal-700 w-full relative flex items-center justify-center p-8">
                <div className="text-center text-white relative z-10">
                  <h3 className="text-3xl font-black">Apex Contracting Co.</h3>
                  <p className="text-teal-200 mt-2 text-sm font-medium">B2B Lead Generation & Keyword Dominance</p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-black text-lg mb-2">The Challenge</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    A local construction contractor struggling to generate digital inbound leads, relying solely on old print catalogs and referrals for major commercial construction bids.
                  </p>
                  
                  <h4 className="font-bold text-black text-lg mb-2">Our Solution</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Conducted in-depth keyword research, published premium geographic and service-specific content hubs, built powerful high-quality backlinks, and optimized their Google Business Profile.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Result</span>
                    <p className="text-green-600 font-bold text-lg">Ranked #1 for local construction terms</p>
                  </div>
                  <Link href="/services/seo-campaigns" className="text-teal-600 hover:text-teal-800 transition-colors font-semibold text-xs uppercase tracking-wider">
                    See SEO Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Study 4: SaaS Consulting & Integration */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col group hover:bg-soft-card-2 transition-colors">
              <div className="h-64 bg-gradient-to-tr from-orange-950 to-orange-900 w-full relative flex items-center justify-center p-8">
                <div className="text-center text-white relative z-10">
                  <h3 className="text-3xl font-black">Vanguard Logistical</h3>
                  <p className="text-orange-200 mt-2 text-sm font-medium">CRM Setup & Workflow Automation</p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-black text-lg mb-2">The Challenge</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Siloed customer spreadsheets, massive administrative overhead, and missed communications caused by a fragmented booking system.
                  </p>
                  
                  <h4 className="font-bold text-black text-lg mb-2">Our Solution</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Consolidated all databases into a unified, secure cloud CRM. Created custom automated workflows sending instant booking summaries, driver schedules, and receipt generation.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Result</span>
                    <p className="text-green-600 font-bold text-lg">Reduced Admin Overhead by 35%</p>
                  </div>
                  <Link href="/services/saas-consulting" className="text-orange-700 hover:text-orange-900 transition-colors font-semibold text-xs uppercase tracking-wider">
                    See SaaS Services
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
