import React from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookOpen, Bell, FileText, Calendar, School } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { etablissementsData } from '@/data/etablissements';
import { useToast } from "@/components/ui/use-toast";

// Dashboard Components
import { DashboardMetricCard } from '@/components/dashboard/DashboardMetricCard';
import { DocumentsSection } from '@/components/dashboard/DocumentsSection';
import { NotificationsSection } from '@/components/dashboard/NotificationsSection';
import { EventsSection } from '@/components/dashboard/EventsSection';
import { RecommendedSchoolsSection } from '@/components/dashboard/RecommendedSchoolsSection';
import { EtudiantInfosCard } from '@/components/dashboard/EtudiantInfos';
import { PreInscriptionCard } from '@/components/dashboard/PreInscriptionCard';
import { NewPreInscriptionCard } from '@/components/dashboard/NewPreInscriptionCard';

// Mock Data
const notifications = [
  {
    id: 1,
    title: "Pré-inscription acceptée",
    description: "Votre pré-inscription à l'Université Marien Ngouabi a été acceptée.",
    date: "2023-05-12T10:30:00",
    read: true
  },
  {
    id: 2,
    title: "Nouveau document disponible",
    description: "Un nouveau document est disponible pour votre dossier à l'École Supérieure de Commerce et de Gestion.",
    date: "2023-05-10T14:45:00",
    read: false
  },
  {
    id: 3,
    title: "Rappel de paiement",
    description: "Rappel: Le premier versement des frais de scolarité est attendu avant le 15 juin.",
    date: "2023-05-08T09:15:00",
    read: true
  }
];

// Update the type of statut to match the expected union type
const preInscriptions = [
  {
    id: 1,
    etablissement: etablissementsData[0],
    datePreInscription: "2023-05-05T11:20:00",
    statut: "Acceptée" as "Acceptée" | "En attente" | "Refusée",
    filiere: "Sciences Économiques"
  },
  {
    id: 2,
    etablissement: etablissementsData[1],
    datePreInscription: "2023-05-03T09:45:00",
    statut: "En attente" as "Acceptée" | "En attente" | "Refusée",
    filiere: "Management des Organisations"
  },
  {
    id: 3,
    etablissement: etablissementsData[4],
    datePreInscription: "2023-04-28T15:30:00",
    statut: "Refusée" as "Acceptée" | "En attente" | "Refusée",
    filiere: "Soins Infirmiers"
  }
];

const documents = [
  {
    id: 1,
    nom: "Attestation de pré-inscription - Université Marien Ngouabi",
    type: "PDF",
    date: "2023-05-12T10:35:00",
    taille: "245 Ko"
  },
  {
    id: 2,
    nom: "Formulaire d'inscription - École Supérieure de Commerce et de Gestion",
    type: "PDF",
    date: "2023-05-03T09:50:00",
    taille: "180 Ko"
  },
  {
    id: 3,
    nom: "Liste des pièces à fournir - Institut Supérieur de Santé",
    type: "PDF",
    date: "2023-04-28T15:35:00",
    taille: "120 Ko"
  }
];

const prochainEvenements = [
  {
    id: 1,
    titre: "Journée portes ouvertes - Université Marien Ngouabi",
    date: "2023-06-15T09:00:00",
    lieu: "Campus central, Brazzaville"
  },
  {
    id: 2,
    titre: "Date limite d'inscription - École Supérieure de Commerce et de Gestion",
    date: "2023-06-30T23:59:59",
    lieu: "En ligne"
  },
  {
    id: 3,
    titre: "Rentrée académique",
    date: "2023-09-04T08:00:00",
    lieu: "Tous les établissements"
  }
];

const etudiantInfo = {
  nom: "Dupont",
  prenom: "Jean",
  email: "jean.dupont@email.com",
  telephone: "+242 06 987 65 43",
  niveauEtude: "Terminale A - Baccalauréat obtenu",
  photo: undefined  // Replace with actual photo URL if needed
};

const EtudiantDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleEditProfile = () => {
    toast({
      title: "Modifier le profil",
      description: "Cette fonctionnalité sera disponible prochainement."
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-congo-green">Tableau de bord</h1>
            <p className="text-gray-600">Bienvenue dans votre espace étudiant</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button onClick={() => navigate('/etablissements')} className="bg-congo-green hover:bg-congo-green/90">
              <School className="mr-2 h-4 w-4" />
              Explorer les établissements
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardMetricCard 
            title="Pré-inscriptions" 
            count={preInscriptions.length} 
            description="Demandes soumises" 
            icon={School} 
          />
          <DashboardMetricCard 
            title="Notifications" 
            count={notifications.filter(n => !n.read).length} 
            description="Non lues" 
            icon={Bell} 
          />
          <DashboardMetricCard 
            title="Documents" 
            count={documents.length} 
            description="Disponibles" 
            icon={FileText} 
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-3">
            <EtudiantInfosCard 
              etudiant={etudiantInfo}
              onEdit={handleEditProfile}
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <School className="mr-2 h-5 w-5 text-congo-green" />
            Mes pré-inscriptions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preInscriptions.map((preinscription) => (
              <PreInscriptionCard 
                key={preinscription.id}
                preInscription={preinscription}
              />
            ))}
            <NewPreInscriptionCard />
          </div>
        </div>
        
        <Tabs defaultValue="notifications" className="mb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="notifications">
              <Bell className="mr-2 h-4 w-4 hidden sm:inline" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="documents">
              <FileText className="mr-2 h-4 w-4 hidden sm:inline" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="evenements">
              <Calendar className="mr-2 h-4 w-4 hidden sm:inline" />
              Événements
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="notifications">
            <NotificationsSection notifications={notifications} />
          </TabsContent>
          
          <TabsContent value="documents">
            <DocumentsSection documents={documents} />
          </TabsContent>
          
          <TabsContent value="evenements">
            <EventsSection events={prochainEvenements} />
          </TabsContent>
        </Tabs>
        
        <div className="mt-8">
          <RecommendedSchoolsSection etablissements={etablissementsData} />
        </div>
      </div>
    </Layout>
  );
};

export default EtudiantDashboard;
