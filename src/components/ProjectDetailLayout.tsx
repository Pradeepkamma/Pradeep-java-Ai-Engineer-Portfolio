import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";

interface ProjectDetailLayoutProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  whatIBuilt: string[];
  tools: string[];
  outcomes: string[];
}

const ProjectDetailLayout = ({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  whatIBuilt,
  tools,
  outcomes,
}: ProjectDetailLayoutProps) => (
  <div className="min-h-screen bg-background pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <Link
        to="/projects"
        className="text-gold text-sm inline-flex items-center gap-1.5 mb-8 hover:gap-2.5 transition-all font-medium"
      >
        <ArrowLeft size={14} /> Back to Projects
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-navy/10 text-navy font-medium">
            {t}
          </span>
        ))}
      </div>

      <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4">{title}</h1>
      <p className="text-gray-text leading-relaxed mb-6">{description}</p>

      <div className="flex flex-wrap gap-3 mb-12">
        {githubUrl && githubUrl !== "#" && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-navy text-white rounded-lg text-sm font-medium hover:opacity-90 transition inline-flex items-center gap-2"
          >
            <Github size={16} /> GitHub Repository
          </a>
        )}
        {liveUrl && liveUrl !== "#" && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gold text-navy rounded-lg text-sm font-medium hover:opacity-90 transition inline-flex items-center gap-2"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>

      <Section title="What I Built">
        <ul className="space-y-3">
          {whatIBuilt.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-text text-sm leading-relaxed">
              <span className="text-gold mt-0.5 shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Tools & Technologies">
        <div className="flex flex-wrap gap-2">
          {tools.map((t) => (
            <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-navy/10 text-navy font-medium">
              {t}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Key Outcomes">
        <ul className="space-y-3">
          {outcomes.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-text text-sm leading-relaxed">
              <span className="text-gold mt-0.5 shrink-0">→</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  </div>
);

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl text-foreground mb-1">{title}</h2>
    <div className="w-10 h-0.5 bg-gold mb-4" />
    {children}
  </div>
);

export default ProjectDetailLayout;
