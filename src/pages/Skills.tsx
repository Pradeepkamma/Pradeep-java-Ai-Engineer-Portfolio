import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SkillCard from "@/components/SkillCard";
import SEOHead from "@/components/SEOHead";

const skillCategories = [
  { title: "Programming Languages", skills: ["Python (Basics)", "Java", "OOPs", "JDBC", "Hibernate"] },
  { title: "Front-End Technologies", skills: ["HTML", "CSS", "JavaScript (Basics)"] },
  { title: "Database", skills: ["MySQL", "DBMS"] },
  { title: "Frameworks", skills: ["Spring Boot (Basics)", "FastAPI"] },
  { title: "AI & Image Generation", skills: ["SDXL", "ComfyUI", "ControlNet", "LoRA Training", "RAG Concepts"] },
  { title: "Tools & IDEs", skills: ["VS Code", "Eclipse", "Postman", "Jarvis Labs", "Claude Code", "Cursor"] },
];

const Skills = () => (
  <PageTransition>
    <SEOHead
      title="Skills — K. Pradeep"
      description="Technical skills of K. Pradeep — Java, Python, AI/ML, ComfyUI, and modern development tools."
    />
    <div className="min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <section className="bg-navy pt-28 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-4xl text-white mb-3">
            What I Work With
          </h1>
          <p className="text-white/40 text-sm max-w-md mx-auto">
            Technologies, tools, and frameworks I use to build impactful projects.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
        </div>
      </section>

      {/* Skills grid */}
      <section className="bg-navy pb-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((cat) => (
              <SkillCard key={cat.title} title={cat.title} skills={cat.skills} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>
);

export default Skills;
