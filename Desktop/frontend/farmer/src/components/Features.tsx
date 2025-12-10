import { Globe, TrendingUp, Shield, MessageCircle, CheckCircle, ArrowRight, Users, Award, Leaf } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Full platform support in English, Amharic (አማርኛ), and Afaan Oromoo. No language barriers.",
    color: "text-teal-600",
    bg: "bg-linear-to-br from-teal-50 to-emerald-50",
    border: "border-teal-200",
    highlight: "No language barriers.",
    details: ["Real-time translation", "Local dialect support", "Accessibility-focused"],
    accent: "from-teal-400 to-emerald-400"
  },
  {
    icon: TrendingUp,
    title: "Fair Pricing",
    description: "Direct trade eliminates middlemen. Farmers set their own prices and keep all profits.",
    color: "text-teal-700",
    bg: "bg-linear-to-br from-teal-50 to-cyan-50",
    border: "border-teal-200",
    highlight: "Keep all profits.",
    details: ["Transparent pricing", "No hidden fees", "Market insights"],
    accent: "from-teal-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Verified farmer profiles, buyer reviews, and secure communication channels.",
    color: "text-teal-800",
    bg: "bg-linear-to-br from-teal-50 to-blue-50",
    border: "border-teal-200",
    highlight: "Verified profiles.",
    details: ["Identity verification", "Secure payments", "Community ratings"],
    accent: "from-teal-600 to-blue-500"
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description: "Chat directly with farmers in your preferred language. Negotiate and arrange pickup.",
    color: "text-teal-600",
    bg: "bg-linear-to-br from-teal-50 to-teal-100",
    border: "border-teal-200",
    highlight: "Chat directly.",
    details: ["In-app messaging", "Real-time notifications", "Translation support"],
    accent: "from-teal-400 to-teal-600"
  },
];

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="relative py-24 bg-linear-to-b from-white to-teal-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-r from-teal-600/10 to-teal-800/10"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-60 -right-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Floating decorative icons */}
      <Leaf className="absolute top-20 right-10 w-24 h-24 text-teal-100/40 rotate-12 hidden lg:block" />
      <Users className="absolute bottom-32 left-10 w-20 h-20 text-teal-200/40 -rotate-12 hidden lg:block" />
      <Award className="absolute top-1/2 left-1/4 w-16 h-16 text-teal-300/30 rotate-45 hidden lg:block" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-linear-to-r from-teal-50 to-teal-100 border border-teal-200 text-teal-800 font-medium text-sm mb-4 shadow-sm">
            <span className="w-3 h-3 bg-linear-to-r from-teal-500 to-teal-700 rounded-full mr-3 animate-pulse"></span>
            Why Farmers & Buyers Love FarmConnect
            <span className="ml-3 px-2 py-1 bg-teal-500 text-white text-xs rounded-full">5,000+ Users</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
            Transforming <span className="relative">
              <span className="bg-linear-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">Ethiopian</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-teal-400 to-teal-600 rounded-full"></span>
            </span> Agriculture
          </h1>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            FarmConnect bridges the gap between Ethiopian farmers and buyers with innovative features designed 
            specifically for local needs and challenges.
          </p>
          
          {/* Stats section */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold bg-linear-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">5,000+</div>
              <div className="text-gray-600 mt-2">Active Farmers</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold bg-linear-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">8</div>
              <div className="text-gray-600 mt-2">Regions Covered</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold bg-linear-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">95%</div>
              <div className="text-gray-600 mt-2">Satisfaction Rate</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl font-bold bg-linear-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-600 mt-2">Support Available</div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`relative group rounded-3xl ${feature.bg} border-2 ${feature.border} p-8 space-y-6 transition-all duration-500 hover:-translate-y-4 ${
                hoveredIndex === index ? 'shadow-2xl scale-105' : 'shadow-xl'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Feature number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-linear-to-r from-teal-500 to-teal-700 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              
              {/* Icon with decorative background */}
              <div className="relative pt-4">
                <div className={`absolute inset-0 ${feature.bg} rounded-2xl blur-xl opacity-50`}></div>
                <div className={`h-16 w-16 rounded-2xl ${feature.bg} flex items-center justify-center relative z-10 border-2 ${feature.border} shadow-md`}>
                  <div className={`p-3 rounded-xl bg-linear-to-br ${feature.accent} bg-opacity-10`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
              </div>
              
              {/* Feature title */}
              <h3 className="text-2xl font-bold text-gray-900 pt-4">
                {feature.title}
              </h3>
              
              {/* Feature description */}
              <p className="text-gray-700 text-lg leading-relaxed min-h-[120px]">
                {feature.description.split(feature.highlight).map((part, i) => (
                  <span key={i}>
                    {part}
                    {i < feature.description.split(feature.highlight).length - 1 && (
                      <span className="font-bold text-teal-700">{feature.highlight}</span>
                    )}
                  </span>
                ))}
              </p>
              
              {/* Feature details list */}
              <ul className="space-y-3 pt-4 border-t border-teal-100">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 group/item hover:text-teal-700 transition-colors">
                    <div className="mr-3 mt-1 shrink-0">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-teal-600" />
                      </div>
                    </div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              
              {/* Hover effect indicator */}
              <div className={`pt-6 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <button className="w-full inline-flex items-center justify-center bg-linear-to-r from-teal-600 to-teal-800 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn">
                  <span>Learn More</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl`}>
                <div className={`absolute top-0 right-0 w-10 h-10 bg-linear-to-br ${feature.accent} transform rotate-45 translate-x-5 -translate-y-5`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA section */}
        <div className="relative mt-24">
          <div className="absolute inset-0 bg-linear-to-r from-teal-600 to-teal-800 rounded-3xl shadow-2xl"></div>
          <div className="relative bg-linear-to-r from-white/95 to-teal-50/95 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-r from-teal-500 to-teal-700 mb-8 shadow-lg">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform <span className="text-teal-700">Ethiopian Agriculture</span>?
              </h2>
              
              <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of farmers and buyers who are already experiencing the benefits of direct, fair, and transparent trade.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="px-10 py-4 bg-linear-to-r from-teal-600 to-teal-800 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg group">
                  <span className="flex items-center">
                    Get Started Free
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                
                <button className="px-10 py-4 bg-white text-gray-800 font-bold text-lg rounded-2xl border-2 border-teal-200 hover:border-teal-400 hover:bg-teal-50 hover:shadow-xl transition-all duration-300 shadow-md">
                  <span className="flex items-center">
                    Schedule a Demo
                    <span className="ml-3 px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">Free</span>
                  </span>
                </button>
              </div>
              
              <div className="mt-10 pt-8 border-t border-teal-100">
                <p className="text-gray-600 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-teal-600 mr-2" />
                  Secure platform • 24/7 support • No hidden fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add CSS for blob animation */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #f0fdfa;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #0d9488, #115e59);
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default Features;