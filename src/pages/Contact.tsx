import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactLinks = [
  { icon: "✉️", label: "pradeep1a1225@gmail.com", href: "mailto:pradeep1a1225@gmail.com" },
  { icon: "📞", label: "+91 8247402546", href: "tel:+918247402546" },
  { icon: "🔗", label: "linkedin.com/in/kammapradeep", href: "https://www.linkedin.com/in/kammapradeep" },
  { icon: "🐙", label: "github.com/Pradeepkamma", href: "https://github.com/Pradeepkamma" },
  { icon: "📍", label: "Hyderabad, India", href: undefined },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-navy pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-3xl md:text-4xl text-white text-center mb-12">
            Let's Connect
          </h1>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {/* Left - Info */}
            <div>
              <p className="text-white/60 leading-relaxed mb-8">
                I'm currently open to full-time opportunities, freelance projects, and collaborations. If you have something interesting in mind, feel free to reach out!
              </p>
              <div className="space-y-4">
                {contactLinks.map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-lg">
                      {c.icon}
                    </span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-white/80 text-sm hover:text-gold transition"
                      >
                        {c.label}
                      </a>
                    ) : (
                      <span className="text-white/80 text-sm">{c.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div>
              {submitted ? (
                <div className="bg-white/5 rounded-lg p-8 text-center">
                  <p className="text-gold text-lg font-heading">✓ Message sent!</p>
                  <p className="text-white/60 text-sm mt-2">I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-gold focus:outline-none transition"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-gold focus:outline-none transition"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-gold focus:outline-none transition"
                  />
                  <textarea
                    placeholder="Message"
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-gold focus:outline-none transition resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gold text-navy font-medium py-3 rounded-lg text-sm hover:opacity-90 transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
