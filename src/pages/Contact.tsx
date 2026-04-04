import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import SEOHead from "@/components/SEOHead";

const contactLinks = [
  { icon: <Mail size={18} />, label: "kammapradeep2002@gmail.com", href: "mailto:kammapradeep2002@gmail.com" },
  { icon: <Phone size={18} />, label: "+91 8247402546", href: "tel:+918247402546" },
  { icon: <Linkedin size={18} />, label: "linkedin.com/in/kammapradeep", href: "https://www.linkedin.com/in/kammapradeep" },
  { icon: <Github size={18} />, label: "github.com/Pradeepkamma", href: "https://github.com/Pradeepkamma" },
  { icon: <MapPin size={18} />, label: "Hyderabad, India", href: undefined },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:kammapradeep2002@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Hi Pradeep,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <SEOHead
        title="Contact — K. Pradeep"
        description="Get in touch with K. Pradeep for job opportunities, freelance projects, or collaborations."
      />
      <div className="min-h-screen">
        <Navbar />

        {/* Hero banner */}
        <section className="bg-navy pt-28 pb-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-3xl md:text-4xl text-primary-foreground dark:text-foreground mb-3">
              Let's Work Together
            </h1>
            <p className="text-primary-foreground/40 dark:text-foreground/40 text-sm max-w-md mx-auto">
              Have an opportunity or project in mind? I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact content */}
        <section className="bg-background py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              <div>
                <h2 className="font-heading text-gold text-xl mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
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
                          className="text-muted-foreground text-sm hover:text-gold transition"
                        >
                          {c.label}
                        </a>
                      ) : (
                        <span className="text-muted-foreground text-sm">{c.label}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {submitted ? (
                  <div className="bg-gold/10 border border-gold/20 rounded-xl p-8 text-center">
                    <p className="text-gold text-lg font-heading mb-2">✓ Message Sent!</p>
                    <p className="text-muted-foreground text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="mt-4 text-gold/70 text-xs hover:text-gold transition underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/20 transition resize-none"
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
