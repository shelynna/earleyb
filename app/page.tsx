import {ManagedImage} from '@/components/ManagedImage';
import {siteImages} from '@/lib/site-images';
import Link from 'next/link';
import {
  ArrowUpRight,
  Building2,
  Globe,
  Home as HomeIcon,
  Laptop,
  ShieldCheck,
  Smartphone,
  Tv,
  Wrench,
} from 'lucide-react';

const priorityServices = [
  {
    href: '/services/one-on-one-training',
    title: '1-on-1 Tech Help',
    description: 'Patient help with phones, computers, email, photos, apps, and everyday tech confidence.',
    icon: Smartphone,
  },
  {
    href: '/services/home-tech-help',
    title: 'Home Tech Help',
    description: 'In-home support for Wi-Fi, printers, smart TVs, accounts, setup, and device issues.',
    icon: HomeIcon,
  },
  {
    href: '/services/virtual-tech-support',
    title: 'Virtual Tech Support',
    description: 'Phone or video support when you need quick answers without an in-home visit.',
    icon: Laptop,
  },
  {
    href: '/services/scam-fraud-prevention',
    title: 'Scam Detection',
    description: 'Practical fraud prevention training for suspicious calls, texts, emails, and pop-ups.',
    icon: ShieldCheck,
  },
  {
    href: '/services/streaming-setup-assistance',
    title: 'Streaming Setup',
    description: 'Smart TV, streaming apps, remotes, favorites, captions, and subscription setup.',
    icon: Tv,
  },
  {
    href: '/services/tech-help-repair',
    title: 'Repair and Troubleshooting',
    description: 'Computer repair, phone repair guidance, cleanup, updates, diagnostics, and quotes.',
    icon: Wrench,
  },
  {
    href: '/services/website-design',
    title: 'Web Design',
    description: 'Professional websites with hosting, SEO-ready structure, and ongoing care.',
    icon: Globe,
  },
  {
    href: '/tech-concierge/packages',
    title: 'Assisted Living and HOA',
    description: 'Recurring tech concierge packages for residents, communities, and facility teams.',
    icon: Building2,
  },
] as const;

const audienceCards = [
  {
    href: '/services',
    title: 'Individuals and Families',
    description: 'Personal tech help, repair, streaming, scam prevention, and smart home support.',
    imageKey: 'personalTechCard',
  },
  {
    href: '/tech-concierge/packages',
    title: 'Assisted Living and HOA',
    description: 'Recurring tech concierge packages for residents, facilities, and communities.',
    imageKey: 'seniorLivingCard',
  },
  {
    href: '/services/business-solutions',
    title: 'Small Businesses',
    description: 'Web design, SEO, managed IT, software setup, and practical technology support.',
    imageKey: 'businessCard',
  },
] as const;

