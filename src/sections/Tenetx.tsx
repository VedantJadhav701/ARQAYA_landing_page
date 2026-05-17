"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const Tenetx = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-24 relative overflow-hidden">
      {/* Subtle Background Image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(https://www.sterlingtt.com/wp-content/themes/yootheme/cache/61/oil-rig-61463d65.jpeg)",
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

              <Link href="/subsidiaries/tenetx" className="inline-flex items-center gap-4 text-tenetx-primary font-rajdhani font-bold tracking-widest uppercase group border border-tenetx-primary px-8 py-4 rounded-full hover:bg-tenetx-primary hover:text-white transition-all cursor-pointer">
                Explore TENETX
                <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                  →
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Feature Image */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Feature Image */}
              <div className="rounded-[16px] overflow-hidden shadow-2xl">
                <img
                  src="https://www.sterlingtt.com/wp-content/themes/yootheme/cache/61/oil-rig-61463d65.jpeg"
                  alt="Offshore oil rig and drilling platform at sunset with industrial infrastructure"
                  loading="lazy"
                  className="w-full h-full object-cover object-center aspect-video lg:aspect-square max-h-[500px]"
                />
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
