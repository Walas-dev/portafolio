import React, { useRef } from 'react';
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
          color="#fcd34d" 
          size={0.06} 
          sizeAttenuation={true} 
          transparent 
          opacity={0.8}
        />
      </points>
      <mesh>
        <icosahedronGeometry args={[2.5, 2]} />
        <meshBasicMaterial 
          color="#f59e0b" 
          wireframe 
          transparent 
          opacity={0.2} 
        />
      </mesh>
    </group>
  );
}

// ESTO ES LO QUE EXPORTAMOS: El contenedor completo del mundo
export default function GlobalScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <RotatingGlobe />
    </Canvas>
  );
}