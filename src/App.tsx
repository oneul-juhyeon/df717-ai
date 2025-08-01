
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import HomeIntro from "./pages/HomeIntro";
import Company from "./pages/Company";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";
import Robot from "./pages/Robot";
import CFDSafety from "./pages/CFDSafety";
import CFDTrading from "./pages/CFDTrading";
import GetStarted from "./pages/GetStarted";

import ProfessionalTrading from "./pages/ProfessionalTrading";
import AwardWinningService from "./pages/AwardWinningService";
import Contact from "./pages/Contact";
import FinancialProducts from "./pages/FinancialProducts";
import Forex from "./pages/financial-products/Forex";
import Shares from "./pages/financial-products/Shares";
import Indices from "./pages/financial-products/Indices";
import Commodities from "./pages/financial-products/Commodities";
import Gold from "./pages/financial-products/Gold";
import Oil from "./pages/financial-products/Oil";
import Crypto from "./pages/financial-products/Crypto";
import DF717Main from "./pages/df717/DF717Main";
import Stability from "./pages/df717/Stability";
import Modeling from "./pages/df717/Modeling";
import Engine from "./pages/df717/Engine";
import Execution from "./pages/df717/Execution";
import Examples from "./pages/df717/Examples";
import Suppliers from "./pages/Suppliers";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  // Create a query client
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <HelmetProvider>
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
              <Route path="/financial-products" element={<FinancialProducts />} />
              <Route path="/financial-products/forex" element={<Forex />} />
              <Route path="/financial-products/shares" element={<Shares />} />
              <Route path="/financial-products/indices" element={<Indices />} />
              <Route path="/financial-products/commodities" element={<Commodities />} />
              <Route path="/financial-products/gold" element={<Gold />} />
              <Route path="/financial-products/oil" element={<Oil />} />
              <Route path="/financial-products/crypto" element={<Crypto />} />
              <Route path="/df717" element={<DF717Main />} />
              <Route path="/df717/reliability" element={<Stability />} />
              <Route path="/df717/modeling" element={<Modeling />} />
              <Route path="/df717/engine" element={<Engine />} />
              <Route path="/df717/execution" element={<Execution />} />
              <Route path="/df717/examples" element={<Examples />} />
              <Route path="/df717/ai-strategy" element={<Navigate to="/df717/engine" replace />} />
              <Route path="/df717/stability" element={<Navigate to="/df717/reliability" replace />} />
              <Route path="/robot" element={<Navigate to="/df717" replace />} />
              <Route path="/cfd-safety" element={<CFDSafety />} />
              <Route path="/cfd-trading" element={<CFDTrading />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/professional-trading" element={<ProfessionalTrading />} />
              <Route path="/award-winning-service" element={<AwardWinningService />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
