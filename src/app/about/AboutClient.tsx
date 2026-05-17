"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import { X } from "lucide-react";

const board = [
  { 
    name: "Neel Khairnar", 
    role: "Founder | Applied AI/ML Strategist", 
    bio: "As an Applied AI/ML undergraduate with a deeply execution-driven vision, Neel operates at the intersection of frontier intelligence systems, scalable engineering, and commercialization-first innovation.",
    fullBio: "As an Applied AI/ML undergraduate with a deeply execution-driven vision, Neel operates at the intersection of frontier intelligence systems, scalable engineering, and commercialization-first innovation. At the core of his leadership lies a systems architecture mindset — the belief that every intelligent pipeline, from data ingestion to deployment, must optimize precision, adaptability, and operational efficiency. He approaches innovation through modular intelligence design, where RAG pipelines, LLM ecosystems, and AgenticOps frameworks are engineered not merely as technical assets, but as scalable business infrastructure.\n\nWith a rapidly expanding foundation across Deep Learning, MLOps, CI/CD pipelines, MCP servers, SLMs, and enterprise-grade AI deployment, Neel specializes in building future-resilient systems that transform raw models into production-capable strategic solutions. As an LLM geek with a forward-engineering philosophy, he focuses on integrating retrieval intelligence, autonomous agent systems, and deployment discipline to create sovereign, high-performance AI architectures.\n\nAs Founder, he drives the organization’s long-term technological blueprint — architecting scalable AI ecosystems that bridge cutting-edge machine learning with executional realism. His vision is rooted in converting advanced computational intelligence into commercially defensible, operationally efficient, and globally relevant systems, ensuring the company remains positioned at the forefront of next-generation AI transformation.",
    avatar: "/images/leadership/neel.jpeg", 
    color: "#B8922A" 
  },
  { 
    name: "Vedant Jadhav", 
    role: "Co-Founder | AI Platform Engineer & Frontend Lead", 
    bio: "As an Applied AI/ML engineer with a research-driven and execution-focused mindset, Vedant specializes in building scalable AI platforms.",
    fullBio: "As an Applied AI/ML engineer with a research-driven and execution-focused mindset, Vedant specializes in building scalable AI platforms that bridge intelligent systems, production engineering, and modern digital experiences. His work focuses on transforming advanced AI research into deployment-ready infrastructure capable of operating reliably in real-world environments.\n\nWith growing expertise across LLMs, Agentic AI, RAG architectures, Multi-Agent Systems, MLOps, and deployment automation, he engineers modular AI ecosystems designed for scalability, operational efficiency, and long-term adaptability. His approach combines backend intelligence architecture with frontend product execution, ensuring that complex AI systems are translated into intuitive, high-performance user experiences.\n\nAs Co-Founder, Vedant leads the organization’s platform engineering and frontend execution — architecting enterprise-grade AI systems, intelligent workflows, and modern digital interfaces that align cutting-edge machine learning with commercially scalable product development.",
    avatar: "/images/leadership/vedant.jpeg", 
    color: "#1B5FA8" 
  },
  { 
    name: "Pritam N. Lalwani", 
    role: "Director, Strategic Lead", 
    bio: "With over 16 years of transformative experience, the core of Pritam’s leadership lies in the principle of energy and mass balance.",
    fullBio: "With over 16 years of transformative experience, the core of Pritam’s leadership lies in the principle of energy and mass balance — a systems-thinking approach he applies to strategy, data, and growth. He believes every scalable solution, whether a molecule or a machine learning model, must respect input-output efficiency, minimize waste, and maximize value. This first‑principles mindset de‑risks innovation, protects intellectual property, and ensures decisions are transparent, measurable, and sustainable.\n\nWith the transformative experience across pharmaceutical R&D, green chemistry, nanotechnology, and circular economy, Pritam also commercialized FDA‑approved products, filed multiple patents, and secured 10+ trademarks. As our Director & Strategic Lead, he architects future‑ready AI‑ML roadmaps that bridge deep technology with commercial reality, inspiring trust and confidence among investors and partners.",
    avatar: "/images/leadership/pritam.jpeg", 
    color: "#1A7A6E" 
  },
  { 
    name: "Dr. Bharat Kale", 
    role: "Director & Strategic Advisor | Scientific Governance, Industrial Innovation & Energy-Tech Foresight", 
    bio: "With decades of distinguished leadership across advanced materials science, national R&D ecosystems, and industrial innovation.",
    fullBio: "With decades of distinguished leadership across advanced materials science, national R&D ecosystems, industrial innovation, and translational technology strategy, Dr. Bharat Kale brings a rare combination of scientific depth, commercialization foresight, and institutional credibility to the organization. His experience spans frontier research, scientific administration, innovation governance, and strategic technology development, with recognized contributions across nanomaterials, applied sciences, and scalable industrial frameworks. \n\nHis broader advisory perspective also strengthens the company’s strategic alignment toward high-impact sectors including oil & gas, where scientific precision, infrastructure resilience, and deep-technology integration are critical to operational transformation. As Strategic Advisor, Dr. Kale provides high-level guidance in scientific validation, research governance, institutional partnerships, and long-horizon commercialization strategy—ensuring that advanced AI-ML systems are developed with technical rigor, sectoral relevance, and sustainable industrial applicability. His role reinforces the organization’s capacity to bridge deep science with commercially viable innovation, while strengthening trust among academia, energy stakeholders, strategic partners, and national-scale technology ecosystems.",
    avatar: "/images/leadership/bharat-kale.png", 
    color: "#2C2C2C" 
  },
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
  const [selectedMember, setSelectedMember] = useState<null | typeof board[0]>(null);

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
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
                <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                  <img src={m.avatar} alt={`${m.name} — ${m.role}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="font-rajdhani font-bold text-[11px] tracking-widest uppercase mb-2" style={{ color: m.color }}>{m.role}</div>
                  <h3 className="font-serif text-[22px] text-text-black mb-4">{m.name}</h3>
                  <p className="font-sans text-text-muted text-[14px] line-clamp-3 mb-6">{m.bio}</p>
                  <button 
                    onClick={() => setSelectedMember(m)}
                    className="mt-auto text-gold font-sans font-medium text-[13px] flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read more <span>→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-24 bg-cream-dark px-6 md:px-24 border-t border-gray-mid">
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
