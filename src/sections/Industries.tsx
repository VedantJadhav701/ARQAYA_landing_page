"use client";

import React from "react";
import { motion } from "framer-motion";

const industries = [
  { name: "E-commerce", bg: "bg-gray-800" },
  { name: "Healthcare", bg: "bg-gray-700" },
  { name: "Real Estate", bg: "bg-gray-600" },
  { name: "Legal", bg: "bg-gray-500" },
];

const Industries = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="section-label mb-8">INDUSTRIES WE SERVE</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">
            Designed for High-Impact Industries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`editorial-card group ${industry.bg}`}
            >
              <div className="editorial-card-overlay" />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <span className="font-rajdhani font-bold text-[11px] tracking-widest text-white uppercase">
                  INDUSTRY
                </span>
                <div>
                  <h3 className="font-serif text-white text-[24px] mb-6">
                    {industry.name}
                  </h3>
                  <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all group-hover:rotate-45">
                    <span>→</span>
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

export default Industries;
