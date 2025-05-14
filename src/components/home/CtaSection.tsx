
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-congo-green">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à commencer votre inscription ?
          </h2>
          
          <p className="text-white/90 text-lg mb-8">
            Rejoignez les milliers d'étudiants qui font confiance à notre plateforme officielle pour leur inscription dans un établissement d'enseignement supérieur agrée.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-congo-green hover:bg-white/90"
              onClick={() => navigate('/inscription')}
            >
              S'inscrire maintenant
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => navigate('/etablissements')}
            >
              Voir les établissements
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
