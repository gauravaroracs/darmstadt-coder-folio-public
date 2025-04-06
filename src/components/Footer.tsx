
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="text-white/70 hover:text-white transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="space-y-2 text-center">
            <p className="text-white/70">
              Thank you for visiting my portfolio
            </p>
            <p className="text-white/50 text-sm">
              © {currentYear} Developer Portfolio. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
