
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
import { LogIn, Book } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  code: z.string().min(3, "Veuillez entrer un code d'établissement valide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

const ConnexionEtablissement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // This would connect to a backend in a real implementation
    console.log(values);
    toast({
      title: "Connexion en cours",
      description: "Cette fonctionnalité sera disponible prochainement.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-md">
        <Card className="w-full shadow-lg border-congo-green/20">
          <CardHeader className="space-y-1 text-center">
            <Book className="mx-auto h-12 w-12 text-congo-green mb-2" />
            <CardTitle className="text-2xl font-bold text-congo-green">Portail Établissements</CardTitle>
            <CardDescription>
              Accès réservé aux établissements d'enseignement supérieur agréés
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Code Établissement</FormLabel>
                      <FormControl>
                        <Input placeholder="Entrez votre code d'établissement" {...field} />
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
                  <LogIn className="mr-2 h-4 w-4" /> Accéder au portail
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 pt-0">
            <div className="text-sm text-center text-gray-500">
              <a href="#" className="text-congo-green hover:underline">
                Identifiants perdus ?
              </a>
            </div>
            <div className="text-sm text-center">
              Demander un accès ? {" "}
              <a 
                href="/inscription/etablissement" 
                className="text-congo-green font-semibold hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/inscription/etablissement');
                }}
              >
                Contacter le ministère
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default ConnexionEtablissement;
