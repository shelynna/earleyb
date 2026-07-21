import Link from 'next/link';
import {InlineTextLink} from '@/components/InlineTextLink';
import {PageImageSection} from '@/components/PageImageSection';
import {siteImages} from '@/lib/site-images';

export const metadata = {
  title: 'Client Login | EarleyBird Technology Solutions',
  description: 'Access your EarleyBird client account to view your profile, booking history, and manage your services.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClientLogin() {
  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen pb-24">
        <section className="pt-[180px] pb-12 px-4 md:px-10 max-w-[1200px] mx-auto text-center">
          <span className="inline-flex text-slate-700 text-xs font-bold uppercase tracking-widest mb-4">
            Existing Clients
          </span>
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            Client Account.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Sign in to your account to access your profile, booking history, and any private pages you have been granted access to.
          </p>
        </section>

        <PageImageSection
          image={siteImages.pages.clientLogin}
          eyebrow="Client access"
          title="A cleaner entry point for secure service updates."
          body="The portal area is designed to feel calm and direct, with visual context before clients choose the right access path."
        />

        <section className="px-4 md:px-10 max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[32px]">
              <form className="space-y-6">
                <h2 className="text-2xl font-bold text-black">Sign In</h2>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="button"
                  className="w-full bg-black text-white hover:bg-black/80 font-bold rounded-xl h-[48px] uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500">New to EarleyBird?</p>
                <InlineTextLink href="/book" className="text-xs font-bold uppercase tracking-wider text-black border-b border-black hover:text-blue-600 hover:border-blue-600 transition-colors">
                  Create account through booking
                </InlineTextLink>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-black text-white p-8 rounded-[32px] shadow-lg">
                <h2 className="text-2xl font-bold mb-4">What Your Account Supports</h2>
                <p className="text-gray-300 leading-relaxed">
                  Client accounts are intended for profile access, appointment history, private service pages, and managed service updates.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-6 rounded-2xl">
                  <div>
                    <h3 className="font-bold text-black mb-1">Profile Access</h3>
                    <p className="text-sm text-gray-600">Review contact details and client information.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <div>
                    <h3 className="font-bold text-black mb-1">Booking History</h3>
                    <p className="text-sm text-gray-600">View past and upcoming service interactions.</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <div>
                    <h3 className="font-bold text-black mb-1">Service Management</h3>
                    <p className="text-sm text-gray-600">Manage appointments and private service updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
