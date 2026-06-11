"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const members = [
  { 
    name: "Dpulseai Expert", 
    role: "AI/ML Strategy", 
    bio: "Specializing in the intersection of frontier intelligence systems, scalable engineering, and commercialization-first innovation.",
    fullBio: "Operating at the intersection of frontier intelligence systems, scalable engineering, and commercialization-first innovation. Expertise lies in systems architecture — the belief that every intelligent pipeline, from data ingestion to deployment, must optimize precision, adaptability, and operational efficiency. Approaching innovation through modular intelligence design, where RAG pipelines, LLM ecosystems, and AgenticOps frameworks are engineered as scalable business infrastructure.",
    avatar: "https://ui-avatars.com/api/?name=Dpulseai+Expert&background=B8922A&color=fff", 
    accentColor: "#B8922A" 
  },
  { 
    name: "Dpulseai Expert", 
    role: "Platform Engineering", 
    bio: "Focusing on building scalable AI platforms that bridge intelligent systems, production engineering, and modern digital experiences.",
    fullBio: "Specializing in building scalable AI platforms that bridge intelligent systems, production engineering, and modern digital experiences. Work focuses on transforming advanced AI research into deployment-ready infrastructure capable of operating reliably in real-world environments.",
    avatar: "https://ui-avatars.com/api/?name=Dpulseai+Expert&background=1B5FA8&color=fff", 
    accentColor: "#1B5FA8" 
  },
  { 
    name: "Dpulseai Expert", 
    role: "Strategic Operations", 
    bio: "Applying first-principles thinking to strategy, data, and growth to ensure every scalable solution respects input-output efficiency.",
    fullBio: "Leadership rooted in the principle of energy and mass balance — a systems-thinking approach applied to strategy, data, and growth. Believing every scalable solution, whether a molecule or a machine learning model, must respect input-output efficiency, minimize waste, and maximize value.",
    avatar: "https://ui-avatars.com/api/?name=Dpulseai+Expert&background=1A7A6E&color=fff", 
    accentColor: "#1A7A6E" 
  },
  { 
    name: "Dpulseai Expert", 
    role: "Scientific Advisory", 
    bio: "Providing distinguished leadership across advanced science, national R&D ecosystems, and industrial innovation.",
    fullBio: "Bringing a combination of scientific depth, commercialization foresight, and institutional credibility to the organization. Experience spans frontier research, scientific administration, innovation governance, and strategic technology development, with recognized contributions across scalable industrial frameworks.",
    avatar: "https://ui-avatars.com/api/?name=Dpulseai+Expert&background=2C2C2C&color=fff", 
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
            The Team Behind Dpulseai
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
                  alt={`${member.name} — ${member.role} at Dpulseai`}
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
 Leadership;
