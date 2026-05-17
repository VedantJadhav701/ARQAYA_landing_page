"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Tenetx = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-24 relative overflow-hidden">
      {/* Subtle Background Image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1600&q=85&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.05,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col md:flex-row gap-4 items-baseline mb-12 border-t-[3px] border-tenetx-primary pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bebas text-[48px] text-tenetx-primary tracking-tight">TENETX</h2>
          <span className="font-rajdhani font-bold text-[11px] tracking-widest text-text-muted uppercase">
            SUBSIDIARY · OIL & GAS INTELLIGENCE
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-8">
                Physics-Native AI for Drilling Operations
              </h3>
              <p className="font-sans text-text-mid text-[17px] mb-8 leading-relaxed">
                Our flagship industrial intelligence platform designed for the most demanding environments.
                TENETX brings the power of Agentic AI and Physics-Informed Neural Networks to the edge,
                ensuring real-time optimization without cloud dependency.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "100% Air-Gapped — Data never leaves the rig",
                  "Error rate below 0.5% (vs 1–5% industry standard)",
                  "Cost: ₹0.08/query vs ₹4–8 conventional systems",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-tenetx-primary/10 p-1 rounded-full flex-shrink-0">
                      <Check size={14} className="text-tenetx-primary" />
                    </div>
                    <span className="font-sans text-text-dark font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-4 text-tenetx-primary font-rajdhani font-bold tracking-widest uppercase group border border-tenetx-primary px-8 py-4 rounded-full hover:bg-tenetx-primary hover:text-white transition-all cursor-pointer">
                Explore TENETX
                <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                  →
                </div>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Feature Card + Image */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Feature Image */}
              <div className="rounded-[16px] overflow-hidden mb-6 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&fit=crop"
                  alt="Offshore oil rig and drilling platform at sunset with industrial infrastructure"
                  loading="lazy"
                  className="w-full h-64 object-cover object-center"
                />
              </div>

              {/* Pipeline Card */}
              <div className="bg-tenetx-light rounded-[16px] p-8 md:p-12 shadow-sm border border-tenetx-primary/10">
                <h4 className="font-serif text-[24px] text-text-black mb-8">The TENETFlow Model</h4>
                <div className="space-y-6 mb-10">
                  {[
                    "Sensor Data Ingestion",
                    "Preprocessing & Normalization",
                    "Parallel Model Inference (PINN + SLM + Tree-based)",
                    "Weighted Ensemble Fusion",
                    "Final Prediction + Uncertainty Bounds",
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-6 border-b border-tenetx-primary/10 pb-4">
                      <span className="font-serif text-tenetx-primary text-[20px] opacity-40">0{idx + 1}</span>
                      <span className="font-sans text-text-dark font-medium">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-8 pt-4">
                  <div>
                    <div className="font-rajdhani font-bold text-[11px] text-text-muted tracking-widest uppercase mb-1">LATENCY</div>
                    <div className="font-serif text-[20px] text-text-black">Sub-second</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Key Facts Strip */}
        <motion.div
          className="mt-16 bg-tenetx-light py-8 px-12 rounded-[12px] flex flex-wrap justify-between gap-8 border border-tenetx-primary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            "7–8B Parameters",
            "Offline Deployment",
            "SCADA + IoT Integration",
            "AES-256 Security",
          ].map((fact, idx) => (
            <div key={idx} className="font-rajdhani font-bold text-[12px] tracking-[0.15em] text-tenetx-primary uppercase">
              {fact}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tenetx;
