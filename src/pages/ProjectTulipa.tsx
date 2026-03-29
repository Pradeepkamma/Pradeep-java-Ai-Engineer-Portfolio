import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";

const ProjectTulipa = () => (
  <div className="min-h-screen">
    <Navbar />
    <ProjectDetailLayout
      title="AI Product Rendering — TULIPA Noir Blossom"
      description="An AI-powered luxury product rendering pipeline built for an original Indian perfume brand — TULIPA Noir Blossom. This mid-capstone project covers the full workflow from brand identity creation to campaign-quality image generation using a custom-trained Flux LoRA model on JarvisLabs GPU infrastructure."
      tags={["ComfyUI", "Flux LoRA", "JarvisLabs", "Generative AI", "ControlNet"]}
      githubUrl="https://github.com/Pradeepkamma"
      liveUrl="#"
      whatIBuilt={[
        "Built a complete AI-powered luxury product rendering pipeline for an original Indian perfume brand — from brand identity creation to campaign-quality image generation.",
        "Curated a 30-image training dataset with varied angles, lighting, and character shots with paired caption files and a unique trigger word for model training.",
        "Trained a custom Flux LoRA model on JarvisLabs GPU (Rank 32, Alpha 16, LR 0.0001, 2000 steps) achieving accurate and consistent brand reproduction.",
        "Built a ComfyUI generation workflow integrating Flux Dev, DualCLIPLoader, LoRA injection, and optimized KSampler settings for photorealistic output.",
        "Generated 5 final campaign renders across studio, outdoor, editorial, and lifestyle categories.",
      ]}
      tools={["ComfyUI", "Flux Dev", "LoRA Training", "ControlNet", "JarvisLabs GPU", "DualCLIPLoader", "KSampler", "Python", "SDXL"]}
      outcomes={[
        "Custom Flux LoRA model trained with consistent brand identity reproduction across multiple generation styles.",
        "5 final campaign renders across studio, outdoor, editorial, and lifestyle categories ready for real-world use.",
        "End-to-end pipeline from raw dataset curation → model training → ComfyUI workflow → campaign output.",
      ]}
    />
    <Footer />
  </div>
);

export default ProjectTulipa;
