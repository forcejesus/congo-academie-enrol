
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">DGSUP-INSCRIPTION</h3>
            <p className="text-gray-300">
              Plateforme officielle d'inscription dans les établissements d'enseignement supérieur privés agréés par le Ministère de l'Enseignement Supérieur, de la Recherche Scientifique et de l'Innovation Technologique.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-congo-yellow transition">Accueil</a>
              </li>
              <li>
                <a href="/etablissements" className="text-gray-300 hover:text-congo-yellow transition">Liste des établissements</a>
              </li>
              <li>
                <a href="/inscription" className="text-gray-300 hover:text-congo-yellow transition">Processus d'inscription</a>
              </li>
              <li>
                <a href="/faq" className="text-gray-300 hover:text-congo-yellow transition">Questions fréquentes</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>Ministère de l'Enseignement Supérieur</p>
              <p>Direction Générale de l'Enseignement Supérieur</p>
              <p>Brazzaville, République du Congo</p>
              <p className="mt-2">
                <a href="mailto:contact@dgsup-inscription.gouv.cg" className="text-congo-yellow">contact@dgsup-inscription.gouv.cg</a>
              </p>
              <p>
                <a href="tel:+242000000000" className="text-congo-yellow">+242 00 000 00 00</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left text-sm text-gray-400">
            © {currentYear} République du Congo. Tous droits réservés.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="/mentions-legales" className="text-sm text-gray-400 hover:text-white">Mentions légales</a>
            <a href="/confidentialite" className="text-sm text-gray-400 hover:text-white">Politique de confidentialité</a>
            <a href="/accessibilite" className="text-sm text-gray-400 hover:text-white">Accessibilité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
