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
    <main className="min-h-screen bg-white">
      {/* 1. Navigation & Hero */}
      <Navbar darkMode={false} />
      <Hero />

      {/* 2. Discover Dpulseai */}
      <div id="discover">
        <Discover />
      </div>

      {/* 3. Company Film Section — Aramco Style */}
      <section className="py-24 bg-white px-6 md:px-24 border-t border-gray-mid">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="section-label mb-8 text-gold after:bg-gold-rule">COMPANY FILM</div>
            <h2 className="font-serif text-[42px] md:text-[52px] leading-tight text-text-black mb-8">
              See What We're Building.
            </h2>
            <p className="font-sans text-text-mid text-[18px] leading-relaxed mb-10 max-w-xl">
              A 90-second look at Dpulseai — our mission, 
              our subsidiaries, and the AI systems we're building for India and beyond.
            </p>
            <Link href="/video" className="inline-flex items-center gap-4 text-gold font-rajdhani font-bold tracking-[0.2em] text-[13px] uppercase group border border-gold px-8 py-4 rounded-full hover:bg-gold hover:text-white transition-all">
               Watch Full Film 
               <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                  →
               </div>
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <CompanyVideo />
          </div>
        </div>
      </section>

      {/* 4. Believe */}
      <Believe />

      {/* 5. Stats */}
      <Stats />

      {/* 6. Subsidiaries (TENETX & TEXFLOW) */}
      <div id="subsidiaries">
        <Tenetx />
        <Texflow />
      </div>

      {/* 7. Solutions */}
      <div id="solutions">
        <Solutions />
      </div>

      {/* 8. Industries */}
      <div id="industries">
        <Industries />
      </div>

      {/* 9. Our Process */}
      <div id="process">
        <Process />
      </div>

      {/* 10. Leadership */}
      <Leadership />

      {/* 11. Why Dpulseai (Differentiators) */}
      <Differentiators />

      {/* 12. Final CTA & Footer */}
      <FinalCTA />
      <Footer />
    </main>
  );
}
