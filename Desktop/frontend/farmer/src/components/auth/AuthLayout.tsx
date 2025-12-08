// src/components/auth/AuthLayout.tsx
import heroImage from "@/assets/hero-marketplace.jpg";

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function AuthLayout({ title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-yellow-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={heroImage} alt="Marketplace" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="max-w-2xl mx-auto">{children}</div>
      </div>
    </div>
  );
}