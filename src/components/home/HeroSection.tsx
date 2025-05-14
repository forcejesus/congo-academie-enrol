
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-gradient-to-br from-congo-green/10 via-white to-congo-yellow/10 py-16 md:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 stagger-animation">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Plateforme officielle d'inscription aux établissements supérieurs
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Un système sécurisé pour moderniser la gestion des inscriptions des apprenants dans les établissements d'enseignement supérieur privé agréés par l'État congolais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-congo-green text-white hover:bg-congo-green/90"
              onClick={() => navigate('/inscription')}
            >
              Commencer l'inscription
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/etablissements')}
            >
              Voir les établissements
            </Button>
          </div>
          
          <div className="mt-8 flex items-center space-x-2 text-sm text-gray-600">
            <div className="h-6 w-6 rounded-full bg-congo-green flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Plateforme officielle du Ministère de l'Enseignement Supérieur</span>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-congo-green/20 to-congo-yellow/20 rounded-lg transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Étudiants universitaires"
              className="relative z-10 rounded-lg shadow-lg w-full max-w-md mx-auto object-cover h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
