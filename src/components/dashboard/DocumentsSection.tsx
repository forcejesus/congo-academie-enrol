
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
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@/utils/formatters';
import { Download } from 'lucide-react';

interface Document {
  id: number;
  nom: string;
  type: string;
  date: string;
  taille: string;
}

interface DocumentsSectionProps {
  documents: Document[];
}

export const DocumentsSection = ({ documents }: DocumentsSectionProps) => {
  const navigate = useNavigate();

  return (
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
  );
};
