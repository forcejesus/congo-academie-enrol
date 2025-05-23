
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Etablissements from "./pages/Etablissements";
import ConnexionEtudiant from "./pages/ConnexionEtudiant";
import ConnexionEtablissement from "./pages/ConnexionEtablissement";
import InscriptionEtudiant from "./pages/InscriptionEtudiant";
import InscriptionEtablissement from "./pages/InscriptionEtablissement";
import EtablissementDetail from "./pages/EtablissementDetail";
import PreInscriptionRecu from "./pages/PreInscriptionRecu";
import EtudiantDashboard from "./pages/EtudiantDashboard";
import EspaceEtablissement from "./pages/EspaceEtablissement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/etablissements" element={<Etablissements />} />
          <Route path="/etablissements/:id" element={<EtablissementDetail />} />
          <Route path="/connexion/etudiant" element={<ConnexionEtudiant />} />
          <Route path="/connexion/etablissement" element={<ConnexionEtablissement />} />
          <Route path="/inscription/etudiant" element={<InscriptionEtudiant />} />
          <Route path="/inscription/etablissement" element={<InscriptionEtablissement />} />
          <Route path="/etudiant/dashboard" element={<EtudiantDashboard />} />
          <Route path="/etablissement/dashboard" element={<EspaceEtablissement />} />
          <Route path="/etudiant/preinscriptions/:id/recu" element={<PreInscriptionRecu />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
