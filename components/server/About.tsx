import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Coffee, Code, Sparkles, Brain, Cpu, Database, Globe, Zap, Bot, GraduationCap, Calendar, Award, Target, User } from "lucide-react";

// Server Component - Static data can be rendered on the server
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

  const aboutCards = [
    {
      icon: User,
      title: "About Me",
      content: "I'm an AI enthusiast and full-stack developer passionate about creating intelligent solutions that address real-world challenges. My journey combines cutting-edge AI research with practical software development.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: GraduationCap,
      title: "Education",
      content: "Computer Science Engineering graduate with a focus on AI and machine learning. Continuously learning and staying updated with the latest technological advancements.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Target,
      title: "Mission",
      content: "To leverage AI and technology to create meaningful impact, making complex problems more accessible and building solutions that truly matter to people's lives.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#FDFCDC] via-[#FED9B7] to-[#00AFB9] dark:from-[#195A6B] dark:via-[#0081A7] dark:to-[#00AFB9] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-accent rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-interactive rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about AI, technology, and creating solutions that make a difference
          </p>
        </div>

        {/* Main About Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {aboutCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] group cursor-pointer bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500">
                      {card.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {card.content}
                  </p>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* Personal Interests */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground animate-fade-in">
            Areas of Interest
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Exploring the frontiers of AI and technology to create meaningful impact
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {areasOfInterest.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] group cursor-pointer bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col items-center text-center p-4">
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

        {/* Fun Facts */}
        <div className="mt-20 text-center">
          <Card className="relative overflow-hidden p-8 shadow-2xl border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg max-w-4xl mx-auto group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Fun Facts About Me
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border border-blue-200/50">
                  <Coffee className="h-8 w-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Coffee Enthusiast</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 text-center">Fueled by coffee and curiosity</p>
                </div>
                
                <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border border-purple-200/50">
                  <Code className="h-8 w-8 text-purple-600 mb-2" />
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Code Lover</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400 text-center">Always exploring new technologies</p>
                </div>
                
                <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20 border border-pink-200/50">
                  <Sparkles className="h-8 w-8 text-pink-600 mb-2" />
                  <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">Innovation Seeker</h4>
                  <p className="text-sm text-pink-600 dark:text-pink-400 text-center">Turning ideas into reality</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding or researching AI, you'll find me exploring new technologies, 
                contributing to open-source projects, or brainstorming the next big idea that could 
                make a positive impact on the world.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
