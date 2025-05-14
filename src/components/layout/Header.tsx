
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center space-x-3" onClick={() => navigate('/')} role="button">
            <img 
              src="/lovable-uploads/363df33b-9d96-4b90-a26e-0ab716c899f9.png" 
              alt="République du Congo"
              className="h-16 w-auto" 
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold">DGSUP-INSCRIPTION</h1>
              <p className="text-sm text-gray-600">Ministère de l'Enseignement Supérieur</p>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-congo-green font-medium">
                Accueil
              </a>
              <a href="/etablissements" className="text-gray-700 hover:text-congo-green font-medium">
                Établissements
              </a>
              <a href="/inscription" className="text-gray-700 hover:text-congo-green font-medium">
                Pré-inscription
              </a>
              <a href="/a-propos" className="text-gray-700 hover:text-congo-green font-medium">
                À propos
              </a>
            </nav>
            
            <div className="flex space-x-2">
              <Button variant="outline" onClick={() => navigate('/connexion')}>
                Connexion
              </Button>
              <Button 
                className="bg-congo-green hover:bg-congo-green/90 text-white"
                onClick={() => navigate('/inscription')}
              >
                S'inscrire
              </Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="/" className="text-gray-700 hover:text-congo-green font-medium py-2">
              Accueil
            </a>
            <a href="/etablissements" className="text-gray-700 hover:text-congo-green font-medium py-2">
              Établissements
            </a>
            <a href="/inscription" className="text-gray-700 hover:text-congo-green font-medium py-2">
              Pré-inscription
            </a>
            <a href="/a-propos" className="text-gray-700 hover:text-congo-green font-medium py-2">
              À propos
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Button variant="outline" onClick={() => navigate('/connexion')} className="w-full">
                Connexion
              </Button>
              <Button 
                className="bg-congo-green hover:bg-congo-green/90 text-white w-full"
                onClick={() => navigate('/inscription')}
              >
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
