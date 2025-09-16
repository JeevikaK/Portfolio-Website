"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Projects = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  
  const projects = [
    {
      title: "Foresight",
      description: "Foresight is an open-source accessibility accelerator for visually impaired users, integrating ShareGPT4V for visual analysis, Detectron2 for object grounding, and Gemma 7B for improved accuracy. With speech-to-text and text-to-speech interaction, it reduces hallucinations and identifies 12% more useful information than baseline models, delivering reliable, context-aware assistance",
      image: "/assets/Foresight.jpeg",
      technologies: ["Generative AI", "Detectron2", "ShareGPT4V", "Gemma 7B", "ReactJS", "Django Framework", "SQLite", "Kotlin"],
      liveUrl: "https://drive.google.com/file/d/17JhqY_Z2MobLL9N9fnKZo53WVXx6ZM8x/view?usp=sharing",
      githubUrl: "https://github.com/JeevikaK/Foresight"
    },
    {
      title: "AuthEZ",
      description: "AuthEZ is a passwordless authentication IDP as an SDK that eliminates vulnerabilities in traditional logins. It integrates SSO, Facenet-based facial verification with liveness checks, Resemblyzer voice embeddings, and RSA cryptographic signatures via QR codes for legacy devices, delivering secure and seamless access.",
      image: "/assets/AuthEZ.png",
      technologies: ["Identity Provider", "Facenet", "Resemblyzer", "WebAuthn API", "ReactJS", "Javascript", "Tailwind CSS"],
      liveUrl: "https://drive.google.com/file/d/1-Rdxjag_jsWGm6aWPfSP0xFCzdbx3MOJ/view?usp=drivesdk",
      githubUrl: "https://github.com/JeevikaK/AuthEZ"
    },
    {
      title: "Memoirs",
      description: "Mental health surveillance and assessment platform for teens and students. Features personalized music recommendations with Solfeggio frequencies and AI-powered mental health assistance.",
      image: "/assets/memoirs.jpg",
      technologies: ["React", "Typescript", "Next.js"],
      githubUrl: "https://github.com/JeevikaK/MindMap/tree/MindMap"
    },
    {
      title: "Student Buzz",
      description: "Introducing StudentBuzz, a cutting-edge collaborative platform that empowers students to showcase their skills, projects, and accomplishments while fostering a vibrant community of learning and collaboration. With StudentBuzz, students can take their educational journey to the next level by connecting with like-minded peers, engaging in club activities, and collaborating with students from other colleges.",
      image: "/assets/StudentBuzz.jpeg",
      technologies: ["Django Framework", "ReactJS", "SQLite"],
      githubUrl: "https://github.com/JeevikaK/Student-Buzz"
    },
    {
      title: "Car Theft Detection System",
      description: "Security of parked cars against theft is a long existing concern. We present an automated way of detecting vehicle theft as it happens using moving object detection and barcode scanning for each parking entry. The detected edges of the output should give a clear image of the moving object from the video. The security personnel or the parking lot operator gets notified about the movement.",
      image: "/assets/carparkingdetection.png",
      technologies: ["Python", "OpenCV", "Computer Vision", "Digital Image Processing"],
      githubUrl: "https://github.com/JeevikaK/Car-theft-detection-Parking"
    },
    {
      title: "Valunique",
      description: "Innovative recruitment platform eliminating bias through faceless hiring processes, developed during Volvo Group internship.  The platform included multi-level access controls across the admin and candidate portals, enhancing security and usability.",
      image: "/assets/valunique.jpg",
      technologies: ["ReactJS", "NodeJS", "Microsoft SQL"],
      githubUrl: "https://github.com/JeevikaK/Valunique-Backend"
    }
  ];

  return (
    <section ref={ref} id="projects" className={`py-20 bg-gradient-to-br from-[#B8B8FF] via-[#F8F7FF] to-[#FFEEDD] section-transition ${hasIntersected ? 'visible' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#9381FF]">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-soft border border-[#B8B8FF]/30 bg-[#F8F7FF]/80 backdrop-blur-sm hover:shadow-glow transition-all duration-300 hover:scale-[1.02] group w-full max-w-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-foreground/80 mb-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300 text-xs px-2 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2 border-primary/30 hover:bg-primary/10 transition-all duration-300"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="flex items-center gap-2 hover:bg-primary/10 transition-all duration-300"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    disabled={project.githubUrl === '#'}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;