"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, FileText, Briefcase, Building, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const searchData = [
  { id: "1", title: "TENETX Pipeline Architecture", type: "technology", url: "/subsidiaries/tenetx", icon: Building },
  { id: "2", title: "TEXFLOW Typesetting Engine", type: "technology", url: "/subsidiaries/texflow", icon: Building },
  { id: "3", title: "Deterministic AI in Highly Regulated Industries", type: "insight", url: "/insights/deterministic-ai-in-highly-regulated-industries", icon: FileText },
  { id: "4", title: "Physics-Informed Neural Networks", type: "insight", url: "/insights/physics-informed-neural-networks-oil-gas", icon: FileText },
  { id: "5", title: "ML Engineer — Physics-Informed Neural Networks", type: "career", url: "/careers", icon: Briefcase },
  { id: "6", title: "National Oil Company Drilling Optimization", type: "case study", url: "/case-studies/national-oil-company-drilling-optimization", icon: FileText },
  { id: "7", title: "Enterprise Security & Zero-Trust", type: "trust", url: "/security", icon: FileText },
];

export default function CommandPalette({ open, setOpen }: Props) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setOpen]);

  const filteredResults = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (url: string) => {
    setOpen(false);
    setQuery("");
    router.push(url);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-xl shadow-2xl z-[201] overflow-hidden flex flex-col max-h-[70vh]"
          >
            <div className="flex items-center px-4 border-b border-gray-200">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search research, subsidiaries, or careers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none py-5 px-4 focus:outline-none focus:ring-0 font-sans text-[16px] text-text-black placeholder-gray-400"
              />
              <button onClick={() => setOpen(false)} className="p-2 text-gray-400 hover:text-black transition-colors rounded-md bg-gray-100 flex items-center gap-1 font-sans text-[10px] font-bold">
                ESC
              </button>
            </div>

            <div className="overflow-y-auto p-4 flex-1 bg-gray-50/50">
              {filteredResults.length === 0 ? (
                <div className="py-12 text-center text-text-muted font-sans text-[14px]">
                  No results found for "{query}"
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="font-rajdhani font-bold text-[10px] text-text-muted uppercase tracking-widest px-2 mb-2">Suggestions</div>
                  {filteredResults.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.url)}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 transition-all group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500 group-hover:text-gold transition-colors">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="font-sans font-medium text-[15px] text-text-black group-hover:text-gold transition-colors">{item.title}</div>
                            <div className="font-sans text-[12px] text-text-muted capitalize">{item.type}</div>
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-gold transition-colors" />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
