import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Download } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1yfYiGhenGhYpFbnnvRCKGyfxqcsGDNhI/view?usp=sharing';
    link.download = 'Jeevika_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-primary rounded-full blur-2xl animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-accent rounded-full blur-2xl animate-float opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-interactive rounded-full blur-2xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-18 h-18 bg-gradient-secondary rounded-full blur-2xl animate-float opacity-50" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-white animate-glow" />
              <span className="text-white font-medium">Welcome to my portfolio</span>
              <Sparkles className="h-6 w-6 text-white animate-glow" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-scale-in">
              Hi, I'm Jeevika
            </h1>
            <p className="text-base md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            AI enthusiast driven to create intelligent solutions that address real-world challenges, I create cutting-edge AI applications and streamline complex workflows to deliver impactful, user-centered experiences.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center mb-12 flex-wrap animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-interactive text-white border-0 shadow-interactive hover:shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              onClick={() => scrollToSection('projects')}
            >
              <span className="group-hover:animate-glow">View My Work</span>
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-accent/80 hover:bg-gradient-accent/70 text-white border-0 shadow-soft hover:shadow-interactive transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
              onClick={downloadResume}
            >
              <Download className="h-4 w-4 mr-2 group-hover:animate-glow" />
              <span className="group-hover:animate-glow">Download Resume</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-gradient-card hover:border-primary transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-gradient-interactive hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-soft hover:shadow-interactive group"
              onClick={() => window.open('https://github.com/JeevikaK', '_blank')}
            >
              <Github className="h-6 w-6 group-hover:animate-glow" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-gradient-interactive hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-soft hover:shadow-interactive group"
              onClick={() => window.open('https://www.linkedin.com/in/jeevika-kiran-a0957b242/', '_blank')}
            >
              <Linkedin className="h-6 w-6 group-hover:animate-glow" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-gradient-interactive hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-soft hover:shadow-interactive group"
              onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox', '_blank')}
            >
              <Mail className="h-6 w-6 group-hover:animate-glow" />
            </Button>
          </div>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:bg-gradient-interactive hover:text-white transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-interactive"
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </section>
  );
};

export default Hero;