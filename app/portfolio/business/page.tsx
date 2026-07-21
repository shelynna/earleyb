import Link from 'next/link';
import {InlineTextLink} from '@/components/InlineTextLink';
import {ManagedImage} from '@/components/ManagedImage';
import {PageImageSection} from '@/components/PageImageSection';
import {siteImages} from '@/lib/site-images';

export const metadata = {
  title: "Business Solutions Portfolio | Websites, SEO, and Consulting Success Stories",
  description: "Browse our portfolio of completed small business projects, including responsive websites, SEO marketing campaigns, and software consulting.",
};

export default function BusinessPortfolio() {
  const portfolioImages = siteImages.portfolio.business;

  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        {/* Hero Section */}
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[80px]">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            Our Business Portfolio & Success Stories
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10">
            We deliver functional, beautiful digital products and practical consulting that help small businesses get found, look professional, and work smarter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
              Start Your Project
            </Link>
          </div>
        </section>

        <PageImageSection
          image={siteImages.pages.businessPortfolio}
          eyebrow="Business projects"
          title="Show the work with stronger visual case studies."
          body="The portfolio now uses editable project image slots so website, SEO, and SaaS examples can be updated with real client-approved visuals later."
          reverse
        />

        {/* Portfolio Showcase Grid */}
        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Case Study 1: Web Design & SEO */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col group hover:bg-soft-card-2 transition-colors">
              <div className="h-64 bg-panel-bg w-full relative flex items-center justify-center overflow-hidden p-8">
                <ManagedImage
                  image={portfolioImages.oakridgeMedicalClinic}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-black/35"></div>
                <div className="text-center text-white relative z-10">
                  <h3 className="text-3xl font-black">Oakridge Medical Clinic</h3>
                  <p className="text-indigo-200 mt-2 text-sm font-medium">Responsive Web Portal + Local SEO Optimization</p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-black text-lg mb-2">The Challenge</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    The clinic&apos;s legacy website was slow, failed to show properly on mobile devices, and did not rank well for key health service searches in their county.
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
                  <InlineTextLink href="/services/website-design" className="text-indigo-600 hover:text-indigo-800 transition-colors font-semibold text-xs uppercase tracking-wider">
                    See Web Services
                  </InlineTextLink>
                </div>
              </div>
            </div>

            {/* Case Study 2: SaaS Consulting & Secure Workflow */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col group hover:bg-soft-card-2 transition-colors">
              <div className="h-64 bg-panel-bg w-full relative flex items-center justify-center overflow-hidden p-8">
                <ManagedImage
                  image={portfolioImages.pinnacleLawFirm}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-black/35"></div>
                <div className="text-center text-white relative z-10">
                  <h3 className="text-3xl font-black">Pinnacle Law Firm</h3>
                  <p className="text-slate-300 mt-2 text-sm font-medium">Secure Workflow + Software Cleanup</p>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-black text-lg mb-2">The Challenge</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    The firm was using disconnected tools, confusing file handoffs, and outdated workflows that made daily operations slower than they needed to be.
                  </p>
                  
                  <h4 className="font-bold text-black text-lg mb-2">Our Solution</h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Reviewed the software stack, simplified file organization, cleaned up duplicate tools, and trained the team on a clearer day-to-day workflow.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Result</span>
                    <p className="text-green-600 font-bold text-lg">Cleaner Internal Workflow</p>
                  </div>
                  <InlineTextLink href="/services/saas-consulting" className="text-slate-700 hover:text-slate-900 transition-colors font-semibold text-xs uppercase tracking-wider">
                    See SaaS Consulting
                  </InlineTextLink>
                </div>
              </div>
            </div>

            {/* Case Study 3: SEO Campaign & Marketing */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col group hover:bg-soft-card-2 transition-colors">
              <div className="h-64 bg-panel-bg w-full relative flex items-center justify-center overflow-hidden p-8">
                <ManagedImage
                  image={portfolioImages.apexContracting}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-black/35"></div>
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
                  <InlineTextLink href="/services/seo-campaigns" className="text-teal-600 hover:text-teal-800 transition-colors font-semibold text-xs uppercase tracking-wider">
                    See SEO Services
                  </InlineTextLink>
                </div>
              </div>
            </div>

            {/* Case Study 4: SaaS Consulting & Integration */}
            <div className="bg-white rounded-[32px] overflow-hidden flex flex-col group hover:bg-soft-card-2 transition-colors">
              <div className="h-64 bg-panel-bg w-full relative flex items-center justify-center overflow-hidden p-8">
                <ManagedImage
                  image={portfolioImages.vanguardLogistical}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-black/35"></div>
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
                  <InlineTextLink href="/services/saas-consulting" className="text-orange-700 hover:text-orange-900 transition-colors font-semibold text-xs uppercase tracking-wider">
                    See SaaS Services
                  </InlineTextLink>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
