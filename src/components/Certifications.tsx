"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, Linkedin, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Certifications = () => {
  const { ref, hasIntersected } = useIntersectionObserver();
  
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
      title: "Supervised Machine Learning Regression and Classification",
      issuer: "Coursera",
      date: "2022",
      status: "Active", 
      credentialId: "PBNLNCFKYYF6",
      description: "Supervised learning techniques for regression and classification problems",
      skills: ["Machine Learning", "Artificial Intelligence"],
      url: "https://www.coursera.org/account/accomplishments/verify/PBNLNCFKYYF6"
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
    <section ref={ref} id="certifications" className={`py-20 bg-gradient-to-br from-[#FFEEDD] via-[#B8B8FF] to-[#9381FF] section-transition ${hasIntersected ? 'visible' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Certifications & Publications</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Professional certifications and published research showcasing continuous learning and thought leadership
          </p>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-white" />
            <h3 className="text-3xl font-semibold text-white">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-300 border border-[#F8F7FF]/30 bg-[#F8F7FF]/90">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg mb-2 font-semibold text-gray-800">{cert.title}</h3>
                      <p className="text-[#9381FF] font-medium">{cert.issuer}</p>
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
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                      {cert.credentialId && (
                        <>
                          <span>•</span>
                          <span>ID: {cert.credentialId}</span>
                        </>
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-700">{cert.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs border-[#9381FF]/30 text-gray-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* View More on LinkedIn Button */}
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-[#9381FF] hover:bg-[#B8B8FF] text-white border-[#9381FF] hover:border-[#B8B8FF] transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/jeevika-kiran-a0957b242/details/certifications/', '_blank')}
            >
              <Linkedin className="h-5 w-5 mr-2" />
              View more on LinkedIn
            </Button>
          </div>
        </div>

        {/* Publications Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-white/80" />
            <h3 className="text-3xl font-semibold text-white/80">Publications & Research</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-glow hover:shadow-[#9381FF]/20 transition-all duration-500 hover:scale-102 hover:-translate-y-1 border border-[#B8B8FF]/30 hover:border-[#9381FF]/50 bg-gradient-to-br from-[#F8F7FF]/95 to-white/90 hover:from-[#F8F7FF] hover:to-[#B8B8FF]/20 backdrop-blur-sm group">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg mb-2 leading-tight font-semibold text-gray-800 group-hover:text-[#9381FF] transition-colors">{pub.title}</h3>
                      <p className="text-[#9381FF] font-medium">{pub.journal}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="hover:bg-[#B8B8FF]/20 text-[#9381FF] hover:scale-110 hover:rotate-12 transition-all duration-300 flex-shrink-0"
                      onClick={() => window.open(pub.url, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{pub.date}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs border-[#9381FF]/30 bg-[#9381FF]/10 text-[#9381FF] group-hover:bg-[#9381FF] group-hover:text-white transition-all duration-300">
                        {pub.type}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-gray-700">{pub.description}</p>
                    
                    {pub.coAuthors.length > 0 && (
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Co-authors:</p>
                        <p className="text-sm text-gray-600">{pub.coAuthors.join(", ")}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;