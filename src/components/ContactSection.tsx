import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black border-t border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="section-heading text-white">Get In Touch</h2>
        
        <div className="flex flex-col md:flex-row gap-10 mt-12">
          <div className="md:w-2/5">
            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Let's work together</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Whether you need a custom web application, e-commerce solution, or technical consultation,
              I'm here to help. Feel free to reach out to discuss your project requirements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full border border-blue-500/30">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a href="mailto:hello@johndoe.com" className="text-gray-300 hover:text-primary transition-colors">
                    hello@johndoe.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full border border-blue-500/30">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full border border-blue-500/30">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-300">
                    Remote, Global
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                
                <Button className="w-full bg-primary hover:bg-secondary text-white py-6 rounded-md flex items-center justify-center">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
