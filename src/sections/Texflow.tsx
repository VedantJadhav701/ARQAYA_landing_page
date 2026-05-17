"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const Texflow = () => {
  return (
    <section className="py-24 bg-cream px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row gap-4 items-baseline mb-12 border-t-[3px] border-texflow-primary pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-rajdhani font-bold text-[48px] text-texflow-primary tracking-tight">TEXFLOW</h2>
          <span className="font-rajdhani font-bold text-[11px] tracking-widest text-text-muted uppercase">
            SUBSIDIARY · RESEARCH PLATFORM
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row-reverse gap-16">
          {/* Right Column: Text Content */}
          <div className="lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-8">
                Word to Publisher-Ready PDF. In Seconds.
              </h3>
              <p className="font-sans text-text-mid text-[17px] mb-8 leading-relaxed">
                A 100% deterministic, zero-AI platform that instantly converts Microsoft Word files into
                perfectly formatted, publisher-compliant LaTeX and PDFs. Trusted by the global research
                community for its precision and reliability.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Zero AI — 100% deterministic, no hallucinations",
                  "IEEE, Springer, Elsevier templates built-in",
                  "Files auto-purged in 48 hours — full data privacy",
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-texflow-primary/10 p-1 rounded-full flex-shrink-0">
                      <Check size={14} className="text-texflow-primary" />
                    </div>
                    <span className="font-sans text-text-dark font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6 flex-wrap">
                <Link href="/subsidiaries/texflow" className="inline-flex items-center gap-4 text-texflow-primary font-rajdhani font-bold tracking-widest uppercase group border border-texflow-primary px-8 py-4 rounded-full hover:bg-texflow-primary hover:text-white transition-all cursor-pointer">
                  Explore TEXFLOW
                  <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                    →
                  </div>
                </Link>
                <div className="bg-texflow-primary/10 px-4 py-2 rounded-full">
                  <span className="font-rajdhani font-bold text-[11px] text-texflow-primary tracking-widest uppercase">From ₹299 / paper</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Left Column: Product Mockup + Image */}
          <div className="lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-6"
            >
              {/* Main Research Image */}
              <div className="rounded-[16px] overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=900&q=85&fit=crop"
                  alt="Researcher using laptop to write academic journal paper"
                  loading="lazy"
                  className="w-full h-64 object-cover object-center"
                />
              </div>

              {/* Product Mockup Card */}
              <div className="bg-white rounded-[16px] p-4 shadow-2xl border border-gray-mid relative group overflow-hidden">
                {/* Mockup Top Bar */}
                <div className="flex items-center justify-between mb-4 border-b border-gray-light pb-2 px-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="bg-texflow-primary/10 px-3 py-1 rounded text-[10px] font-bold text-texflow-primary tracking-widest uppercase">
                    LIVE PREVIEW
                  </div>
                </div>

                {/* Mockup Split View */}
                <div className="grid grid-cols-2 gap-2 aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden">
                  <div className="bg-white p-4 border-r border-gray-mid flex flex-col gap-2">
                    <div className="h-4 w-3/4 bg-gray-100 rounded" />
                    <div className="h-4 w-full bg-gray-100 rounded" />
                    <div className="h-4 w-5/6 bg-gray-100 rounded" />
                    <div className="h-4 w-2/3 bg-gray-100 rounded" />
                    <div className="mt-auto h-24 w-full bg-gray-50 rounded border border-dashed border-gray-mid flex items-center justify-center">
                      <span className="text-[10px] text-text-muted">WORD EDITOR</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 flex flex-col gap-2">
                    <div className="h-4 w-full bg-blue-50/50 rounded" />
                    <div className="h-4 w-5/6 bg-blue-50/50 rounded" />
                    <div className="h-4 w-full bg-blue-50/50 rounded" />
                    <div className="h-4 w-3/4 bg-blue-50/50 rounded" />
                    <div className="mt-auto h-24 w-full bg-blue-50/50 rounded border border-texflow-primary/20 flex items-center justify-center">
                      <span className="text-[10px] text-texflow-primary font-bold">LATEX OUTPUT</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-texflow-primary/5 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Supporting Image Card */}
              <div className="rounded-[12px] overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=85&fit=crop"
                  alt="Academic journal PDF papers stacked on desk"
                  loading="lazy"
                  className="w-full h-40 object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Target Audience Strip */}
        <motion.div
          className="mt-16 border-t border-gray-mid pt-8 flex flex-wrap justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            "Researchers",
            "PhD Scholars",
            "Professors",
            "University Departments",
          ].map((audience, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-texflow-primary" />
              <span className="font-serif text-[18px] text-text-dark">{audience}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Texflow;
