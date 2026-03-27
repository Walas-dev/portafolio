import { motion, Transition } from 'framer-motion';

type EstadoPosible = 'disponible para proyectos' | 'En un proyecto' | string;

interface StatusProps {
  estado: EstadoPosible;
}

const StatusDot = ({ estado }: StatusProps) => {
  const statusStyles: Record<string, string> = {
    'disponible para proyectos': 'bg-green-500',
    'En un proyecto': 'bg-yellow-500',
    'default': 'bg-rose-500'
  };

  const colorClass = statusStyles[estado] || statusStyles['default'];

  const DURACION = 2; 
  const ESCALA_ONDA = 1.5;

  const masterTransition: Transition = {
    duration: DURACION,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className="relative flex items-center justify-center size-5">
      
      

      <motion.div
        animate={{
          scale: [1, ESCALA_ONDA],
          opacity: [0.8, 0],
        }}
        transition={masterTransition}
        className={`absolute size-4 rounded-full ${colorClass} blur-[2px]`}
      />

      <motion.div
        animate={{
          scale: [1, ESCALA_ONDA],
          opacity: [0.8, 0],
        }}
        transition={masterTransition}
        className={`absolute size-4 rounded-full ${colorClass} blur-[2px]`}
      />

      <motion.div
        animate={{
          scale: [0.8, 1.2, 1, 1.2, 0.8], 
        }}
        transition={masterTransition}
        className={`relative size-3.5 rounded-full ${colorClass}  border-[2.5px] border-white dark:border-slate-950 shadow-xl z-10`}
      />
    </div>
  );
};

export default StatusDot;