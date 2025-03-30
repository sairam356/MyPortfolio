import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Code, Server, Database, Laptop } from 'lucide-react';
import ProfessionalImage from './professional-image';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  delay?: number;
};

// Technology icon mapper
const getTechIcon = (tech: string) => {
  const lowerTech = tech.toLowerCase();
  if (lowerTech.includes('react') || lowerTech.includes('vue') || lowerTech.includes('angular') || lowerTech.includes('html')) {
    return <Code className="h-3.5 w-3.5" />;
  } else if (lowerTech.includes('node') || lowerTech.includes('express') || lowerTech.includes('java') || lowerTech.includes('spring')) {
    return <Server className="h-3.5 w-3.5" />;
  } else if (lowerTech.includes('sql') || lowerTech.includes('mongo') || lowerTech.includes('database')) {
    return <Database className="h-3.5 w-3.5" />;
  } else {
    return <Laptop className="h-3.5 w-3.5" />;
  }
};

// Technology color mapper
const getTechColor = (tech: string): string => {
  const lowerTech = tech.toLowerCase();
  
  if (lowerTech.includes('react')) return '#61DAFB';
  if (lowerTech.includes('typescript')) return '#3178C6';
  if (lowerTech.includes('javascript')) return '#F7DF1E';
  if (lowerTech.includes('node')) return '#339933';
  if (lowerTech.includes('spring')) return '#6DB33F';
  if (lowerTech.includes('java')) return '#007396';
  if (lowerTech.includes('mongo')) return '#47A248';
  if (lowerTech.includes('sql')) return '#336791';
  if (lowerTech.includes('aws')) return '#FF9900';
  if (lowerTech.includes('tailwind')) return '#06B6D4';
  
  // Default color if no match
  return '#94A3B8';
};

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  github,
  live,
  delay = 0
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="project-card relative overflow-hidden bg-gradient-to-br from-dark-light/30 to-dark/80 backdrop-blur-sm rounded-xl shadow-xl group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        border: '1px solid rgba(30, 30, 45, 0.5)',
      }}
    >
      {/* Border glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
        style={{
          boxShadow: '0 0 30px 2px rgba(20, 184, 166, 0.3)',
          borderRadius: 'inherit'
        }}
      />
      
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-accent to-teal-400 absolute top-0 left-0 z-10" />
      
      {/* Project Image with overlay */}
      <div className="relative overflow-hidden h-[200px]">
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent z-10 opacity-60" />
        <ProfessionalImage
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        
        {/* Action buttons */}
        <div 
          className="absolute bottom-4 right-4 flex space-x-3 z-20 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-10"
        >
          <motion.a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-dark/80 p-2.5 rounded-lg text-white/80 hover:text-accent border border-dark-light/30 hover:border-accent transition-colors hover:shadow-lg hover:shadow-accent/20"
            aria-label="View GitHub repository"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="h-5 w-5" />
          </motion.a>
          <motion.a 
            href={live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-dark/80 p-2.5 rounded-lg text-white/80 hover:text-accent border border-dark-light/30 hover:border-accent transition-colors hover:shadow-lg hover:shadow-accent/20"
            aria-label="View live project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaExternalLinkAlt className="h-4 w-4" />
          </motion.a>
        </div>
        
        {/* Project title overlay */}
        <div className="absolute top-5 left-5 z-20">
          <span className="inline-block px-3 py-1 text-xs bg-dark/80 text-accent rounded-full border border-accent/30">
            Featured Project
          </span>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        {/* Project title with gradient effect */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-gradient-primary transition-all duration-300">
          {title}
        </h3>
        
        {/* Project description with animated reveal */}
        <div className="relative overflow-hidden">
          <p className="text-gray-300 mb-5 text-sm leading-relaxed max-h-20 overflow-hidden">
            {description}
          </p>
          
          {/* Fade out effect for long descriptions */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-dark-light/30 to-transparent pointer-events-none" />
        </div>
        
        {/* Technologies with custom badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="px-3 py-1.5 flex items-center space-x-1.5 rounded-lg text-xs transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: `${getTechColor(tech)}20`,
                color: getTechColor(tech),
                border: `1px solid ${getTechColor(tech)}40`,
              }}
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated reveal line */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-teal-400"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default ProjectCard;
