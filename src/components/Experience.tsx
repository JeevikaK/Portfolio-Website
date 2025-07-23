import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Leading the development of responsive web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality user experiences.",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      location: "Remote",
      period: "2022 - 2023",
      description: "Developed and maintained full-stack applications using modern web technologies. Implemented RESTful APIs and database solutions for various client projects.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "StartupHub",
      location: "New York, NY",
      period: "2021 - 2022",
      description: "Built responsive user interfaces and collaborated with designers to create engaging web experiences. Optimized application performance and implemented modern development practices.",
      technologies: ["React", "JavaScript", "SASS", "Firebase", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the amazing companies I've worked with
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 shadow-soft border-0 bg-gradient-accent hover:shadow-glow transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl text-primary font-medium mb-2">
                    {exp.company}
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;