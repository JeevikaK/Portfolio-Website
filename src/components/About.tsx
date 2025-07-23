import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Coffee, Code } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "AWS",
    "Tailwind CSS", "Figma", "Git", "Docker"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and beautiful user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="p-8 shadow-soft border-0 bg-card/50 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                I'm a full-stack developer with over 3 years of experience building 
                web applications that users love. I specialize in React, TypeScript, 
                and modern web technologies, with a keen eye for design and user experience.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or enjoying a good book with 
                a cup of coffee.
              </p>

              <div className="flex gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-primary" />
                  <span>Coffee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Clean Code</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="p-8 shadow-soft border-0 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center shadow-soft border-0 bg-card/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </Card>
              <Card className="p-6 text-center shadow-soft border-0 bg-card/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;