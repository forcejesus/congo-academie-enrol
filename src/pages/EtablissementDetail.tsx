
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Download, Mail, Phone, Globe, MapPin, School, BookOpen, Calendar, FileText, Check, X, ArrowLeft } from "lucide-react";
import { etablissementsData } from '@/data/etablissements';
import { useToast } from '@/hooks/use-toast';

const EtablissementDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPreInscription, setShowPreInscription] = useState(false);
  
  const etablissement = etablissementsData.find(etab => etab.id === parseInt(id || '0'));
  
  if (!etablissement) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Établissement non trouvé</h2>
          <p className="mb-6">L'établissement que vous recherchez n'existe pas.</p>
          <Button onClick={() => navigate('/etablissements')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour à la liste
          </Button>
        </div>
      </Layout>
    );
  }

  const handlePreInscription = () => {
    setShowPreInscription(true);
    // Scroll to the pre-inscription form
    setTimeout(() => {
      const element = document.getElementById('pre-inscription');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleSubmitPreInscription = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pré-inscription envoyée",
      description: "Votre demande a été transmise à l'établissement. Vous recevrez un e-mail de confirmation.",
    });
    // Generate the receipt
    setTimeout(() => {
      navigate(`/etudiant/preinscriptions/${etablissement.id}/recu`);
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          className="mb-6"
          onClick={() => navigate('/etablissements')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour à la liste
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-2xl font-bold text-congo-green">{etablissement.nom}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {etablissement.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {etablissement.ville}
                    </Badge>
                    <Badge 
                      variant={etablissement.accepteBoursiers ? "default" : "destructive"}
                      className="text-xs"
                    >
                      {etablissement.accepteBoursiers ? "Accepte les boursiers" : "N'accepte pas les boursiers"}
                    </Badge>
                  </CardDescription>
                </div>
                {etablissement.logo && (
                  <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                    <AspectRatio ratio={1/1}>
                      <img 
                        src={etablissement.logo} 
                        alt={`${etablissement.nom} logo`} 
                        className="object-contain" 
                      />
                    </AspectRatio>
                  </div>
                )}
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-6 text-gray-700">{etablissement.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-congo-green" />
                    <span className="text-sm">{etablissement.adresse}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-congo-green" />
                    <span className="text-sm">{etablissement.telephone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-congo-green" />
                    <span className="text-sm">{etablissement.email}</span>
                  </div>
                  {etablissement.siteWeb && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-congo-green" />
                      <a 
                        href={etablissement.siteWeb} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {etablissement.siteWeb}
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md space-y-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-congo-green" />
                    <span className="text-sm font-medium">Numéro d'agrément: </span>
                    <span className="text-sm">{etablissement.numeroAgrement}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-congo-green" />
                    <span className="text-sm font-medium">Date d'agrément: </span>
                    <span className="text-sm">
                      {new Date(etablissement.dateAgrement).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {etablissement.accepteBoursiers ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <X className="h-4 w-4 text-red-600" />
                    )}
                    <span className="text-sm font-medium">Acceptation des boursiers: </span>
                    <span className="text-sm">
                      {etablissement.accepteBoursiers ? "Oui" : "Non"}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end pt-0">
                <Button 
                  className="bg-congo-green hover:bg-congo-green/90" 
                  onClick={handlePreInscription}
                >
                  Se pré-inscrire
                </Button>
              </CardFooter>
            </Card>
            
            <Tabs defaultValue="filieres" className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="filieres">
                  <School className="mr-2 h-4 w-4" />
                  Filières
                </TabsTrigger>
                <TabsTrigger value="frais">
                  <FileText className="mr-2 h-4 w-4" />
                  Frais de scolarité
                </TabsTrigger>
              </TabsList>
              <TabsContent value="filieres" className="border rounded-md p-4 mt-4">
                <h3 className="text-xl font-semibold mb-4">Filières disponibles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {etablissement.filieres.map((filiere) => (
                    <Card key={filiere.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{filiere.nom}</CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {filiere.niveau}
                          </Badge>
                          <span className="text-xs text-gray-500">{filiere.duree}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-gray-600">{filiere.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="frais" className="border rounded-md p-4 mt-4">
                <h3 className="text-xl font-semibold mb-4">Frais de scolarité</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Niveau</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Licence</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{etablissement.fraisScolarite.licence}</td>
                      </tr>
                      {etablissement.fraisScolarite.master && (
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Master</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{etablissement.fraisScolarite.master}</td>
                        </tr>
                      )}
                      {etablissement.fraisScolarite.doctorat && (
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Doctorat</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{etablissement.fraisScolarite.doctorat}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Note: Les frais peuvent varier selon les options choisies. Contactez l'établissement pour plus de détails.
                </p>
              </TabsContent>
            </Tabs>
            
            {showPreInscription && (
              <Card id="pre-inscription" className="mb-6 border-congo-green">
                <CardHeader>
                  <CardTitle className="text-xl">Formulaire de pré-inscription</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire pour vous pré-inscrire à {etablissement.nom}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitPreInscription} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nom" className="text-sm font-medium">Nom</label>
                        <input
                          id="nom"
                          type="text"
                          required
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="prenom" className="text-sm font-medium">Prénom</label>
                        <input
                          id="prenom"
                          type="text"
                          required
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="telephone" className="text-sm font-medium">Téléphone</label>
                        <input
                          id="telephone"
                          type="tel"
                          required
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="filiere" className="text-sm font-medium">Filière souhaitée</label>
                      <select
                        id="filiere"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Sélectionnez une filière</option>
                        {etablissement.filieres.map(filiere => (
                          <option key={filiere.id} value={filiere.id}>
                            {filiere.nom} ({filiere.niveau})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message (optionnel)</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="conditions"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-congo-green border-gray-300 rounded"
                      />
                      <label htmlFor="conditions" className="ml-2 block text-sm text-gray-700">
                        J'accepte les conditions générales et la politique de confidentialité
                      </label>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-congo-green hover:bg-congo-green/90"
                    >
                      Soumettre ma pré-inscription
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Documents utiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Brochure de présentation
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Liste des filières
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Calendrier académique
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Conditions d'admission
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filières populaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {etablissement.filieres.slice(0, 3).map((filiere) => (
                  <div key={filiere.id} className="flex items-start gap-2">
                    <BookOpen className="h-4 w-4 text-congo-green mt-1" />
                    <div>
                      <p className="text-sm font-medium">{filiere.nom}</p>
                      <p className="text-xs text-gray-500">{filiere.niveau} • {filiere.duree}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EtablissementDetail;
