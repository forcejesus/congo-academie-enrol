
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
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@/utils/formatters';
import { Calendar, MapPin } from 'lucide-react';

interface Event {
  id: number;
  titre: string;
  date: string;
  lieu: string;
}

interface EventsSectionProps {
  events: Event[];
}

export const EventsSection = ({ events }: EventsSectionProps) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prochains événements</CardTitle>
        <CardDescription>
          Dates importantes à retenir pour vos démarches d'inscription
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="border rounded-lg p-4">
              <h4 className="font-medium">{event.titre}</h4>
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <Calendar className="mr-2 h-4 w-4 text-congo-green" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center mt-1 text-sm text-gray-600">
                <MapPin className="mr-2 h-4 w-4 text-congo-green" />
                <span>{event.lieu}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" onClick={() => navigate('/etudiant/evenements')}>
          Voir tout
        </Button>
      </CardFooter>
    </Card>
  );
};
