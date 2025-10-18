import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-electric-blue/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-foreground">Digital</span>
              <span className="text-electric-blue glow-text">Tikka</span>
            </div>
            <p className="text-muted-foreground">
              Scaling brands with creativity & data.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-blue">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-electric-blue transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-electric-blue">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-3 rounded-full border border-electric-blue/30 hover:border-electric-blue hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-electric-blue" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-electric-blue/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 DigitalTikka. Built by Sociqo
          </p>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-electric-blue/10 p-3 rounded-full border border-electric-blue hover:bg-electric-blue/20 hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5 text-electric-blue" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
