import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshProps } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

export function Torus(props: MeshProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      
      if (hovered) {
        meshRef.current.scale.lerp(new Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = 'default';
      }}
    >
      <torusGeometry args={[0.5, 0.2, 32, 64]} />
      <meshStandardMaterial
        color={hovered ? '#db2777' : '#be185d'}
        roughness={0.3}
        metalness={0.7}
        emissive={hovered ? '#f472b6' : '#831843'}
        emissiveIntensity={hovered ? 0.5 : 0.2}
      />
    </mesh>
  );
}