
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { User, Pencil, GraduationCap, Mail, Phone } from 'lucide-react';

interface EtudiantInfosCardProps {
  etudiant: {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    niveauEtude: string;
    photo?: string;
  };
  onEdit: () => void;
}

export const EtudiantInfosCard = ({ etudiant, onEdit }: EtudiantInfosCardProps) => {
  const navigate = useNavigate();
  const initiales = etudiant.prenom.charAt(0) + etudiant.nom.charAt(0);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <User className="mr-2 h-5 w-5 text-congo-green" />
            Mes informations
          </CardTitle>
          <Button variant="outline" size="sm" onClick={onEdit}>
            <Pencil className="mr-2 h-4 w-4" />
            Modifier
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="relative">
            {etudiant.photo ? (
              <img 
                src={etudiant.photo} 
                alt={`${etudiant.prenom} ${etudiant.nom}`} 
                className="h-24 w-24 rounded-full object-cover"
              />
            ) : (
              <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
                {initiales}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-medium text-xl text-center sm:text-left">
              {etudiant.prenom} {etudiant.nom}
            </h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4 text-congo-green flex-shrink-0" />
                <span className="text-sm truncate">{etudiant.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4 text-congo-green flex-shrink-0" />
                <span className="text-sm">{etudiant.telephone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <GraduationCap className="h-4 w-4 text-congo-green flex-shrink-0" />
                <span className="text-sm">{etudiant.niveauEtude}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => navigate('/etudiant/documents')}
          >
            Gérer mes documents
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
