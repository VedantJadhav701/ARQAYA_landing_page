import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero";
import Problem from "@/sections/Problem";
import Solution from "@/sections/Solution";
import HowItWorks from "@/sections/HowItWorks";
import UseCases from "@/sections/UseCases";
import Differentiation from "@/sections/Differentiation";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070612] text-white selection:bg-white/20 selection:text-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Problem Section */}
      <div id="problem">
        <Problem />
      </div>

      {/* 3. Solution Section */}
      <div id="solution">
        <Solution />
      </div>

      {/* 4. How It Works Section */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* 5. Use Cases Section */}
      <div id="use-cases">
        <UseCases />
      </div>

      {/* 6. Differentiation & Vision */}
      <Differentiation />

      {/* 7. Social Proof, Final CTA & Footer */}
      <Footer />
    </main>
  );
}
