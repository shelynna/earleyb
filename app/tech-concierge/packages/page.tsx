import Link from 'next/link';
import {ArrowUpRight, Building2, Home} from 'lucide-react';
import {PageImageSection} from '@/components/PageImageSection';
import {siteImages} from '@/lib/site-images';

export const metadata = {
  title: 'Assisted Living and HOA Tech Packages | EarleyBird Tech Concierge',
  description:
    'Recurring tech concierge packages for assisted living communities, senior living facilities, HOAs, and residential communities.',
};

const packages = [
  {
    title: 'Assisted Living Packages',
    description:
      'On-site resident tech support that reduces staff interruptions, improves resident confidence, and adds proactive scam prevention.',
    href: '/tech-concierge/pricing',
    icon: Building2,
    details: ['Resident drop-in help', 'Group training sessions', 'Scam-Shield alerts', 'Move-in tech onboarding'],
  },
  {
    title: 'HOA and Community Packages',
    description:
      'Scheduled tech help days for neighborhoods, 55+ communities, and residential groups that want trusted support available close to home.',
    href: '/book?service=Assisted%20Living%20%2F%20HOA%20Package',
    icon: Home,
    details: ['On-site help days', 'Streaming setup events', 'Scam prevention workshops', 'Smart home setup guidance'],
  },
] as const;

export default function Packages() {
  return (
    <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
      <section className="pt-[160px] md:pt-[190px] pb-12 px-4 md:px-10 max-w-[1200px] mx-auto text-center">
        <span className="mb-4 inline-flex text-[10px] font-bold uppercase tracking-widest text-action">
          Tech Concierge Packages
        </span>
        <h1 className="mx-auto max-w-5xl text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-tight text-black text-balance">
          Assisted Living and HOA tech support packages.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-gray-600">
          Recurring support for communities that want residents to have a trusted place for devices, streaming, scam questions, smart home setup, and everyday tech help.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/book?service=Assisted%20Living%20%2F%20HOA%20Package" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80">
            Book a Package Consult
          </Link>
          <Link href="/tech-concierge/core-services" className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 px-7 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-white">
            View Core Services
          </Link>
        </div>
      </section>

      <PageImageSection
        image={siteImages.pages.techConcierge}
        eyebrow="Community support"
        title="Trusted tech help brought directly to residents."
        body="Packages are built for recurring access, practical education, scam prevention, and a calmer support path for the technology residents use every day."
      />

      <section className="px-4 pb-24 md:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {packages.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="clickable-card group flex min-h-[360px] flex-col justify-between rounded-3xl bg-white p-7 md:p-9 outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
              >
                <div>
                  <div className="mb-6 flex items-start justify-between gap-6">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-soft-card text-action">
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowUpRight className="mt-2 h-5 w-5 text-action transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h2 className="text-3xl font-bold leading-tight text-black">{item.title}</h2>
                  <p className="mt-4 text-base font-medium leading-relaxed text-gray-600">{item.description}</p>
                </div>
                <ul className="mt-8 grid gap-3 border-t border-gray-100 pt-6">
                  {item.details.map((detail) => (
                    <li key={detail} className="text-sm font-semibold text-gray-700">
                      {detail}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
