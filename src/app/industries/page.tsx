import Navbar from "@/components/layout/Navbar";
import Footer from "@/sections/Footer";
import PageHero from "@/components/layout/PageHero";

const industryData = [
  {
    name: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200",
    solutions: "Customer support AI agents, personalized recommendation engines."
  },
  {
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    solutions: "Patient data analysis AI, automated medical transcription."
  },
  {
    name: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    solutions: "Intelligent lead qualification, property valuation models."
  },
  {
    name: "Legal",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    solutions: "Automated document review, smart legal research assistants."
  }
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        label="INDUSTRIES"
        title="Industries We Serve"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 px-6 md:px-24 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-8">OUR SECTORS</div>
          <h2 className="font-serif text-[42px] text-text-black leading-tight max-w-3xl">
            Designed for High-Impact Industries Where Accuracy is Mission-Critical
          </h2>
        </div>
      </section>

      {industryData.map((item, idx) => (
        <section key={idx} className={`py-24 px-6 md:px-24 ${idx % 2 === 0 ? "bg-white" : "bg-gray-light"}`}>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
               <h3 className="font-serif text-[36px] text-text-black mb-6">{item.name}</h3>
               <p className="font-sans text-text-mid text-[17px] mb-8 leading-relaxed">
                 {item.solutions}
               </p>
               <button className="btn-primary">Talk to an Expert →</button>
            </div>
            <div className={`rounded-xl overflow-hidden shadow-2xl ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
               <img src={item.image} alt={item.name} className="w-full h-full object-cover aspect-video" />
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}
