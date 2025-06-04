import { Briefcase, Server, Code } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Co-founder & Tech Lead",
      company: "Hostel Sathi",
      period: "Jan 2022 - Present",
      description: "Led architectural design and implementation of scalable hostel management platform serving 50+ properties. Established microservices architecture using Node.js and MongoDB. Implemented CI/CD pipelines reducing deployment time by 70%. Managed a team of 5 developers with agile methodologies.",
      icon: Server,
      technologies: ["Node.js", "React", "MongoDB", "AWS", "Docker", "CI/CD"]
    },
    {
      title: "Senior Freelance Developer",
      company: "Self-employed",
      period: "Jun 2020 - Present",
      description: "Delivered 20+ custom web applications for clients across fintech, e-commerce, and SaaS industries. Architected and implemented high-performance applications using MERN stack and Next.js. Specialized in complex data visualization dashboards and real-time systems. Maintained 100% client satisfaction and 80% return client rate.",
      icon: Code,
      technologies: ["Next.js", "React", "Express", "MongoDB", "Redux", "TypeScript"]
    },
    {
      title: "Frontend Development Intern",
      company: "TechInnovate Solutions",
      period: "Jan 2020 - May 2020",
      description: "Optimized React component rendering, improving application performance by 35%. Implemented responsive designs using modern CSS techniques and frameworks. Contributed to the company's component library, reducing development time for new features by 25%. Participated in code reviews and agile development processes.",
      icon: Briefcase,
      technologies: ["React", "HTML/CSS", "JavaScript", "Git", "UI/UX"]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-black border-t border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="section-heading text-white">Professional Experience</h2>
        
        <div className="mt-10 space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg hover:bg-gray-800/40 transition-all duration-300 reveal border border-gray-700/50 hover:border-blue-500/30"
              >
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-500/20 p-2 rounded-full border border-blue-500/30">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <h3 className="font-bold text-lg text-white">{exp.title}</h3>
                  </div>
                  <p className="text-blue-400 font-medium text-sm">{exp.company}</p>
                  <p className="text-gray-400 mt-1 text-sm">{exp.period}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="bg-gray-800/50 text-gray-300 border border-gray-600/50 px-2 py-0.5 text-xs rounded-full hover:bg-gray-700/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;