import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import { motion } from "framer-motion";

const boardMembers = [
  {
    name: "Neel Khairnar",
    role: "FOUNDER",
    bio: "Visionary founder driving ARQAYAA's strategic AI architecture and product direction.",
    image: "https://ui-avatars.com/api/?name=Neel+Khairnar&size=300&background=B8922A&color=fff&bold=true"
  },
  {
    name: "Vedant Jadhav",
    role: "CO-FOUNDER",
    bio: "Co-founder leading engineering and technical operations across all subsidiaries.",
    image: "https://ui-avatars.com/api/?name=Vedant+Jadhav&size=300&background=1B5FA8&color=fff&bold=true"
  },
  {
    name: "Pritam Lalvani",
    role: "DIRECTOR, STRATEGIC LEAD",
    bio: "Drives strategic partnerships and market expansion across industrial sectors.",
    image: "https://ui-avatars.com/api/?name=Pritam+Lalvani&size=300&background=1A7A6E&color=fff&bold=true"
  },
  {
    name: "Dr. Bharat Kale",
    role: "DIRECTOR, ADVISOR",
    bio: "Academic advisor and research lead, guiding scientific rigor across ARQAYAA's platforms.",
    image: "https://ui-avatars.com/api/?name=Bharat+Kale&size=300&background=2C2C2C&color=fff&bold=true"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <PageHero 
        label="ABOUT US"
        title="About ARQAYAA"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
      />

      {/* WHO WE ARE */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-sans text-[20px] leading-relaxed text-text-dark">
              ARQAYAA Intelligence Pvt Ltd is an AI systems company headquartered in India, 
              building production-grade artificial intelligence solutions for regulated industries 
              and solving real societal challenges through intelligent automation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
            <h3 className="font-rajdhani font-bold text-[14px] text-gold tracking-widest uppercase mb-6">KEY FACTS</h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "FOUNDED", value: "2024" },
                { label: "HQ", value: "India" },
                { label: "SUBSIDIARIES", value: "2" },
                { label: "SECTOR", value: "AI / ML" }
              ].map(fact => (
                <div key={fact.label}>
                  <div className="text-[11px] font-rajdhani text-text-muted mb-1">{fact.label}</div>
                  <div className="text-[18px] font-serif text-text-black">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-cream-dark px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block w-[1px] h-32 bg-gold/30" />
          <div>
            <div className="section-label mb-6">OUR MISSION</div>
            <p className="font-serif text-[28px] text-text-black leading-tight italic">
              "Deploy reliable, scalable, and high-impact AI systems that bridge the gap between AI hype and business reality."
            </p>
          </div>
          <div>
            <div className="section-label mb-6">OUR VISION</div>
            <p className="font-serif text-[28px] text-text-black leading-tight italic">
              "A world where every industry operates with the intelligence it needs to make better decisions, faster."
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-8">OUR LEADERSHIP</div>
          <h2 className="font-serif text-[42px] text-text-black mb-16">The Team Behind ARQAYAA</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
                <div className="p-6">
                  <div className="font-rajdhani font-bold text-[11px] text-gold tracking-widest uppercase mb-2">{member.role}</div>
                  <h3 className="font-serif text-[22px] text-text-black mb-4">{member.name}</h3>
                  <p className="font-sans text-[14px] text-text-mid leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-gray-light px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16">COMPANY TIMELINE</div>
          <div className="space-y-12">
            {[
              { year: "2024", title: "Company Founded", desc: "ARQAYAA Intelligence Pvt Ltd incorporated in India" },
              { year: "2024", title: "TENETX Launched", desc: "Physics-native AI for oil & gas drilling operations" },
              { year: "2025", title: "TEXFLOW Initiated", desc: "Deterministic typesetting platform for researchers" },
              { year: "2026", title: "Scaling Operations", desc: "Expanding team and research capabilities" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 md:gap-16 items-start">
                <div className="font-serif text-[32px] text-gold leading-none">{item.year}</div>
                <div className="pt-2">
                  <h4 className="font-serif text-[22px] text-text-black mb-2">{item.title}</h4>
                  <p className="font-sans text-text-mid">{item.desc}</p>
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
