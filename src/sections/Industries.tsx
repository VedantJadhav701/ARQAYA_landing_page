"use client";

import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    name: "E-commerce",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=85&fit=crop",
    alt: "E-commerce shopping technology and logistics warehouse",
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=85&fit=crop",
    alt: "Healthcare hospital AI medical technology equipment",
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=85&fit=crop",
    alt: "Real estate modern architecture property building",
  },
  {
    name: "Legal",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=85&fit=crop",
    alt: "Legal law court documents and professional gavel",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-white px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label mb-8">INDUSTRIES WE SERVE</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">
            Designed for High-Impact Industries
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.5 }}
              className="editorial-card group"
            >
              {/* Background Image */}
              <img
                src={industry.image}
                alt={industry.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 transition-all duration-300 group-hover:from-black/60" />

              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <span className="font-rajdhani font-bold text-[11px] tracking-widest text-white uppercase">
                  INDUSTRY
                </span>
                <div>
                  <h3 className="font-serif text-white text-[24px] mb-6">
                    {industry.name}
                  </h3>
                  <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-200 group-hover:rotate-45">
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
