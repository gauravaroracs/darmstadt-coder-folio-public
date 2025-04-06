
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Insurance Company",
      period: "2022 - Present",
      description: [
        "Led the development of a claims processing system using Java and Spring Boot, reducing processing time by 30%",
        "Architected and implemented RESTful APIs to enable seamless integration with partner services",
        "Mentored junior developers and conducted code reviews to maintain high quality standards"
      ],
      technologies: ["Java", "Spring Boot", "Microservices", "React", "PostgreSQL"]
    },
    {
      title: "Software Engineer",
      company: "Insurance Company",
      period: "2020 - 2022",
      description: [
        "Developed and maintained backend services using Java and Spring Framework",
        "Implemented frontend components with React and Redux for policy management dashboards",
        "Collaborated in an Agile team to deliver features on schedule with high quality"
      ],
      technologies: ["Java", "Spring", "React", "Redux", "MySQL", "Docker"]
    },
    {
      title: "Junior Developer",
      company: "Tech Startup",
      period: "2019 - 2020",
      description: [
        "Participated in full-stack development using Java backends and React frontends",
        "Assisted in implementing CI/CD pipelines for automated testing and deployment",
        "Contributed to codebase refactoring to improve performance and maintainability"
      ],
      technologies: ["Java", "JavaScript", "React", "Git", "Jenkins"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 relative pl-8 md:pl-0 
                ${index !== experiences.length - 1 ? 'pb-12 border-l-2 md:border-l-0 md:border-none border-primary/30' : ''}`}
            >
              <div className="md:grid md:grid-cols-[200px_1fr] gap-8">
                {/* Time period - visible on md and up */}
                <div className="hidden md:block text-right">
                  <span className="inline-flex items-center text-foreground/70 mb-1">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </span>
                  <div className="flex justify-end">
                    <div className="w-4 h-4 rounded-full bg-primary mt-2"></div>
                  </div>
                </div>

                {/* Timeline circle - visible on mobile */}
                <div className="md:hidden absolute -left-[5px] mt-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>

                <div>
                  {/* Time period - visible only on mobile */}
                  <div className="md:hidden text-foreground/70 text-sm mb-1 flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {exp.period}
                  </div>

                  <h3 className="text-xl font-bold flex items-center">
                    <Briefcase className="text-primary mr-2" size={20} />
                    {exp.title}
                  </h3>
                  <h4 className="text-lg text-foreground/80 font-medium mb-4">{exp.company}</h4>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary text-foreground/80 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
