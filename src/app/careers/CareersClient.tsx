"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";

const jobs = [
  {
    id: 1,
    title: "ML Engineer — Physics-Informed Neural Networks",
    team: "TENETX",
    location: "India Remote",
    type: "Full-time",
    desc: "You will lead the development of our PINN architecture for real-time drilling optimization. Requires deep expertise in PyTorch and fluid dynamics."
  },
  {
    id: 2,
    title: "LaTeX / Document Engineering Specialist",
    team: "TEXFLOW",
    location: "India Remote",
    type: "Full-time",
    desc: "Build deterministic parsing engines bridging Microsoft Word XML and publisher-ready LaTeX. Python and deep LaTeX macro knowledge required."
  },
  {
    id: 3,
    title: "Agentic AI Systems Developer",
    team: "ARQAYAA Core",
    location: "India Remote",
    type: "Full-time",
    desc: "Develop our core autonomous agent framework that powers our enterprise solutions. Experience with LangChain, LangGraph, and tool-use is essential."
  },
  {
    id: 4,
    title: "Business Development Manager",
    team: "Strategy",
    location: "India",
    type: "Full-time",
    desc: "Drive enterprise adoption of our AI systems across industrial sectors. B2B enterprise sales experience in deep tech required."
  },
  {
    id: 5,
    title: "AI Research Intern",
    team: "R&D",
    location: "India",
    type: "Internship (6 months)",
    desc: "Work with our founding team on experimental agentic architectures. Final year CS/AI students preferred."
  }
];

export default function CareersClient() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const openApplication = (title: string) => {
    setSelectedJobTitle(title);
    setModalOpen(true);
    setFormState('idle');
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <>
      <PageHero
        label="CAREERS"
        headline="Build the Future of AI with Us"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85&fit=crop"
        alt="Team collaborating in a modern office"
      />

      {/* Why Join */}
      <section className="py-24 bg-white px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-6">WHY ARQAYAA?</div>
            <h2 className="font-serif text-3xl md:text-[42px] leading-tight text-text-black">The Place for Builders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-cream p-8 rounded-lg border border-gray-mid text-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xl mx-auto mb-6">🚀</div>
              <h3 className="font-sans font-bold text-[18px] text-text-black mb-3">Meaningful Mission</h3>
              <p className="font-sans text-text-mid text-[15px]">We build AI that impacts critical infrastructure and global research, not just chatbots.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-cream p-8 rounded-lg border border-gray-mid text-center">
              <div className="w-12 h-12 rounded-full bg-tenetx-primary/20 text-tenetx-primary flex items-center justify-center text-xl mx-auto mb-6">💻</div>
              <h3 className="font-sans font-bold text-[18px] text-text-black mb-3">Hard Engineering</h3>
              <p className="font-sans text-text-mid text-[15px]">Solve complex problems in physics-informed neural networks and deterministic parsing.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-cream p-8 rounded-lg border border-gray-mid text-center">
              <div className="w-12 h-12 rounded-full bg-texflow-primary/20 text-texflow-primary flex items-center justify-center text-xl mx-auto mb-6">📈</div>
              <h3 className="font-sans font-bold text-[18px] text-text-black mb-3">Accelerated Growth</h3>
              <p className="font-sans text-text-mid text-[15px]">Early-stage equity, high autonomy, and direct collaboration with the founding team.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-light px-6 md:px-24 border-t border-gray-mid">
        <div className="max-w-4xl mx-auto">
          <div className="section-label mb-10">OPEN POSITIONS</div>
          
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white border border-gray-mid rounded-lg overflow-hidden shadow-sm">
                <button 
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  className="w-full px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between text-left hover:bg-cream/50 transition-colors"
                >
                  <div>
                    <h3 className="font-serif text-[22px] md:text-[26px] text-text-black mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 font-sans text-[13px] font-medium">
                      <span className={`px-3 py-1 rounded-full ${job.team === 'TENETX' ? 'bg-tenetx-light text-tenetx-primary' : job.team === 'TEXFLOW' ? 'bg-texflow-light text-texflow-primary' : 'bg-gold/20 text-gold'}`}>{job.team}</span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-text-mid">{job.location}</span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-text-mid">{job.type}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0 text-text-muted">
                    {expandedJob === job.id ? '−' : '+'}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedJob === job.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-4 border-t border-gray-100">
                        <p className="font-sans text-text-dark leading-relaxed mb-6">{job.desc}</p>
                        <button 
                          onClick={() => openApplication(job.title)}
                          className="bg-black text-white font-rajdhani font-bold tracking-widest uppercase text-[13px] px-8 py-3 rounded hover:bg-gold transition-colors"
                        >
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[90vh]"
            >
              <button onClick={() => setModalOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

              {formState === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 className="font-serif text-3xl text-text-black mb-3">Application Submitted</h3>
                  <p className="font-sans text-text-mid mb-8">Thank you for your interest in joining ARQAYAA. We&apos;ll review your profile and be in touch soon.</p>
                  <button onClick={() => setModalOpen(false)} className="bg-black text-white px-6 py-2 rounded font-sans text-sm">Close</button>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-[32px] text-text-black mb-2">Apply for Role</h2>
                  <p className="font-sans font-bold text-gold mb-8">{selectedJobTitle}</p>
                  
                  <form onSubmit={handleApply} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Full Name *</label>
                        <input required type="text" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black font-sans" />
                      </div>
                      <div>
                        <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Email Address *</label>
                        <input required type="email" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black font-sans" />
                      </div>
                    </div>
                    <div>
                      <label className="block font-sans text-[13px] font-bold text-text-black mb-2">LinkedIn Profile URL *</label>
                      <input required type="url" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black font-sans" />
                    </div>
                    <div>
                      <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Resume / CV *</label>
                      <input required type="file" accept=".pdf,.doc,.docx" className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black font-sans file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-black hover:file:bg-gray-200" />
                    </div>
                    <div>
                      <label className="block font-sans text-[13px] font-bold text-text-black mb-2">Cover Letter / Note</label>
                      <textarea rows={4} className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black font-sans resize-none"></textarea>
                    </div>
                    <button type="submit" disabled={formState === 'loading'} className="w-full bg-gold text-white font-rajdhani font-bold tracking-widest uppercase py-4 rounded hover:bg-gold-light transition-colors flex justify-center items-center">
                      {formState === 'loading' ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      ) : "Submit Application"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
