import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import WhatWeDoClient from "./WhatWeDoClient";

export const metadata: Metadata = {
  title: "What We Do | ARQAYAA Intelligence Pvt Ltd",
  description: "Agentic AI systems, domain-specific models, intelligent automation, and production monitoring. See how ARQAYAA builds AI that actually works.",
};

export default function WhatWeDoPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <WhatWeDoClient />
      <Footer />
    </main>
  );
}
