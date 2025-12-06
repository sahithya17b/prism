import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold gradient-text">PRISM</span>
            <p className="text-sm text-muted-foreground">
              People in Recreation, Innovation, Sports, and Music. Empowering students to explore their passions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Team
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                prism@college.edu
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                Student Activity Center, Block A
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-all hover:scale-110">
                <Instagram size={20} className="text-prism-pink" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-all hover:scale-110">
                <Twitter size={20} className="text-prism-cyan" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-all hover:scale-110">
                <Facebook size={20} className="text-prism-violet" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-all hover:scale-110">
                <Linkedin size={20} className="text-prism-emerald" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PRISM Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
