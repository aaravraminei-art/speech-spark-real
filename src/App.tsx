import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Events from "./pages/Events";
import Chapters from "./pages/Chapters";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import ScrollReveal from "./components/ScrollReveal";

const queryClient = new QueryClient();

const App = () => (
  // 🔑 Replace the client ID string below with your actual Google Client ID
  <GoogleOAuthProvider clientId="977275513345-gh1torrbsjfv7bhucakqnqbuclgshtut.apps.googleusercontent.com">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollReveal />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/officers" element={<Officers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/chapters" element={<Chapters />} />
            <Route path="/faq" element={<FAQ />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
);

export default App;
