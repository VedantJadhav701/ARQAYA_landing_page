"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-cream-dark border-t border-gold/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-[2px] bg-gold mx-auto mb-10" />
          <h2 className="font-serif text-4xl md:text-[52px] leading-tight text-text-black mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="font-sans text-text-muted text-[18px] mb-12">
            Let's build something powerful together.
          </p>
          <button className="btn-primary">
            Book A Free Call
          </button>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default FinalCTA;
