import { Button } from "../components/ui/button";
import { ArrowRight, Store, Users } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12 lg:py-20">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Empowering Ethiopian Farmers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Trade Directly,
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Speak Your Language
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Connect farmers and artisans with buyers across Ethiopia. No middlemen, no language barriers. 
              Full support in <strong>English</strong>, <strong>አማርኛ</strong>, and <strong>Afaan Oromoo</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero border-0 shadow-elevated hover:shadow-elevated hover:scale-105 transition-all group">
                Start Buying
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-accent transition-all">
                I'm a Farmer
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">1,000+</div>
                  <div className="text-sm text-muted-foreground">Active Farmers</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Store className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">5,000+</div>
                  <div className="text-sm text-muted-foreground">Products Listed</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-150">
            <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Ethiopian farmers at a vibrant local marketplace"
              className="relative rounded-2xl shadow-elevated w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
