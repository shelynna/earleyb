import Link from 'next/link';
import {BrandLogo} from '@/components/BrandLogo';
import {contactInfo, socialLinks} from '@/lib/site-config';

const serviceLinks = [
  { href: '/services', label: 'All Services' },
  { href: '/tech-concierge/packages', label: 'Assisted Living & HOA Packages' },
  { href: '/services/personal-tech-help', label: 'Personal Tech Help' },
  { href: '/services/computer-repair', label: 'Computer Repair' },
  { href: '/services/website-design', label: 'Web Design' },
];

const companyLinks = [
  { href: '/connect', label: 'EarleyBird Connect' },
  { href: '/about', label: 'About Us' },
  { href: '/about/why-us', label: 'The EarleyBird Advantage' },
  { href: '/portfolio/senior-living', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 md:pt-28 pb-10 md:pb-14 px-6 md:px-10 rounded-t-[40px] relative z-20">
      <div className="max-w-[1728px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-14 md:mb-20">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Link href="/" className="flex w-fit items-center">
              <BrandLogo className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-sm md:text-base text-white/55 max-w-sm leading-relaxed">
              EarleyBird Technology Solutions makes tech simple, secure, and empowering for senior living facilities, small businesses, and families.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  className="rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
              <a className="rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white hover:bg-white/10 transition-colors" href={contactInfo.emailHref}>
                Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[10px]">Services</h4>
            <ul className="flex flex-col gap-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-sm md:text-base text-white/60 hover:text-white transition-colors" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link className="text-sm md:text-base text-white/60 hover:text-white transition-colors" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-semibold text-[10px] md:text-[11px] text-white/40 uppercase tracking-wider">
            &copy; 2026 EarleyBird Technology Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 md:gap-8">
            <Link className="font-semibold text-[10px] md:text-[11px] text-white/40 hover:text-white transition-colors uppercase tracking-wider" href="/contact">
              Privacy Policy
            </Link>
            <Link className="font-semibold text-[10px] md:text-[11px] text-white/40 hover:text-white transition-colors uppercase tracking-wider" href="/contact">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
