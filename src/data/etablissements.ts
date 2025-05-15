
export interface Filiere {
  id: number;
  nom: string;
  niveau: string; // Licence, Master, Doctorat
  duree: string;
  description: string;
}

export interface Etablissement {
  id: number;
  nom: string;
  type: string; // Université, École supérieure, Institut
  ville: string;
  adresse: string;
  telephone: string;
  email: string;
  siteWeb?: string;
  description: string;
  dateAgrement: string;
  numeroAgrement: string;
  accepteBoursiers: boolean;
  logo?: string;
  images?: string[];
  filieres: Filiere[];
  fraisScolarite: {
    licence: string;
    master?: string;
    doctorat?: string;
  };
}

export const etablissementsData: Etablissement[] = [
  {
    id: 1,
    nom: "Université Marien Ngouabi",
    type: "Université",
    ville: "Brazzaville",
    adresse: "Avenue Marien Ngouabi, BP 69, Brazzaville",
    telephone: "+242 05 551 3818",
    email: "contact@umng.cg",
    siteWeb: "https://www.umng.cg",
    description: "L'Université Marien Ngouabi (UMNG) est la principale université publique de la République du Congo. Elle propose des formations dans divers domaines scientifiques, techniques et littéraires.",
    dateAgrement: "1971-12-04",
    numeroAgrement: "AGR/MESRS/1971/001",
    accepteBoursiers: true,
    logo: "/placeholder.svg",
    filieres: [
      {
        id: 1,
        nom: "Sciences Économiques",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en économie générale, microéconomie, macroéconomie et économétrie."
      },
      {
        id: 2,
        nom: "Droit des Affaires",
        niveau: "Master",
        duree: "2 ans",
        description: "Formation avancée en droit commercial, droit des sociétés et droit fiscal."
      },
      {
        id: 3,
        nom: "Médecine Générale",
        niveau: "Doctorat",
        duree: "7 ans",
        description: "Formation complète en médecine avec stages hospitaliers et spécialisation."
      }
    ],
    fraisScolarite: {
      licence: "300 000 FCFA/an",
      master: "450 000 FCFA/an",
      doctorat: "600 000 FCFA/an"
    }
  },
  {
    id: 2,
    nom: "École Supérieure de Commerce et de Gestion",
    type: "École supérieure",
    ville: "Pointe-Noire",
    adresse: "Avenue Charles de Gaulle, Pointe-Noire",
    telephone: "+242 06 678 9245",
    email: "info@escg-congo.org",
    siteWeb: "https://www.escg-congo.org",
    description: "L'ESCG est une institution privée spécialisée dans les formations en commerce, marketing et management.",
    dateAgrement: "2008-07-15",
    numeroAgrement: "AGR/MESRS/2008/042",
    accepteBoursiers: true,
    logo: "/placeholder.svg",
    filieres: [
      {
        id: 1,
        nom: "Management des Organisations",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en gestion d'entreprise, ressources humaines et management stratégique."
      },
      {
        id: 2,
        nom: "Marketing Digital",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en stratégies marketing numériques, communication et e-commerce."
      },
      {
        id: 3,
        nom: "Finance d'Entreprise",
        niveau: "Master",
        duree: "2 ans",
        description: "Formation avancée en analyse financière, contrôle de gestion et audit."
      }
    ],
    fraisScolarite: {
      licence: "850 000 FCFA/an",
      master: "1 200 000 FCFA/an"
    }
  },
  {
    id: 3,
    nom: "Institut Supérieur des Technologies",
    type: "Institut",
    ville: "Brazzaville",
    adresse: "Rue des Écoles, Quartier Bacongo, Brazzaville",
    telephone: "+242 05 523 4456",
    email: "contact@ist-congo.com",
    description: "L'IST forme des techniciens et ingénieurs dans différents domaines technologiques et scientifiques.",
    dateAgrement: "2012-09-20",
    numeroAgrement: "AGR/MESRS/2012/078",
    accepteBoursiers: false,
    filieres: [
      {
        id: 1,
        nom: "Génie Informatique",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en programmation, systèmes d'information et réseaux informatiques."
      },
      {
        id: 2,
        nom: "Génie Civil",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en construction, mécanique des structures et matériaux de construction."
      }
    ],
    fraisScolarite: {
      licence: "750 000 FCFA/an"
    }
  },
  {
    id: 4,
    nom: "École Africaine de Développement",
    type: "École supérieure",
    ville: "Dolisie",
    adresse: "Avenue de l'Indépendance, Dolisie",
    telephone: "+242 06 889 1122",
    email: "info@ead.cg",
    siteWeb: "https://www.ead.cg",
    description: "L'EAD est spécialisée dans la formation de cadres en développement durable et gestion des projets.",
    dateAgrement: "2015-03-12",
    numeroAgrement: "AGR/MESRS/2015/103",
    accepteBoursiers: true,
    logo: "/placeholder.svg",
    filieres: [
      {
        id: 1,
        nom: "Développement Durable",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en gestion environnementale et développement économique durable."
      },
      {
        id: 2,
        nom: "Gestion de Projets",
        niveau: "Master",
        duree: "2 ans",
        description: "Formation avancée en élaboration, exécution et évaluation de projets de développement."
      }
    ],
    fraisScolarite: {
      licence: "650 000 FCFA/an",
      master: "900 000 FCFA/an"
    }
  },
  {
    id: 5,
    nom: "Institut Supérieur de Santé",
    type: "Institut",
    ville: "Brazzaville",
    adresse: "Boulevard des Armées, Brazzaville",
    telephone: "+242 05 765 4321",
    email: "contact@iss-congo.org",
    description: "L'ISS forme des professionnels de santé avec une approche pratique et moderne.",
    dateAgrement: "2010-11-05",
    numeroAgrement: "AGR/MESRS/2010/065",
    accepteBoursiers: true,
    filieres: [
      {
        id: 1,
        nom: "Soins Infirmiers",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation aux techniques de soins, pharmacologie et prise en charge des patients."
      },
      {
        id: 2,
        nom: "Techniques de Laboratoire",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en analyses biologiques, biochimie et hématologie."
      }
    ],
    fraisScolarite: {
      licence: "700 000 FCFA/an"
    }
  },
  {
    id: 6,
    nom: "École Nationale des Arts",
    type: "École supérieure",
    ville: "Pointe-Noire",
    adresse: "Rue des Artistes, Loandjili, Pointe-Noire",
    telephone: "+242 06 432 1098",
    email: "ena@arts-congo.com",
    description: "L'ENA propose des formations artistiques de haut niveau dans différentes disciplines.",
    dateAgrement: "2014-05-18",
    numeroAgrement: "AGR/MESRS/2014/091",
    accepteBoursiers: false,
    filieres: [
      {
        id: 1,
        nom: "Arts Plastiques",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en peinture, sculpture et arts graphiques."
      },
      {
        id: 2,
        nom: "Arts Numériques",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en design graphique, animation et arts médiatiques."
      }
    ],
    fraisScolarite: {
      licence: "800 000 FCFA/an"
    }
  },
  {
    id: 7,
    nom: "Institut de Management et de Commerce International",
    type: "Institut",
    ville: "Brazzaville",
    adresse: "Avenue de la Paix, Brazzaville",
    telephone: "+242 05 678 9012",
    email: "contact@imci-congo.com",
    siteWeb: "https://www.imci-congo.com",
    description: "L'IMCI forme des cadres spécialisés dans le commerce international et les relations économiques.",
    dateAgrement: "2013-10-09",
    numeroAgrement: "AGR/MESRS/2013/087",
    accepteBoursiers: true,
    logo: "/placeholder.svg",
    filieres: [
      {
        id: 1,
        nom: "Commerce International",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en négociation internationale, douanes et logistique."
      },
      {
        id: 2,
        nom: "Management International",
        niveau: "Master",
        duree: "2 ans",
        description: "Formation avancée en gestion d'entreprises à l'international."
      }
    ],
    fraisScolarite: {
      licence: "900 000 FCFA/an",
      master: "1 300 000 FCFA/an"
    }
  },
  {
    id: 8,
    nom: "École d'Ingénierie Pétrolière",
    type: "École supérieure",
    ville: "Pointe-Noire",
    adresse: "Zone Industrielle, Pointe-Noire",
    telephone: "+242 06 543 2109",
    email: "info@eip-congo.org",
    description: "L'EIP est spécialisée dans la formation de techniciens et ingénieurs pour l'industrie pétrolière.",
    dateAgrement: "2007-08-23",
    numeroAgrement: "AGR/MESRS/2007/035",
    accepteBoursiers: true,
    filieres: [
      {
        id: 1,
        nom: "Génie Pétrolier",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en techniques d'extraction, forage et traitement pétrolier."
      },
      {
        id: 2,
        nom: "Maintenance Industrielle",
        niveau: "Licence",
        duree: "3 ans",
        description: "Formation en entretien et réparation des équipements industriels."
      },
      {
        id: 3,
        nom: "Ingénierie des Procédés",
        niveau: "Master",
        duree: "2 ans",
        description: "Formation avancée en conception et optimisation des procédés industriels."
      }
    ],
    fraisScolarite: {
      licence: "1 000 000 FCFA/an",
      master: "1 500 000 FCFA/an"
    }
  }
];
