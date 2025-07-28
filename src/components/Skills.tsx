import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Cpu, Globe, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-primary",
        skills: [
        { name: "React", icon: "⚛️", glow: "text-tech-cyan" },
        { name: "Next.js", icon: "▲", glow: "text-primary" },
        { name: "TypeScript", icon: "📘", glow: "text-accent" },
        { name: "JavaScript", icon: "🟨", glow: "text-matrix-green" },
        { name: "HTML5", icon: "🌐", glow: "text-primary" },
        { name: "CSS3", icon: "🎨", glow: "text-tech-purple" },
        { name: "Angular", icon: "🅰️", glow: "text-accent" },
        { name: "Sass", icon: "💄", glow: "text-tech-cyan" }
      ]
    },
    {
      title: "Backend Development",
      icon: Code2,
      color: "text-accent",
        skills: [
        { name: "Node.js", icon: "🟢", glow: "text-matrix-green" },
        { name: "Express.js", icon: "🚂", glow: "text-primary" },
        { name: "PHP", icon: "🐘", glow: "text-tech-purple" },
        { name: "Laravel", icon: "🎯", glow: "text-accent" },
        { name: "Python", icon: "🐍", glow: "text-tech-cyan" },
        { name: "C#", icon: "⚡", glow: "text-primary" },
        { name: ".NET", icon: "🔷", glow: "text-accent" },
        { name: "Java", icon: "☕", glow: "text-matrix-green" }
      ]
    },
    {
      title: "Database & DevOps",
      icon: Database,
      color: "text-tech-cyan",
        skills: [
        { name: "MySQL", icon: "🗄️", glow: "text-primary" },
        { name: "MongoDB", icon: "🍃", glow: "text-matrix-green" },
        { name: "Git", icon: "📚", glow: "text-accent" },
        { name: "Docker", icon: "🐳", glow: "text-tech-cyan" },
        { name: "AWS", icon: "☁️", glow: "text-tech-purple" },
        { name: "Kubernetes", icon: "⚙️", glow: "text-primary" },
        { name: "WordPress", icon: "📝", glow: "text-accent" },
        { name: "C++", icon: "🔧", glow: "text-matrix-green" }
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
                    className="fade-in-digital group p-4 rounded-lg bg-gradient-to-r from-muted/20 to-muted/10 border border-muted/30 hover:border-primary/30 transition-all duration-300"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                      <div className="flex-1">
                        <span className="font-semibold text-foreground text-lg block">{skill.name}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <div className={`w-2 h-2 rounded-full ${skill.glow} animate-pulse`} />
                          <span className="text-xs text-muted-foreground font-mono">LOADED</span>
                        </div>
                      </div>
                      <span className={`font-mono text-sm font-bold ${skill.glow}`}>
                        ✓
                      </span>
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