// src/components/auth/RoleSelectionCard.tsx
import { Button } from "../../components/ui/button";
import { ShoppingCart, Store } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: "shopping-cart" | "tractor";
  onClick: () => void;
  highlighted?: boolean;
}

export function RoleSelectionCard({ title, description, icon, onClick, highlighted }: Props) {
  return (
    <div
      className={`relative rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer border-4 ${
        highlighted
          ? "border-emerald-500 bg-emerald-50 shadow-2xl scale-105"
          : "border-gray-200 bg-white hover:border-emerald-300"
      }`}
      onClick={onClick}
    >
      <div className="mb-6">
        {icon === "shopping-cart" ? (
          <ShoppingCart className="w-16 h-16 mx-auto text-blue-600" />
        ) : (
          <Store className="w-16 h-16 mx-auto text-emerald-600" />
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <Button
        className="mt-8 w-full text-lg py-6"
        variant={highlighted ? "default" : "outline"}
        size="lg"
      >
        Continue →
      </Button>
    </div>
  );
}