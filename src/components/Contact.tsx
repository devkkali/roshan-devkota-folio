import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Terminal, Send, Code2, Zap } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "roshandevkota1997@gmail.com",
      link: "mailto:roshandevkota1997@gmail.com",
      color: "text-tech-cyan",
      bgGlow: "from-tech-cyan/20 to-primary/10"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+49 1573 5598680",
      link: "tel:+4915735598680",
      color: "text-matrix-green",
      bgGlow: "from-matrix-green/20 to-accent/10"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "roshan-devkota",
      link: "https://www.linkedin.com/in/roshan-devkota-6ab60414a/",
      color: "text-primary",
      bgGlow: "from-primary/20 to-tech-cyan/10"
    },
    {
      icon: Github,
      title: "GitHub",
      content: "devkkali",
      link: "https://github.com/devkkali",
      color: "text-accent",
      bgGlow: "from-accent/20 to-tech-purple/10"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Germany (Originally from Nepal)",
      link: null,
      color: "text-tech-purple",
      bgGlow: "from-tech-purple/20 to-primary/10"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Advanced Digital Background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-20 left-20 w-40 h-40 border border-primary/20 rounded-full hologram" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-accent/20 rotate-45 float" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-tech-cyan/20 rounded-lg rotate-12 animate-pulse" />
      
      {/* Floating Code Elements */}
      <div className="absolute top-1/4 left-1/4 text-primary/10 font-mono text-4xl rotate-12 select-none">{'</>'}</div>
      <div className="absolute bottom-1/4 right-1/3 text-accent/10 font-mono text-6xl -rotate-12 select-none">{'{ }'}</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-accent mb-6 hero-title">
            <Terminal className="inline-block w-12 h-12 mr-4 text-primary" />
            Connect.Protocol()
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-tech-cyan mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to build the future together? Let's{' '}
            <span className="text-primary font-semibold">connect</span> and create{' '}
            <span className="text-accent font-semibold">amazing digital experiences</span>
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="skill-card p-6 text-center group hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Header with Digital Effect */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.bgGlow}`} />
              
              <div className="flex flex-col items-center space-y-4">
                <div className={`relative p-4 rounded-xl bg-gradient-to-br from-muted/30 to-card ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8" />
                  
                  {/* Status indicator */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-matrix-green rounded-full animate-pulse" />
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2 flex items-center gap-2 justify-center">
                    <Code2 className="w-4 h-4 text-primary" />
                    {item.title}
                  </h3>
                  
                  {item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${item.color} hover:text-accent transition-colors duration-200 font-mono text-sm break-all block p-2 rounded-lg bg-muted/20 hover:bg-muted/30`}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className={`${item.color} font-mono text-sm block p-2 rounded-lg bg-muted/20`}>
                      {item.content}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent/30 rounded-bl-lg" />
              
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <Card className="skill-card p-10 max-w-3xl mx-auto relative overflow-hidden group">
            {/* Digital Header */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-tech-cyan" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-primary font-mono">
                  init.collaboration()
                </h3>
                <Zap className="w-8 h-8 text-accent" />
              </div>
              
              <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary/50 font-mono text-left">
                <span className="text-matrix-green">{'>'}</span> <span className="text-tech-cyan">STATUS:</span> <span className="text-accent">AVAILABLE_FOR_HIRE</span><br/>
                <span className="text-matrix-green">{'>'}</span> <span className="text-tech-cyan">SPECIALITY:</span> <span className="text-accent">FULL_STACK_DEVELOPMENT</span><br/>
                <span className="text-matrix-green">{'>'}</span> <span className="text-tech-cyan">RESPONSE_TIME:</span> <span className="text-accent">24_HOURS</span>
              </div>
              
              <p className="text-lg text-foreground leading-relaxed">
                I'm always excited to discuss <span className="text-primary font-semibold">innovative projects</span>, 
                explore new <span className="text-accent font-semibold">technologies</span>, and collaborate on 
                <span className="text-tech-cyan font-semibold"> game-changing solutions</span>. 
                Let's build something extraordinary together!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="btn-hero group/btn"
                >
                  <a href="mailto:roshandevkota1997@gmail.com" className="flex items-center gap-2">
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  <a href="https://www.linkedin.com/in/roshan-devkota-6ab60414a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Enhanced corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-accent/50 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-tech-cyan/50 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-tech-purple/50 rounded-br-lg" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;