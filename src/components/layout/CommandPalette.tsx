"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, FileText, Globe, Shield, Briefcase, Zap, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const searchItems = [
  { group: "Pages", items: [
    { title: "About Us", href: "/about", icon: <Globe size={16} /> },
    { title: "What We Do", href: "/what-we-do", icon: <Zap size={16} /> },
    { title: "Subsidiaries", href: "/subsidiaries", icon: <Briefcase size={16} /> },
    { title: "Industries", href: "/industries", icon: <Globe size={16} /> },
    { title: "Careers", href: "/careers", icon: <Briefcase size={16} /> },
    { title: "Contact", href: "/contact", icon: <ArrowRight size={16} /> },
  ]},
  { group: "Subsidiaries", items: [
    { title: "TENETX — Oil & Gas AI", href: "/subsidiaries/tenetx", icon: <Shield size={16} /> },
    { title: "TEXFLOW — Research Platform", href: "/subsidiaries/texflow", icon: <FileText size={16} /> },
  ]},
  { group: "Trust", items: [
    { title: "Security & Infrastructure", href: "/security", icon: <Shield size={16} /> },
    { title: "Privacy Policy", href: "/privacy", icon: <Shield size={16} /> },
  ]},
  { group: "Latest Insights", items: [
    { title: "Why Physics-Native AI Matters", href: "/insights/physics-native-ai", icon: <FileText size={16} /> },
    { title: "Failure of Generic LLMs", href: "/insights/industrial-llm-failure", icon: <FileText size={16} /> },
  ]}
];

export default function CommandPalette({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  const handleSelect = (href: string) => {
    router.push(href);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-6 sm:pt-40">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setOpen(false)} 
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-border"
          >
            <Command className="flex flex-col h-full">
              <div className="flex items-center border-b border-border px-6 py-4">
                <Search className="mr-4 text-text-muted" size={20} />
                <Command.Input 
                  placeholder="Search pages, insights, subsidiaries..." 
                  className="w-full bg-transparent border-none outline-none font-sans text-[16px] text-text-black placeholder:text-text-muted"
                />
                <div className="ml-4 px-2 py-1 rounded bg-gray-light text-[10px] font-bold text-text-muted border border-border">ESC</div>
              </div>
              
              <Command.List className="max-h-[400px] overflow-y-auto p-4 custom-scrollbar">
                <Command.Empty className="py-12 text-center text-text-muted font-serif italic">No results found.</Command.Empty>
                
                {searchItems.map((group) => (
                  <Command.Group key={group.group} heading={<span className="px-3 py-2 text-[10px] font-rajdhani font-bold tracking-[0.2em] text-gold uppercase">{group.group}</span>}>
                    <div className="mt-2 mb-4">
                      {group.items.map((item) => (
                        <Command.Item
                          key={item.href}
                          onSelect={() => handleSelect(item.href)}
                          className="flex items-center gap-4 px-3 py-4 rounded-xl cursor-pointer hover:bg-cream transition-colors group data-[selected='true']:bg-cream"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gray-light flex items-center justify-center text-text-muted group-hover:text-gold transition-colors">
                            {item.icon}
                          </div>
                          <div className="flex-grow">
                             <div className="font-serif text-[17px] text-text-black">{item.title}</div>
                             <div className="text-[12px] text-text-muted font-sans">{item.href}</div>
                          </div>
                          <ArrowRight size={14} className="text-text-muted opacity-0 group-hover:opacity-100 group-data-[selected='true']:opacity-100 transition-all" />
                        </Command.Item>
                      ))}
                    </div>
                  </Command.Group>
                ))}
              </Command.List>

              <div className="flex items-center justify-between px-6 py-3 border-t border-border bg-gray-50/50 text-[11px] font-sans text-text-muted">
                 <div className="flex gap-4">
                    <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded border border-border bg-white shadow-sm">↑↓</kbd> to navigate</span>
                    <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded border border-border bg-white shadow-sm">Enter</kbd> to select</span>
                 </div>
                 <span className="font-serif italic">Institutional Search</span>
              </div>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
