"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const diffs = [
  { title: "100% Air-Gapped", desc: "No cloud dependency. Your data never leaves the rig. Complete data sovereignty." },
  { title: "Physics-Native", desc: "PINN architecture respects physical laws, ensuring predictions are scientifically sound." },
  { title: "Zero Hardware", desc: "Runs on existing SCADA systems without requiring expensive edge compute upgrades." },
  { title: "Cost-Effective", desc: "At ₹0.08 per query, it's a fraction of the cost of legacy cloud-based monitoring solutions." },
];

const useCases = [
  { title: "Stuck Pipe Prediction", desc: "Identify stuck pipe risks hours before they occur, saving millions in NPT." },
  { title: "Kick Detection", desc: "Sub-second anomaly detection for rapid well control and blowout prevention." },
  { title: "ROP Optimization", desc: "Real-time parameter recommendations to maximize Rate of Penetration safely." },
  { title: "Corrosion Analysis", desc: "Predictive maintenance modeling for drill strings and wellbore integrity." },
];

export default function TenetxClient() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <>
      <PageHero
        label="TENETX — OIL & GAS INTELLIGENCE"
        headline="Physics-Native AI for Drilling Operations"
        image="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1920&q=85&fit=crop"
        alt="Offshore oil rig at night"
      />

      {/* The Problem */}
      <section className="py-24 bg-white px-6 md:px-24 border-t-4 border-tenetx-primary">
        <div className="max-w-7xl mx-auto text-center">
          <div className="section-label justify-center mb-16" style={{ color: "var(--tenetx)" }}>
            THE CHALLENGE
            <span className="gold-rule" style={{ background: "var(--tenetx)" }}></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="font-serif text-[72px] text-text-black leading-none mb-4">30<span className="text-4xl">%</span></div>
              <p className="font-sans font-bold text-[18px] text-text-black">Non-Productive Time (NPT)</p>
              <p className="font-sans text-text-mid text-[14px] mt-2">caused by unforeseen drilling anomalies.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="font-serif text-[72px] text-text-black leading-none mb-4"><span className="text-4xl">₹</span>4<span className="text-4xl">Cr</span></div>
              <p className="font-sans font-bold text-[18px] text-text-black">Average Incident Cost</p>
              <p className="font-sans text-text-mid text-[14px] mt-2">per major stuck pipe or kick event.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="font-serif text-[72px] text-text-black leading-none mb-4">1-5<span className="text-4xl">%</span></div>
              <p className="font-sans font-bold text-[18px] text-text-black">Standard AI Error Rate</p>
              <p className="font-sans text-text-mid text-[14px] mt-2">Too high for mission-critical operations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution Architecture */}
      <section className="py-24 bg-tenetx-light px-6 md:px-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="section-label mb-8" style={{ color: "var(--tenetx)" }}>
                THE SOLUTION
                <span className="gold-rule" style={{ background: "var(--tenetx)" }}></span>
              </div>
              <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-6">The TENETFlow Pipeline</h2>
              <p className="font-sans text-text-dark text-[17px] leading-relaxed mb-8">
                TENETX replaces standard black-box AI with a Physics-Informed Neural Network (PINN) architecture. It constrains machine learning predictions within the bounds of physical laws (thermodynamics, fluid mechanics), driving error rates below 0.5%.
              </p>
              <div className="space-y-4 font-sans text-[15px] font-medium text-text-black">
                <div className="flex items-center gap-4"><span className="w-8 h-8 rounded bg-white text-tenetx-primary flex items-center justify-center font-bold shadow-sm">1</span> Sensor Data Ingestion (WITSML)</div>
                <div className="flex items-center gap-4"><span className="w-8 h-8 rounded bg-white text-tenetx-primary flex items-center justify-center font-bold shadow-sm">2</span> Preprocessing & Normalization</div>
                <div className="flex items-center gap-4"><span className="w-8 h-8 rounded bg-white text-tenetx-primary flex items-center justify-center font-bold shadow-sm">3</span> Parallel Inference (PINN + SLM)</div>
                <div className="flex items-center gap-4"><span className="w-8 h-8 rounded bg-white text-tenetx-primary flex items-center justify-center font-bold shadow-sm">4</span> Weighted Ensemble Fusion</div>
                <div className="flex items-center gap-4"><span className="w-8 h-8 rounded bg-white text-tenetx-primary flex items-center justify-center font-bold shadow-sm">5</span> Prediction + Uncertainty Bounds</div>
              </div>
            </motion.div>
            <motion.div className="lg:w-1/2 w-full" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-tenetx-primary/10">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=85&fit=crop" alt="Control Room" className="w-full h-auto rounded-lg mb-4" />
                <div className="text-center">
                  <div className="font-rajdhani font-bold text-tenetx-primary text-[12px] tracking-widest uppercase">Live Telemetry</div>
                  <div className="font-serif text-[24px]">Sub-second Latency</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentiators & Use Cases */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diffs.map((d, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white border border-gray-mid p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-2 border-t-tenetx-primary">
                <h3 className="font-sans font-bold text-[18px] text-text-black mb-3">{d.title}</h3>
                <p className="font-sans text-text-mid text-[14px] leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-8" style={{ color: "var(--tenetx)" }}>
            APPLICATIONS
            <span className="gold-rule" style={{ background: "var(--tenetx)" }}></span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {useCases.map((u, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded bg-tenetx-light text-tenetx-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div>
                  <h4 className="font-serif text-[22px] text-text-black mb-2">{u.title}</h4>
                  <p className="font-sans text-text-mid text-[15px] leading-relaxed">{u.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-gray-light px-6 md:px-24 border-t border-gray-mid">
        <div className="max-w-3xl mx-auto">
          <motion.div className="bg-white rounded-xl shadow-lg p-10 border border-gray-mid" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-[36px] text-text-black text-center mb-2">Request a TENETX Demo</h2>
            <p className="font-sans text-text-mid text-center mb-10">See how our physics-native AI can optimize your drilling operations.</p>
            
            {formState === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="font-serif text-2xl text-text-black mb-2">Request Received</h3>
                <p className="font-sans text-text-mid">Our engineering team will contact you within 24 hours.</p>
                <button onClick={() => setFormState('idle')} className="mt-8 text-tenetx-primary hover:underline font-sans text-sm">Submit another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-text-black mb-2">First Name *</label>
                    <input required type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-tenetx-primary font-sans" />
                  </div>
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Last Name *</label>
                    <input required type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-tenetx-primary font-sans" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Company Email *</label>
                    <input required type="email" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-tenetx-primary font-sans" />
                  </div>
                  <div>
                    <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Company Name *</label>
                    <input required type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-tenetx-primary font-sans" />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-tenetx-primary font-sans resize-none"></textarea>
                </div>
                <button type="submit" disabled={formState === 'loading'} className="w-full bg-tenetx-primary text-white font-rajdhani font-bold tracking-widest uppercase py-4 rounded hover:bg-tenetx-dark transition-colors disabled:opacity-70 flex justify-center items-center">
                  {formState === 'loading' ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : "Submit Request"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
