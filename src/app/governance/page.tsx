import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "AI Governance | ARQAYAA Intelligence",
  description: "Our principles for responsible, ethical, and deterministic AI deployment.",
};

export default function GovernancePage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-[150px] pb-24 px-6 md:px-24">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-p:font-sans prose-p:text-text-dark">
          <h1 className="text-4xl md:text-[56px] text-text-black mb-12 border-b border-gray-200 pb-8">AI Governance & Ethics</h1>
          
          <p className="text-[20px] leading-relaxed mb-10 text-text-black font-medium">
            ARQAYAA Intelligence is committed to developing AI systems that augment human capability without compromising safety, equity, or transparency.
          </p>

          <h2 className="text-[32px] mt-12 mb-6">Our Core Principles</h2>
          
          <h3 className="text-[24px] mt-8 mb-4">1. Determinism Over Probability</h3>
          <p>
            In critical industrial infrastructure, "close enough" is a failure state. We mandate that our systems governing physical assets rely on deterministic mathematical rules rather than pure probabilistic token prediction. If a system cannot guarantee a physically safe output, it defaults to human handover.
          </p>

          <h3 className="text-[24px] mt-8 mb-4">2. Explainability</h3>
          <p>
            Every decision made by an ARQAYAA agent must be traceable. Our multi-agent orchestration layers log their intermediate reasoning steps, API calls, and logic paths so that human operators can audit the exact chain of thought that led to an action.
          </p>

          <h3 className="text-[24px] mt-8 mb-4">3. Human-in-the-Loop Architecture</h3>
          <p>
            We design systems to accelerate human decision-making, not bypass it. High-stakes actions (e.g., altering pipeline pressure, executing financial transactions) always require explicit human authorization in the workflow.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
