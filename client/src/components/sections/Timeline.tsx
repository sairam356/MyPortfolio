import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import { 
  BriefcaseBusiness, 
  Laptop, 
  CreditCard, 
  Code, 
  GraduationCap,
  ExternalLink,
  ChevronRight,
  Database,
  Server,
  Cloud,
  Layers,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

// Define the technologies used at each career position with color codes
const positionTechnologies = [
  // Position 1: Lead Technology Consultant
  [
    { name: "ReactJS", type: "frontend", color: "#61DAFB" },
    { name: "TypeScript", type: "language", color: "#3178C6" },
    { name: "NodeJS", type: "backend", color: "#339933" },
    { name: "Spring Boot", type: "backend", color: "#6DB33F" },
    { name: "MongoDB", type: "database", color: "#47A248" },
    { name: "Microservices", type: "architecture", color: "#FF6B6B" },
  ],
  // Position 2: Full Stack Developer (Oracle)
  [
    { name: "NodeJS", type: "backend", color: "#339933" },
    { name: "Jira", type: "tool", color: "#0052CC" },
    { name: "Java", type: "language", color: "#007396" },
    { name: "Oracle", type: "database", color: "#F80000" },
    { name: "Hibernate", type: "framework", color: "#59666C" },
  ],
  // Position 3: Full Stack Developer (Volante)
  [
    { name: "ReactJS", type: "frontend", color: "#61DAFB" },
    { name: "AWS", type: "cloud", color: "#FF9900" },
    { name: "NodeJS", type: "backend", color: "#339933" },
    { name: "Spring", type: "framework", color: "#6DB33F" },
    { name: "Kafka", type: "messaging", color: "#231F20" },
  ],
  // Position 4: Software Engineer
  [
    { name: "ReactJS", type: "frontend", color: "#61DAFB" },
    { name: "Java", type: "language", color: "#007396" },
    { name: "Git", type: "tool", color: "#F05032" },
    { name: "Spring Boot", type: "framework", color: "#6DB33F" },
    { name: "MySQL", type: "database", color: "#4479A1" },
  ],
  // Position 5: Technical Trainer
  [
    { name: "ReactJS", type: "frontend", color: "#61DAFB" },
    { name: "Java", type: "language", color: "#007396" },
    { name: "HTML", type: "frontend", color: "#E34F26" },
    { name: "CSS", type: "frontend", color: "#1572B6" },
    { name: "JavaScript", type: "language", color: "#F7DF1E" },
  ],
];

// Company logos with more professional design
const companyLogos = [
  // Emirates NBD (red W-like logo)
  <div key="enbd" className="h-14 w-14 bg-gradient-to-br from-red-600 to-red-800 rounded-md flex items-center justify-center shadow-lg transform rotate-1 ring-2 ring-red-400/50">
    <span className="text-white font-bold text-xl drop-shadow-md">W</span>
  </div>,
  // Oracle
  <div key="oracle" className="h-12 w-12 bg-gradient-to-br from-red-500 to-red-700 rounded-md flex items-center justify-center shadow-lg transform -rotate-1 ring-2 ring-red-400/50">
    <span className="text-white font-bold text-xs tracking-tight">ORACLE</span>
  </div>,
  // Mastercard
  <div key="mastercard" className="h-12 w-12 relative">
    <div className="absolute inset-0 bg-yellow-500 rounded-full shadow-lg"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-6 w-6 bg-red-500 rounded-full opacity-80 -ml-1"></div>
      <div className="h-6 w-6 bg-orange-500 rounded-full opacity-80 -mr-1"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white font-bold text-xs z-10">MC</span>
    </div>
  </div>,
  // I Base IT
  <div key="ibaseit" className="h-12 w-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md flex items-center justify-center shadow-lg transform rotate-1 ring-2 ring-blue-400/50">
    <span className="text-white font-bold text-xs">iBase</span>
  </div>,
  // NIIT
  <div key="niit" className="h-12 w-12 bg-gradient-to-br from-green-600 to-green-800 rounded-md flex items-center justify-center shadow-lg transform -rotate-1 ring-2 ring-green-400/50">
    <span className="text-white font-bold text-sm">NIIT</span>
  </div>,
];

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  company: string;
  icon?: string;
}

