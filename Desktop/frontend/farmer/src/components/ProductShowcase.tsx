import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Star, MapPin } from "lucide-react";

const sampleProducts = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    nameAm: "ቲማቲም",
    category: "Vegetables",
    price: "25 ETB/kg",
    farmer: "Alemayehu W.",
    location: "Addis Ababa",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Organic Coffee Beans",
    nameAm: "ቡና",
    category: "Produce",
    price: "450 ETB/kg",
    farmer: "Chaltu G.",
    location: "Jimma",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Handwoven Basket",
    nameAm: "የእጅ ሥራ ቅርጫት",
    category: "Crafts",
    price: "350 ETB",
    farmer: "Tigist M.",
    location: "Bahir Dar",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584036561584-b03c19da874c?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Fresh Honey",
    nameAm: "ማር",
    category: "Organic",
    price: "650 ETB/kg",
    farmer: "Kebede A.",
    location: "Debre Markos",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784210?w=400&h=300&fit=crop",
  },
];

const ProductShowcase = () => {
  return (
    <section id="marketplace" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse fresh produce and handcrafted goods directly from local farmers and artisans
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {sampleProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">
                  {product.category}
                </Badge>
              </div>
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-lg text-foreground line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {product.nameAm}
                </p>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {product.location}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">From</p>
                  <p className="font-medium text-sm">{product.farmer}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{product.price}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 hover:bg-accent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
