import { Globe, TrendingUp, Shield, MessageCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const features = [
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Full platform support in English, Amharic (አማርኛ), and Afaan Oromoo. No language barriers.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Fair Pricing",
    description: "Direct trade eliminates middlemen. Farmers set their own prices and keep all profits.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Verified farmer profiles, buyer reviews, and secure communication channels.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Chat directly with farmers in your preferred language. Negotiate and arrange pickup.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

const Features = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose FarmConnect?
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for Ethiopian farmers and buyers, with features that break down barriers and build communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-soft transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className={`h-12 w-12 rounded-xl ${feature.bg} flex items-center justify-center`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
