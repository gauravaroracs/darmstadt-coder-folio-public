import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Technical University",
      period: "2023 - Present",
      color: "purple",
      description: "Specializing in Software Engineering and Distributed Systems. Research focus on cloud computing and microservices architecture."
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Engineering Institute",
      period: "2015 - 2019",
      color: "yellow",
      description: "Graduated with honors. Core coursework included Data Structures, Algorithms, Database Systems, and Software Engineering principles."
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-100 dark:bg-purple-500/20',
        text: 'text-purple-600 dark:text-purple-400',
        timeline: 'bg-purple-200 dark:bg-purple-500/40',
        gradient: 'from-purple-500/20 to-purple-600/20'
      },
      yellow: {
        bg: 'bg-yellow-500',
        light: 'bg-yellow-100 dark:bg-yellow-500/20',
        text: 'text-yellow-600 dark:text-yellow-400',
        timeline: 'bg-yellow-200 dark:bg-yellow-500/40',
        gradient: 'from-yellow-500/20 to-yellow-600/20'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white transition-colors">
          Education
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          My academic journey and qualifications
        </p>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex items-start group">
                <div className="mr-4 mt-1">
                  <div className={`p-3 rounded-xl ${getColorClasses(edu.color).light} transform group-hover:scale-110 transition-all duration-300`}>
                    <FaGraduationCap className={`${getColorClasses(edu.color).text}`} size={24} />
                  </div>
                </div>

                <div className="flex-1">
                  <div className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group`}>
                    <div className={`absolute top-0 right-0 w-[500px] h-[500px] -mr-48 -mt-48 bg-gradient-to-br ${getColorClasses(edu.color).gradient} rounded-full opacity-50 transform group-hover:scale-110 transition-transform duration-500`}></div>
                    
                    <div className="relative">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">
                        {edu.degree}
                      </h3>
                      <p className={`${getColorClasses(edu.color).text} mb-4 font-medium`}>
                        {edu.school} | {edu.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {index < education.length - 1 && (
                <div className={`ml-7 mt-8 mb-8 w-0.5 h-8 ${getColorClasses(edu.color).timeline} transition-colors`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
