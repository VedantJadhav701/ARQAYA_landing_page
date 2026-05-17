import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | ARQAYAA Intelligence",
  description: "Designed for high-impact industries. See how ARQAYAA transforms E-Commerce, Healthcare, Real Estate, and Legal sectors with AI.",
};

export default function IndustriesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <IndustriesClient />
      <Footer />
    </main>
  );
}
