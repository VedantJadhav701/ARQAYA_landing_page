import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import SecurityClient from "./SecurityClient";

export const metadata: Metadata = {
  title: "Security & Trust | Dpulseai",
  description: "Enterprise-grade security infrastructure. AES-256 encryption, air-gapped deployment, and zero-trust architecture.",
};

export default function SecurityPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <SecurityClient />
      <Footer />
    </main>
  );
}
