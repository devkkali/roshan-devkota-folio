import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import heroImage from "@/assets/digital-hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Create matrix rain effect
  useEffect(() => {
    const createMatrixChar = () => {
      const chars = '01';
      const char = chars[Math.floor(Math.random() * chars.length)];
      const element = document.createElement('div');
      element.textContent = char;
      element.className = 'matrix-char';
      element.style.left = Math.random() * 100 + 'vw';
      element.style.animationDelay = Math.random() * 2 + 's';
      element.style.fontSize = Math.random() * 10 + 10 + 'px';
      
      document.getElementById('matrix-container')?.appendChild(element);
      
      setTimeout(() => {
        element.remove();
      }, 8000);
    };

    const createDataStream = () => {
      const element = document.createElement('div');
      element.className = 'data-stream';
      element.style.top = Math.random() * 100 + 'vh';
      element.style.width = Math.random() * 200 + 100 + 'px';
      element.style.animationDelay = Math.random() * 2 + 's';
      
      document.getElementById('data-streams')?.appendChild(element);
      
      setTimeout(() => {
        element.remove();
      }, 3000);
    };

    const matrixInterval = setInterval(createMatrixChar, 200);
    const streamInterval = setInterval(createDataStream, 1000);

    return () => {
      clearInterval(matrixInterval);
      clearInterval(streamInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg">
      {/* Digital Matrix Rain */}
      <div id="matrix-container" className="absolute inset-0 pointer-events-none z-10" />
      
      {/* Data Streams */}
      <div id="data-streams" className="absolute inset-0 pointer-events-none z-10" />
      
      {/* Profile Photo Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url('/src/assets/profile-photo.jpg')` }}
      />
      
      {/* Tech Circuit Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Multiple Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-section-bg" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-accent/10" />
      
      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full pulse-glow" />
      <div className="absolute top-32 right-16 w-2 h-2 bg-tech-cyan rounded-full hologram" />
      <div className="absolute top-60 left-1/4 w-4 h-4 bg-accent rounded-full float" />
      <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-matrix-green rounded-full pulse-glow" />
      <div className="absolute bottom-60 left-20 w-3 h-3 bg-tech-purple rounded-full hologram" />
      
      {/* Geometric Tech Shapes */}
      <div className="absolute top-1/4 right-10 w-20 h-20 border border-primary/30 rotate-45 hologram" />
      <div className="absolute bottom-1/4 left-10 w-16 h-16 border border-accent/30 rotate-12 float" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className="fade-in-digital">
          <h1 className="hero-title mb-8">
            Er. Roshan Devkota
          </h1>
        </div>
        
        <div className="fade-in-digital" style={{ animationDelay: '0.2s' }}>
          <p className="hero-subtitle mb-12">
            Computer Engineer & Full-Stack Developer
          </p>
        </div>
        
        <div className="fade-in-digital" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Crafting cutting-edge digital solutions with{' '}
            <span className="text-primary font-semibold">modern technologies</span> and{' '}
            <span className="text-accent font-semibold">innovative thinking</span>.
          </p>
        </div>
        
        <div className="fade-in-digital" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToContact}
            className="btn-hero"
          >
            <span className="relative z-10">Initialize Contact</span>
          </Button>
        </div>
        
        {/* Tech Stats */}
        <div className="fade-in-digital mt-16" style={{ animationDelay: '0.8s' }}>
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">25+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-tech-cyan">100+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center relative overflow-hidden">
          <div className="w-2 h-4 bg-primary rounded-full mt-2 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;