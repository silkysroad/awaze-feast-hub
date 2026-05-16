import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MenuPage from "./pages/MenuPage";
import CateringPage from "./pages/CateringPage";
import CateringInquiryPage from "./pages/CateringInquiryPage";
import ReservationsPage from "./pages/ReservationsPage";
import AboutPage from "./pages/AboutPage";
import SeedOilFreePage from "./pages/SeedOilFreePage";
import EthiopianFoodGuidePage from "./pages/EthiopianFoodGuidePage";
import DeliveryPage from "./pages/DeliveryPage";
import HarlemEthiopianPage from "./pages/HarlemEthiopianPage";
import InjeraNYCPage from "./pages/InjeraNYCPage";
import DoroWatNYCPage from "./pages/DoroWatNYCPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/catering" element={<CateringPage />} />
          <Route path="/catering-inquiry" element={<CateringInquiryPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/seed-oil-free" element={<SeedOilFreePage />} />
          <Route path="/ethiopian-food-guide" element={<EthiopianFoodGuidePage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/ethiopian-restaurant-harlem" element={<HarlemEthiopianPage />} />
          <Route path="/injera-nyc" element={<InjeraNYCPage />} />
          <Route path="/doro-wat-nyc" element={<DoroWatNYCPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
