import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CertCard from "@/components/CertCard";
import SEOHead from "@/components/SEOHead";

const Certifications = () => (
  <PageTransition>
    <SEOHead
      title="Certifications — K. Pradeep"
      description="Professional certifications of K. Pradeep in Java Full Stack Development and Generative AI."
    />
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-background pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-3">
            Certifications
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-12" />
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
  </PageTransition>
);

export default Certifications;
