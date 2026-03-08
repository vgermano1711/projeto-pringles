import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sabores from "./pages/Sabores";
import Produtos from "./pages/Produtos";
import Historia from "./pages/Historia";
import Comprar from "./pages/Comprar";
import Contatos from "./pages/Contatos";
import NotFound from "./pages/NotFound";
import SacButton from "./components/SacButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SacButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sabores" element={<Sabores />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/comprar" element={<Comprar />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
