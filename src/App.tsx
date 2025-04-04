
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import HomeIntro from "./pages/HomeIntro";
import Company from "./pages/Company";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";
import Robot from "./pages/Robot";
import AxiCFD from "./pages/AxiCFD";
import AxiEdge from "./pages/AxiEdge";
import AxiTrust from "./pages/AxiTrust";
import AxiPricing from "./pages/AxiPricing";
import AxiAward from "./pages/AxiAward";

function App() {
  // Create a query client
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home-intro" element={<HomeIntro />} />
            <Route path="/company" element={<Company />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/robot" element={<Robot />} />
            <Route path="/axi-edge" element={<AxiEdge />} />
            <Route path="/axi-cfd" element={<AxiCFD />} />
            <Route path="/axi-trust" element={<AxiTrust />} />
            <Route path="/axi-pricing" element={<AxiPricing />} />
            <Route path="/axi-award" element={<AxiAward />} />
            <Route path="/contact" element={<NotFound />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
