// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";

// Remove this line — not needed with Zustand
// import { AuthProvider, useAuth } from "./hooks/useAuth";
import { useAuth } from "./hooks/useAuth"; // Only import the hook

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
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
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

// App
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Removed AuthProvider — not needed with Zustand */}
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <main>
              <Routes>
                <Route path="/" element={<Index />} />

                {/* Auth */}
                <Route path="/auth/login" element={<SignInPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />

                <Route path="/product/:id" element={<ProductDetailPage />} />

                {/* Farmer Protected Routes */}
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

                {/* Buyer Protected Routes */}
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