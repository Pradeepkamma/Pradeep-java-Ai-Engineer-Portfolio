import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="bg-off-white pt-28 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-12">
          Projects
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ProjectCard
            title="AI Product Rendering — TULIPA Noir Blossom"
            description="Built an AI-powered luxury product rendering pipeline for an Indian perfume brand using custom-trained Flux LoRA model and ComfyUI workflows."
            tags={["ComfyUI", "Flux LoRA", "JarvisLabs", "Generative AI"]}
            link="/projects/tulipa"
          />
          <ProjectCard
            title="CT Image Segmentation — Pneumonia Detection"
            description="Deep learning segmentation model to classify CT lung images as pneumonia or normal, achieving 95% accuracy for early medical diagnosis."
            tags={["Deep Learning", "Python", "Medical AI"]}
            link="/projects/ctscan"
          />
          <ProjectCard
            title="Tesla Stock Price Prediction"
            description="Machine learning model using LSTM neural networks to predict Tesla stock prices from historical market data with time-series analysis."
            tags={["Machine Learning", "Python", "LSTM", "Data Science"]}
            link="/projects/tesla"
          />
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Projects;
