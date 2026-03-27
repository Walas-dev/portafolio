import { motion} from 'framer-motion';
import React from 'react'

interface Path{
    index:number;
    pathDirection:string;
    delay:number;
    color:string;
    ronda:number;
    onComplete: ()=>void;
}




export default function iluminarSVG({ pathDirection, ronda}:Path) {

    const coloresSolidos = ["#ef4444", "#3b82f6", "#10b981"];
  const esArcoiris = ronda % 2 === 0;

  const indiceColor = Math.floor(ronda / 2);
  const colorSolido = coloresSolidos[indiceColor % coloresSolidos.length];

  const fillKeyframes = esArcoiris
    ? ["#4b5563", "#ef4444", "#3b82f6", "#10b981", "#4b5563"]
    : ["#4b5563", colorSolido, "#4b5563"];


  return (
    <motion.div
      className="flex justify-center items-center"
      initial={{ boxShadow: "0 0 0px transparent" }}
      
      transition={{
        duration: 5,
        times: [0, 0.25, 0.75, 1],
        ease: "linear",
      }}
    >
      <svg viewBox="0 0 640 512" className="w-12 h-12">
        <motion.path
          d={pathDirection}
          initial={{ fill: "#4b5563" }}
          animate={{ fill: fillKeyframes }}
          transition={{
            duration: 5,
            times: [0, 0.25, 0.75, 1],
            ease: "linear",
          }}
        />
      </svg>
    </motion.div>
  );

};
