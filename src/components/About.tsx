import { Card } from "@/components/ui/card";
import { Terminal, Code } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Advanced Digital Grid */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute top-10 left-10 w-64 h-64 border border-primary/20 rounded-full hologram" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-accent/20 rotate-45 float" />
      
      {/* Floating Code Elements */}
      <div className="absolute top-1/4 left-1/4 text-primary/10 font-mono text-6xl rotate-12 select-none">{'<dev/>'}</div>
      <div className="absolute top-3/4 right-1/4 text-accent/10 font-mono text-4xl -rotate-12 select-none">{'{ }'}</div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-accent mb-6 hero-title">
            <Terminal className="inline-block w-12 h-12 mr-4 text-primary" />
            System Profile
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-tech-cyan mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate computer engineer crafting{' '}
            <span className="text-primary font-semibold">digital solutions</span> with{' '}
            <span className="text-accent font-semibold">innovative code</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Enhanced Profile Image */}
          <div className="relative flex justify-center fade-in-digital">
            <div className="relative">
              {/* Multi-layered glowing rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-tech-cyan animate-pulse opacity-60 blur-md scale-110" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tech-cyan via-primary to-accent animate-pulse opacity-40 blur-lg scale-125" style={{ animationDelay: '1s' }} />
              
              {/* Main profile container */}
              <div className="relative w-80 h-80 rounded-full border-4 border-primary/50 overflow-hidden bg-gradient-to-br from-card to-muted shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Roshan Devkota" 
                  className="w-full h-full object-cover"
                />
                
                {/* Digital HUD overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/20" />
                
                {/* Scanning line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-cyan/30 to-transparent h-2 animate-bounce" style={{ animationDuration: '3s' }} />
                
                {/* Enhanced corner brackets */}
                <div className="absolute top-6 left-6 w-12 h-12 border-l-4 border-t-4 border-primary rounded-tl-lg" />
                <div className="absolute top-6 right-6 w-12 h-12 border-r-4 border-t-4 border-primary rounded-tr-lg" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-l-4 border-b-4 border-primary rounded-bl-lg" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-r-4 border-b-4 border-primary rounded-br-lg" />
                
                {/* Status indicators */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  <div className="w-2 h-2 bg-matrix-green rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-tech-cyan rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
              
              {/* Multiple orbiting elements */}
              <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute top-1/2 left-1/2 w-[28rem] h-[28rem] border-dashed border-tech-cyan/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </div>
          </div>

          {/* Enhanced About Content */}
          <div className="space-y-8 fade-in-digital" style={{ animationDelay: '0.3s' }}>
            <Card className="skill-card p-8 relative overflow-hidden">
              {/* Enhanced circuit patterns */}
              <div className="absolute top-0 right-0 w-32 h-32 border-l-2 border-b-2 border-primary/20 rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-r-2 border-t-2 border-accent/20 rounded-tr-3xl" />
              
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Terminal className="w-8 h-8" />
                  <span className="font-mono">dev.profile.load()</span>
                </h3>
                
                <div className="space-y-6 text-foreground leading-relaxed">
                  <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary/50 font-mono text-sm">
                    <span className="text-matrix-green">{'>'}</span> <span className="text-tech-cyan">STATUS:</span> <span className="text-accent">ONLINE</span><br/>
                    <span className="text-matrix-green">{'>'}</span> <span className="text-tech-cyan">MODE:</span> <span className="text-accent">DEVELOPMENT</span><br/>
                    <span className="text-matrix-green">{'>'}</span> <span className="text-tech-cyan">LOCATION:</span> <span className="text-accent">GERMANY</span>
                  </div>
                  
                  <p className="text-lg">
                    I am a dedicated <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Computer Engineer</span> specializing 
                    in full-stack development and digital innovation. I architect scalable solutions that merge 
                    <span className="text-accent font-semibold"> creativity</span> with 
                    <span className="text-tech-cyan font-semibold"> cutting-edge technology</span>.
                  </p>
                  
                  <p className="text-lg">
                    From the mountains of <span className="text-accent font-bold">Nepal</span> to the tech hubs of 
                    <span className="text-primary font-bold"> Germany</span>, I'm pursuing my Master's in Applied Computer Science 
                    at SRH University while transforming complex problems into elegant digital experiences.
                  </p>
                  
                  {/* Enhanced stats grid */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-primary/20">
                    <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">2019</div>
                      <div className="text-sm text-muted-foreground font-mono">GRADUATED</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-tech-cyan/10 rounded-lg">
                      <div className="text-2xl font-bold text-accent">4+</div>
                      <div className="text-sm text-muted-foreground font-mono">YEARS_EXP</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-tech-cyan/10 to-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-tech-cyan">∞</div>
                      <div className="text-sm text-muted-foreground font-mono">LEARNING</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;