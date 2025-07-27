import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Cpu, Globe, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-primary",
      skills: [
        { name: "React", icon: "⚛️", level: 95, glow: "text-tech-cyan" },
        { name: "Next.js", icon: "▲", level: 90, glow: "text-primary" },
        { name: "TypeScript", icon: "📘", level: 88, glow: "text-accent" },
        { name: "JavaScript", icon: "🟨", level: 95, glow: "text-matrix-green" },
        { name: "HTML5", icon: "🌐", level: 98, glow: "text-primary" },
        { name: "CSS3", icon: "🎨", level: 92, glow: "text-tech-purple" },
        { name: "Angular", icon: "🅰️", level: 80, glow: "text-accent" },
        { name: "Sass", icon: "💄", level: 85, glow: "text-tech-cyan" }
      ]
    },
    {
      title: "Backend Development",
      icon: Code2,
      color: "text-accent",
      skills: [
        { name: "Node.js", icon: "🟢", level: 90, glow: "text-matrix-green" },
        { name: "Express.js", icon: "🚂", level: 88, glow: "text-primary" },
        { name: "PHP", icon: "🐘", level: 85, glow: "text-tech-purple" },
        { name: "Laravel", icon: "🎯", level: 82, glow: "text-accent" },
        { name: "Python", icon: "🐍", level: 75, glow: "text-tech-cyan" },
        { name: "C#", icon: "⚡", level: 80, glow: "text-primary" },
        { name: ".NET", icon: "🔷", level: 78, glow: "text-accent" },
        { name: "Java", icon: "☕", level: 70, glow: "text-matrix-green" }
      ]
    },
    {
      title: "Database & DevOps",
      icon: Database,
      color: "text-tech-cyan",
      skills: [
        { name: "MySQL", icon: "🗄️", level: 90, glow: "text-primary" },
        { name: "MongoDB", icon: "🍃", level: 85, glow: "text-matrix-green" },
        { name: "Git", icon: "📚", level: 95, glow: "text-accent" },
        { name: "Docker", icon: "🐳", level: 75, glow: "text-tech-cyan" },
        { name: "AWS", icon: "☁️", level: 70, glow: "text-tech-purple" },
        { name: "Kubernetes", icon: "⚙️", level: 65, glow: "text-primary" },
        { name: "WordPress", icon: "📝", level: 88, glow: "text-accent" },
        { name: "C++", icon: "🔧", level: 75, glow: "text-matrix-green" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-section-bg tech-grid relative overflow-hidden">
      {/* Floating Digital Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full hologram" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent/20 rotate-45 float" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-accent mb-6 hero-title">
            <Terminal className="inline-block w-12 h-12 mr-4 text-primary" />
            Technical Arsenal
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-tech-cyan mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mastering cutting-edge technologies to build{' '}
            <span className="text-primary font-semibold">scalable solutions</span> and{' '}
            <span className="text-accent font-semibold">innovative experiences</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="skill-card p-8 relative overflow-hidden">
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-card to-muted mb-4 ${category.color}`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
              </div>
              
              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="fade-in-digital group"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                        <span className="font-semibold text-foreground text-lg">{skill.name}</span>
                      </div>
                      <span className={`font-mono text-lg font-bold ${skill.glow}`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--tech-cyan)))`,
                            animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Glow effect on hover */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ 
                          boxShadow: `0 0 20px hsl(var(--primary) / 0.5)`,
                          width: `${skill.level}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Tech Pattern Overlay */}
              <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-primary/10 rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-r border-t border-accent/10 rounded-tr-3xl" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;