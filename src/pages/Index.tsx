
import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Introduction from '@/components/sections/Introduction';
import Offerings from '@/components/sections/Offerings';
import AboutUs from '@/components/sections/AboutUs';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import Sectors from '@/components/sections/Sectors';
import Advance from '@/components/sections/Advance';
import News from '@/components/sections/News';
import Associates from '@/components/sections/Associates';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Network Catalyst Solutions - IT Services & Consulting</title>
        <meta name="description" content="Empowering businesses through innovative IT solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header />

        {/* Hero Section */}
        <div className="h-screen bg-blue-gradient flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Network Catalyst Solutions</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Empowering businesses through innovative IT solutions
            </p>
          </div>
        </div>

        {/* Main Content Sections */}
        <main>
          <Introduction />
          <Offerings />
          <AboutUs />
          <Services />
          <CaseStudies />
          <Sectors />
          <Advance />
          <News />
          <Associates />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
