import { Code, Briefcase, Server, Database, Github, Gitlab } from 'lucide-react';
import { Docker as DockerIcon } from '../components/icons/Docker';

const AboutSection = () => {
  const skillCategories = {
    "Frontend": [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML/CSS", icon: "🎨" },
      { name: "TailwindCSS", icon: "💨" },
      { name: "Redux", icon: "🔄" }
    ],
    "Backend": [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "SQL", icon: "🗃️" },
      { name: "Prisma ORM", icon: "🔷" },
      { name: "WebSockets", icon: "🔌" },
      { name: "RESTful APIs", icon: "🌐" },
      { name: "GraphQL", icon: "📊" }
    ],
    "DevOps": [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⚙️" },
      { name: "GitHub Actions", icon: "🔧" },
      { name: "Git", icon: "📚" },
      { name: "CI/CD", icon: "🔄" }
    ]
  };

  return (
    <section id="about" className="py-16 bg-black border-t border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="section-heading text-white">Technical Profile</h2>
        
        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          <div className="lg:w-1/2">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a specialized full-stack developer with advanced expertise in modern web frameworks and architectures.
              My technical focus is on building scalable, performant applications using the MERN stack and Next.js,
              with particular attention to system design and optimization.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a background in both frontend and backend systems, I deliver high-quality code that
              addresses complex technical challenges. My approach combines deep technical knowledge with
              pragmatic solutions, resulting in robust applications that scale efficiently.
            </p>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg hover:bg-gray-800/50 transition-all border border-gray-700/50">
                <div className="bg-blue-500/20 p-3 rounded-full border border-blue-500/30">
                  <Code size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">Development</h4>
                  <p className="text-gray-400 text-xs">Full Stack Architecture</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg hover:bg-gray-800/50 transition-all border border-gray-700/50">
                <div className="bg-purple-500/20 p-3 rounded-full border border-purple-500/30">
                  <DockerIcon size={20} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">DevOps</h4>
                  <p className="text-gray-400 text-xs">Cloud Infrastructure</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg hover:bg-gray-800/50 transition-all border border-gray-700/50">
                <div className="bg-green-500/20 p-3 rounded-full border border-green-500/30">
                  <Server size={20} className="text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">Backend</h4>
                  <p className="text-gray-400 text-xs">API & Database Systems</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-xl font-bold text-white mb-6 font-heading">Technical Expertise</h3>
            
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category} className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">{category}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2 bg-gray-900/30 backdrop-blur-sm px-3 py-2 rounded-md border border-gray-700/30 hover:border-blue-500/30 hover:bg-gray-800/40 transition-all">
                      <span className="text-sm">{skill.icon}</span>
                      <span className="text-xs text-gray-300 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;