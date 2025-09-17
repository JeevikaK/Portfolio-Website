import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import HeroActions from "./HeroActions";

const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="/assets/hero-workspace.jpg" 
          alt="Workspace" 
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-primary rounded-full blur-2xl animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-accent rounded-full blur-2xl animate-float opacity-50" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-interactive rounded-full blur-2xl animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-18 h-18 bg-gradient-secondary rounded-full blur-2xl animate-float opacity-50" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center min-h-screen relative z-10">
        {/* Profile Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
          <div className="relative animate-fade-in flex items-center justify-center">
            {/* Outer decorative rings */}
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full border-2 border-[#9381FF]/20 animate-spin-slow"></div>
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full border border-[#B8B8FF]/40"></div>
            <div className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full border border-[#9381FF]/30"></div>
            
            {/* Main image container */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl z-10">
              <Image 
                src="/assets/profile.png" 
                alt="Jeevika Kiran" 
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Additional decorative elements */}
            <div className="absolute w-4 h-4 bg-[#9381FF] rounded-full top-8 right-12 animate-pulse"></div>
            <div className="absolute w-3 h-3 bg-[#B8B8FF] rounded-full bottom-12 left-8 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute w-2 h-2 bg-[#FFD8BE] rounded-full top-16 left-16 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="animate-fade-in">
            {/* Welcome Message */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <Sparkles className="h-5 w-5 text-gray-800" />
              <span className="text-gray-800 font-medium text-lg">Welcome to my portfolio</span>
              <Sparkles className="h-5 w-5 text-gray-800" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 text-gray-900 animate-scale-in">
              Hi, I&apos;m Jeevika
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 lg:mb-12 text-gray-700 leading-relaxed animate-fade-in px-4 sm:px-0" style={{animationDelay: '0.2s'}}>
              An AI enthusiast driven to create intelligent solutions that address real-world challenges. I create cutting-edge AI applications and streamline complex workflows to deliver impactful, user-centered experiences.
            </p>
            
            <HeroActions />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;