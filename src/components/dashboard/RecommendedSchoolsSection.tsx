
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface Etablissement {
  id: number;
  nom: string;
  type: string;
  ville: string;
  description: string;
}

interface RecommendedSchoolsSectionProps {
  etablissements: Etablissement[];
}

export const RecommendedSchoolsSection = ({ etablissements }: RecommendedSchoolsSectionProps) => {
  const navigate = useNavigate();

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <BookOpen className="mr-2 h-5 w-5 text-congo-green" />
          Établissements recommandés
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {etablissements.slice(0, 4).map((etablissement) => (
            <div key={etablissement.id} 
              className="border rounded-lg p-4 hover:border-congo-green/50 hover:bg-gray-50 cursor-pointer" 
              onClick={() => navigate(`/etablissements/${etablissement.id}`)}
            >
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
  );
};
