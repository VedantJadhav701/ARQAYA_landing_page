"use client";

import React from "react";
import { motion } from "framer-motion";

const members = [
  {
    name: "Neel Khairnar",
    role: "FOUNDER",
    bio: "AI systems architecture and petroleum engineering specialist.",
  },
  {
    name: "Vedant Jadhav",
    role: "CO-FOUNDER",
    bio: "Lead developer and expert in deterministic research platforms.",
  },
  {
    name: "Pritam Lalvani",
    role: "DIRECTOR, STRATEGIC LEAD",
    bio: "Strategic growth and enterprise industrial integration.",
  },
  {
    name: "Dr. Bharat Kale",
    role: "DIRECTOR, ADVISOR",
    bio: "Academic lead and senior technical advisory board.",
  },
];

const Leadership = () => {
  return (
    <section className="py-24 bg-gray-light px-6 md:px-24 border-t border-gray-mid">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="section-label mb-8">OUR LEADERSHIP</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-6">
            The Team Behind ARQAYAA
          </h2>
          <p className="font-sans text-text-mid text-[17px] max-w-2xl">
            Our founding team brings expertise across AI systems, petroleum engineering, academic research, and strategic leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                {/* Photo Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-24 h-24 border-2 border-gold rounded-full" />
                </div>
              </div>
              <div className="p-6">
                <div className="font-rajdhani font-bold text-[11px] text-gold tracking-widest uppercase mb-2">
                  {member.role}
                </div>
                <h3 className="font-serif text-[22px] text-text-black mb-2">{member.name}</h3>
                <p className="font-sans text-text-muted text-[14px] mb-6 line-clamp-2">{member.bio}</p>
                <button className="text-gold font-sans font-medium text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read more <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
