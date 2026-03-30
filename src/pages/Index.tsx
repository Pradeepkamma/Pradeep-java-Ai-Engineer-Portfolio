import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
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
  <PageTransition>
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.span
              {...fadeUp(0.1)}
              className="inline-block border border-green-400/60 text-green-400 text-xs px-4 py-1.5 rounded-full mb-6 font-medium"
            >
              🟢 Open to Work
            </motion.span>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-heading text-white text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
            >
              Hi, I'm <span className="text-gold">Pradeep</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-gold/90 text-lg md:text-xl font-medium mb-4"
            >
              Java Full Stack Developer & AI Engineer
            </motion.p>

            <motion.p
              {...fadeUp(0.35)}
              className="text-white/50 text-sm leading-relaxed max-w-lg mb-8 mx-auto md:mx-0"
            >
              I build scalable web applications and AI-powered systems.
              B.Tech graduate in Information Technology — a quick learner who adapts fast and delivers results.
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/projects"
                className="px-6 py-3 bg-gold text-navy rounded-lg font-semibold text-sm hover:opacity-90 transition inline-flex items-center gap-2"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium text-sm hover:border-gold hover:text-gold transition inline-flex items-center gap-2"
              >
                <Download size={16} /> Download Resume
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 border border-white/20 text-white/70 rounded-lg font-medium text-sm hover:border-gold hover:text-gold transition"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.4)}
            className="hidden md:block relative"
          >
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 blur-sm" />
            <div className="relative">
              <img
                src={profileImg}
                alt="K. Pradeep"
                className="w-72 h-80 object-cover rounded-2xl relative z-10 shadow-2xl shadow-gold/10"
                width={288}
                height={320}
              />
              <div className="absolute -bottom-3 -right-3 w-72 h-80 border-2 border-gold/30 rounded-2xl z-0" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Strip */}
      <section className="bg-card py-10 border-y border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
          <span className="text-gold text-xs uppercase tracking-widest font-semibold shrink-0">
            Core Skills
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {coreSkills.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-off-white text-navy text-sm rounded-full font-medium hover:shadow-md transition-shadow"
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

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ProjectCard
              title="AI Product Rendering — TULIPA Noir Blossom"
              description="Built an AI-powered luxury product rendering pipeline using custom-trained Flux LoRA model and ComfyUI workflows. Generated campaign-level product images."
              tags={["ComfyUI", "Flux LoRA", "Generative AI"]}
              link="/projects/tulipa"
            />
            <ProjectCard
              title="CT Image Segmentation — Pneumonia Detection"
              description="Developed a deep learning segmentation model achieving 95% accuracy for classifying CT lung images, assisting doctors in early medical diagnosis."
              tags={["Deep Learning", "Python", "Medical AI"]}
              link="/projects/ctscan"
            />
            <ProjectCard
              title="Tesla Stock Price Prediction"
              description="Built an LSTM neural network model for time-series stock price forecasting using historical Tesla market data with technical indicators."
              tags={["LSTM", "Python", "Data Science"]}
              link="/projects/tesla"
            />
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="px-6 py-3 border border-navy text-navy rounded-lg font-medium text-sm hover:bg-navy hover:text-white transition inline-flex items-center gap-2"
            >
              All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>
);

export default Index;
