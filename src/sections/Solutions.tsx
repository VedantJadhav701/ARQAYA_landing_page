"use client";

import React from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Agentic AI Systems",
    desc: "Autonomous agents for complex multi-step workflows.",
    accent: "bg-gold",
  },
  {
    title: "Domain-Specific Models",
    desc: "Fine-tuned LLMs on your industry data.",
    accent: "bg-tenetx-primary",
  },
  {
    title: "Intelligent Automation",
    desc: "End-to-end platforms with intelligent logic layers.",
    accent: "bg-texflow-primary",
  },
  {
    title: "Production Monitoring",
    desc: "Real-time AI observability and reliability.",
    accent: "bg-text-black",
  },
];

const Solutions = () => {
  return (
    <section className="py-24 bg-cream-dark px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="section-label mb-8">OUR SOLUTIONS</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">
            We Build AI That Actually Works in Production
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-lg p-10 shadow-sm border border-gray-mid relative group overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-[3px] ${sol.accent}`} />
              <div className="absolute top-8 right-8 font-serif text-[100px] text-black/[0.05] leading-none pointer-events-none">
                0{idx + 1}
              </div>
              
              <h3 className="font-serif text-[28px] text-text-black mb-4 relative z-10">{sol.title}</h3>
              <p className="font-sans text-text-mid text-[16px] mb-8 relative z-10 max-w-xs">{sol.desc}</p>
              
              <button className="text-gold font-rajdhani font-bold tracking-widest text-[12px] uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
