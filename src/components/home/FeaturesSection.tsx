
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Liste des établissements agréés",
    description: "Consultez les universités et établissements privés officiellement reconnus par le Ministère de l'Enseignement Supérieur.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Pré-inscription en ligne",
    description: "Effectuez votre demande d'inscription dans les établissements de votre choix sans vous déplacer.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Portail établissements",
    description: "Interface dédiée permettant aux établissements de gérer les inscriptions et les informations administratives.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: "Suivi de dossier",
    description: "Suivez l'évolution de votre dossier d'inscription et recevez des notifications sur son état.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Transparence des agréments",
    description: "Vérifiez le statut d'agrément de chaque établissement et les filières autorisées par le Ministère.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Exportation des données",
    description: "Pour les établissements : exportez facilement vos listes d'inscrits au format Excel.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    )
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 stagger-animation">
          <h2 className="text-3xl font-bold mb-4">Fonctionnalités de la plateforme</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            DGSUP-INSCRIPTION offre des outils modernes et efficaces pour faciliter les démarches d'inscription dans l'enseignement supérieur.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {features.map((feature, index) => (
            <Card key={index} className="border-t-4 border-t-congo-green hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
