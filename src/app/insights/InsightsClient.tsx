"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { PostFrontmatter } from "@/lib/mdx";
import { cn } from "@/lib/utils";

interface InsightsClientProps {
  initialPosts: PostFrontmatter[];
}

const categories = ["ALL", "INDUSTRIAL AI", "AUTONOMOUS ENTERPRISE", "RESEARCH", "SECURITY"];

export default function InsightsClient({ initialPosts }: InsightsClientProps) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(search.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = activeCategory === "ALL" || post.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory, initialPosts]);

  const featuredPost = useMemo(() => {
    return initialPosts.find(p => p.featured) || initialPosts[0];
  }, [initialPosts]);

  return (
    <section className="py-24 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* FILTERS & SEARCH */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 border-b border-border pb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "font-rajdhani font-bold text-[11px] tracking-[0.2em] px-6 py-2 border rounded-full transition-all uppercase",
                  activeCategory === cat 
                    ? "bg-gold border-gold text-white" 
                    : "border-border text-text-muted hover:border-gold hover:text-gold"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input
              type="text"
              placeholder="Search insights..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-border pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:border-gold font-sans"
            />
          </div>
        </div>

        {/* FEATURED POST (Only show if no search/category filter or if it matches) */}
        {!search && activeCategory === "ALL" && featuredPost && (
          <div className="mb-20">
            <Link href={`/insights/${featuredPost.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all bg-white border border-border">
              <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-8 left-8 bg-gold text-white px-4 py-1 font-rajdhani font-bold text-[10px] tracking-widest uppercase">
                  FEATURED
                </div>
              </div>
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <div className="font-rajdhani font-bold text-[11px] text-gold tracking-widest uppercase mb-4">
                  {featuredPost.category} — {featuredPost.date}
                </div>
                <h2 className="font-serif text-[32px] md:text-[48px] text-text-black leading-tight mb-6 group-hover:text-gold transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="font-sans text-text-mid text-[17px] leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-gold font-rajdhani font-bold tracking-widest text-[13px] uppercase">
                  Read Article <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* POST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link href={`/insights/${post.slug}`} className="group block h-full">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-sm">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="font-rajdhani font-bold text-[10px] text-gold tracking-widest uppercase mb-3">
                    {post.category} · {post.readTime}
                  </div>
                  <h3 className="font-serif text-[24px] text-text-black leading-tight mb-4 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-sans text-text-muted text-[15px] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-serif text-[24px] text-text-muted">No insights found matching your criteria.</p>
            <button 
              onClick={() => { setSearch(""); setActiveCategory("ALL"); }}
              className="mt-6 text-gold font-rajdhani font-bold tracking-widest uppercase"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
