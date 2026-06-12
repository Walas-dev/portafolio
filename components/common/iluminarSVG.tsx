import { motion } from 'framer-motion';
import {Path} from '@/types/common'

export default function IluminarSVG({ pathDirection, ronda, delay, onComplete }: Path) {
  const coloresSolidos = ["#4b5563", "#FFFFFF", "#FD105E"];
  const indiceColor = Math.floor(ronda / 2);
  const colorSolido = coloresSolidos[indiceColor % coloresSolidos.length];

  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ boxShadow: "0 0 0px transparent" }}
    >
      <svg viewBox="0 0 640 512" className="w-12 h-12">
        <motion.path
          d={pathDirection}
          initial={{ fill: "#4b5563" }}
          animate={{ fill: colorSolido }}
          transition={{
            duration: 1,
            delay: delay,
            ease: "linear",
          }}
          onAnimationComplete={onComplete} 
        />
      </svg>
    </motion.div>
  );
}