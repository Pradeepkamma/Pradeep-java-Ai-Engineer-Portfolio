import { Link } from "react-router-dom";
import { ArrowRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, tags, link, githubUrl }: ProjectCardProps) => (
  <Link
    to={link}
    className="group flex flex-col bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 hover:-translate-y-2 border border-border hover:border-gold/30 h-full"
  >
    <div className="bg-navy h-40 flex items-center justify-center px-6 shrink-0 overflow-hidden">
      <h3 className="font-heading text-gold text-lg text-center leading-snug group-hover:scale-105 transition-transform duration-300">{title}</h3>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-off-white text-foreground font-medium border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed flex-1">{description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-gold text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1.5 transition-all">
          View Project <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
        {githubUrl && (
          <span
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open(githubUrl, "_blank", "noopener,noreferrer");
            }}
            className="text-muted-foreground hover:text-foreground transition p-1"
            aria-label="GitHub Repository"
          >
            <Github size={16} />
          </span>
        )}
      </div>
    </div>
  </Link>
);

export default ProjectCard;
