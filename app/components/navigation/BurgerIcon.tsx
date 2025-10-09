
import { motion } from 'framer-motion';

const BurgerIcon = ({ isOpen }:{isOpen:boolean}) => {
  return (
    <motion.div
    animate={{x: isOpen ? 160 : 0}}
    transition={{ duration: 0.5 }}
    >

        <div className="w-8 h-6 relative">
    <motion.span
      className="absolute top-0 left-0 w-full h-0.5 bg-red-500"
      animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 11 : 0 }}
      transition={{ duration: 0.5 }}
    />
    <motion.span
      className="absolute top-2.5 left-0 w-full h-0.5 bg-red-500"
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.span
      className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
      animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -11 : 0 }}
      transition={{ duration: 0.5 }}
    />
  </div> 
    </motion.div>
   
  )
}

export default BurgerIcon