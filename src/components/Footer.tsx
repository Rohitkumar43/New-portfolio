import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white font-heading">John Doe</h2>
            <p className="mt-2 text-gray-400">Full Stack Developer & Freelancer</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <nav className="flex flex-wrap gap-6">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;