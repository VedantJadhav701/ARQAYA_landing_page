"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const members = [
  { 
    name: "Neel Khairnar", 
    role: "Founder | Applied AI/ML Strategist", 
    bio: "As an Applied AI/ML undergraduate with a deeply execution-driven vision, Neel operates at the intersection of frontier intelligence systems, scalable engineering, and commercialization-first innovation.",
    fullBio: "As an Applied AI/ML undergraduate with a deeply execution-driven vision, Neel operates at the intersection of frontier intelligence systems, scalable engineering, and commercialization-first innovation. At the core of his leadership lies a systems architecture mindset — the belief that every intelligent pipeline, from data ingestion to deployment, must optimize precision, adaptability, and operational efficiency. He approaches innovation through modular intelligence design, where RAG pipelines, LLM ecosystems, and AgenticOps frameworks are engineered not merely as technical assets, but as scalable business infrastructure.\n\nWith a rapidly expanding foundation across Deep Learning, MLOps, CI/CD pipelines, MCP servers, SLMs, and enterprise-grade AI deployment, Neel specializes in building future-resilient systems that transform raw models into production-capable strategic solutions. As an LLM geek with a forward-engineering philosophy, he focuses on integrating retrieval intelligence, autonomous agent systems, and deployment discipline to create sovereign, high-performance AI architectures.\n\nAs Founder, he drives the organization’s long-term technological blueprint — architecting scalable AI ecosystems that bridge cutting-edge machine learning with executional realism. His vision is rooted in converting advanced computational intelligence into commercially defensible, operationally efficient, and globally relevant systems, ensuring the company remains positioned at the forefront of next-generation AI transformation.",
    avatar: "/images/leadership/neel.jpeg", 
    accentColor: "#B8922A" 
  },
  { 
    name: "Vedant Jadhav", 
    role: "Co-Founder | AI Platform Engineer & Frontend Lead", 
    bio: "As an Applied AI/ML engineer with a research-driven and execution-focused mindset, Vedant specializes in building scalable AI platforms.",
    fullBio: "As an Applied AI/ML engineer with a research-driven and execution-focused mindset, Vedant specializes in building scalable AI platforms that bridge intelligent systems, production engineering, and modern digital experiences. His work focuses on transforming advanced AI research into deployment-ready infrastructure capable of operating reliably in real-world environments.\n\nWith growing expertise across LLMs, Agentic AI, RAG architectures, Multi-Agent Systems, MLOps, and deployment automation, he engineers modular AI ecosystems designed for scalability, operational efficiency, and long-term adaptability. His approach combines backend intelligence architecture with frontend product execution, ensuring that complex AI systems are translated into intuitive, high-performance user experiences.\n\nAs Co-Founder, Vedant leads the organization’s platform engineering and frontend execution — architecting enterprise-grade AI systems, intelligent workflows, and modern digital interfaces that align cutting-edge machine learning with commercially scalable product development.",
    avatar: "/images/leadership/vedant.jpeg", 
    accentColor: "#1B5FA8" 
  },
  { 
    name: "Pritam N. Lalwani", 
    role: "Director, Strategic Lead", 
    bio: "With over 16 years of transformative experience, the core of Pritam’s leadership lies in the principle of energy and mass balance.",
    fullBio: "With over 16 years of transformative experience, the core of Pritam’s leadership lies in the principle of energy and mass balance — a systems-thinking approach he applies to strategy, data, and growth. He believes every scalable solution, whether a molecule or a machine learning model, must respect input-output efficiency, minimize waste, and maximize value. This first‑principles mindset de‑risks innovation, protects intellectual property, and ensures decisions are transparent, measurable, and sustainable.\n\nWith the transformative experience across pharmaceutical R&D, green chemistry, nanotechnology, and circular economy, Pritam also commercialized FDA‑approved products, filed multiple patents, and secured 10+ trademarks. As our Director & Strategic Lead, he architects future‑ready AI‑ML roadmaps that bridge deep technology with commercial reality, inspiring trust and confidence among investors and partners.",
    avatar: "/images/leadership/pritam.jpeg", 
    accentColor: "#1A7A6E" 
  },
  { 
    name: "Dr. Bharat Kale", 
    role: "Director & Strategic Advisor", 
    bio: "With decades of distinguished leadership across advanced materials science, national R&D ecosystems, and industrial innovation.",
    fullBio: "With decades of distinguished leadership across advanced materials science, national R&D ecosystems, industrial innovation, and translational technology strategy, Dr. Bharat Kale brings a rare combination of scientific depth, commercialization foresight, and institutional credibility to the organization. His experience spans frontier research, scientific administration, innovation governance, and strategic technology development, with recognized contributions across nanomaterials, applied sciences, and scalable industrial frameworks. \n\nHis broader advisory perspective also strengthens the company’s strategic alignment toward high-impact sectors including oil & gas, where scientific precision, infrastructure resilience, and deep-technology integration are critical to operational transformation. As Strategic Advisor, Dr. Kale provides high-level guidance in scientific validation, research governance, institutional partnerships, and long-horizon commercialization strategy—ensuring that advanced AI-ML systems are developed with technical rigor, sectoral relevance, and sustainable industrial applicability. His role reinforces the organization’s capacity to bridge deep science with commercially viable innovation, while strengthening trust among academia, energy stakeholders, strategic partners, and national-scale technology ecosystems.",
    avatar: "/images/leadership/bharat-kale.png", 
    accentColor: "#2C2C2C" 
  },
];

const Leadership = () => {
  const [selectedMember, setSelectedMember] = useState<null | typeof members[0]>(null);

  return (
    <section id="leadership" className="py-24 bg-gray-light px-6 md:px-24 border-t border-gray-mid">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label mb-8 text-gold after:bg-gold-rule">OUR LEADERSHIP</div>
          <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black mb-6">
            The Team Behind ARQAYAA
          </h2>
          <p className="font-sans text-text-mid text-[17px] max-w-2xl">
            Our founding team brings expertise across AI systems, petroleum engineering, academic research, and strategic leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Photo Area */}
              <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                <img
                  src={member.avatar}
                  alt={`${member.name} — ${member.role} at ARQAYAA Intelligence`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="font-rajdhani font-bold text-[11px] tracking-widest uppercase mb-2" style={{ color: member.accentColor }}>
                  {member.role.split('|')[0].trim()}
                </div>
                <h3 className="font-serif text-[22px] text-text-black mb-2">{member.name}</h3>
                <p className="font-sans text-text-muted text-[14px] mb-6 line-clamp-3 leading-relaxed">{member.bio}</p>
                <button 
                  onClick={() => setSelectedMember(member)}
                  className="mt-auto text-gold font-sans font-medium text-[13px] flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer"
                >
                  Read more <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md" 
              onClick={() => setSelectedMember(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-gold transition-colors flex items-center justify-center text-text-black hover:text-white"
              >
                <X size={20} />
              </button>
              
              <div className="md:w-1/3 bg-gray-100 aspect-square md:aspect-auto">
                <img src={selectedMember.avatar} alt={selectedMember.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="md:w-2/3 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="font-rajdhani font-bold text-[12px] tracking-[0.2em] text-gold uppercase mb-4">
                  {selectedMember.role}
                </div>
                <h2 className="font-serif text-[32px] md:text-[42px] text-text-black leading-tight mb-8">
                  {selectedMember.name}
                </h2>
                <div className="font-sans text-text-mid text-[16px] md:text-[17px] leading-relaxed whitespace-pre-line">
                  {selectedMember.fullBio}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Leadership;
