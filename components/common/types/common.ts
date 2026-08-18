import { Variants } from 'framer-motion'; 
export {itemVariants};

const itemVariants: Variants = {
  oculto: { 
    opacity: 0, 
    y: 30, 
    scale: 0.95,
    visibility: "hidden",
  },
  visible: (index: number) => ({ 
    opacity: 1, 
    y: 0, 
    scale: 1,
    visibility: "visible", 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      mass: 1,
      delay: index * 0.15 
    }
  })
};

export interface animateProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}


