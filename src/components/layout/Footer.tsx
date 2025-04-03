
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container flex flex-col md:flex-row items-center justify-between py-8 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-honey-500 flex items-center justify-center">
            <span className="font-bold text-white">BP</span>
          </div>
          <span className="text-lg font-bold">BeePulse</span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
        
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BeePulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
