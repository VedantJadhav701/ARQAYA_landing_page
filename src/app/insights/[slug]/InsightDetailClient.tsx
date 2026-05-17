"use client";

import React from "react";
import { mockArticles } from "@/data/mockData";
import Link from "next/link";
import { ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function InsightDetailClient({ slug }: { slug: string }) {
  const article = mockArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-serif text-[42px] mb-4">Article Not Found</h1>
        <Link href="/insights" className="text-gold font-sans font-bold hover:underline">← Back to Insights</Link>
      </div>
    );
  }

  return (
    <div className="pt-[100px] pb-24 px-6 md:px-24">
      <article className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/insights" className="inline-flex items-center gap-2 text-text-muted hover:text-black font-sans text-[13px] font-bold uppercase tracking-wider mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="font-rajdhani font-bold text-[12px] tracking-widest text-gold uppercase">{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="font-sans text-[14px] text-text-muted">{article.readTime}</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-[56px] leading-[1.1] text-text-black mb-8">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between border-y border-gray-mid py-6 mb-12">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-serif text-[16px] text-text-black font-bold">
                 {article.author.split(' ').map(n => n[0]).join('')}
               </div>
               <div>
                 <div className="font-sans text-[15px] font-bold text-text-black">{article.author}</div>
                 <div className="font-sans text-[13px] text-text-muted">{article.date}</div>
               </div>
            </div>
            
            <div className="flex items-center gap-3 text-text-muted">
              <span className="font-sans text-[12px] uppercase tracking-wider font-bold mr-2">Share</span>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-black hover:border-black transition-colors"><Linkedin size={14} /></button>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-black hover:border-black transition-colors"><Twitter size={14} /></button>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-black hover:border-black transition-colors"><Share2 size={14} /></button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl overflow-hidden mb-16 aspect-[21/9]"
        >
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-16 relative">
          
          {/* Sticky TOC */}
          <div className="md:w-1/4 hidden md:block">
            <div className="sticky top-32">
              <h4 className="font-rajdhani font-bold text-[12px] text-text-muted tracking-widest uppercase mb-4 border-b border-gray-200 pb-2">Contents</h4>
              <ul className="space-y-3 font-sans text-[14px]">
                <li><a href="#introduction" className="text-text-black font-medium hover:text-gold transition-colors">Introduction</a></li>
                <li><a href="#challenge" className="text-text-mid hover:text-gold transition-colors">The Challenge</a></li>
                <li><a href="#architecture" className="text-text-mid hover:text-gold transition-colors">System Architecture</a></li>
                <li><a href="#deployment" className="text-text-mid hover:text-gold transition-colors">Deployment & Scale</a></li>
                <li><a href="#conclusion" className="text-text-mid hover:text-gold transition-colors">Conclusion</a></li>
              </ul>
            </div>
          </div>

          {/* Article Body */}
          <div className="md:w-3/4 prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-p:font-sans prose-p:text-text-dark prose-p:leading-relaxed prose-a:text-gold prose-blockquote:font-serif prose-blockquote:text-[24px] prose-blockquote:border-l-gold">
            <p className="text-[20px] leading-relaxed mb-10 text-text-black font-medium" id="introduction">
              {article.excerpt}
            </p>
            
            <p>
              In the rapidly evolving landscape of industrial intelligence, the distinction between probabilistic generation and deterministic reasoning has never been more critical. While Large Language Models (LLMs) have captured public imagination, their inherent stochasticity renders them fundamentally unsuited for environments where failure carries catastrophic physical, financial, or regulatory consequences.
            </p>
            
            <h2 id="challenge" className="text-[32px] mt-16 mb-6">The Challenge of Probability</h2>
            <p>
              Consider a deepwater drilling operation governed by our TENETX architecture. If a downhole sensor detects an anomalous pressure spike indicative of a potential blowout, the system cannot offer a "creative" or "probable" response. It requires a physics-grounded, mathematically sound intervention.
            </p>
            
            <blockquote className="my-12 py-4 px-6 bg-cream border-l-4 border-gold italic text-text-black">
              "We do not build AI to write poetry. We build AI to calculate exact fluid dynamics across 10,000 kilometers of pipeline in real-time."
            </blockquote>
            
            <h2 id="architecture" className="text-[32px] mt-16 mb-6">System Architecture</h2>
            <p>
              Our approach bypasses the limitations of pure statistical token prediction by embedding domain-specific governing equations directly into the neural network architecture. These Physics-Informed Neural Networks (PINNs) ensure that all outputs physically possible and mathematically verifiable.
            </p>
            
            <div className="my-12 p-8 bg-gray-100 rounded-xl font-mono text-[13px] border border-gray-300 overflow-x-auto">
              {`// Example Architecture Node
class DeterministicEngine {
  constructor(physicsModel) {
    this.model = physicsModel;
    this.boundaryConditions = STRICT_ENFORCEMENT;
  }
  
  evaluate(sensorData) {
    const prediction = this.model.forward(sensorData);
    if (!this.verifyConservationLaws(prediction)) {
      throw new Error("Violation of governing physics");
    }
    return prediction;
  }
}`}
            </div>
            
            <h2 id="deployment" className="text-[32px] mt-16 mb-6">Deployment & Scale</h2>
            <p>
              Beyond the model architecture, true enterprise AI requires rethinking deployment topology. The ARQAYAA deployment philosophy mandates 100% data sovereignty. This is achieved through air-gapped, on-premise rack installations that execute full inference without a single outbound internet request.
            </p>
            
            <h2 id="conclusion" className="text-[32px] mt-16 mb-6">Conclusion</h2>
            <p>
              The transition from exploratory AI to industrial-grade intelligence is not merely a matter of scaling parameters. It is a fundamental shift in architecture, prioritizing determinism, security, and physical reality over probabilistic fluency.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
