
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

export const ProfileCard = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <User className="mr-2 h-5 w-5 text-congo-green" />
          Mon profil
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
            JD
          </div>
          <div className="ml-4">
            <h3 className="font-medium">Jean Dupont</h3>
            <p className="text-sm text-gray-500">jean.dupont@email.com</p>
          </div>
        </div>
        
        <div className="pt-2">
          <Button variant="outline" className="w-full" onClick={() => navigate('/etudiant/profil')}>
            Modifier mon profil
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
