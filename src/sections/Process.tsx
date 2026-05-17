"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "We analyze your existing workflows and data infrastructure to identify high-impact AI opportunities.",
  },
  {
    title: "Development & Integration",
    desc: "Our engineers build and fine-tune models that are deeply integrated into your production environment.",
  },
  {
    title: "Deployment & Scale",
    desc: "We deploy air-gapped or cloud systems with full monitoring to ensure long-term reliability and ROI.",
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-gray-light px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="section-label mb-8">THE PROCESS</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">
            A Systematic Approach to Production AI
          </h2>
        </div>

        <div className="relative">
          {/* Dash Line */}
          <div className="hidden lg:block absolute top-[52px] left-0 w-full h-[2px] border-t-2 border-dashed border-gold/30" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <div className="w-14 h-14 rounded-full border-2 border-gold bg-gray-light flex items-center justify-center font-serif text-[24px] text-gold mb-8">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-[24px] text-text-black mb-4">{step.title}</h3>
                <p className="font-sans text-text-mid text-[15px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
