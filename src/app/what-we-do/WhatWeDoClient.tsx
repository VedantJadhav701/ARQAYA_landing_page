"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const solutions = [
  { title: "Agentic AI Systems", desc: "Autonomous agents for complex multi-step workflows. Our agentic systems can plan, execute, and self-correct across entire business processes.", accent: "bg-gold" },
  { title: "Domain-Specific Models", desc: "Fine-tuned LLMs on your industry data. We build models that understand your domain context — from petroleum engineering to academic publishing.", accent: "bg-tenetx-primary" },
  { title: "Intelligent Automation", desc: "End-to-end platforms with intelligent logic layers. Not just RPA — our systems reason, adapt, and learn from every interaction.", accent: "bg-texflow-primary" },
  { title: "Production Monitoring", desc: "Real-time AI observability and reliability. We deploy with full telemetry, self-healing capabilities, and human-in-the-loop safeguards.", accent: "bg-text-black" },
];

const problems = [
  { title: "Generic AI fails in production", desc: "Off-the-shelf models hallucinate and break in domain-specific scenarios." },
  { title: "Data privacy is an afterthought", desc: "Most AI vendors require cloud access to your most sensitive data." },
  { title: "Integration is a nightmare", desc: "AI systems that can't plug into existing infrastructure are useless." },
  { title: "No accountability at scale", desc: "When AI fails, most systems offer no observability or recovery." },
];

const steps = [
  { title: "Discovery & Strategy", desc: "We analyze your existing workflows and data infrastructure to identify high-impact AI opportunities." },
  { title: "Development & Integration", desc: "Our engineers build and fine-tune models that are deeply integrated into your production environment." },
  { title: "Deployment & Scale", desc: "We deploy air-gapped or cloud systems with full monitoring to ensure long-term reliability and ROI." },
];

const diffs = [
  { title: "Production-First Mindset", desc: "We build for reality, not for demos. Reliability is our baseline." },
  { title: "Domain Intelligence", desc: "Deep industrial sector expertise ensures our AI understands the context." },
  { title: "Seamless Integration", desc: "Our systems plug into your existing stack without friction." },
  { title: "Agentic Logic", desc: "Moving beyond simple chatbots to autonomous agents that execute tasks." },
];

export default function WhatWeDoClient() {
  return (
    <>
      <PageHero
        label="WHAT WE DO"
        headline="We Build AI That Actually Works in Production"
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85&fit=crop"
        alt="Data center servers with blue technology lighting"
      />

      {/* The Challenge */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <motion.div className="lg:w-[50%]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label mb-8">THE CHALLENGE</div>
            <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-8">
              Most AI Projects Fail in Production
            </h2>
            <blockquote className="border-l-4 border-gold pl-8 py-2">
              <p className="font-serif italic text-[24px] text-text-black leading-snug">
                &ldquo;87% of AI projects never make it to production. The gap between demo and deployment is where billions are lost.&rdquo;
              </p>
            </blockquote>
          </motion.div>
          <div className="lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-cream rounded-lg p-6 border border-gray-mid">
                <h4 className="font-sans font-bold text-[16px] text-text-black mb-2">{p.title}</h4>
                <p className="font-sans text-text-mid text-[14px]">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-24 bg-cream-dark px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label mb-8">OUR SOLUTIONS</div>
            <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">
              Four Pillars of Production AI
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((sol, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-lg p-10 shadow-sm border border-gray-mid relative group overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className={`absolute top-0 left-0 w-full h-[3px] ${sol.accent}`} />
                <div className="absolute top-8 right-8 font-serif text-[100px] text-black/[0.05] leading-none pointer-events-none">0{idx + 1}</div>
                <h3 className="font-serif text-[28px] text-text-black mb-4 relative z-10">{sol.title}</h3>
                <p className="font-sans text-text-mid text-[16px] mb-8 relative z-10">{sol.desc}</p>
                <button className="text-gold font-rajdhani font-bold tracking-widest text-[12px] uppercase flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                  Learn more <span>→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-gray-light px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label mb-8">THE PROCESS</div>
            <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">A Systematic Approach to Production AI</h2>
          </motion.div>
          <div className="relative">
            <div className="hidden lg:block absolute top-[52px] left-0 w-full h-[2px] border-t-2 border-dashed border-gold/30" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }} className="flex flex-col">
                  <div className="w-14 h-14 rounded-full border-2 border-gold bg-gray-light flex items-center justify-center font-serif text-[24px] text-gold mb-8">0{idx + 1}</div>
                  <h3 className="font-serif text-[24px] text-text-black mb-4">{step.title}</h3>
                  <p className="font-sans text-text-mid text-[15px] leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why ARQAYAA */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-[55%]">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="section-label mb-8">WHY ARQAYAA?</div>
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
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="border-l-4 border-gold pl-10 py-4">
              <blockquote className="font-serif italic text-[28px] md:text-[32px] text-text-black leading-tight">
                &ldquo;We bridge the gap between AI hype and business reality with systems that are reliable, secure, and deeply integrated.&rdquo;
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-dark border-t border-gold/20 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="w-16 h-[2px] bg-gold mx-auto mb-10" />
          <h2 className="font-serif text-4xl md:text-[52px] leading-tight text-text-black mb-6">Ready to Get Started?</h2>
          <p className="font-sans text-text-muted text-[18px] mb-12">Let&apos;s discuss how AI can transform your operations.</p>
          <a href="https://arqaya.vercel.app/book-call" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">Book A Free Call</a>
        </motion.div>
      </section>
    </>
  );
}
