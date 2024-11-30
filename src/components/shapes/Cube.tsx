import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshProps } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

export function Cube(props: MeshProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;

      // Update scale smoothly based on hover state
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const handlePointerEnter = (e: any) => {
    e.stopPropagation(); // Prevent event bubbling
    console.log('hovered');
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerLeave = () => {
    setHovered(false);
    console.log('unhovered');
    document.body.style.cursor = 'default';
  };

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? '#6366f1' : '#4338ca'}
        roughness={0.2}
        metalness={0.8}
        emissive={hovered ? '#818cf8' : '#1e1b4b'}
        emissiveIntensity={hovered ? 0.4 : 0.2}
      />
    </mesh>
  );
}
