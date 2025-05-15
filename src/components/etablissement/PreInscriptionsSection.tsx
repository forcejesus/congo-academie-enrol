
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
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { formatDate } from '@/utils/formatters';
import { Check, X, Clock, Eye } from 'lucide-react';

interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
}

interface PreInscription {
  id: number;
  etudiant: Etudiant;
  datePreInscription: string;
  statut: "En attente" | "Acceptée" | "Refusée";
  filiere: string;
}

interface PreInscriptionsTableProps {
  preInscriptions: PreInscription[];
  onView: (id: number) => void;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
}

export const PreInscriptionsTable = ({ preInscriptions, onView, onApprove, onReject }: PreInscriptionsTableProps) => {
  const getStatusBadge = (statut: string) => {
    switch (statut) {
      case 'Acceptée':
        return <Badge className="bg-green-500">Acceptée</Badge>;
      case 'Refusée':
        return <Badge variant="destructive">Refusée</Badge>;
      default:
        return <Badge variant="outline" className="border-yellow-500 text-yellow-600">En attente</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demandes de pré-inscription</CardTitle>
        <CardDescription>
          Gérez les demandes de pré-inscription des étudiants
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Étudiant</TableHead>
                <TableHead>Filière</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {preInscriptions.map((preInscription) => (
                <TableRow key={preInscription.id}>
                  <TableCell className="font-medium">
                    {preInscription.etudiant.nom} {preInscription.etudiant.prenom}
                    <div className="text-xs text-gray-500">{preInscription.etudiant.email}</div>
                  </TableCell>
                  <TableCell>{preInscription.filiere}</TableCell>
                  <TableCell>{formatDate(preInscription.datePreInscription)}</TableCell>
                  <TableCell>{getStatusBadge(preInscription.statut)}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => onView(preInscription.id)}
                        title="Voir les détails"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      {preInscription.statut === "En attente" && (
                        <>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => onApprove(preInscription.id)}
                            className="text-green-600 hover:text-green-700 hover:bg-green-50"
                            title="Accepter"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => onReject(preInscription.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            title="Refuser"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline">
          Voir toutes les demandes
        </Button>
      </CardFooter>
    </Card>
  );
};
