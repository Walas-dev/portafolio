'use client'
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Sphere } from '@react-three/drei';

// 1. El componente de la esfera (Adaptado a tonos azules/blancos)
const WireframeGlobe = () => {
  const globeRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    globeRef.current.rotation.y = elapsedTime * 0.03;
    globeRef.current.rotation.z = elapsedTime * 0.01;
  });

  return (
    <group ref={globeRef} position={[0, -3.5, 0]}>
      <Icosahedron args={[4, 3]}>
        <meshBasicMaterial 
          color="#ffffff" // Líneas blancas/claras para contrastar con tu fondo azul
          wireframe={true}
          transparent={true}
          opacity={0.15} // Opacidad baja para que sea sutil y elegante
        />
      </Icosahedron>
      <Sphere args={[3.95, 32, 32]}>
        {/* El color de esta esfera interna debe coincidir con el fondo oscuro */}
        <meshBasicMaterial color="#020826" /> 
      </Sphere>
    </group>
  );
};

// 2. La sección completa de Contacto
export default function ContactSection() {
  return (
      <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '80%', zIndex: 1, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          {/* El fog del mismo color que la parte baja de tu degradado para que se funda */}
          <fog attach="fog" args={['#020826', 3, 7]} />
          <WireframeGlobe />
        </Canvas>
      </div>
  );
}