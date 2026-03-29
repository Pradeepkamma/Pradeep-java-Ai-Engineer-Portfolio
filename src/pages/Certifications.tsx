import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertCard from "@/components/CertCard";

const Certifications = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="bg-background pt-28 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">
          Certifications
        </h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <CertCard
            title="Java Full Stack Development"
            issuer="Codegnan IT Solutions"
            status="completed"
          />
          <CertCard
            title="AI Cohort — Generative AI & LLM Engineering"
            issuer="100xEngineers"
            status="in-progress"
          />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Certifications;
