"use client";

import React from "react";
import { motion } from "framer-motion";

const topics = [
  {
    title: "AI Systems",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=560&q=85&fit=crop",
    alt: "Robot AI system with advanced technology interface",
  },
  {
    title: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1570126646281-5ec88111777f?w=560&q=85&fit=crop",
    alt: "Oil and gas pipeline operations with industrial workers",
  },
  {
    title: "Research",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=560&q=85&fit=crop",
    alt: "PhD researcher student working in university laboratory",
  },
  {
    title: "Society Impact",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=560&q=85&fit=crop",
    alt: "Community helping society in rural India setting",
  },
  {
    title: "Innovation",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=560&q=85&fit=crop",
    alt: "Innovation future technology with globe and digital network",
  },
];

const Believe = () => {
  return (
    <section id="believe" className="py-24 bg-white border-t border-gray-mid">
      <div className="px-6 md:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label mb-8">WHAT WE BELIEVE</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black max-w-3xl mb-16">
            &ldquo;We believe in the power of intelligence to transform industries, solve problems, and advance human progress.&rdquo;
          </h2>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-8 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {topics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-72 group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-[16px] mb-4 relative overflow-hidden">
                <img
                  src={topic.image}
                  alt={topic.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-[20px] text-text-black mb-2">{topic.title}</h3>
              <button className="text-gold font-sans font-medium text-[14px] flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                Learn more <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Believe;
