import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXContent } from "@/components/mdx/MDXContent";
import Link from "next/link";
import { ArrowLeft, Database, Activity, Target } from "lucide-react";
import TenetFlowDiagram from "@/components/visuals/TenetFlowDiagram";

interface CaseStudyPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts("case-studies");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPostPageProps) {
  const post = getPostBySlug("case-studies", params.slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} | ARQAYAA Case Studies`,
    description: post.frontmatter.excerpt,
  };
}

export default function CaseStudyPostPage({ params }: CaseStudyPostPageProps) {
  const post = getPostBySlug("case-studies", params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* CASE STUDY HERO */}
      <section className="relative pt-[164px] pb-24 px-6 md:px-24 bg-cream">
        <div className="max-w-5xl mx-auto">
          <Link href="/case-studies" className="flex items-center gap-2 text-gold font-rajdhani font-bold text-[11px] tracking-widest uppercase mb-12 hover:gap-3 transition-all">
            <ArrowLeft size={14} /> Back to Case Studies
          </Link>
          
          <div className="font-rajdhani font-bold text-[11px] text-gold tracking-[0.2em] uppercase mb-6">
             {post.frontmatter.category} · PILOT ARCHITECTURE
          </div>
          
          <h1 className="font-serif text-[42px] md:text-[64px] text-text-black leading-[1.1] mb-12 max-w-4xl">
            {post.frontmatter.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
             <div>
                <div className="text-[11px] font-rajdhani font-bold text-text-muted uppercase tracking-widest mb-4">INDUSTRY</div>
                <div className="font-serif text-[20px] text-text-black">{post.frontmatter.category}</div>
             </div>
             <div>
                <div className="text-[11px] font-rajdhani font-bold text-text-muted uppercase tracking-widest mb-4">DEPLOYMENT</div>
                <div className="font-serif text-[20px] text-text-black">100% On-Premise</div>
             </div>
             <div>
                <div className="text-[11px] font-rajdhani font-bold text-text-muted uppercase tracking-widest mb-4">OUTCOME</div>
                <div className="font-serif text-[20px] text-gold">22% NPT Reduction</div>
             </div>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="py-24 px-6 md:px-24 bg-white border-b border-border">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
               { icon: <Database />, label: "DATA SOVEREIGNTY", value: "100%", desc: "Air-gapped local execution" },
               { icon: <Activity />, label: "INFERENCE LATENCY", value: "<100ms", desc: "Sub-second real-time response" },
               { icon: <Target />, label: "ROI DELIVERED", value: "₹8.2Cr", desc: "Estimated pilot period savings" }
            ].map((metric, idx) => (
               <div key={idx} className="flex flex-col items-center text-center p-10 bg-cream-dark rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gold mb-6 shadow-sm">
                     {metric.icon}
                  </div>
                  <div className="font-rajdhani font-bold text-[10px] text-text-muted tracking-widest uppercase mb-2">{metric.label}</div>
                  <div className="font-serif text-[42px] text-text-black mb-2">{metric.value}</div>
                  <div className="font-sans text-[14px] text-text-mid">{metric.desc}</div>
               </div>
            ))}
         </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-3xl mx-auto">
           <MDXContent source={post.content} />
           
           {/* Technical Visualization Section */}
           {params.slug === "petroleum-drilling-optimization" && (
             <div className="mt-24">
                <div className="section-label mb-12">TECHNICAL ARCHITECTURE</div>
                <TenetFlowDiagram />
                <p className="mt-8 font-sans text-text-muted text-[14px] text-center italic">
                   Visualization of the TENETFlow pipeline as deployed in the PSU environment.
                </p>
             </div>
           )}

           <div className="mt-24 p-12 bg-gray-light rounded-2xl text-center">
              <h3 className="font-serif text-[28px] text-text-black mb-6">Interested in a similar deployment?</h3>
              <p className="font-sans text-text-mid mb-8 max-w-xl mx-auto">
                 Our engineering team can provide a technical feasibility study for your specific industrial environment.
              </p>
              <Link href="/contact" className="btn-primary inline-block">
                 Request Technical Consultation →
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
