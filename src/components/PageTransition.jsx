import { motion } from 'framer-motion';

const PageTransition = ({ children, className }) => {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  );
};

export { PageTransition };
export default PageTransition;
