"use client";

import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    category: "OUR SOLUTIONS",
    title: "From agentic AI to domain-specific models, intelligence is our core.",
    bg: "bg-[#141414]",
  },
  {
    category: "TENETX",
    title: "AI-native drilling intelligence for the oil and gas sector.",
    bg: "bg-[#1B5FA8]",
  },
  {
    category: "TEXFLOW",
    title: "Deterministic typesetting for the global research community.",
    bg: "bg-[#1A7A6E]",
  },
  {
    category: "IMPACT",
    title: "Solving real problems for industries and society across India.",
    bg: "bg-[#B8922A]",
  },
];

const Discover = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="section-label mb-8">DISCOVER ARQAYAA</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black max-w-3xl">
            "We are an AI intelligence company building the systems that make industries smarter, workflows faster, and societies better."
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`editorial-card group ${card.bg}`}
            >
              <div className="editorial-card-overlay group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <span className="font-rajdhani font-bold text-[11px] tracking-widest text-white uppercase">
                  {card.category}
                </span>
                <div>
                  <h3 className="font-serif text-white text-[22px] leading-snug mb-6">
                    {card.title}
                  </h3>
                  <div className="flex justify-end">
                    <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all group-hover:rotate-45">
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover;
