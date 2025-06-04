import { ArrowDown } from 'lucide-react';
import { Button } from '../components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16 overflow-hidden">
      {/* Hero Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="hero-gradient-bg"></div>
        <div className="floating-elements">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`floating-element floating-element-${i + 1}`}></div>
          ))}
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 font-heading">
              John Doe<span className="text-primary">.</span> Senior <span className="text-primary">Full Stack</span> Developer
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-5 font-heading">
              Technical Solutions Architect & Freelancer
            </h2>
            <div className="bg-gray-800/50 backdrop-blur-sm p-1 w-fit rounded-full mb-6 border border-gray-700/50">
              <div className="flex text-xs md:text-sm">
                <span className="bg-primary text-white px-4 py-1 rounded-full">Available for freelance</span>
                <span className="text-gray-300 px-4 py-1">Based in San Francisco, CA</span>
              </div>
            </div>
            <p className="text-gray-400 text-base mb-6 max-w-2xl leading-relaxed">
              I specialize in creating scalable web applications and APIs, focusing on clean architecture, 
              performance optimization, and maintainable code. My technical expertise spans the entire 
              development stack with advanced proficiency in React, Node.js, and cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-secondary text-white px-6 py-5 rounded-md">
                View My Work
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-5 rounded-md">
                Technical Resume
              </Button>
            </div>
          </div>
          <div className="lg:w-2/5 mt-12 lg:mt-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-6 blur-sm"></div>
              <div className="absolute inset-0 bg-accent/10 rounded-lg transform -rotate-2 blur-sm"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="John Doe"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl relative z-10 border border-gray-700/50"
              />
              <div className="absolute -bottom-4 -right-4 bg-gray-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20 border border-gray-700/50">
                <div className="text-xs font-medium text-white">
                  <span className="text-green-400">●</span> Available for new projects
                </div>
              </div>
            </div>
          </div>
        </div>
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs mb-2">Explore My Work</span>
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;