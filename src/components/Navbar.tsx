import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Certifications", path: "/certifications" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-heading text-xl text-gold">
          K. Pradeep
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={`nav-link text-sm tracking-wide transition-colors hover:text-gold pb-1 ${
                  location.pathname === l.path ? "text-gold active" : "text-white/80"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold text-navy rounded-lg text-xs font-semibold hover:opacity-90 transition"
            >
              <Download size={14} />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm transition-colors hover:text-gold ${
                location.pathname === l.path ? "text-gold" : "text-white/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 bg-gold text-navy rounded-lg text-xs font-semibold"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
