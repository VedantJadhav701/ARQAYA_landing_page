"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactClient() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <>
      <div className="pt-[100px]"></div>

      <section className="py-12 md:py-24 bg-cream px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Form Side */}
          <motion.div className="lg:w-[60%]" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label mb-8">GET IN TOUCH</div>
            <h1 className="font-serif text-4xl md:text-[52px] leading-tight text-text-black mb-10">
              Let&apos;s Build Something Powerful Together.
            </h1>

            {formState === 'success' ? (
              <div className="bg-white p-12 rounded-xl border border-gold/30 shadow-sm text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="font-serif text-[32px] text-text-black mb-4">Message Sent</h3>
                <p className="font-sans text-text-mid text-[16px] mb-8">Thank you for contacting Dpulseai. We will review your inquiry and respond within 24 hours.</p>
                <button onClick={() => setFormState('idle')} className="text-gold font-bold hover:underline font-sans">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-xl border border-gray-mid shadow-sm space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-text-black mb-2">First Name *</label>
                    <input required type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gold font-sans" />
                  </div>
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Last Name *</label>
                    <input required type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gold font-sans" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Email Address *</label>
                    <input required type="email" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gold font-sans" />
                  </div>
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Phone Number</label>
                    <input type="tel" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gold font-sans" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Company</label>
                    <input type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gold font-sans" />
                  </div>
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Subject *</label>
                    <select required className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gold font-sans bg-white">
                      <option value="">Select a topic...</option>
                      <option value="general">General Inquiry</option>
                      <option value="tenetx">TENETX — Oil & Gas AI</option>
                      <option value="texflow">TEXFLOW — Research Platform</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Message *</label>
                  <textarea required rows={6} minLength={20} className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-gold font-sans resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" disabled={formState === 'loading'} className="w-full bg-gold text-white font-rajdhani font-bold tracking-widest uppercase py-4 rounded hover:bg-gold-light transition-colors flex justify-center items-center mt-4">
                  {formState === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info Side */}
          <motion.div className="lg:w-[40%]" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-white rounded-xl border border-gray-mid p-8 md:p-12 shadow-sm mb-8">
              <h3 className="font-serif text-[28px] text-text-black mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[13px] text-text-muted uppercase tracking-wider mb-1">Email</div>
                    <a href="mailto:info@dpulseai.com" className="font-sans text-[16px] text-text-black hover:text-gold transition-colors font-medium">info@dpulseai.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[13px] text-text-muted uppercase tracking-wider mb-1">Location</div>
                    <p className="font-sans text-[16px] text-text-black font-medium">India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[13px] text-text-muted uppercase tracking-wider mb-1">Response Time</div>
                    <p className="font-sans text-[16px] text-text-black font-medium">Within 24 business hours</p>
                  </div>
                </div>
              </div>

              <hr className="my-8 border-gray-mid" />
              
              <div className="space-y-4">
                <Link href="/subsidiaries/tenetx" className="block w-full text-center border border-tenetx-primary text-tenetx-primary font-sans font-bold py-3 rounded hover:bg-tenetx-primary hover:text-white transition-colors">
                  TENETX Inquiries →
                </Link>
                <Link href="/subsidiaries/texflow" className="block w-full text-center border border-texflow-primary text-texflow-primary font-sans font-bold py-3 rounded hover:bg-texflow-primary hover:text-white transition-colors">
                  TEXFLOW Inquiries →
                </Link>
              </div>

              <hr className="my-8 border-gray-mid" />

              <a href="https://dpulseai.vercel.app/book-call" target="_blank" rel="noopener noreferrer" className="block w-full bg-black text-white text-center font-rajdhani font-bold tracking-widest uppercase py-4 rounded hover:bg-gold transition-colors">
                Book A Free Call
              </a>
            </div>

            <div className="text-center py-6 border-y border-gold/20">
              <p className="font-sans text-text-mid text-[14px]">Headquartered in India | Serving clients globally</p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
