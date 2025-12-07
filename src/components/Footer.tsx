import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-background border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">T</span>
            </div>
            <span className="font-display text-xl font-semibold tracking-wide text-foreground">
              TRAVEL
            </span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 Travel. Все права защищены.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
