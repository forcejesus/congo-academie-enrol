
import React from 'react';
import { Badge } from '@/components/ui/badge';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Créer un compte",
      description: "Inscrivez-vous sur la plateforme en fournissant vos informations personnelles."
    },
    {
      number: 2,
      title: "Consulter les établissements",
      description: "Explorez la liste des établissements privés agréés et leurs filières."
    },
    {
      number: 3,
      title: "Soumettre une pré-inscription",
      description: "Choisissez un établissement et soumettez votre dossier de pré-inscription."
    },
    {
      number: 4,
      title: "Suivre votre demande",
      description: "Consultez l'état de votre demande et recevez des notifications de mise à jour."
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="success" className="mb-4">Simple et efficace</Badge>
          <h2 className="text-3xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Suivez ces étapes simples pour vous inscrire dans un établissement d'enseignement supérieur privé agréé.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-congo-green/20 -translate-x-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 relative">
                  <div className="bg-congo-yellow text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold absolute -left-6 top-1/2 transform -translate-y-1/2 md:static md:h-16 md:w-16 md:mx-auto md:mb-4">
                    {step.number}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md md:text-center">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
