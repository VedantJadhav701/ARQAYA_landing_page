import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "Insights & Research | Dpulseai",
  description: "Editorial research, technical papers, and industry insights on the future of production-grade AI systems.",
  openGraph: {
    title: "Insights & Research | Dpulseai",
    description: "Editorial research, technical papers, and industry insights on the future of production-grade AI systems.",
    type: "website",
  }
};

export default function InsightsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <InsightsClient />
      <Footer />
    </main>
  );
}
