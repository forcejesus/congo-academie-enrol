
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FilieresSection } from '@/components/etablissement/FilieresSection';
import { PreInscriptionsTable } from '@/components/etablissement/PreInscriptionsSection';
import { StatistiqueCard } from '@/components/etablissement/StatistiqueCard';
import { ProfileEtablissementCard } from '@/components/etablissement/ProfileEtablissementCard';
import { UserPlus, BookOpen, Settings, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for the school dashboard
const preInscriptions = [
  {
    id: 1,
    etudiant: {
      id: 1,
      nom: "Bakanga",
      prenom: "Jean",
      email: "jean.bakanga@email.com"
    },
    datePreInscription: "2023-05-05T11:20:00",
    statut: "Acceptée" as const,
    filiere: "Sciences Économiques"
  },
  {
    id: 2,
    etudiant: {
      id: 2,
      nom: "Moukoko",
      prenom: "Sophie",
      email: "sophie.moukoko@email.com"
    },
    datePreInscription: "2023-05-10T09:45:00",
    statut: "En attente" as const,
    filiere: "Gestion des Entreprises"
  },
  {
    id: 3,
    etudiant: {
      id: 3,
      nom: "Goma",
      prenom: "Pierre",
      email: "pierre.goma@email.com"
    },
    datePreInscription: "2023-05-08T14:30:00",
    statut: "En attente" as const,
    filiere: "Informatique de Gestion"
  },
  {
    id: 4,
    etudiant: {
      id: 4,
      nom: "Banzila",
      prenom: "Marie",
      email: "marie.banzila@email.com"
    },
    datePreInscription: "2023-04-28T15:30:00",
    statut: "Refusée" as const,
    filiere: "Marketing Digital"
  }
];

const filieres = [
  {
    id: 1,
    nom: "Sciences Économiques",
    niveau: "Licence",
    places: 60,
    placesPrises: 45
  },
  {
    id: 2,
    nom: "Gestion des Entreprises",
    niveau: "Licence",
    places: 50,
    placesPrises: 30
  },
  {
    id: 3,
    nom: "Informatique de Gestion",
    niveau: "Licence",
    places: 40,
    placesPrises: 38
  },
  {
    id: 4,
    nom: "Marketing Digital",
    niveau: "Master",
    places: 30,
    placesPrises: 12
  },
  {
    id: 5,
    nom: "Finance d'Entreprise",
    niveau: "Master",
    places: 25,
    placesPrises: 18
  },
  {
    id: 6,
    nom: "Commerce International",
    niveau: "Licence",
    places: 45,
    placesPrises: 35
  }
];

const etablissementInfo = {
  nom: "École Supérieure de Commerce et de Gestion",
  logo: "/lovable-uploads/363df33b-9d96-4b90-a26e-0ab716c899f9.png",
  type: "Établissement privé",
  status: "Agréé",
  ville: "Brazzaville",
  adresse: "125 Avenue des Sciences",
  telephone: "+242 06 123 45 67",
  email: "contact@escg.cg",
  siteWeb: "https://www.escg.cg",
  nombreEtudiants: 850,
  anneeCreation: 2005
};

const EspaceEtablissement = () => {
  const { toast } = useToast();

  const handleViewPreInscription = (id: number) => {
    toast({
      title: "Détails de la pré-inscription",
      description: `Affichage des détails de la pré-inscription #${id}`
    });
  };

  const handleApprovePreInscription = (id: number) => {
    toast({
      title: "Pré-inscription acceptée",
      description: `La pré-inscription #${id} a été acceptée avec succès.`,
      variant: "default",
    });
  };

  const handleRejectPreInscription = (id: number) => {
    toast({
      title: "Pré-inscription refusée",
      description: `La pré-inscription #${id} a été refusée.`,
      variant: "destructive",
    });
  };

  const handleAddFiliere = () => {
    toast({
      title: "Ajouter une filière",
      description: "Formulaire d'ajout de filière ouvert."
    });
  };

  const handleEditFiliere = (id: number) => {
    toast({
      title: "Modifier une filière",
      description: `Édition de la filière #${id}`
    });
  };

  const handleEditEtablissement = () => {
    toast({
      title: "Modifier le profil",
      description: "Formulaire de modification du profil ouvert."
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-congo-green">Espace Établissement</h1>
            <p className="text-gray-600">Gérez votre établissement et les demandes d'inscription</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-congo-green hover:bg-congo-green/90">
              <Settings className="mr-2 h-4 w-4" />
              Paramètres
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatistiqueCard 
            title="Pré-inscriptions" 
            count={preInscriptions.length} 
            description="Demandes en attente" 
            icon={UserPlus} 
          />
          <StatistiqueCard 
            title="Filières" 
            count={filieres.length} 
            description="Programmes proposés" 
            icon={BookOpen} 
          />
          <StatistiqueCard 
            title="Étudiants" 
            count={etablissementInfo.nombreEtudiants} 
            description="Inscrits cette année" 
            icon={Users} 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-3">
            <ProfileEtablissementCard 
              etablissement={etablissementInfo} 
              onEdit={handleEditEtablissement} 
            />
          </div>
        </div>

        <Tabs defaultValue="preinscriptions" className="mb-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preinscriptions">
              <UserPlus className="mr-2 h-4 w-4 hidden sm:inline" />
              Demandes de pré-inscription
            </TabsTrigger>
            <TabsTrigger value="filieres">
              <BookOpen className="mr-2 h-4 w-4 hidden sm:inline" />
              Filières de formation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preinscriptions">
            <PreInscriptionsTable 
              preInscriptions={preInscriptions}
              onView={handleViewPreInscription}
              onApprove={handleApprovePreInscription}
              onReject={handleRejectPreInscription}
            />
          </TabsContent>

          <TabsContent value="filieres">
            <FilieresSection 
              filieres={filieres} 
              onAddFiliere={handleAddFiliere}
              onEditFiliere={handleEditFiliere}
            />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default EspaceEtablissement;
