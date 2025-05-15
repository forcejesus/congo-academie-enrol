
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
import { formatDateTime } from '@/utils/formatters';
import { Clock } from 'lucide-react';

interface Notification {
  id: number;
  title: string;
  description: string;
  date: string;
  read: boolean;
}

interface NotificationsSectionProps {
  notifications: Notification[];
}

export const NotificationsSection = ({ notifications }: NotificationsSectionProps) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications récentes</CardTitle>
        <CardDescription>
          Restez informé des mises à jour concernant vos demandes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className={`p-4 border rounded-lg ${notification.read ? 'bg-white' : 'bg-blue-50'}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className={`mt-1 h-2 w-2 rounded-full ${notification.read ? 'bg-gray-300' : 'bg-blue-600'}`}></div>
                  <div>
                    <h4 className="font-medium">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{formatDateTime(notification.date)}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Marquer comme lu
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" onClick={() => navigate('/etudiant/notifications')}>
          Voir tout
        </Button>
      </CardFooter>
    </Card>
  );
};
