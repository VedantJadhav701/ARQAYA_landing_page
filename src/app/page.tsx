import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import CompanyVideo from "@/components/video/CompanyVideo";
import Discover from "@/sections/Discover";
import Believe from "@/sections/Believe";
import Stats from "@/sections/Stats";
import Tenetx from "@/sections/Tenetx";
import Texflow from "@/sections/Texflow";
import Solutions from "@/sections/Solutions";
import Industries from "@/sections/Industries";
import Process from "@/sections/Process";
import Leadership from "@/sections/Leadership";
import Differentiators from "@/sections/Differentiators";
import FinalCTA from "@/sections/FinalCTA";
import Footer from "@/sections/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/20 selection:text-text-black">
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 1.5 COMPANY FILM PREVIEW */}
      <section className="py-24 bg-[#060608] px-6 md:px-24 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <div className="lg:w-[45%]">
            <div className="section-label mb-8 text-gold after:bg-gold-rule">COMPANY FILM</div>
            <h2 className="font-serif text-[42px] md:text-[52px] leading-tight text-white mb-8">
              See What We're Building.
            </h2>
            <p className="font-sans text-white/70 text-[18px] leading-relaxed mb-10 max-w-xl">
              A 90-second look at ARQAYAA Intelligence — our mission, 
              our subsidiaries, and the AI systems we're building for India and beyond.
            </p>
            <Link href="/video" className="inline-flex items-center gap-4 text-gold font-rajdhani font-bold tracking-[0.2em] text-[13px] uppercase group border border-gold/30 px-8 py-4 rounded-full hover:bg-gold hover:text-white transition-all">
               Watch Full Film 
               <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                 →
               </div>
            </Link>
          </div>
          <div className="lg:w-[55%] w-full">
            <Link href="/video" className="block relative group">
               <CompanyVideo previewMode={true} />
               {/* Hover Glow Effect */}
               <div className="absolute inset-0 rounded-xl border border-gold/0 group-hover:border-gold/50 group-hover:shadow-[0_0_30px_rgba(184,146,42,0.2)] transition-all duration-500 pointer-events-none" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Discover ARQAYAA */}
      <Discover />

      {/* 3. What We Believe */}
      <Believe />

      {/* 4. At A Glance (Stats) */}
      <Stats />

      {/* 5. TENETX Deep-Dive */}
      <div id="tenetx">
        <Tenetx />
      </div>

      {/* 6. TEXFLOW Deep-Dive */}
      <div id="texflow">
        <Texflow />
      </div>

      {/* 7. Our Solutions */}
      <div id="solutions">
        <Solutions />
      </div>

      {/* 8. Industries We Serve */}
      <Industries />

      {/* 9. Our Process */}
      <div id="process">
        <Process />
      </div>

      {/* 10. Leadership */}
      <Leadership />

      {/* 11. Why ARQAYAA (Differentiators) */}
      <Differentiators />

      {/* 12. Final CTA & Footer */}
      <FinalCTA />
      <Footer />
    </main>
  );
}
