"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mockCaseStudies } from "@/data/mockData";

export default function CaseStudiesClient() {
  return (
    <>
      <PageHero
        label="CLIENT IMPACT"
        headline="Case Studies in Industrial Intelligence"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85&fit=crop"
        alt="Corporate headquarters"
      />

      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {mockCaseStudies.map((study, idx) => (
              <motion.div 
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden border border-gray-mid shadow-lg group bg-cream"
              >
                <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-rajdhani font-bold text-[12px] tracking-widest text-gold uppercase">{study.industry}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="font-sans text-[13px] text-text-muted">{study.client}</span>
                  </div>
                  <h2 className="font-serif text-[32px] md:text-[40px] leading-tight text-text-black mb-6 group-hover:text-gold transition-colors">
                    {study.title}
                  </h2>
                  <div className="mb-10 p-6 bg-white border-l-4 border-gold rounded-r-lg">
                    <div className="font-sans font-bold text-[12px] text-text-muted uppercase tracking-wider mb-2">Measurable Impact</div>
                    <p className="font-serif text-[20px] text-text-black italic">"{study.impact}"</p>
                  </div>
                  <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-2 font-rajdhani font-bold tracking-[0.15em] text-[14px] text-black uppercase hover:text-gold transition-colors mt-auto">
                    Read the Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
