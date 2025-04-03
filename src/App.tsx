
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomeIntro from "./pages/HomeIntro";
import Company from "./pages/Company";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";
import Robot from "./pages/Robot";
import AxiCFD from "./pages/AxiCFD";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/axi-cfd" element={<AxiCFD />} />
          <Route path="/contact" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
