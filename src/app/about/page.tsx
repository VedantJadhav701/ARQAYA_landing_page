import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | ARQAYAA Intelligence Pvt Ltd",
  description: "Learn about ARQAYAA Intelligence — our mission, vision, board of directors, and company values. Building India's AI infrastructure.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <AboutClient />
      <Footer />
    </main>
  );
}
