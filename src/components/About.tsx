import { Card } from "@/components/ui/card";
import { Heart, Coffee, Code } from "lucide-react";

const About = () => {
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
            
            <Card className="p-8 shadow-soft border-0 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed">
                Started as a curious computer science student, evolved into a passionate full-stack developer. 
                I believe in writing clean, efficient code and creating seamless user experiences that make a difference.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;