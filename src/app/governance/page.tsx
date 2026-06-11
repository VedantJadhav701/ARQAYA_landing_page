import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/PageHero";
import { Gavel, Users, BarChart, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Governance | Dpulseai",
  description: "Our framework for scientific rigor, institutional accountability, and technical governance.",
};

const governancePillars = [
  { icon: <Gavel />, title: "Scientific Rigor", desc: "Every model architecture is validated against established physical laws and academic standards." },
  { icon: <Users />, title: "Institutional Oversight", desc: "Dedicated advisory board overseeing the development of high-impact industrial AI." },
  { icon: <BarChart />, title: "Operational Accountability", desc: "Transparent reporting and Measurable ROI tracking for all pilot and production systems." },
  { icon: <FileText />, title: "Strategic Roadmap", desc: "A long-horizon view of technology development that prioritizes sustainability and growth." }
];

export default function GovernancePage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream">
      <Navbar />
      <PageHero 
        label="INSTITUTIONAL INTEGRITY"
        headline="Corporate Governance"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        alt="Modern corporate boardroom representing governance and integrity"
      />

      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16 text-gold after:bg-gold-rule">GOVERNANCE FRAMEWORK</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {governancePillars.map((p, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-mid shadow-sm hover:shadow-md transition-all group">
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform">{p.icon}</div>
                <h3 className="font-serif text-[22px] text-text-black mb-4">{p.title}</h3>
                <p className="font-sans text-text-mid text-[15px] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
