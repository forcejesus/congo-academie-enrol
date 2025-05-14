
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, UserPlus, List } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const navigate = useNavigate();
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const banner = bannerRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    
    if (banner && content && image) {
      const tl = gsap.timeline();
      
      // Initial setup
      gsap.set([content.children], { 
        y: 50, 
        opacity: 0 
      });
      
      gsap.set(image, { 
        x: 100, 
        opacity: 0 
      });
      
      // Animation sequence
      tl.to(banner, { 
        opacity: 1, 
        duration: 0.6,
        ease: "power2.out" 
      })
      .to(content.children, { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8,
        ease: "power2.out" 
      }, "-=0.2")
      .to(image, { 
        x: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power2.out" 
      }, "-=0.5");
    }
  }, []);
  
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Banner with Overlay */}
      <div 
        ref={bannerRef} 
        className="absolute inset-0 w-full h-full opacity-0"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2074&auto=format&fit=crop')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-congo-green/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-congo-yellow/10 -skew-x-12"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div ref={contentRef} className="text-white space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-congo-green/20 backdrop-blur-sm border border-congo-green/30">
              <span className="text-congo-yellow font-medium text-sm">Direction Générale de l'Enseignement Supérieur</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Votre avenir commence <br className="hidden md:block" />
              avec une <span className="text-congo-yellow relative">
                inscription
                <span className="absolute bottom-1 left-0 w-full h-1 bg-congo-yellow/30"></span>
              </span> simplifiée
            </h1>
            
            <p className="text-lg text-gray-200 max-w-lg">
              La plateforme officielle du Ministère de l'Enseignement Supérieur pour moderniser 
              et sécuriser les inscriptions dans les établissements d'enseignement supérieur privés agréés.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-congo-green hover:bg-congo-green/90 text-white gap-2 h-14 px-8 rounded-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                onClick={() => navigate('/inscription/etudiant')}
              >
                <UserPlus size={20} />
                <span>Inscription étudiante</span>
                <ArrowRight size={16} className="ml-1 animate-pulse" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 gap-2 h-14 px-8 rounded-md transition-all duration-300"
                onClick={() => navigate('/etablissements')}
              >
                <List size={20} />
                <span>Voir les établissements</span>
              </Button>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-white/80 pt-2">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-congo-green/20 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-congo-yellow" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Service du Ministère de l'Enseignement Supérieur</span>
            </div>
          </div>
          
          {/* Image Section */}
          <div ref={imageRef} className="lg:flex justify-end hidden">
            <div className="relative max-w-md">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-congo-green to-congo-yellow opacity-20 blur-lg"></div>
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl -rotate-2"></div>
              
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Étudiants universitaires"
                className="relative z-10 rounded-xl shadow-2xl object-cover h-[500px] w-full rotate-2 hover:rotate-0 transition-transform duration-700"
              />
              
              {/* Badge overlay */}
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md py-2 px-4 rounded-full shadow-lg z-20 flex items-center gap-2 border border-white/20">
                <span className="w-2 h-2 bg-congo-green rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-white">Plateforme Officielle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
