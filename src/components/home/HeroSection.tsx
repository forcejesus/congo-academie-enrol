
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { List, UserPlus } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-congo-green/5 -skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-congo-yellow/5 skew-x-12 transform origin-bottom-left"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 stagger-animation">
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-congo-green mr-4"></div>
              <span className="text-congo-green font-semibold">Plateforme Officielle</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800">
              Votre avenir commence avec une 
              <span className="text-congo-green"> inscription</span> simplifiée
            </h1>
            
            <p className="text-lg text-gray-600 mb-10">
              La plateforme officielle du Ministère de l'Enseignement Supérieur pour moderniser 
              et sécuriser les inscriptions dans les établissements d'enseignement supérieur privés agréés.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                size="lg" 
                className="bg-congo-green hover:bg-congo-green/90 text-white gap-2 h-14 px-8"
                onClick={() => navigate('/inscription/etudiant')}
              >
                <UserPlus size={20} />
                <span>Inscription étudiante</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 hover:bg-gray-50 gap-2 h-14 px-8"
                onClick={() => navigate('/etablissements')}
              >
                <List size={20} />
                <span>Voir les établissements</span>
              </Button>
            </div>
            
            <div className="mt-10 flex items-center text-sm text-gray-600">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-congo-green/10 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-congo-green" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Service du Ministère de l'Enseignement Supérieur</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Background decorative element */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-congo-green to-congo-yellow opacity-20 blur-md"></div>
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl -rotate-2"></div>
              
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Étudiants universitaires"
                className="relative z-10 rounded-2xl shadow-lg max-w-full object-cover h-[500px] w-full rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              
              {/* Badge overlay */}
              <div className="absolute top-6 right-6 bg-white py-2 px-4 rounded-full shadow-md z-20 flex items-center gap-2">
                <span className="w-2 h-2 bg-congo-green rounded-full"></span>
                <span className="text-sm font-medium">Plateforme Officielle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
