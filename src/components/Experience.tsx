import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2022 - Present",
      color: "blue",
      description: [
        "Led development of multiple full-stack applications using React and Node.js",
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Software Developer",
      company: "Digital Solutions Inc",
      period: "2020 - 2022",
      color: "green",
      description: [
        "Developed and maintained client-facing web applications",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with UX designers to implement user-friendly interfaces"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Tech",
      period: "2019 - 2020",
      color: "red",
      description: [
        "Built and maintained RESTful APIs using Node.js",
        "Worked on front-end development using React and TypeScript",
        "Participated in agile development processes"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-100 dark:bg-blue-500/20',
        text: 'text-blue-600 dark:text-blue-400',
        timeline: 'bg-blue-200 dark:bg-blue-500/40'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-100 dark:bg-green-500/20',
        text: 'text-green-600 dark:text-green-400',
        timeline: 'bg-green-200 dark:bg-green-500/40'
      },
      red: {
        bg: 'bg-red-500',
        light: 'bg-red-100 dark:bg-red-500/20',
        text: 'text-red-600 dark:text-red-400',
        timeline: 'bg-red-200 dark:bg-red-500/40'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white transition-colors">
          Work Experience
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          My professional journey and the amazing companies I've worked with
        </p>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex items-start group">
                <div className="mr-4 mt-1">
                  <div className={`p-3 rounded-xl ${getColorClasses(exp.color).light} transform group-hover:scale-110 transition-all duration-300`}>
                    <FaBriefcase className={`${getColorClasses(exp.color).text}`} size={24} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group`}>
                    <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 ${getColorClasses(exp.color).bg} opacity-10 rounded-full transform group-hover:scale-150 transition-transform duration-500`}></div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors relative">
                      {exp.title}
                    </h3>
                    <p className={`${getColorClasses(exp.color).text} mb-4 font-medium relative`}>
                      {exp.company} | {exp.period}
                    </p>
                    <ul className="space-y-3 relative">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start group">
                          <span className={`w-2 h-2 ${getColorClasses(exp.color).bg} rounded-full mr-3 mt-2 group-hover:scale-125 transition-transform`}></span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {index < experiences.length - 1 && (
                <div className={`ml-7 mt-8 mb-8 w-0.5 h-8 ${getColorClasses(exp.color).timeline} transition-colors`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
