
import React from 'react';
import { Badge } from '@/components/ui/badge';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Créer un compte",
      description: "Inscrivez-vous sur la plateforme avec vos informations personnelles et documents requis."
    },
    {
      number: 2,
      title: "Consulter les établissements",
      description: "Parcourez la liste des établissements privés agréés et découvrez leurs filières disponibles."
    },
    {
      number: 3,
      title: "Soumettre une pré-inscription",
      description: "Sélectionnez jusqu'à trois établissements et soumettez votre dossier de candidature."
    },
    {
      number: 4,
      title: "Suivre votre demande",
      description: "Surveillez l'état de traitement de votre dossier et recevez des notifications en temps réel."
    }
  ];
  
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -left-20 bottom-20 w-40 h-40 bg-congo-green/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 top-40 w-60 h-60 bg-congo-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-congo-green/5 text-congo-green border-congo-green/20 mb-4 px-4 py-1.5">Processus simplifié</Badge>
          <h2 className="text-3xl font-bold mb-6">Comment ça fonctionne ?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un parcours en quatre étapes simples pour vous inscrire dans un établissement d'enseignement supérieur privé agréé.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-congo-green/20 via-congo-green/40 to-congo-green/20 -translate-x-1/2 z-0"></div>
          
          {/* Steps */}
          <div className="space-y-16 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="md:w-1/2">
                  <div className="relative">
                    {/* Step number - mobile */}
                    <div className="md:hidden absolute -left-4 top-1/2 transform -translate-y-1/2 bg-congo-yellow text-gray-900 rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold shadow-md">
                      {step.number}
                    </div>
                    
                    {/* Step content */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow md:transform md:hover:scale-105 md:hover:-rotate-1">
                      <h3 className="text-xl font-bold mb-3 text-gray-800 flex items-center">
                        {/* Step number - desktop */}
                        <span className="hidden md:flex bg-congo-yellow text-gray-900 rounded-full h-10 w-10 items-center justify-center text-lg font-bold mr-3">
                          {step.number}
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    {/* Timeline dot for desktop */}
                    <div className="hidden md:block absolute top-1/2 inset-x-0 -mt-2">
                      <div className={`${index % 2 === 0 ? 'float-right -mr-[42px]' : 'float-left -ml-[42px]'} bg-white rounded-full p-1.5 border-[3px] border-congo-green`}>
                        <div className="bg-congo-green h-4 w-4 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
