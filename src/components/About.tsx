import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white transition-colors">About Me</h2>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p>
              Hello! I'm Gaurav, a passionate Full Stack Developer with a love for creating
              elegant solutions to complex problems. I specialize in building modern web
              applications using cutting-edge technologies.
            </p>

            <p>
              With a strong foundation in both frontend and backend development, I enjoy
              working across the entire stack to deliver seamless user experiences. My
              expertise includes React, TypeScript, Node.js, and various modern web
              technologies.
            </p>

            <p>
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing my knowledge with the developer
              community. I'm always excited to take on new challenges and learn from
              different perspectives.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white transition-colors">Current Focus</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Building scalable web applications</li>
                <li>Exploring modern frontend frameworks</li>
                <li>Contributing to open-source projects</li>
                <li>Learning about system design and architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
