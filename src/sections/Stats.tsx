"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    number: "60%",
    label: "Reduced Manual Workload",
  },
  {
    number: "3×",
    label: "Improved Decision Speed Across Teams",
  },
  {
    number: "100%",
    label: "Data Sovereignty with TENETX",
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-gray-light px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="section-label mb-16">AT A GLANCE</div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="font-serif text-text-black text-[72px] md:text-[96px] font-light leading-none mb-4">
                {stat.number}
              </div>
              <div className="w-full h-[1px] bg-gray-mid mb-4" />
              <div className="font-sans text-text-muted text-[15px] uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
