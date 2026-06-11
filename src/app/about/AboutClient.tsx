"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import { X } from "lucide-react";

const board = [
  { 
    name: "Dpulseai Expert", 
    role: "AI/ML Strategy", 
    bio: "Specializing in the intersection of frontier intelligence systems, scalable engineering, and commercialization-first innovation.",
    fullBio: "Operating at the intersection of frontier intelligence systems, scalable engineering, and commercialization-first innovation. Expertise lies in systems architecture — the belief that every intelligent pipeline, from data ingestion to deployment, must optimize precision, adaptability, and operational efficiency. Approaching innovation through modular intelligence design, where RAG pipelines, LLM ecosystems, and AgenticOps frameworks are engineered as scalable business infrastructure.",
    avatar: "https://ui-avatars.com/api/?name=Dpulseai+Expert&background=B8922A&color=fff", 
    color: "#B8922A" 
  },
  { 
    name: "Dpulseai Expert", 
    role: "Platform Engineering", 
    bio: "Focusing on building scalable AI platforms that bridge intelligent systems, production engineering, and modern digital experiences.",
    fullBio: "Specializing in building scalable AI platforms that bridge intelligent systems, production engineering, and modern digital experiences. Work focuses on transforming advanced AI research into deployment-ready infrastructure capable of operating reliably in real-world environments.",
    avatar: "https://ui-avatars.com/api/?name=Dpulseai+Expert&background=1B5FA8&color=fff", 
    color: "#1B5FA8" 
  },
  { 
    name: "Dpulseai Expert", 
    role: "Strategic Operations", 
    bio: "Applying first-principles thinking to strategy, data, and growth to ensure every scalable solution respects input-output efficiency.",
    fullBio: "Leadership rooted in the principle of energy and mass balance — a systems-thinking approach applied to strategy, data, and growth. Believing every scalable solution, whether a molecule or a machine learning model, must respect input-output efficiency, minimize waste, and maximize value.",
    avatar: "https://ui-avatars.com/api/?name=Dpulseai+Expert&background=1A7A6E&color=fff", 
    color: "#1A7A6E" 
  },
  { 
    name: "Dpulseai Expert", 
    role: "Scientific Advisory", 
    bio: "Providing distinguished leadership across advanced science, national R&D ecosystems, and industrial innovation.",
    fullBio: "Bringing a combination of scientific depth, commercialization foresight, and institutional credibility to the organization. Experience spans frontier research, scientific administration, innovation governance, and strategic technology development, with recognized contributions across nanomaterials, applied sciences, and scalable industrial frameworks.",
    avatar: "https://ui-avatars.com/api/?name=Dpulseai+Expert&background=2C2C2C&color=fff", 
    color: "#2C2C2C" 
  },
];

const values = [
  { title: "Precision", desc: "In high-stakes industries, near-enough isn't enough. We build systems for 99.5%+ accuracy." },
  { title: "Sovereignty", desc: "Your data stays yours. Air-gapped deployments and zero cloud dependency options." },
  { title: "Trust", desc: "Transparent, explainable, and responsible AI systems that serve humanity." },
];

const timeline = [
  { year: "2024", title: "Company Founded", desc: "Dpulseai established in India." },
  { year: "2024", title: "TENETX Launched", desc: "Physics-native AI platform for oil and gas drilling operations." },
  { year: "2025", title: "TEXFLOW Initiated", desc: "Deterministic typesetting platform for the research community." },
  { year: "2025", title: "First Industry Partnerships", desc: "Strategic partnerships with oil & gas and academic institutions." },
  { year: "2026", title: "Scaling Operations", desc: "Expanding across industries and growing our team globally." },
];

export default function AboutClient() {
  const [selectedMember, setSelectedMember] = useState<null | typeof board[0]>(null);

  return (
    <>
      <PageHero
        label="ABOUT DPULSEAI"
        headline="Building India's AI Infrastructure"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85&fit=crop"
        alt="Modern corporate office with professional boardroom setting"
      />

      <div className="bg-white">
        {/* Mission & Vision */}
        <section className="py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="section-label mb-8">WHO WE ARE</div>
              <h2 className="font-serif text-[42px] leading-tight text-text-black mb-8 italic">
                &ldquo;We bridge the gap between AI hype and industrial reality.&rdquo;
              </h2>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
                Dpulseai is an AI intelligence company building the systems that make industries smarter, 
                workflows faster, and societies better. We specialize in physics-native modeling, 
                deterministic automation, and sovereign AI deployment.
              </p>
              <p className="font-sans text-text-mid text-[17px] leading-relaxed">
                Founded in India, we serve clients globally with two specialized subsidiaries: 
                TENETX for oil & gas AI and TEXFLOW for academic research typesetting.
              </p>
            </motion.div>

            <div className="lg:w-1/2 bg-gray-light p-10 md:p-16 rounded-2xl">
              <h3 className="font-rajdhani font-bold text-[11px] text-gold tracking-widest uppercase mb-10">QUICK FACTS</h3>
              <div className="space-y-8">
                {[
                  ["Founded", "2024"],
                  ["Headquarters", "India"],
                  ["Subsidiaries", "TENETX, TEXFLOW"],
                  ["Focus", "AI Systems & Automation"],
                  ["Email", "info@dpulseai.com"],
                ].map(([label, value], idx) => (
                  <div key={idx} className="flex justify-between border-b border-gray-mid pb-4">
                    <span className="font-sans text-text-muted text-[14px]">{label}</span>
                    <span className="font-sans text-text-black font-medium text-[14px]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-24 px-6 md:px-24 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <div className="section-label mb-8">LEADERSHIP</div>
              <h2 className="font-serif text-[42px] leading-tight text-text-black">The Team Behind Dpulseai</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {board.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-[22px] text-text-black mb-1">{member.name}</h3>
                    <div className="font-rajdhani font-bold text-[10px] text-gold tracking-widest uppercase mb-4">{member.role}</div>
                    <p className="font-sans text-text-mid text-[14px] leading-relaxed mb-6 line-clamp-2">{member.bio}</p>
                    <button className="text-gold font-sans font-bold text-[12px] uppercase flex items-center gap-2">
                      Read Bio <span>→</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="section-label mb-16">OUR JOURNEY</div>
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 h-full w-[1px] bg-gray-mid -translate-x-1/2 hidden md:block" />
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="md:w-[45%] text-left md:text-right">
                      <div className={`md:flex flex-col ${idx % 2 !== 0 ? 'md:items-start' : 'md:items-end'}`}>
                        <div className="font-serif text-[32px] text-gold mb-2">{item.year}</div>
                        <h4 className="font-serif text-[24px] text-text-black mb-4">{item.title}</h4>
                        <p className="font-sans text-text-mid text-[15px] leading-relaxed">{item.desc}</p>
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
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedMember(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-black md:text-white md:hover:text-black transition-all flex items-center justify-center"
              >
                <X size={20} />
              </button>
              
              <div className="md:w-1/3 bg-gray-100 h-64 md:h-auto overflow-hidden">
                <img src={selectedMember.avatar} alt={selectedMember.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="md:w-2/3 p-10 md:p-16 overflow-y-auto">
                <div className="font-rajdhani font-bold text-[11px] text-gold tracking-widest uppercase mb-4">{selectedMember.role}</div>
                <h3 className="font-serif text-[36px] text-text-black mb-8">{selectedMember.name}</h3>
                <div className="font-sans text-text-mid text-[16px] leading-relaxed whitespace-pre-line">
                  {selectedMember.fullBio}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
