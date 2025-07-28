import { Card } from "@/components/ui/card";
import { GraduationCap, Terminal, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master in Applied Computer Science",
      institution: "SRH University, Germany",
      period: "2023 - Present",
      description: "Focusing on advanced software engineering, artificial intelligence, and modern development practices.",
      status: "IN_PROGRESS",
      side: "left",
      level: "ADVANCED"
    },
    {
      degree: "Bachelor in Computer Engineering",
      institution: "Pokhara University, Nepal",
      period: "2015 - 2019",
      description: "Comprehensive study of computer systems, programming, and software development fundamentals.",
      status: "COMPLETED",
      side: "right",
      level: "FOUNDATION"
    }
  ];

  return (
    <section id="education" className="py-20 bg-section-bg relative overflow-hidden">
      {/* Digital Background Elements */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute top-20 right-20 w-40 h-40 border border-primary/20 rounded-full hologram" />
      <div className="absolute bottom-20 left-20 w-32 h-32 border border-accent/20 rotate-45 float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-accent mb-6 hero-title">
            <GraduationCap className="inline-block w-12 h-12 mr-4 text-primary" />
            Academic Matrix
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-tech-cyan mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My educational journey through{' '}
            <span className="text-primary font-semibold">computer science</span> and{' '}
            <span className="text-accent font-semibold">engineering excellence</span>
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced Timeline Line with Connectors */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-tech-cyan hidden md:block rounded-full shadow-lg shadow-primary/30" />
          
          {/* Timeline Data Nodes */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-20 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/50 animate-pulse hidden md:block" />
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-20 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg shadow-accent/50 animate-pulse hidden md:block" style={{ animationDelay: '1s' }} />

          <div className="space-y-20">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`flex items-center ${
                  edu.side === 'left' ? 'md:justify-start' : 'md:justify-end'
                } justify-center fade-in-digital`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`w-full md:w-5/12 ${edu.side === 'right' ? 'md:text-right' : ''}`}>
                  <Card className="skill-card p-8 relative overflow-hidden group hover:scale-105 transition-all duration-300">
                    {/* Connection Line to Timeline */}
                    <div className={`absolute top-1/2 ${
                      edu.side === 'left' ? 'right-0' : 'left-0'
                    } w-12 h-1 bg-gradient-to-r from-primary to-accent hidden md:block`} />
                    
                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        edu.status === 'COMPLETED' ? 'bg-matrix-green' : 'bg-accent animate-pulse'
                      }`} />
                      <span className="text-xs font-mono text-muted-foreground">
                        {edu.status}
                      </span>
                    </div>

                    {/* Level Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        edu.level === 'ADVANCED' 
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'bg-accent/20 text-accent border border-accent/30'
                      }`}>
                        {edu.level}
                      </span>
                    </div>

                    <div className="space-y-6 mt-8">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                          <Terminal className="w-6 h-6" />
                          {edu.degree}
                        </h3>
                        <div className="space-y-2">
                          <p className="text-accent font-bold text-lg">
                            {edu.institution}
                          </p>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground font-mono text-sm">
                              {edu.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary/50">
                        <p className="text-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>

                    {/* Tech Pattern Overlays */}
                    <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-primary/10 rounded-bl-3xl" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-r border-t border-accent/10 rounded-tr-3xl" />
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;