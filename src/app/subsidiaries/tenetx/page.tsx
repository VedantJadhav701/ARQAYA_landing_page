import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";
import { Check } from "lucide-react";

export default function TenetxPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        label="TENETX — OIL & GAS INTELLIGENCE"
        title="Physics-Native AI for Drilling Operations"
        image="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1920"
      />

      {/* THE PROBLEM */}
      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="section-label mb-8">THE CHALLENGE</div>
            <h2 className="font-serif text-[42px] text-text-black leading-tight mb-8">
              Why Drilling Operations Need Domain-Specific AI
            </h2>
          </div>
          <div className="space-y-8">
            <p className="font-sans text-text-dark text-[18px]">
              ∼30% time lost to unplanned drilling incidents (NPT). 
              ₹4 Crore average cost per drilling operation.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                "Cloud-dependent systems are too slow for rig operations",
                "General AI models have 1–5% error rates — dangerous for O&G",
                "Data sovereignty risks with public cloud deployment"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-lg border border-border">
                  <Check className="text-tenetx-primary mt-1" size={18} />
                  <span className="font-sans text-[15px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16">THE TENETX SOLUTION</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="font-sans text-text-dark text-[18px] mb-8 leading-relaxed">
                The TENETFlow model utilizes Physics-Informed Neural Networks (PINNs) 
                to ground AI predictions in Darcy's Law and structural mechanics. 
                Deployed 100% on-premise, it operates air-gapped from the public internet.
              </p>
              <div className="space-y-6">
                <div className="bg-tenetx-light p-6 rounded-xl border border-tenetx-primary/10">
                   <h4 className="font-bebas text-[24px] text-tenetx-primary mb-2">TENETFlow Model Architecture</h4>
                   <div className="flex items-center gap-4 text-[12px] font-rajdhani font-bold tracking-widest text-text-muted uppercase">
                      INPUT → PREPROCESS → [PINN + SLM] → FUSION → OUTPUT
                   </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "100% Air-Gapped", desc: "Zero cloud dependency, full data sovereignty." },
                { title: "Physics-Native", desc: "PINNs grounded in Darcey's Law — error < 0.5%." },
                { title: "Legacy Ready", desc: "Integrates with existing SCADA/IoT streams." },
                { title: "Cost Optimized", desc: "₹0.08/query vs ₹4–8 conventional systems." }
              ].map((card, idx) => (
                <div key={idx} className="bg-cream p-8 rounded-xl border border-border">
                  <h4 className="font-sans font-bold text-tenetx-primary mb-2">{card.title}</h4>
                  <p className="font-sans text-[14px] text-text-muted leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-24 px-6 md:px-24 bg-gray-light">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16">APPLICATIONS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Stuck Pipe Prediction",
              "Kick/Blowout Detection",
              "ROP Optimization",
              "Corrosion Prediction"
            ].map((app, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all">
                <h4 className="font-serif text-[22px] text-text-black mb-4">{app}</h4>
                <div className="text-tenetx-primary font-rajdhani font-bold tracking-widest text-[11px] uppercase">Operational Case Study →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
