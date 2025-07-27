import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "roshandevkota1997@gmail.com",
      link: "mailto:roshandevkota1997@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+49 1573 5598680",
      link: "tel:+4915735598680",
      color: "text-green-400"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "roshan-devkota",
      link: "https://www.linkedin.com/in/roshan-devkota-6ab60414a/",
      color: "text-blue-500"
    },
    {
      icon: Github,
      title: "GitHub",
      content: "devkkali",
      link: "https://github.com/devkkali",
      color: "text-purple-400"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Germany (Originally from Nepal)",
      link: null,
      color: "text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's connect and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="contact-card p-6 text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className={`p-4 rounded-full bg-muted ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  
                  {item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 break-all"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">
                      {item.content}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="skill-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Let's Work Together
            </h3>
            <p className="text-foreground mb-6">
              I'm always interested in discussing new opportunities, innovative projects, 
              and ways to bring ideas to life through technology.
            </p>
            <Button 
              asChild
              className="btn-hero"
            >
              <a href="mailto:roshandevkota1997@gmail.com">
                Send Message
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;