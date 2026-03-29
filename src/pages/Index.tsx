import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImg from "@/assets/profile.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const coreSkills = [
  "Java Full Stack",
  "Python (Basics)",
  "FastAPI",
  "ComfyUI",
  "LoRA Training",
  "RAG Concepts",
  "MySQL",
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="bg-navy pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.span
            {...fadeUp(0.1)}
            className="inline-block border border-gold text-gold text-xs px-4 py-1.5 rounded-full mb-6"
          >
            Available for Opportunities
          </motion.span>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-heading text-white text-4xl md:text-5xl lg:text-6xl mb-4"
          >
            Hi, I'm <span className="text-gold">Pradeep</span> Kamma
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-white/60 text-lg mb-4"
          >
            Java Full Stack Developer & Generative AI Engineer
          </motion.p>

          <motion.p
            {...fadeUp(0.35)}
            className="text-white/50 text-sm leading-relaxed max-w-lg mb-8 mx-auto md:mx-0"
          >
            B.Tech graduate in Information Technology. I build robust backends,
            craft clean frontends, and explore the frontier of Generative AI &
            LLM Engineering. A quick learner who adapts fast and delivers results.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-3 bg-gold text-navy rounded-lg font-medium text-sm hover:opacity-90 transition"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium text-sm hover:border-gold hover:text-gold transition"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.4)}
          className="hidden md:block relative"
        >
          <div className="absolute -inset-3 border-2 border-gold/30 rounded-2xl translate-x-3 translate-y-3" />
          <img
            src={profileImg}
            alt="K. Pradeep"
            className="w-72 h-80 object-cover rounded-2xl relative z-10"
            width={288}
            height={320}
          />
        </motion.div>
      </div>
    </section>

    {/* Skills Strip */}
    <section className="bg-card py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
        <span className="text-gold text-xs uppercase tracking-widest font-semibold shrink-0">
          Core Skills
        </span>
        <div className="flex flex-wrap justify-center gap-3">
          {coreSkills.map((s) => (
            <span
              key={s}
              className="px-4 py-2 bg-off-white text-navy text-sm rounded-full font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="bg-off-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl text-foreground mb-3">Featured Projects</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
        </div>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="px-6 py-3 border border-navy text-navy rounded-lg font-medium text-sm hover:bg-navy hover:text-white transition"
          >
            All Projects
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
