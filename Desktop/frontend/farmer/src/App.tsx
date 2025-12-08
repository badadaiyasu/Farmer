// src/App.tsx
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Farmer Pages
import FarmerDashboard from "./pages/farmer/Dashboard";

// Buyer Pages
import BuyerDashboard from "./pages/buyer/Dashboard";

// Auth Pages
import RegisterPage from "./pages/auth/RegisterPage";

// ✅ Product Page - Corrected import path
import ProductDetailPage from "./pages/buyer/ProductDetailPage"; // Fixed: lowercase 'b'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />

            {/* Auth Routes */}
            <Route path="/auth/register" element={<RegisterPage />} />

            {/* ✅ Product Details Route */}
            <Route path="/product/:id" element={<ProductDetailPage />} />

            {/* Farmer Routes */}
            <Route
              path="/farmer/dashboard"
              element={<FarmerDashboard />}
            />

            {/* Buyer Routes */}
            <Route
              path="/buyer/dashboard"
              element={<BuyerDashboard />}
            />

            {/* Redirect old paths */}
            <Route path="/dashboard" element={<Navigate to="/" replace />} />

            {/* 404 – Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;