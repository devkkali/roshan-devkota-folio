import { Briefcase, Calendar, MapPin, Code2, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Full Stack Developer",
    location: "Remote",
    period: "2023 - Present",
    status: "Current",
    description: "Leading development of enterprise-scale web applications using modern tech stack",
    achievements: [
      "Architected microservices infrastructure",
      "Improved application performance by 40%",
      "Mentored team of 5 junior developers"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    side: "left"
  },
  {
    company: "Digital Innovations Ltd.",
    role: "Full Stack Developer",
    location: "Hybrid",
    period: "2021 - 2023",
    status: "Past",
    description: "Developed and maintained multiple client projects with focus on user experience",
    achievements: [
      "Built 15+ production applications",
      "Reduced deployment time by 60%",
      "Implemented CI/CD pipelines"
    ],
    tech: ["Vue.js", "Python", "MongoDB", "Redis"],
    side: "right"
  },
  {
    company: "StartUp Labs",
    role: "Junior Developer",
    location: "On-site",
    period: "2020 - 2021",
    status: "Past",
    description: "Contributed to rapid development of MVP products and prototypes",
    achievements: [
      "Developed responsive web interfaces",
      "Integrated third-party APIs",
      "Participated in agile development"
    ],
    tech: ["JavaScript", "Express", "MySQL"],
    side: "left"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 md:py-24 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">career.log()</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Professional journey through the tech industry
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/50 transform -translate-x-1/2" />
          
          {/* Timeline nodes */}
          <div className="space-y-8 md:space-y-12">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                  exp.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 z-10" />
                
                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${exp.side === "left" ? "md:text-right" : ""}`}>
                  <Card className="group border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-3 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-primary/10">
                      <div className={`flex flex-col ${exp.side === "left" ? "md:items-end" : "md:items-start"} gap-2`}>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge 
                            variant={exp.status === "Current" ? "default" : "secondary"}
                            className="text-xs font-mono"
                          >
                            {exp.status === "Current" ? "● ACTIVE" : "✓ COMPLETED"}
                          </Badge>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            <span className="font-mono">{exp.period}</span>
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">{exp.company}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-4 space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="space-y-2">
                        <div className={`flex items-center gap-2 text-xs font-mono text-primary ${exp.side === "left" ? "md:justify-end" : ""}`}>
                          <TrendingUp className="w-3 h-3" />
                          <span>KEY_ACHIEVEMENTS</span>
                        </div>
                        <ul className={`space-y-1.5 text-sm ${exp.side === "left" ? "md:text-right" : ""}`}>
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">▹</span>
                              <span className="flex-1">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Tech stack */}
                      <div className="space-y-2 pt-2 border-t border-border/50">
                        <div className={`flex items-center gap-2 text-xs font-mono text-primary ${exp.side === "left" ? "md:justify-end" : ""}`}>
                          <Code2 className="w-3 h-3" />
                          <span>TECH_STACK</span>
                        </div>
                        <div className={`flex flex-wrap gap-2 ${exp.side === "left" ? "md:justify-end" : ""}`}>
                          {exp.tech.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs font-mono border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Spacer for other side on desktop */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
