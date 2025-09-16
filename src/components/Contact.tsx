import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#9381FF] via-[#B8B8FF] to-[#F8F7FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Let&apos;s work together to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="p-8 shadow-soft border-0 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let&apos;s Connect
              </h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I&apos;m always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I look forward to hearing from you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:jeevika.kiran@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">jeevika.kiran@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Los Angeles, CA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+12135513288" className="text-muted-foreground hover:text-primary transition-colors">+1 (213) 551-3288</a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 shadow-soft border-0 bg-card/50 backdrop-blur-sm">
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;