import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 1. Componente del Mini Mundo 3D: Red Estructurada
function StructuredNetwork() {
  const groupRef = useRef<THREE.Group>(null!);

  // Construcción de la Matriz Exacta (Cero Aleatoriedad)
  const { nodePositions, threadConnections } = useMemo(() => {
    const positions = [];
    const connections = [];
    
    const cols = 16;        // Columnas por lado
    const rows = 16;       // Filas verticales
    const spacingX = 1.2;  // Espaciado horizontal
    const spacingY = 1.2;  // Espaciado vertical
    const centerVoid = 3.5; // Pasillo central milimétricamente despejado

    // Generación de Nodos (Cuadrícula Matemática)
    for (let side = 0; side < 2; side++) {
      const direction = side === 0 ? -1 : 1; // -1 para izquierda, 1 para derecha
      
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = direction * (centerVoid + (c * spacingX));
          const y = (r - rows / 2) * spacingY;
          // Ondulación perfecta basada en geometría, no en azar
          const z = Math.sin(y * 0.5) * 0.5 + Math.cos(x * 0.5) * 0.5; 

          positions.push(new THREE.Vector3(x, y, z));
        }
      }
    }

    // Generación de Hilos (Conectando solo nodos adyacentes)
    const maxDistance = Math.sqrt(spacingX * spacingX + spacingY * spacingY) + 0.1;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const distance = positions[i].distanceTo(positions[j]);
        
        // Conexión estricta de red cristalina
        if (distance < maxDistance && Math.sign(positions[i].x) === Math.sign(positions[j].x)) {
          connections.push(positions[i], positions[j]);
        }
      }
    }

    return { nodePositions: positions, threadConnections: connections };
  }, []);

  // Animación: Pulso rítmico y fluido (Onda senoidal) en lugar de titileo caótico
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      // Movimiento vertical de respiración muy sutil
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* CAPA A: Nodos Estructurados */}
      <points geometry={new THREE.BufferGeometry().setFromPoints(nodePositions)}>
        <PointMaterial 
          color="#111111" 
          size={0.15} 
          sizeAttenuation={true} 
          transparent 
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* CAPA B: Hilos Geométricos */}
      {threadConnections.length > 0 && (
        <lineSegments geometry={new THREE.BufferGeometry().setFromPoints(threadConnections)}>
          <lineBasicMaterial 
            color="#111111" // amber-500
            transparent 
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
      )}
    </group>
  );
}

// 2. Exportamos el Escenario
export default function NetworkScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <StructuredNetwork />
      </Canvas>
    </div>
  );
}