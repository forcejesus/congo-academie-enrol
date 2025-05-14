
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, List, LogIn, UserPlus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <img 
              src="/lovable-uploads/363df33b-9d96-4b90-a26e-0ab716c899f9.png" 
              alt="République du Congo"
              className="h-16 w-auto" 
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-congo-green">DGSUP-INSCRIPTION</h1>
              <p className="text-sm text-gray-600">Ministère de l'Enseignement Supérieur</p>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-6 mr-4">
              <a href="/" className="text-gray-700 hover:text-congo-green font-medium transition-colors">
                Accueil
              </a>
              <a href="/etablissements" className="text-gray-700 hover:text-congo-green font-medium transition-colors flex items-center gap-2">
                <List size={18} />
                <span>Liste des établissements</span>
              </a>
            </nav>
            
            <div className="flex items-center space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <LogIn size={18} />
                    <span>Se connecter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Choisir un profil</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/connexion/etablissement')}>
                    Portail privé des écoles
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/connexion/etudiant')}>
                    Je suis étudiant
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-congo-green hover:bg-congo-green/90 text-white flex items-center gap-2">
                    <UserPlus size={18} />
                    <span>Inscription</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Créer un compte</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/inscription/etudiant')}>
                    Je suis étudiant
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/inscription/etablissement')}>
                    Compte Universitaire
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
            <a href="/" className="text-gray-700 hover:text-congo-green font-medium py-2 flex items-center gap-2">
              Accueil
            </a>
            <a href="/etablissements" className="text-gray-700 hover:text-congo-green font-medium py-2 flex items-center gap-2">
              <List size={18} />
              <span>Liste des établissements</span>
            </a>
            
            <div className="pt-2 border-t border-gray-100">
              <p className="font-medium text-gray-600 mb-2">Se connecter en tant que :</p>
              <div className="flex flex-col space-y-2">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/connexion/etablissement')} 
                  className="justify-start"
                >
                  <LogIn size={18} className="mr-2" />
                  Portail privé des écoles
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/connexion/etudiant')} 
                  className="justify-start"
                >
                  <LogIn size={18} className="mr-2" />
                  Je suis étudiant
                </Button>
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-100">
              <p className="font-medium text-gray-600 mb-2">S'inscrire en tant que :</p>
              <div className="flex flex-col space-y-2">
                <Button 
                  className="bg-congo-green hover:bg-congo-green/90 text-white justify-start"
                  onClick={() => navigate('/inscription/etudiant')}
                >
                  <UserPlus size={18} className="mr-2" />
                  Je suis étudiant
                </Button>
                <Button 
                  className="bg-congo-green hover:bg-congo-green/90 text-white justify-start"
                  onClick={() => navigate('/inscription/etablissement')}
                >
                  <UserPlus size={18} className="mr-2" />
                  Compte Universitaire
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
