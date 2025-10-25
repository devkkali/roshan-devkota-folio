import { Briefcase, Calendar, MapPin, Code2, TrendingUp, Building2, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Full Stack Developer",
    location: "Remote",
    period: "2023 - Present",
    duration: "1+ year",
    status: "Current",
    description: "Leading development of enterprise-scale web applications using modern tech stack",
    achievements: [
      "Architected microservices infrastructure",
      "Improved application performance by 40%",
      "Mentored team of 5 junior developers"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"]
  },
  {
    company: "Digital Innovations Ltd.",
    role: "Full Stack Developer",
    location: "Hybrid",
    period: "2021 - 2023",
    duration: "2 years",
    status: "Past",
    description: "Developed and maintained multiple client projects with focus on user experience",
    achievements: [
      "Built 15+ production applications",
      "Reduced deployment time by 60%",
      "Implemented CI/CD pipelines"
    ],
    tech: ["Vue.js", "Python", "MongoDB", "Redis"]
  },
  {
    company: "StartUp Labs",
    role: "Junior Developer",
    location: "On-site",
    period: "2020 - 2021",
    duration: "1 year",
    status: "Past",
    description: "Contributed to rapid development of MVP products and prototypes",
    achievements: [
      "Developed responsive web interfaces",
      "Integrated third-party APIs",
      "Participated in agile development"
    ],
    tech: ["JavaScript", "Express", "MySQL"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 md:py-24 bg-gradient-to-b from-background to-background/90 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      
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

        {/* Experience Cards Grid */}
        <div className="max-w-5xl mx-auto space-y-6">
          {experienceData.map((exp, index) => (
            <Card
              key={index}
              className="group border-l-4 border-l-primary/50 hover:border-l-primary transition-all duration-300 bg-card/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Side - Company Info */}
                <div className="md:w-72 p-6 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-b md:border-b-0 md:border-r border-border/50">
                  <div className="space-y-4">
                    {/* Company */}
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Building2 className="w-5 h-5" />
                        <span className="text-xs font-mono uppercase tracking-wider">Company</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.company}
                      </h3>
                    </div>

                    {/* Period & Duration */}
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase tracking-wider">Timeline</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">{exp.period}</p>
                        <p className="text-xs text-muted-foreground font-mono">{exp.duration}</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs font-mono uppercase tracking-wider">Location</span>
                      </div>
                      <p className="text-sm text-foreground">{exp.location}</p>
                    </div>

                    {/* Status Badge */}
                    <div className="pt-2">
                      <Badge 
                        variant={exp.status === "Current" ? "default" : "secondary"}
                        className="font-mono text-xs"
                      >
                        {exp.status === "Current" ? (
                          <>
                            <Zap className="w-3 h-3 mr-1 fill-current" />
                            ACTIVE
                          </>
                        ) : (
                          "COMPLETED"
                        )}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Right Side - Role & Details */}
                <div className="flex-1 p-6 space-y-5">
                  {/* Role */}
                  <div>
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>KEY ACHIEVEMENTS</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm group/item">
                          <span className="text-primary mt-0.5 group-hover/item:scale-125 transition-transform">▹</span>
                          <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3 pt-3 border-t border-border/50">
                    <div className="flex items-center gap-2 text-xs font-mono text-primary">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>TECHNOLOGIES</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs font-mono border-primary/30 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
