import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Roshan Devkota"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full pulse-glow" />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary rounded-full float" />
            </div>
          </div>
          
          {/* About Text */}
          <div className="space-y-6">
            <Card className="skill-card p-8">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                I am a dedicated Computer Engineer specializing in full-stack web development. 
                With expertise in a wide range of programming languages and frameworks, I bring 
                a comprehensive approach to building robust and scalable web applications.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Originally from Nepal, I am currently based in Germany pursuing my Master's 
                degree in Applied Computer Science at SRH University. My passion lies in 
                creating innovative solutions that make a difference in people's lives.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div>
                  <h4 className="font-semibold text-accent mb-2">Education</h4>
                  <p className="text-muted-foreground">Master's in Applied CS</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Location</h4>
                  <p className="text-muted-foreground">Germany</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Experience</h4>
                  <p className="text-muted-foreground">5+ Years</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Focus</h4>
                  <p className="text-muted-foreground">Full-Stack Development</p>
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