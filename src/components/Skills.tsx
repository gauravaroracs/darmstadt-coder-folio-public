import React from 'react';
import { FaCode, FaServer, FaTools, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-400",
      skills: [
        "React.js",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "HTML5/CSS3",
        "JavaScript (ES6+)"
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer />,
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-400",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
        "Python",
        "Java"
      ]
    },
    {
      title: "Database & Cloud",
      icon: <FaDatabase />,
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-400",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "AWS",
        "Firebase",
        "Docker"
      ]
    },
    {
      title: "Tools & Methods",
      icon: <FaTools />,
      color: "from-red-500 to-red-600",
      iconBg: "bg-red-400",
      skills: [
        "Git",
        "CI/CD",
        "Agile/Scrum",
        "Jest",
        "Webpack",
        "Linux"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white transition-colors">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A diverse set of skills and technologies I work with to create amazing digital experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r w-full h-full blur-xl opacity-30 group-hover:opacity-40 transition-opacity"
                   style={{
                     background: `linear-gradient(135deg, ${category.color.split(' ')[1].replace('to-', '')} 0%, ${category.color.split(' ')[1].replace('to-', '')}66 100%)`
                   }}
              ></div>
              <div className={`relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700`}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${category.iconBg} bg-opacity-20 dark:bg-opacity-30`}>
                    <span className={`text-2xl ${category.color.split(' ')[1]}`}>
                      {category.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li 
                      key={i}
                      className="text-gray-600 dark:text-gray-300 flex items-center group"
                    >
                      <span className={`w-2 h-2 ${category.color.split(' ')[1]} rounded-full mr-3 group-hover:scale-125 transition-transform`}></span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
