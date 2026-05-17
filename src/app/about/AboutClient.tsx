"use client";

import React from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const board = [
  { name: "Neel Khairnar", role: "FOUNDER", bio: "AI systems architecture and petroleum engineering specialist leading the company's vision.", avatar: "https://ui-avatars.com/api/?name=Neel+Khairnar&size=300&background=B8922A&color=fff&bold=true&rounded=true", color: "#B8922A" },
  { name: "Vedant Jadhav", role: "CO-FOUNDER", bio: "Lead developer and expert in deterministic research platforms and full-stack AI systems.", avatar: "https://ui-avatars.com/api/?name=Vedant+Jadhav&size=300&background=1B5FA8&color=fff&bold=true&rounded=true", color: "#1B5FA8" },
  { name: "Pritam Lalvani", role: "DIRECTOR, STRATEGIC LEAD", bio: "Strategic growth architect with expertise in enterprise industrial integration.", avatar: "https://ui-avatars.com/api/?name=Pritam+Lalvani&size=300&background=1A7A6E&color=fff&bold=true&rounded=true", color: "#1A7A6E" },
  { name: "Dr. Bharat Kale", role: "DIRECTOR, ADVISOR", bio: "Academic lead and senior technical advisor with deep research expertise.", avatar: "https://ui-avatars.com/api/?name=Bharat+Kale&size=300&background=2C2C2C&color=fff&bold=true&rounded=true", color: "#2C2C2C" },
];

const values = [
  { title: "Production-First", desc: "We build for reality, not for demos. Every system must work at scale in production." },
  { title: "Domain Intelligence", desc: "Deep expertise in specific industries ensures our AI understands the real context." },
  { title: "Data Sovereignty", desc: "Your data stays yours. Air-gapped deployments and zero cloud dependency options." },
  { title: "Ethical AI", desc: "Transparent, explainable, and responsible AI systems that serve humanity." },
];

const timeline = [
  { year: "2024", title: "Company Founded", desc: "ARQAYAA Intelligence Pvt Ltd established in India." },
  { year: "2024", title: "TENETX Launched", desc: "Physics-native AI platform for oil and gas drilling operations." },
  { year: "2025", title: "TEXFLOW Initiated", desc: "Deterministic typesetting platform for the research community." },
  { year: "2025", title: "First Industry Partnerships", desc: "Strategic partnerships with oil & gas and academic institutions." },
  { year: "2026", title: "Scaling Operations", desc: "Expanding across industries and growing our team globally." },
];

export default function AboutClient() {
  return (
    <>
      <PageHero
        label="ABOUT ARQAYAA"
        headline="Building India's AI Infrastructure"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85&fit=crop"
        alt="Modern corporate office with professional boardroom setting"
      />

      {/* Who We Are */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div className="lg:w-[60%]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="section-label mb-8">WHO WE ARE</div>
              <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-8">
                An AI Intelligence Company
              </h2>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-6">
                ARQAYAA Intelligence Pvt Ltd is an AI intelligence company building the systems that make industries smarter, workflows faster, and societies better. We develop agentic AI systems, domain-specific models, and intelligent automation platforms that transform how modern companies operate.
              </p>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed">
                Founded in India, we serve clients globally with two specialized subsidiaries: TENETX for oil & gas AI and TEXFLOW for academic research typesetting.
              </p>
            </motion.div>
            <motion.div className="lg:w-[40%] bg-cream-dark rounded-[16px] p-10" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="font-rajdhani font-bold text-[11px] tracking-[0.2em] uppercase text-gold mb-8">KEY FACTS</h3>
              <div className="space-y-6">
                {[
                  ["Founded", "2024"],
                  ["Headquarters", "India"],
                  ["Subsidiaries", "TENETX, TEXFLOW"],
                  ["Focus", "AI Systems & Automation"],
                  ["Email", "info@arqaya.com"],
                ].map(([label, value], idx) => (
                  <div key={idx} className="flex justify-between border-b border-gray-mid pb-4">
                    <span className="font-sans text-text-muted text-[14px]">{label}</span>
                    <span className="font-sans text-text-black font-medium text-[14px]">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream px-6 md:px-24 border-t border-gray-mid">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <motion.div className="lg:w-1/2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label mb-8">OUR MISSION</div>
            <h2 className="font-serif text-3xl md:text-[36px] leading-tight text-text-black mb-6">
              Build intelligent systems that solve real problems for real people.
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-relaxed">
              We exist to democratize AI for industries that need it most — from the oil rigs of the energy sector to the research labs of academia. Our mission is to deliver production-ready AI that is reliable, secure, and deeply integrated.
            </p>
          </motion.div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-[1px] h-full bg-gold/30" />
          </div>
          <motion.div className="lg:w-1/2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="section-label mb-8">OUR VISION</div>
            <h2 className="font-serif text-3xl md:text-[36px] leading-tight text-text-black mb-6">
              An India-first AI company with a global standard.
            </h2>
            <p className="font-sans text-text-mid text-[17px] leading-relaxed">
              We envision a world where AI isn&apos;t a luxury — it&apos;s infrastructure. Every industry, from energy to education, will have access to systems that are as reliable as electricity and as intuitive as conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 bg-gray-light px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label mb-8">OUR LEADERSHIP</div>
            <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-6">Board of Directors</h2>
            <p className="font-sans text-text-mid text-[17px] max-w-2xl">Our founding team brings expertise across AI systems, petroleum engineering, academic research, and strategic leadership.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {board.map((m, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-square relative overflow-hidden" style={{ backgroundColor: m.color + '15' }}>
                  <img src={m.avatar} alt={`${m.name} — ${m.role}`} loading="lazy" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-center">
                      <span className="font-rajdhani font-bold text-[9px] tracking-[0.15em] text-text-muted uppercase">Photo coming soon</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-rajdhani font-bold text-[11px] tracking-widest uppercase mb-2" style={{ color: m.color }}>{m.role}</div>
                  <h3 className="font-serif text-[22px] text-text-black mb-2">{m.name}</h3>
                  <p className="font-sans text-text-muted text-[14px]">{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label mb-8">OUR VALUES</div>
            <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-cream rounded-lg p-10 border border-gray-mid hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-6 h-[2px] bg-gold mb-6" />
                <h3 className="font-sans font-bold text-[20px] text-text-black mb-3">{v.title}</h3>
                <p className="font-sans text-text-mid text-[15px] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-24 bg-cream-dark px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div className="mb-16 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label justify-center mb-8">OUR JOURNEY</div>
            <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">Company Timeline</h2>
          </motion.div>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold/20 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-[45%] ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-mid">
                      <span className="font-serif text-gold text-[28px] font-light">{item.year}</span>
                      <h3 className="font-sans font-bold text-[18px] text-text-black mt-2 mb-2">{item.title}</h3>
                      <p className="font-sans text-text-mid text-[15px]">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gold border-4 border-cream-dark flex-shrink-0 z-10" />
                  <div className="md:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
