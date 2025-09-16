import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Wrench, 
  Brain,
  Globe,
  Server,
  Cpu,
  Bot,
  Zap
} from "lucide-react";

// Server Component - Static skills data can be rendered on the server
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 90, color: "bg-gradient-to-r from-yellow-400 to-yellow-500" },
        { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-blue-600 to-blue-700" },
        { name: "Java", level: 80, color: "bg-gradient-to-r from-red-500 to-red-600" },
        { name: "C++", level: 75, color: "bg-gradient-to-r from-purple-500 to-purple-600" },
        { name: "SQL", level: 85, color: "bg-gradient-to-r from-green-500 to-green-600" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "TensorFlow", level: 90, color: "bg-gradient-to-r from-orange-500 to-orange-600" },
        { name: "PyTorch", level: 85, color: "bg-gradient-to-r from-red-500 to-red-600" },
        { name: "Scikit-learn", level: 88, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "OpenCV", level: 82, color: "bg-gradient-to-r from-green-500 to-green-600" },
        { name: "Hugging Face", level: 80, color: "bg-gradient-to-r from-yellow-500 to-yellow-600" },
        { name: "LangChain", level: 75, color: "bg-gradient-to-r from-purple-500 to-purple-600" }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      gradient: "from-green-500 to-teal-500",
      skills: [
        { name: "React", level: 92, color: "bg-gradient-to-r from-cyan-400 to-cyan-500" },
        { name: "Next.js", level: 88, color: "bg-gradient-to-r from-gray-700 to-gray-800" },
        { name: "Node.js", level: 85, color: "bg-gradient-to-r from-green-500 to-green-600" },
        { name: "Express.js", level: 83, color: "bg-gradient-to-r from-gray-600 to-gray-700" },
        { name: "HTML/CSS", level: 95, color: "bg-gradient-to-r from-orange-500 to-red-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-gradient-to-r from-teal-400 to-teal-500" }
      ]
    },
    {
      title: "Database & Backend",
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "MongoDB", level: 85, color: "bg-gradient-to-r from-green-600 to-green-700" },
        { name: "PostgreSQL", level: 80, color: "bg-gradient-to-r from-blue-600 to-blue-700" },
        { name: "MySQL", level: 82, color: "bg-gradient-to-r from-orange-500 to-orange-600" },
        { name: "Redis", level: 75, color: "bg-gradient-to-r from-red-500 to-red-600" },
        { name: "Firebase", level: 78, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
        { name: "Supabase", level: 80, color: "bg-gradient-to-r from-green-500 to-teal-500" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      gradient: "from-cyan-500 to-blue-500",
      skills: [
        { name: "AWS", level: 82, color: "bg-gradient-to-r from-orange-400 to-orange-500" },
        { name: "Google Cloud", level: 78, color: "bg-gradient-to-r from-blue-500 to-green-500" },
        { name: "Docker", level: 80, color: "bg-gradient-to-r from-blue-600 to-blue-700" },
        { name: "Kubernetes", level: 70, color: "bg-gradient-to-r from-blue-500 to-purple-500" },
        { name: "Git", level: 90, color: "bg-gradient-to-r from-red-500 to-red-600" },
        { name: "CI/CD", level: 75, color: "bg-gradient-to-r from-green-500 to-green-600" }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "VS Code", level: 95, color: "bg-gradient-to-r from-blue-500 to-blue-600" },
        { name: "Jupyter", level: 90, color: "bg-gradient-to-r from-orange-500 to-orange-600" },
        { name: "Postman", level: 85, color: "bg-gradient-to-r from-orange-400 to-orange-500" },
        { name: "Figma", level: 80, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
        { name: "Streamlit", level: 82, color: "bg-gradient-to-r from-red-500 to-red-600" },
        { name: "FastAPI", level: 85, color: "bg-gradient-to-r from-teal-500 to-teal-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#00AFB9] via-[#0081A7] to-[#195A6B] dark:from-[#195A6B] dark:via-[#0081A7] dark:to-[#00AFB9] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-accent rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-interactive rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={categoryIndex}
                className="relative overflow-hidden border-0 shadow-2xl bg-white/10 backdrop-blur-lg hover:bg-white/15 transition-all duration-700 hover:scale-[1.02] group"
                style={{animationDelay: `${categoryIndex * 0.1}s`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
                
                <div className="relative p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-500">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="group/skill"
                        style={{animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`}}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium group-hover/skill:text-white/90 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <Badge 
                            variant="secondary" 
                            className="bg-white/20 text-white border-white/30 group-hover/skill:bg-white/30 transition-all duration-300"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        
                        <div className="relative h-3 bg-white/20 rounded-full overflow-hidden group-hover/skill:bg-white/30 transition-all duration-300">
                          <div 
                            className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="relative overflow-hidden p-8 shadow-2xl border-0 bg-white/10 backdrop-blur-lg max-w-4xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
            
            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Continuous Learning
                </h3>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
                Currently exploring advanced AI techniques, cloud-native architectures, and emerging web technologies.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["GraphQL", "WebAssembly", "Rust", "Go", "Blockchain", "AR/VR"].map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
