'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {PageImageSection} from '@/components/PageImageSection';
import {businessHours, contactInfo, socialLinks} from '@/lib/site-config';
import {siteImages} from '@/lib/site-images';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Facility Admin',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', category: 'Facility Admin', message: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        <section className="pt-[180px] pb-12 px-4 md:px-10 max-w-[1200px] mx-auto text-center">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            Get in Touch.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Contact EarleyBird for facility programs, business technology work, personal tech support, or general inquiries.
          </p>
        </section>

        <PageImageSection
          image={siteImages.pages.contact}
          eyebrow="Responsive support"
          title="Start the conversation with the right details."
          body="Whether the need is facility support, business technology, or personal tech help, the contact form gives EarleyBird the context to respond clearly."
        />

        <section className="pb-24 px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-black">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  Call us, send an email, or fill out the form. We look forward to hearing from you.
                </p>

                <div className="space-y-6 pt-6">
                  <div className="flex gap-4 items-center">
                    <Phone className="w-5 h-5 text-gray-500 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Phone</p>
                      <a href={contactInfo.phoneHref} className="text-black font-semibold text-lg hover:text-blue-600 transition-colors">{contactInfo.phoneDisplay}</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <Mail className="w-5 h-5 text-gray-500 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email</p>
                      <a href={contactInfo.emailHref} className="text-black font-semibold text-lg hover:text-indigo-600 transition-colors">{contactInfo.emailDisplay}</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center">
                    <MapPin className="w-5 h-5 text-gray-500 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Google Business Profile</p>
                      <a href={contactInfo.googleBusinessHref} className="text-black font-semibold hover:text-purple-600 transition-colors">View EarleyBird online</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-soft-card-2 rounded-2xl">
                <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Hours</h2>
                <div className="space-y-2">
                  {businessHours.map((item) => (
                    <div key={item.day} className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-bold text-black">{item.day}</span>
                      <span className="text-gray-600">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4">Social &amp; Business Links</h2>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((link) => (
                    <a key={link.id} href={link.href} className="bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors text-center">
                      {link.label}
                    </a>
                  ))}
                  <a href={contactInfo.emailHref} className="bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors text-center">
                    Email
                  </a>
                  <a href={contactInfo.phoneHref} className="bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors text-center">
                    Call
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[32px]">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="contact-form"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Name</label>
                        <input
                          required
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                        <input
                          required
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="category" className="text-xs font-bold text-gray-500 uppercase tracking-wider">I am a...</label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                        >
                          <option value="Facility Admin">Facility Admin</option>
                          <option value="Business Owner">Business Owner</option>
                          <option value="Individual">Individual</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                      <textarea
                        required
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors resize-none"
                        placeholder="Tell us about your needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black text-white hover:bg-black/80 font-bold rounded-xl h-[48px] uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <h3 className="text-2xl font-bold text-black mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-500 max-w-md mb-8">
                      Thank you for contacting EarleyBird. One of our technology coordination specialists will review your message and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-black font-bold border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors uppercase tracking-wider text-xs"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
