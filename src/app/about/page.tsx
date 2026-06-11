import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Dpulseai",
  description: "Learn about Dpulseai — our mission, vision, and company values. Building India's AI infrastructure.",
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
