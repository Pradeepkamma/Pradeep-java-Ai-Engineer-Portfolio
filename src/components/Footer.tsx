import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy py-10 border-t border-gold/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-primary-foreground/50 dark:text-foreground/50 text-sm">
          © 2026 <span className="text-gold">K. Pradeep</span>. Crafted with care. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/Pradeepkamma" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 dark:text-foreground/40 hover:text-gold transition" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/kammapradeep" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 dark:text-foreground/40 hover:text-gold transition" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:kammapradeep2002@gmail.com" className="text-primary-foreground/40 dark:text-foreground/40 hover:text-gold transition" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
