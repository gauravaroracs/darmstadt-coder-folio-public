
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 88 },
        { name: "Redux", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3/SCSS", level: 85 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Spring Framework", level: 85 },
        { name: "RESTful APIs", level: 90 },
        { name: "Microservices", level: 80 },
        { name: "JPA/Hibernate", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Jenkins", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Maven/Gradle", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          Technical <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              style={{ 
                opacity: 0, 
                animation: `fade-in 0.5s ease-out forwards`,
                animationDelay: `${0.2 + index * 0.1}s`
              }}
            >
              <h3 className="text-xl font-semibold mb-6 text-foreground">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/70 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: '0%',
                          animation: `skill-bar 1.5s ease-out forwards`,
                          animationDelay: `${0.3 + idx * 0.1}s`
                        }}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
