import Link from 'next/link';
import {ArrowUpRight, Mail, Phone} from 'lucide-react';
import {PageImageSection} from '@/components/PageImageSection';
import {siteImages} from '@/lib/site-images';

export const metadata = {
  title: 'EarleyBird Connect | Tech Help, Socials, and Support',
  description:
    'Connect with EarleyBird Technology Solutions for tech support, service questions, social updates, scam prevention tips, and digital self-help resources.',
};

const connectLinks = [
  {
    title: 'LinkedIn',
    description: 'Follow EarleyBird for professional updates, technology guidance, and service news.',
    href: 'https://www.linkedin.com/search/results/all/?keywords=EarleyBird%20Technology%20Solutions',
  },
  {
    title: 'Facebook',
    description: 'Connect with us for local updates, service information, and practical tech reminders.',
    href: 'https://www.facebook.com/search/top?q=EarleyBird%20Technology%20Solutions',
  },
  {
    title: 'Tech Insights',
    description: 'Read scam alerts, streaming guidance, smart home tips, and digital literacy posts.',
    href: '/blog',
  },
  {
    title: 'Ask a Question',
    description: 'Send a message about personal tech help, facility support, web design, or repair.',
    href: '/contact',
  },
] as const;

export default function Connect() {
  return (
    <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
      <section className="pt-[160px] md:pt-[190px] pb-12 px-4 md:px-10 max-w-[1200px] mx-auto text-center">
        <span className="mb-4 inline-flex text-[10px] font-bold uppercase tracking-widest text-action">
          EarleyBird Connect
        </span>
        <h1 className="mx-auto max-w-5xl text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-tight text-black text-balance">
          Connect with us for tech needs, updates, and practical help.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-gray-600">
          This is the home for EarleyBird updates and digital self-help as it grows. For now, use it to reach us, follow our socials, and find the right tech support path quickly.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/services" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80">
            Find a Service
          </Link>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 px-7 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-white">
            Contact Us
          </Link>
        </div>
      </section>

      <PageImageSection
        image={siteImages.pages.contact}
        eyebrow="Stay connected"
        title="One place for support paths and social updates."
        body="EarleyBird Connect gives customers a clear way to follow, message, learn, and move toward the service that matches their need."
      />

      <section className="px-4 pb-24 md:px-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {connectLinks.map((item) => {
            const isExternal = item.href.startsWith('http');
            const className =
              'clickable-card group rounded-3xl bg-white p-7 outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2';
            const content = (
              <>
                <div className="mb-5 flex items-start justify-between gap-6">
                  <h2 className="text-2xl font-bold text-black">{item.title}</h2>
                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-action transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-sm md:text-base font-medium leading-relaxed text-gray-600">{item.description}</p>
              </>
            );

            return isExternal ? (
              <a key={item.title} href={item.href} className={className}>
                {content}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <a href="tel:7728777554" className="clickable-card group flex items-center gap-4 rounded-3xl bg-white p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-soft-card text-action">
              <Phone className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-widest text-gray-500">Call</span>
              <span className="mt-1 block text-xl font-bold text-black">772-877-7554</span>
            </span>
          </a>
          <a href="mailto:Support@ebirdtech.com" className="clickable-card group flex items-center gap-4 rounded-3xl bg-white p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-soft-card text-action">
              <Mail className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-bold uppercase tracking-widest text-gray-500">Email</span>
              <span className="mt-1 block text-xl font-bold text-black">Support@ebirdtech.com</span>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
