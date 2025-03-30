import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import ProjectCard from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Projects = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-light/10 via-dark to-dark/90 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 hidden md:block"
        style={{
          background: `radial-gradient(circle 300px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(20, 184, 166, 0.15), transparent 80%)`,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <SectionHeading number="04" title="Some Things I've Built" />
          
          <div className="flex items-center justify-center mt-8 mb-6">
            <div className="bg-accent/10 rounded-lg px-6 py-3 text-accent flex items-center shadow-accent/10 shadow-lg border border-accent/20">
              <Layers className="mr-2 h-5 w-5" />
              <span>A selection of my recent work and personal projects</span>
            </div>
          </div>
        </div>
        
        <AnimateOnScroll>
          {/* Projects Carousel */}
          <div className="relative mx-auto max-w-6xl">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full">
                      <ProjectCard 
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        github={project.github}
                        live={project.live}
                        delay={index * 0.05}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Custom carousel navigation */}
              <div className="flex justify-center mt-10 space-x-4">
                <CarouselPrevious className="relative static transform-none bg-dark-light/20 hover:bg-accent/20 border-accent/30 hover:border-accent text-accent h-12 w-12 rounded-full" />
                <CarouselNext className="relative static transform-none bg-dark-light/20 hover:bg-accent/20 border-accent/30 hover:border-accent text-accent h-12 w-12 rounded-full" />
              </div>
            </Carousel>
            
            {/* Decorative elements */}
            <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 h-32 w-32 rounded-full border border-accent/20 opacity-30 hidden lg:block"></div>
            <div className="absolute -right-4 md:-right-12 top-1/4 -translate-y-1/2 h-24 w-24 rounded-full border border-accent/20 opacity-30 hidden lg:block"></div>
          </div>
        </AnimateOnScroll>
        
        {/* View More Projects Button with enhanced design */}
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              className="relative overflow-hidden bg-dark/50 backdrop-blur-sm hover:bg-dark-light/10 text-accent border border-accent/50 hover:border-accent px-8 py-6 font-medium tracking-wide shadow-lg hover:shadow-accent/20 group"
            >
              <span className="relative z-10">View More Projects</span> 
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 w-0 group-hover:w-full bg-accent/10 transition-all duration-300 ease-out transform -skew-x-12"></div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Projects;
