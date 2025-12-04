import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="for-farmers" className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Sell Your Products?
          </h2>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of farmers already reaching buyers directly. List your products for free and start earning more today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="shadow-elevated hover:shadow-elevated hover:scale-105 transition-all group bg-background text-foreground border-0"
            >
              Register as a Farmer
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold">0%</div>
              <div className="text-sm opacity-80">Commission Fee</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Support Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">3</div>
              <div className="text-sm opacity-80">Languages Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
