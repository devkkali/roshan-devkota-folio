import { Code2, ExternalLink, Github, Layers, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Modern e-commerce solution with real-time inventory management, payment integration, and analytics dashboard",
    image: "/placeholder.svg",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "Task Management App",
    category: "Web App",
    description: "Collaborative task management tool with real-time updates, team collaboration, and progress tracking",
    image: "/placeholder.svg",
    tech: ["Vue.js", "Firebase", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "AI Chat Assistant",
    category: "AI/ML",
    description: "Intelligent chatbot using natural language processing for customer support automation",
    image: "/placeholder.svg",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    title: "Portfolio Builder",
    category: "Web App",
    description: "No-code portfolio builder with drag-and-drop interface and customizable templates",
    image: "/placeholder.svg",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    title: "Weather Dashboard",
    category: "API Integration",
    description: "Real-time weather monitoring with interactive maps and forecast analytics",
    image: "/placeholder.svg",
    tech: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  },
  {
    title: "Social Media Analytics",
    category: "Data Viz",
    description: "Analytics platform for social media metrics with beautiful data visualizations",
    image: "/placeholder.svg",
    tech: ["Angular", "D3.js", "Express", "MySQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 md:py-24 bg-gradient-to-b from-background via-background/95 to-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">projects.array[]</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Project Showcase
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A collection of my recent work and side projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="group border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary/90 text-primary-foreground border-0 shadow-lg">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Featured
                    </Badge>
                  </div>
                )}
                
                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="font-mono text-xs backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button
                    size="sm"
                    variant="default"
                    className="shadow-lg"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="shadow-lg"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-start justify-between gap-2">
                  <span>{project.title}</span>
                  <Code2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-primary flex items-center gap-1.5">
                    <span className="text-primary/60">&lt;</span>
                    <span>TECH_STACK</span>
                    <span className="text-primary/60">/&gt;</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, i) => (
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

              {/* Decorative bottom line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-all duration-300" />
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 font-mono group"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View More on GitHub
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
