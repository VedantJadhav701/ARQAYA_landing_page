"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const solutions = [
  {
    title: "Agentic AI Systems",
    desc: "Autonomous agents designed for complex, multi-step workflows. Our systems can plan, execute, and self-correct across entire business processes.",
    details: ["Goal-oriented planning", "Multi-tool orchestration", "Self-healing pipelines"],
    color: "#B8922A"
  },
  {
    title: "Domain-Specific Models",
    desc: "Fine-tuned LLMs trained on your proprietary industry data. We build models that understand your specific domain context and technical terminology.",
    details: ["Dataset curation & cleaning", "LoRA/QLoRA fine-tuning", "Bias mitigation"],
    color: "#1B5FA8"
  },
  {
    title: "Intelligent Automation",
    desc: "End-to-end platforms with intelligent logic layers. We go beyond RPA by building systems that reason, adapt, and learn from every interaction.",
    details: ["Logic-driven workflows", "Adaptive decisioning", "System-wide integration"],
    color: "#1A7A6E"
  },
  {
    title: "Production Monitoring",
    desc: "Real-time AI observability and reliability. We deploy with full telemetry, self-healing capabilities, and human-in-the-loop safeguards.",
    details: ["Drift detection", "Uncertainty quantification", "Automated rollbacks"],
    color: "#141414"
  }
];

const diffs = [
  { title: "Production-First Mindset", desc: "We build for reality, not for demos. Reliability is our baseline." },
  { title: "Domain Intelligence", desc: "Expertise in deep industrial sectors ensures our AI understands the context." },
  { title: "Seamless Integration", desc: "Our systems plug into your existing stack without friction." },
  { title: "Agentic Logic", desc: "Moving beyond simple chatbots to autonomous agents that execute tasks." },
];

export default function WhatWeDoClient() {
  return (
    <>
      <PageHero
        label="WHAT WE DO"
        headline="Production-Grade AI Systems"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=85&fit=crop"
        alt="Advanced data analytics and AI systems"
      />

      {/* Solutions Grid */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="section-label mb-8">OUR SOLUTIONS</div>
            <h2 className="font-serif text-[42px] leading-tight text-text-black max-w-3xl">
              Building the intelligent infrastructure of the modern enterprise.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="h-1 w-20 mb-8 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: sol.color }}></div>
                <h3 className="font-serif text-[32px] text-text-black mb-6">{sol.title}</h3>
                <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
                  {sol.desc}
                </p>
                <div className="space-y-3">
                  {sol.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sol.color }}></div>
                      <span className="font-sans font-medium text-text-black text-[15px]">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dpulseai */}
      <section className="py-24 bg-cream px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-[55%]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="section-label mb-8">WHY DPULSEAI?</div>
              <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-12">Designed for Reliability at Scale</h2>
            </motion.div>
            <div className="space-y-8">
              {diffs.map((d, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="flex gap-4">
                  <div className="w-6 h-[2px] bg-gold mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-sans font-bold text-[18px] text-text-black mb-2">{d.title}</h3>
                    <p className="font-sans text-text-mid text-[15px] leading-relaxed">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-[45%] flex items-center">
            <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-mid">
               <blockquote className="font-serif italic text-[24px] md:text-[28px] text-text-black leading-tight mb-8">
                 &ldquo;The difference between a demo and a deployment is reliability. We focus on the latter.&rdquo;
               </blockquote>
               <div className="font-rajdhani font-bold text-[11px] text-gold tracking-widest uppercase">THE DPULSEAI PHILOSOPHY</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-dark border-t border-gold/20 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-10" />
          <h2 className="font-serif text-4xl md:text-[52px] leading-tight text-text-black mb-6">Ready to Get Started?</h2>
          <p className="font-sans text-text-muted text-[18px] mb-12">Let&apos;s discuss how AI can transform your operations.</p>
          <a href="https://dpulseai.vercel.app/book-call" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">Book A Free Call</a>
        </motion.div>
      </section>
    </>
  );
}
