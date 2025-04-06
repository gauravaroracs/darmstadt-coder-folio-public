
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <GraduationCap className="text-primary mr-2" size={24} />
                  <h3 className="text-2xl font-bold">MSc in Computer Science</h3>
                </div>
                <div className="flex items-center text-foreground/70">
                  <Calendar size={18} className="mr-1" />
                  <span>2023 - 2025 (Expected)</span>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <MapPin size={18} className="text-primary mr-2" />
                <h4 className="text-xl">Technical University of Darmstadt, Germany</h4>
              </div>
              
              <p className="text-lg mb-6">
                I'm excited to be pursuing my Master's degree in Computer Science at the prestigious Technical 
                University of Darmstadt. The program will enable me to deepen my knowledge in software engineering 
                and explore advanced topics in computer science.
              </p>
              
              <div>
                <h5 className="font-semibold mb-2">Areas of Focus:</h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    Advanced Software Engineering
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    Distributed Systems
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    Machine Learning & AI
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    Data Science & Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    Cloud Computing
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    Software Architecture
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary p-6 md:p-8 border-t">
              <h5 className="font-semibold mb-3">Previous Education</h5>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h6 className="font-medium">Bachelor of Engineering in Computer Science</h6>
                  <p className="text-foreground/70">University Name, Country</p>
                </div>
                <div className="mt-2 md:mt-0 text-foreground/70 flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>2015 - 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