export default function Home() {
  const homeImages = siteImages.home;
  const blogImages = siteImages.blog.posts;

  return (
    <main className="w-full overflow-hidden bg-[#FAFAFA]">
      <section className="relative isolate min-h-[680px] overflow-hidden bg-deep-black text-white md:min-h-[760px]">
        <ManagedImage
          image={homeImages.hero}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-black/62"></div>
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1440px] flex-col justify-center px-4 pb-16 pt-[150px] md:min-h-[760px] md:px-10 md:pb-20 md:pt-[180px]">
          <div className="max-w-4xl">
            <span className="mb-5 text-[10px] font-bold uppercase tracking-widest text-white/75">
              EarleyBird Technology Solutions
            </span>
            <h1 className="text-[44px] md:text-[72px] font-bold leading-[1.04] tracking-tight text-balance">
              Tech help, repair, and protection without the runaround.
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-xl font-medium leading-relaxed text-white/80">
              Get 1-on-1 support, home tech help, virtual support, scam prevention, streaming setup, device repair, smart home installs, web design, and community tech packages.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-xs font-bold uppercase tracking-widest text-action transition-colors hover:bg-white/90">
                View All Services
              </Link>
              <Link href="/book" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80">
                Book Tech Help
              </Link>
              <Link href="/tech-concierge/packages" className="inline-flex h-12 items-center justify-center rounded-full border border-white/35 px-7 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10">
                Assisted Living and HOA
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-14 md:px-10 md:pt-20 max-w-[1440px] mx-auto pb-16 md:pb-24">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-3 inline-flex text-[10px] font-bold uppercase tracking-widest text-action">
              Start Here
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-text">
              Choose the service you need.
            </h2>
            <p className="mt-3 text-base md:text-lg font-medium leading-relaxed text-muted">
              The fastest path is the right page first. Open a service, scan the details, then book or ask a question from there.
            </p>
          </div>
          <Link href="/services" className="inline-flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-action hover:text-action-hover">
            All Services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {priorityServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                className="clickable-card group flex min-h-[220px] flex-col justify-between rounded-3xl bg-white p-6 outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
              >
                <div>
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-soft-card text-action">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-action transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-text">{service.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted">{service.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="px-4 md:px-10 max-w-[1440px] mx-auto pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {audienceCards.map((card) => (
            <Link key={card.href} href={card.href} className="group flex flex-col">
              <div className="relative mb-5 h-[300px] overflow-hidden rounded-3xl bg-panel-bg">
                <ManagedImage
                  image={homeImages[card.imageKey]}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-deep-black/30"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                </div>
              </div>
              <p className="px-1 text-base font-medium leading-relaxed text-muted">{card.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 px-1 text-[11px] font-bold uppercase tracking-widest text-action">
                Explore
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-[110px] px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="max-w-xl">
            <span className="mb-4 inline-flex text-[10px] font-bold uppercase tracking-widest text-action">
              Scam Prevention
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-text">
              Technology should make life easier, not riskier.
            </h2>
            <p className="mt-5 text-base md:text-lg font-medium leading-relaxed text-muted">
              EarleyBird pairs setup and repair with education, so customers understand what changed and how to stay safer next time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services/scam-fraud-prevention" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80">
                Scam Prevention
              </Link>
              <Link href="/about/digital-literacy" className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 px-7 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-white">
                Digital Literacy
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 md:p-8">
            <div className="grid gap-4">
              {[
                ['Detect', 'Learn the warning signs of suspicious calls, texts, emails, and pop-ups.'],
                ['Prevent', 'Set up safer habits for accounts, passwords, devices, and online decisions.'],
                ['Respond', 'Know what to do before clicking, paying, sharing information, or panicking.'],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl bg-soft-card-2 p-5">
                  <h3 className="text-lg font-bold text-text">{title}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-[100px] px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-center rounded-[32px] bg-white p-6 md:p-10">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-panel-bg">
            <ManagedImage
              image={siteImages.pages.contact}
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="mb-4 inline-flex text-[10px] font-bold uppercase tracking-widest text-action">
              EarleyBird Connect
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-text">
              Follow, learn, and reach us from one place.
            </h2>
            <p className="mt-5 text-base md:text-lg font-medium leading-relaxed text-muted">
              Connect is where social updates, tech insights, contact paths, and future digital self-help resources live together.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/connect" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-7 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80">
                EarleyBird Connect
              </Link>
              <Link href="/blog" className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 px-7 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-soft-card">
                Tech Insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-[100px] px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="mb-8 flex items-end justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">Tech Insights</h2>
          <Link href="/blog" className="text-xs font-bold border-b border-black text-text pb-1 hover:text-action hover:border-action transition-colors">
            View Blog
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              href: '/blog/phishing-scams-targeting-seniors',
              image: blogImages['phishing-scams-targeting-seniors'],
              label: 'Scam Alerts',
              title: '5 New Phishing Scams Targeting Seniors',
            },
            {
              href: '/blog/tech-help-no-longer-optional-senior-living',
              image: blogImages['tech-help-no-longer-optional-senior-living'],
              label: 'Senior Tech',
              title: 'Bridging the Digital Divide in Assisted Living',
            },
            {
              href: '/blog/why-your-website-fails-to-convert',
              image: blogImages['why-your-website-fails-to-convert'],
              label: 'Small Business Tech',
              title: '3 Reasons Your Website Fails to Convert',
            },
          ].map((post) => (
            <Link key={post.href} href={post.href} className="group block">
              <div className="relative mb-5 h-[300px] overflow-hidden rounded-3xl bg-panel-bg">
                <ManagedImage
                  image={post.image}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted">{post.label}</p>
              <h3 className="text-lg md:text-xl font-bold text-text transition-colors group-hover:text-action">{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-[130px] px-6 max-w-[1100px] mx-auto text-center">
        <span className="mb-5 inline-flex text-[10px] font-bold uppercase tracking-widest text-action">
          Ready when you are
        </span>
        <h2 className="text-[40px] md:text-[72px] font-bold text-text tracking-tight leading-[1.05] text-balance">
          Get to the right tech help in one click.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-black/80">
            View All Services
          </Link>
          <Link href="/book" className="inline-flex h-12 items-center justify-center rounded-full border border-gray-300 px-8 text-xs font-bold uppercase tracking-widest text-text transition-colors hover:bg-soft-card">
            Book Support
          </Link>
        </div>
      </section>
    </main>
  );
}