interface TimelineProps {
  timelineData: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ timelineData }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [animatedText, setAnimatedText] = useState(true);
  const [selectedTech, setSelectedTech] = useState<number | null>(null);
  const [techModalOpen, setTechModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation for background text
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText(prev => !prev);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const getIconForType = (type: string) => {
    switch(type) {
      case "frontend": return <Code size={14} />;
      case "backend": return <Server size={14} />;
      case "language": return <Code size={14} />;
      case "database": return <Database size={14} />;
      case "cloud": return <Cloud size={14} />;
      case "architecture": return <Layers size={14} />;
      case "framework": return <Layers size={14} />;
      case "tool": return <Laptop size={14} />;
      case "messaging": return <Server size={14} />;
      default: return <Code size={14} />;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-dark via-dark/90 to-dark-light/5 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
          backgroundSize: '100px 100px',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading number="05" title="Career Journey" />
        
        <div className="flex items-center justify-center mb-14">
          <div className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur-sm rounded-lg px-6 py-3 text-accent flex items-center shadow-accent/20 shadow-lg border border-accent/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path><path d="m15 5 3 3"></path></svg>
            <span>Visual progression of my professional career path</span>
          </div>
        </div>
        
        {/* Animated background text with glow */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none"
          initial={{ opacity: 0.05 }}
          animate={{ 
            opacity: [0.05, 0.08, 0.05],
            scale: animatedText ? 1 : 1.03
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        >
          <h2 className="text-7xl md:text-9xl font-black text-white tracking-widest text-center opacity-10 line-clamp-1 overflow-hidden text-stroke-accent">
            CLICK ANYWHERE TO EXPLORE
          </h2>
        </motion.div>
        
        {/* Spotlight effect that follows cursor */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50 hidden md:block"
          style={{
            background: `radial-gradient(circle 150px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(20, 184, 166, 0.15), transparent 80%)`,
          }}
        />
        
        <div className="mt-20 relative">
          {/* Timeline Vertical Line with animated glow */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-accent via-accent/60 to-accent/30 rounded-full">
            <div className="absolute inset-0 animate-pulse bg-accent/30 blur-sm"></div>
          </div>
          
          {timelineData.map((item, index) => (
            <AnimateOnScroll 
              key={item.id}
              threshold={0.1} 
              delay={index * 0.1}
            >
              <motion.div 
                className={cn(
                  "mb-36 lg:mb-44 relative",
                  "flex md:items-center md:flex-row flex-col",
                )}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Position on timeline - Year label */}
                <div className={cn(
                  "absolute left-1/2 transform -translate-x-1/2 top-1 -mt-8 bg-gradient-to-r from-accent/80 to-accent px-4 py-1.5 rounded-full z-20 shadow-lg shadow-accent/20",
                  "hidden md:flex items-center justify-center text-dark font-bold text-xs tracking-wider"
                )}>
                  {item.year.split(" - ")[0]}
                  <ChevronRight className="h-3 w-3 ml-1" />
                  {item.year.split(" - ")[1] || "Present"}
                </div>
                
                {/* Content Card */}
                <motion.div 
                  className={cn(
                    "w-full md:w-[500px] p-0 rounded-xl overflow-hidden backdrop-blur-sm shadow-2xl transition-all duration-500",
                    "md:absolute hover:z-30",
                    "border",
                    hoveredCard === index 
                      ? "border-accent/40 shadow-accent/30" 
                      : "border-dark-light/20 shadow-dark-light/5",
                    "group",
                    index % 2 === 0 
                      ? "md:left-[50%] md:ml-12" 
                      : "md:right-[50%] md:mr-12",
                  )}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? -1 : 1,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    background: `linear-gradient(to bottom right, rgba(25, 25, 35, 0.9), rgba(15, 15, 25, 0.95))`,
                  }}
                >
                  {/* Card top accent bar */}
                  <div 
                    className={`h-1.5 w-full bg-gradient-to-r ${index % 2 === 0 ? 'from-accent to-purple-500' : 'from-cyan-500 to-accent'}`}
                  />
                  
                  <div className="p-7 relative">
                    {/* Date badge - mobile only */}
                    <div className="md:hidden mb-3 inline-block px-4 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                      {item.year}
                    </div>
                    
                    {/* Company logo with highlighting glow on hover */}
                    <div className={cn(
                      "absolute top-5 z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-0",
                      index % 2 === 0 ? "right-6" : "right-6 md:left-6"
                    )}>
                      <div className="relative">
                        {companyLogos[index]}
                        <div className={cn(
                          "absolute inset-0 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500",
                          index === 0 ? "bg-red-500" : 
                          index === 1 ? "bg-red-500" : 
                          index === 2 ? "bg-yellow-500" : 
                          index === 3 ? "bg-blue-500" : "bg-green-500"
                        )}></div>
                      </div>
                    </div>
                    
                    {/* Title with gradient text */}
                    <h3 className="font-bold text-2xl mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
                        index % 2 === 0 ? 'from-white via-accent to-accent/80' : 'from-white via-cyan-400 to-accent'
                      }`}>{item.title}</span>
                    </h3>
                    
                    {/* Company name */}
                    <div className="text-accent font-medium mb-3 group-hover:translate-x-1 transition-transform duration-300">{item.company}</div>
                    
                    {/* Date - desktop only */}
                    <div className="hidden md:block text-gray-400 text-sm mb-5 italic">
                      {item.year}
                    </div>
                    
                    {/* Description with better contrast */}
                    <p className="text-gray-200 mb-7 leading-relaxed group-hover:translate-x-1 transition-transform duration-300">{item.description}</p>
                    
                    {/* Technologies used - Compact display with View More */}
                    <div className="mb-5 group-hover:translate-y-[-3px] transition-transform duration-300">
                      <div className="flex items-center mb-2">
                        <div className="h-px flex-grow bg-dark-light/20"></div>
                        <span className="px-2 text-xs text-gray-400">TECHNOLOGIES</span>
                        <div className="h-px flex-grow bg-dark-light/20"></div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5">
                        {/* Show only first 3 technologies */}
                        {positionTechnologies[index].slice(0, 3).map((tech, i) => (
                          <div 
                            key={i} 
                            className="flex items-center bg-dark-light/10 px-2.5 py-1.5 rounded-md text-xs border transition-all duration-300 hover:scale-110 hover:border-accent/30 hover:shadow-sm hover:shadow-accent/20 hover:z-10"
                            style={{
                              borderColor: `${tech.color}30`,
                              color: tech.color,
                            }}
                          >
                            <span className="mr-1.5">{getIconForType(tech.type)}</span>
                            <span>{tech.name}</span>
                          </div>
                        ))}
                        
                        {/* Show "+" badge with count if there are more technologies */}
                        {positionTechnologies[index].length > 3 && (
                          <div
                            className="flex items-center bg-accent/10 px-2.5 py-1.5 rounded-md text-xs border border-accent/30 text-accent transition-all duration-300 hover:scale-110 hover:bg-accent/20 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedTech(index);
                              setTechModalOpen(true);
                            }}
                          >
                            <span>+{positionTechnologies[index].length - 3}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Explore button with animation */}
                    <motion.div 
                      className="mt-2 relative"
                      whileHover={{ scale: 1.05 }}
                      initial={{ y: 0 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        className={cn(
                          "relative overflow-hidden text-white border-accent/40 bg-dark/50 shadow-inner shadow-accent/5 z-10 group-hover:border-accent group-hover:text-accent",
                          "hover:bg-gradient-to-r hover:from-accent/20 hover:to-accent/10"
                        )}
                      >
                        <span className="relative z-10 font-medium tracking-wider">EXPLORE</span>
                        <ExternalLink className="ml-2 h-3.5 w-3.5 relative z-10" />
                        <div className="absolute inset-0 w-0 group-hover:w-full bg-dark/20 transition-all duration-700 ease-out transform -skew-x-12"></div>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Center Node with pulsing effect */}
                <div className="mx-auto md:mx-0 md:absolute left-1/2 top-2 transform -translate-x-1/2 z-20">
                  <div className="relative h-7 w-7 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full bg-accent/50 animate-pulse"></div>
                    <div className="h-5 w-5 rounded-full border-4 border-dark bg-accent relative z-10"></div>
                  </div>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
      
      {/* Decorative overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none z-0"></div>
      
      {/* Technologies Modal */}
      <Dialog open={techModalOpen} onOpenChange={setTechModalOpen}>
        <DialogContent className="bg-dark-light/30 backdrop-blur-lg border border-dark-light/30 shadow-lg shadow-accent/5 rounded-xl p-0 sm:max-w-[600px]">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-dark/60 rounded-xl -z-10"></div>
          
          <DialogHeader className="p-6 border-b border-dark-light/20">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-white">
                <span className="mr-2">🛠️</span> 
                {selectedTech !== null && timelineData[selectedTech] ? 
                  `${timelineData[selectedTech].title} - Technologies` : 
                  "Technologies"
                }
              </DialogTitle>
              <DialogClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-dark-light/30">
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </div>
            <DialogDescription className="text-gray-400 mt-1">
              Technologies and tools used during this position
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {selectedTech !== null && (
                <>
                  {/* Group technologies by type */}
                  {Array.from(new Set(positionTechnologies[selectedTech].map(tech => tech.type))).map((type) => (
                    <motion.div 
                      key={type}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="flex items-center mb-3">
                        <h3 className="text-accent font-bold text-sm uppercase tracking-wider">{type}</h3>
                        <div className="h-px flex-grow bg-dark-light/20 ml-3"></div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {positionTechnologies[selectedTech]
                          .filter(tech => tech.type === type)
                          .map((tech, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center px-3 py-2.5 bg-dark/60 rounded-lg border hover:scale-105 transition-all duration-300"
                              style={{
                                borderColor: `${tech.color}40`,
                              }}
                              whileHover={{
                                backgroundColor: `rgba(0, 0, 0, 0.7)`,
                                boxShadow: `0 0 15px ${tech.color}20`
                              }}
                            >
                              <span className="mr-2.5 text-xl" style={{ color: tech.color }}>
                                {getIconForType(tech.type)}
                              </span>
                              <span className="font-medium" style={{ color: tech.color }}>
                                {tech.name}
                              </span>
                            </motion.div>
                          ))}
                      </div>
                    </motion.div>
                  ))}
                </>
              )}
            </motion.div>
          </div>
          
          <div className="p-4 border-t border-dark-light/20 text-center">
            <Button 
              variant="outline" 
              onClick={() => setTechModalOpen(false)} 
              className="border-accent/40 text-accent hover:border-accent hover:bg-accent/10"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Timeline;