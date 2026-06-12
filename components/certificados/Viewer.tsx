'use client'
import {useEffect} from 'react'
import Image from 'next/image'
import {motion, AnimatePresence} from "framer-motion"
import {ModalProps} from '@/types/certificados'

export default function Viewer({isOpen, onClose, src}:ModalProps) {
  useEffect(()=>{
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-zoom-out"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-200 z-101 cursor-pointer"
            aria-label="Cerrar vista"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()} 
            className="relative w-[90vw] max-w-5xl h-[85vh] flex items-center justify-center"
          >
            <Image
              src={src}
              alt='Vista en grande'
              width={1600} 
              height={1200}
              className="w-auto h-auto max-w-[95vw] max-h-[85vh] object-contain rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/20 select-none bg-[#0F0F17]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
