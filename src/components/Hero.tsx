
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-2 animate-fade-in">
            <p className="text-primary text-lg md:text-xl font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Software Engineer</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mt-4">
              Backend Developer with Java expertise & Frontend React Developer
              <br /> 
              <span className="text-primary">Soon pursuing MSc at TU Darmstadt</span>
            </p>
          </div>

          <div className="flex gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#experience" 
              className="px-6 py-3 bg-secondary text-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              View Experience
            </a>
          </div>

          <div className="flex gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <a href="#about" aria-label="Scroll down">
              <ArrowDown className="text-primary" size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
