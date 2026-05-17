import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import { mockArticles } from "@/data/mockData";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Publications | ARQAYAA Intelligence",
  description: "Official releases, technical whitepapers, and corporate reports from ARQAYAA Intelligence Pvt Ltd.",
};

export default function PublicationsPage() {
  const publicationArticles = mockArticles.slice(0, 3); // Showing select papers

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        label="CORPORATE RELEASES"
        headline="Publications"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16 text-gold after:bg-gold-rule">WHITEPAPERS & REPORTS</div>
          <div className="space-y-6">
            {publicationArticles.map((post) => (
              <div key={post.slug} className="bg-white border border-border p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center group hover:border-gold transition-all shadow-sm">
                <div>
                   <div className="font-rajdhani font-bold text-[10px] text-gold tracking-widest uppercase mb-2">{post.category} · OFFICIAL</div>
                   <h3 className="font-serif text-[24px] text-text-black group-hover:text-gold transition-colors">{post.title}</h3>
                   <div className="text-text-muted text-[13px] font-sans mt-2">{post.date} · Corporate Governance</div>
                </div>
                <button className="btn-primary mt-6 md:mt-0">View Report →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
