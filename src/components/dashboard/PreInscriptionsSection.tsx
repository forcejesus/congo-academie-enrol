
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@/utils/formatters';
import { BookOpen } from 'lucide-react';

interface Etablissement {
  id: number;
  nom: string;
  type: string;
  ville: string;
  description: string;
}

interface PreInscription {
  id: number;
  etablissement: Etablissement;
  datePreInscription: string;
  statut: string;
  filiere: string;
}

interface PreInscriptionsSectionProps {
  preInscriptions: PreInscription[];
}

export const PreInscriptionsSection = ({ preInscriptions }: PreInscriptionsSectionProps) => {
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

  return (
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
  );
};
