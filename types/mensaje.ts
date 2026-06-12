import { MotionValue } from 'framer-motion';
export {palabras};

export interface FilaTextoProps {
  texto: string;
  direccion: 'izq' | 'der';
  progresoScroll: MotionValue<number>;
  velocidad?: number;
  indice: number;    
  totalFilas: number;
}

const palabras = [
    'Ingenio',
    'Vanguardia',
    'Escalabilidad',
    'Solución',
    'Optimización', 
    'Diseño Creativo', 
    'Ingeniería de Alto Impacto'
];