"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  { id: "S1", label: "Sensor Ingestion", desc: "WITSML / SCADA" },
  { id: "S2", label: "Normalization", desc: "Physics-Bound" },
  { id: "S3", label: "Parallel Inference", desc: "PINN + SLM" },
  { id: "S4", label: "Fusion Layer", desc: "Uncertainty Check" },
  { id: "S5", label: "Actionable AI", desc: "ROP / Kick Pred" },
];

export default function TenetFlowDiagram() {
  return (
    <div className="py-16 px-8 bg-[#141414] rounded-2xl border border-white/10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-tenetx-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/10 rounded-xl hover:border-tenetx-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded bg-tenetx-primary/20 flex items-center justify-center text-tenetx-primary font-rajdhani font-bold mb-4 group-hover:bg-tenetx-primary group-hover:text-white transition-all">
                {idx + 1}
              </div>
              <div className="font-rajdhani font-bold text-[11px] text-white tracking-widest uppercase mb-1">{step.label}</div>
              <div className="text-[12px] text-white/50 font-sans">{step.desc}</div>
            </motion.div>
            
            {idx < steps.length - 1 && (
              <div className="hidden md:flex justify-center">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                  className="w-8 h-[1px] bg-white/20 origin-left"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
         <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-rajdhani font-bold text-[10px] text-white tracking-widest uppercase">AIR-GAPPED OPERATION ACTIVE</span>
         </div>
      </div>
    </div>
  );
}
