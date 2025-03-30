import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';
import SkillEndorsement from './skill-endorsement';
import { useToast } from "@/hooks/use-toast";

type SkillProgressProps = {
  name: string;
  percentage: number;
  delay?: number;
};

const SkillProgress = ({ name, percentage, delay = 0 }: SkillProgressProps) => {
  const [isEndorsementOpen, setIsEndorsementOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true, amount: 0.5 });
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
  
  // Determine level badge based on percentage
  const getSkillLevel = (percent: number) => {
    if (percent >= 90) return { label: "Expert", icon: Sparkles, color: "text-purple-400" };
    if (percent >= 75) return { label: "Advanced", icon: Award, color: "text-yellow-400" };
    if (percent >= 60) return { label: "Intermediate", icon: Award, color: "text-green-400" };
    return { label: "Beginner", icon: Award, color: "text-blue-400" };
  };
  
  const skillLevel = getSkillLevel(percentage);
  const LevelIcon = skillLevel.icon;

  return (
    <div 
      className="skill-item relative" 
      ref={progressRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <span className="font-semibold">{name}</span>
          <div className={`flex items-center ml-2 ${skillLevel.color}`}>
            <LevelIcon className="h-4 w-4 mr-1" />
            <span className="text-xs">{skillLevel.label}</span>
          </div>
        </div>
        <span className="text-accent">{percentage}%</span>
      </div>
      
      {/* Progress bar with endorsement button */}
      <div 
        className="h-2 bg-dark rounded-full overflow-hidden relative cursor-pointer group"
        onClick={openEndorsement}
      >
        <motion.div 
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay }}
        ></motion.div>
        
        {/* Endorsement button that appears on hover */}
        <motion.div
          className="absolute right-0 top-0 transform translate-y-[-100%] mt-[-8px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            className="bg-dark-light/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md border border-accent/20 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="h-3 w-3 mr-1 text-accent" />
            Endorse skill
          </motion.button>
        </motion.div>
      </div>
      
      {/* Endorsement Modal */}
      <SkillEndorsement 
        isOpen={isEndorsementOpen}
        onClose={closeEndorsement}
        skillName={name}
      />
    </div>
  );
};

export default SkillProgress;
