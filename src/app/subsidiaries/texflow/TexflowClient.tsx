"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const steps = [
  { icon: "📄", title: "Upload Word", desc: "Drop your .docx manuscript." },
  { icon: "🔍", title: "Extract Structure", desc: "We parse headings, citations & math." },
  { icon: "📋", title: "Select Template", desc: "Choose IEEE, Springer, etc." },
  { icon: "⚙️", title: "Compile", desc: "Deterministic LaTeX generation." },
  { icon: "⬇️", title: "Download PDF", desc: "Ready for submission." },
];

const pricing = [
  { name: "Free", price: "₹0", desc: "Basic single-column templates.", btn: "Get Started Free" },
  { name: "Pay-Per-Paper", price: "₹299", desc: "Per paper. All premium templates.", btn: "Buy Now" },
  { name: "Scholar Term", price: "₹999", desc: "Per year. Unlimited papers.", btn: "Subscribe" },
  { name: "Institutional", price: "Custom", desc: "For universities and labs.", btn: "Contact Sales" },
];

export default function TexflowClient() {
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
      <PageHero
        label="TEXFLOW — RESEARCH TYPESETTING"
        headline="From Word to Publisher-Ready PDF. Instantly."
        image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1920&q=85&fit=crop"
        alt="Academic library with rows of books"
      />

      {/* The Problem */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <motion.div className="lg:w-1/3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label mb-6" style={{ color: "var(--texflow)" }}>
              THE PROBLEM
              <span className="gold-rule" style={{ background: "var(--texflow)" }}></span>
            </div>
            <h2 className="font-serif text-3xl md:text-[36px] leading-tight text-text-black mb-6">Researchers waste weeks on formatting.</h2>
          </motion.div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className="font-sans font-bold text-[18px] text-text-black mb-2">40+ Hours Wasted</h3>
              <p className="font-sans text-text-mid text-[14px]">The average scholar spends weeks wrestling with LaTeX just to meet journal guidelines.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3 className="font-sans font-bold text-[18px] text-text-black mb-2">Generative AI Risk</h3>
              <p className="font-sans text-text-mid text-[14px]">LLMs hallucinate references and alter academic text, making them unsafe for publishing.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h3 className="font-sans font-bold text-[18px] text-text-black mb-2">Manual Agencies</h3>
              <p className="font-sans text-text-mid text-[14px]">Hiring human typesetters is expensive and takes days to return a single draft.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-texflow-light px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label justify-center mb-6" style={{ color: "var(--texflow)" }}>
              HOW IT WORKS
              <span className="gold-rule" style={{ background: "var(--texflow)" }}></span>
            </div>
            <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">100% Deterministic Process</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-between relative">
            <div className="hidden lg:block absolute top-8 left-10 right-10 h-[2px] bg-texflow-primary/20 z-0"></div>
            {steps.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex flex-col items-center text-center z-10 mb-8 lg:mb-0 lg:w-1/5 px-2">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-texflow-primary flex items-center justify-center text-2xl mb-4 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="font-sans font-bold text-[16px] text-text-black mb-2">{step.title}</h3>
                <p className="font-sans text-text-mid text-[13px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="font-sans font-bold text-text-black text-[14px] uppercase tracking-widest mb-6">Supported Publishers</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['IEEE', 'Springer Nature', 'Elsevier', 'ACM', 'MDPI'].map(pub => (
                <span key={pub} className="px-5 py-2 rounded-full bg-white text-texflow-primary font-serif font-bold text-[18px] shadow-sm border border-texflow-primary/10">{pub}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label justify-center mb-6" style={{ color: "var(--texflow)" }}>
              PRICING
              <span className="gold-rule" style={{ background: "var(--texflow)" }}></span>
            </div>
            <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">Simple, Transparent Pricing</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((p, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className={`rounded-xl border ${idx === 2 ? 'border-texflow-primary shadow-lg relative' : 'border-gray-mid shadow-sm'} p-8 bg-white flex flex-col`}>
                {idx === 2 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-texflow-primary text-white font-rajdhani font-bold tracking-widest text-[10px] uppercase px-3 py-1 rounded-full">Most Popular</div>}
                <h3 className="font-sans font-bold text-[18px] text-text-black mb-2">{p.name}</h3>
                <div className="font-serif text-[42px] text-text-black mb-4">{p.price}</div>
                <p className="font-sans text-text-mid text-[14px] mb-8 flex-grow">{p.desc}</p>
                <button className={`w-full py-3 rounded font-rajdhani font-bold tracking-widest uppercase text-[13px] transition-colors ${idx === 2 ? 'bg-texflow-primary text-white hover:bg-texflow-dark' : 'bg-gray-100 text-text-black hover:bg-gray-200'}`}>
                  {p.btn}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-16 bg-cream-dark px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <h3 className="font-serif text-[28px] text-text-black whitespace-nowrap">Strict Data Privacy</h3>
          <div className="flex flex-wrap gap-8 justify-center md:justify-end">
            <div className="flex items-center gap-3">
              <span className="text-texflow-primary">✓</span>
              <span className="font-sans font-bold text-[15px] text-text-black">48hr Auto-Purge</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-texflow-primary">✓</span>
              <span className="font-sans font-bold text-[15px] text-text-black">Zero AI Content Alteration</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-texflow-primary">✓</span>
              <span className="font-sans font-bold text-[15px] text-text-black">Isolated Cloud Servers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-24 bg-white px-6 md:px-24 border-t border-gray-mid">
        <div className="max-w-2xl mx-auto">
          <motion.div className="bg-texflow-light rounded-xl shadow-sm p-10 border border-texflow-primary/20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-[36px] text-text-black text-center mb-2">Join the Waitlist</h2>
            <p className="font-sans text-text-mid text-center mb-10">TEXFLOW is launching soon. Get early access.</p>
            
            {formState === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="font-serif text-2xl text-text-black mb-2">You&apos;re on the list!</h3>
                <p className="font-sans text-text-mid">We&apos;ll notify you as soon as TEXFLOW is available.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Full Name *</label>
                  <input required type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-texflow-primary font-sans bg-white" />
                </div>
                <div>
                  <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Academic Email *</label>
                  <input required type="email" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-texflow-primary font-sans bg-white" />
                </div>
                <div>
                  <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Role</label>
                  <select className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-texflow-primary font-sans bg-white">
                    <option>PhD Scholar</option>
                    <option>Professor / Faculty</option>
                    <option>Independent Researcher</option>
                    <option>University Administration</option>
                  </select>
                </div>
                <button type="submit" disabled={formState === 'loading'} className="w-full bg-texflow-primary text-white font-rajdhani font-bold tracking-widest uppercase py-4 rounded hover:bg-texflow-dark transition-colors disabled:opacity-70 mt-4 flex justify-center items-center">
                  {formState === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : "Join Waitlist"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
