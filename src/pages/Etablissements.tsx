
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Search, BookOpen } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { etablissementsData } from '@/data/etablissements';

const Etablissements = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const filteredEtablissements = etablissementsData.filter(
    etab => etab.nom.toLowerCase().includes(searchTerm.toLowerCase()) || 
    etab.ville.toLowerCase().includes(searchTerm.toLowerCase()) || 
    etab.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-congo-green mb-2">Établissements Agréés</h1>
            <p className="text-gray-600 mb-4">
              Liste complète des établissements d'enseignement supérieur privés agréés 
              par le Ministère de l'Enseignement Supérieur de la République du Congo.
            </p>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0">
            <div className="relative">
              <Input
                type="search"
                placeholder="Rechercher un établissement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">N°</TableHead>
                  <TableHead>Établissement</TableHead>
                  <TableHead className="hidden md:table-cell">Type</TableHead>
                  <TableHead className="hidden md:table-cell">Ville</TableHead>
                  <TableHead className="hidden md:table-cell">Boursiers</TableHead>
                  <TableHead className="w-[100px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEtablissements.map((etablissement, index) => (
                  <TableRow key={etablissement.id}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">{etablissement.nom}</TableCell>
                    <TableCell className="hidden md:table-cell">{etablissement.type}</TableCell>
                    <TableCell className="hidden md:table-cell">{etablissement.ville}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {etablissement.accepteBoursiers ? "Oui" : "Non"}
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => navigate(`/etablissements/${etablissement.id}`)}
                        className="text-congo-green hover:text-white hover:bg-congo-green"
                      >
                        <BookOpen className="mr-1 h-4 w-4" />
                        Détails
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredEtablissements.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-10">
                      Aucun établissement ne correspond à votre recherche.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          <div className="py-4 border-t">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Etablissements;
