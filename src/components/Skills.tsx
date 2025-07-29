import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Cpu, Globe, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Mastery",
      icon: Globe,
      color: "text-primary",
      bgGlow: "from-primary/20 to-accent/10",
      skills: [
        { name: "React", icon: "⚛️", level: "Expert", glow: "text-tech-cyan" },
        { name: "Next.js", icon: "▲", level: "Advanced", glow: "text-primary" },
        { name: "TypeScript", icon: "📘", level: "Advanced", glow: "text-accent" },
        { name: "JavaScript", icon: "🟨", level: "Expert", glow: "text-matrix-green" },
        { name: "HTML5", icon: "🌐", level: "Expert", glow: "text-primary" },
        { name: "CSS3", icon: "🎨", level: "Advanced", glow: "text-tech-purple" },
        { name: "Angular", icon: "🅰️", level: "Intermediate", glow: "text-accent" },
        { name: "Sass", icon: "💄", level: "Advanced", glow: "text-tech-cyan" }
      ]
    },
    {
      title: "Backend Engineering",
      icon: Code2,
      color: "text-accent",
      bgGlow: "from-accent/20 to-tech-cyan/10",
      skills: [
        { name: "Node.js", icon: "🟢", level: "Advanced", glow: "text-matrix-green" },
        { name: "Express.js", icon: "🚂", level: "Advanced", glow: "text-primary" },
        { name: "PHP", icon: "🐘", level: "Advanced", glow: "text-tech-purple" },
        { name: "Laravel", icon: "🎯", level: "Intermediate", glow: "text-accent" },
        { name: "Python", icon: "🐍", level: "Intermediate", glow: "text-tech-cyan" },
        { name: "C#", icon: "⚡", level: "Intermediate", glow: "text-primary" },
        { name: ".NET", icon: "🔷", level: "Intermediate", glow: "text-accent" },
        { name: "Java", icon: "☕", level: "Intermediate", glow: "text-matrix-green" }
      ]
    },
    {
      title: "DevOps & Database",
      icon: Database,
      color: "text-tech-cyan",
      bgGlow: "from-tech-cyan/20 to-primary/10",
      skills: [
        { name: "MySQL", icon: "🗄️", level: "Advanced", glow: "text-primary" },
        { name: "MongoDB", icon: "🍃", level: "Advanced", glow: "text-matrix-green" },
        { name: "Git", icon: "📚", level: "Expert", glow: "text-accent" },
        { name: "Docker", icon: "🐳", level: "Intermediate", glow: "text-tech-cyan" },
        { name: "AWS", icon: "☁️", level: "Intermediate", glow: "text-tech-purple" },
        { name: "Kubernetes", icon: "⚙️", level: "Beginner", glow: "text-primary" },
        { name: "WordPress", icon: "📝", level: "Advanced", glow: "text-accent" },
        { name: "C++", icon: "🔧", level: "Intermediate", glow: "text-matrix-green" }
      ]
    }
  ];

  const levelColors = {
    "Expert": "bg-matrix-green/20 text-matrix-green border-matrix-green/30",
    "Advanced": "bg-primary/20 text-primary border-primary/30",
    "Intermediate": "bg-accent/20 text-accent border-accent/30",
    "Beginner": "bg-tech-cyan/20 text-tech-cyan border-tech-cyan/30"
  };

  return (
    <section id="skills" className="py-20 bg-section-bg tech-grid relative overflow-hidden">
      {/* Enhanced Digital Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full hologram" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent/20 rotate-45 float" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-tech-cyan/20 rounded-lg rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border border-tech-purple/20 rounded-full float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-accent mb-6 hero-title">
            <Terminal className="inline-block w-12 h-12 mr-4 text-primary" />
            Tech Stack Matrix
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-tech-cyan mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Architecting the future with{' '}
            <span className="text-primary font-semibold">cutting-edge technologies</span> and{' '}
            <span className="text-accent font-semibold">innovative solutions</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="fade-in-digital"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <Card className="skill-card h-full relative overflow-hidden group">
                {/* Category Header with Glow */}
                <div className={`p-4 md:p-6 bg-gradient-to-br ${category.bgGlow} border-b border-muted/20 relative`}>
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-br from-card to-muted ${category.color} shadow-lg`}>
                      <category.icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {category.title}
                      </h3>
                      <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-primary to-accent mt-2" />
                    </div>
                  </div>
                  
                  {/* Header decoration */}
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent/30 rounded-bl-lg" />
                </div>
                
                {/* Skills Grid */}
                <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group/skill p-3 md:p-4 rounded-lg bg-gradient-to-r from-muted/10 to-muted/5 border border-muted/20 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 md:gap-3">
                          <span className="text-lg md:text-2xl group-hover/skill:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </span>
                          <div>
                            <span className="font-semibold text-foreground block text-sm md:text-base">
                              {skill.name}
                            </span>
                            <div className="flex items-center gap-2 mt-1">
                              <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${skill.glow} animate-pulse`} />
                              <span className="text-xs text-muted-foreground font-mono">
                                ACTIVE
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Skill Level Badge */}
                        <span className={`px-2 py-1 rounded-full text-xs font-bold border ${levelColors[skill.level]}`}>
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Skill Progress Visualization */}
                      <div className="mt-2 md:mt-3 flex gap-1">
                        {[1,2,3,4,5].map((dot, i) => (
                          <div 
                            key={i}
                            className={`w-1.5 h-1 md:w-2 md:h-1 rounded-full transition-all duration-300 ${
                              i < (skill.level === 'Expert' ? 5 : skill.level === 'Advanced' ? 4 : skill.level === 'Intermediate' ? 3 : 2)
                                ? `bg-gradient-to-r from-primary to-accent`
                                : 'bg-muted/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Card Enhancement Effects */}
                <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-primary/10 rounded-bl-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-r border-t border-accent/10 rounded-tr-3xl" />
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;