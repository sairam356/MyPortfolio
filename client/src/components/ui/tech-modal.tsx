import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Tech type with color information
export type TechItem = {
  name: string;
  type: string;
  color: string;
  icon?: React.ReactNode;
};

type TechModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  technologies: TechItem[];
};

const TechModal = ({ isOpen, onClose, title, technologies }: TechModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Group technologies by type
  const groupedTech = technologies.reduce<Record<string, TechItem[]>>((acc, tech) => {
    if (!acc[tech.type]) {
      acc[tech.type] = [];
    }
    acc[tech.type].push(tech);
    return acc;
  }, {});
  
  // Sort types to ensure consistent display order
  const sortedTypes = Object.keys(groupedTech).sort();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  if (!mounted) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-dark-light/30 backdrop-blur-lg border border-dark-light/30 shadow-lg shadow-accent/5 rounded-xl p-0 sm:max-w-[600px]">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-dark/60 rounded-xl -z-10"></div>
        
        <DialogHeader className="p-6 border-b border-dark-light/20">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-white">
              <span className="mr-2">🛠️</span> {title}
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
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sortedTypes.map((type) => (
              <motion.div key={type} variants={itemVariants}>
                <div className="flex items-center mb-2">
                  <h3 className="text-accent font-bold text-sm uppercase tracking-wider">{type}</h3>
                  <div className="h-px flex-grow bg-dark-light/20 ml-3"></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {groupedTech[type].map((tech, i) => (
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
                      {tech.icon && (
                        <span className="mr-2.5 text-xl" style={{ color: tech.color }}>
                          {tech.icon}
                        </span>
                      )}
                      <span className="font-medium" style={{ color: tech.color }}>
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <div className="p-4 border-t border-dark-light/20 text-center">
          <Button variant="outline" onClick={onClose} className="border-accent/40 text-accent hover:border-accent hover:bg-accent/10">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TechModal;