import { Sparkles } from "lucide-react";
import HeroActions from "./HeroActions";

const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/assets/hero-workspace.jpg" 
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
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center min-h-screen relative z-10">
        {/* Profile Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
          <div className="relative animate-fade-in flex items-center justify-center">
            {/* Outer decorative rings */}
            <div className="absolute w-[28rem] h-[28rem] rounded-full border-2 border-[#9381FF]/20 animate-spin-slow"></div>
            <div className="absolute w-96 h-96 rounded-full border border-[#B8B8FF]/40"></div>
            <div className="absolute w-80 h-80 rounded-full border border-[#9381FF]/30"></div>
            
            {/* Main image container */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl z-10">
              <img 
                src="/assets/profile.png" 
                alt="Jeevika Kiran" 
                className="w-full h-full object-cover"
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
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-gray-900 animate-scale-in">
              Hi, I'm Jeevika
            </h1>
            <p className="text-lg md:text-xl mb-12 text-gray-700 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
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