import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import FreelanceSection from "../components/FreelanceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";
import { setupRevealAnimations } from "../utils/animations";

const Index = () => {
  useEffect(() => {
    const cleanup = setupRevealAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <FreelanceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
