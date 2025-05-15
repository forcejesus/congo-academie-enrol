
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LogIn, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Veuillez entrer un email valide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

const ConnexionEtudiant = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // This would connect to a backend in a real implementation
    console.log(values);
    toast({
      title: "Connexion réussie",
      description: "Vous êtes maintenant connecté à votre espace étudiant.",
    });
    // Redirect to student dashboard
    navigate('/etudiant/dashboard');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-md">
        <Card className="w-full shadow-lg border-congo-green/20">
          <CardHeader className="space-y-1 text-center">
            <User className="mx-auto h-12 w-12 text-congo-green mb-2" />
            <CardTitle className="text-2xl font-bold text-congo-green">Espace Étudiant</CardTitle>
            <CardDescription>
              Connectez-vous pour suivre vos demandes d'inscription
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="votre.email@exemple.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-congo-green hover:bg-congo-green/90">
                  <LogIn className="mr-2 h-4 w-4" /> Se connecter
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 pt-0">
            <div className="text-sm text-center text-gray-500">
              <a href="#" className="text-congo-green hover:underline">
                Mot de passe oublié ?
              </a>
            </div>
            <div className="text-sm text-center">
              Pas encore de compte ? {" "}
              <a 
                href="/inscription/etudiant" 
                className="text-congo-green font-semibold hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/inscription/etudiant');
                }}
              >
                S'inscrire
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default ConnexionEtudiant;
