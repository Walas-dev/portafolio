import { Variants } from 'framer-motion';
export {title, enlace, animateContainer, animateTitle, animateP, animateB}

const title = [
    {id:1, t:'Construyamos el futuro'},
    { id:2, t:'de tu empresa.'}
]

const enlace = [
  {
    id: 1, 
    a: 'Hablemos por WhatsApp', 
    ref: 'https://wa.me/584248090931?text=Hola,%20me%20interesa%20tu%20perfil', 
  },
  {
    id: 2, 
    a: 'Agendar una Cita', 
    ref:'https://cal.com/walabalaz-5uwyuf/15min',
  }
]

const animateContainer: Variants = {
  oculto: { opacity: 0, y: 40, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
  }
}

const animateTitle: Variants = {
  oculto: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, delay: 0.4 }
  }
}

const animateP: Variants = {
  oculto: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, delay: 0.6 } }
}

const animateB: Variants = {
  oculto: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "tween", stiffness: 200, damping: 15, delay:0.8, ease: "easeInOut"} 
  }
};