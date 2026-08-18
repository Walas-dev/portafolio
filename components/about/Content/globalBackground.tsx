'use client'

import createGlobe from 'cobe'
import { useEffect, useRef } from 'react'

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    let phi = 0
    let animationFrameId: number

    const dpr =
      typeof window !== 'undefined' &&
      window.devicePixelRatio
        ? Math.min(window.devicePixelRatio, 2)
        : 1

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: dpr,
      width: 400 * dpr,
      height: 400 * dpr,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 5000,
      mapBrightness: 3,
      baseColor: [0.47, 0.72, 0.57],
      markerColor: [0.67, 0.82, 0.71],
      glowColor: [0.47, 0.72, 0.57],
    })

    const animate = () => {
      phi += 0.0015

      globe.update({
        phi,
      })

      animationFrameId =
        requestAnimationFrame(animate)
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animate()
          } else {
            cancelAnimationFrame(
              animationFrameId
            )
          }
        },
        {
          threshold: 0,
        }
      )

    observer.observe(canvasRef.current)

    return () => {
      observer.disconnect()

      cancelAnimationFrame(
        animationFrameId
      )

      globe.destroy()
    }
  }, [])

  return (
    <div className=" mx-auto aspect-square w-full max-w-100 " >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}