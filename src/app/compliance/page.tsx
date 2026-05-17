import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import { ShieldCheck, Scale, FileText, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance & Standards | ARQAYAA Intelligence",
  description: "Our institutional commitment to regulatory compliance, data standards, and ethical AI deployment.",
};

const standards = [
  { icon: <ShieldCheck />, title: "GDPR COMPLIANCE", desc: "Full alignment with General Data Protection Regulation for EU and global operations." },
  { icon: <Scale />, title: "ETHICAL AI FRAMEWORK", desc: "Implementation of OECD AI Principles for responsible and transparent machine learning." },
  { icon: <FileText />, title: "ISO 27001", desc: "Information security management systems aligned with global best practices." },
  { icon: <Landmark />, title: "REGULATORY REPORTING", desc: "Standardized audit trails and compliance logging for regulated industrial sectors." }
];

export default function CompliancePage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        label="INSTITUTIONAL RIGOR"
        headline="Compliance & Standards"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
        alt="Institutional compliance documents and professional setting"
      />

      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {standards.map((s, idx) => (
              <div key={idx} className="p-10 border border-gray-mid rounded-2xl bg-cream flex gap-8 items-start group hover:border-gold transition-all">
                <div className="w-12 h-12 rounded-lg bg-white border border-border flex items-center justify-center text-gold shadow-sm group-hover:scale-110 transition-transform">
                   {s.icon}
                </div>
                <div>
                   <h3 className="font-rajdhani font-bold text-[14px] text-text-black tracking-[0.2em] uppercase mb-4">{s.title}</h3>
                   <p className="font-sans text-text-mid text-[16px] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
