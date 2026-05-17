import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | ARQAYAA Intelligence",
  description: "Build the future of AI with us. Open positions in ML engineering, document engineering, and business development.",
};

export default function CareersPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <CareersClient />
      <Footer />
    </main>
  );
}
