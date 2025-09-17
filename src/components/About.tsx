import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, GraduationCap, Code, Heart, Award, Brain, Database, Globe, Smartphone, Cloud, Zap, Bot, Cpu, Coffee, Calendar } from "lucide-react";

const About = () => {
  
  const areasOfInterest = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and AI model optimization"
    },
    {
      icon: Bot,
      title: "Computer Vision", 
      description: "Image processing, object detection, and visual AI systems"
    },
    {
      icon: Cpu,
      title: "AI Research",
      description: "Explainable AI, cross-modal attribution, and counterfactual reasoning"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack applications with modern frameworks and technologies"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Big data processing, analytics pipelines, and cloud infrastructure"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Creating solutions that bridge technology and real-world impact"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#9381FF] to-[#B8B8FF]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-28 h-28 bg-gradient-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-primary rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-white animate-glow" />
            <span className="text-white font-medium">About Me</span>
            <Sparkles className="h-5 w-5 text-white animate-glow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Passionate About Innovation
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Driven by curiosity and a love for problem-solving, I&apos;m passionate about creating intelligent solutions that make a real difference in people&apos;s lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-slide-in">
            <Card className="p-4 sm:p-6 lg:p-8 shadow-lg border border-[#B8B8FF]/30 bg-[#F8F7FF]/90 hover:bg-[#F8F7FF] hover:shadow-xl transition-all duration-500 hover:scale-105 group backdrop-blur-sm overflow-hidden">
              <p className="text-base leading-relaxed text-gray-700 mb-6">
              🎓 I&apos;m pursuing an MS in Computer Science at the University of Southern California (USC), passionate about designing technology that has tangible impact. 
              </p>
              <p className="text-base leading-relaxed text-gray-700 mb-6">
              🚀 I focus on building accessible, reliable, and efficient systems that solve real-world problems and enhance user experiences. My projects range from creating tools that simplify complex workflows to developing applications that empower users through intelligent, context-aware solutions. I enjoy bridging the gap between advanced technology and practical applications, turning innovative ideas into solutions people can actually use and benefit from.
              </p>
              <p className="text-base leading-relaxed text-gray-700 mb-6">
                💡 When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                I&apos;m always excited to take on new challenges and collaborate on innovative projects. I enjoy blending problem-solving with curiosity, also while enjoying a good book with 
                a cup of coffee ☕.
              </p>

              <div className="flex gap-6 text-muted-foreground">
                <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <Heart className="h-5 w-5 text-primary group-hover:animate-glow" />
                  <span>Design</span>
                </div>
                <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <Coffee className="h-5 w-5 text-primary group-hover:animate-glow" />
                  <span>Coffee</span>
                </div>
                <div className="flex items-center gap-2 group-hover:text-primary transition-colors duration-300">
                  <Code className="h-5 w-5 text-primary group-hover:animate-glow" />
                  <span>Clean Code</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8 animate-slide-in" style={{animationDelay: '0.2s'}}>
            <Card className="p-4 sm:p-6 lg:p-8 shadow-lg border-0 bg-white/90 hover:bg-white hover:shadow-xl transition-all duration-500 hover:scale-105 group backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-interactive rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-6 w-6 text-white group-hover:animate-glow" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300"> Education</h3>
              </div>
              
              <div className="space-y-6">
                {/* Master's Degree */}
                <div className="border-l-4 border-primary/30 pl-6 hover:border-primary transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">Master of Science in Computer Science</h4>
                      <p className="text-primary font-medium">University of Southern California</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">2025 - 2027</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Award className="h-4 w-4" />
                        <span className="text-sm font-medium">GPA: Not available yet</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bachelor's Degree */}
                <div className="border-l-4 border-primary/30 pl-6 hover:border-primary transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">Bachelor of Engineering in Information Science</h4>
                      <p className="text-primary font-medium">Ramaiah Institute of Technology</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">2020 - 2024</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Award className="h-4 w-4" />
                        <span className="text-sm font-medium">GPA: 9.31/10.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-4 sm:p-6 lg:p-8 shadow-lg border-0 bg-white/90 hover:bg-white hover:shadow-xl transition-all duration-500 hover:scale-105 group backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-interactive rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-white group-hover:animate-glow" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300"> My Journey</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
              I first got into coding by solving DSA problems in Java (the best language ever, of course). From there, I branched into JavaScript and eventually Python 🐍. What started as a simple love for problem-solving soon grew into a deeper passion for exploring technical concepts and using creativity (plus a trusty laptop) to build solutions that create real impact.              </p>
            </Card>
          </div>
        </div>

        {/* Areas of Interest Section */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary animate-glow" />
              <span className="text-primary font-medium">What drives me</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Areas of Interest
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring the frontiers of AI and technology to create meaningful impact
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto px-2 sm:px-0">
            {areasOfInterest.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card 
                  key={index}
                  className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-[1.02] group cursor-pointer bg-white/90 hover:bg-white backdrop-blur-lg p-3 sm:p-4 w-full max-w-none"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-interactive rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white group-hover:animate-glow" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {area.title}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;