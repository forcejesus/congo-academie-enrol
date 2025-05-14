
import React from 'react';
import Layout from '@/components/layout/Layout';

const InscriptionEtablissement = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Création de Compte Universitaire</h1>
        <p className="text-gray-600 mb-12">
          Cette page permettra aux établissements d'enseignement supérieur de créer un compte pour accéder au portail de gestion.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <p className="text-yellow-700">
            Cette page est en cours de développement. Le contenu complet sera disponible prochainement.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default InscriptionEtablissement;
