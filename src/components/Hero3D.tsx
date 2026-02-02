import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { destinations } from '@/lib/data/tours';

function IslandOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#10B981"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      {/* Inner glow */}
      <Sphere args={[1.8, 32, 32]}>
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.3} />
      </Sphere>
    </Float>
  );
}

function DestinationOrbs() {
  const groupRef = useRef<THREE.Group>(null);
  
  const orbs = useMemo(() => {
    return destinations.slice(0, 8).map((dest, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 4;
      return {
        ...dest,
        position: [
          Math.cos(angle) * radius,
          Math.sin(i * 0.5) * 0.5,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        color: ['#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6', '#EF4444', '#06B6D4', '#F97316'][i],
      };
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <Float key={orb.name} speed={1 + i * 0.1} floatIntensity={0.3}>
          <mesh position={orb.position}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial
              color={orb.color}
              emissive={orb.color}
              emissiveIntensity={0.5}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#F59E0B" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10B981" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#FBBF24"
      />
      <IslandOrb />
      <DestinationOrbs />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
    </>
  );
}

export function Hero3D() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-hero">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ocean-deep/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-sunset-gold/30 bg-sunset-gold/10 px-6 py-2 text-sm font-manrope tracking-widest text-sunset-gold uppercase">
            Premium Sri Lanka Tours 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="heading-xl text-silk-white mb-6 max-w-5xl"
        >
          Your Gateway{' '}
          <span className="text-gradient-gold">to Paradise</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="body-lg text-silk-cream/80 mb-12 max-w-2xl"
        >
          Let Sri Lanka enchant you with its stunning beauty, rich culture, and warm hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#tours" className="btn-gold">
            Find Your Tour
          </a>
          <a href="#packages" className="btn-outline-gold">
            Explore Packages
          </a>
        </motion.div>

        {/* Category quick links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {['Beaches', 'Culture', 'Wildlife', 'Romance'].map((cat) => (
            <a
              key={cat}
              href={`#${cat.toLowerCase()}`}
              className="group flex items-center gap-2 text-silk-cream/60 transition-colors hover:text-sunset-gold"
            >
              <span className="h-1 w-1 rounded-full bg-sunset-gold transition-all group-hover:w-8" />
              <span className="font-manrope text-sm tracking-wider uppercase">{cat}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-manrope tracking-widest text-silk-cream/40 uppercase">
            Scroll to explore
          </span>
          <div className="h-12 w-6 rounded-full border-2 border-silk-cream/20 p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-sunset-gold"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
