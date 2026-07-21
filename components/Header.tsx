'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {ChevronDown, Menu, X} from 'lucide-react';
import {BrandLogo} from '@/components/BrandLogo';

const navSections = [
  {
    label: 'Tech Concierge',
    basePaths: ['/tech-concierge'],
    links: [
      {href: '/tech-concierge', label: 'Tech Concierge Overview'},
      {href: '/services/one-on-one-training', label: '1-on-1 Tech Help'},
      {href: '/services/home-tech-help', label: 'Home Tech Help'},
      {href: '/services/virtual-tech-support', label: 'Virtual Tech Support'},
      {href: '/services/scam-fraud-prevention', label: 'Scam Detection & Prevention'},
      {href: '/services/cut-the-cord', label: 'Cut the Cord'},
      {href: '/services/streaming-setup-assistance', label: 'TV & Streaming Concierge'},
      {href: '/tech-concierge/packages', label: 'Assisted Living & HOA Packages'},
      {href: '/tech-concierge/core-services', label: 'Facility Core Services'},
      {href: '/tech-concierge/pricing', label: 'Facility Pricing'},
    ],
  },
  {
    label: 'Services',
    basePaths: ['/services'],
    links: [
      {href: '/services', label: 'All Services'},
      {href: '/services/personal-tech-help', label: 'Personal Tech Help'},
      {href: '/services/computer-repair', label: 'Computer Repair'},
      {href: '/services/mobile-phone-repair', label: 'Mobile Phone Repair'},
      {href: '/services/smart-home-install', label: 'Smart Home Installs'},
      {href: '/services/website-design', label: 'Web Design'},
      {href: '/services/business-solutions', label: 'Small Business Technology'},
      {href: '/services/seo-campaigns', label: 'SEO Campaigns'},
      {href: '/services/saas-consulting', label: 'SaaS Consulting'},
    ],
  },
  {
    label: 'EarleyBird Connect',
    basePaths: ['/connect', '/blog', '/contact', '/book', '/client-login'],
    links: [
      {href: '/connect', label: 'Connect Home'},
      {href: '/blog', label: 'Tech Insights'},
      {href: '/contact', label: 'Contact Us'},
      {href: '/book', label: 'Book Support'},
      {href: '/client-login', label: 'Client Login'},
    ],
  },
  {
    label: 'About',
    basePaths: ['/about', '/portfolio', '/resources'],
    links: [
      {href: '/about', label: 'Who We Are'},
      {href: '/about/why-us', label: 'Why Us'},
      {href: '/about/digital-literacy', label: 'Digital Literacy'},
      {href: '/about/health-wellness', label: 'Digital Health & Wellness'},
      {href: '/portfolio/senior-living', label: 'Assisted Living Portfolio'},
      {href: '/portfolio/business', label: 'Business Portfolio'},
      {href: '/resources/faq', label: 'FAQ'},
    ],
  },
] as const;

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;
  const isGroupActive = (paths: readonly string[]) =>
    paths.some((path) => pathname === path || pathname.startsWith(path + '/'));

  return (
    <header className="fixed top-[24px] left-0 right-0 z-50 flex flex-col items-center px-4 md:px-8 w-full pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[1440px] flex items-center justify-between gap-2 bg-action rounded-full px-2 py-2 h-[72px]">
        <div className="flex min-w-0 items-center gap-4 lg:gap-7 pl-2">
          <Link href="/" className="flex h-12 shrink-0 items-center" aria-label="EarleyBird Technology Solutions home">
            <BrandLogo className="h-10 sm:h-11 w-auto object-contain" priority />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navSections.map((section) => {
              const active = isGroupActive(section.basePaths);

              return (
                <div key={section.label} className="relative group">
                  <button
                    type="button"
                    className={`flex items-center gap-1 py-4 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      active ? 'text-white' : 'text-page-bg/80 hover:text-page-bg'
                    }`}
                  >
                    {section.label}
                    <ChevronDown className="w-3 h-3 opacity-70 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-[calc(100%-1px)] hidden max-h-[70vh] min-w-[280px] overflow-y-auto rounded-2xl bg-black p-2 group-hover:flex group-focus-within:flex flex-col">
                    {section.links.map((link) => {
                      const linkActive = isActive(link.href);

                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          aria-current={linkActive ? 'page' : undefined}
                          className={`rounded-lg px-4 py-2.5 text-xs transition-colors ${
                            linkActive ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        <Link href="/book" className="hidden sm:flex bg-white text-action rounded-full hover:bg-white/90 transition-colors duration-300 shrink-0 items-center px-5 md:px-8 text-[10px] h-[56px] font-bold uppercase tracking-widest cursor-pointer">
          Book Support
        </Link>

        <button
          type="button"
          className="lg:hidden flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white/10 transition-colors"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            if (isMobileMenuOpen) {
              setOpenMobileSection(null);
            }

            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="pointer-events-auto mt-3 w-full max-w-[1440px] lg:hidden max-h-[calc(100vh-120px)] overflow-y-auto rounded-[24px] bg-action p-4 text-white shadow-[0_18px_45px_rgb(0_0_0/0.18)]"
        >
          <div className="grid gap-2 sm:grid-cols-2">
            {navSections.map((section) => (
              <section key={section.label} className="rounded-2xl bg-white/10">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
                  aria-expanded={openMobileSection === section.label}
                  aria-controls={`mobile-section-${section.label.toLowerCase().replaceAll(' ', '-')}`}
                  onClick={() => setOpenMobileSection((current) => (current === section.label ? null : section.label))}
                >
                  {section.label}
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${openMobileSection === section.label ? 'rotate-180' : ''}`} />
                </button>
                {openMobileSection === section.label ? (
                  <div id={`mobile-section-${section.label.toLowerCase().replaceAll(' ', '-')}`} className="grid gap-1 px-2 pb-3">
                    {section.links.map((link) => {
                      const active = isActive(link.href);

                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          aria-current={active ? 'page' : undefined}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenMobileSection(null);
                          }}
                          className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                            active ? 'bg-white text-action' : 'text-white/85 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
