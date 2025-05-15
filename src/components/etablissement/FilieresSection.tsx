
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
import { Plus, Pencil, BookOpen } from 'lucide-react';

interface Filiere {
  id: number;
  nom: string;
  niveau: string;
  places: number;
  placesPrises: number;
}

interface FilieresSectionProps {
  filieres: Filiere[];
  onAddFiliere: () => void;
  onEditFiliere: (id: number) => void;
}

export const FilieresSection = ({ filieres, onAddFiliere, onEditFiliere }: FilieresSectionProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-congo-green" />
            Filières proposées
          </CardTitle>
          <CardDescription>
            Gérez les filières de formation de votre établissement
          </CardDescription>
        </div>
        <Button onClick={onAddFiliere} className="bg-congo-green hover:bg-congo-green/90">
          <Plus className="mr-2 h-4 w-4" />
          Ajouter une filière
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filieres.map((filiere) => (
            <div key={filiere.id} className="border rounded-md p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-lg">{filiere.nom}</h3>
                  <Badge variant="outline" className="mt-2">
                    {filiere.niveau}
                  </Badge>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => onEditFiliere(filiere.id)}
                  className="text-gray-500"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Places disponibles</span>
                  <span>{filiere.places - filiere.placesPrises} / {filiere.places}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div 
                    className="bg-congo-green h-2.5 rounded-full" 
                    style={{ width: `${(filiere.placesPrises / filiere.places) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
