import { useState } from "react";
import { Mail, MapPin, Phone, Send, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsLoading(false);
  };

  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-prism-pink", label: "Instagram" },
    { icon: Twitter, href: "#", color: "hover:text-prism-cyan", label: "Twitter" },
    { icon: Facebook, href: "#", color: "hover:text-prism-violet", label: "Facebook" },
    { icon: Linkedin, href: "#", color: "hover:text-prism-emerald", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-prism-cyan/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions or want to collaborate? We'd love to hear from you. Reach out and let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="prism-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@college.edu"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us more..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message <Send className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="prism-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-prism-violet/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-prism-violet" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Student Activity Center, Block A<br />
                      College Campus, Main Road<br />
                      City - 500001
                    </p>
                  </div>
                </div>
              </div>

              <div className="prism-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-prism-cyan/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-prism-cyan" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground">
                      General: prism@college.edu<br />
                      Events: events.prism@college.edu
                    </p>
                  </div>
                </div>
              </div>

              <div className="prism-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-prism-pink/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-prism-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Office: +91 98765 43210<br />
                      Mon - Fri: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="prism-card p-6">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`p-3 rounded-xl bg-muted text-muted-foreground transition-all hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="prism-card p-4 overflow-hidden">
            <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">Interactive map will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
