import { Users, Star, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';

const FreelanceSection = () => {
  const stats = [
    { icon: Briefcase, number: "15+", label: "Projects Delivered" },
    { icon: Users, number: "12+", label: "Happy Clients" },
    { icon: Star, number: "5.0", label: "Average Rating" },
    { icon: TrendingUp, number: "3+", label: "Years Experience" }
  ];

  const handleStartProject = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="freelance" className="py-16 bg-black border-t border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading text-white text-center">Freelance Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building digital solutions for businesses worldwide with a focus on quality, innovation, and client success.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-800/40 transition-all">
                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Ready to Bring Your Ideas to Life?</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">My Freelance Expertise</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Full-stack web application development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    E-commerce and SaaS platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    API development and integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Database design and optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    Cloud deployment and DevOps
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Why Choose Me?</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    100% client satisfaction rate
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    On-time project delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Post-launch support included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Agile development approach
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    Transparent communication
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-300 mb-6">
                From startups to established businesses, I've helped clients across various industries transform their ideas into successful digital products. 
                Whether you need a complete web application, API development, or technical consultation, I'm here to deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleStartProject}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 cursor-pointer"
                >
                  Start Your Project
                </Button>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;