import { Card } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "Master in Applied Computer Science",
      institution: "SRH University, Germany",
      period: "2023 - Present",
      description: "Focusing on advanced software engineering, artificial intelligence, and modern development practices.",
      side: "left"
    },
    {
      degree: "Bachelor in Computer Engineering",
      institution: "Pokhara University, Nepal",
      period: "2015 - 2019",
      description: "Comprehensive study of computer systems, programming, and software development fundamentals.",
      side: "right"
    }
  ];

  return (
    <section id="education" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and engineering
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line hidden md:block" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`flex items-center ${
                  edu.side === 'left' ? 'md:justify-start' : 'md:justify-end'
                } justify-center`}
              >
                <div className={`w-full md:w-5/12 ${edu.side === 'right' ? 'md:text-right' : ''}`}>
                  <Card className="skill-card p-6 relative">
                    {/* Timeline Dot */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 md:block hidden">
                      <div className={`timeline-dot w-4 h-4 rounded-full ${
                        edu.side === 'left' ? '-translate-x-[2.75rem]' : 'translate-x-[2.75rem]'
                      }`} />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-accent font-medium mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground font-mono text-sm">
                          {edu.period}
                        </p>
                      </div>
                      
                      <p className="text-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
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