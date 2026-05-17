import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies | ARQAYAA Intelligence",
  description: "Explore how ARQAYAA Intelligence transforms industries with production-grade AI deployments.",
};

export default function CaseStudiesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <CaseStudiesClient />
      <Footer />
    </main>
  );
}
