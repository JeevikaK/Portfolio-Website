import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "Active",
      credentialId: "AWS-ASA-2023-001",
      description: "Demonstrated expertise in designing distributed systems on AWS",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"]
    },
    {
      title: "React Professional Developer",
      issuer: "Meta",
      date: "2023",
      status: "Active", 
      credentialId: "META-REACT-2023",
      description: "Advanced proficiency in React development and best practices",
      skills: ["React", "JavaScript", "Frontend Development", "Testing"]
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      status: "Active",
      credentialId: "GCP-PRO-2022-789",
      description: "Professional-level expertise in Google Cloud Platform",
      skills: ["GCP", "Kubernetes", "DevOps", "Microservices"]
    }
  ];

  const publications = [
    {
      title: "Modern React Patterns: Building Scalable Applications",
      journal: "Web Development Quarterly",
      date: "2023",
      type: "Article",
      url: "#",
      description: "Exploring advanced React patterns and architectural decisions for large-scale applications",
      coAuthors: ["Dr. Jane Smith", "Mike Johnson"]
    },
    {
      title: "Serverless Architecture Best Practices",
      journal: "Cloud Computing Today",
      date: "2023",
      type: "Research Paper",
      url: "#",
      description: "A comprehensive study on serverless deployment strategies and performance optimization",
      coAuthors: ["Dr. Alex Chen"]
    },
    {
      title: "The Future of Frontend Development",
      journal: "Tech Innovation Magazine",
      date: "2022",
      type: "Article",
      url: "#",
      description: "Analysis of emerging trends in frontend technologies and their impact on user experience",
      coAuthors: []
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Certifications & Publications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and published research showcasing continuous learning and thought leadership
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-semibold text-foreground">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">{cert.issuer}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                      <span>•</span>
                      <span>ID: {cert.credentialId}</span>
                    </div>
                    
                    <p className="text-sm text-foreground/80">{cert.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs border-primary/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-semibold text-foreground">Publications & Research</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 leading-tight">{pub.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">{pub.journal}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="hover:bg-primary/10 flex-shrink-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{pub.date}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs border-accent/50 bg-accent/10">
                        {pub.type}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-foreground/80">{pub.description}</p>
                    
                    {pub.coAuthors.length > 0 && (
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Co-authors:</p>
                        <p className="text-sm text-foreground/70">{pub.coAuthors.join(", ")}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;