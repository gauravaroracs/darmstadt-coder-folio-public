
import React from 'react';
import { Code, Database, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg">
            <p>
              I'm a passionate Software Engineer with over 3 years of experience, specializing in Java backend development 
              and React frontend implementations. My professional journey has been shaped by my work in the insurance 
              industry, where I've developed robust, scalable applications to solve complex business problems.
            </p>
            
            <p>
              My technical expertise is complemented by strong problem-solving abilities and a collaborative approach 
              to software development. I believe in writing clean, maintainable code and staying updated with the 
              latest industry practices.
            </p>

            <p>
              I'm excited to be pursuing my Master's degree in Computer Science at the Technical University of Darmstadt, 
              Germany, starting in 2023. This academic pursuit reflects my commitment to deepening my 
              technical knowledge and exploring advanced concepts in computer science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Code className="text-primary mr-2" size={24} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <p>
                Building responsive and interactive user interfaces with React, Redux, and modern CSS frameworks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Database className="text-primary mr-2" size={24} />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <p>
                Developing robust backends with Java, Spring Boot, and RESTful API architecture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <BookOpen className="text-primary mr-2" size={24} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p>
                Expanding knowledge through a Master's in Computer Science at TU Darmstadt, Germany.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
