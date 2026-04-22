import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Lógica interna de rotación (No necesita exportarse)
function RotatingGlobe() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1; 
      meshRef.current.rotation.x += delta * 0.05; 
    }
  });

  return (
    <group ref={meshRef}>
      <points>
        <icosahedronGeometry args={[2.5, 2]} />
        <pointsMaterial 
          color="#FBF6EE" 
          size={0.06} 
          sizeAttenuation={true} 
          transparent 
          opacity={0.8}
        />
      </points>
      <mesh>
        <icosahedronGeometry args={[2.5, 2]} />
        <meshBasicMaterial 
          color="#FBF6EE" 
          wireframe 
          transparent 
          opacity={0.2} 
        />
      </mesh>
    </group>
  );
}

function GlobalScene() {
const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
   <div className="relative w-full h-full min-h-75 rounded-3xl overflow-hidden bg-[#0F1115]">
      
      <div className="absolute inset-0 z-10 bg-[#FD105E]/50 backdrop-blur-sm rounded-3xl" />

      {isMounted && (
        <Canvas 
          camera={{ position: [0, 0, 6], fov: 50 }}
          gl={{ alpha: true }} 
          className="absolute inset-0 z-0"
        >
          <ambientLight intensity={0.5} />
          <RotatingGlobe />
        </Canvas>
      )}
      </div>
  );
}

export default function Global(){
  
  return(
      <div className='relative overflow-hidden bg-transparent rounded-3xl flex flex-col gap-3 items-start justify-center p-8 border border-white/10 shadow-2xl h-full min-h-100'>
        
        <div className="absolute inset-0 z-0">
            <GlobalScene />
        </div>


        <div className='relative z-20 text-start p-3 py-6 gap-6 flex flex-col mt-auto w-full'>
            <h5 className='font-extralight text-xl text-[#F2C6C2]/80 uppercase tracking-widest'>Geospatial_Sync</h5>
            <h3 className='text-4xl md:text-5xl font-black text-[#FBF6EE] leading-none tracking-tighter'>
            Global Remote Operations
            </h3> 
        </div>
            
        <div className='relative z-20 text-start p-3 py-6 gap-6 flex justify-between mt-auto w-full'>
            <div className='items-center justify-center flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" className='size-10' viewBox="0 0 640 640"><path fill='#fff' d="M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L369 320C402.8 290.1 447.3 272 496 272C524.6 272 551.6 278.2 576 289.4L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L321.4 544C310.2 519.6 304 492.6 304 464C304 447.4 306.1 431.3 310 416L288 416zM640 464C640 384.5 575.5 320 496 320C416.5 320 352 384.5 352 464C352 543.5 416.5 608 496 608C575.5 608 640 543.5 640 464zM496 384C504.8 384 512 391.2 512 400L512 448L544 448C552.8 448 560 455.2 560 464C560 472.8 552.8 480 544 480L496 480C487.2 480 480 472.8 480 464L480 400C480 391.2 487.2 384 496 384z"/></svg>
                <h5 className='text-[#F2C6C2]/80 font-extralight'>TZ_PRIMARY</h5>
                <h4 className='font-extrabold text-[#FBF6EE] '>GMT-6</h4>
            </div>
            <div className='items-center justify-center flex flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" className='size-10' viewBox="0 0 640 640"><path fill='#fff' d="M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"/></svg>
                <h5 className='text-[#F2C6C2]/80 font-extralight'>Last_base</h5>
                <h4 className='font-extrabold text-[#FBF6EE] '>LATAM</h4>
            </div>
        </div>

    </div>
  )
}