// src/App.tsx
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { useAuth } from "./hooks/useAuth";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/auth/SignInPage";
import RegisterPage from "./pages/auth/RegisterPage";
import BuyerDashboard from "./pages/buyer/Dashboard";
import BuyerOrdersPage from "./pages/buyer/Orders";
import ProductDetailPage from "./pages/buyer/ProductDetailPage";
import FarmerDashboard from "./pages/farmer/Dashboard";
import FarmerOrdersPage from "./pages/farmer/Orders";

// Protected Route
const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles?: ("buyer" | "farmer" | "admin")[];
}) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

// Query Client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

// Main App Component
const App = () => {
  const { i18n } = useTranslation(); // t is used in future for meta titles if needed

  useEffect(() => {
    const currentLang = i18n.language || "en";

    // Sync HTML lang and direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = i18n.dir?.(currentLang) ?? "ltr";

    // Apply perfect font for each language
    const fontFamily =
      currentLang === "am"
        ? '"Noto Sans Ethiopic", "Abyssinica SIL", "Nyala", sans-serif'
        : currentLang === "om"
        ? '"Noto Sans", system-ui, sans-serif'
        : '"Inter", system-ui, sans-serif';

    document.documentElement.style.fontFamily = fontFamily;
    document.documentElement.style.lineHeight = currentLang === "am" ? "1.7" : "1.5";
  }, [i18n, i18n.language]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" richColors />

        <BrowserRouter>
          <div className="min-h-screen bg-background text-foreground antialiased">
            <main>
              <Routes>
                {/* Public */}
                <Route path="/" element={<Index />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />

                {/* Auth */}
                <Route path="/auth/login" element={<SignInPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />

                {/* Buyer */}
                <Route
                  path="/buyer/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={["buyer"]}>
                      <BuyerDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/buyer/orders"
                  element={
                    <ProtectedRoute allowedRoles={["buyer"]}>
                      <BuyerOrdersPage />
                    </ProtectedRoute>
                  }
                />

                {/* Farmer */}
                <Route
                  path="/farmer/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={["farmer"]}>
                      <FarmerDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/farmer/orders"
                  element={
                    <ProtectedRoute allowedRoles={["farmer"]}>
                      <FarmerOrdersPage />
                    </ProtectedRoute>
                  }
                />

                {/* Fallback */}
                <Route path="/dashboard" element={<Navigate to="/" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;