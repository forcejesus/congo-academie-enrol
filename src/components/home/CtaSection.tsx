
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { UserPlus, List } from 'lucide-react';

const CtaSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-congo-green z-0">
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-10 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-congo-green/10 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-congo-yellow/10 rounded-tl-full"></div>
          
          <div className="text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Prêt à commencer votre inscription ?
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
              Rejoignez les milliers d'étudiants qui font confiance à notre plateforme officielle pour sécuriser leur avenir académique.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-congo-green hover:bg-congo-green/90 text-white h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                onClick={() => navigate('/inscription/etudiant')}
              >
                <UserPlus className="mr-2" size={20} />
                <span>S'inscrire maintenant</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 hover:bg-gray-50 h-14 px-8 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                onClick={() => navigate('/etablissements')}
              >
                <List className="mr-2" size={20} />
                <span>Voir les établissements</span>
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-gray-500">
              Plateforme sécurisée et approuvée par le Ministère de l'Enseignement Supérieur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
