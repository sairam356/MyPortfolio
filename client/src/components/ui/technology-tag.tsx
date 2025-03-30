import { useState } from 'react';
import { motion } from 'framer-motion';
import SkillEndorsement from './skill-endorsement';
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

type TechnologyTagProps = {
  name: string;
};

const TechnologyTag = ({ name }: TechnologyTagProps) => {
  const [isEndorsementOpen, setIsEndorsementOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();
  
  const openEndorsement = () => {
    setIsEndorsementOpen(true);
  };
  
  const closeEndorsement = () => {
    setIsEndorsementOpen(false);
    // Show a toast notification when the modal is closed after endorsement
    toast({
      title: "Skill Endorsed",
      description: `Thanks for endorsing ${name}!`,
      variant: "default",
    });
  };
  
  return (
    <>
      <motion.span 
        className="px-4 py-2 bg-dark rounded-md border border-accent/30 text-light/80 hover:text-accent transition-colors relative cursor-pointer group"
        whileHover={{ y: -3 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onClick={openEndorsement}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="mr-1">{name}</span>
        
        {/* Endorsement indicator */}
        <motion.span 
          className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 bg-accent text-dark h-5 w-5 flex items-center justify-center rounded-full text-xs border border-accent/50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <Sparkles className="h-3 w-3" />
        </motion.span>
        
        {/* Tooltip */}
        <motion.div 
          className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 px-3 py-1.5 bg-dark-light/80 backdrop-blur-sm text-white text-xs rounded-md border border-accent/20 whitespace-nowrap z-50"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
          transition={{ duration: 0.2 }}
        >
          Click to endorse this skill
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 border-x-8 border-x-transparent border-t-8 border-t-dark-light/80"></div>
        </motion.div>
      </motion.span>
      
      {/* Skill Endorsement Modal */}
      <SkillEndorsement 
        isOpen={isEndorsementOpen}
        onClose={closeEndorsement}
        skillName={name}
      />
    </>
  );
};

export default TechnologyTag;
