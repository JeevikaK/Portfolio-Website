import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Users, Award } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      type: "conference",
      title: "Tech Conference 2023",
      image: "/api/placeholder/400/300",
      description: "Speaking at React Summit about modern web development practices",
      date: "October 2023",
      location: "San Francisco, CA",
      tags: ["Speaking", "React", "Conference"]
    },
    {
      type: "project",
      title: "Award-Winning E-commerce Platform",
      image: "/api/placeholder/400/300", 
      description: "Led development of a revolutionary e-commerce solution that won Best Innovation Award",
      date: "August 2023",
      achievement: "Innovation Award",
      tags: ["React", "Node.js", "AWS", "Award"]
    },
    {
      type: "workshop",
      title: "Full-Stack Development Workshop",
      image: "/api/placeholder/400/300",
      description: "Conducted a 3-day intensive workshop for 50+ developers on modern full-stack development",
      date: "June 2023",
      participants: "50+ developers",
      tags: ["Teaching", "Full-Stack", "Workshop"]
    },
    {
      type: "hackathon",
      title: "Global Hackathon Winner",
      image: "/api/placeholder/400/300",
      description: "First place winner in the Global Climate Tech Hackathon with an innovative carbon tracking app",
      date: "April 2023",
      achievement: "1st Place",
      tags: ["Hackathon", "Climate Tech", "Mobile"]
    },
    {
      type: "meetup",
      title: "Local Tech Meetup Speaker",
      image: "/api/placeholder/400/300",
      description: "Regular speaker at local JavaScript meetups, sharing knowledge with the community",
      date: "March 2023",
      location: "Seattle, WA",
      tags: ["Community", "JavaScript", "Meetup"]
    },
    {
      type: "certification",
      title: "Cloud Architecture Certification",
      image: "/api/placeholder/400/300",
      description: "Achieved AWS Solutions Architect Professional certification",
      date: "February 2023",
      achievement: "AWS Certified",
      tags: ["AWS", "Cloud", "Certification"]
    }
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
    <section id="gallery" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Gallery & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A visual showcase of my professional journey, speaking engagements, awards, and community involvement
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
                  <Button variant="ghost" size="icon" className="hover:bg-primary/10 flex-shrink-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  {item.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  )}
                  
                  {item.achievement && (
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      {getIcon(item.type)}
                      <span>{item.achievement}</span>
                    </div>
                  )}
                  
                  {item.participants && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{item.participants}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
            View More on LinkedIn
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;