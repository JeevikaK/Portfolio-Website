"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const HeroActions = () => {
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
    <>
      {/* Action Buttons */}
      <div className="flex gap-4 justify-center lg:justify-start flex-wrap animate-fade-in mb-8" style={{animationDelay: '0.4s'}}>
        <Button 
          size="lg" 
          className="bg-[#9381FF] text-white hover:bg-[#B8B8FF] hover:text-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-3 rounded-full font-semibold"
          onClick={() => scrollToSection('projects')}
        >
          View My Work
        </Button>
        <Button 
          size="lg"
          className="bg-[#F8F7FF] text-[#9381FF] hover:bg-[#B8B8FF] hover:text-white border-2 border-[#9381FF] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 px-8 py-3 rounded-full font-semibold"
          onClick={downloadResume}
        >
          <Download className="h-4 w-4 mr-2" />
          Download Resume
        </Button>
        <Button 
          size="lg"
          className="bg-[#FFEEDD] text-[#9381FF] hover:bg-[#FFD8BE] hover:text-gray-800 border-2 border-[#FFD8BE] transition-all duration-300 hover:scale-105 px-8 py-3 rounded-full font-semibold"
          onClick={() => scrollToSection('contact')}
        >
          Get In Touch
        </Button>
      </div>
      
      {/* Social Media Icons */}
      <div className="flex gap-6 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.6s'}}>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-[#9381FF] hover:bg-[#F8F7FF] hover:text-[#9381FF] transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl group border border-[#B8B8FF]/30"
          onClick={() => window.open('https://github.com/JeevikaK', '_blank')}
        >
          <Github className="h-6 w-6 group-hover:animate-glow" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-[#9381FF] hover:bg-[#F8F7FF] hover:text-[#9381FF] transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl group border border-[#B8B8FF]/30"
          onClick={() => window.open('https://www.linkedin.com/in/jeevika-kiran-a0957b242/', '_blank')}
        >
          <Linkedin className="h-6 w-6 group-hover:animate-glow" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-[#9381FF] hover:bg-[#F8F7FF] hover:text-[#9381FF] transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl group border border-[#B8B8FF]/30"
          onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox', '_blank')}
        >
          <Mail className="h-6 w-6 group-hover:animate-glow" />
        </Button>
      </div>
    </>
  );
};

export default HeroActions;
