"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Search } from "lucide-react";

export const mockArticles = [
  {
    slug: "deterministic-ai-in-highly-regulated-industries",
    category: "RESEARCH",
    title: "The Case for Deterministic AI in Highly Regulated Industries",
    excerpt: "Why stochastic probabilistic models (LLMs) fail in environments where accuracy cannot be compromised, and how hybrid deterministic systems bridge the gap.",
    date: "May 12, 2026",
    readTime: "8 min read",
    author: "Vedant Jadhav",
    image: "https://images.unsplash.com/photo-1620825937374-87fc1d62c262?w=1200&q=85&fit=crop"
  },
  {
    slug: "physics-informed-neural-networks-oil-gas",
    category: "TENETX",
    title: "Physics-Informed Neural Networks: The Next Frontier in Oil & Gas",
    excerpt: "Exploring how embedding Navier-Stokes equations into model architecture reduces data dependency by 90% in drilling optimization.",
    date: "April 28, 2026",
    readTime: "12 min read",
    author: "Neel Khairnar",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&q=85&fit=crop"
  },
  {
    slug: "automating-compliance-academic-publishing",
    category: "TEXFLOW",
    title: "Automating Compliance: The Hidden Cost of Academic Typesetting",
    excerpt: "An analysis of the millions of hours lost annually by researchers formatting documents, and the computational approach to solving it.",
    date: "March 15, 2026",
    readTime: "6 min read",
    author: "Dr. Bharat Kale",
    image: "https://images.unsplash.com/photo-1456324504439-23fe879ce859?w=1200&q=85&fit=crop"
  },
  {
    slug: "enterprise-agentic-architecture-patterns",
    category: "ENGINEERING",
    title: "Enterprise Agentic Architecture Patterns",
    excerpt: "Designing stateful, recoverable, and auditable multi-agent systems for enterprise deployment.",
    date: "February 04, 2026",
    readTime: "15 min read",
    author: "Vedant Jadhav",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=85&fit=crop"
  }
];

export default function InsightsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "RESEARCH", "TENETX", "TEXFLOW", "ENGINEERING"];

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "ALL" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageHero
        label="INSIGHTS & RESEARCH"
        headline="Editorial Perspectives on Industrial Intelligence"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85&fit=crop"
        alt="Library or research facility"
      />

      <section className="py-20 bg-white px-6 md:px-24 min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 border-b border-gray-mid pb-8">
            <div className="flex flex-wrap gap-4">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-rajdhani font-bold text-[13px] tracking-widest uppercase px-4 py-2 rounded transition-colors ${activeCategory === cat ? 'bg-black text-white' : 'bg-cream text-text-mid hover:text-black'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search insights..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-3 pl-10 focus:outline-none focus:border-gold font-sans bg-cream"
              />
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            </div>
          </div>

          {/* Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {filteredArticles.map((article, idx) => (
                <motion.div 
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <Link href={`/insights/${article.slug}`} className="block">
                    <div className="rounded-xl overflow-hidden mb-6 aspect-video">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-rajdhani font-bold text-[11px] tracking-widest text-gold uppercase">{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="font-sans text-[13px] text-text-muted">{article.readTime}</span>
                    </div>
                    <h3 className="font-serif text-[28px] leading-tight text-text-black mb-4 group-hover:text-gold transition-colors">{article.title}</h3>
                    <p className="font-sans text-text-mid mb-6 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-serif text-[12px] text-text-black font-bold">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="font-sans text-[13px]">
                        <span className="text-text-black font-medium">{article.author}</span>
                        <span className="text-text-muted mx-2">|</span>
                        <span className="text-text-muted">{article.date}</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-[24px] text-text-muted">No insights found matching your search criteria.</p>
              <button onClick={() => {setSearchQuery(''); setActiveCategory('ALL');}} className="mt-4 text-gold font-bold font-sans hover:underline">Clear filters</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
