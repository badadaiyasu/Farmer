import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-hero" />
              <span className="text-xl font-bold text-foreground">FarmConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering Ethiopian farmers and artisans through direct trade and multilingual support.
            </p>
            <div className="flex gap-3">
              {/* Fixed: Added aria-label for accessibility */}
              <a 
                href="#" 
                aria-label="Visit our Facebook page"
                className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary" />
              </a>
              {/* Fixed: Added aria-label for accessibility */}
              <a 
                href="#" 
                aria-label="Visit our Twitter page"
                className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-4 w-4 text-primary" />
              </a>
              {/* Fixed: Added aria-label for accessibility */}
              <a 
                href="#" 
                aria-label="Visit our Instagram page"
                className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">For Buyers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Browse Products</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">How to Buy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">For Farmers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Register Now</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Selling Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@farmconnect.et" className="hover:text-primary transition-colors">
                  hello@farmconnect.et
                </a>
              </li>
              <li>Addis Ababa, Ethiopia</li>
            </ul>
            <div className="mt-4 space-y-1">
              <p className="text-xs text-muted-foreground">Languages:</p>
              <p className="text-sm font-medium">English • አማርኛ • Afaan Oromoo</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 FarmConnect. All rights reserved. Built with ❤️ for Ethiopian communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;