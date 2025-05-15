
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { UserPlus } from "lucide-react";

export const NewPreInscriptionCard = () => {
  const navigate = useNavigate();
  
  const handleNewPreInscription = () => {
    navigate('/etablissements');
  };

  return (
    <Card className="h-full flex flex-col border-dashed border-2">
      <CardHeader>
        <CardTitle className="text-base text-gray-600">Nouvelle pré-inscription</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center text-center">
        <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
          <UserPlus className="h-8 w-8 text-gray-400" />
        </div>
        <p className="text-gray-500 mb-6">
          Soumettez une nouvelle demande de pré-inscription auprès d'un établissement
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button className="bg-congo-green hover:bg-congo-green/90 w-full" onClick={handleNewPreInscription}>
          <UserPlus className="mr-2 h-4 w-4" />
          Nouvelle pré-inscription
        </Button>
      </CardFooter>
    </Card>
  );
};
