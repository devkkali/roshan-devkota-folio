import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "⚛️", level: 95 },
        { name: "Next.js", icon: "▲", level: 90 },
        { name: "TypeScript", icon: "📘", level: 88 },
        { name: "JavaScript", icon: "🟨", level: 95 },
        { name: "HTML5", icon: "🌐", level: 98 },
        { name: "CSS3", icon: "🎨", level: 92 },
        { name: "Angular", icon: "🅰️", level: 80 },
        { name: "Sass", icon: "💄", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢", level: 90 },
        { name: "Express.js", icon: "🚂", level: 88 },
        { name: "PHP", icon: "🐘", level: 85 },
        { name: "Laravel", icon: "🎯", level: 82 },
        { name: "Python", icon: "🐍", level: 75 },
        { name: "C#", icon: "⚡", level: 80 },
        { name: ".NET", icon: "🔷", level: 78 },
        { name: "Java", icon: "☕", level: 70 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", icon: "🗄️", level: 90 },
        { name: "MongoDB", icon: "🍃", level: 85 },
        { name: "Git", icon: "📚", level: 95 },
        { name: "Docker", icon: "🐳", level: 75 },
        { name: "AWS", icon: "☁️", level: 70 },
        { name: "Kubernetes", icon: "⚙️", level: 65 },
        { name: "WordPress", icon: "📝", level: 88 },
        { name: "C++", icon: "🔧", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning frontend, backend, and modern development tools
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="skill-card p-6">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="fade-in"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-accent font-mono text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.3) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;