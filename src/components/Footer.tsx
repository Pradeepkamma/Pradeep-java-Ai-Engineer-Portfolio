import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy py-10 border-t border-gold/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/50 text-sm">
          © 2026 <span className="text-gold">K. Pradeep</span>. Crafted with care. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/Pradeepkamma" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/kammapradeep" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:pradeep1a1225@gmail.com" className="text-white/40 hover:text-gold transition" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
