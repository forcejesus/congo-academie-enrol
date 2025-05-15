
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Eye } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@/utils/formatters';

interface Etablissement {
  id: number;
  nom: string;
  type: string;
  ville: string;
  logo?: string;
}

interface PreInscriptionCardProps {
  preInscription: {
    id: number;
    etablissement: Etablissement;
    datePreInscription: string;
    statut: "En attente" | "Acceptée" | "Refusée";
    filiere: string;
  };
}

export const PreInscriptionCard = ({ preInscription }: PreInscriptionCardProps) => {
  const navigate = useNavigate();
  
  const getBadgeVariant = (statut: string) => {
    switch (statut) {
      case 'Acceptée':
        return <Badge className="bg-green-500">Acceptée</Badge>;
      case 'Refusée':
        return <Badge variant="destructive">Refusée</Badge>;
      default:
        return <Badge variant="outline" className="border-yellow-500 text-yellow-600">En attente</Badge>;
    }
  };

  const handleViewReceipt = () => {
    navigate(`/etudiant/preinscriptions/${preInscription.id}/recu`);
  };

  const handleViewDetails = () => {
    // This would navigate to a detail page in a real app
    console.log("View details for", preInscription.id);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            {preInscription.etablissement.logo ? (
              <img 
                src={preInscription.etablissement.logo} 
                alt={preInscription.etablissement.nom} 
                className="h-10 w-10 object-contain"
              />
            ) : (
              <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
            )}
            <div>
              <CardTitle className="text-base">{preInscription.etablissement.nom}</CardTitle>
              <p className="text-sm text-gray-500 mt-1">{preInscription.filiere}</p>
            </div>
          </div>
          <div>
            {getBadgeVariant(preInscription.statut)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Date de demande:</span>
            <span>{formatDate(preInscription.datePreInscription)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Établissement:</span>
            <span>{preInscription.etablissement.type}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-500">Ville:</span>
            <span>{preInscription.etablissement.ville}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-auto pt-4 border-t">
        <Button variant="ghost" size="sm" onClick={handleViewDetails}>
          <Eye className="mr-2 h-4 w-4" />
          Détails
        </Button>
        <Button
          variant={preInscription.statut === "Acceptée" ? "default" : "outline"}
          size="sm"
          className={preInscription.statut === "Acceptée" ? "bg-congo-green hover:bg-congo-green/90" : ""}
          onClick={handleViewReceipt}
          disabled={preInscription.statut === "Refusée"}
        >
          <Download className="mr-2 h-4 w-4" />
          Reçu
        </Button>
      </CardFooter>
    </Card>
  );
};
