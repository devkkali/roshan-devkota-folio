import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-section-bg" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full pulse-glow" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full float" />
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-primary-glow rounded-full pulse-glow" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="hero-title mb-6">
            Er. Roshan Devkota
          </h1>
        </div>
        
        <div className="fade-in fade-in-delay-1">
          <p className="hero-subtitle mb-8">
            Computer Engineer & Full-Stack Developer
          </p>
        </div>
        
        <div className="fade-in fade-in-delay-2">
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and building scalable applications. 
            Currently pursuing Master's in Applied Computer Science in Germany.
          </p>
        </div>
        
        <div className="fade-in fade-in-delay-3">
          <Button 
            onClick={scrollToContact}
            className="btn-hero"
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;