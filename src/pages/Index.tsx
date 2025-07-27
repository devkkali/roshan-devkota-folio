import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-muted py-8 text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground mb-4">
            &copy; 2024 Er. Roshan Devkota. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/roshan-devkota-6ab60414a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/devkkali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
