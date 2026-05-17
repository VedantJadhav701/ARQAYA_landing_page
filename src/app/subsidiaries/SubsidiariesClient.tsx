"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function SubsidiariesClient() {
  return (
    <>
      <PageHero
        label="OUR SUBSIDIARIES"
        headline="Domain-Specific Intelligence"
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=85&fit=crop"
        alt="Global connected technology network"
      />

      <section className="py-24 bg-cream-dark px-6 md:px-24 min-h-[60vh]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          {/* TENETX Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-tenetx-light rounded-xl border border-gray-mid border-t-4 border-t-tenetx-primary p-10 md:p-16 flex flex-col md:flex-row gap-12 shadow-sm hover:shadow-lg transition-shadow">
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="font-bebas-neue text-5xl md:text-6xl text-tenetx-primary mb-2 tracking-wide">TENETX</h2>
              <div className="font-rajdhani font-bold text-[13px] tracking-widest text-text-black uppercase mb-6">Industrial Oil & Gas Intelligence</div>
              <p className="font-sans text-text-dark text-[17px] leading-relaxed mb-8 max-w-lg">
                Physics-native AI platform for drilling operations. Delivers sub-second inference with a 100% air-gapped architecture, ensuring complete data sovereignty for critical infrastructure.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <span className="bg-white text-tenetx-primary px-4 py-2 rounded-full font-sans text-[13px] font-bold shadow-sm">&lt;0.5% Error</span>
                <span className="bg-white text-tenetx-primary px-4 py-2 rounded-full font-sans text-[13px] font-bold shadow-sm">₹0.08/Query</span>
                <span className="bg-white text-tenetx-primary px-4 py-2 rounded-full font-sans text-[13px] font-bold shadow-sm">100% Air-Gapped</span>
              </div>
              <div>
                <Link href="/subsidiaries/tenetx" className="inline-flex items-center gap-2 font-rajdhani font-bold tracking-[0.15em] text-[14px] uppercase text-tenetx-primary border border-tenetx-primary px-6 py-3 rounded hover:bg-tenetx-primary hover:text-white transition-colors">
                  Explore TENETX <span>→</span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden h-[300px] md:h-auto shadow-md">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=85&fit=crop" alt="TENETX Control Room" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* TEXFLOW Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-texflow-light rounded-xl border border-gray-mid border-t-4 border-t-texflow-primary p-10 md:p-16 flex flex-col md:flex-row-reverse gap-12 shadow-sm hover:shadow-lg transition-shadow">
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="font-rajdhani font-bold text-5xl md:text-6xl text-texflow-primary mb-2">TEXFLOW</h2>
              <div className="font-rajdhani font-bold text-[13px] tracking-widest text-text-black uppercase mb-6">Research Typesetting Platform</div>
              <p className="font-sans text-text-dark text-[17px] leading-relaxed mb-8 max-w-lg">
                Deterministic typesetting for the academic community. Instantly converts Word documents into perfectly formatted, publisher-ready LaTeX and PDFs without the risk of AI hallucinations.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <span className="bg-white text-texflow-primary px-4 py-2 rounded-full font-sans text-[13px] font-bold shadow-sm">Zero AI</span>
                <span className="bg-white text-texflow-primary px-4 py-2 rounded-full font-sans text-[13px] font-bold shadow-sm">48hr Data Purge</span>
                <span className="bg-white text-texflow-primary px-4 py-2 rounded-full font-sans text-[13px] font-bold shadow-sm">From ₹299</span>
              </div>
              <div>
                <Link href="/subsidiaries/texflow" className="inline-flex items-center gap-2 font-rajdhani font-bold tracking-[0.15em] text-[14px] uppercase text-texflow-primary border border-texflow-primary px-6 py-3 rounded hover:bg-texflow-primary hover:text-white transition-colors">
                  Explore TEXFLOW <span>→</span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden h-[300px] md:h-auto shadow-md">
              <img src="https://images.unsplash.com/photo-1456324504439-23fe879ce859?w=800&q=85&fit=crop" alt="TEXFLOW Interface" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
