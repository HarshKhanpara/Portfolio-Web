import { PageTransition } from '../components/PageTransition';
import { Scene } from '../components/Scene';
import { Content } from '../components/Content';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Stats } from '../components/Stats';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from '../components/Loader';

export function HomePage() {
  return (
    <PageTransition>
      <div className="relative">
        <section className="relative h-screen">
          <Suspense fallback={<Loader />}>
            <Canvas
              camera={{ position: [0, 0, 8] }}
              className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800 min-h-screen bg-pattern"
            >
              <Scene />
            </Canvas>
          </Suspense>
          <Content />
        </section>
        <section className="relative z-10 bg-gradient-to-r from-black via-gray-900 to-gray-800 min-h-screen bg-pattern">
          <Stats />
          <Experience />
          {/* <CodeGame /> */}
          <Skills />
        </section>
      </div>
    </PageTransition>
  );
}