
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { SplineSceneBasic } from '@/components/ui/spline-demo';
import { initScrollReveal } from '@/utils/scrollReveal';

const Index = () => {
  useEffect(() => {
    // Initialize scroll reveal animations
    const cleanup = initScrollReveal();
    
    // Clean up event listener on component unmount
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center reveal">Interactive Portfolio Showcase</h2>
        <div className="reveal">
          <SplineSceneBasic />
        </div>
      </div>
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
