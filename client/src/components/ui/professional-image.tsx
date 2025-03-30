import { motion } from 'framer-motion';

type ProfessionalImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const ProfessionalImage = ({ src, alt, className }: ProfessionalImageProps) => {
  return (
    <motion.div 
      className="relative w-full h-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img 
        src={src} 
        alt={alt} 
        className={className}
        loading="lazy"
        style={{ 
          objectFit: "cover",
          objectPosition: "center"
        }}
      />
    </motion.div>
  );
};

export default ProfessionalImage;
