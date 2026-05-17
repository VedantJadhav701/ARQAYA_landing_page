import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-gold/20 selection:text-text-black">
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />

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
