import { Card } from "@/components/ui/card";
import { Heart, Coffee, Code, Sparkles, Brain, Cpu, Database, Globe, Zap, Bot, GraduationCap, Calendar, Award } from "lucide-react";

const About = () => {
  const areasOfInterest = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and AI model optimization"
    },
    {
      icon: Bot,
      title: "AI Applications",
      description: "Building intelligent systems that solve real-world problems"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Large-scale data processing and analytics pipelines"
    },
    {
      icon: Cpu,
      title: "Computer Vision",
      description: "Image processing and visual recognition systems"
    },
    {
      icon: Globe,
      title: "NLP & LLMs",
      description: "Natural language processing and large language models"
    },
    {
      icon: Zap,
      title: "Accessability",
      description: "Technology that empowers through inclusive and accessible experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#FDFCDC] via-[#FED9B7] to-[#F07167] dark:from-[#0081A7] dark:via-[#00AFB9] dark:to-[#195A6B] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-28 h-28 bg-gradient-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-primary rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary animate-glow" />
            <span className="text-primary font-medium">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative AI applications with cutting edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-slide-in">
            <Card className="p-8 shadow-soft border-0 bg-gradient-card hover:shadow-interactive transition-all duration-500 hover:scale-105 group">
              <p className="text-base leading-relaxed text-foreground/90 mb-6">
              🎓 I'm pursuing an MS in Computer Science at USC, passionate about designing technology that has tangible impact. 
              </p>
              <p className="text-base leading-relaxed text-foreground/90 mb-6">
              🚀 I focus on building accessible, reliable, and efficient systems that solve real-world problems and enhance user experiences. My projects range from creating tools that simplify complex workflows to developing applications that empower users through intelligent, context-aware solutions. I enjoy bridging the gap between advanced technology and practical applications, turning innovative ideas into solutions people can actually use and benefit from.
              </p>
              <p className="text-base leading-relaxed text-foreground/90 mb-6">
                💡 When I'm not coding, you'll find me exploring new technologies, 
                and experimenting with creative side projects. I enjoy blending problem-solving with curiosity, also while enjoying a good book with 
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
            <Card className="p-8 shadow-soft border-0 bg-gradient-card hover:shadow-interactive transition-all duration-500 hover:scale-105 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-interactive rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-6 w-6 text-white group-hover:animate-glow" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300"> Education</h3>
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
            
            <Card className="p-8 shadow-soft border-0 bg-gradient-card hover:shadow-interactive transition-all duration-500 hover:scale-105 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-interactive rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-white group-hover:animate-glow" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300"> My Journey</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
               Started with me solving DSA with Java (the best language ever) in school, then moved to JavaScript and then to Python. 🐍 What began as a love for problem-solving quickly grew into a passion for exploring technical concepts and using my laptop and creativity to build solutions that make a real impact. 💻✨
              </p>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {areasOfInterest.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card 
                  key={index}
                  className={`p-4 shadow-soft border-0 bg-gradient-card hover:shadow-interactive transition-all duration-500 hover:scale-105 group cursor-pointer animate-scale-in`}
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