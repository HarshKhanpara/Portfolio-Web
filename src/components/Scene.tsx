import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Stars, Text3D, Center, useMatcapTexture } from '@react-three/drei';
import { Mesh, Group, Vector3 } from 'three';
import { Cube } from './shapes/Cube';
import { Sphere } from './shapes/Sphere';
import { Torus } from './shapes/Torus';
import { useMousePosition } from '../hooks/useMousePosition';

export function Scene() {
  const groupRef = useRef<Group>(null);
  const starsRef = useRef<Group>(null);
  const mousePosition = useMousePosition();
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);
  const [hoveredShape, setHoveredShape] = useState<string | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth camera movement based on mouse position
      const targetX = (mousePosition.x * 0.1);
      const targetY = (-mousePosition.y * 0.1);
      
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.02;
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.02;
    }
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  const handleShapeHover = (shape: string) => {
    setHoveredShape(shape);
  };

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <Environment preset="night" />
      
      <Stars 
        ref={starsRef} 
        radius={50} 
        depth={50} 
        count={5000} 
        factor={4} 
        fade 
        speed={1} 
      />
      
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <group ref={groupRef}>
        <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2}>
          <Cube 
            position={[-2, 0, 0]} 
            scale={hoveredShape === 'cube' ? 1.4 : 1.2}
            onPointerEnter={() => handleShapeHover('cube')}
            onPointerLeave={() => handleShapeHover(null)}
          />
          <Center position={[-2, -2, 0]}>
            <Text3D
              font="/fonts/inter_bold.json"
              size={0.2}
              height={0.1}
              curveSegments={12}
            >
              Frontend
              <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
          </Center>
        </Float>

        <Float speed={1.2} rotationIntensity={1.2} floatIntensity={2}>
          <Sphere 
            position={[0, 0, 0]} 
            scale={hoveredShape === 'sphere' ? 1.3 : 1.1}
            onPointerEnter={() => handleShapeHover('sphere')}
            onPointerLeave={() => handleShapeHover(null)}
          />
          <Center position={[0, -2, 0]}>
            <Text3D
              font="/fonts/inter_bold.json"
              size={0.2}
              height={0.1}
              curveSegments={12}
            >
              Backend
              <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
          </Center>
        </Float>

        <Float speed={1.6} rotationIntensity={1.8} floatIntensity={2}>
          <Torus 
            position={[2, 0, 0]} 
            scale={hoveredShape === 'torus' ? 1.5 : 1.3}
            onPointerEnter={() => handleShapeHover('torus')}
            onPointerLeave={() => handleShapeHover(null)}
          />
          <Center position={[2, -2, 0]}>
            <Text3D
              font="/fonts/inter_bold.json"
              size={0.2}
              height={0.1}
              curveSegments={12}
            >
              DevOps
              <meshMatcapMaterial matcap={matcapTexture} />
            </Text3D>
          </Center>
        </Float>
      </group>
    </>
  );
}