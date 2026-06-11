import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import TexflowClient from "./TexflowClient";

export const metadata: Metadata = {
  title: "TEXFLOW | Research Typesetting | Dpulseai",
  description: "Deterministic typesetting for the academic community. Convert Word to publisher-ready PDF instantly without AI hallucinations.",
};

export default function TexflowPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <TexflowClient />
      <Footer />
    </main>
  );
}
