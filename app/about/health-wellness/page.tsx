import Link from 'next/link';

export const metadata = {
  title: "Why Tech is Vital: Senior Well-Being, Cognition & Health",
  description: "Data shows that technology use is linked to higher life satisfaction, lower rates of cognitive decline, and reduced loneliness in seniors.",
};

export default function HealthWellness() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[60px]">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            The Vital Need for Well-Being and Cognition
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10">
            Technology, when used effectively, is directly linked to positive mental health and prolonged cognitive function in older adults.
          </p>
          <Link href="/tech-concierge/core-services" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
            See Our Core Services
          </Link>
        </section>

        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 flex flex-col">
              <h3 className="font-bold text-xl mb-3">Increased Life Satisfaction</h3>
              <p className="text-gray-600 leading-relaxed">
                Older adults who... have a higher ability to utilize its functions are more likely to have higher life satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 flex flex-col">
              <h3 className="font-bold text-xl mb-3">Mediating Depression</h3>
              <p className="text-gray-600 leading-relaxed">
                {"Smartphone-based video-conferencing... effectively improves older residents' feelings of loneliness."}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 flex flex-col">
              <h3 className="font-bold text-xl mb-3">Lower Cognitive Decline</h3>
              <p className="text-gray-600 leading-relaxed">
                {"Research... found that those who routinely used digital devices... had lower rates of cognitive decline, directly challenging the alarmist fears of \"digital dementia\"."}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 flex flex-col">
              <h3 className="font-bold text-xl mb-3">Health Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Mobile devices support mHealth practices, which have a positive impact on clinical outcomes, medication adherence, and... mental health conditions.
              </p>
            </div>
          </div>

          {/* Our Solution */}
          <div className="bg-gradient-to-r from-teal-900 to-blue-900 text-white rounded-[32px] p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <h2 className="text-2xl font-bold mb-4 relative z-10">How We Support Wellness</h2>
            <p className="text-lg text-teal-100 leading-relaxed max-w-3xl mx-auto relative z-10">
              Our <strong>Family Connection Setup</strong> (FaceTime/Zoom) and <strong>Telehealth Readiness</strong> services directly support these positive health outcomes, keeping residents engaged, healthy, and connected.
            </p>
          </div>

        </section>
      </main>
    </>
  );
}
