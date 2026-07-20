import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {ManagedImage} from '@/components/ManagedImage';
import {siteImages, type SiteImage} from '@/lib/site-images';

export const metadata = {
  title: 'All Services | EarleyBird Technology Solutions',
  description:
    'Browse all EarleyBird services, including 1-on-1 tech help, home tech help, virtual support, scam prevention, streaming setup, repair, smart home installs, and web design.',
};

type ServiceCard = {
  title: string;
  description: string;
  href: string;
  image: SiteImage;
};

const serviceGroups: {title: string; description: string; services: ServiceCard[]}[] = [
  {
    title: 'EarleyBird Tech Concierge',
    description: 'Hands-on help for individuals, families, assisted living communities, and HOAs.',
    services: [
      {
        title: '1-on-1 Tech Help',
        description: 'Patient training for phones, computers, email, photos, apps, and everyday tech confidence.',
        href: '/services/one-on-one-training',
        image: siteImages.services['one-on-one-training'],
      },
      {
        title: 'Home Tech Help',
        description: 'In-home help for Wi-Fi, printers, smart TVs, accounts, and device issues.',
        href: '/services/home-tech-help',
        image: siteImages.services['home-tech-help'],
      },
      {
        title: 'Virtual Tech Support',
        description: 'Phone or video support when you need quick answers without an in-home visit.',
        href: '/services/virtual-tech-support',
        image: siteImages.services['virtual-tech-support'],
      },
      {
        title: 'Scam Detection and Fraud Prevention',
        description: 'Training that helps customers recognize suspicious calls, texts, emails, and pop-ups.',
        href: '/services/scam-fraud-prevention',
        image: siteImages.services['scam-fraud-prevention'],
      },
      {
        title: 'Cut the Cord',
        description: 'Review cable costs, compare streaming options, and build a simpler entertainment setup.',
        href: '/services/cut-the-cord',
        image: siteImages.services['cut-the-cord'],
      },
      {
        title: 'Streaming Setup Assistance',
        description: 'Set up smart TVs, streaming apps, remotes, captions, favorites, and subscriptions.',
        href: '/services/streaming-setup-assistance',
        image: siteImages.services['streaming-setup-assistance'],
      },
      {
        title: 'Assisted Living and HOA Packages',
        description: 'Recurring tech help programs for communities that want residents supported on-site.',
        href: '/tech-concierge/packages',
        image: siteImages.pages.techConcierge,
      },
    ],
  },
  {
    title: 'Services',
    description: 'Repair, setup, design, and support services for households and small businesses.',
    services: [
      {
        title: 'Personal Tech Help',
        description: 'The main starting point for individual and family tech support.',
        href: '/services/personal-tech-help',
        image: siteImages.services['personal-tech-help'],
      },
      {
        title: 'Computer Repair',
        description: 'Troubleshooting, cleanup, updates, backup checks, and repair guidance.',
        href: '/services/computer-repair',
        image: siteImages.services['computer-repair'],
      },
      {
        title: 'Mobile Phone Repair',
        description: 'Phone diagnostics, setup, transfers, repair guidance, and device quotes.',
        href: '/services/mobile-phone-repair',
        image: siteImages.services['mobile-phone-repair'],
      },
      {
        title: 'Smart Home Installs',
        description: 'Install and learn cameras, doorbells, smart TVs, lights, Alexas, and more.',
        href: '/services/smart-home-install',
        image: siteImages.services['smart-home-install'],
      },
      {
        title: 'Web Design',
        description: 'Professional websites with hosting, SEO-ready structure, and ongoing care options.',
        href: '/services/website-design',
        image: siteImages.services['website-design'],
      },
      {
        title: 'Small Business Technology',
        description: 'Web design, SEO, managed IT, and software setup for local businesses.',
        href: '/services/business-solutions',
        image: siteImages.services['business-solutions'],
      },
      {
        title: 'SEO Campaigns',
        description: 'Local search, on-page SEO, content planning, and Google Business Profile support.',
        href: '/services/seo-campaigns',
        image: siteImages.services['seo-campaigns'],
      },
      {
        title: 'Managed IT',
        description: 'Proactive support for devices, users, backups, security, and daily operations.',
        href: '/services/managed-it',
        image: siteImages.services['managed-it'],
      },
      {
        title: 'SaaS Consulting',
        description: 'Choose, configure, integrate, and train your team on better software tools.',
        href: '/services/saas-consulting',
        image: siteImages.services['saas-consulting'],
      },
    ],
  },
];

export default function Services() {
  return (
    <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
      <section className="pt-[160px] md:pt-[190px] pb-12 px-4 md:px-10 max-w-[1200px] mx-auto">
        <div className="max-w-4xl">
          <span className="mb-4 inline-flex text-[10px] font-bold uppercase tracking-widest text-action">
            Service Directory
          </span>
          <h1 className="text-[44px] md:text-[72px] font-bold leading-[1.05] tracking-tight text-black text-balance">
            Find the exact tech help you came for.
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-gray-600">
            Browse every EarleyBird service, then open the page that matches your need. Each page explains what we do, what is included, and the next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#services" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80">
              Browse Services
            </Link>
            <Link href="/book" className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 px-7 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-white">
              Book Support
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 pb-24 md:px-10 max-w-[1400px] mx-auto">
        <div className="space-y-16">
          {serviceGroups.map((group) => (
            <section key={group.title} className="space-y-7">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-black">{group.title}</h2>
                <p className="mt-3 text-base md:text-lg font-medium leading-relaxed text-gray-600">
                  {group.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="clickable-card group overflow-hidden rounded-3xl bg-white outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
                  >
                    <div className="relative h-[210px] overflow-hidden bg-soft-card">
                      <ManagedImage
                        image={service.image}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-start justify-between gap-5">
                        <h3 className="text-xl font-bold leading-tight text-black">{service.title}</h3>
                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-action transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-gray-600">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
