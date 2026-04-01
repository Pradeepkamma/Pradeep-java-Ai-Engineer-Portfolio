import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import SEOHead from "@/components/SEOHead";

const Projects = () => (
  <PageTransition>
    <SEOHead
      title="Projects — K. Pradeep"
      description="Real-world projects by K. Pradeep — AI systems, full-stack applications, and machine learning models built end-to-end."
    />
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-off-white pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl text-foreground text-center mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Real-world projects I've designed and built end-to-end — from AI systems to full-stack applications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ProjectCard
              title="AI Product Rendering — TULIPA Noir Blossom"
              description="Built an AI-powered luxury product rendering pipeline using custom-trained Flux LoRA model and ComfyUI workflows. Generated campaign-level product images."
              tags={["ComfyUI", "Flux LoRA", "JarvisLabs", "Generative AI"]}
              link="/projects/tulipa"
              githubUrl="https://github.com/Pradeepkamma"
            />
            <ProjectCard
              title="CT Image Segmentation — Pneumonia Detection"
              description="Developed a deep learning segmentation model achieving 95% accuracy for classifying CT lung images as pneumonia or normal for early medical diagnosis."
              tags={["Deep Learning", "Python", "Medical AI"]}
              link="/projects/ctscan"
              githubUrl="https://github.com/Pradeepkamma"
            />
            <ProjectCard
              title="Tesla Stock Price Prediction"
              description="Built an LSTM neural network model for time-series stock price forecasting using historical Tesla market data with technical indicators."
              tags={["Machine Learning", "Python", "LSTM", "Data Science"]}
              link="/projects/tesla"
              githubUrl="https://github.com/Pradeepkamma/Tesla-Stock-Price-Prediction"
            />
            <ProjectCard
              title="Portfolio Website"
              description="Designed and developed this portfolio from scratch using React, TypeScript, Tailwind CSS, and Framer Motion with smooth page transitions."
              tags={["React", "TypeScript", "Tailwind CSS", "Framer Motion"]}
              link="/projects/portfolio"
              githubUrl="https://github.com/Pradeepkamma"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </PageTransition>
);

export default Projects;
