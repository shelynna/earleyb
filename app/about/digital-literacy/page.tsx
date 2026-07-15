import Link from 'next/link';

export const metadata = {
  title: "Why Tech is Critical: Digital Access & Literacy for Seniors",
  description: "See the data. Many seniors struggle with a 'digital divide,' lacking skills for banking, shopping, or even Wi-Fi. Our program closes this gap.",
};

export default function DigitalLiteracy() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[60px]">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            The Critical Need for Digital Access & Literacy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10">
            {"Technology literacy is necessary for older people to access services and stay connected... A serious 'digital divide' exists."}
          </p>
          <Link href="/tech-concierge/core-services" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
            See Our Core Services
          </Link>
        </section>

        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          
          {/* Data Visualizations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Struggles with Functionality</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Despite high ownership rates, older people still struggle with essential digital tasks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-black text-black mb-6">&lt;10%</span>
                <h3 className="font-bold text-xl mb-3">Complex Tasks</h3>
                <p className="text-gray-600">Less than 10%... were able to perform Internet banking, online shopping, or use social media.</p>
              </div>

              <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-black text-black mb-6">~25%</span>
                <h3 className="font-bold text-xl mb-3">Basic Setup</h3>
                <p className="text-gray-600">Only about a quarter... were able to search for information on the internet or set up Wi-Fi.</p>
              </div>
            </div>
          </div>

          {/* The Health Divide */}
          <div className="bg-soft-card-2 rounded-[32px] p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">The Health Divide</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
              {"\"Health-related information and medical interventions are increasingly provided via smartphone applications... The ability to utilize a smartphone is necessary to minimize the digital health divide.\""}
            </p>
          </div>

          {/* Our Solution */}
          <div className="bg-black text-white rounded-[32px] p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">How We Close the Gap</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              This is why our <strong>Group Training Sessions</strong> and <strong>Move-In Tech Onboarding</strong> are core to our program. We ensure every resident has the foundational skills needed to navigate the modern world.
            </p>
          </div>

        </section>
      </main>
    </>
  );
}
