"use client";

import React from "react";
import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background Image — very subtle */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Cream overlay — making image very faint */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(247,245,240,0.92)" }} />

      {/* Gold rule at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gold/30" />

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
            Let&apos;s build something powerful together.
          </p>
          <a
            href="https://arqaya.vercel.app/book-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Book A Free Call
          </a>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </section>
  );
};

export default FinalCTA;
