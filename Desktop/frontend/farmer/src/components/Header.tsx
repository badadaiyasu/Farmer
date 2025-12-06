import { Button } from "../components/ui/button";
import { Languages, User, ShoppingCart, Bell, ChevronDown, Menu, X, Sprout, MapPin, Shield } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("EN");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-xl supports-backdrop-filter:bg-background/60 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand Logo Section */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-hero-gradient flex items-center justify-center shadow-lg shadow-primary/20">
                  <Sprout className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 h-5 w-5 rounded-full bg-green-500 border-3 border-background shadow-sm animate-pulse"></div>
              </div>
              
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                  FarmConnect
                </span>
                <span className="text-xs text-muted-foreground font-medium tracking-wider">
                  GROWING COMMUNITIES
                </span>
              </div>
            </div>
            
            {/* Vertical Divider */}
            <div className="hidden lg:block h-8 w-px bg-border ml-3 mr-4"></div>
            
            {/* Live Status Badge */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold border border-green-500/20 flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
                Live Marketplace
              </span>
              
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span className="font-medium">Addis Ababa</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a 
              href="#marketplace" 
              className="group relative px-2 py-1 text-sm font-semibold text-foreground/90 hover:text-primary transition-smooth"
            >
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 opacity-70" />
                <span>Marketplace</span>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-hero-gradient transition-all duration-300 rounded-full"></span>
            </a>
            
            <a 
              href="#how-it-works" 
              className="group relative px-2 py-1 text-sm font-semibold text-foreground/90 hover:text-primary transition-smooth"
            >
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 opacity-70" />
                <span>How It Works</span>
              </div>
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-hero-gradient transition-all duration-300 rounded-full"></span>
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="group flex items-center gap-2 px-2 py-1 text-sm font-semibold text-foreground/90 hover:text-primary transition-smooth">
                  <div className="flex items-center gap-2">
                    <Sprout className="h-4 w-4 opacity-70" />
                    <span>For Farmers</span>
                  </div>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 mt-3 shadow-elevated rounded-xl border border-border bg-popover backdrop-blur-sm"
                align="start"
              >
                <div className="px-3 py-2 border-b border-border">
                  <span className="text-xs font-semibold text-muted-foreground">FARMER RESOURCES</span>
                </div>
                <DropdownMenuItem className="cursor-pointer px-3 py-2.5 hover:bg-accent hover:text-accent-foreground rounded-lg transition-smooth my-1">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium block">Farm Tools</span>
                      <span className="text-xs text-muted-foreground">Equipment & Machinery</span>
                    </div>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="cursor-pointer px-3 py-2.5 hover:bg-accent hover:text-accent-foreground rounded-lg transition-smooth my-1">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium block">Weather Forecast</span>
                      <span className="text-xs text-muted-foreground">7-day predictions</span>
                    </div>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem className="cursor-pointer px-3 py-2.5 hover:bg-accent hover:text-accent-foreground rounded-lg transition-smooth my-1">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                      <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium block">Crop Advisory</span>
                      <span className="text-xs text-muted-foreground">Expert guidance</span>
                    </div>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator className="my-2" />
                
                <DropdownMenuItem className="cursor-pointer px-3 py-2.5 bg-primary/5 hover:bg-primary/10 text-primary rounded-lg transition-smooth">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Join as Farmer</span>
                    <ChevronDown className="h-4 w-4 ml-auto rotate-90" />
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <a 
              href="#about" 
              className="group relative px-2 py-1 text-sm font-semibold text-foreground/90 hover:text-primary transition-smooth"
            >
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-hero-gradient transition-all duration-300 rounded-full"></span>
            </a>
          </nav>

          {/* Action Buttons Section */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Notification Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="relative h-9 w-9 rounded-full hover:bg-accent hover:text-accent-foreground transition-smooth hidden sm:flex"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center border-2 border-background shadow-sm">
                3
              </span>
            </Button>

            {/* Cart Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="relative h-9 w-9 rounded-full hover:bg-accent hover:text-accent-foreground transition-smooth hidden sm:flex"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-green-500 text-xs text-white flex items-center justify-center border-2 border-background shadow-sm">
                5
              </span>
            </Button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="gap-2 h-9 rounded-lg border-border hover:border-primary/40 hover:bg-accent hover:text-accent-foreground transition-smooth px-3"
                >
                  <Languages className="h-4 w-4" />
                  <span className="font-medium">{activeLanguage}</span>
                  <ChevronDown className="h-3 w-3 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-48 mt-2 shadow-elevated rounded-xl border border-border bg-popover backdrop-blur-sm"
              >
                <div className="px-3 py-2 border-b border-border">
                  <span className="text-xs font-semibold text-muted-foreground">SELECT LANGUAGE</span>
                </div>
                
                <DropdownMenuItem 
                  className="cursor-pointer px-3 py-2.5 hover:bg-accent hover:text-accent-foreground rounded-lg my-1 transition-smooth"
                  onClick={() => setActiveLanguage("EN")}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">English</span>
                    {activeLanguage === "EN" && (
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                    )}
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem 
                  className="cursor-pointer px-3 py-2.5 hover:bg-accent hover:text-accent-foreground rounded-lg my-1 transition-smooth"
                  onClick={() => setActiveLanguage("AM")}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">አማርኛ</span>
                      <span className="text-xs text-muted-foreground">Amharic</span>
                    </div>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuItem 
                  className="cursor-pointer px-3 py-2.5 hover:bg-accent hover:text-accent-foreground rounded-lg my-1 transition-smooth"
                  onClick={() => setActiveLanguage("OR")}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">Afaan Oromoo</span>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator className="my-2" />
                
                <DropdownMenuItem className="cursor-pointer px-3 py-2.5 text-muted-foreground hover:text-foreground rounded-lg transition-smooth">
                  <span className="text-sm">More languages...</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sign In Button */}
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 h-9 rounded-lg border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth px-4 hidden sm:flex"
            >
              <User className="h-4 w-4" />
              <span className="font-medium">Sign In</span>
            </Button>

            {/* Get Started Button */}
            <Button 
              size="sm" 
              className="h-10 bg-hero-gradient hover:shadow-elevated hover:scale-[1.02] active:scale-95 transition-smooth rounded-lg shadow-soft font-semibold px-5 group"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 py-4 animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col gap-1">
              <a 
                href="#marketplace" 
                className="px-4 py-3.5 rounded-lg hover:bg-accent hover:text-accent-foreground text-foreground font-medium flex items-center justify-between transition-smooth group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart className="h-5 w-5 opacity-70" />
                  <span>Marketplace</span>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-semibold">New</span>
              </a>
              
              <a 
                href="#how-it-works" 
                className="px-4 py-3.5 rounded-lg hover:bg-accent hover:text-accent-foreground text-foreground font-medium flex items-center gap-3 transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                <Shield className="h-5 w-5 opacity-70" />
                <span>How It Works</span>
              </a>
              
              <a 
                href="#for-farmers" 
                className="px-4 py-3.5 rounded-lg hover:bg-accent hover:text-accent-foreground text-foreground font-medium flex items-center gap-3 transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                <Sprout className="h-5 w-5 opacity-70" />
                <span>For Farmers</span>
              </a>
              
              <a 
                href="#about" 
                className="px-4 py-3.5 rounded-lg hover:bg-accent hover:text-accent-foreground text-foreground font-medium transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>About</span>
              </a>
              
              <div className="px-4 py-4 mt-2">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 gap-2 rounded-lg h-10 transition-smooth"
                    >
                      <User className="h-4 w-4" />
                      Sign In
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-hero-gradient rounded-lg h-10 font-semibold transition-smooth"
                    >
                      Get Started
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Addis Ababa</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold border border-green-500/20">
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animated Progress Bar */}
      <div className="h-1 w-full bg-hero-gradient opacity-20 animate-gradient-x"></div>
    </header>
  );
};

export default Header;