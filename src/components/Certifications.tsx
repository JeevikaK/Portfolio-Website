import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, ExternalLink, Calendar, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      date: "2024",
      status: "Active",
      description: "Acquired knowledge of applying Enterprise Design Thinking and its value",
      skills: ["Design Thinking", "User Experience"],
      url: "https://www.coursera.org/account/accomplishments/verify/276H4XNQGTCU"
    },
    {
      title: "Convolutional Neural Networks",
      issuer: "Coursera",
      date: "2023",
      status: "Active",
      credentialId: "276H4XNQGTCU",
      description: "Concepts and applications of Convolutional Neural Networks",
      skills: ["Digital Image Processing", "Machine Learning"],
      url: "https://www.coursera.org/account/accomplishments/verify/276H4XNQGTCU"
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Coursera",
      date: "2023",
      status: "Active", 
      credentialId: "MN2R3HGBXKGV",
      description: "Advanced proficiency in applications of ML algorithms and best practices",
      skills: ["Machine Learning", "Artificial Intelligence"],
      url: "https://www.coursera.org/account/accomplishments/verify/MN2R3HGBXKGV"
    },
    {
      title: "Perform Foundational Data, ML and AI Tasks on Google Cloud",
      issuer: "Google Cloud",
      date: "2022",
      status: "Active",
      description: "Professional-level expertise in Google Cloud Platform to perform Data and ML tasks",
      skills: ["GCP", "Kubernetes", "DevOps", "Microservices"],
      url: "https://www.cloudskillsboost.google/public_profiles/f05ef982-4025-4dee-b437-d9b5e2b65f0f/badges/3455947?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      title: "Python Data Structures",
      issuer: "Coursera",
      date: "2021",
      status: "Active",
      credentialId: "KRABXZ59U9GE",
      description: "Professional-level expertise in python data structures",
      skills: ["Python", "Data Structures and Algorithms"],
      url: "https://www.coursera.org/account/accomplishments/certificate/KRABXZ59U9GE"
    }
  ];

  const publications = [
    {
      title: "Foresight: Empowering Visually Impaired Individuals through Multimodal Generative AI",
      journal: "IEEE",
      date: "2025",
      type: "Research Paper",
      url: "https://ieeexplore.ieee.org/document/11118397",
      description: "Workflow embodied in a mobile app that helps visually impaired individuals by combining vision, speech, and generative AI. It reduces AI hallucinations, improves accuracy, and even identifies 12% more information than baseline models.",
      coAuthors: ["Owais Iqbal", "Prajwal B Mehendarkar", "Ridhiman Singh"]
    },
    {
      title: "AuthEZ: A Multifaceted Identity Provider Service using Facial, Voice, and In-App Authentication",
      journal: "IEEE",
      date: "2024",
      type: "Research Paper",
      url: "https://ieeexplore.ieee.org/document/10923933",
      description: "AuthEZ is an Identity Provider SDK that combines facial verification, voice verification, and in-app authentication techniques to provide a secure and user-friendly authentication experience. In-app verification, suitable for legacy devices, employs public key cryptography and RSA digital signatures through QR codes. Developers can seamlessly integrate these services into web applications, enhancing user experience and data protection.",
      coAuthors: ["Owais Iqbal", "Prajwal B Mehendarkar", "Ridhiman Singh"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-[#FDFCDC] via-[#FED9B7] to-[#00AFB9] dark:from-[#0081A7] dark:via-[#00AFB9] dark:to-[#195A6B]">
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
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                      <CardDescription className="text-primary font-medium">{cert.issuer}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {cert.status}
                      </Badge>
                      {cert.url && (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="hover:bg-primary/10 flex-shrink-0"
                          onClick={() => window.open(cert.url, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                      {cert.credentialId && (
                        <>
                          <span>•</span>
                          <span>ID: {cert.credentialId}</span>
                        </>
                      )}
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
          {/* View More on LinkedIn Button */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-[#0077B5] hover:bg-[#005885] text-white border-[#0077B5] hover:border-[#005885] transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/jeevika-kiran-a0957b242/details/certifications/', '_blank')}
            >
              <Linkedin className="h-5 w-5 mr-2" />
              View More on LinkedIn
            </Button>
          </div>
        </div>

        {/* Publications Section */}
        <div className="mt-16">
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
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="hover:bg-primary/10 flex-shrink-0"
                      onClick={() => window.open(pub.url, '_blank')}
                    >
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