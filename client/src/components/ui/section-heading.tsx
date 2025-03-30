import { motion } from "framer-motion";

type SectionHeadingProps = {
  number: string;
  title: string;
};

const SectionHeading = ({ number, title }: SectionHeadingProps) => {
  return (
    <motion.h2 
      className="text-3xl font-bold mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-accent font-mono">{number}.</span> {title}
    </motion.h2>
  );
};

export default SectionHeading;
