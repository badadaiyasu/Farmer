// src/components/Hero.tsx
import { Button } from "../components/ui/button";
import { ArrowRight, Store, Leaf, Sun } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-yellow-50 to-amber-50">
      {/* Animated Background Blobs */}
      <div
        className="absolute inset-0 opacity-70 animate-pulse"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, #10b981 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="animate__animated animate__fadeInUp">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-3 mb-6 rounded-full bg-linear-to-r from-emerald-500 to-green-600 text-white font-bold shadow-xl animate__animated animate__pulse animate__infinite">
                <Leaf className="w-5 h-5" />
                Empowering Ethiopian Farmers & Artisans
                <Sun className="w-5 h-5" />
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
                Trade Freely,<br />
                <span className="bg-linear-to-r from-emerald-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                  Grow Together
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-10">
                The first Ethiopian marketplace where farmers, artisans, and buyers connect directly — in{" "}
                <strong className="text-emerald-600">Amharic</strong>,{" "}
                <strong className="text-blue-600">English</strong>, and{" "}
                <strong className="text-amber-600">Afaan Oromoo</strong>.
              </p>

              {/* CENTERED BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  className="group relative overflow-hidden rounded-2xl px-10 py-7 text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/50 bg-linear-to-r from-emerald-500 to-emerald-600"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Buying Now
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl border-4 border-emerald-600 px-10 py-7 text-lg font-bold text-emerald-600 transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:text-white shadow-xl"
                >
                  <Store className="w-6 h-6 mr-3" />
                  I'm a Farmer / Artisan
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-emerald-600">1,200+</div>
                  <div className="text-gray-600 font-medium">Active Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-amber-600">6,800+</div>
                  <div className="text-gray-600 font-medium">Products Listed</div>
                </div>
                <div className="text-center hidden md:block">
                  <div className="text-4xl font-black text-blue-600">3</div>
                  <div className="text-gray-600 font-medium">Languages</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-10 bg-emerald-400 rounded-full blur-3xl opacity-30 animate-pulse" />

              <img
                src={heroImage}
                alt="Vibrant Ethiopian farmers and marketplace"
                className="relative z-10 w-full max-w-xl rounded-3xl border-8 border-white shadow-2xl transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute -top-6 -left-6 rounded-2xl border-4 border-emerald-500 bg-white p-5 shadow-2xl">
                <div className="text-2xl font-black text-emerald-600">100% Verified</div>
                <p className="text-sm text-gray-600">Trusted Sellers</p>
              </div>

              <div className="absolute -bottom-8 -right-8 rounded-2xl bg-linear-to-br from-amber-500 to-orange-600 p-5 text-white shadow-2xl">
                <div className="text-2xl font-black">24hr Delivery</div>
                <p className="text-sm opacity-90">Addis & Regional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;