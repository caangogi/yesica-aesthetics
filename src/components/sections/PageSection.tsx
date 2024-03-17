import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
    children: React.ReactNode; 
    className?: string; 
  }
  
  export const Section: React.FC<SectionProps> = ({ children, className }) => {
  
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.2,
    });
  
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: -100 }} 
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? '-10vh' : '0'
        }}
        transition={{ duration: 0.5, delay: 0.2  }}
      >
       
       {children} 
   
      </motion.div>
    );
  };