'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

export default function BookConsultation() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('Senior Living Facility Consultation');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', email: '', orgName: '', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = ['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM'];

  const handleNextStep = () => {
    if (step === 1 && !selectedDate) {
      alert('Please select a date');
      return;
    }
    if (step === 2 && !selectedTime) {
      alert('Please select a time slot');
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4);
    }, 1500);
  };

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <main className="w-full overflow-hidden bg-[#FAFAFA] min-h-screen">
        <section className="pt-[180px] pb-12 px-4 md:px-10 max-w-[1200px] mx-auto text-center">
          <span className="inline-flex text-gray-600 text-xs font-bold uppercase tracking-widest mb-4">
            Direct Scheduling
          </span>
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-tighter text-balance max-w-4xl mb-6 text-black">
            Schedule Your Service.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Use the tool below to book your appointment. Select the service you are interested in to get started.
          </p>
        </section>

        <section className="pb-24 px-4 md:px-10 max-w-[800px] mx-auto">
          {/* Progress Indicator */}
          {step < 4 && (
            <div className="flex justify-between items-center mb-10 text-xs font-bold uppercase tracking-wider text-gray-400">
              <span className={step >= 1 ? 'text-black' : ''}>1. Select Date</span>
              <div className="h-px bg-gray-200 flex-grow mx-4"></div>
              <span className={step >= 2 ? 'text-black' : ''}>2. Pick Time</span>
              <div className="h-px bg-gray-200 flex-grow mx-4"></div>
              <span className={step >= 3 ? 'text-black' : ''}>3. Enter Info</span>
            </div>
          )}

          <div className="bg-white rounded-[32px] p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* Step 1: Select Service & Date */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black">Select Consultation Category</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        'Senior Living Facility Consultation',
                        'Small Business Consultation',
                        'Book Personal Tech Help',
                      ].map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`p-4 rounded-2xl border text-sm font-bold text-left transition-all cursor-pointer ${selectedService === service ? 'border-black bg-black text-white shadow-md' : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400'}`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h3 className="text-2xl font-bold text-black">Select a Date</h3>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                    />
                  </div>

                  <button
                    onClick={handleNextStep}
                    className="w-full bg-black text-white hover:bg-black/80 font-bold rounded-xl h-[48px] uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Continue to Time Slots</span>
                  </button>
                </motion.div>
              )}

              {/* Step 2: Pick Time */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black">Select Time Slot for {selectedDate}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-4 rounded-xl border text-sm font-semibold text-center transition-all cursor-pointer ${selectedTime === time ? 'border-black bg-black text-white shadow-md' : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400'}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 border-t border-gray-100">
                    <button
                      onClick={handlePrevStep}
                      className="w-1/3 bg-gray-100 text-black hover:bg-gray-200 font-bold rounded-xl h-[48px] uppercase tracking-widest text-xs transition-all cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="w-2/3 bg-black text-white hover:bg-black/80 font-bold rounded-xl h-[48px] uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Continue to Details</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Enter User Details */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form onSubmit={handleBook} className="space-y-6">
                    <h3 className="text-2xl font-bold text-black">Enter Your Information</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Name</label>
                        <input
                          required
                          type="text"
                          id="name"
                          name="name"
                          value={userInfo.name}
                          onChange={handleUserInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Your Email</label>
                        <input
                          required
                          type="email"
                          id="email"
                          name="email"
                          value={userInfo.email}
                          onChange={handleUserInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="orgName" className="text-xs font-bold text-gray-500 uppercase tracking-wider">Company / Facility Name (Optional)</label>
                      <input
                        type="text"
                        id="orgName"
                        name="orgName"
                        value={userInfo.orgName}
                        onChange={handleUserInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors"
                        placeholder="Sunrise Senior Living / Vanguard Co."
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="notes" className="text-xs font-bold text-gray-500 uppercase tracking-wider">What specific questions do you have? (Optional)</label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={userInfo.notes}
                        onChange={handleUserInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black text-sm outline-none focus:bg-white focus:border-black transition-colors resize-none"
                        placeholder="Let us know any details..."
                      />
                    </div>

                    <div className="p-4 bg-gray-50 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border border-gray-150">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Consultation Schedule</span>
                        <p className="text-black font-semibold text-sm">{selectedService}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-black font-bold text-sm">{selectedDate}</p>
                        <p className="text-gray-500 font-semibold text-xs">{selectedTime}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-gray-100">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="w-1/3 bg-gray-100 text-black hover:bg-gray-200 font-bold rounded-xl h-[48px] uppercase tracking-widest text-xs transition-all cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-2/3 bg-black text-white hover:bg-black/80 font-bold rounded-xl h-[48px] uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Booking...</span>
                        ) : (
                          <>
                            <span>Confirm &amp; Book</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 4: Success Screen */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <h3 className="text-3xl font-black text-black mb-2">Consultation Booked!</h3>
                  <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
                    Your appointment for the <strong className="text-black">{selectedService}</strong> on <strong className="text-black">{selectedDate}</strong> at <strong className="text-black">{selectedTime}</strong> has been successfully registered. We have sent a calendar invitation and a Zoom confirmation link to your email.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/" className="bg-black text-white font-bold rounded-xl px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-black/80 transition-colors shadow-md">
                      Go to Home
                    </Link>
                    <button
                      onClick={() => {
                        setStep(1);
                        setSelectedDate('');
                        setSelectedTime('');
                        setUserInfo({ name: '', email: '', orgName: '', notes: '' });
                      }}
                      className="bg-gray-100 text-black font-bold rounded-xl px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors"
                    >
                      Book Another
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  );
}
