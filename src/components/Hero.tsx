
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-10 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-indigo-400/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '7s' }}></div>
        <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-300/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '8s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-2">
            <p className="text-primary text-lg md:text-xl font-medium animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <span className="gradient-text">Software Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Backend Developer with Java expertise & Frontend React Developer
              <br /> 
              <span className="text-primary">Soon pursuing MSc at TU Darmstadt</span>
            </p>
          </div>

          <div className="flex gap-4 mt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Contact Me
            </a>
            <a 
              href="#experience" 
              className="px-6 py-3 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              View Experience
            </a>
          </div>

          <div className="flex gap-6 mt-12 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="text-foreground/70 hover:text-primary transition-colors duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <a href="#about" aria-label="Scroll down" className="transition-transform hover:scale-110">
              <ArrowDown className="text-primary" size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
