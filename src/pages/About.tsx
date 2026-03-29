import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import profileImg from "@/assets/profile.jpg";

const highlights = [
  {
    icon: "🎓",
    title: "Education",
    text: "B.Tech in Information Technology — NRI Institute of Technology, Vijayawada (2020–2024). CGPA: 8.1",
  },
  {
    icon: "💻",
    title: "Core Expertise",
    text: "Java Full Stack Development with hands-on experience in OOPs, JDBC, Hibernate, Spring Boot, HTML, CSS, JavaScript, and MySQL.",
  },
  {
    icon: "🤖",
    title: "Currently Learning",
    text: "Generative AI & LLM Engineering — working with Flux LoRA, ComfyUI, RAG systems, and FastAPI for AI services.",
  },
  {
    icon: "⚡",
    title: "Work Philosophy",
    text: "Quick learner who adapts fast. I don't just follow tutorials — I build real things and understand why they work.",
  },
];

const infoGrid = [
  { label: "Name", value: "K. Pradeep" },
  { label: "Location", value: "Hyderabad, India" },
  { label: "Email", value: "pradeep1a1225@gmail.com" },
  { label: "Degree", value: "B.Tech — IT (CGPA 8.1)" },
  { label: "Phone", value: "+91 8247402546" },
  { label: "Status", value: "Open to Work ✅", isGreen: true },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-12 text-center">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left - Bio */}
          <div>
            <p className="text-gray-text leading-relaxed mb-4">
              I'm K. Pradeep, a B.Tech graduate in Information Technology from NRI Institute of Technology, Vijayawada. I'm passionate about building things that work — from clean Java backends to intelligent AI-powered systems.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              My journey started with core Java and web technologies, and over time I've expanded into Machine Learning and now Generative AI. I'm currently part of an AI Cohort focused on Generative AI & LLM Engineering, where I'm working with tools like ComfyUI, Flux, LoRA Training, RAG systems, and FastAPI.
            </p>
            <p className="text-gray-text leading-relaxed mb-8">
              I believe in learning by doing. Every project I take on pushes me to understand technology deeper and apply it to real-world problems. I'm actively looking for opportunities where I can contribute, grow, and keep building.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {infoGrid.map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-gold uppercase tracking-wider font-semibold mb-1">{item.label}</p>
                  <p className={`text-sm ${item.isGreen ? "text-green-600" : "text-foreground"}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Photo + Highlights */}
          <div>
            <div className="flex justify-center mb-8">
              <img
                src={profileImg}
                alt="K. Pradeep"
                className="w-44 h-44 rounded-full object-cover border-4 border-gold/40"
                loading="lazy"
                width={176}
                height={176}
              />
            </div>

            <div className="space-y-4">
              {highlights.map((h) => (
                <div key={h.title} className="border-l-2 border-gold pl-4">
                  <h3 className="font-heading text-foreground text-base mb-1">
                    {h.icon} {h.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
