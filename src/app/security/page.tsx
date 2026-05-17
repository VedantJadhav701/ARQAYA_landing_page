import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import { Shield, Lock, Eye, Server, Cpu, Globe } from "lucide-react";

export const metadata = {
  title: "Security & Trust | ARQAYAA Intelligence",
  description: "Enterprise-grade security infrastructure including air-gapped deployment, AES-256 encryption, and RBAC governance.",
};

const trustPillars = [
  {
    icon: <Lock />,
    title: "AES-256 Encryption",
    desc: "All data at rest and in transit is encrypted using military-grade AES-256 standards with rotating keys."
  },
  {
    icon: <Shield />,
    title: "RBAC & SSO",
    desc: "Granular Role-Based Access Control integrated with your existing Enterprise SSO (SAML/Okta)."
  },
  {
    icon: <Server />,
    title: "Air-Gapped Deployment",
    desc: "TENETX can be deployed in 100% offline environments with zero external dependency."
  },
  {
    icon: <Eye />,
    title: "Audit Logging",
    desc: "Comprehensive immutable logs of every system interaction for institutional compliance."
  }
];

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        label="INSTITUTIONAL TRUST"
        title="Security & Infrastructure"
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920"
      />

      {/* CORE SECURITY */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="section-label mb-8">FOUNDATION OF TRUST</div>
            <h2 className="font-serif text-[42px] text-text-black leading-tight mb-8">
              Designed for the Most Regulated Industries
            </h2>
            <p className="font-sans text-text-mid text-[18px] leading-relaxed mb-12">
              ARQAYAA builds intelligence systems for environments where data sovereignty is 
              not optional. Our architecture is designed from the ground up to support 
              air-gapped, on-premise, and hybrid cloud deployments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {trustPillars.map((p, idx) => (
                <div key={idx}>
                  <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center text-gold mb-4 border border-border">
                    {p.icon}
                  </div>
                  <h4 className="font-sans font-bold text-text-black mb-2 uppercase text-[13px] tracking-widest">{p.title}</h4>
                  <p className="font-sans text-text-muted text-[14px] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-light p-12 rounded-2xl border border-border flex items-center justify-center">
             {/* Security Visualization Placeholder */}
             <div className="text-center">
                <div className="relative inline-block mb-8">
                   <Shield size={120} className="text-gold opacity-10" />
                   <Lock size={48} className="text-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="font-serif text-[24px] text-text-black mb-2">Immutable Governance</div>
                <div className="font-sans text-text-muted">Enterprise-wide security policy enforcement.</div>
             </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE BADGES */}
      <section className="py-24 bg-cream-dark px-6 md:px-24">
         <div className="max-w-7xl mx-auto text-center">
            <div className="section-label justify-center mb-16">ALIGNED STANDARDS</div>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
               {["GDPR COMPLIANT", "ISO 27001 ALIGNED", "SOC2 READY", "HIPAA SECURE"].map(badge => (
                 <div key={badge} className="px-8 py-4 border border-text-muted rounded font-rajdhani font-bold text-[14px] tracking-widest">
                    {badge}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* DATA SOVEREIGNTY */}
      <section className="py-24 px-6 md:px-24">
         <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-serif text-[36px] text-text-black mb-8">Your Data, Your Infrastructure.</h3>
            <p className="font-sans text-text-mid text-[18px] mb-12">
               Unlike consumer AI companies, ARQAYAA never uses your operational data to train 
               base models. Your intelligence stays within your boundary—whether that is a 
               private cloud VPC or an offshore rig server.
            </p>
            <div className="inline-flex gap-8">
               <div className="flex flex-col items-center">
                  <Cpu size={32} className="text-gold mb-2" />
                  <span className="font-rajdhani font-bold text-[11px] tracking-widest uppercase">Local Inference</span>
               </div>
               <div className="w-12 h-[1px] bg-border mt-4" />
               <div className="flex flex-col items-center">
                  <Globe size={32} className="text-gold mb-2" />
                  <span className="font-rajdhani font-bold text-[11px] tracking-widest uppercase">Zero Cloud Leak</span>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
