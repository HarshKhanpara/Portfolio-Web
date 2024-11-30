import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshProps } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';

export function Sphere(props: MeshProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      
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
        confirm('hovered');
        document.body.style.cursor = 'pointer';
      }}
      onPointerLeave={() => {
        setHovered(false);
        confirm('unhovered');
        document.body.style.cursor = 'default';
      }}
    >
      <sphereGeometry args={[0.6, 64, 64]} />
      <meshStandardMaterial
        color={hovered ? '#0ea5e9' : '#0891b2'}
        roughness={0.1}
        metalness={0.9}
        emissive={hovered ? '#38bdf8' : '#164e63'}
        emissiveIntensity={hovered ? 0.5 : 0.3}
      />
    </mesh>
  );
}