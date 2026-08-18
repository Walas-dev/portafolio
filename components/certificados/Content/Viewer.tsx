'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ModalProps } from '@/components/certificados/types/certificados'

export default function Viewer({
  isOpen,
  onClose,
  src,
}: ModalProps) {

  useEffect(() => {

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }

  }, [isOpen])

  return (
    <AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className=" fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-mahogany/90 p-4 backdrop-blur-xl"
        >

          <button
            onClick={onClose}
            className=" absolute right-6 top-6 z-50 rounded-full border border-cream/10 bg-cream/10 p-2.5 text-cream/70 transition-all 
            duration-200 hover:bg-teal/20 hover:text-cream cursor-pointer"
            aria-label="Cerrar vista"
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24" >
              <path stroke="currentColor" strokeWidth={2} strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>


          <motion.div
            initial={{
              scale: 0.92,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.92,
              opacity: 0,
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 350,
            }}

            onClick={(e) => e.stopPropagation()}
            className=" relative flex h-[85vh] w-[90vw] max-w-5xl items-center justify-center "
          >

            <Image
              src={src} alt="Vista en grande" width={1600} height={1200}
              className=" max-h-[85vh] max-w-[95vw] h-auto w-auto select-none object-contain
              rounded-xl border border-cream/10 bg-espresso shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
            />

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}