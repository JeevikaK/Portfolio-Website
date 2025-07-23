import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-primary">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hi, I'm Sarah
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A passionate full-stack developer crafting beautiful digital experiences with modern technologies
          </p>
          
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:bg-primary/10"
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </section>
  );
};

export default Hero;