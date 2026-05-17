import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import { mockArticles } from "@/data/mockData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Development | ARQAYAA Intelligence",
  description: "Exploring the technical frontiers of physics-native AI, deterministic systems, and autonomous industrial logic.",
};

export default function ResearchPage() {
  const researchArticles = mockArticles.filter(a => a.category === "RESEARCH");

  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <PageHero 
        label="TECHNICAL FRONTIERS"
        headline="Research & Development"
        image="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16 text-gold after:bg-gold-rule">PEER-REVIEWED & TECHNICAL PAPERS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {researchArticles.map((post) => (
              <div key={post.slug} className="bg-white border border-gray-mid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col">
                <div className="aspect-[21/9] relative overflow-hidden">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                   <div className="font-rajdhani font-bold text-[11px] text-gold tracking-widest uppercase mb-4">{post.date} · {post.readTime}</div>
                   <h3 className="font-serif text-[28px] text-text-black mb-6 leading-tight group-hover:text-gold transition-colors">{post.title}</h3>
                   <p className="font-sans text-text-mid text-[16px] leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                   <div className="mt-auto flex items-center justify-between">
                      <span className="font-sans text-[13px] text-text-muted">By {post.author}</span>
                      <Link href={`/insights/${post.slug}`} className="text-gold font-rajdhani font-bold text-[12px] tracking-widest uppercase">
                        Download PDF →
                      </Link>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
