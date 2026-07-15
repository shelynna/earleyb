import Link from 'next/link';

export const metadata = {
  title: "Our Mission & Story | About EarleyBird Technology Solutions",
  description: "Learn about our mission to make tech accessible, secure, and empowering. We blend innovation, education, and human connection.",
};

export default function About() {
  return (
    <>

      <main className="w-full overflow-hidden">
        {/* Hero: Who We Are */}
        <section className="pt-[180px] md:pt-[240px] px-4 md:px-10 max-w-[1728px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[80px] md:pb-[120px]">
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-gradient-to-tr from-[#FF416C] to-[#FF4B2B] rounded-full blur-[120px] opacity-20 z-0 pointer-events-none"></div>
          <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-[#6a11cb] to-[#2575fc] rounded-full blur-[150px] opacity-20 z-0 pointer-events-none"></div>
          
          <h1 className="text-[48px] md:text-[80px] font-bold leading-[1.1] tracking-tighter text-balance max-w-5xl mb-8 text-text relative z-10">
            Who is EarleyBird Technology Solutions?
          </h1>
          <div className="max-w-4xl relative z-10">
            <p className="text-lg md:text-2xl text-muted mb-12 px-4 leading-relaxed font-medium">
              EarleyBird Technology Solutions is a modern technology services company dedicated to making tech simple, secure, and empowering. 
            </p>
            <p className="text-base md:text-lg text-muted px-4 leading-relaxed max-w-3xl mx-auto">
              We help <Link href="/services/personal-tech-help" className="text-black font-semibold border-b border-black/30 hover:border-black transition-colors">individuals, families</Link>, <Link href="/services/business-solutions" className="text-black font-semibold border-b border-black/30 hover:border-black transition-colors">small businesses</Link>, and <Link href="/tech-concierge" className="text-black font-semibold border-b border-black/30 hover:border-black transition-colors">facilities</Link> bridge the gap between people and technology, delivering solutions that improve efficiency, prevent risks, and create long-term confidence in digital tools.
            </p>
          </div>
        </section>

        {/* Our Guiding Principle */}
        <section className="py-16 md:py-[100px] px-4 md:px-10 max-w-[1200px] mx-auto relative z-10">
          <div className="w-full bg-white/60 backdrop-blur-2xl rounded-[32px] md:rounded-[48px] p-8 md:p-16 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-black flex items-center justify-center shrink-0">
                <span className="text-white text-3xl md:text-4xl font-black">EB</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-4">The Early Bird Gets the Worm</h2>
                <p className="text-base md:text-lg text-muted leading-relaxed font-medium">
                  {"We believe that "}
                  <strong className="text-text">{"being proactive is always better than being reactive"}</strong>
                  {". We don't wait for technology issues to become crises, and we don't wait for scammers to strike. We stay proactive so our clients are always a step ahead in the digital world."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision (Stylized Boxes) */}
        <section className="py-16 md:py-[100px] px-4 md:px-10 max-w-[1728px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
            {/* Mission Box */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="inline-block text-gray-500 text-xs font-bold uppercase tracking-wider mb-6">Our Mission</span>
                <h3 className="text-2xl md:text-3xl font-bold text-text leading-tight mb-4">
                  {"\"To make technology accessible, secure, and empowering so "}
                  <Link href="/services/business-solutions" className="border-b-2 border-blue-400 hover:text-blue-700 transition-colors">{"businesses can grow"}</Link>
                  {", "}
                  <Link href="/tech-concierge" className="border-b-2 border-blue-400 hover:text-blue-700 transition-colors">{"seniors can feel confident"}</Link>
                  {", and communities can thrive.\""}
                </h3>
              </div>
            </div>

            {/* Vision Box */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="inline-block text-gray-500 text-xs font-bold uppercase tracking-wider mb-6">Our Vision</span>
                <h3 className="text-2xl md:text-3xl font-bold text-text leading-tight mb-4">
                  {"\"To be the most trusted partner in delivering technology solutions that blend innovation, education, and human connection.\""}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-[100px] px-4 md:px-10 max-w-[1728px] mx-auto relative z-10 mb-[100px]">
          <div className="max-w-[1000px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-8">Our Approach</h2>
            <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-text font-medium leading-relaxed mb-6">
                {"\"As the world becomes more technologically advanced, we ensure that you advance along with technology...\""}
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed max-w-3xl mx-auto">
                At EarleyBird Technology Solutions we <strong>install, educate, and inform</strong>. We ensure that you have access to the technology that works best for your needs, and the education and understanding of the product or service.
              </p>
              <div className="mt-12">
                <Link href="/tech-concierge" className="inline-block bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-10 py-4 text-xs uppercase tracking-widest shadow-md">
                  See Our Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
