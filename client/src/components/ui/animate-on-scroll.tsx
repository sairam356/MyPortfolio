import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

type AnimateOnScrollProps = {
  children: ReactNode;
  threshold?: number;
  delay?: number;
};

const AnimateOnScroll = ({ 
  children, 
  threshold = 0.2,
  delay = 0.2 
}: AnimateOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    threshold 
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
