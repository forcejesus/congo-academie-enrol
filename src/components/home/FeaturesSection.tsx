
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Liste des établissements agréés",
    description: "Consultez la liste officielle des établissements privés reconnus par le Ministère de l'Enseignement Supérieur.",
    details: [
      "Fiches détaillées de chaque établissement",
      "Informations sur l'agrément ministériel",
      "Coordonnées et emplacements vérifiés",
      "Photos des campus et installations"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 21h-9a3 3 0 0 1-3-3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 0v10a2 2 0 1 1-2 2h-2" />
        <path d="M9 7h.01" />
        <path d="M9 11h.01" />
      </svg>
    ),
    title: "Pré-inscription en ligne",
    description: "Soumettez votre demande d'inscription dans les établissements de votre choix sans déplacement.",
    details: [
      "Formulaire d'inscription simplifié",
      "Téléchargement de documents en ligne",
      "Choix multiple d'établissements",
      "Suivi en temps réel de votre candidature"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <path d="M9 3v18" />
        <path d="M3 9h6" />
        <path d="M3 15h6" />
        <path d="M15 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M15 21a6 6 0 0 0 0-12" />
      </svg>
    ),
    title: "Portail établissements",
    description: "Espace dédié aux établissements pour gérer efficacement les inscriptions et les données administratives.",
    details: [
      "Tableau de bord complet",
      "Gestion des demandes d'inscription",
      "Communication directe avec les candidats",
      "Rapports et statistiques d'admission"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Suivi de dossier",
    description: "Suivez l'état de votre demande d'inscription et recevez des notifications d'avancement en temps réel.",
    details: [
      "Notifications par email et SMS",
      "Historique des actions et modifications",
      "État détaillé du traitement administratif",
      "Rappels automatiques pour les documents manquants"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Vérification des agréments",
    description: "Consultez la liste des filières autorisées et vérifiez le statut d'agrément de chaque établissement.",
    details: [
      "Base de données ministérielle officielle",
      "Information sur la validité des diplômes",
      "Liste des cycles de formation reconnus",
      "Historique des renouvellements d'agrément"
    ]
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-congo-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    title: "Système d'exportation",
    description: "Exportation facile et sécurisée des données d'inscription au format Excel pour les établissements.",
    details: [
      "Génération de rapports personnalisés",
      "Export des statistiques d'admission",
      "Données conformes aux exigences ministérielles",
      "Archivage automatique des documents"
    ]
  }
];

const FeaturesSection = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 relative" id="fonctionnalites">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-congo-green/5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-congo-yellow/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-congo-green/5 text-congo-green border-congo-green/20 mb-4 px-4 py-1.5">
            Transformation digitale
          </Badge>
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className="relative z-10">Fonctionnalités de la plateforme</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-congo-yellow/20 -z-10"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les outils modernes mis à votre disposition pour simplifier le processus d'inscription 
            dans l'enseignement supérieur et assurer la transparence administrative.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden group h-full flex flex-col"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 bg-congo-green/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <CardHeader className="pb-0">
                  <div className="mb-5 p-3 rounded-xl inline-block bg-congo-green/5 text-congo-green group-hover:bg-congo-green group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  
                  {/* Feature details */}
                  <div className="mt-auto">
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 mt-1 flex-shrink-0 text-congo-green">
                            <Check size={16} />
                          </span>
                          <span className="text-sm text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-lg bg-white shadow-md border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-congo-green">Des outils innovants au service de l'éducation</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre plateforme est conçue pour faciliter l'accès à l'enseignement supérieur tout en garantissant 
              la qualité et la légitimité des établissements partenaires. Un service complet du Ministère 
              de l'Enseignement Supérieur pour le développement académique du Congo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
