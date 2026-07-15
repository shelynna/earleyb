import {ManagedImage} from '@/components/ManagedImage';
import {siteImages} from '@/lib/site-images';
import Link from 'next/link';

export default function Home() {
  const homeImages = siteImages.home;

  return (
    <>

      <main className="w-full overflow-hidden">
        {/* 1. Hero */}
        <section className="pt-[180px] md:pt-[240px] px-4 md:px-10 max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[120px] md:pb-[160px]">
          <h1 className="text-[56px] md:text-[82px] font-bold leading-[1.05] tracking-tighter text-balance max-w-5xl mb-6 text-text">
            {"Simplifying today's technology"}
          </h1>
          <p className="text-base md:text-lg text-muted max-w-3xl mb-8 px-4">
            We help individuals, families, small businesses, and facilities bridge the gap between people and technology, delivering solutions that improve efficiency, prevent risks, and create long-term confidence.
          </p>
          <div className="max-w-4xl mx-auto mb-16 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white/60 backdrop-blur-xl border border-white/50 p-6 md:p-8 rounded-2xl shadow-lg">
              <p className="text-lg md:text-xl font-medium text-text leading-relaxed">
                {"\"With our guiding principle—"}
                <span className="font-bold text-black">{"'The Early Bird Gets the Worm'"}</span>
                {"—we stay proactive so our clients are always a step ahead in the digital world.\""}
              </p>
            </div>
          </div>
          <div className="w-full max-w-[1492px] bg-panel-bg overflow-hidden shadow-2xl relative z-10 rounded-[32px] md:rounded-[40px] h-[400px] md:h-[600px]">
            <ManagedImage
              image={homeImages.hero}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </section>

        {/* 2. Trust Strip */}
        <section className="py-12 md:py-16 px-10 border-t border-line/30 max-w-[1728px] mx-auto flex flex-col items-center relative z-0 mt-8 md:mt-[40px]">
          <div className="flex justify-center items-center opacity-100 text-muted w-full">
            <div className="overflow-hidden w-full whitespace-nowrap">
              <div className="inline-flex gap-[40px] md:gap-[100px] items-center text-muted animate-[scroll_30s_linear_infinite]">
                <span className="text-xl md:text-2xl font-bold tracking-tight opacity-100 hover:text-black transition-colors cursor-default">Senior Living Facilities</span>
                <span className="text-xl md:text-2xl font-bold tracking-tight opacity-100 hover:text-black transition-colors cursor-default">Small Businesses</span>
                <span className="text-xl md:text-2xl font-bold tracking-tight opacity-100 hover:text-black transition-colors cursor-default">Individuals & Families</span>
                <span className="text-xl md:text-2xl font-bold tracking-tight opacity-100 hover:text-black transition-colors cursor-default">Proactive IT Support</span>
                <span className="text-xl md:text-2xl font-bold tracking-tight opacity-100 hover:text-black transition-colors cursor-default">Scam-Shield Program</span>
                {/* Duplicate for seamless loop */}
                <span className="text-xl md:text-2xl font-bold tracking-tight opacity-100 hover:text-black transition-colors cursor-default">Senior Living Facilities</span>
                <span className="text-xl md:text-2xl font-bold tracking-tight opacity-100 hover:text-black transition-colors cursor-default">Small Businesses</span>
                <span className="text-xl md:text-2xl font-bold tracking-tight opacity-100 hover:text-black transition-colors cursor-default">Individuals & Families</span>
                <span className="text-xl md:text-2xl font-bold tracking-tight opacity-100 hover:text-black transition-colors cursor-default">Proactive IT Support</span>
                <span className="text-xl md:text-2xl font-bold tracking-tight opacity-100 hover:text-black transition-colors cursor-default">Scam-Shield Program</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Floating Visual Collage */}
        <section className="min-h-[600px] md:min-h-[1000px] w-full max-w-[1728px] mx-auto relative overflow-hidden py-16 md:py-32 hidden md:flex flex-col items-center justify-center">
          <div className="text-center opacity-100 text-muted pointer-events-none z-10 relative">
            <div className="absolute -inset-10 bg-page-bg/80 blur-2xl z-[-1]"></div>
            <h2 className="text-[64px] md:text-[120px] font-bold text-text tracking-tighter leading-[0.9] text-center relative">
              Proactive<br/>Defense
            </h2>
            <p className="text-lg md:text-2xl mt-6 text-text/80 font-medium max-w-2xl mx-auto">
              Protecting clients from scams and cyber threats is our priority.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl" style={{ left: '10%', top: '20%', width: '340px', height: '260px', zIndex: 5 }}>
            <ManagedImage fill className="object-cover opacity-80" image={homeImages.proactiveDefenseLeft}/>
          </div>
          <div className="absolute rounded-[32px] overflow-hidden bg-white/10 backdrop-blur-2xl backdrop-saturate-150 border border-white/40 shadow-2xl" style={{ right: '12%', bottom: '20%', width: '280px', height: '320px', zIndex: 5 }}>
            <ManagedImage fill className="object-cover opacity-80" image={homeImages.proactiveDefenseRight}/>
          </div>
        </section>

        {/* Mobile alternative for collage */}
        <section className="py-16 px-4 md:hidden text-center">
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-4xl font-bold tracking-tight text-center">Proactive Defense</h2>
            <p className="text-lg text-muted">Protecting clients from scams and cyber threats is our priority.</p>
          </div>
        </section>

        {/* Trust Builder / The Problem */}
        <section className="py-16 md:py-[120px] px-4 md:px-10 max-w-[1728px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[100px] items-center">
            <div className="flex flex-col justify-center h-full max-w-xl">
              <h3 className="text-3xl md:text-[48px] mb-6 md:mb-8 font-bold tracking-tight text-text leading-tight">{"Technology Shouldn't Be a Risk."}</h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mb-8">
                <p className="text-xl font-bold text-red-700 mb-2">The US lost over $16.6 Billion in reported fraud in 2024</p>
                <p className="text-base text-red-900/80">
                  {"\"Seniors over 60 lost over $4.8 billion to internet crimes in 2024. Phishing/Smishing fraud was the #1 crime impacting this group.\""}
                </p>
              </div>
              <p className="text-lg md:text-xl font-medium text-text mb-6">
                We reduce these risks by giving seniors exactly what scammers hope they never have:
              </p>
              <ul className="space-y-4 mb-8 list-disc pl-5">
                <li>
                  <span className="text-base text-muted font-medium"><strong>Tech Education</strong> that builds confidence</span>
                </li>
                <li>
                  <span className="text-base text-muted font-medium"><strong>Scam Awareness Training</strong> that makes deception easy to spot</span>
                </li>
                <li>
                  <span className="text-base text-muted font-medium"><strong>A Support System</strong> they can trust before making a mistake</span>
                </li>
              </ul>
              <div className="border-t border-line/50 pt-6">
                <p className="text-lg font-bold text-text italic">Our mission is simple:</p>
                <p className="text-xl font-bold text-text mb-2">Technology should make life easier — not more dangerous.</p>
                <p className="text-base text-muted">We give people the knowledge, clarity, and support needed to stay safe in a digital world. Protecting clients from scams and cyber threats is our priority.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-soft-card-2 to-soft-card rounded-[32px] md:rounded-[40px] p-6 md:p-8 h-[500px] md:h-[700px] flex items-center justify-center relative overflow-hidden">
              <div className="w-full max-w-md bg-white-card rounded-3xl p-8 relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-sm text-text uppercase tracking-widest text-muted">Proactive Defense</span>
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col gap-2 p-4 bg-red-50/50 rounded-2xl">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-red-800">Scam Detection</span>
                      <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md">Blocked</span>
                    </div>
                    <p className="text-xs text-red-900/60 font-medium">Suspicious login attempt prevented via Scam-Shield</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 bg-blue-50/50 rounded-2xl">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-blue-800">1-on-1 Training</span>
                      <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">Completed</span>
                    </div>
                    <p className="text-xs text-blue-900/60 font-medium">Device hygiene and family connection setup</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 bg-green-50/50 rounded-2xl">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-green-800">System Security</span>
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-md">Optimal</span>
                    </div>
                    <p className="text-xs text-green-900/60 font-medium">All devices updated and monitored</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Team Use Cases / Audience Segmentation */}
        <section className="py-16 md:py-[120px] px-4 md:px-10 max-w-[1728px] mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl mb-12 md:mb-16 font-bold tracking-tight text-center text-text">Tailored to your needs.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1400px]">
            {/* Senior Living Facilities */}
            <Link href="/tech-concierge" className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm border border-line/20 mb-6">
                <ManagedImage fill className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" image={homeImages.seniorLivingCard} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl font-bold text-white mb-2">For Senior Living Facilities</h4>
                </div>
              </div>
              <p className="text-base text-muted font-medium leading-relaxed px-2 flex-grow">
                Concierge Tech Programs for assisted living facilities. We empower residents, reduce staff burden, and protect your reputation.
              </p>
              <div className="px-2 mt-6">
                <span className="inline-block text-black font-bold border-b-2 border-black pb-1 group-hover:text-[#FF416C] group-hover:border-[#FF416C] transition-colors uppercase tracking-widest text-xs">Learn More</span>
              </div>
            </Link>

            {/* Small Businesses */}
            <Link href="/services/business-solutions" className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm border border-line/20 mb-6">
                <ManagedImage fill className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" image={homeImages.businessCard} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl font-bold text-white mb-2">For Small Businesses</h4>
                </div>
              </div>
              <p className="text-base text-muted font-medium leading-relaxed px-2 flex-grow">
                Professional website design with hosting & ongoing care packages, SEO campaigns, Email hosting, and Managed IT Services.
              </p>
              <div className="px-2 mt-6">
                <span className="inline-block text-black font-bold border-b-2 border-black pb-1 group-hover:text-[#FF416C] group-hover:border-[#FF416C] transition-colors uppercase tracking-widest text-xs">Learn More</span>
              </div>
            </Link>

            {/* Individuals & Families */}
            <Link href="/services/personal-tech-help" className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm border border-line/20 mb-6">
                <ManagedImage fill className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" image={homeImages.personalTechCard} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-2xl font-bold text-white mb-2">For Individuals & Families</h4>
                </div>
              </div>
              <p className="text-base text-muted font-medium leading-relaxed px-2 flex-grow">
                Technology Education & Training. From 1-on-1 personalized training and scam prevention to in-home tech help and Smart Home setup.
              </p>
              <div className="px-2 mt-6">
                <span className="inline-block text-black font-bold border-b-2 border-black pb-1 group-hover:text-[#FF416C] group-hover:border-[#FF416C] transition-colors uppercase tracking-widest text-xs">Learn More</span>
              </div>
            </Link>
          </div>
        </section>

        {/* 7. Testimonial */}
        <section className="py-16 md:py-[160px] px-6 max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-[56px] leading-[1.3] md:leading-[1.1] tracking-tight text-text mb-10 md:mb-16 text-balance max-w-[1000px] font-normal">
            {"\"EarleyBird provides us with the knowledge, clarity, and support needed to stay safe in a digital world. Technology should make life easier—not more dangerous.\""}
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-line overflow-hidden shadow-md relative">
              <ManagedImage fill className="object-cover" image={homeImages.testimonialAvatar} />
            </div>
            <div className="text-left">
              <p className="text-xs md:text-sm font-bold text-text">Jane D.</p>
              <p className="text-[10px] md:text-xs font-semibold text-muted uppercase tracking-wider mt-1">Facility Director</p>
            </div>
          </div>
        </section>

        {/* 8. Updates */}
        <section className="py-16 md:py-[120px] px-4 md:px-10 max-w-[1728px] mx-auto">
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">Tech Insights</h2>
            <Link href="/blog" className="text-xs md:text-sm font-bold border-b border-black text-text pb-1 hover:text-[#FF416C] hover:border-[#FF416C] transition-colors cursor-pointer">
              View Blog
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <Link href="/blog" className="group cursor-pointer block">
              <div className="w-full h-[300px] md:h-[450px] bg-panel-bg rounded-[24px] md:rounded-[40px] mb-4 md:mb-6 overflow-hidden relative flex items-center justify-center p-4 md:p-8">
                <span className="text-black/70 text-3xl font-black">EB</span>
              </div>
              <p className="text-[10px] md:text-xs font-semibold text-muted mb-2 md:mb-3 uppercase tracking-wider">Scam Alerts • Oct 12</p>
              <h4 className="text-lg md:text-xl font-bold text-text group-hover:text-black transition-colors">5 New Phishing Scams Targeting Seniors</h4>
            </Link>
            {/* Card 2 */}
            <Link href="/blog" className="group cursor-pointer block">
              <div className="w-full h-[300px] md:h-[450px] bg-panel-bg rounded-[24px] md:rounded-[40px] mb-4 md:mb-6 overflow-hidden relative flex items-center justify-center p-4 md:p-8">
                <span className="text-black/70 text-3xl font-black">EB</span>
              </div>
              <p className="text-[10px] md:text-xs font-semibold text-muted mb-2 md:mb-3 uppercase tracking-wider">Senior Tech & Wellness • Oct 08</p>
              <h4 className="text-lg md:text-xl font-bold text-text group-hover:text-black transition-colors">Bridging the Digital Divide in Assisted Living</h4>
            </Link>
            {/* Card 3 */}
            <Link href="/blog" className="group cursor-pointer hidden md:block">
              <div className="w-full h-[450px] bg-panel-bg rounded-[40px] mb-6 overflow-hidden relative flex items-center justify-center p-8">
                <span className="text-black/70 text-3xl font-black">EB</span>
              </div>
              <p className="text-[10px] md:text-xs font-semibold text-muted mb-2 md:mb-3 uppercase tracking-wider">Small Business Tech • Sep 24</p>
              <h4 className="text-lg md:text-xl font-bold text-text group-hover:text-black transition-colors">3 Reasons Your Website Fails to Convert</h4>
            </Link>
          </div>
        </section>

        {/* 9. Demo CTA */}
        <section className="py-20 md:py-[160px] px-6 max-w-screen-xl mx-auto flex flex-col items-center text-center">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-text flex items-center justify-center mb-8 md:mb-12">
              <span className="text-text font-bold text-xl leading-none">EB</span>
            </div>
            <h2 className="text-[40px] md:text-[80px] font-bold text-text tracking-tighter leading-[1.05] mb-8 md:mb-12 max-w-4xl text-balance">
              Experience the future of tech support
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
              <Link href="/book" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 shrink-0 flex items-center justify-center px-8 md:px-12 text-[10px] md:text-xs h-[48px] md:h-[56px] uppercase tracking-wider shadow-sm w-full sm:w-auto cursor-pointer">
                Schedule a call
              </Link>
              <Link href="/tech-concierge" className="bg-transparent border border-text/30 text-text font-bold rounded-full hover:bg-soft-card transition-all duration-300 shrink-0 flex items-center justify-center px-8 md:px-12 text-[10px] md:text-xs h-[48px] md:h-[56px] uppercase tracking-wider w-full sm:w-auto cursor-pointer">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
