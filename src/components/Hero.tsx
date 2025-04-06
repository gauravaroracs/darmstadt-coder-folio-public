import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-0 w-72 h-72 bg-green-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-transform">
              Hello, World! 👋
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
                Gaurav
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                Arora
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400">
              FULL STACK DEVELOPER
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-xl">
              A passionate software developer specializing in building modern web applications
              with cutting-edge technologies.
            </p>

            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transform hover:scale-110 transition-all"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 transform hover:scale-110 transition-all"
              >
                <FaGithub />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transform hover:scale-110 transition-all"
              >
                <FaTwitter />
              </a>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full flex items-center space-x-2 mx-auto lg:mx-0 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
              <MdEmail size={20} />
              <span>Let's Connect</span>
            </button>
          </div>

          {/* Right Content - Hero Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
              <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                {/* Portrait image */}
                <img
                  src="/portrait.png"
                  alt="Gaurav Arora Portrait"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-tl from-green-500/10 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400/20 rounded-full blur-2xl" />
              
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
