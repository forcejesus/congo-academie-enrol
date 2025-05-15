
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { School, MapPin, Phone, Mail, Globe, Users, Calendar } from 'lucide-react';

interface ProfileEtablissementProps {
  etablissement: {
    nom: string;
    logo?: string;
    type: string;
    status: string;
    ville: string;
    adresse: string;
    telephone: string;
    email: string;
    siteWeb?: string;
    nombreEtudiants: number;
    anneeCreation: number;
  };
  onEdit: () => void;
}

export const ProfileEtablissementCard = ({ etablissement, onEdit }: ProfileEtablissementProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <School className="mr-2 h-5 w-5 text-congo-green" />
            Profil de l'établissement
          </CardTitle>
          <Button variant="outline" size="sm" onClick={onEdit}>
            Modifier
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          {etablissement.logo ? (
            <img 
              src={etablissement.logo} 
              alt={etablissement.nom} 
              className="h-20 w-20 object-contain"
            />
          ) : (
            <div className="h-20 w-20 bg-gray-100 rounded-md flex items-center justify-center">
              <School className="h-10 w-10 text-gray-400" />
            </div>
          )}
          <div>
            <h3 className="font-bold text-xl">{etablissement.nom}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">{etablissement.type}</Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                {etablissement.status}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4 text-congo-green" />
              <span>{etablissement.adresse}, {etablissement.ville}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="h-4 w-4 text-congo-green" />
              <span>{etablissement.telephone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-4 w-4 text-congo-green" />
              <span>{etablissement.email}</span>
            </div>
            {etablissement.siteWeb && (
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="h-4 w-4 text-congo-green" />
                <a href={etablissement.siteWeb} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:underline">
                  {etablissement.siteWeb.replace(/(^\w+:|^)\/\//, '')}
                </a>
              </div>
            )}
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="h-4 w-4 text-congo-green" />
              <span>{etablissement.nombreEtudiants} étudiants inscrits</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-4 w-4 text-congo-green" />
              <span>Fondé en {etablissement.anneeCreation}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
