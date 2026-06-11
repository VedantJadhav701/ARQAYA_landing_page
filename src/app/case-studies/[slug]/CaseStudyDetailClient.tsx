"use client";

import React from "react";
import { mockCaseStudies } from "@/data/mockData";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseStudyDetailClient({ slug }: { slug: string }) {
  const study = mockCaseStudies.find(s => s.slug === slug);

  if (!study) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-serif text-[42px] mb-4">Case Study Not Found</h1>
        <Link href="/case-studies" className="text-gold font-sans font-bold hover:underline">← Back to Case Studies</Link>
      </div>
    );
  }

  return (
    <div className="pt-[100px] pb-24">
      {/* Hero Header */}
      <div className="px-6 md:px-24 mb-16">
        <div className="max-w-5xl mx-auto">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-text-muted hover:text-black font-sans text-[13px] font-bold uppercase tracking-wider mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="font-rajdhani font-bold text-[12px] tracking-widest text-gold uppercase">{study.industry}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="font-sans text-[14px] text-text-muted">{study.client}</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-[56px] leading-[1.1] text-text-black mb-8">
            {study.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end border-b border-gray-mid pb-8">
            <div className="bg-cream border border-gold/30 p-6 rounded-lg max-w-xl">
              <div className="font-sans font-bold text-[11px] text-text-muted uppercase tracking-wider mb-2">Key Impact</div>
              <p className="font-serif text-[22px] text-text-black">"{study.impact}"</p>
            </div>
            
            <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded text-[13px] font-sans font-bold text-text-black hover:bg-gray-50 transition-colors uppercase tracking-wider">
              <Download size={16} /> Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">
          
          {/* Metadata Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 sticky top-32">
              <div className="mb-8">
                <div className="font-sans font-bold text-[11px] text-text-muted uppercase tracking-wider mb-2">Client</div>
                <div className="font-sans text-[15px] font-bold text-text-black">{study.client}</div>
              </div>
              <div className="mb-8">
                <div className="font-sans font-bold text-[11px] text-text-muted uppercase tracking-wider mb-2">Industry</div>
                <div className="font-sans text-[15px] font-bold text-text-black">{study.industry}</div>
              </div>
              <div className="mb-8">
                <div className="font-sans font-bold text-[11px] text-text-muted uppercase tracking-wider mb-2">Solutions Deployed</div>
                <ul className="font-sans text-[14px] text-text-black space-y-2 mt-2 font-medium">
                  <li>• TENETX Core Pipeline</li>
                  <li>• Air-gapped Edge Nodes</li>
                  <li>• Predictive Maintenance API</li>
                </ul>
              </div>
              <div>
                <div className="font-sans font-bold text-[11px] text-text-muted uppercase tracking-wider mb-2">Timeline</div>
                <div className="font-sans text-[15px] font-bold text-text-black">4 Months to Production</div>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="md:w-3/4 prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-p:font-sans prose-p:text-text-dark prose-p:leading-relaxed">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl overflow-hidden mb-12 aspect-video shadow-md"
            >
              <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
            </motion.div>
            
            <h2 className="text-[32px] mt-0 mb-6">The Challenge</h2>
            <p>
              The client operates a fleet of deepwater rigs where drilling anomalies (like stuck pipes or kicks) can cost upwards of $1M per day in non-productive time (NPT). Previous attempts to use generic machine learning models failed because the models hallucinated physical states that violated the laws of thermodynamics, leading to zero operator trust.
            </p>
            
            <h2 className="text-[32px] mt-16 mb-6">The Dpulseai Approach</h2>
            <p>
              We deployed the TENETX architecture, a physics-informed neural network (PINN) that embeds fluid dynamics equations directly into its loss function. 
            </p>
            <ul>
              <li><strong>Data Ingestion:</strong> Processed 100Hz telemetry data from downhole sensors.</li>
              <li><strong>Edge Inference:</strong> Deployed the model on air-gapped edge servers located directly on the rig, ensuring 100% data sovereignty and zero reliance on cloud connectivity.</li>
              <li><strong>Deterministic Guardrails:</strong> Implemented rigid boundary conditions preventing the model from predicting physically impossible states.</li>
            </ul>

            <h2 className="text-[32px] mt-16 mb-6">System Architecture</h2>
            <div className="my-10 p-6 bg-cream border border-gold/20 rounded-xl text-center">
              <div className="font-rajdhani font-bold text-text-muted uppercase tracking-widest text-[12px] mb-4">Architecture Visualization</div>
              <div className="flex justify-center items-center h-48 bg-white border border-gray-200 rounded text-text-mid font-mono text-[14px]">
                [SCADA Sensors] → [Air-gapped Edge Node] → [TENETX PINN] → [Operator Dashboard]
              </div>
            </div>
            
            <h2 className="text-[32px] mt-16 mb-6">Measurable Impact</h2>
            <p>
              Within 90 days of production deployment across three pilot rigs, the system successfully predicted 4 severe kick anomalies with a 45-minute warning window, completely preventing NPT incidents. The system operates with a measured error rate of below 0.5%, compared to the industry standard of 3-5%.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
