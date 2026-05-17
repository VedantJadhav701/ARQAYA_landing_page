import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";

const jobs = [
  { role: "ML Engineer — Physics-Informed Neural Networks", team: "TENETX", type: "Full-time", loc: "India (Remote)" },
  { role: "LaTeX / Document Engineering Specialist", team: "TEXFLOW", type: "Full-time", loc: "India (Remote)" },
  { role: "Agentic AI Systems Developer", team: "ARQAYAA Core", type: "Full-time", loc: "India (Remote)" },
  { role: "Business Development Manager", team: "Strategy", type: "Full-time", loc: "India" },
  { role: "AI Research Intern", team: "R&D", type: "Internship (6 months)", loc: "India (Remote)" }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <PageHero 
        label="CAREERS"
        title="Build the Future of AI with Us"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
      />

      {/* WHY JOIN */}
      <section className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Mission-Driven Work", desc: "Solve real-world problems for critical industries." },
            { title: "Cutting-Edge Tech", desc: "Work with PINNs, SLMs, and Agentic AI systems." },
            { title: "Growth Culture", desc: "A fast-paced environment where your impact is immediate." }
          ].map(v => (
            <div key={v.title} className="p-8 border border-border rounded-xl bg-cream">
              <h4 className="font-serif text-[24px] text-text-black mb-4">{v.title}</h4>
              <p className="font-sans text-text-mid">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-16">OPEN POSITIONS</div>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-border flex flex-col md:flex-row justify-between items-start md:items-center group hover:border-gold transition-colors shadow-sm">
                <div>
                  <div className="flex gap-4 items-center mb-2">
                    <span className="text-[10px] font-rajdhani font-bold tracking-widest text-gold uppercase">{job.team}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-[10px] font-rajdhani font-bold tracking-widest text-text-muted uppercase">{job.type}</span>
                  </div>
                  <h3 className="font-serif text-[24px] text-text-black group-hover:text-gold transition-colors">{job.role}</h3>
                  <div className="text-text-muted text-[13px] font-sans mt-2">{job.loc}</div>
                </div>
                <button className="btn-primary mt-6 md:mt-0">Apply Now →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
