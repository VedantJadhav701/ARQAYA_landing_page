import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import Link from "next/link";

export default function SubsidiariesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <PageHero 
        label="SUBSIDIARIES"
        title="Our Strategic Businesses"
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920"
      />

      {/* TENETX BLOCK */}
      <section className="py-24 px-6 md:px-24 bg-tenetx-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-bebas text-[80px] text-tenetx-primary leading-none mb-4">TENETX</h2>
            <h4 className="font-rajdhani font-bold text-[14px] text-text-muted tracking-widest uppercase mb-8">Industrial Oil & Gas Intelligence</h4>
            <p className="font-sans text-text-dark text-[17px] mb-10 leading-relaxed">
              Physics-native AI designed for mission-critical drilling operations. 
              TENETX delivers on-premise, 100% air-gapped intelligence that reduces error rates 
              and optimizes ROP without compromising data sovereignty.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-10">
              {[
                { label: "ERROR RATE", value: "<0.5%" },
                { label: "COST", value: "₹0.08/q" },
                { label: "SOVEREIGNTY", value: "100%" }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-[10px] font-rajdhani text-text-muted mb-1 uppercase tracking-wider">{stat.label}</div>
                  <div className="text-[20px] font-serif text-tenetx-primary font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
            <Link href="/subsidiaries/tenetx" className="btn-primary bg-tenetx-primary hover:bg-tenetx-dark inline-block">
              Explore TENETX →
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200" alt="Oil & Gas" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* TEXFLOW BLOCK */}
      <section className="py-24 px-6 md:px-24 bg-texflow-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200" alt="Academic Research" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-rajdhani font-bold text-[64px] text-texflow-primary leading-none mb-4">TEXFLOW</h2>
            <h4 className="font-rajdhani font-bold text-[14px] text-text-muted tracking-widest uppercase mb-8">Automated Typesetting Compliance Platform</h4>
            <p className="font-sans text-text-dark text-[17px] mb-10 leading-relaxed">
              Deterministic, zero-AI document processing for researchers and publishers. 
              Convert Word manuscripts into perfectly formatted, journal-compliant LaTeX and PDFs 
              instantly with 100% precision.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-10">
              {[
                { label: "DETERMINISM", value: "100%" },
                { label: "DATA PURGE", value: "48hr" },
                { label: "TEMPLATES", value: "ALL" }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="text-[10px] font-rajdhani text-text-muted mb-1 uppercase tracking-wider">{stat.label}</div>
                  <div className="text-[20px] font-serif text-texflow-primary font-bold">{stat.value}</div>
                </div>
              ))}
            </div>
            <Link href="/subsidiaries/texflow" className="btn-primary bg-texflow-primary hover:bg-texflow-dark inline-block">
              Explore TEXFLOW →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
