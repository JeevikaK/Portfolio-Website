import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink, Award, TrendingUp, Briefcase } from "lucide-react";

const Experience = () => {

  const experiences = [
    {
      title: "Software Developer",
      company: "IBM India Software Labs",
      location: "Bengaluru, KA, India",
      period: "Jul 2024 - Jul 2025",
      description: "Engineered Python-based backend services, telemetry systems, and Kafka data analytics pipelines that powered real-time insights and data visualizations. I designed and optimized relational and NoSQL database schemas to support large-scale telemetry ingestion, query performance, and metadata management, enabling efficient storage and retrieval of high-volume structured and unstructured data.",
      technologies: ["Python", "FastAPI", "Kafka", "Red Hat Openshift", "Docker", "IBM Cloud", "IBM Granite"],
      achievements: ["Built 15+ data visualization charts", "Improved metadata utilization and enhanced the IBM Granite model’s performance by 70%", "Contributed to 2 proof-of-concepts and a patent idea"]
    },
    {
      title: "Software Developer Intern",
      company: "IBM India Software Labs",
      location: "Bengaluru, KA, India",
      period: "Jan 2024 - Jul 2024",
      description: "Implemented vulnerability detection using OWASP principles, and designed automated fixes leveraging IBM Granite and LLaMA models with FastAPI. Also enhanced user experience and accessibility by applying IBM Design Principles and integrating Carbon Components into the workflow",
      technologies: ["React.js", ".NET", "PostgreSQL", "Javascript", "Docker", "Python", "MicrosoftSQL"],
      achievements: ["Improved vulnerability detection by 50%", "Created a uniform accessibility experience"]
    },
    {
      title: "Software Developer Intern",
      company: "Volvo Digital & IT",
      location: "Bengaluru, KA, India",
      period: "Aug 2022 - Nov 2022",
      description: "Developed a web application POC that enabled unbiased candidate shortlisting by restricting inputs to job-relevant information, ensuring fair evaluation. The platform included single sign-on (SSO) and multi-level access controls across the admin and candidate portals, enhancing security and usability.",
      technologies: ["React", "JavaScript", "SSO", "Node.js", "Git", "MongoDB", "Docker"],
      achievements: ["Streamlined the first-round screening process, reducing human effort by 50%", "Cut shortlisting time by 70%", "Improved documentation efficiency"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#F8F7FF] to-[#FFEEDD]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-accent rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#9381FF]">
            Experience Timeline
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            My professional journey and key contributions across different roles
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-80 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center animate-slide-in`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Date on the left */}
                <div className="hidden md:block w-72 pr-8 text-right">
                  <div className="text-lg font-semibold text-[#9381FF]">{exp.period}</div>
                  <div className="text-base text-gray-600">{exp.location}</div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-6 md:left-80 w-4 h-4 bg-gradient-interactive rounded-full border-4 border-background transform md:-translate-x-1/2 z-10 transition-all duration-300 hover:scale-110 hover:shadow-glow">
                  <div className="absolute inset-0 bg-gradient-interactive rounded-full animate-glow"></div>
                </div>

                {/* Content card - always on the right */}
                <div className="w-full md:w-7/12 ml-16 md:ml-16">
                  <Card className="p-6 shadow-lg border border-[#B8B8FF]/30 bg-[#F8F7FF]/90 hover:bg-[#F8F7FF] hover:shadow-xl transition-all duration-500 hover:scale-102 hover:-translate-y-1 group backdrop-blur-sm">
                    {/* Period badge - only show on mobile */}
                    <div className="flex items-center gap-2 mb-4 md:hidden">
                      <Badge className="bg-gradient-interactive text-white border-0 px-3 py-1">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        <MapPin className="h-3 w-3 mr-1" />
                        {exp.location}
                      </Badge>
                    </div>

                    {/* Job title and company */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className={`bg-primary/10 text-primary hover:bg-gradient-interactive hover:text-gray-800 transition-all duration-300 transform hover:scale-105 animate-scale-in`}
                          style={{animationDelay: `${(index * 0.2) + (i * 0.1)}s`}}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;