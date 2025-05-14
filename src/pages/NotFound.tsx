
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-congo-red mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Page non trouvée</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button 
            onClick={() => navigate("/")}
            className="bg-congo-green hover:bg-congo-green/90 text-white"
          >
            Retour à l'accueil
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
