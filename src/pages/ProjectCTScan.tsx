import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectDetailLayout from "@/components/ProjectDetailLayout";

const ProjectCTScan = () => (
  <PageTransition>
    <div className="min-h-screen">
      <Navbar />
      <ProjectDetailLayout
        title="CT Image Segmentation — Pneumonia Detection"
        description="A deep learning-based medical imaging project designed to detect pneumonia from CT scan images. The system automatically analyzes lung CT images, identifies infected regions, and classifies them with high accuracy — assisting doctors in early diagnosis and reducing manual effort."
        tags={["Deep Learning", "Python", "Medical AI", "Image Segmentation"]}
        githubUrl="https://github.com/Pradeepkamma"
        liveUrl="#"
        whatIBuilt={[
          "Built a deep learning-based segmentation model to classify CT lung images as pneumonia or normal, assisting doctors in early diagnosis.",
          "Utilized dense context learning to improve segmentation accuracy and reduce manual diagnostic effort.",
          "Processed CT lung images to extract meaningful features for precise medical predictions.",
          "Achieved 95% accuracy rate, significantly enhancing reliability and speed in medical image diagnosis workflows.",
          "Engineered an advanced CT image segmentation framework that segments both local and global image features for accurate detection of pneumonia-affected regions.",
        ]}
        tools={["Python", "Deep Learning", "Dense Context Learning", "Image Segmentation", "Jupyter Notebook", "NumPy", "OpenCV"]}
        outcomes={[
          "95% accuracy rate in classifying CT lung images as pneumonia or normal.",
          "Reduced manual diagnostic effort and time significantly for medical professionals.",
          "Successfully segmented both local and global image features for precise region detection.",
        ]}
      />
      <Footer />
    </div>
  </PageTransition>
);

export default ProjectCTScan;
