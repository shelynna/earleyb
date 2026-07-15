import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowLeft,
  GraduationCap,
  Globe,
  Home,
  Laptop,
  LineChart,
  Shield,
  ShieldAlert,
  Smartphone,
  Tv,
  Wrench,
} from 'lucide-react';

interface RelatedLink {
  href: string;
  label: string;
  description: string;
}

interface ServiceData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Business' | 'Personal';
  description: string;
  icon: LucideIcon;
  color: string;
  accentBg: string;
  metricLabel: string;
  metricValue: string;
  body: string;
  benefits: string[];
  features: string[];
  relatedLinks: RelatedLink[];
  primaryCta: string;
}

const servicesMap: Record<string, ServiceData> = {
  'business-solutions': {
    title: 'Technology Solutions That Drive Growth',
    metaTitle: 'Small Business Technology Solutions | Web Design, SEO, & IT',
    metaDescription: 'Technology solutions that drive growth. We offer professional web design, SEO campaigns, and Managed IT Services (MSP) for small businesses.',
    category: 'Business',
    description: 'We help small businesses bridge the gap between people and technology, delivering solutions that improve efficiency, prevent risks, and create long-term confidence in digital tools.',
    icon: Laptop,
    color: 'text-indigo-600 border-indigo-200',
    accentBg: 'bg-indigo-50',
    metricLabel: 'Core business services',
    metricValue: '4',
    body: 'EarleyBird supports small businesses with practical technology services that help owners look professional, get found online, secure daily operations, and choose software that makes work easier.',
    benefits: [
      'Professional website design with hosting and ongoing care packages.',
      'SEO campaigns that drive visibility and growth.',
      'Managed IT services (MSP) for reliable, scalable support.',
      'SaaS consulting and setup to streamline operations.',
    ],
    features: ['Website Design', 'SEO Campaigns', 'Managed IT', 'SaaS Setup'],
    relatedLinks: [
      { href: '/services/website-design', label: 'Professional Website Design', description: 'Build a brand-consistent, mobile-responsive, SEO-ready site.' },
      { href: '/services/seo-campaigns', label: 'SEO Campaigns', description: 'Get found on Google through content, metadata, and local search.' },
      { href: '/services/managed-it', label: 'Managed IT Services', description: 'Get proactive support for devices, backups, security, and users.' },
      { href: '/services/saas-consulting', label: 'SaaS Consulting', description: 'Audit, select, integrate, and train your team on better tools.' },
      { href: '/portfolio/business', label: 'Business Portfolio', description: 'Review example website, SEO, IT, and software projects.' },
    ],
    primaryCta: 'Get a Free Business Consultation',
  },
  'website-design': {
    title: 'Professional Website Design with Hosting & Ongoing Care Packages',
    metaTitle: 'Professional Website Design & Hosting | EarleyBird Solutions',
    metaDescription: 'Get a professional, brand-consistent, SEO-ready website. Our services include secure hosting and ongoing maintenance care packages.',
    category: 'Business',
    description: 'Your website is your digital front door. We build professional, modern, mobile-responsive websites that reflect your brand, drive growth, and establish trust.',
    icon: Globe,
    color: 'text-blue-600 border-blue-200',
    accentBg: 'bg-blue-50',
    metricLabel: 'Mobile-responsive build',
    metricValue: '100%',
    body: 'A strong site should look trustworthy, load quickly, guide visitors clearly, and give your business a place to grow. EarleyBird designs websites that match your brand while preparing the foundation for SEO and ongoing care.',
    benefits: [
      'Brand-consistent design using your logo, colors, typography, and business voice.',
      'Secure hosting with EarleyBird-managed launch support.',
      'SEO-ready structure with fast loading, metadata, and mobile responsiveness.',
      'Ongoing maintenance for updates, backups, minor edits, and care after launch.',
    ],
    features: ['Brand Guidelines', 'Secure Hosting', 'SEO Ready', 'Maintenance Care'],
    relatedLinks: [
      { href: '/services/seo-campaigns', label: 'SEO Campaigns', description: 'A beautiful website is just the start. We help it get found.' },
      { href: '/portfolio/business', label: 'Business Portfolio', description: 'See example website and SEO project structures.' },
      { href: '/services/business-solutions', label: 'Business Solutions', description: 'Return to the small business technology pillar page.' },
    ],
    primaryCta: 'Get a Website Quote',
  },
  'seo-campaigns': {
    title: 'SEO Campaigns That Drive Visibility and Growth',
    metaTitle: 'SEO Campaigns That Drive Visibility | EarleyBird Solutions',
    metaDescription: 'Get found on Google. Our SEO campaigns drive visibility and growth through on-page SEO, content strategy, and Google Business Profile optimization.',
    category: 'Business',
    description: 'A beautiful website is useless if no one can find it. Our SEO campaigns are designed to get your business in front of the right customers on Google.',
    icon: LineChart,
    color: 'text-teal-600 border-teal-200',
    accentBg: 'bg-teal-50',
    metricLabel: 'Search visibility focus',
    metricValue: 'Local',
    body: 'EarleyBird helps small businesses build search visibility through practical on-page improvements, content planning, local search optimization, and performance hygiene that supports long-term growth.',
    benefits: [
      'On-page SEO, metadata, fast loading, and mobile responsiveness.',
      'Content strategy for a blog or content hub that attracts the right audience.',
      'Google Business Profile optimization and management for local visibility.',
      'Clear recommendations that connect search work to business goals.',
    ],
    features: ['On-Page SEO', 'Content Strategy', 'Local SEO', 'Google Profile'],
    relatedLinks: [
      { href: '/services/website-design', label: 'Website Design', description: 'SEO works best on a professionally built, fast website.' },
      { href: '/portfolio/business', label: 'Business Portfolio', description: 'Review example SEO and website project structures.' },
      { href: '/blog', label: 'Blog & Content Hub', description: 'See how educational content supports search visibility.' },
    ],
    primaryCta: 'Get an SEO Audit',
  },
  'managed-it': {
    title: 'Managed IT Services (MSP) for Reliable, Scalable Support',
    metaTitle: 'Managed IT Services (MSP) | EarleyBird Solutions',
    metaDescription: 'Get reliable, scalable IT support for your small business. Our MSP service acts as your proactive, outsourced IT department.',
    category: 'Business',
    description: 'Stop worrying about downtime, updates, and security risks. As your MSP, we act as your proactive, outsourced IT department so you can focus on your business.',
    icon: Shield,
    color: 'text-slate-700 border-slate-300',
    accentBg: 'bg-slate-50',
    metricLabel: 'Support model',
    metricValue: 'Proactive',
    body: 'Small teams need dependable systems without hiring a full internal IT department. EarleyBird helps monitor, maintain, secure, and support the technology that keeps your business moving.',
    benefits: [
      'Proactive monitoring and maintenance for business devices and systems.',
      'Cybersecurity and risk prevention for daily operations.',
      'On-call help desk and team support when staff need help.',
      'Device and software management, data backups, and recovery planning.',
    ],
    features: ['Monitoring', 'Cybersecurity', 'Help Desk', 'Backups'],
    relatedLinks: [
      { href: '/services/saas-consulting', label: 'SaaS Consulting', description: 'We can also help manage and streamline your software stack.' },
      { href: '/services/business-solutions', label: 'Business Solutions', description: 'Return to the small business technology pillar page.' },
    ],
    primaryCta: 'Get a Custom MSP Quote',
  },
  'saas-consulting': {
    title: 'SaaS Consulting and Setup to Streamline Operations',
    metaTitle: 'SaaS Consulting & Setup | EarleyBird Solutions',
    metaDescription: 'Streamline your operations. We help you audit, select, and integrate the right Software as a Service (SaaS) tools for your business.',
    category: 'Business',
    description: "Are you paying for 10 different apps that don't talk to each other? We help you audit, choose, implement, and integrate the right SaaS tools.",
    icon: Laptop,
    color: 'text-orange-600 border-orange-200',
    accentBg: 'bg-orange-50',
    metricLabel: 'Workflow stages',
    metricValue: '4',
    body: 'Software should reduce friction, not multiply it. EarleyBird reviews your workflow, recommends practical tools, configures them correctly, and teaches your team how to use the new system with confidence.',
    benefits: [
      'Audit your current workflow and software stack.',
      'Consult on the right tools for your needs, including platforms such as Mailchimp or ConvertKit.',
      'Implement and integrate tools so information flows where it belongs.',
      'Train your team so the streamlined system becomes part of daily operations.',
    ],
    features: ['Audit', 'Consult', 'Implement', 'Train'],
    relatedLinks: [
      { href: '/services/managed-it', label: 'Managed IT Services', description: 'Pair software setup with proactive IT support.' },
      { href: '/services/business-solutions', label: 'Business Solutions', description: 'Return to the small business technology pillar page.' },
    ],
    primaryCta: 'Streamline Your Operations',
  },
  'personal-tech-help': {
    title: 'Technology Education & Training',
    metaTitle: 'Personal Tech Training & In-Home Support | EarleyBird Solutions',
    metaDescription: 'In-home tech help for individuals and families. We offer 1-on-1 training, scam prevention, smart home setup, phone repair, and more.',
    category: 'Personal',
    description: 'We focus on education of technology for all people. Our smartphone experts provide a supervised learning experience for people who want more from their smart devices.',
    icon: Smartphone,
    color: 'text-blue-500 border-blue-200',
    accentBg: 'bg-blue-50',
    metricLabel: 'Personal service paths',
    metricValue: '5',
    body: 'EarleyBird helps individuals, families, and independent seniors learn technology at a comfortable pace. We install, educate, repair, simplify, and protect so people can use their devices with confidence.',
    benefits: [
      '1-on-1 personalized training with custom cheat sheets and take-home guides.',
      'Scam and fraud prevention education for safer decisions online.',
      'Smart home installation with hands-on training after every setup.',
      'Cut the Cord consulting, tech help, and phone repair support.',
    ],
    features: ['Training', 'Scam Prevention', 'Smart Home', 'Repair Help'],
    relatedLinks: [
      { href: '/services/one-on-one-training', label: '1-on-1 Personalized Training', description: 'Custom lessons for smartphones, email, social media, and safety.' },
      { href: '/services/scam-fraud-prevention', label: 'Scam & Fraud Prevention', description: 'Learn the behaviors that help detect and avoid scammers.' },
      { href: '/services/smart-home-install', label: 'Smart Home Installation', description: 'Install cameras, doorbells, smart TVs, lights, Alexas, and more.' },
      { href: '/services/cut-the-cord', label: 'Cut The Cord Consulting', description: 'Find and set up cost-effective streaming options.' },
      { href: '/services/tech-help-repair', label: 'Tech Help & Phone Repair', description: 'Get fast help by phone or in person, plus mobile repair options.' },
    ],
    primaryCta: 'Book a 1-on-1 Session',
  },
  'one-on-one-training': {
    title: 'Personalized 1-on-1 Training with Custom Cheat Sheets',
    metaTitle: '1-on-1 Personalized Tech Training | EarleyBird Solutions',
    metaDescription: 'Learn at your own pace. We create custom, 1-on-1 training plans and cheat sheets to help you master your smartphone and computer.',
    category: 'Personal',
    description: 'We pride ourselves on educating customers to be independent and confident. Learning your device saves time, saves money, and creates more convenience.',
    icon: GraduationCap,
    color: 'text-purple-600 border-purple-200',
    accentBg: 'bg-purple-50',
    metricLabel: 'Training process',
    metricValue: '3 steps',
    body: 'Every session begins with your goals. We identify pain points, create a roadmap, and build a lesson plan just for you so learning feels calm, practical, and useful.',
    benefits: [
      'We conduct a test to identify your smartphone or device pain points.',
      'We formulate a roadmap for your success.',
      'We create a custom lesson plan just for you.',
      'Topics include smartphone workshops, social media, email, and internet safety.',
    ],
    features: ['Pain Point Test', 'Custom Roadmap', 'Lesson Plan', 'Take-Home Guides'],
    relatedLinks: [
      { href: '/services/scam-fraud-prevention', label: 'Scam & Fraud Prevention', description: 'A core part of training is learning how to spot deception.' },
      { href: '/services/personal-tech-help', label: 'Personal Tech Services', description: 'Return to the personal services pillar page.' },
    ],
    primaryCta: 'Book Your Training',
  },
  'scam-fraud-prevention': {
    title: 'Scam Detection and Fraud Prevention',
    metaTitle: 'Scam Detection & Fraud Prevention Seminars',
    metaDescription: 'Protect yourself and your family. Our training, developed by a military master trainer, teaches you to detect and avoid harmful scams.',
    category: 'Personal',
    description: 'Protect yourself and your family with practical scam awareness training that teaches the warning signs, behaviors, and next steps needed to avoid harmful fraud.',
    icon: ShieldAlert,
    color: 'text-red-600 border-red-200',
    accentBg: 'bg-red-50',
    metricLabel: 'Senior internet crime loss in 2023',
    metricValue: '$3.4B',
    body: 'Scams succeed when people are rushed, confused, isolated, or embarrassed to ask for help. EarleyBird trains customers to slow down, verify requests, recognize common tactics, and contact a trusted support path before making a costly mistake.',
    benefits: [
      'Training developed by a military master certified trainer with 10+ years in military and government risk management.',
      'Education on common scam categories, including tech support, phishing, payment, and impersonation attempts.',
      'Clear behaviors for detecting, avoiding, and responding to harmful scammers.',
      'Family-friendly guidance so loved ones know how to support safer decisions.',
    ],
    features: ['Scam Detection', 'Fraud Behaviors', 'Family Guidance', 'Risk Training'],
    relatedLinks: [
      { href: '/services/one-on-one-training', label: '1-on-1 Training', description: 'Scam prevention can be included in personalized lessons.' },
      { href: '/tech-concierge/scam-shield', label: 'Scam-Shield Program', description: 'See the enterprise version for senior living communities.' },
      { href: '/services/personal-tech-help', label: 'Personal Tech Services', description: 'Return to the personal services pillar page.' },
    ],
    primaryCta: 'Book a Prevention Seminar',
  },
  'smart-home-install': {
    title: 'Smart Device Installations and Tech Help',
    metaTitle: 'Smart Device Installation & Tech Help | EarleyBird Solutions',
    metaDescription: 'In-home installation for smart devices. We install and train you on smart cameras, doorbells, TVs, smart lights, Alexas, and more.',
    category: 'Personal',
    description: 'Thinking about purchasing a new smart device or have a device that needs to be installed? Give us a call.',
    icon: Home,
    color: 'text-teal-600 border-teal-200',
    accentBg: 'bg-teal-50',
    metricLabel: 'Setup principle',
    metricValue: 'Teach',
    body: 'Smart devices are only useful when you know how to use them safely. EarleyBird installs devices and then teaches you the controls, apps, alerts, and everyday routines you need.',
    benefits: [
      "We install cameras, smart doorbells, smart TVs and smart TV devices, smart lights, Alexas, and more.",
      'We connect devices to your home network and account setup.',
      'We explain device controls, notifications, privacy basics, and daily use.',
      'After every install, our technicians teach you how to use your newly installed smart device.',
    ],
    features: ['Cameras', 'Doorbells', 'Smart TVs', 'Voice Assistants'],
    relatedLinks: [
      { href: '/services/cut-the-cord', label: 'Cut The Cord Consulting', description: 'Often paired with Smart TV and streaming setup.' },
      { href: '/services/personal-tech-help', label: 'Personal Tech Services', description: 'Return to the personal services pillar page.' },
    ],
    primaryCta: 'Schedule Your Installation',
  },
  'cut-the-cord': {
    title: 'Paying Too Much for Cable?',
    metaTitle: 'Cut The Cord Consulting | EarleyBird Solutions',
    metaDescription: "Paying too much for cable? We make cutting the cord easy. We'll research the best streaming options and set them up for you.",
    category: 'Personal',
    description: "We make cutting the cord easy, so you do not overpay for what you watch. The average savings is over $90 per month.",
    icon: Tv,
    color: 'text-rose-600 border-rose-200',
    accentBg: 'bg-rose-50',
    metricLabel: 'Average monthly savings',
    metricValue: '$90+',
    body: 'EarleyBird researches cost-effective streaming options based on the information you provide, helps set up the right devices at home, and teaches you how to stream without confusion.',
    benefits: [
      'Review your viewing habits and current cable costs.',
      'Research cost-effective streaming options based on your preferences.',
      'Set up streaming devices and accounts at home.',
      'Teach you how to stream, search, and switch between services confidently.',
    ],
    features: ['Bill Review', 'Streaming Plan', 'Home Setup', 'Hands-On Training'],
    relatedLinks: [
      { href: '/services/smart-home-install', label: 'Smart Home Installation', description: 'We can also install your new Smart TV or streaming device.' },
      { href: '/services/personal-tech-help', label: 'Personal Tech Services', description: 'Return to the personal services pillar page.' },
    ],
    primaryCta: 'Start Saving Now',
  },
  'tech-help-repair': {
    title: 'On-Demand Tech Help & Phone Repair',
    metaTitle: 'On-Demand Tech Help & Phone Repair | EarleyBird Solutions',
    metaDescription: 'Get fast, on-demand tech help over the phone or in person. We also offer professional mobile repair and buy used or broken phones for cash.',
    category: 'Personal',
    description: 'Get fast help over the phone or in person for smart devices, repairs, and quote requests for used or broken phones.',
    icon: Wrench,
    color: 'text-slate-800 border-slate-200',
    accentBg: 'bg-slate-100',
    metricLabel: 'Support options',
    metricValue: '3',
    body: 'When a device problem interrupts your day, EarleyBird can help you understand what happened and what to do next. We support general tech help, professional mobile repair, and quotes for broken or used phones.',
    benefits: [
      'Tech Help: Having trouble with your smart devices? We consult and help so you understand your devices by phone or in person.',
      'Mobile Repair: Professional mobile repair service with convenient support that comes to you.',
      'We Buy Phones: Turn old and broken phones into cash by requesting a quote for your device.',
      'Clear explanations so you know whether repair, setup, replacement, or training makes the most sense.',
    ],
    features: ['Phone Help', 'In-Person Support', 'Mobile Repair', 'Device Quotes'],
    relatedLinks: [
      { href: '/contact', label: 'Get a Quote for Your Phone', description: 'Send details about a used or broken device.' },
      { href: '/services/personal-tech-help', label: 'Personal Tech Services', description: 'Return to the personal services pillar page.' },
    ],
    primaryCta: 'Schedule a Repair',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <main className="w-full bg-[#FAFAFA] min-h-screen pb-24">
        <div className="pt-[140px] px-4 md:px-10 max-w-[1200px] mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        <section className="pt-8 pb-12 px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-black leading-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              {service.description}
            </p>
            <Link href="/book" className="inline-flex bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all duration-300 px-8 py-3 text-xs uppercase tracking-widest shadow-md">
              {service.primaryCta}
            </Link>
          </div>

        </section>

        <section className="py-12 px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-8 md:p-10 rounded-[32px] space-y-6">
                <h2 className="text-2xl font-bold text-black">About the Service</h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg font-medium">
                  {service.body}
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[32px] space-y-6">
                <h2 className="text-2xl font-bold text-black">What We Deliver</h2>
                <ul className="space-y-4 list-disc pl-5">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="text-gray-600 font-medium text-sm md:text-base">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-gradient-to-tr from-slate-900 to-black text-white p-8 md:p-10 rounded-[32px] shadow-lg flex flex-col justify-between min-h-64 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Key Detail</span>
                  <p className="text-5xl md:text-6xl font-black mt-2 text-white">{service.metricValue}</p>
                </div>
                <p className="text-gray-300 font-semibold text-lg">{service.metricLabel}</p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[32px] space-y-6">
                <h2 className="text-xl font-bold text-black">Service Focus</h2>
                <ul className="space-y-2 list-disc pl-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm font-medium text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 pt-2">
                  <Link href="/book" className="bg-black text-white font-bold rounded-xl py-3.5 text-xs uppercase tracking-widest hover:bg-black/80 transition-colors shadow-md text-center">
                    {service.primaryCta}
                  </Link>
                  <Link href="/contact" className="bg-gray-100 text-black font-bold rounded-xl py-3.5 text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors text-center">
                    Ask a Question
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="bg-white/60 rounded-[32px] p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Related Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="group bg-white rounded-2xl p-6 hover:bg-soft-card-2 transition-colors">
                  <h3 className="font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">{link.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesMap).map((slug) => ({ slug }));
}
