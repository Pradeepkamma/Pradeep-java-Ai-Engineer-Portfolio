import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";

const ProjectPortfolio = () => (
  <PageTransition>
    <div className="min-h-screen">
      <Navbar />
      <ProjectDetailLayout
        title="Portfolio Website"
        description="Designed and developed a modern, responsive portfolio website from scratch to showcase my projects, skills, and certifications. Built with a focus on clean design, smooth animations, and excellent user experience."
        tags={["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"]}
        githubUrl="https://github.com/Pradeepkamma"
        liveUrl="https://pradeep-java-aiengineer.lovable.app"
        whatIBuilt={[
          "Designed a premium navy-and-gold visual identity with custom typography and cohesive design tokens.",
          "Built a fully responsive, multi-page portfolio with smooth page transitions using Framer Motion.",
          "Developed reusable React components — ProjectCard, SkillCard, CertCard — for consistent content display.",
          "Implemented sticky navigation with active state highlighting and hover underline animations.",
          "Created dedicated project detail pages with structured layouts for description, tools, and outcomes.",
          "Added a functional contact form and integrated social media links throughout the site.",
        ]}
        tools={[
          "React 18",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Vite",
          "React Router",
          "Lucide Icons",
          "shadcn/ui",
        ]}
        outcomes={[
          "Delivered a polished, professional portfolio that effectively communicates skills and project experience.",
          "Achieved fast load times with Vite build system and optimized asset handling.",
          "Created a scalable, maintainable codebase with clean component architecture and design tokens.",
        ]}
      />
      <Footer />
    </div>
  </PageTransition>
);

export default ProjectPortfolio;
