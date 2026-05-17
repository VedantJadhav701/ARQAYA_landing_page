import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import TenetxClient from "./TenetxClient";

export const metadata: Metadata = {
  title: "TENETX | Oil & Gas Intelligence | ARQAYAA",
  description: "Physics-Native AI for Drilling Operations. TENETX provides 100% air-gapped, sub-second inference AI for the oil and gas industry.",
};

export default function TenetxPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <TenetxClient />
      <Footer />
    </main>
  );
}
