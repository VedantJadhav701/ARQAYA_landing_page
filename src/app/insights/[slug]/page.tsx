import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { MDXContent } from "@/components/mdx/MDXContent";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";

interface InsightPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts("insights");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: InsightPostPageProps) {
  const post = getPostBySlug("insights", params.slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} | ARQAYAA Insights`,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      images: [post.frontmatter.image],
    },
  };
}

export default function InsightPostPage({ params }: InsightPostPageProps) {
  const post = getPostBySlug("insights", params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ARTICLE HERO */}
      <section className="relative pt-[164px] pb-24 px-6 md:px-24 bg-cream">
        <div className="max-w-4xl mx-auto">
          <Link href="/insights" className="flex items-center gap-2 text-gold font-rajdhani font-bold text-[11px] tracking-widest uppercase mb-12 hover:gap-3 transition-all">
            <ArrowLeft size={14} /> Back to Insights
          </Link>
          
          <div className="font-rajdhani font-bold text-[11px] text-gold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
             {post.frontmatter.category}
             <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
             {post.frontmatter.date}
          </div>
          
          <h1 className="font-serif text-[42px] md:text-[64px] text-text-black leading-[1.1] mb-12">
            {post.frontmatter.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 border-t border-border pt-8">
             <div className="flex items-center gap-3">
                <img src={post.frontmatter.authorImage} alt={post.frontmatter.author} className="w-10 h-10 rounded-full border border-border" />
                <div>
                   <div className="text-[10px] font-rajdhani font-bold text-text-muted uppercase tracking-widest">AUTHOR</div>
                   <div className="font-serif text-[17px] text-text-black">{post.frontmatter.author}</div>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-border text-gold">
                   <Clock size={18} />
                </div>
                <div>
                   <div className="text-[10px] font-rajdhani font-bold text-text-muted uppercase tracking-widest">READ TIME</div>
                   <div className="font-serif text-[17px] text-text-black">{post.frontmatter.readTime}</div>
                </div>
             </div>
             <div className="ml-auto">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-all">
                   <Share2 size={18} />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="px-6 md:px-24 -mt-12 mb-24">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl aspect-[21/9]">
           <img src={post.frontmatter.image} alt={post.frontmatter.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-24 pb-32">
        <div className="max-w-3xl mx-auto relative">
           {/* STICKY TOC PLACEHOLDER */}
           <div className="hidden xl:block absolute -left-64 top-0 w-48 h-full">
              <div className="sticky top-40">
                 <div className="text-[11px] font-rajdhani font-bold text-text-muted tracking-widest uppercase mb-6">CONTENTS</div>
                 <div className="space-y-4">
                    <div className="text-[13px] font-sans text-gold font-bold">Introduction</div>
                    <div className="text-[13px] font-sans text-text-muted hover:text-text-black transition-colors cursor-pointer">Technical Overview</div>
                    <div className="text-[13px] font-sans text-text-muted hover:text-text-black transition-colors cursor-pointer">Implementation</div>
                    <div className="text-[13px] font-sans text-text-muted hover:text-text-black transition-colors cursor-pointer">Summary</div>
                 </div>
              </div>
           </div>

           <MDXContent source={post.content} />
           
           <div className="mt-24 pt-12 border-t border-border flex justify-between items-center">
              <div className="font-serif italic text-[20px] text-text-black">
                Share this analysis
              </div>
              <div className="flex gap-4">
                 {["LinkedIn", "X", "Email"].map(platform => (
                   <button key={platform} className="px-6 py-2 border border-border rounded-full font-rajdhani font-bold text-[11px] tracking-widest uppercase hover:border-gold hover:text-gold transition-all">
                      {platform}
                   </button>
                 ))}
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
