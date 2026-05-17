import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | ARQAYAA Intelligence",
  description: "Get in touch with ARQAYAA Intelligence. Book a free consultation, request a demo, or ask about our AI solutions for your industry.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <ContactClient />
      <Footer />
    </main>
  );
}
