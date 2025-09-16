import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Code, Database, Palette, Wrench, Cpu, Globe, Smartphone, Cloud, Brain, Bot, Zap, Star, Users, Server } from "lucide-react";

const Skills = () => {

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "C/C++", level: 85 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 95 },
        { name: "SQL", level: 92 }
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 95 },
        { name: "HTML5/CSS3", level: 98 },
        { name: "IBM Carbon Components", level: 85 }
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
      title: "Backend Development", 
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Flask", level: 95 },
        { name: "Django", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "FastAPI", level: 82 }
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "TensorFlow", level: 88 },
        { name: "PyTorch", level: 85 },
        { name: "Computer Vision", level: 90 },
        { name: "NLP", level: 82 },
        { name: "Deep Learning", level: 87 },
        { name: "HuggingFace", level: 80 }
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
    },
    {
      title: "Database & Cloud",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Microsoft/Oracle SQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Microsoft Azure", level: 78 },
        { name: "Google Cloud", level: 75 },
        { name: "IBM Cloud", level: 70 },
        { name: "SQLite", level: 90 }
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20"
    },
    {
      title: "Development Tools",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 98 },
        { name: "Figma", level: 85 },
        { name: "Postman", level: 88 },
        { name: "UI/UX Design", level: 82 },
        { name: "Responsive Design", level: 90 }
      ],
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20"
    }
  ];


  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#FFEEDD] via-[#F8F7FF] to-[#B8B8FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#9381FF]">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise across the full stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden border border-[#B8B8FF]/30 shadow-lg hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] group cursor-pointer bg-[#F8F7FF]/80 hover:bg-[#F8F7FF]/90 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
              <div className="relative p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-[#9381FF] to-[#B8B8FF] text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#9381FF] transition-all duration-500">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="group/skill"
                      style={{animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`}}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ 
                              width: `${skill.level}%`,
                              transitionDelay: `${(index * 0.1) + (skillIndex * 0.1)}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="relative overflow-hidden p-8 shadow-2xl border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg max-w-5xl mx-auto group">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Continuous Learning Journey
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
                Currently diving deep into <span className="font-semibold text-primary">Explainable AI (XAI)</span> with 
                cross-modal attribution and counterfactual reasoning.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border border-blue-200/50">
                  <div className="text-2xl mb-2">🎯</div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Currently Learning</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Advanced XAI Techniques</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 border border-purple-200/50">
                  <div className="text-2xl mb-2">🔬</div>
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-1">Exploring</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Cross-modal Attribution</p>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20 border border-pink-200/50">
                  <div className="text-2xl mb-2">🚀</div>
                  <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">Next Focus</h4>
                  <p className="text-sm text-pink-600 dark:text-pink-400">Counterfactual Reasoning</p>
                </div>
              </div>
              
              <div className="flex justify-center gap-3 flex-wrap">
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 hover:scale-105 transition-transform">
                  <Brain className="h-4 w-4 mr-2" />
                  AI Research
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 hover:scale-105 transition-transform">
                  <Zap className="h-4 w-4 mr-2" />
                  Innovation
                </Badge>
                <Badge className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 hover:scale-105 transition-transform">
                  <Star className="h-4 w-4 mr-2" />
                  Excellence
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;