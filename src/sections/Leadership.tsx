"use client";

import React from "react";
import { motion } from "framer-motion";

const members = [
  {
    name: "Neel Khairnar",
    role: "FOUNDER",
    bio: "AI systems architecture and petroleum engineering specialist.",
    avatar: "https://ui-avatars.com/api/?name=Neel+Khairnar&size=400&background=C9A84C&color=fff&bold=true&font-size=0.33",
    initials: "NK",
    accentColor: "#C9A84C",
  },
  {
    name: "Vedant Jadhav",
    role: "CO-FOUNDER",
    bio: "Lead developer and expert in deterministic research platforms.",
    avatar: "https://ui-avatars.com/api/?name=Vedant+Jadhav&size=400&background=1B5FA8&color=fff&bold=true&font-size=0.33",
    initials: "VJ",
    accentColor: "#1B5FA8",
  },
  {
    name: "Pritam Lalvani",
    role: "DIRECTOR, STRATEGIC LEAD",
    bio: "Strategic growth and enterprise industrial integration.",
    avatar: "https://ui-avatars.com/api/?name=Pritam+Lalvani&size=400&background=1A7A6E&color=fff&bold=true&font-size=0.33",
    initials: "PL",
    accentColor: "#1A7A6E",
  },
  {
    name: "Dr. Bharat Kale",
    role: "DIRECTOR, ADVISOR",
    bio: "Academic lead and senior technical advisory board.",
    avatar: "https://ui-avatars.com/api/?name=Bharat+Kale&size=400&background=2C2C2C&color=fff&bold=true&font-size=0.33",
    initials: "BK",
    accentColor: "#2C2C2C",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-gray-light px-6 md:px-24 border-t border-gray-mid">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label mb-8">OUR LEADERSHIP</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-6">
            The Team Behind ARQAYAA
          </h2>
          <p className="font-sans text-text-mid text-[17px] max-w-2xl">
            Our founding team brings expertise across AI systems, petroleum engineering, academic research, and strategic leadership.
          </p>
        </motion.div>

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
              {/* Photo Area */}
              <div className="aspect-square relative overflow-hidden" style={{ backgroundColor: member.accentColor + '15' }}>
                <img
                  src={member.avatar}
                  alt={`${member.name} — ${member.role} at ARQAYAA Intelligence`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                {/* "Photo coming soon" overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-center">
                    <span className="font-rajdhani font-bold text-[9px] tracking-[0.15em] text-text-muted uppercase">
                      Photo coming soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="font-rajdhani font-bold text-[11px] tracking-widest uppercase mb-2" style={{ color: member.accentColor }}>
                  {member.role}
                </div>
                <h3 className="font-serif text-[22px] text-text-black mb-2">{member.name}</h3>
                <p className="font-sans text-text-muted text-[14px] mb-6 line-clamp-2">{member.bio}</p>
                <button className="text-gold font-sans font-medium text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
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
