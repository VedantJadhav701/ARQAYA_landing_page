"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Shield, Lock, Server, CheckCircle2 } from "lucide-react";

export default function SecurityClient() {
  return (
    <>
      <PageHero
        label="TRUST CENTER"
        headline="Enterprise-Grade Security Architecture"
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85&fit=crop"
        alt="Server room infrastructure"
      />

      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-[42px] leading-tight text-text-black mb-6">Designed for Regulated Industries</h2>
            <p className="font-sans text-[18px] text-text-mid max-w-3xl mx-auto">
              Our systems are deployed in environments where a data breach is a critical failure. We implement zero-trust architectures, rigorous access controls, and full air-gapped support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-cream border border-gray-mid p-10 rounded-xl">
              <Shield className="w-12 h-12 text-gold mb-6" />
              <h3 className="font-serif text-[28px] text-text-black mb-4">Zero-Trust Network</h3>
              <p className="font-sans text-[15px] text-text-mid mb-6">Every component authenticates strictly. There is no implicit trust within the network boundary, ensuring lateral movement is impossible.</p>
              <ul className="space-y-3 font-sans text-[14px] font-medium text-text-black">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> RBAC (Role-Based Access Control)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> Ephemeral credentials</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> Identity-aware proxies</li>
              </ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-cream border border-gray-mid p-10 rounded-xl">
              <Lock className="w-12 h-12 text-gold mb-6" />
              <h3 className="font-serif text-[28px] text-text-black mb-4">Data Sovereignty</h3>
              <p className="font-sans text-[15px] text-text-mid mb-6">Data is encrypted at rest (AES-256) and in transit (TLS 1.3). For hyper-sensitive deployments, data never leaves the physical premises.</p>
              <ul className="space-y-3 font-sans text-[14px] font-medium text-text-black">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> AES-256 Encryption</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> BYOK (Bring Your Own Key)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold" /> Automated 48-hour data purging (TEXFLOW)</li>
              </ul>
            </motion.div>
          </div>

          {/* Architecture Visualization */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 md:p-16 text-center">
            <h3 className="font-serif text-[32px] text-text-black mb-10">Air-Gapped Deployment Topology</h3>
            
            <div className="max-w-3xl mx-auto relative border border-gray-300 bg-white rounded-xl p-8 shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 font-rajdhani font-bold text-[11px] text-gold tracking-widest uppercase">
                Customer Premise (Isolated)
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="w-full md:w-1/3 text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center mb-3">
                    <Server className="text-text-black" />
                  </div>
                  <div className="font-sans font-bold text-[14px] mb-1">SCADA / IoT</div>
                  <div className="font-sans text-[12px] text-text-muted">Internal Data Source</div>
                </div>
                
                <div className="w-full md:w-1/3 flex flex-col items-center">
                  <div className="h-0.5 w-full bg-gold relative hidden md:block">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 rounded-full bg-gold"></div>
                  </div>
                  <div className="w-0.5 h-12 bg-gold relative md:hidden"></div>
                  <div className="bg-white border border-gold text-gold font-rajdhani font-bold text-[10px] tracking-widest px-3 py-1 rounded-full uppercase my-2">
                    Internal Network Only
                  </div>
                </div>

                <div className="w-full md:w-1/3 text-center">
                  <div className="w-16 h-16 mx-auto bg-tenetx-primary/10 rounded-lg border border-tenetx-primary/30 flex items-center justify-center mb-3">
                    <Server className="text-tenetx-primary" />
                  </div>
                  <div className="font-sans font-bold text-[14px] mb-1">TENETX Edge Node</div>
                  <div className="font-sans text-[12px] text-text-muted">Local Inference Engine</div>
                </div>
              </div>
            </div>
            <p className="font-sans text-[14px] text-text-mid mt-8">
              In an air-gapped deployment, the AI inference engine runs entirely on local hardware. The system physically cannot connect to the external internet, ensuring absolute protection against cloud-based exfiltration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
