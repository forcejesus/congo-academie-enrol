
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProcessSection from '@/components/home/ProcessSection';
import CtaSection from '@/components/home/CtaSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
