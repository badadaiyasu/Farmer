import { Button } from "../components/ui/button";
import { Languages, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-hero" />
            <span className="text-xl font-bold text-foreground">FarmConnect</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#marketplace" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Marketplace
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#for-farmers" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              For Farmers
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Languages className="h-4 w-4" />
                  <span className="hidden sm:inline">English</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>አማርኛ (Amharic)</DropdownMenuItem>
                <DropdownMenuItem>Afaan Oromoo</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" className="gap-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Sign In</span>
            </Button>

            <Button size="sm" className="bg-gradient-hero border-0 shadow-soft hover:shadow-elevated transition-all">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
