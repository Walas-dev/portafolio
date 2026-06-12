import React, { useRef, useMemo, useState, useEffect} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function UseIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

function StructuredNetwork({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);

  const { nodePositions, threadConnections } = useMemo(() => {
    const positions = [];
    const connections = [];
    const cols = isMobile ? 8 : 16;        
    const rows = isMobile ? 22 : 16;     
    const spacingX = isMobile ? 1.0 : 1.2; 
    const spacingY = isMobile ? 1.0 : 1.2;
    const centerVoid = isMobile ? 1.2 : 3.5;

    for (let side = 0; side < 2; side++) {
      const direction = side === 0 ? -1 : 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = direction * (centerVoid + (c * spacingX));
          const y = (r - rows / 2) * spacingY;
          const z = Math.sin(y * 0.5) * 0.5 + Math.cos(x * 0.5) * 0.5; 

          positions.push(new THREE.Vector3(x, y, z));
        }
      }
    }

    const maxDistance = Math.sqrt(spacingX * spacingX + spacingY * spacingY) + 0.1;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const distance = positions[i].distanceTo(positions[j]);
        
        if (distance < maxDistance && Math.sign(positions[i].x) === Math.sign(positions[j].x)) {
          connections.push(positions[i], positions[j]);
        }
      }
    }

    return { nodePositions: positions, threadConnections: connections };
  }, [isMobile]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={new THREE.BufferGeometry().setFromPoints(nodePositions)}>
        <PointMaterial 
          color="#111111" 
          size={isMobile ? 0.2 : 0.15}
          sizeAttenuation={true} 
          transparent 
          opacity={0.9}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {threadConnections.length > 0 && (
        <lineSegments geometry={new THREE.BufferGeometry().setFromPoints(threadConnections)}>
          <lineBasicMaterial 
            color="#111111" 
            transparent 
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
      )}
    </group>
  );
}

export default function NetworkScene() {
  const isMobile = UseIsMobile(); 
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, isMobile ? 16 : 12], fov: 50 }}>
        <StructuredNetwork isMobile={isMobile} />
      </Canvas>
    </div>
  );
}