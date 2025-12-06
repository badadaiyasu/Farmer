// src/App.tsx - FIXED
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Farmer Pages - CHANGE TO DEFAULT IMPORT
import FarmerDashboard from "./pages/farmer/Dashboard";

// Buyer Pages - CHANGE TO DEFAULT IMPORT
import BuyerDashboard from "./pages/buyer/Dashboard";

// Optional: Protected Route Wrapper (uncomment when auth is ready)
// import { ProtectedRoute } from "@/components/ProtectedRoute";
// import { useAuthStore } from "@/hooks/use-auth-store";

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
  // const { user, isLoading } = useAuthStore();

  // if (isLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />

            {/* Farmer Routes */}
            <Route
              path="/farmer/dashboard"
              element={
                // <ProtectedRoute requireRole="farmer">
                <FarmerDashboard />
                // </ProtectedRoute>
              }
            />

            {/* Buyer Routes */}
            <Route
              path="/buyer/dashboard"
              element={
                // <ProtectedRoute requireRole="buyer">
                <BuyerDashboard />
                // </ProtectedRoute>
              }
            />

            {/* Optional: Redirect old paths */}
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