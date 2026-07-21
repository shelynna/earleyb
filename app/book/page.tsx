'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';

const serviceOptions = [
  'Personal Tech Help / Training',
  '1-on-1 Tech Help',
  'Home Tech Help',
  'Virtual Tech Support',
  'Scam Detection and Fraud Prevention',
  'EarleyBird TV and Streaming Concierge',
  'Cut the Cord',
  'Smart Home Installs',
  'Computer Repair',
  'Mobile Phone Repair',
  'Assisted Living / HOA Package',
  'Website / Business Support',
] as const;

export default function BookConsultation() {
  const [selectedService, setSelectedService] = useState<string>(serviceOptions[0]);
  const [serviceWasPrefilled, setServiceWasPrefilled] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    orgName: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get('service');

    if (requestedService) {
      queueMicrotask(() => {
        setSelectedService(requestedService);
        setServiceWasPrefilled(true);
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.time) {
      alert('Please pick a time');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
      <section className="pt-[180px] pb-12 px-4 md:px-10 max-w-[1200px] mx-auto text-center">
        <span className="inline-flex text-gray-600 text-xs font-bold uppercase tracking-widest mb-4">
          Direct Scheduling
        </span>
        <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
          Book Your Service.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Choose a date, pick a time, and tell us what is going on. If you came from a service page, your service is already selected.
        </p>
      </section>

      <section className="pb-24 px-4 md:px-10 max-w-[1080px] mx-auto">
        <div className="bg-white rounded-[32px] border border-line/60 p-5 sm:p-7 md:p-10">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-soft-card-2 p-5 lg:col-span-2">
                <label htmlFor="service" className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Service
                </label>
                {serviceWasPrefilled ? (
                  <p className="mt-2 text-xl font-bold text-black">{selectedService}</p>
                ) : (
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="mt-2 w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-black text-sm font-semibold outline-none focus:border-black transition-colors"
                  >
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Date</label>
                <input
                  required
                  type="date"
                  id="date"
                  name="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Time</span>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData((prev) => ({...prev, time}))}
                      className={`h-12 rounded-xl border px-3 text-sm font-bold transition-all ${
                        formData.time === time
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

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
                <label htmlFor="orgName" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company / Facility / HOA</label>
                <input
                  type="text"
                  id="orgName"
                  name="orgName"
                  value={formData.orgName}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                  placeholder="Optional"
                />
              </div>

              <div className="flex flex-col gap-2 lg:col-span-2">
                <label htmlFor="notes" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Notes / Issue</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={5}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors resize-none"
                  placeholder="Tell us what is happening, what device you need help with, or what you want set up."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white hover:bg-black/80 font-bold rounded-xl h-[52px] uppercase tracking-widest text-xs flex items-center justify-center transition-all cursor-pointer disabled:opacity-50 lg:col-span-2"
              >
                {isSubmitting ? 'Booking...' : 'Confirm Booking Request'}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <h2 className="text-3xl font-black text-black mb-3">Booking Request Sent</h2>
              <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
                Your request for <strong className="text-black">{selectedService}</strong> on <strong className="text-black">{formData.date}</strong> at <strong className="text-black">{formData.time}</strong> is ready for EarleyBird review.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="bg-black text-white font-bold rounded-xl px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-black/80 transition-colors shadow-md">
                  View Services
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({date: '', time: '', name: '', email: '', phone: '', orgName: '', notes: ''});
                  }}
                  className="bg-gray-100 text-black font-bold rounded-xl px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors"
                >
                  Book Another
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
