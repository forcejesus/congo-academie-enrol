
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, BookOpen, Calendar, Bell, Clock, User, School } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { etablissementsData } from '@/data/etablissements';

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

const preInscriptions = [
  {
    id: 1,
    etablissement: etablissementsData[0],
    datePreInscription: "2023-05-05T11:20:00",
    statut: "Acceptée",
    filiere: "Sciences Économiques"
  },
  {
    id: 2,
    etablissement: etablissementsData[1],
    datePreInscription: "2023-05-03T09:45:00",
    statut: "En attente",
    filiere: "Management des Organisations"
  },
  {
    id: 3,
    etablissement: etablissementsData[4],
    datePreInscription: "2023-04-28T15:30:00",
    statut: "Refusée",
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

const EtudiantDashboard = () => {
  const navigate = useNavigate();
  
  const getStatutBadge = (statut: string) => {
    switch(statut.toLowerCase()) {
      case "acceptée":
        return <Badge className="bg-green-600">Acceptée</Badge>;
      case "refusée":
        return <Badge variant="destructive">Refusée</Badge>;
      case "en attente":
      default:
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600">En attente</Badge>;
    }
  };
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <School className="mr-2 h-5 w-5 text-congo-green" />
                Pré-inscriptions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{preInscriptions.length}</div>
              <p className="text-sm text-gray-500">Demandes soumises</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Bell className="mr-2 h-5 w-5 text-congo-green" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{notifications.filter(n => !n.read).length}</div>
              <p className="text-sm text-gray-500">Non lues</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <FileText className="mr-2 h-5 w-5 text-congo-green" />
                Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{documents.length}</div>
              <p className="text-sm text-gray-500">Disponibles</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="preinscriptions" className="mb-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="preinscriptions">
              <BookOpen className="mr-2 h-4 w-4 hidden sm:inline" />
              Pré-inscriptions
            </TabsTrigger>
            <TabsTrigger value="documents">
              <FileText className="mr-2 h-4 w-4 hidden sm:inline" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell className="mr-2 h-4 w-4 hidden sm:inline" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="evenements">
              <Calendar className="mr-2 h-4 w-4 hidden sm:inline" />
              Événements
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="preinscriptions">
            <Card>
              <CardHeader>
                <CardTitle>Mes pré-inscriptions</CardTitle>
                <CardDescription>
                  Suivez l'état de vos demandes de pré-inscription
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Établissement</TableHead>
                        <TableHead>Filière</TableHead>
                        <TableHead>Date de demande</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {preInscriptions.map((preInscription) => (
                        <TableRow key={preInscription.id}>
                          <TableCell className="font-medium">{preInscription.etablissement.nom}</TableCell>
                          <TableCell>{preInscription.filiere}</TableCell>
                          <TableCell>{formatDate(preInscription.datePreInscription)}</TableCell>
                          <TableCell>{getStatutBadge(preInscription.statut)}</TableCell>
                          <TableCell>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => navigate(`/etudiant/preinscriptions/${preInscription.etablissement.id}/recu`)}
                            >
                              Voir détails
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" onClick={() => navigate('/etudiant/preinscriptions')}>
                  Voir tout
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Mes documents</CardTitle>
                <CardDescription>
                  Accédez à tous vos documents liés aux demandes d'inscription
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nom du document</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Taille</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {documents.map((document) => (
                        <TableRow key={document.id}>
                          <TableCell className="font-medium">{document.nom}</TableCell>
                          <TableCell>{document.type}</TableCell>
                          <TableCell>{formatDate(document.date)}</TableCell>
                          <TableCell>{document.taille}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" className="flex items-center">
                              <Download className="mr-1 h-4 w-4" />
                              Télécharger
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" onClick={() => navigate('/etudiant/documents')}>
                  Voir tout
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notifications récentes</CardTitle>
                <CardDescription>
                  Restez informé des mises à jour concernant vos demandes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`p-4 border rounded-lg ${notification.read ? 'bg-white' : 'bg-blue-50'}`}>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className={`mt-1 h-2 w-2 rounded-full ${notification.read ? 'bg-gray-300' : 'bg-blue-600'}`}></div>
                          <div>
                            <h4 className="font-medium">{notification.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                            <div className="flex items-center mt-2 text-xs text-gray-500">
                              <Clock className="mr-1 h-3 w-3" />
                              <span>{formatDateTime(notification.date)}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Marquer comme lu
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" onClick={() => navigate('/etudiant/notifications')}>
                  Voir tout
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="evenements">
            <Card>
              <CardHeader>
                <CardTitle>Prochains événements</CardTitle>
                <CardDescription>
                  Dates importantes à retenir pour vos démarches d'inscription
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prochainEvenements.map((evenement) => (
                    <div key={evenement.id} className="border rounded-lg p-4">
                      <h4 className="font-medium">{evenement.titre}</h4>
                      <div className="flex items-center mt-2 text-sm text-gray-600">
                        <Calendar className="mr-2 h-4 w-4 text-congo-green" />
                        <span>{formatDate(evenement.date)}</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <MapPin className="mr-2 h-4 w-4 text-congo-green" />
                        <span>{evenement.lieu}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" onClick={() => navigate('/etudiant/evenements')}>
                  Voir tout
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-congo-green" />
                Établissements recommandés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {etablissementsData.slice(0, 4).map((etablissement) => (
                  <div key={etablissement.id} className="border rounded-lg p-4 hover:border-congo-green/50 hover:bg-gray-50 cursor-pointer" onClick={() => navigate(`/etablissements/${etablissement.id}`)}>
                    <h4 className="font-medium text-congo-green">{etablissement.nom}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {etablissement.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {etablissement.ville}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                      {etablissement.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" onClick={() => navigate('/etablissements')}>
                Voir tous les établissements
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <User className="mr-2 h-5 w-5 text-congo-green" />
                Mon profil
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h3 className="font-medium">Jean Dupont</h3>
                  <p className="text-sm text-gray-500">jean.dupont@email.com</p>
                </div>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" className="w-full" onClick={() => navigate('/etudiant/profil')}>
                  Modifier mon profil
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default EtudiantDashboard;
