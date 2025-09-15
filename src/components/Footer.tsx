import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center mb-4">
            <p className="text-lg text-foreground mb-2">Thanks for stopping by!</p>
            <p className="text-muted-foreground">Can't wait to hear from you and explore new opportunities together.</p>
          </div>
          
          <div className="flex gap-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              onClick={() => window.open('https://github.com/JeevikaK', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/jeevika-kiran-a0957b242/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              onClick={() => window.open('mailto:jeevikakiran@gmail.com', '_blank')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-current" />
            <span>by Jeevika Kiran</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;