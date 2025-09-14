import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Globe, Palette, Server, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Backend Development", 
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Python", "Express.js", "REST APIs", "GraphQL", "Microservices"],
      color: "bg-accent/10 text-accent-foreground"
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Firebase", "Supabase"],
      color: "bg-secondary/10 text-secondary-foreground"
    },
    {
      title: "Cloud & DevOps",
      icon: <Settings className="h-6 w-6" />,
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
      color: "bg-muted/10 text-muted-foreground"
    },
    {
      title: "Design & Tools",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Responsive Design"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Development Tools",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Git", "VS Code", "Webpack", "Vite", "ESLint", "Prettier", "Testing"],
      color: "bg-accent/10 text-accent-foreground"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise across the full stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-soft border-0 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 shadow-soft border-0 bg-card/50 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Continuous Learning</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
              I regularly explore new frameworks, attend tech conferences, and contribute to open-source projects.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2">
                Currently Learning: AI/ML
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2">
                Exploring: Web3
              </Badge>
              <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2">
                Interested in: Rust
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;