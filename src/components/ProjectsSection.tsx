import { ArrowUpRight, Github, Briefcase } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Enterprise E-commerce Platform",
      description: "Scalable microservices architecture with serverless functions, high-performance product catalog, and advanced payment processing system.",
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS Lambda", "Stripe"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "https://github.com",
      link: "#",
      role: "Lead Developer",
      technicalDetails: [
        "Implemented serverless functions using AWS Lambda reducing infrastructure costs by 40%",
        "Built robust payment processing system with fail-safe transaction handling",
        "Designed scalable microservices architecture supporting 10,000+ concurrent users"
      ],
      isFreelance: true
    },
    {
      title: "Real-time Collaboration Suite",
      description: "End-to-end encrypted messaging with WebSocket infrastructure, real-time document collaboration, and role-based access control.",
      technologies: ["React", "Socket.io", "Express", "Redis", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      github: "https://github.com",
      link: "#",
      role: "Full Stack Developer",
      technicalDetails: [
        "Architected WebSocket infrastructure handling 5,000+ concurrent connections",
        "Implemented end-to-end encryption for secure document sharing and messaging",
        "Developed role-based access control system with granular permission settings"
      ],
      isFreelance: true
    },
    {
      title: "Enterprise Task Management System",
      description: "Scalable project tracking solution with custom workflow automations, team analytics dashboard, and third-party integrations.",
      technologies: ["TypeScript", "React", "Node.js", "GraphQL", "Docker"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      github: "https://github.com",
      link: "#",
      role: "Backend Developer",
      technicalDetails: [
        "Built GraphQL API gateway improving front-end data fetching efficiency by 60%",
        "Containerized application services using Docker for consistent deployment",
        "Created workflow automation engine with custom rule builder and webhook system"
      ],
      isFreelance: false
    },
    {
      title: "AI-Enhanced Content Platform",
      description: "Content management system with ML-powered recommendations, automated content categorization, and optimized search functionality.",
      technologies: ["React", "Python", "TensorFlow", "AWS S3", "MongoDB"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      github: "https://github.com",
      link: "#",
      role: "Machine Learning Engineer",
      technicalDetails: [
        "Developed content recommendation algorithm increasing user engagement by 35%",
        "Implemented automated content categorization using NLP and TensorFlow",
        "Optimized search functionality with ML-based relevance scoring"
      ],
      isFreelance: false
    }
  ];

  return (
    <section id="projects" className="py-16 relative">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-heading">Technical Projects</h2>
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Projects
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group card-glow overflow-hidden reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {project.isFreelance && (
                  <div className="absolute top-3 right-3 z-20">
                    <div className="flex items-center bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-primary/30">
                      <Briefcase size={14} className="mr-1" />
                      Freelance Project
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-3 left-3 z-20 flex space-x-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-gray-800/90 backdrop-blur-sm text-gray-200 text-xs border border-gray-700/50">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="bg-gray-800/90 backdrop-blur-sm text-gray-200 text-xs border border-gray-700/50">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
              
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-primary text-sm font-medium">{project.role}</p>
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={project.github} 
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                
                <ul className="text-gray-300 text-sm mb-4 list-disc pl-5 space-y-1">
                  {project.technicalDetails.map((detail, i) => (
                    <li key={i} className="text-sm">{detail}</li>
                  ))}
                </ul>
                
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="bg-blue-900/30 text-blue-300 px-2 py-0.5 text-xs rounded-full border border-blue-800/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-primary text-sm font-medium hover:text-secondary transition-colors"
                  >
                    View Details
                    <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;