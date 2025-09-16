import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award, ExternalLink } from "lucide-react";

// Server Component - Static experience data can be rendered on the server
const Experience = () => {
  const experiences = [
    {
      title: "AI Research Intern",
      company: "Unisys Corporation",
      location: "Bangalore, India",
      duration: "May 2024 - July 2024",
      type: "Internship",
      description: "Developed Foresight, an accessibility accelerator using computer vision and AI to assist visually impaired users in navigating digital interfaces.",
      achievements: [
        "Built cross-modal attribution system for explainable AI",
        "Implemented counterfactual reasoning for improved model interpretability",
        "Collaborated with senior researchers on cutting-edge AI projects",
        "Published research findings and presented to stakeholders"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "AI Research"],
      link: "https://drive.google.com/file/d/16EL7E8wdPXN6FFzPgy5EiARDtngURw_u/view?usp=sharing"
    },
    {
      title: "Full Stack Developer",
      company: "Freelance Projects",
      location: "Remote",
      duration: "Jan 2023 - Present",
      type: "Freelance",
      description: "Developed end-to-end web applications for various clients, focusing on modern technologies and user experience.",
      achievements: [
        "Built 10+ responsive web applications using React and Next.js",
        "Implemented secure authentication systems and payment gateways",
        "Optimized application performance and SEO for better user engagement",
        "Maintained 98% client satisfaction rate with timely project delivery"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS", "TypeScript"],
      link: null
    },
    {
      title: "Software Development Intern",
      company: "Tech Startup",
      location: "Bangalore, India",
      duration: "Jun 2023 - Aug 2023",
      type: "Internship",
      description: "Contributed to the development of a SaaS platform for small businesses, focusing on frontend development and user interface design.",
      achievements: [
        "Developed responsive UI components using React and Tailwind CSS",
        "Integrated RESTful APIs and improved data fetching efficiency by 40%",
        "Collaborated with design team to implement pixel-perfect interfaces",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Git"],
      link: null
    },
    {
      title: "Research Assistant",
      company: "Ramaiah Institute of Technology",
      location: "Bangalore, India",
      duration: "Aug 2022 - May 2024",
      type: "Academic",
      description: "Conducted research in AI and machine learning, focusing on accessibility technologies and computer vision applications.",
      achievements: [
        "Led final year project on accessibility accelerator technology",
        "Won first place at Pradarshana innovation exhibition",
        "Published research papers on AI accessibility solutions",
        "Mentored junior students in AI and programming concepts"
      ],
      technologies: ["Python", "Machine Learning", "Research", "Academic Writing"],
      link: "https://drive.google.com/file/d/1LHQk4tzCKmij75kSKlS7N-tzXy5YDWs2/view?usp=sharing"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-500/10 text-blue-600 border-blue-200";
      case "Freelance":
        return "bg-green-500/10 text-green-600 border-green-200";
      case "Academic":
        return "bg-purple-500/10 text-purple-600 border-purple-200";
      default:
        return "bg-gray-500/10 text-gray-600 border-gray-200";
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#195A6B] via-[#0081A7] to-[#00AFB9] dark:from-[#00AFB9] dark:via-[#0081A7] dark:to-[#195A6B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-44 h-44 bg-gradient-accent rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-interactive rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Professional Experience
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            My journey through various roles in AI research, software development, and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/30 via-white/50 to-white/30"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative mb-12 last:mb-0 animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Experience card */}
                <div className="ml-20">
                  <Card className="relative overflow-hidden border-0 shadow-2xl bg-white/10 backdrop-blur-lg hover:bg-white/15 transition-all duration-700 hover:scale-[1.02] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            {exp.link && (
                              <button 
                                onClick={() => window.open(exp.link, '_blank')}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                              >
                                <ExternalLink className="h-4 w-4 text-white" />
                              </button>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2 text-white/80 mb-2">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Badge className={`${getTypeColor(exp.type)} font-medium`}>
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Description */}
                      <p className="text-white/80 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="flex items-start gap-3 text-white/80 group-hover:text-white/90 transition-colors duration-300"
                            >
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-white/90 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline" 
                              className="bg-white/10 text-white border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <Card className="relative overflow-hidden p-8 shadow-2xl border-0 bg-white/10 backdrop-blur-lg max-w-4xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4">
                Professional Growth
              </h3>
              <p className="text-white/80 leading-relaxed">
                Throughout my career journey, I've gained valuable experience in AI research, 
                full-stack development, and innovative problem-solving. Each role has contributed 
                to my growth as a technologist and researcher, building a strong foundation for 
                creating impactful solutions in the AI and software development space.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
