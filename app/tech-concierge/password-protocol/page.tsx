import Link from 'next/link';
import {PageImageSection} from '@/components/PageImageSection';
import {siteImages} from '@/lib/site-images';

export const metadata = {
  title: "Our Password Management Protocol (Resident Security)",
  description: "Learn about our secure, private password protocol. We use a 'No Storage Policy' and help set up your 'Family-Admin Vault' to protect resident data.",
};

export default function PasswordProtocol() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        <section className="pt-[180px] px-4 md:px-10 max-w-[1200px] mx-auto flex flex-col items-center text-center relative overflow-visible pb-[60px]">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            Our Commitment to Resident Security & Privacy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10">
            We understand that password management is a critical concern for resident privacy. We have a strict, secure protocol designed to empower residents while protecting their information.
          </p>
          <Link href="/contact" className="bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
            Have Security Questions? Contact Us.
          </Link>
        </section>

        <PageImageSection
          image={siteImages.pages.passwordProtocol}
          eyebrow="Privacy first"
          title="Security support without collecting resident passwords."
          body="The protocol shows families and facilities how accounts are protected while keeping credentials outside EarleyBird storage."
        />

        <section className="pb-16 md:pb-[100px] px-4 md:px-10 max-w-[1200px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Step 1 */}
            <div className="bg-white rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden group">
              <h3 className="font-bold text-xl mb-3 relative z-10">Family-Admin Vault</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                Family holds the master password. We guide the designated family member to set up and manage a secure digital vault for the resident.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden group">
              <h3 className="font-bold text-xl mb-3 relative z-10">Autofill & Biometrics</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {"We enable autofill & biometrics on the resident's device, ensuring they can access their apps seamlessly without needing to memorize complex strings."}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden group">
              <h3 className="font-bold text-xl mb-3 relative z-10">No Storage Policy</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                EarleyBird never records passwords. Our strict zero-knowledge policy means our concierges never document, store, or transmit resident credentials.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-[32px] p-8 flex flex-col items-start relative overflow-hidden group">
              <h3 className="font-bold text-xl mb-3 relative z-10">Recovery Workflow</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                If a resident is locked out, the family admin resets the password remotely, and our on-site concierge verifies the new access on the device.
              </p>
            </div>

          </div>

          <div className="text-center">
            <p className="text-gray-500 font-medium">
               This protocol is part of our <Link href="/tech-concierge/core-services" className="text-black hover:underline transition-colors">Core Services</Link>.
            </p>
          </div>

        </section>
      </main>
    </>
  );
}
