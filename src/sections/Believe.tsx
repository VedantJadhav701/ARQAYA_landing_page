"use client";

import React from "react";
import { motion } from "framer-motion";

const topics = [
  { title: "AI Systems", bg: "bg-gray-200" },
  { title: "Oil & Gas", bg: "bg-gray-300" },
  { title: "Research", bg: "bg-gray-400" },
  { title: "Society Impact", bg: "bg-gray-500" },
  { title: "Innovation", bg: "bg-gray-600" },
];

const Believe = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-mid">
      <div className="px-6 md:px-24 max-w-7xl mx-auto">
        <div className="section-label mb-8">WHAT WE BELIEVE</div>
        <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black max-w-3xl mb-16">
          "We believe in the power of intelligence to transform industries, solve problems, and advance human progress."
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-shrink-0 w-72"
            >
              <div className={`aspect-[4/5] rounded-[16px] mb-4 ${topic.bg} relative overflow-hidden group`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
              <h3 className="font-serif text-[20px] text-text-black mb-2">{topic.title}</h3>
              <button className="text-gold font-sans font-medium text-[14px] flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Believe;
