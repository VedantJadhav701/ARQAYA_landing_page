import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import SubsidiariesClient from "./SubsidiariesClient";

export const metadata: Metadata = {
  title: "Our Subsidiaries | ARQAYAA Intelligence",
  description: "Explore ARQAYAA's specialized subsidiaries: TENETX for Oil & Gas intelligence, and TEXFLOW for academic research typesetting.",
};

export default function SubsidiariesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <SubsidiariesClient />
      <Footer />
    </main>
  );
}
