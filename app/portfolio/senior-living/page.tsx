import {ManagedImage} from '@/components/ManagedImage';
import {InlineTextLink} from '@/components/InlineTextLink';
import {PageImageSection} from '@/components/PageImageSection';
import {siteImages} from '@/lib/site-images';
import {ArrowUpRight} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Our Community Partners | Senior Living Portfolio",
  description: "See the senior living communities and facilities that partner with EarleyBird for on-site tech concierge services.",
};

export default function SeniorLivingPortfolio() {
  const portfolioImages = siteImages.portfolio.seniorLiving;
  const caseStudies = [
    {
      image: portfolioImages.sunriseOaks,
      plan: 'Standard Plan',
      planClassName: 'bg-blue-50 text-blue-700',
      title: 'Sunrise Oaks Assisted Living',
      services: 'Provided on-site support for 40-80 residents, deployed Lobby Scam Alert Board, conducted Staff Micro-Training.',
      result: '"Reduced staff burden and increased resident engagement significantly within the first 60 days."',
    },
    {
      image: portfolioImages.heritageRiverbend,
      plan: 'Premium Plan',
      planClassName: 'bg-amber-50 text-amber-700',
      title: 'The Heritage at Riverbend',
      services: 'Unlimited drop-ins during visit hours, quarterly family seminars, complete move-in tech onboarding for new residents.',
      result: '"Our residents are more connected to their families than ever, and our activities staff can focus on events instead of iPads."',
    },
    {
      image: portfolioImages.maplewoodMemoryCare,
      plan: 'Basic Plan',
      planClassName: 'bg-green-50 text-green-700',
      title: 'Maplewood Memory Care',
      services: 'Focused device hygiene, family connection setup for simplified video calling, monthly scam sweep.',
      result: '"Provided peace of mind for families knowing their loved ones\' devices are clean, secure, and ready for connection."',
    },
  ];

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
          <Link href="/book?service=Assisted%20Living%20%2F%20HOA%20Package" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
            Become a Partner Community
          </Link>
        </section>

        <PageImageSection
          image={siteImages.pages.seniorPortfolio}
          eyebrow="Community partners"
          title="Case studies should feel like real places."
          body="Each community card now pulls from editable image slots, so facility imagery can be swapped as client-approved photos become available."
        />

        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study) => (
              <article key={study.title} className="portfolio-case-card bg-white rounded-[32px] overflow-hidden flex flex-col p-3">
                <div className="h-52 bg-gray-100 w-full relative flex items-center justify-center overflow-hidden rounded-[24px]">
                  <ManagedImage
                    image={study.image}
                    fill
                    className="object-cover"
                    fallbackLabel="Facility Image"
                  />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest ${study.planClassName}`}>
                    {study.plan}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-bold text-2xl text-black mb-5 leading-tight">{study.title}</h3>
                  <div className="space-y-5 mb-8">
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Services Provided</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{study.services}</p>
                    </div>
                    <div className="rounded-2xl bg-soft-card-2 p-4">
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Result</h4>
                      <p className="text-gray-700 text-sm leading-relaxed italic">{study.result}</p>
                    </div>
                  </div>
                  <Link href="/book?service=Assisted%20Living%20%2F%20HOA%20Package" className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-action px-5 py-3 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-action-hover hover:shadow-md">
                    Discuss this plan
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-500 font-medium">
               Learn more about our <InlineTextLink href="/tech-concierge" className="font-bold text-action underline underline-offset-4 hover:text-action-hover">Senior Living Solutions</InlineTextLink>.
            </p>
          </div>

        </section>
      </main>
    </>
  );
}
