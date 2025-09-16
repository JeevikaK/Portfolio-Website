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
            <a 
              href="https://github.com/JeevikaK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-md"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jeevika-kiran-a0957b242/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-md"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:jeevika.kiran@gmail.com"
              className="inline-flex items-center justify-center w-10 h-10 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-md"
            >
              <Mail className="h-5 w-5" />
            </a>
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