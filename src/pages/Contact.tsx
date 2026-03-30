import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const contactLinks = [
  { icon: <Mail size={18} />, label: "pradeep1a1225@gmail.com", href: "mailto:pradeep1a1225@gmail.com" },
  { icon: <Phone size={18} />, label: "+91 8247402546", href: "tel:+918247402546" },
  { icon: <Linkedin size={18} />, label: "linkedin.com/in/kammapradeep", href: "https://www.linkedin.com/in/kammapradeep" },
  { icon: <Github size={18} />, label: "github.com/Pradeepkamma", href: "https://github.com/Pradeepkamma" },
  { icon: <MapPin size={18} />, label: "Hyderabad, India", href: undefined },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <section className="bg-navy pt-28 pb-20 min-h-screen">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-3xl md:text-4xl text-white text-center mb-3">
              Let's Work Together
            </h1>
            <p className="text-white/40 text-center mb-12 max-w-md mx-auto">
              Have an opportunity or project in mind? I'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              <div>
                <h2 className="font-heading text-gold text-xl mb-6">Get in Touch</h2>
                <p className="text-white/50 leading-relaxed mb-8 text-sm">
                  I'm currently open to full-time opportunities, freelance projects, and collaborations. If you have something interesting in mind, feel free to reach out!
                </p>
                <div className="space-y-4">
                  {contactLinks.map((c) => (
                    <div key={c.label} className="flex items-center gap-4 group">
                      <span className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center text-gold group-hover:bg-gold/20 transition">
                        {c.icon}
                      </span>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-white/70 text-sm hover:text-gold transition"
                        >
                          {c.label}
                        </a>
                      ) : (
                        <span className="text-white/70 text-sm">{c.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {submitted ? (
                  <div className="bg-gold/10 border border-gold/20 rounded-xl p-8 text-center">
                    <p className="text-gold text-lg font-heading mb-2">✓ Message Sent!</p>
                    <p className="text-white/50 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gold text-navy font-semibold py-3 rounded-lg text-sm hover:opacity-90 transition inline-flex items-center justify-center gap-2"
                    >
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
