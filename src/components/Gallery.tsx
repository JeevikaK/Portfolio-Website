import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Users, Award, Linkedin } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      type: "Research",
      title: "Research under Unisys",
      image: "src/assets/UnisysResearch.png", 
      description: "Research collaboration with Unisys and Ramaiah Institute of Technology developing the accessibility accelerator Foresight",
      date: "May 2024",
      achievement: "Research",
      link: "https://drive.google.com/file/d/16EL7E8wdPXN6FFzPgy5EiARDtngURw_u/view?usp=sharing"
    },
    {
      type: "award",
      title: "Best Project - Pradarshana",
      image: "src/assets/Pradarshana.jpeg",
      description: "First place at the Final Year innovation exhibition for Foresight project at Ramaiah Institute of Technology",
      date: "May 2024",
      achievement: "Development",
      link: "https://drive.google.com/file/d/1LHQk4tzCKmij75kSKlS7N-tzXy5YDWs2/view?usp=sharing"
    },
    {
      type: "Finalist",
      title: "Unisys Innovation Program",
      image: "src/assets/UnisysInnovation.png",
      description: "Finalist in Unisys Innovation Program Y14 out of 700 global applicants for the project AuthEZ, a passwordless authentication IDP as an SDK that eliminates vulnerabilities in traditional logins",
      date: "June 2023",
      participants: "700 teams",
    },
    
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "conference":
        return <Users className="h-5 w-5" />;
      case "project":
        return <Award className="h-5 w-5" />;
      case "workshop":
        return <Users className="h-5 w-5" />;
      case "hackathon":
        return <Award className="h-5 w-5" />;
      case "meetup":
        return <Users className="h-5 w-5" />;
      case "certification":
        return <Award className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-[#F07167] via-[#FED9B7] to-[#FDFCDC] dark:from-[#0081A7] dark:via-[#00AFB9] dark:to-[#195A6B]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Gallery & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A visual showcase of my professional journey, achievements and awards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-soft border-0 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {item.title}
                  </h3>
                  {item.link && (
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="hover:bg-primary/10 flex-shrink-0"
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  {item.achievement && (
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      {getIcon(item.type)}
                      <span>{item.achievement}</span>
                    </div>
                  )}
                  
                  {(item as any).participants && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{(item as any).participants}</span>
                    </div>
                  )}
                </div>
                
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-[#0077B5] hover:bg-[#005885] text-white border-[#0077B5] hover:border-[#005885] transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/jeevika-kiran-a0957b242/recent-activity/all/', '_blank')}
            >
              <Linkedin className="h-5 w-5 mr-2" />
              View all posts on LinkedIn
            </Button>
          </div>
      </div>
    </section>
  );
};

export default Gallery;