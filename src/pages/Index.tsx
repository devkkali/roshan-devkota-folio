import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { Terminal, Linkedin, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
      
      {/* Enhanced Digital Footer */}
      <footer className="bg-gradient-to-r from-muted via-card to-muted relative overflow-hidden">
        {/* Digital background */}
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute top-4 left-4 w-16 h-16 border border-primary/20 rounded-full hologram" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border border-accent/20 rotate-45 float" />
        
        <div className="relative z-10 py-12">
          <div className="container mx-auto px-6">
            {/* Footer Content */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2 justify-center md:justify-start">
                  <Terminal className="w-6 h-6" />
                  <span className="font-mono">Er. Roshan</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Building the future, one line of code at a time.
                </p>
                <div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
                  <div className="w-2 h-2 bg-matrix-green rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground font-mono">ONLINE</span>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-accent mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-mono">
                    about.me()
                  </a>
                  <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-mono">
                    skills.load()
                  </a>
                  <a href="#education" className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-mono">
                    education.history()
                  </a>
                  <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors duration-200 font-mono">
                    contact.init()
                  </a>
                </div>
              </div>
              
              {/* Social Connect */}
              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold text-accent mb-4">Connect</h4>
                <div className="flex justify-center md:justify-end space-x-4 mb-4">
                  <a 
                    href="https://www.linkedin.com/in/roshan-devkota-6ab60414a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-br from-muted/30 to-card text-primary hover:text-accent hover:scale-110 transition-all duration-300 border border-muted/20"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/devkkali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gradient-to-br from-muted/30 to-card text-primary hover:text-accent hover:scale-110 transition-all duration-300 border border-muted/20"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-xs text-muted-foreground font-mono">
                  RESPONSE_TIME: 24H
                </p>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div className="border-t border-muted/20 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <p className="text-muted-foreground text-sm">
                    &copy; 2024 Er. Roshan Devkota. All Rights Reserved.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-1 h-1 bg-tech-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                  <Terminal className="w-3 h-3" />
                  <span>Built with React + TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
