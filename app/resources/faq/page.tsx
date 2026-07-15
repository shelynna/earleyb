'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: ReactNode;
}

interface FAQGroup {
  category: string;
  items: FAQItem[];
}

const faqGroups: FAQGroup[] = [
  {
    category: 'Senior Living Facilities',
    items: [
      {
        question: 'How do you handle resident passwords and privacy?',
        answer: (
          <>
            We have a strict No Storage Policy. EarleyBird never records passwords. We use a Family-Admin Vault model, enable Autofill and Biometrics on the resident device, and support recovery through the family administrator. Learn more on our{' '}
            <Link href="/tech-concierge/password-protocol" className="font-bold text-black underline underline-offset-4">Password Protocol</Link>.
          </>
        ),
      },
      {
        question: 'What is Staff Micro-Training?',
        answer: (
          <>
            Staff Micro-Training is a 10 to 15 minute training session for your staff during each on-site visit. It is included in Standard and Premium plans to improve internal capability and reduce recurring tech interruptions. See{' '}
            <Link href="/tech-concierge/enhanced-premium" className="font-bold text-black underline underline-offset-4">Enhanced &amp; Premium Services</Link>.
          </>
        ),
      },
      {
        question: 'What is included in every Tech Concierge plan?',
        answer: (
          <>
            Every plan includes on-site drop-in support, group training, Scam-Shield, move-in tech onboarding, device hygiene, family connection setup, telehealth readiness, and monthly accountability reporting. Review the full list on{' '}
            <Link href="/tech-concierge/core-services" className="font-bold text-black underline underline-offset-4">Core Services</Link>.
          </>
        ),
      },
    ],
  },
  {
    category: 'Small Businesses',
    items: [
      {
        question: 'What is included in your website service?',
        answer: (
          <>
            We provide professional website design with hosting and ongoing care packages. This includes a brand-consistent, mobile-responsive, SEO-ready site with post-launch maintenance for updates, backups, and minor edits. Explore{' '}
            <Link href="/services/website-design" className="font-bold text-black underline underline-offset-4">Website Design</Link>.
          </>
        ),
      },
      {
        question: 'Can you help my business get found on Google?',
        answer: (
          <>
            Yes. Our SEO campaigns support on-page SEO, metadata, content strategy, local SEO, and Google Business Profile optimization. Start with{' '}
            <Link href="/services/seo-campaigns" className="font-bold text-black underline underline-offset-4">SEO Campaigns</Link>.
          </>
        ),
      },
      {
        question: 'Do you provide ongoing IT support?',
        answer: (
          <>
            Yes. Our Managed IT Services act as a proactive outsourced IT department for small businesses, covering monitoring, cybersecurity, help desk support, device management, and backups. See{' '}
            <Link href="/services/managed-it" className="font-bold text-black underline underline-offset-4">Managed IT Services</Link>.
          </>
        ),
      },
    ],
  },
  {
    category: 'Individuals & Families',
    items: [
      {
        question: 'What is Cut the Cord consulting?',
        answer: (
          <>
            We make cutting the cord easy. Our team researches cost-effective streaming options based on what you watch, helps set everything up at home, and teaches you how to stream confidently. Learn about{' '}
            <Link href="/services/cut-the-cord" className="font-bold text-black underline underline-offset-4">Cut The Cord Consulting</Link>.
          </>
        ),
      },
      {
        question: 'What smart devices do you install?',
        answer: (
          <>
            We install cameras, smart doorbells, smart TVs and smart TV devices, smart lights, Alexas, and more. After every install, our technicians teach you how to use your newly installed smart device. Visit{' '}
            <Link href="/services/smart-home-install" className="font-bold text-black underline underline-offset-4">Smart Home Installation</Link>.
          </>
        ),
      },
      {
        question: 'Can you teach me how to use my phone or computer?',
        answer: (
          <>
            Yes. We offer personalized 1-on-1 training, custom cheat sheets, and take-home guides for smartphones, email, internet safety, social media, and daily device tasks. Start with{' '}
            <Link href="/services/one-on-one-training" className="font-bold text-black underline underline-offset-4">1-on-1 Training</Link>.
          </>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen pb-24">
        <section className="pt-[180px] pb-12 px-4 md:px-10 max-w-[1200px] mx-auto text-center">
          <span className="inline-flex text-gray-600 text-xs font-bold uppercase tracking-widest mb-4">
            Frequently Asked Questions
          </span>
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            FAQs for Facilities, Businesses, and Families
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers about our Tech Concierge Program, password policy, web design services, and in-home technology support.
          </p>
        </section>

        <section className="max-w-[900px] mx-auto px-4">
          <div className="space-y-10">
            {faqGroups.map((group, groupIndex) => (
              <div key={group.category}>
                <h2 className="text-xl md:text-2xl font-bold text-black mb-4">{group.category}</h2>
                <div className="space-y-4">
                  {group.items.map((faq, itemIndex) => {
                    const id = `${groupIndex}-${itemIndex}`;
                    const isOpen = openId === id;

                    return (
                      <div
                        key={faq.question}
                        className="bg-white rounded-2xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(id)}
                          className="w-full p-6 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                        >
                          <span className="font-bold text-black text-sm md:text-base">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-black' : ''}`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 pt-2 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-50">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-[32px] flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">Still Have Questions?</h3>
              <p className="text-gray-500 text-sm">
                Send us a general inquiry or book a consultation for your facility, business, or home.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link href="/contact" className="bg-black text-white hover:bg-black/80 font-bold rounded-xl px-6 py-3 text-xs uppercase tracking-widest shadow-md">
                Contact Us
              </Link>
              <Link href="/book" className="bg-gray-100 text-black hover:bg-gray-200 font-bold rounded-xl px-6 py-3 text-xs uppercase tracking-widest">
                Book Consult
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
