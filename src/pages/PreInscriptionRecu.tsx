
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ArrowLeft, Check } from "lucide-react";
import { etablissementsData } from '@/data/etablissements';

const PreInscriptionRecu = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
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
  
  // Generate a reference number
  const referenceNumber = `PREINSC-${Date.now().toString().substring(5)}-${etablissement.id}`;
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          className="mb-6"
          onClick={() => navigate('/etablissements')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux établissements
        </Button>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-congo-green" />
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-center text-congo-green mb-6">
            Pré-inscription confirmée
          </h1>
          
          <p className="text-center mb-8">
            Votre demande de pré-inscription à <strong>{etablissement.nom}</strong> a été envoyée avec succès.
            Veuillez conserver cet accusé de réception.
          </p>
          
          <Card className="mb-6 border-2 border-dashed border-congo-green/30 print:shadow-none" id="receipt">
            <CardHeader className="bg-congo-green/5 border-b">
              <CardTitle className="flex justify-between items-center">
                <span>Accusé de réception</span>
                <Button size="sm" variant="outline" onClick={() => window.print()}>
                  <Download className="h-4 w-4 mr-2" /> Télécharger
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Référence</span>
                  <span className="text-congo-green font-mono">{referenceNumber}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Date de soumission</span>
                  <span>{currentDate}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Établissement</span>
                  <span>{etablissement.nom}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Statut</span>
                  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    En attente de traitement
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-4 rounded-md">
                <h3 className="text-base font-medium mb-2">Prochaines étapes</h3>
                <ol className="list-decimal list-inside text-sm space-y-2 text-gray-600">
                  <li>Un e-mail de confirmation vous a été envoyé</li>
                  <li>L'établissement examinera votre demande dans un délai de 7 jours ouvrables</li>
                  <li>Vous recevrez une notification par e-mail concernant la décision</li>
                  <li>En cas d'acceptation, vous devrez finaliser votre inscription sur place</li>
                </ol>
              </div>
              
              <div className="mt-8 text-center text-sm text-gray-500">
                <p>Pour toute question, contactez le service des inscriptions :</p>
                <p>{etablissement.email} • {etablissement.telephone}</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              onClick={() => navigate('/etudiant/preinscriptions')}
            >
              Voir toutes mes pré-inscriptions
            </Button>
            <Button 
              className="bg-congo-green hover:bg-congo-green/90"
              onClick={() => navigate('/etablissements')}
            >
              Explorer d'autres établissements
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PreInscriptionRecu;
