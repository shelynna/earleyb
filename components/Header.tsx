'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import {BrandLogo} from '@/components/BrandLogo';

export function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  
  // Helper to check if any child link or current section is active
  const isGroupActive = (paths: string[]) => paths.some((p) => pathname === p || pathname.startsWith(p + '/'));

  return (
    <header className="fixed top-[24px] left-0 right-0 z-50 flex items-center justify-center px-4 md:px-8 w-full pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[1130px] flex items-center justify-between bg-black rounded-full px-2 py-2 h-[72px]">
        <div className="flex items-center gap-6 pl-2">
          <Link href="/" className="flex h-12 shrink-0 items-center">
            <BrandLogo className="h-11 w-auto object-contain" priority />
          </Link>
          <nav className="hidden lg:flex items-center gap-5">
            {/* EarleyBird Connect */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 py-4 ${isGroupActive(['/']) && pathname === '/' ? 'text-white' : 'text-page-bg/80 hover:text-page-bg'}`}>
                EarleyBird Connect
                <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 top-[100%] mt-2 hidden group-hover:flex flex-col bg-black rounded-2xl p-2 min-w-[200px]">
                <Link href="/" className={`text-xs px-4 py-2 rounded-lg transition-colors ${isActive('/') ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>Home</Link>
                <Link href="/client-login" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Client Login</Link>
                <Link href="/contact" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Contact Us</Link>
                <Link href="/book" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Book Consultation</Link>
              </div>
            </div>

            {/* Tech Concierge */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 py-4 ${isGroupActive(['/tech-concierge']) ? 'text-white' : 'text-page-bg/80 hover:text-page-bg'}`}>
                Tech Concierge
                <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 top-[100%] mt-2 hidden group-hover:flex flex-col bg-black rounded-2xl p-2 min-w-[240px]">
                <Link href="/tech-concierge" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Tech Concierge Home</Link>
                <Link href="/tech-concierge/core-services" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Core Services</Link>
                <Link href="/tech-concierge/enhanced-premium" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Enhanced &amp; Premium</Link>
                <Link href="/tech-concierge/scam-shield" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Scam-Shield Program</Link>
                <Link href="/tech-concierge/pricing" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Pricing &amp; Plans</Link>
                <Link href="/about/digital-literacy" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Digital Access &amp; Literacy</Link>
                <Link href="/about/health-wellness" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Well-Being &amp; Cognition</Link>
                <Link href="/tech-concierge/password-protocol" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Password Protocol</Link>
                <Link href="/portfolio/senior-living" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Facility Portfolio</Link>
              </div>
            </div>

            {/* Services */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 py-4 ${isGroupActive(['/services']) ? 'text-white' : 'text-page-bg/80 hover:text-page-bg'}`}>
                Services
                <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 top-[100%] mt-2 hidden group-hover:flex flex-col bg-black rounded-2xl p-2 min-w-[220px]">
                <div className="px-4 py-1 text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2 mb-1">Business</div>
                <Link href="/services/business-solutions" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Business Solutions</Link>
                <Link href="/services/website-design" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Website Design</Link>
                <Link href="/services/seo-campaigns" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">SEO Campaigns</Link>
                <Link href="/services/managed-it" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Managed IT (MSP)</Link>
                <Link href="/services/saas-consulting" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">SaaS Consulting</Link>
                <div className="h-px bg-white/10 my-2"></div>
                <div className="px-4 py-1 text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Personal</div>
                <Link href="/services/personal-tech-help" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Personal Tech Help</Link>
                <Link href="/services/one-on-one-training" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">1-on-1 Training</Link>
                <Link href="/services/scam-fraud-prevention" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Scam &amp; Fraud Prevention</Link>
                <Link href="/services/smart-home-install" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Smart Home Install</Link>
                <Link href="/services/cut-the-cord" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">{"\"Cut the Cord\""}</Link>
                <Link href="/services/tech-help-repair" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Tech Help &amp; Repair</Link>
              </div>
            </div>

            {/* Portfolio */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 py-4 ${isGroupActive(['/portfolio']) ? 'text-white' : 'text-page-bg/80 hover:text-page-bg'}`}>
                Portfolio
                <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 top-[100%] mt-2 hidden group-hover:flex flex-col bg-black rounded-2xl p-2 min-w-[220px]">
                <Link href="/portfolio/senior-living" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Senior Living Portfolio</Link>
                <Link href="/portfolio/business" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Business Portfolio</Link>
              </div>
            </div>

            {/* About */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 py-4 ${isGroupActive(['/about']) ? 'text-white' : 'text-page-bg/80 hover:text-page-bg'}`}>
                About
                <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 top-[100%] mt-2 hidden group-hover:flex flex-col bg-black rounded-2xl p-2 min-w-[220px]">
                <Link href="/about" className={`text-xs px-4 py-2 rounded-lg transition-colors ${isActive('/about') ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>About Us</Link>
                <Link href="/about/why-us" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Why Us (Our Advantage)</Link>
                <Link href="/about/digital-literacy" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Data: Digital Literacy</Link>
                <Link href="/about/health-wellness" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Data: Health &amp; Wellness</Link>
              </div>
            </div>

            {/* Resources */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 py-4 ${isGroupActive(['/resources']) ? 'text-white' : 'text-page-bg/80 hover:text-page-bg'}`}>
                Resources
                <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 top-[100%] mt-2 hidden group-hover:flex flex-col bg-black rounded-2xl p-2 min-w-[200px]">
                <Link href="/blog" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">Blog &amp; News</Link>
                <Link href="/resources/faq" className="text-xs text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-colors">FAQ</Link>
              </div>
            </div>

            {/* Blog */}
            <Link href="/blog" className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 py-4 ${isActive('/blog') ? 'text-white' : 'text-page-bg/80 hover:text-page-bg'}`}>
              Blog
            </Link>

          </nav>
        </div>
        <Link href="/book" className="bg-white-soft text-black rounded-full hover:bg-white transition-colors duration-300 shrink-0 flex items-center px-8 text-[10px] h-[56px] font-bold uppercase tracking-widest cursor-pointer">
          Book Consult
        </Link>
      </div>
    </header>
  );
}
