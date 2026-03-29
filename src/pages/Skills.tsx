import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkillCard from "@/components/SkillCard";

const skillCategories = [
  { title: "Programming Languages", skills: ["Python (Basics)", "Java", "OOPs", "JDBC", "Hibernate"] },
  { title: "Front-End Technologies", skills: ["HTML", "CSS", "JavaScript (Basics)"] },
  { title: "Database", skills: ["MySQL", "DBMS"] },
  { title: "Frameworks", skills: ["Spring Boot (Basics)", "FastAPI"] },
  { title: "AI & Image Generation", skills: ["SDXL", "ComfyUI", "ControlNet", "LoRA Training", "RAG Concepts"] },
  { title: "Tools & IDEs", skills: ["VS Code", "Eclipse", "Postman", "Jarvis Labs", "Claude Code", "Cursor"] },
];

const Skills = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="bg-navy pt-28 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-4xl text-white text-center mb-12">
          What I Work With
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} title={cat.title} skills={cat.skills} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Skills;
