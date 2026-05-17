import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Case Studies | ARQAYAA Intelligence",
  description: "Real-world implementations of physics-native AI and autonomous systems across regulated industries.",
};

export default function CaseStudiesPage() {
  const cases = getAllPosts("case-studies");

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <PageHero 
        label="PROOF OF PERFORMANCE"
        title="Enterprise Case Studies"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cases.map((item, idx) => (
              <Link href={`/case-studies/${item.slug}`} key={item.slug} className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all">
                <div className="aspect-video relative overflow-hidden">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 font-rajdhani font-bold text-[10px] tracking-widest uppercase text-text-black">
                      {item.category}
                   </div>
                </div>
                <div className="p-10">
                   <h3 className="font-serif text-[28px] text-text-black mb-6 leading-tight group-hover:text-gold transition-colors">
                      {item.title}
                   </h3>
                   <p className="font-sans text-text-muted text-[16px] leading-relaxed mb-8 line-clamp-2">
                      {item.excerpt}
                   </p>
                   <div className="flex items-center gap-4 text-gold font-rajdhani font-bold tracking-widest text-[12px] uppercase">
                      View Deployment Details <ArrowRight size={16} />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
