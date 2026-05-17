"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const industries = [
  {
    id: "ecommerce",
    title: "E-Commerce & Logistics",
    img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=1200&q=85&fit=crop",
    desc: "Predictive supply chain modeling, autonomous customer support agents, and dynamic pricing engines that adapt to real-time market conditions.",
    bullets: ["Supply chain optimization models", "Autonomous customer support agents", "Dynamic pricing engines"],
    color: "var(--gold)"
  },
  {
    id: "healthcare",
    title: "Healthcare & MedTech",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=85&fit=crop",
    desc: "Secure, HIPAA/HIPAA-compliant AI systems for patient data analysis, medical imaging pre-screening, and automated clinical documentation.",
    bullets: ["Patient data analysis", "Medical transcription AI", "Clinical trial matching"],
    color: "var(--tenetx)"
  },
  {
    id: "realestate",
    title: "Real Estate",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=85&fit=crop",
    desc: "Automated property valuation models using geospatial data, AI-driven lead qualification, and intelligent lease abstraction tools.",
    bullets: ["Lead qualification AI", "Property valuation models", "Automated contract analysis"],
    color: "var(--texflow)"
  },
  {
    id: "legal",
    title: "Legal & Compliance",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85&fit=crop",
    desc: "Accelerate discovery with deterministic document review, contract lifecycle automation, and regulatory compliance monitoring.",
    bullets: ["Document review automation", "Legal research AI", "Compliance monitoring"],
    color: "var(--text-black)"
  }
];

export default function IndustriesClient() {
  return (
    <>
      <PageHero
        label="INDUSTRIES WE SERVE"
        headline="Designed for High-Impact Sectors"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85&fit=crop"
        alt="Modern architecture glass building"
      />

      <div className="bg-white">
        {industries.map((ind, idx) => (
          <section key={ind.id} id={ind.id} className={`py-24 px-6 md:px-24 ${idx % 2 !== 0 ? 'bg-cream-dark' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <motion.div 
                className={`lg:w-1/2 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-1 mb-8" style={{ backgroundColor: ind.color }}></div>
                <h2 className="font-serif text-[42px] leading-tight text-text-black mb-6">{ind.title}</h2>
                <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
                  {ind.desc}
                </p>
                <div className="space-y-4 mb-10">
                  {ind.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ind.color }}></div>
                      <span className="font-sans font-medium text-text-black">{b}</span>
                    </div>
                  ))}
                </div>
                <Link href={`/contact?subject=${ind.id}`} className="inline-flex items-center gap-2 font-rajdhani font-bold tracking-[0.15em] text-[14px] uppercase border px-6 py-3 rounded hover:opacity-80 transition-opacity" style={{ color: ind.color, borderColor: ind.color }}>
                  Talk to an Expert <span>→</span>
                </Link>
              </motion.div>
              <motion.div 
                className={`lg:w-1/2 w-full ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
                  <img src={ind.img} alt={ind.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
