
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface DashboardMetricCardProps {
  title: string;
  count: number;
  description: string;
  icon: LucideIcon;
}

export const DashboardMetricCard = ({ title, count, description, icon: Icon }: DashboardMetricCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Icon className="mr-2 h-5 w-5 text-congo-green" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{count}</div>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
};
